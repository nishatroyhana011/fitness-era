import React, { useEffect, useState } from 'react';
import Myinfo from '../myinfo/Myinfo';

const Sidebar = (props) => {

    const duration = props.duration;    
    //let t = 0;
    const [breakTime, setBreakTime] = useState(0);

    const getValue = (value) =>{
        setBreakTime(value);  
        localStorage.setItem('breaktime', JSON.stringify(value));
    }

    useEffect(()=>{
         const savedBreakTime = localStorage.getItem('breaktime');
         if(savedBreakTime){
            setBreakTime(savedBreakTime);
         }
    },[])

    return (
        <div className=''>
            <Myinfo></Myinfo>
            <p className='text-teal-500 font-semibold text-xl my-5'>Add a break (minutes)</p>
            <div className='flex justify-around'>
                <button className="btn text-lg font-bold btn-accent btn-circle" onClick={()=>{ getValue(1)}}>1</button>
                <button className="btn text-lg font-bold btn-accent btn-circle" onClick={()=>{ getValue(3)}}>3</button>
                <button className="btn text-lg font-bold btn-accent btn-circle" onClick={()=>{ getValue(5)}}>5</button>
                <button className="btn text-lg font-bold btn-accent btn-circle" onClick={()=>{ getValue(10)}}>10</button>
            </div>
            <div>
            <p className='text-teal-500 font-semibold text-xl my-5'>Exercise Details</p>
            <p className='bg-slate-100 p-5 rounded-lg'>Total Duration: {duration} Minutes</p>
            <br />
            <p className='bg-slate-100 p-5 rounded-lg'>Break Time: {breakTime} Minutes</p>
            <br />
            <button className="btn btn-accent btn-block">Activity Completed</button>
            </div>
        </div>
    );
};

export default Sidebar;