import "./App.css";
import jsondata from "./contacts.json";
import { useState, useEffect } from "react";

function App() {
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(jsondata.slice(0, 5));
  }, []);

  function handleRandomAdd() {
    let random = Math.floor(Math.random() * jsondata.length - 2) + 4;
    console.log(random);
    console.log(jsondata[random]);

    let newArr = contacts.concat(jsondata[random]);
    setContacts(newArr);

    console.log(contacts);
  }

  function handleSortName() {
    let newArr = contacts.sort((a, b) => a.name.localeCompare(b.name));
    console.log(newArr);
    setContacts([...newArr]);
  }

  function handleSortPopularity() {
    let newArr = contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    console.log(newArr);
    setContacts([...newArr]);
  }

  function handleDelete(e) {
    let index = contacts.findIndex((x) => x.name === e.target.name);
    console.log(index);
    let newArr = contacts.slice(0, index).concat(contacts.slice(index + 1));
    console.log(newArr)
    setContacts([...newArr]);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleRandomAdd}>Add Random Contact</button>
      <button onClick={handleSortName}>Sort by Name</button>
      <button onClick={handleSortPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <td>
              <h2>Picture</h2>
            </td>
            <td>
              <h2>Name</h2>
            </td>
            <td>
              <h2>Popularity</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          {contacts.map((element) => {
            return (
              <tr key={element.name}>
                <td>
                  <img src={element.pictureUrl} style={{ width: "40px" }} />
                </td>
                <td>{element.name}</td>
                <td>{element.popularity}</td>
                <td>
                  <button onClick={handleDelete} name={element.name}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
