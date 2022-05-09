import "./App.css";
import Lists from "./Lists";
import { useEffect, useState } from "react";

function App() {
  const [currentitem, setItem] = useState('');
  const [updata, setUpdata] = useState([]);

  
  // get data with localStorage
  useEffect(() => {
    if (localStorage.getItem("myData")) {
      const storedList = JSON.parse(localStorage.getItem("myData"));
      console.log(storedList)
      setUpdata(storedList);
    }
  }, []);

  const chenging = (e) => {
    console.log("chengin input", e.target.value);
    setItem(e.target.value);
  };

  const addItam = () => {
    const newWork = { item: currentitem, key: Date.now() }
    setUpdata([...updata, newWork]);
    setItem("");
    console.log("setUpdata is =", updata, currentitem);

    // set data with localStorage storege
    localStorage.setItem("myData", JSON.stringify([...updata, newWork]));
  };

  return (
    <div className="todo-list">
      <div className="todo">
        <div className="input">
          <input
            value={currentitem}
            onChange={chenging}
            type="text"
            placeholder="add note"
          />
          <button onClick={addItam}>+</button>
        </div>
        <Lists updata={updata} setUpdata={setUpdata} />
      </div>
    </div>
  );
}

export default App;
