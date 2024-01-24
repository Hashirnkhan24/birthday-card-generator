import { useState } from 'react'
import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'

function App() {
  const [name, setName] = useState('')
  const [showCards, setShowCards] = useState(false)

  const addCard = () => {
    setShowCards(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-500 to-red-500">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Birthday Card Generator</h1>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addCard}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition duration-300"
        >
          Generate Cards
        </button>
        {showCards && (
          <div className="mt-8 space-y-4">
            <Card1 name={name} />
            <Card2 name={name} />
            <Card3 name={name} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App
