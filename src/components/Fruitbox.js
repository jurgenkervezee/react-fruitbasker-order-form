import React from 'react';

function Fruitbox({
                   fruitDescription,
                   fruitAmount,
                   fruitSetter
                   }){
    return(
        <div id="fruitbox">
            <div>{fruitDescription}</div>
            <button
                type="button"
                onClick={ () => {fruitSetter(fruitAmount - 1)}}
                disabled={fruitAmount === 0}
            >-
            </button>
            <div>{fruitAmount}</div>
            <button
                type="button"
                onClick={ () => {fruitSetter(fruitAmount + 1)}}
            >+
            </button>
        </div>
    )
}

export default Fruitbox;