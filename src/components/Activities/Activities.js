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
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
            <div className='grid order-2 lg:col-span-2 lg:order-1 px-0'>
                <p className='text-teal-600 font-semibold text-xl my-5'>Select today's exercise</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        activities.map(activity => <SingleActivity key={activity.id} activity={activity} addToList={addToList}></SingleActivity>)
                    }
                </div>
            </div>
            <div className='order-1 lg:order-2'>
                <Sidebar duration={duration}></Sidebar>
            </div>
        </div>
    );
};

export default Activities;