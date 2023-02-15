import React, { useEffect, useMemo, useState } from 'react';

function Memo3(props) {

    const [isCountry, setIsCountry] = useState(true);

    const location = useMemo(()=>{
        return {
            country : isCountry ?'Korea':'Jappen',
            result : isCountry ? 'Really? Wellcom' : 'Wow good!'
        }
    },[isCountry]);

    useEffect(()=>{
        console.log('Order start..');
    },[location])

    const onTrueClick = () => {
        setIsCountry(true);
    }
    const onFalseClick = () => {
        setIsCountry(false);
    }
    return (
        <div>
            <h2>which country will you to visit?</h2>
            <p style={isCountry?{color:'blue'}:{color:"red"}}>Country : {location.country}</p>
            <p>{location.result}</p>
            <hr/>
            <button onClick={onTrueClick}>Korea</button>
            &nbsp;&nbsp;            
            <button onClick={onFalseClick}>Jappen</button>            
        </div>
    );
}

export default Memo3;