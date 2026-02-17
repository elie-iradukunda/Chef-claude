import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention, but try to use as many as possible. The recipe can include additional ingredients that a typical kitchen would probably have, such as salt, pepper, water, oil, or sugar.

You should format your response in markdown so that it is easy to read.
`;

// 🚨 NOTE: In a real production app, NEVER expose your API key like this!
// Use a backend proxy or environment variables.
const anthropic = new Anthropic({
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
});

export async function getRecipeFromClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    const response = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            {
                role: "user",
                content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
            },
        ],
    });

    return response.content[0].text;
}
