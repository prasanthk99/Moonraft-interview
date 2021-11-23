import { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [datas, setData] = useState([])

  axios.get('https://jsonkeeper.com/b/07NH')
    .then(response => {
      setData(response);
      console.log(response);
    }).catch(err => {
      console.log(err)
    });

  return (
    <div className="App">
      {datas.map((data) => {
        const { id, name, emailid, aboutMe, location, deparment, age, gender, joiningDate } = datas;
        return (
          <div>
            <div className="info1">
              <label>ID:</label>
              <h1>{id}</h1>
              <label>Name:</label>
              <h1>{name}</h1>
              <label>EamilId:</label>
              <h1>{emailid}</h1>
              <label>Age:</label>
              <h1>{age}</h1>
              <label>Gender:</label>
              <h1>{gender}</h1>
            </div>

            <div className="info2">
              <label>JoiningDate:</label>
              <h1>{joiningDate}</h1>
              <label>Location:</label>
              <h1>{location}</h1>
              <label>Deparment:</label>
              <h1>{deparment}</h1>
            </div>

            <label>About-Me:</label>
            <h1>{aboutMe}</h1>
          </div>
        )

      })}

    </div>
  );
}

export default App;
