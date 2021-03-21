import React, { useEffect, useState } from 'react';
import TricketData from '../Data/Data.json';
import Trickets from '../Trickets/Trickets';
import './Home.css'



const Home = () => {

    const [tricket,setTricket]= useState([]);

    useEffect(()=>{
        setTricket(TricketData);
        

    },[])



    return (
        <div >
            
            
                <div className="mapstyle container mt-2">
                    
                    {
                        tricket.map(pl =><Trickets tricket={pl}></Trickets>)
                     }
                </div>
        </div>
    );
};

export default Home;