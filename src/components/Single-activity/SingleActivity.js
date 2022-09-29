import React from 'react';

const SingleActivity = (props) => {

    const addToList = props.addToList;
    const { title, img, description , duration } = props.activity;
    return (
        <div>
            <div className="card w-10/12 bg-base-100 shadow-xl mx-auto">
                <figure><img src={img} alt="activity" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className ="text-left">{description}</p>
                    <p className ="text-left text-teal-500">Duration: {duration}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent" onClick={()=>{addToList(duration)}}>Add to List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleActivity;