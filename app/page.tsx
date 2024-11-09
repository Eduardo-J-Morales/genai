'use client'

import React, { useState} from 'react'
import { ChefHat, Plus, X, Loader2 } from 'lucide-react';
import { generateRecipe } from '@/app/services/opeai'
import { RecipeCard } from '@/app/components/RecipeCard'

export default function Home() {
  const [ ingredients, setIngredients ] = useState<string[]>([]);
  const [ currentIngredient, setCurrentIngredient] = useState('');
  const [ recipe, setRecipe ] = useState<any>(null)
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ error, setError ] = useState('');

  const handleAddIngredient = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentIngredient.trim()) {
      setIngredients([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient('')
    }

  const hadleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i!==index))
  }

  const handleGenerateRecipe = async () => {
    
  }

  
  
  return (
   <RecipeCard title='algo' instructions={['1','2','3']} ingredients={['1','2','3']}/>
  );
}
