//import the hooks useState and useEffect
import { useState, useEffect } from "react";

//import axios - a promise-based HTTP Client for node.js and the browser.
import axios from "axios";

//import the function convertDate
import { convertDate } from "../../assets/functions/concertDate";

//create component Games as function - to render the API data
export function Games() {
  //declare a state
  const [game, setGame] = useState([]);

  //Effect Hook to run side effects (data fetching)
  useEffect(() => {
    async function fetchGames() {
      //the function must be asynchronous as it will have to wait for the database response
      try {
        const result = await axios.get(
          //using Axios - a promise-based HTTP Client for node.js and the browser - fot the get HTTP request
          "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4328&s=2021-2022"
        );
        //console.log("Result: ", result.data.events); //to show what the variable is returning
        setGame([...result.data.events]); //to update the state we call the state updater pass it the new value.
      } catch (error) {
        console.error(error);
      }
    }
    fetchGames(); //calling the function
  }, []);

  return (
    <div>
      <h1>Latest Results</h1>
      {/* using the .map() method in the return to create a new array populated with the results of calling a provided function on every element in the calling array. */}
      {game.map((currentGame, index) => {
        return (
          <div key={index} className="card-game">
            <div className="game-image-container">
              <img
                src={currentGame.strThumb}
                alt={currentGame.strEvent}
                className="game-image"
              />
            </div>
            <div className="card-game-body">
              <div className="card-game-date">
                <img
                  src="https://www.thesportsdb.com/images/icons/calendar-next.png"
                  alt="calendar"
                />
                {convertDate(currentGame.dateEvent)}
              </div>
              <div className="card-game-result">
                <h3>
                  {currentGame.strHomeTeam} {currentGame.intHomeScore} X{" "}
                  {currentGame.intAwayScore} {currentGame.strAwayTeam}
                </h3>
              </div>
              <div className="card-game-where">{currentGame.strVenue}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
