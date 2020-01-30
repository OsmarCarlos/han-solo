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
        <p>Director: {app.subtitle}</p>
        <ol>
            <Actors actors={app.actors}></Actors>
        </ol>
    </div>
);

let user = {
    name: 'Mike Pitt',
    age: 22,
    location: 'San Diego'
}

function getLocation (location) {
    if(location) {
        return location
    } else {
        return 'Unknow';
    }
};

let templateTwo = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);

const container = document.getElementById('app');

// ReactDom.render(__qué__, __dónde__);
ReactDom.render(templateTwo, container);