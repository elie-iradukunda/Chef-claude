import React from 'react';

export default function IngredientsList(props) {
    const { ingredients, getRecipe, isLoading } = props;

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient} className="text-blue-500 py-1.5 flex items-center text-lg before:content-['•'] before:mr-3 before:text-[#475569] before:text-xl">
            {ingredient}
        </li>
    ));

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-chef-black font-inter tracking-tight">Ingredients on hand:</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-10">
                {ingredientsListItems}
            </ul>
            
            {ingredients.length >= 3 && (
                <div className="bg-blue-400 p-8 rounded-xl flex flex-col  justify-between items-center gap-6 border border-[#E0DFD5] animate-in fade-in duration-500">
                    <div>
                        <h3 className="text-lg font-bold text-chef-black mb-1">Ready for a recipe?</h3>
                        <p className="text-gray-600 text-sm">Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button 
                        onClick={getRecipe}
                        disabled={isLoading}
                        className="bg-chef-orange text-white px-8 py-2.5 rounded-md font-medium hover:bg-[#C06547] transition-all shadow-md active:scale-95 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Generating..." : "Get a recipe"}
                    </button>
                </div>
            )}
        </section>
    );
}
