import OpenAI from 'openai'

const  OPENAI_API_KEY = ''

export const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

export const generateRecipe = async (ingredients: string[]) => {
    try {

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are professional chef who creates recipes based on available ingredients."
                }
            ]
        })

    } catch(error) {
        console.error('Error generating recipe:', error);
        throw error
    }
}