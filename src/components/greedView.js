import React from 'react';

const GreedView = (props) => (
    props.users.map(user => (
        <div className="col-4" key={user.loginName}>
            <div className="card">
                <div className="card-image">
                    <img className='avatar' src={user.picture2} />
                    <span className="card-title">{user.name}</span>
                </div>
                <div className="card-content">
                    <p>{user.email}</p>
                    <p>{user.dobDate}</p>
                    {/* <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p> */}
                </div>
            </div>
        </div>
    )
    ));

export default GreedView