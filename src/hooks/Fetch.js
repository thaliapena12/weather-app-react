import {useState, useEffect} from 'react';

const Fetch = (startUrl) => {
  //whenever there is a new location the url will change
  const [url, setUrl] = useState(startUrl);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  
  useEffect(() => {
    if(!url) return;
    setLoading(true);
    // clear old search
    setData(null);
    setError(null);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if(data.cod >= 400) {
                setError(data.message);
                return;
            }
            setData(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false)
      }); 
      //use effect will load everytime the url changes
  }, [url]);
//return what you want your other components to have access to
  return { data, error, setUrl, loading };
};

export default Fetch;