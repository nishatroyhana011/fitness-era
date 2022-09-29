import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SingleActivity from '../Single-activity/SingleActivity';

const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        fetch('db.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    
    const addToList = (activityDuration) => {
        let time = parseInt(activityDuration);
        let totalDuration = duration;
        totalDuration = totalDuration + time;
      
        setDuration(totalDuration);
    }

    return (
        <div className='grid grid-cols-3'>
            <div className='grid grid-cols-1 col-span-2 gap-4 mx-10'>
                <p className='text-teal-600 font-semibold text-xl my-5 mx-10'>Select today's exercise</p>
                <div className='grid grid-cols-2'>
                    {
                        activities.map(activity => <SingleActivity key={activity.id} activity={activity} addToList={addToList}></SingleActivity>)
                    }
                </div>
            </div>


            <div className='mx-10'>
                <Sidebar duration={duration}></Sidebar>
            </div>
        </div>
    );
};

export default Activities;