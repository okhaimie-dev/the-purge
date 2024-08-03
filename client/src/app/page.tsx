import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ConnectButton />
        <h1 className="text-4xl font-bold mb-4">RandomMuse</h1>

        <Tabs defaultValue="generate">
          <TabsList>
            <TabsTrigger value="generate">Generate</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>
          <TabsContent value="generate">
            <Card>
              <CardHeader>
                <CardTitle>Generate a New Prompt</CardTitle>
                <CardDescription>
                  Click the button to generate a random creative prompt
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Generate Prompt</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="gallery">
            {/* Gallery content here */}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
