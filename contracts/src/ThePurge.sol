// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin-upgradeable/contracts/access/OwnableUpgradeable.sol";
import "@openzeppelin-upgradeable/contracts/utils/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin-upgradeable/contracts/proxy/utils/Initializable.sol";

contract ThePurge is
    Initializable,
    OwnableUpgradeable,
    ReentrancyGuardUpgradeable
{
    struct Player {
        bool exists;
        uint256 basePower;
        uint256 absorbedPower;
        uint256 wins;
        uint256 losses;
        uint256 lastBattleTime;
    }

    mapping(address => Player) public players;
    address[] public playerAddresses;

    uint256 public constant COOLDOWN_PERIOD = 1 hours;
    uint256 public constant MAX_PLAYERS = 1000;
    uint256 public constant MIN_POWER = 10;
    uint256 public constant POWER_RECOVERY_RATE = 1; // power recovered per hour

    event ProfileCreated(address indexed player, uint256 basePower);
    event BattleInitiated(address indexed attacker, address indexed defender);
    event BattleResolved(
        address indexed winner,
        address indexed loser,
        uint256 powerAbsorbed
    );

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        __Ownable_init(msg.sender); // No arguments are actually needed
        __ReentrancyGuard_init();
    }

    // Placeholder for Pyth Entropy integration
    function getRandomNumber() internal view returns (uint256) {
        // TODO: Implement actual Pyth Entropy integration
        return
            (uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) %
                91) + 10; // 10-100 range
    }

    /// @notice Creates a new player profile
    function createProfile() external {
        require(!players[msg.sender].exists, "Profile already exists");
        require(
            playerAddresses.length < MAX_PLAYERS,
            "Maximum number of players reached"
        );

        uint256 basePower = getRandomNumber();
        players[msg.sender] = Player(true, basePower, 0, 0, 0, block.timestamp);
        playerAddresses.push(msg.sender);

        emit ProfileCreated(msg.sender, basePower);
    }

    /// @notice Initiates a battle between the caller and the defender
    /// @param defender The address of the defending player
    function initiateBattle(address defender) external nonReentrant {
        require(players[msg.sender].exists, "Attacker profile doesn't exist");
        require(players[defender].exists, "Defender profile doesn't exist");
        require(msg.sender != defender, "Cannot battle yourself");
        require(
            block.timestamp >=
                players[msg.sender].lastBattleTime + COOLDOWN_PERIOD,
            "Cooldown period not over"
        );

        emit BattleInitiated(msg.sender, defender);

        resolveBattle(msg.sender, defender);
    }

    /// @notice Resolves the battle between two players
    /// @param attacker The address of the attacking player
    /// @param defender The address of the defending player
    function resolveBattle(address attacker, address defender) internal {
        Player storage attackerPlayer = players[attacker];
        Player storage defenderPlayer = players[defender];

        uint256 attackerPower = calculateCurrentPower(attackerPlayer);
        uint256 defenderPower = calculateCurrentPower(defenderPlayer);

        address winner;
        address loser;
        uint256 powerAbsorbed;

        if (attackerPower > defenderPower) {
            winner = attacker;
            loser = defender;
            powerAbsorbed = defenderPower / 2;
            attackerPlayer.absorbedPower += powerAbsorbed;
            defenderPlayer.absorbedPower = defenderPlayer.absorbedPower >
                powerAbsorbed
                ? defenderPlayer.absorbedPower - powerAbsorbed
                : 0;
        } else {
            winner = defender;
            loser = attacker;
            powerAbsorbed = attackerPower / 2;
            defenderPlayer.absorbedPower += powerAbsorbed;
            attackerPlayer.absorbedPower = attackerPlayer.absorbedPower >
                powerAbsorbed
                ? attackerPlayer.absorbedPower - powerAbsorbed
                : 0;
        }

        players[winner].wins++;
        players[loser].losses++;
        attackerPlayer.lastBattleTime = block.timestamp;

        emit BattleResolved(winner, loser, powerAbsorbed);
    }

    /// @notice Calculates the current power of a player, including power recovery
    /// @param player The player struct
    /// @return The current power of the player
    function calculateCurrentPower(
        Player storage player
    ) internal view returns (uint256) {
        uint256 timeSinceLastBattle = block.timestamp - player.lastBattleTime;
        uint256 recoveredPower = (timeSinceLastBattle / 1 hours) *
            POWER_RECOVERY_RATE;
        uint256 totalPower = player.basePower +
            player.absorbedPower +
            recoveredPower;
        return totalPower > MIN_POWER ? totalPower : MIN_POWER;
    }

    /// @notice Retrieves a player's profile
    /// @param player The address of the player
    /// @return The player's profile
    function getPlayerProfile(
        address player
    ) external view returns (Player memory) {
        require(players[player].exists, "Profile doesn't exist");
        return players[player];
    }

    /// @notice Retrieves the total number of players
    /// @return The number of players
    function getPlayerCount() external view returns (uint256) {
        return playerAddresses.length;
    }

    // Additional functions for game management can be added here
}
