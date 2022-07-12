import '../../Styles/index.scss';
import Header from '../Header';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

const [station, setStation] = useState([]);
const [temp, setTemp] = useState([])
const [click, setClick] = useState(false)


  useEffect(()=> {
    axios({
      method: 'get',
      url: ` https://hubeau.eaufrance.fr/api/v1/temperature/station/?code_departement=33`,
    })
      .then((res) => {
          setStation(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const displayTemp = (params) => {
    axios({
      method: 'get',
      url: ` https://hubeau.eaufrance.fr/api/v1/temperature/chronique/?code_departement=33&code_station=${params}&sort=desc&size=1`,
    })
      .then((res) => {
        setClick(true)
          setTemp(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (

    <div className="App">
      <Header />
     
        <div className='container'>
          <h1 className='container-title'>Les différentes stations dans le département de la Gironde</h1>
          {
                  click && temp.map((element, index) => (
                    <div className='container-temp' key={index}>
                    <h2>{element.libelle_station}</h2>
                    <h2>{Math.round(element.resultat)}° C</h2>
                    </div>
                  ))
                }
          <div className='container-stations'>
          {
            station.map((element, index) => (
              <div className='container-station' key={index}>
                <h2 className='container-station-title'>{element.libelle_station}</h2>
                <p className='container-station-localisation'>{element.localisation}</p>
                <button type='submit' className='container-station-button' onClick={() => displayTemp(element.code_station)}>Afficher la température</button>
             </div>
            ))
             
          }
         </div>
         
        </div>
    </div>

  );

}

export default App;
