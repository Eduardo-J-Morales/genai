import OpenAI from 'openai'

const  OPENAI_API_KEY = ''

export const opeani = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

export const generateRecipe = async (ingredients: string[]) => {
    
}