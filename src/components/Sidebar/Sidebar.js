import React from 'react';

const Sidebar = (props) => {
   
    const duration = props.duration;
    return (
        <div className=''>
            <p className='text-teal-500 font-semibold text-xl my-5'>Exercise Details</p>
            <p className='bg-slate-100 p-5 rounded-lg'>Total Duration: {duration} Minutes</p>
        </div>
    );
};

export default Sidebar;