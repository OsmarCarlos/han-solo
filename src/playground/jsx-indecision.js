import React from 'react';
import ReactDom from 'react-dom';

let app = {
    title:  'Jojo Rabbit',
    subtitle: 'Taika Waititi',
    actors: ['Scarlett', 'Jhon']
}

const Actors = ({actors}) => (
    <div>
        {actors.map((actor, index) => (
            <li key={index}>{actor}</li>
        ))}
    </div>
);

const onFormSubmit = (e) => {
    e.preventDefault();
    const actor = e.target.elements.actor.value;
    if (actor) {
        app.actors.push(actor);
        e.target.elements.actor.value = '';
        render();
    }
};

const removeAll = (e) => {
    e.preventDefault();
    app.actors = [];
    render();
};

const onMakeDecision = (e) => {
    const randomNum = Math.floor(Math.random() * app.actors.length);
    const option = app.actors[randomNum];
    alert(option);
};

const render = () => {
    let template = (
        <div>
            <h1>Movie: {app.title}</h1>
            {(app.subtitle && <p>Director: {app.subtitle}</p>)}
            <button disabled={app.actors.length === 0} onClick={onMakeDecision}>Waht should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {/* {app.actors && app.actors.length > 0 ? <Actors actors={app.actors}></Actors> : <p>No Actors</p>} */}
                {
                    app.actors.map((actor, index) => <li key={index}>{actor}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="actor"></input>
                <button>Add Actor</button>
            </form>
        </div>
    );
    
    const container = document.getElementById('app')

    // ReactDom.render(__what__, __where__);
    ReactDom.render(template, container);
}