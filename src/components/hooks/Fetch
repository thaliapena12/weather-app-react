import {useState, useEffect} from 'react';

const Fetch = (startUrl) => {
  // create state variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [url, setUrl] = useState(startUrl);


  useEffect(() => {
    if(!url) return;
    setLoading(true);
    // clear old search
    setData(null);
    setError(null);

    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            // error handling for nonexistent data
            setLoading(false);
            if(data.cod >= 400) {
                setError(data.message);
                return;
            }
            setData(data);
        })
        .catch((error) => {
            setLoading(false);
            setError(error);
        });
        //use effect will load everytime the url changes
  }, [url]);
//return what you want your other components to have access to
  return { data, error, loading, setUrl };
};

export default Fetch;







