
// import { useState } from "react";
// import "./App.css";

// function App() {

//   const [teamAYes, setTeamAYes] = useState(0);
//   const [teamANo, setTeamANo] = useState(0);

//   const [teamBYes, setTeamBYes] = useState(0);
//   const [teamBNo, setTeamBNo] = useState(0);

//   const [teamCYes, setTeamCYes] = useState(0);
//   const [teamCNo, setTeamCNo] = useState(0);


//   return (
//     <div>


//       <h1>Voting App</h1>

//       <h2>Team A</h2>

//       <button onClick={() => setTeamAYes(teamAYes + 1)}>
//         YES
//       </button>

//       <button onClick={() => setTeamANo(teamANo + 1)}>
//         NO
//       </button>

//       <p>Yes: {teamAYes}</p>
//       <p>No: {teamANo}</p>



//       <h2>Team B</h2>

//       <button onClick={() => setTeamBYes(teamBYes + 1)}>
//         YES
//       </button>

//       <button onClick={() => setTeamBNo(teamBNo + 1)}>
//         NO
//       </button>

//       <p>Yes: {teamBYes}</p>
//       <p>No: {teamBNo}</p>


//       <h2>Team C</h2>

//       <button onClick={() => setTeamCYes(teamCYes + 1)}>
//         YES
//       </button>

//       <button onClick={() => setTeamCNo(teamCNo + 1)}>
//         NO
//       </button>

//       <p>Yes: {teamCYes}</p>
//       <p>No: {teamCNo}</p>


//       <h2>Result</h2>

//       <p>Team A: Yes {teamAYes} | No {teamANo}</p>
//       <p>Team B: Yes {teamBYes} | No {teamBNo}</p>
//       <p>Team C: Yes {teamCYes} | No {teamCNo}</p>


//     </div>
//   );
// }

// export default App


import { useState } from "react";
import "./App.css";

function App() {
  const [teamAYes, setTeamAYes] = useState(0);
  const [teamANo, setTeamANo] = useState(0);

  const [teamBYes, setTeamBYes] = useState(0);
  const [teamBNo, setTeamBNo] = useState(0);

  const [teamCYes, setTeamCYes] = useState(0);
  const [teamCNo, setTeamCNo] = useState(0);

  const [teamDYes, setTeamDYes] = useState(0);
  const [teamDNo, setTeamDNo] = useState(0);

  return (
    <div className="app-container">
      <h1>Voting App</h1>

      <div className="teams-container">
        
        <div className="team-card">
          <h2>Team A</h2>
          <button className="yes-btn" onClick={() => setTeamAYes(teamAYes + 1)}>YES</button>
          <button className="no-btn" onClick={() => setTeamANo(teamANo + 1)}>NO</button>
          <p>Yes: {teamAYes}</p>
          <p>No: {teamANo}</p>
        </div>

        <div className="team-card">
          <h2>Team B</h2>
          <button className="yes-btn" onClick={() => setTeamBYes(teamBYes + 1)}>YES</button>
          <button className="no-btn" onClick={() => setTeamBNo(teamBNo + 1)}>NO</button>
          <p>Yes: {teamBYes}</p>
          <p>No: {teamBNo}</p>
        </div>

        <div className="team-card">
          <h2>Team C</h2>
          <button className="yes-btn" onClick={() => setTeamCYes(teamCYes + 1)}>YES</button>
          <button className="no-btn" onClick={() => setTeamCNo(teamCNo + 1)}>NO</button>
          <p>Yes: {teamCYes}</p>
          <p>No: {teamCNo}</p>
        </div>

        
        <div className="team-card">
          <h2>Team D</h2>
          <button className="yes-btn" onClick={() => setTeamDYes(teamDYes + 1)}>YES</button>
          <button className="no-btn" onClick={() => setTeamDNo(teamDNo + 1)}>NO</button>
          <p>Yes: {teamDYes}</p>
          <p>No: {teamDNo}</p>
        </div>

      </div>

      <div className="`result-section`">
        <h2>Result</h2>
        <p>Team A: Yes {teamAYes} | No {teamANo}</p>
        <p>Team B: Yes {teamBYes} | No {teamBNo}</p>
        <p>Team C: Yes {teamCYes} | No {teamCNo}</p>
        <p>Team D: Yes {teamDYes} | No {teamDNo}</p>
      </div>

    </div>
  );
}

export default App;