import { useState } from "react";
import "./App.css";

function App() {
  const [fullAnswer, setFullAnswer] = useState("0");
  const [nowAnswer, setnowAnswer] = useState("0");
  const [calculated, setCalculated] = useState(false);

  const hasDot = (text) => text.includes(".");
  const formatResult = (result) => (result.includes(".") ? parseFloat(result).toString() : result);

  const oneStepAnswer = (event) => {
    const value = event.target.getAttribute("value");
  
    if (value === "clear") {
      setFullAnswer("0");
      setnowAnswer("0");
      setCalculated(false);
      return;
    }
  
    if (value === "=") {
      try {
        const result = eval(fullAnswer).toString();
        const formattedResult = formatResult(result);
        setnowAnswer(formattedResult);
        setFullAnswer(formattedResult);
        setCalculated(true);
      } catch (error) {
        setnowAnswer("Error");
        setFullAnswer("Error");
      }
      return;
    }
  
    if (calculated) {
      if (/[\+\-\*\/]/.test(value)) {
        setFullAnswer(nowAnswer + value);
        setnowAnswer(value);
        setCalculated(false);
        return;
      } else {
        setFullAnswer(value);
        setnowAnswer(value);
        setCalculated(false);
        return;
      }
    }
  
    if (/[\+\-\*\/]/.test(value)) {
      if (value === "-" && /[\+\-\*\/]$/.test(fullAnswer)) {
        setFullAnswer(fullAnswer + value);
        setnowAnswer(value);
      } else if (/[\+\-\*\/]{2,}$/.test(fullAnswer)) {
        setFullAnswer(fullAnswer.replace(/[\+\-\*\/]+$/, value));
      } else if (/[\+\*\/\-]$/.test(fullAnswer)) {
        setFullAnswer(fullAnswer.slice(0, -1) + value);
      } else {
        setFullAnswer(fullAnswer + value);
      }
      setnowAnswer(value);
      return;
    }
  
    if (value === ".") {
      if (hasDot(nowAnswer)) return;
      setFullAnswer(fullAnswer + value);
      setnowAnswer(nowAnswer + value);
      return;
    }
  
    if (nowAnswer === "0" && value === "0") return;
    if (nowAnswer === "0" && value !== ".") {
      setFullAnswer(value);
      setnowAnswer(value);
      return;
    }
  
    setFullAnswer(fullAnswer + value);
    setnowAnswer(nowAnswer === "0" ? value : nowAnswer + value);
  };
  

  return (
    <main id="drum-machine" className="flex justify-center items-center h-screen">
      <div className="bg-slate-600">
        <div className="text-white text-2xl m-2">
          <p className="text-right text-yellow-400 text-lg">{fullAnswer}</p>
          <p id="display" className="text-right text-3xl">{nowAnswer}</p>
          <table className="table-auto text-white font-bold text-center">
            <thead>
              <tr>
                <th
                  id="clear"
                  value="clear"
                  colSpan={2}
                  className="bg-red-500 border border-black py-4 px-2 cursor-pointer hover:bg-red-600 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                >
                  AC
                </th>
                <th
                  id="divide"
                  className="bg-gray-500 border border-black px-7 cursor-pointer hover:bg-gray-600 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="/"
                >
                  /
                </th>
                <th
                  id="multiply"
                  className="bg-gray-500 border border-black px-7 cursor-pointer hover:bg-gray-600 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="*"
                >
                  x
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  id="seven"
                  className="bg-gray-800 border border-black px-7 py-4 cursor-pointer hover:bg-gray-700 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="7"
                >
                  7
                </td>
                <td
                  id="eight"
                  className="bg-gray-800 border border-black px-7 cursor-pointer hover:bg-gray-700 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="8"
                >
                  8
                </td>
                <td
                  id="nine"
                  className="bg-gray-800 border border-black px-7 cursor-pointer hover:bg-gray-700 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="9"
                >
                  9
                </td>
                <td
                  id="subtract"
                  className="bg-gray-500 border border-black px-7 cursor-pointer hover:bg-gray-600 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="-"
                >
                  -
                </td>
              </tr>
              <tr>
                <td
                  id="four"
                  className="bg-gray-800 border border-black px-7 py-4 cursor-pointer hover:bg-gray-700 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="4"
                >
                  4
                </td>
                <td
                  id="five"
                  className="bg-gray-800 border border-black px-7 cursor-pointer hover:bg-gray-700 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="5"
                >
                  5
                </td>
                <td
                  id="six"
                  className="bg-gray-800 border border-black px-7 cursor-pointer hover:bg-gray-700 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="6"
                >
                  6
                </td>
                <td
                  id="add"
                  className="bg-gray-500 border border-black px-7 cursor-pointer hover:bg-gray-600 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="+"
                >
                  +
                </td>
              </tr>
              <tr>
                <td
                  id="one"
                  className="bg-gray-800 border border-black px-7 py-4 cursor-pointer hover:bg-gray-700 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="1"
                >
                  1
                </td>
                <td
                  id="two"
                  className="bg-gray-800 border border-black px-7 cursor-pointer hover:bg-gray-700 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="2"
                >
                  2
                </td>
                <td
                  id="three"
                  className="bg-gray-800 border border-black px-7 cursor-pointer hover:bg-gray-700 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="3"
                >
                  3
                </td>
                <td
                  rowSpan={2}
                  id="equals"
                  className="bg-blue-500 border border-black px-7 cursor-pointer hover:bg-blue-600 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="="
                >
                  =
                </td>
              </tr>
              <tr>
                <td
                  id="zero"
                  colSpan={2}
                  className="bg-gray-800 border border-black px-7 py-4 cursor-pointer hover:bg-gray-700 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="0"
                >
                  0
                </td>
                <td
                  id="decimal"
                  className="bg-gray-800 border border-black px-7 cursor-pointer hover:bg-gray-700 hover:border-slate-800 hover:text-black"
                  onClick={oneStepAnswer}
                  value="."
                >
                  .
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default App;
