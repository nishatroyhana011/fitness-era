import React, { useEffect, useState } from 'react';
import SingleActivity from '../Single-activity/SingleActivity';

const Activities = () => {

    const [activities, setActivities] = useState([]);

    useEffect(()=>{
        fetch('db.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    }, [])

    return (
        <div>
            <p className='text-teal-500 font-semibold text-xl'>Select today's exercise</p>
            {
                activities.map(activity => <SingleActivity key={activity.id} activity={activity}></SingleActivity>)
            }
        </div>
    );
};

export default Activities;