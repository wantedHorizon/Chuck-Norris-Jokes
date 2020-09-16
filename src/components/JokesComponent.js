import React from 'react';
const JokesComponent = props => {
    const btns = props.categories.map( (c,i) => {
        return <button className="ui button" onClick={(e)=>props.randomHandler(e,c)}key={i}>{c}</button>
    })
    return (
        <div className="jokes-component">
           
            <button className="ui primary button" onClick={props.randomHandler}>Get Random Joke</button>
            <h3>Get By Category</h3>
            {btns}
            
            <p>{props.data && props.data.value}</p>
        </div>
    );
}
export default JokesComponent;