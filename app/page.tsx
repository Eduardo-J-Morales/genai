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

  const handleRemoveIngredient = (index: number) => {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {" "}
            AI Recipe Suggester
          </h1>
          <p className="text-gray-600">
            Tell us what ingredients you have, and we'll suggest the perfect
            recipe1!
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
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg 
            hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Plus />
                Add
              </button>
            </div>
          </form>

          {ingredients.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Your ingredients:
              </h3>
              <div className="flex flex-wrap gap-2">
                {ingredients.map((ingredient, index) => (
                  <span className="inline-flex items-center gap-1 px-3 py-1 
                  bg-indigo-100 text-indigo-800 rounded-full">
                    {ingredient}
                    <button onClick={() => handleRemoveIngredient(index)} className="hover:text-indigo-600"><X className="w-4 h-4"/></button>
                    </span>
               ))}
              </div>
            </div>
          )}

          <button
          onClick={handleGenerateRecipe}
          disabled={loading || ingredients.length == 0}
          className="px-4 py-3 bg-indigo-600 text-white rounded-lg 
          hover:bg-indigo-700 transition-colors 
          disabled:bg-indigo-300 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
              <Loader2 className="w-5 h-5 animate-spin"/>
              Generating Recipe...
              </>
            ): (
              <>
              <ChefHat className="w-5 h-5"/>
              Generate Recipe
              </>
            )}
          </button>

          { error && (
            <p className="mt-4 text-red-600 text-center">{erro}</p>
          )}
        </div>

        {recipe && (
          <RecipeCard
          title={recipe.title}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          cookingTime={recipe.cookingTime}
          servings={recipe.servings}
          difficulty={recipe.difficulty}/>
        )}
      </div>
    </div>
  );
}
