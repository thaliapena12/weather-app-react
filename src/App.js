import './App.css';
import WeatherItems from './components/WeatherItems';
import LocationSelector from './components/LocationSelector';
import Fetch from './components/hooks/Fetch.js'
import {API_KEY, API_BASE_URL} from './config';

function App() {
  const {data, error, setUrl, loading} = Fetch();

  const getData = () => {
    if(error) return <h2>Error: {error}</h2>
    if(!data && loading) return <h2>..loading..</h2>
    if(!data) return null;
  
    return <WeatherItems weathers={data.list} city={data.city} />
  };
 
  return (
    <div className="App">
      <LocationSelector handleSubmit={(location) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${location},us&appid=${API_KEY}`)} />
      
      {getData()}
       
      
    </div>
  );
}

export default App;
