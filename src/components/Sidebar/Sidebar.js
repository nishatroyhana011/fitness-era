import React from 'react';
import Myinfo from '../myinfo/Myinfo';

const Sidebar = (props) => {

    const duration = props.duration;
    return (
        <div className=''>
            <Myinfo></Myinfo>
            <p className='text-teal-500 font-semibold text-xl my-5'>Add a break (minutes)</p>
            <div className='flex justify-around'>
                <button className="btn text-lg font-bold btn-accent btn-circle">1</button>
                <button className="btn text-lg font-bold btn-accent btn-circle">3</button>
                <button className="btn text-lg font-bold btn-accent btn-circle">5</button>
                <button className="btn text-lg font-bold btn-accent btn-circle">10</button>
            </div>
            <div>
            <p className='text-teal-500 font-semibold text-xl my-5'>Exercise Details</p>
            <p className='bg-slate-100 p-5 rounded-lg'>Total Duration: {duration} Minutes</p>
            <br />
            <p className='bg-slate-100 p-5 rounded-lg'>Break Time: {duration} Minutes</p>
            <br />
            <button className="btn btn-accent btn-block">Activity Completed</button>
            </div>
        </div>
    );
};

export default Sidebar;