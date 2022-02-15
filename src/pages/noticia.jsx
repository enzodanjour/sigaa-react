import { useEffect, useState } from "react"

export function Noticia() {
    const [weater, setWeater]= useState([]);

    useEffect(()=>{
        fetch('http://api.weatherapi.com/v1/current.json?key=51b4d1e551d146e88f613942221502&q=189.87.83.242&aqi=yes')
    .then(async (response) => {
        const json = await response.json();
        console.log('response', json.current.condition.text);
        setWeater(json.current.condition.text);
    })
    .catch((error) => {
        console.log('erro', error);
    });
    },[]);
    return <h1>
        {weater}
    </h1>
}

