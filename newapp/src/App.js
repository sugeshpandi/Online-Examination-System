import React from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Homepage from "./Homepage";

function App() {
  return (
    <div>
      <Homepage/>
      <Login />
      <Register />
      <Dashboard />
    </div>

  );
}

export default App;
