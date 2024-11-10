import OpenAI from "openai";

const OPENAI_API_KEY = "";

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const generateRecipe = async (ingredients: string[]) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are professional chef 
                    who creates recipes based on available ingredients. 
                    Provide detailed, 
                    creative recipes that are both delicious and practical.`,
        },
        {
          role: "user",
          content: `I have these ingredients: ${ingredients.join(
            ", "
          )}. Please suggest a recipe in JSON format
                    with the following structure: { title: string, ingredients: string[], instructions: string[],
                    cookingTime: string, servings: nomber, difficulty: string}`,
        },
      ],
      temperature: 0.7,
    });

    const recipe = JSON.parse(response.choices[0].message.content || "{}");
    return recipe;
  } catch (error) {
    console.error("Error generating recipe:", error);
    throw error;
  }
};
