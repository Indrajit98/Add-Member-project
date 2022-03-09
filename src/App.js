import { useEffect, useState } from "react";
import "./App.css";
import Team from "./Components/Team/Team";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);
  const [team, setTeam] = useState([]);
  const addMember = (name) => {
    setTeam([...team, name]);
  };

  return (
    <div className="App">
      <h2>Team Member</h2>
      <div className="row">
        <div className="teamCart">
          {users.map((user, id) => (
            <Team User={user} addMember={addMember} key={id}></Team>
          ))}
        </div>
        <div className="addNameCart">
          <h4>Add Member Name</h4>
          <ul>
            {team.map((memberName, id) => (
              <p key={id}>Name: {memberName}</p>
            ))}
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default App;
