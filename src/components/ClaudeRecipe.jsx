import React from "react";

export default function ClaudeRecipe(props) {
    const { ingredients } = props;

    return (
        <section className="mt-10 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Chef Claude Recommends:
            </h2>

            <article
                aria-live="polite"
                className="bg-white rounded-xl shadow-md border border-gray-200 p-8 space-y-6"
            >
                <p className="text-gray-600 leading-relaxed text-lg">
                    Based on your ingredients, I suggest making a delicious{" "}
                    <strong className="text-gray-900">Garlic Chicken</strong>.
                </p>

                <h3 className="text-xl font-semibold text-gray-900">Garlic Chicken</h3>

                <div>
                    <strong className="block mb-2 text-gray-800">Ingredients:</strong>
                    <ul className="list-disc ml-6 space-y-1 text-gray-600">
                        {ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        <li>Salt & Pepper</li>
                        <li>1 tbsp Butter</li>
                    </ul>
                </div>

                <div>
                    <strong className="block mb-2 text-gray-800">Instructions:</strong>
                    <ol className="list-decimal ml-6 space-y-2 text-gray-600 leading-relaxed">
                        <li>Season your chicken breasts with salt and pepper.</li>
                        <li>Heat olive oil and butter in a pan over medium heat.</li>
                        <li>Add the garlic and sauté for 1 minute until fragrant.</li>
                        <li>Add the chicken and cook for 6-8 minutes per side until golden brown.</li>
                        <li>Combine with any other chosen ingredients and serve hot.</li>
                    </ol>
                </div>
            </article>
        </section>
    );
}
