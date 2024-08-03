"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface Prompt {
  adjective: string;
  noun: string;
  action: string;
}

const GeneratePromptPage = () => {
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePrompt = async () => {
    setIsGenerating(true);
    // Simulate API call to Pyth Entropy and prompt generation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setPrompt({
      adjective: "ethereal",
      noun: "cityscape",
      action: "dissolving",
    });
    setIsGenerating(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Generate Your Creative Prompt</h1>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex justify-center mb-4">
            {isGenerating ? (
              <motion.div
                className="w-16 h-16 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            ) : (
              <Button onClick={generatePrompt} size="lg">
                Generate Prompt
              </Button>
            )}
          </div>

          {prompt && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Your Prompt:</h2>
              <p className="text-xl">
                {`${prompt.adjective} ${prompt.noun} ${prompt.action}`}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {prompt && (
        <Tabs defaultValue="visualize">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="visualize">Visualize</TabsTrigger>
            <TabsTrigger value="explore">Explore</TabsTrigger>
            <TabsTrigger value="mint">Mint NFT</TabsTrigger>
          </TabsList>
          <TabsContent value="visualize">
            {/* Add AI-generated imagery here */}
            <p>AI-generated imagery based on your prompt would appear here.</p>
          </TabsContent>
          <TabsContent value="explore">
            <p>
              Explore similar prompts or see what others have created with this
              prompt.
            </p>
          </TabsContent>
          <TabsContent value="mint">
            <Button>Mint this Prompt as NFT</Button>
          </TabsContent>
        </Tabs>
      )}

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Prompts</h3>
        {/* Add a list or grid of recent prompts here */}
      </div>
    </div>
  );
};

export default GeneratePromptPage;
