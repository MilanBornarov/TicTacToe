import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setName] = useState(initialName)

  function editButton() {
    setIsEditing((editing) => !editing)
    if(isEditing){
    onChangeName(symbol, playerName)
    }
  }
  function changeName(event){
    setName(event.target.value)
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editPlayerName = <input type="text" required value={playerName} onChange={changeName}/>;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editButton}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
