import React from 'react';

const Questions = () => {
    return (
        <div className='my-12'>
            <p className='text-teal-600 font-bold text-2xl my-5'>Blog Section</p>
            <div>
            <p className='text-teal-600 font-semibold text-xl my-5 mx-10'> How does React work?</p>
            <p>React uses virtual DOM. It uses JSX syntax to create elements.  React divides the UI into seperated reusable pieces of code known as components. 
                React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. And react uses hooks like useState, useEffect etc.
                useEffect is used to compare data changes.</p>
            </div>
            <div>
            <p className='text-teal-600 font-semibold text-xl my-5 mx-10'> What are the differences between props and state ?</p>
            <p> Props are parameters. It is used to send data from one component to another. 
                State is used to hold changable data. state has a function and a variable. it works within the same component.
                Props are read only. state changes may be ascynchoronus.
            </p>
            </div>
            <div>
            <p className='text-teal-600 font-semibold text-xl my-5 mx-10'> What are the functions of useEffect other than data fetching?</p>
            <p>UseEffect is a hook to handle external side effects in react. React will remember the passed function, and call it later after performing the DOM updates. Without data fetching, it handles direct DOM manipulation, settimeout, localStorage set and update etc.</p>
            </div>
           
        </div>
    );
};

export default Questions;
