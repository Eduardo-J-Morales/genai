import {RecipeCard } from '@/app/components/RecipeCard'
import { ChefHat, Plus, X, Loader2 } from 'lucide-react';
import { generateRecipe } from '@/app/services/opeai'

export default function Home() {
  return (
   <RecipeCard title='algo' instructions={['1','2','3']} ingredients={['1','2','3']}/>
  );
}
