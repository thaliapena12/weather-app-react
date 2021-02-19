import './App.css';
import WeatherItems from './components/WeatherItems';
import LocationSelector from './components/LocationSelector';
import Fetch from './hooks/Fetch'
import {API_KEY, API_BASE_URL} from './config';

function App() {
  const {data, error, setUrl, loading} = Fetch();

  const getData = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && loading) return <h2></h2>
    if(!data) return null;
    return <WeatherItems weathers={data.list} />
  };
 
  return (
    <div className="App">
     
      <LocationSelector onSubmit={(location) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${location},us&appid=${API_KEY}`)} />
      
      {getData()}
       
      
    </div>
  );
}

export default App;
