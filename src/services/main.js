import React from 'react';
//import GreedView from '../components/greedView'


const Main = (props) => {

    const greedView = (props.users.map(user => (
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


    const listView =
        (props.users.map(user => (

            < div className={`${user.gender} users col-12`} key={user.loginName} >

                {/* <div className="col s12 m6"> */}
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <img className='avatar' src={user.picture} />
                        <span className="card-title">{user.name}</span>
                        <p> {user.email}</p>
                        <p>{user.dobDate}</p>
                        {/* <p></p> */}
                    </div>
                </div>
                {/* </div> */}

            </div >

        )
        )
        )

    if (props.case == true)
        return greedView;
    else
        return listView;
}

export default Main;