import React, { useState } from 'react'

const text1 = "Airbnb hosts can list entire homes/apartments, private, shared rooms, and more recently hotel rooms." 
const text2 = "Depending on the room type and activity, a residential airbnb listing could be more like a hotel, disruptive for neighbours, taking away housing, and illegal."

const RoomType = () => {
    
    const [count, setCount] = useState(null);


    


    return (
    <div className=''>
        <div>
            <h1 className=''>Room Type</h1>
            <div>
                <div className='w-1/3 text-xs'>
                    <p>{text1}</p>
                    <br />
                    <p>{text2}</p>
                </div>
            </div>
        </div>
    </div>
    )
};

export default RoomType