let count = 0

const addOne = () => {
    count ++;
    renderCounterApp();
}

const minusOne = () => {
    count --;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}



const renderCounterApp = () => {
    const counter = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    
    
    const container = document.getElementById('app');
    
    // ReactDom.render(__what__, __where__);
    ReactDom.render(counter, container);
};

renderCounterApp();