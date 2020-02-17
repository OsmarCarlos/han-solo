import React from 'react';
import ReactDom from 'react-dom';

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    renderVisibility();
}

const renderVisibility = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
    );

    ReactDom.render(jsx, document.getElementById('app'));
}

export default renderVisibility;


let user = {
    name: 'Mike Pitt',
    age: 19,
    location: 'Ciudad de México'
}

function getLocation (location) {
    if(location) {
    return <p>Location: {location}</p>
    }
};

let templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
