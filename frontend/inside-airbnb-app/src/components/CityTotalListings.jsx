import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CityTotalListings = () => {
    
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('New York City');
    const [cityData, setCityData] = useState(null);
    const [countAllLines, setCountAllLines] = useState(0);
    const [cityDefault, setCityDefault] = useState('New York City');


    
    const handleChange = async (event) => {
        if (event.target.value === "") {
            setCityData(countAllLines);
            return;
        } else {
            
            const city = event.target.value;
            setSelectedCity(city);
            console.log(city);
            try {
                const response = await axios.get(`http://localhost:5001/api/V1/cities/count/cities/${city}`)
                setCityData(response.data[0].count)
            } catch (error) {
                console.error("Error", error)
            }
        }
    };
    
    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/V1/cities/cities/all');
                setCountAllLines(response.data[0].count);
                setCityData(response.data[0].count);
            } catch (error) {
                console.error('Error counting all lines', error);
            }
        };
        fetchData();
    }, [])
    


    useEffect(() => {

        const fetchCities = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/V1/cities/');
                const uniqueCities = new Set(response.data.map(city => city.neighbourhood_group));
                setCities(Array.from(uniqueCities));
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };
        fetchCities();
    }, []);


    return (
        <div className='px-2 bg-slate-300'>
            <div className='p-6'>
                <div className='text-xl font-extrabold text-sky-950'>New York City</div>
                <div className='text-sm text-gray-600'>Filter by:</div>
                <div>
                    <label htmlFor="citySelect"></label>
                    <select name="" id="citySelect" onChange={handleChange}>
                        <option value="">{cityDefault}</option>
                        {cities.map((citie, index) => (
                            <option key={index} value={citie}>{citie}</option>
                        ))}
                    </select>
                </div>

            </div>
            <div className='text-end mr-2 text-3xl font-extrabold text-sky-950'>{cityData}</div>
            <div className='text-end text-xs'>out of {countAllLines} listings ({(cityData / countAllLines * 100).toFixed(1)})%</div>

        </div>
    )


}

export default CityTotalListings