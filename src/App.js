import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';


const App = () => {
  const [advice,setadvice] = useState('');
  const url ='https://api.adviceslip.com/advice';
    const fetchData = async () =>{
        try{
            const response = await fetch(url);
            const json = await response.json();
            setadvice(json.slip.advice);
        }catch(error){
          console.log(error)
        }
    }

  useEffect(()=>{
      fetchData();
  },[])  
  

  
        return(
            <div className='app'>
                <div className="card">
                <h1 className='heading'>{advice}</h1>
                <button className='btn' onClick={fetchData} >Give Advice</button>
                </div>
            </div>
        
        )
}

export default App;