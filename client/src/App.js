import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {

  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch("/api")
        .then((result) => result.json())
        .then((data) => setData(data.message))
        .catch((error) => {
          console.log("Error fetching api: ", error)
        })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}
        </p>
      </header>
    </div>
  );
}

export default App;
