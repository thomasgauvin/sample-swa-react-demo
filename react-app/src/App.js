import React, { useEffect, useState } from 'react';

function App() {

  const [message, setMessage] = useState('Loading...');

  useEffect(() => {

    async function fetchData(){
      const response = await fetch('/api/SampleEndpoint');
      const data = await response.json();
      console.log(data.message);
  
      setMessage(data.message);
    }

    fetchData();

  }, [])

  const value = 'World';
  return <>
    <h1>Hello {value}</h1>
    <div>Message return from API: {message}</div>
  </>;
}

export default App;
