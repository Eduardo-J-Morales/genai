"use client";

import React, { useState } from "react";
import { ChefHat, Plus, X, Loader2 } from "lucide-react";
import { generateRecipe } from "@/app/services/opeai";
import { RecipeCard } from "@/app/components/RecipeCard";

export default function Home() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const handleAddIngredient = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentIngredient.trim()) {
      setIngredients([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient("");
    }
  };

  const hadleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleGenerateRecipe = async () => {
    if (ingredients.length === 0) {
      setError("Please add at least one ingredient");
      return;
      setLoading(true);
      setError("");
      try {
        const generatedRecipe = await generateRecipe(ingredients);
        setRecipe(generatedRecipe);
      } catch (error) {
        setError(
          "Failed to generate recipe. Please check your API key and try again."
        );
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200">
      <div className="max-w-4xl mx-auto p-6"></div>
    </div>
  );
}
