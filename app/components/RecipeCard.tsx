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

  export const RecipeCard: React.FC<RecipeCardProps> = ({
    title,
    ingredients,
    instructions,
    cookingTime = '30 mins',
    servings = 4,
    difficulty = 'Medium',
  }) => {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
          
          <div className="flex items-center gap-4 mb-6 text-gray-600">
      
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{cookingTime}</span>
            </div>
      
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{servings} servings</span>
            </div>
      
            <div className="flex items-center gap-1">
              <ChefHat className="w-4 h-4" />
              <span>{difficulty}</span>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              Ingredients:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {ingredients.map((ingredient,index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>  
          </div>
          
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  Instructions:
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  {instructions.map((instruction) => (
                    <li>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          )
          }