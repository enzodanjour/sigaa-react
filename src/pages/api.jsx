
  
import { useEffect, useState } from "react"
import { AppFooter } from "../components/AppFooter";
import { Nave } from "../components/Nave";
export function Api() {
    const [weater, setWeater] = useState([]);
    const [image, setImage] = useState([]);
    useEffect(() => {
        fetch('http://api.weatherapi.com/v1/current.json?key=51b4d1e551d146e88f613942221502&q=189.87.83.242&aqi=yes')
            .then(async (response) => {
                const json = await response.json();
                console.log('response', json.current.condition.icon);
                setImage(json.current.condition.icon)
                setWeater(json.current.condition.text);
            })
            .catch((error) => {
                console.log('erro', error);
            });
    }, []);
    return (
        <>
         <Nave />
        <h1>
            Clima de Macaíba
        </h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 20fr" }}>
                <img src={image} />
                <span>
                    {weater}
                </span>
            </div>


            <AppFooter />
        </>
    )
}