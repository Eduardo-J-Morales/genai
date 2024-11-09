import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';

interface RecipeCardProps {
    title: string;
    ingredients: string[];
    instructions: string[];
    cookingTime?: string;
    servings?: number;
    difficulty?: string;
  }