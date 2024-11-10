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
      <div className="max-w-4xl mx-auto p-6">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ChefHat className="w-12 h-12 text-indigo-600"></ChefHat>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2"> AI Recipe Suggester</h1>
          <p className="text-gray-600">Tell us what ingredients you have, and we'll suggest the perfect recipe1!
          </p>
        </header>
      
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <form onSubmit={handleAddIngredient} className="mb-6">
          <div className="flex gap-2">
            <input
            type="text"
            value={currentIngredient}
            onChange={(e) => setCurrentIngredient(e.target.value)}
            placeholder="Enter an ingredient"
            className="flex-1 px-4 py-2 "
  
            />
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}
