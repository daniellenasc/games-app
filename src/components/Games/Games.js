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

  //Effect Hook) to run side effects (data fetching)
  useEffect(() => {
    async function fetchGames() {
      //the function must be asynchronous as it will have to wait for the database response
      try {
        const result = await axios.get(
          "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4328&s=2021-2022"
        );
        console.log("Result: ", result); //to show what the variable is returning
        setGame([...result.data.events]); //to update the state we call the state updater pass it the new value.
      } catch (error) {
        console.error(error);
      }
    }
    fetchGames(); //calling the function
  }, []);

  return (
    <div>
      {game.map((currentGame) => {
        return (
          <div key={currentGame.idEvent}>
            <div>
              <img
                src="https://www.thesportsdb.com/images/icons/calendar-next.png"
                alt="calendar"
              />
              {convertDate(currentGame.dateEvent)}
            </div>
            <div>{currentGame.strHomeTeam}</div>
            <div>{currentGame.intHomeScore}</div>
            <div> - </div>
            <div>{currentGame.intAwayScore}</div>
            <div>{currentGame.strAwayTeam}</div>
            <div>Where: {currentGame.strVenue}</div>
          </div>
        );
      })}
    </div>
  );
}
