import React, { useState } from 'react'
import { ChefHat, Plus, X, Loader2 } from 'lucide-react';
import { generateRecipe } from '@/app/services/opeai'
import {RecipeCard } from '@/app/components/RecipeCard'

export default function Home() {
  const [ ingredients, setIngredients ] = useState<string[]>([]);
  const [ currentIngredient, setCurrentIngredient] = useState('');

  
  return (
   <RecipeCard title='algo' instructions={['1','2','3']} ingredients={['1','2','3']}/>
  );
}
