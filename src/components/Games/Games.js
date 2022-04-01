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
        console.log("Result: ", result.data.events); //to show what the variable is returning
        setGame([...result.data.events]); //to update the state we call the state updater pass it the new value.
      } catch (error) {
        console.error(error);
      }
    }
    fetchGames(); //calling the function
  }, []);

  return (
    <div>
      {/* using the .map() method in the return to create a new array populated with the results of calling a provided function on every element in the calling array. */}
      {game.map((currentGame, index) => {
        return (
          <div key={index}>
            {/*  the .map() method asks for a unique key to each child in a list*/}
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
