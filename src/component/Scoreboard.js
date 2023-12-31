import { useState } from "react";
export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });
  function handlePlusClick() {
    // player.score++; this is not correct we need to use useState function to rerender the dom and display it
    setPlayer({ ...player, score: player.score + 1 });
  }
  function handleFirstNameChange(e) {
    setPlayer({
      //here nothing to change
      ...player,
      firstName: e.target.value,
    });
  }
  function handleLastNameChange(e) {
    setPlayer({
      //here the code was missing to copy the previous data so i added it by distructor (...player)
      ...player,
      lastName: e.target.value,
    });
  }
  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
