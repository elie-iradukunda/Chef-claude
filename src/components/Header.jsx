import React from 'react';
import { ChefHat } from 'lucide-react';

export default function Header() {
    return (
        <header className="flex justify-center items-center gap-3 py-6 bg-white shadow-sm border-b border-gray-100">
            <ChefHat className="w-10 h-10 text-chef-orange" />
            <h1 className="text-3xl font-bold tracking-tight text-chef-black">Chef Claude</h1>
        </header>
    );
}
