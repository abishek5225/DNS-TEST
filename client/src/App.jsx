import React, { useState, useEffect } from 'react';
import './App.css';

const quotes = [
  "You came empty-handed, and you will leave empty-handed.",
  "A person who is not disturbed by happiness and distress is eligible for liberation.",
  "Change is the law of the universe. You can be a millionaire or a pauper in an instant.",
  "Man is made by his belief. As he believes, so he is.",
  "Do your duty, but don’t concern yourself with the results.",
  "You have the right to work, but never to the fruit of work.",
  "Detachment from material things is the way to inner peace.",
  "The soul is neither born nor does it ever die.",
  "He who has no attachments can truly love.",
  "There is neither this world, nor the world beyond, nor happiness for the one who doubts.",
  "The one who sees inaction in action and action in inaction is wise.",
  "To the illumined man or woman, a clod of dirt, a stone, and gold are the same.",
  "Be steadfast in yoga, O Arjuna. Perform your duty and abandon all attachment to success or failure.",
  "Better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection.",
  "A gift is pure when it is given from the heart to the right person at the right time and place.",
  "The wise unify their consciousness and abandon attachment to the fruits of actions.",
  "Whatever happened, happened for the good. Whatever is happening, is happening for the good.",
  "Let not your peace be disturbed by external things.",
  "Perform all work carefully, guided by compassion.",
  "The mind is restless and difficult to restrain, but it is subdued by practice.",
  "Even a leaf, a flower, a fruit, or water offered to Me with devotion is accepted by Me.",
  "He who sees Me everywhere and sees everything in Me is never lost to Me.",
  "One who eats too much or eats too little, sleeps too much or sleeps too little, cannot be a yogi.",
  "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
  "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions."
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [lastQuotes, setLastQuotes] = useState([]);

  const showRandomQuote = () => {
    let newQuote = quote;
    while (newQuote === quote) {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }

    setLastQuotes((prev) => [quote, ...prev.slice(0, 2)]); // track last 3
    setQuote(newQuote);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showRandomQuote();
    }, 10000); // auto-change every 10s
    return () => clearInterval(interval);
  }, [quote]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e30] via-[#2f2f4f] to-[#1e1e30] text-white flex flex-col items-center justify-center px-4 py-12 transition-all duration-1000 ease-in-out">
      
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-yellow-300 drop-shadow-md tracking-wide font-serif animate-fadeIn">
        🕉️ Divine Quote Generator 🕉️
      </h1>

      <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-8 max-w-2xl text-center text-xl sm:text-2xl md:text-3xl font-medium shadow-xl animate-fadeIn transition-all duration-500 ease-in-out">
        <p className="italic">{quote}</p>
      </div>

      <button
        onClick={showRandomQuote}
        className="mt-10 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-lg animate-fadeIn"
      >
        ✨ Inspire Me
      </button>

      {lastQuotes.length > 0 && (
        <div className="mt-12 max-w-xl text-center animate-fadeIn">
          <h2 className="text-lg font-semibold text-gray-300 mb-2">Previous Quotes:</h2>
          <ul className="space-y-2 text-sm text-gray-400 italic">
            {lastQuotes.map((q, index) => (
              <li key={index}>❝ {q} ❞</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
