import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Completed = () => {
    const notify = () => toast("Well Done! Activity completed!");

    return (
      <div>
        <button className="btn btn-accent btn-block" onClick={notify}>Activity Completed</button>
        <ToastContainer position="top-center"/>
      </div>
    );
};

export default Completed;