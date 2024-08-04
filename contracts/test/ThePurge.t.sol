// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "forge-std/Test.sol";
import "../src/ThePurge.sol";

contract ThePurgeTest is Test {
    ThePurge private thePurge;

    address player1 = address(0x123);
    address player2 = address(0x456);

    event ProfileCreated(address indexed player, uint256 basePower);
    event BattleInitiated(address indexed attacker, address indexed defender);
    event BattleResolved(
        address indexed winner,
        address indexed loser,
        uint256 powerAbsorbed
    );

    function setUp() public {
        thePurge = new ThePurge();
        thePurge.initialize();
    }

    function testCreateProfile() public {
        vm.startPrank(player1);

        // Check event emission
        vm.expectEmit(true, false, false, true);
        emit ProfileCreated(player1, 0); // Base power will be overwritten by the actual value

        thePurge.createProfile();

        ThePurge.Player memory player = thePurge.getPlayerProfile(player1);
        assertEq(player.exists, true, "Profile should exist");
        assertGt(player.basePower, 0, "Base power should be greater than 0");

        vm.stopPrank();
    }

    function testProfileAlreadyExists() public {
        vm.startPrank(player1);
        thePurge.createProfile();

        vm.expectRevert("Profile already exists");
        thePurge.createProfile();
        vm.stopPrank();
    }

    function testInitiateBattle() public {
        // Set up player profiles
        vm.prank(player1);
        thePurge.createProfile();

        vm.prank(player2);
        thePurge.createProfile();

        // Start battle
        vm.startPrank(player1);

        vm.expectEmit(true, true, false, true);
        emit BattleInitiated(player1, player2);

        thePurge.initiateBattle(player2);

        ThePurge.Player memory attacker = thePurge.getPlayerProfile(player1);
        ThePurge.Player memory defender = thePurge.getPlayerProfile(player2);

        // Verify last battle time is updated
        assertEq(
            attacker.lastBattleTime,
            block.timestamp,
            "Attacker's lastBattleTime should be updated"
        );
        assertEq(
            defender.lastBattleTime,
            block.timestamp,
            "Defender's lastBattleTime should be updated"
        );

        vm.stopPrank();
    }

    function testCooldownNotOver() public {
        // Set up player profiles
        vm.prank(player1);
        thePurge.createProfile();

        vm.prank(player2);
        thePurge.createProfile();

        // Start battle
        vm.prank(player1);
        thePurge.initiateBattle(player2);

        // Attempt another battle before cooldown
        vm.prank(player1);
        vm.expectRevert("Cooldown period not over");
        thePurge.initiateBattle(player2);
    }
}
