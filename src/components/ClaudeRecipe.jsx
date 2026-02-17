import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function ClaudeRecipe(props) {
    return (
        <section className="mb-12" aria-live="polite">
            <h2 className="text-2xl font-bold mb-6 text-chef-black font-inter tracking-tight">Chef Claude Recommends:</h2>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm animate-in fade-in duration-700">
                <article className="prose prose-slate max-w-none text-lg text-[#475569] leading-relaxed">
                    <ReactMarkdown>
                        {props.recipe}
                    </ReactMarkdown>
                </article>
            </div>
        </section>
    );
}
