
import TricketData from '../Data/Data.json';

import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';

const TricketInfo = () => {

    const { id } = useParams();

    const [tricketinfo, setTricketinfo] = useState([]);


    useEffect(() => {
        setTricketinfo(TricketData);
        
    }, [id])

    return (
        <div >  
                 <h1>{tricketinfo.id}</h1>              
                     
                 <h4>{tricketinfo.name}</h4>                                                  

                  
        </div>
    );
};

export default TricketInfo;