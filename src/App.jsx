import { useEffect, useState } from "react";
import "./App.css";
import Card from "./assets/components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");
  const [gameData, setGameData] = useState([]);
  const [isUsername, setIsUserName] = useState(false);
  const [gameHistory, setGameHistort] = useState([]);
  const [localdata, setLocalData] = useState({
    prize: 0,
    total_counter_score: 0,
    user_name: "",
  });

  const handleCount = (e) => {
    increment(e);
    setCount(count + 1);
  };

  const increment = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://server-a9ag.onrender.com/increment", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName, //
        }),
      });
      if (!res.ok) {
        alert("Something went wrong try again");
      } else {
        const data = await res.json();
        localStorage.setItem("gameData", JSON.stringify(data));
        setGameData(data.gamedata);
        getGameData(userName);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getGameData = async (name) => {
    try {
      const res = await fetch(`https://server-a9ag.onrender.com/getData/${name}`, {
        headers: {
          accept: "application/json",
        },
      });
      if (!res.ok) {
        alert("cannot fetch data");
      } else {
        const gameHistory = await res.json();
        // setGameData(data.gamedata);
        setGameHistort(gameHistory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const localdata = JSON.parse(localStorage.getItem("gameData"));
    if (localdata) {
      setLocalData({
        prize: localdata.gamedata.prize,
        user_name: localdata.gamedata.user_name,
        total_counter_score: localdata.gamedata.total_counter_score,
      });
      getGameData(localdata.gamedata.user_name);
      setGameHistort(localdata.gamedata);
    }
  }, [count]);

  return (
    <>
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isUsername ? (
            <div className="card">
              <button className="button" onClick={(e) => handleCount(e)}>
                count is {count ? count : 0}
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div class="form__group field">
                <input
                  type="input"
                  class="form__field"
                  required=""
                  placeholder="Enter your name"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <label for="name" class="form__label">
                  Name
                </label>
              </div>

              <button
                disabled={isUsername ? true : false}
                className="button"
                onClick={() => setIsUserName(true)}
              >
                Save
              </button>
            </div>
          )}
          {gameData || localdata ? (
            <Card gameData={gameData} localdata={localdata} />
          ) : null}
        </div>
      </>
    </>
  );
}

export default App;
