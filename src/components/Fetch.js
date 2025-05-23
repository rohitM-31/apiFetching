import React, { useEffect ,useState} from 'react';

const Fetch = () => {
    const [data,setData]=useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => res.json())
      .then((json) => {
        setData(json); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div>
      {data.map(item=><li key={item.id}>{item.title}</li>)}
    </div>
  );
};

export default Fetch;
