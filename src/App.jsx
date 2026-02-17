import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFB] font-inter flex flex-col">
      <Header />
      <Main />
      <footer className="mt-auto py-10 text-center text-gray-400 text-sm border-t border-gray-100 bg-white">
        <p>&copy; {new Date().getFullYear()} Chef Claude. Built with React & Tailwind CSS v3.</p>
      </footer>
    </div>
  );
}

export default App;
