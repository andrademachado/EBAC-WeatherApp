import { useEffect, useState } from "react";

const Temp = () => {

    type LocationProps = {
        timezone: string
        elevation: number
    }

    const [location, setLocation] = useState<LocationProps>()

    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handlePosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, [])

    const handlePosition = (position: GeolocationPosition) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

        console.log(position)
    }

    /* https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,rain,visibility&daily=uv_index_max&timezone=America%2FSao_Paulo&past_days=5 */

    useEffect(() => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,rain,visibility&daily=uv_index_max&timezone=America%2FSao_Paulo&past_days=5`)
            .then((res) => res.json())
            .then((res) => setLocation(res))
    }, [latitude && longitude])

    return (
        <div>
            <h1>EBAC Weather App</h1>
            Latitude: {latitude}<br />
            Longitude: {longitude}<br />
            <br />
            {latitude}, {longitude}
            <br />
            <br />timezone: <b>{location?.timezone}</b>, elevation: <b>{location?.elevation}</b>
        </div>
    )
}

export default Temp
