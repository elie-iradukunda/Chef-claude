/**
 * This is a "Smart Mock" API that works for FREE with zero setup.
 * It uses TheMealDB (a free recipe database) to find real recipes
 * and formats them to look like they came from Chef Claude.
 */

export async function getRecipeFromClaude(ingredientsArr) {
    // 1. We take the first ingredient to search for a real recipe
    const mainIngredient = ingredientsArr[0].toLowerCase().trim().replace(" ", "_");
    
    try {
        // Fetch a list of meals with that ingredient
        const listResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngredient}`);
        const listData = await listResponse.json();

        if (!listData.meals || listData.meals.length === 0) {
            throw new Error("No recipes found");
        }

        // Pick the first meal found
        const mealId = listData.meals[0].idMeal;

        // Fetch the full details for that meal
        const detailResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const detailData = await detailResponse.json();
        const meal = detailData.meals[0];

        // 2. Format it into Markdown like Claude would!
        let recipeMarkdown = `Based on your ingredients, I suggest making **${meal.strMeal}**!\n\n`;
        
        recipeMarkdown += `### Ingredients\n`;
        // TheMealDB lists ingredients like strIngredient1, strIngredient2...
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== "") {
                recipeMarkdown += `* ${measure} ${ingredient}\n`;
            }
        }

        recipeMarkdown += `\n### Instructions\n`;
        recipeMarkdown += meal.strInstructions;

        return recipeMarkdown;

    } catch (error) {
        // FALLBACK: If the API fails or no recipe is found, we give a generic high-quality response
        return `I couldn't find a specific recipe for "${mainIngredient}" in my database, but here is a simple **Generic Stir-Fry** you can make with your ${ingredientsArr.join(", ")}:
        
### Ingredients
* ${ingredientsArr.join("\n* ")}
* 2 tbsp Soy Sauce
* 1 tbsp Oil
* Salt & Pepper

### Instructions
1. Chop all your ingredients into bite-sized pieces.
2. Heat oil in a large pan over medium-high heat.
3. Add your ingredients and sauté for 5-7 minutes.
4. Stir in the soy sauce and season with salt and pepper.
5. Serve hot and enjoy!`;
    }
}
