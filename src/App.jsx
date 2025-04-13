import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function App() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [country, setCountry] = useState("");
  const [score, setScore] = useState("");
  const [data, setData] = useState([]);

  function handleAdd() {
    if (!fName || !lName || !country || !score) {
      alert("Please fill all fields!");
      return;
    }
    const obj = {
      id: Date.now(),
      name: `${fName} ${lName}`,
      country,
      score: Number(score),
    };
    setData([...data, obj]);
    setFname("");
    setLname("");
    setCountry("");
    setScore("");
  }

  function updateScore(id, sign) {
    const updatedScore = data.map((obj) =>
      obj.id === id && sign === "+"
        ? { ...obj, score: obj.score + 1 }
        : { ...obj, score: obj.score - 1 }
    );
    setData(updatedScore);
  }

  function handleDelete(id) {
    setData(data.filter((obj) => obj.id !== id));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-200 via-pink-100 to-yellow-100 p-6">
      <div className="bg-white p-10 rounded-[2rem] shadow-2xl w-full max-w-3xl">
        <h1 className="md:text-5xl font-extrabold text-center text-gray-800 mb-10">
          🏆 Leaderboard
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <input
            type="text"
            placeholder="First Name"
            className="p-3 w-40 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
            value={fName}
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 w-40 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
            value={lName}
            onChange={(e) => setLname(e.target.value)}
          />
          <select
            value={country}
            className="p-3 w-48 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="England">England</option>
            <option value="South Africa">South Africa</option>
            <option value="West Indies">West Indies</option>
            <option value="Australlia">Australia</option>
            <option value="Bangladesh">Bangladesh</option>
          </select>
          <input
            type="number"
            placeholder="Score"
            className="p-3 w-32 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        <div className="text-center mb-12">
          <button
            onClick={handleAdd}
            className="px-10 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-full shadow-md hover:scale-105 hover:shadow-xl transform transition duration-300"
          >
            ➕ Add Player
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between text-lg font-semibold text-gray-700 border-b pb-3 px-2">
            <span>👤 Name</span>
            <span>🏳️ Country</span>
            <span className="pr-20">🎯 Score</span>
            <span></span>
          </div>

          {data.map((obj) => (
            <div
              key={obj.id}
              className="flex justify-between items-center bg-purple-50 p-4 rounded-xl shadow hover:shadow-md transition-all duration-300"
            >
              <span className="text-gray-800 font-medium">{obj.name}</span>
              <span className="text-gray-600">{obj.country}</span>
              <span className="text-purple-700 font-bold pl-12">
                {obj.score}
              </span>

              <div className="flex gap-2 items-center ">
                <button
                  onClick={() => updateScore(obj.id, "+")}
                  className="text-green-600 font-bold border-2 border-green-300 hover:border-green-500 px-2 py-1 rounded-lg transition hover:bg-green-100"
                >
                  +1
                </button>
                <button
                  onClick={() => updateScore(obj.id, "-")}
                  className="text-red-600 font-bold border-2 border-red-300 hover:border-red-500 px-2 py-1 rounded-lg transition hover:bg-red-100"
                >
                  -1
                </button>
                <button
                  onClick={() => handleDelete(obj.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
