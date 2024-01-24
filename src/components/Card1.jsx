function Card1({name}) {
    return (
        <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-lg shadow-md text-white">
          <h2 className="text-3xl font-bold mb-4">🎉 Happy Birthday, {name}! 🎉</h2>
          <p className="text-lg">Wishing you a fantastic day filled with joy and laughter. May all your dreams come true!</p>
        </div>
      );
}

export default Card1