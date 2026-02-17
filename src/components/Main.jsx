import React, { useState } from 'react';
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipeFromClaude } from '../ai';

export default function Main() {
    const [ingredients, setIngredients] = useState(["Chicken breasts", "Olive oil", "Garlic"]);
    const [recipe, setRecipe] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient-input");

        if (newIngredient && !ingredients.includes(newIngredient)) {
            setIngredients([...ingredients, newIngredient]);
            event.currentTarget.reset();
        }
    }

    async function getRecipe() {
        setIsLoading(true);
        try {
            const recipeMarkdown = await getRecipeFromClaude(ingredients);
            setRecipe(recipeMarkdown);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="max-w-2xl mx-auto p-10 font-inter">
            <form onSubmit={handleSubmit} className="flex gap-4 mb-12">
                <input 
                    name="ingredient-input"
                    placeholder="e.g. Rice"
                    className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chef-orange"
                    required
                />
                <button className="bg-chef-black text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 active:scale-95 transition-all">
                    + Add ingredient
                </button>
            </form>

            <IngredientsList 
                ingredients={ingredients} 
                getRecipe={getRecipe} 
                isLoading={isLoading}
            />

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}
