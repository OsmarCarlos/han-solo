import React from 'react';
import ReactDom from 'react-dom';

let app = {
    title:  'Jojo Rabbit',
    subtitle: 'Taika Waititi',
    actors: ['Scarlett', 'Jhon']
}

const Actors = ({actors}) => (
    <div>
        {actors.map(actor => (
            <li>{actor}</li>
        ))}
    </div>
);

let template = (
    <div>
        <h1>Movie: {app.title}</h1>
        {(app.subtitle && <p>Director: {app.subtitle}</p>)}
        <ol>
            {app.actors && app.actors.length > 0 ? <Actors actors={app.actors}></Actors> : <p>No Actors</p>}
        </ol>
    </div>
);

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

const container = document.getElementById('app');

// ReactDom.render(__what__, __where__);
ReactDom.render(template, container);