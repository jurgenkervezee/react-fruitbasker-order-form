import React from 'react';

function Fruitbox({
                      fruitDescription,
                      fruitAmount,
                      fruitAdder,
                      fruitSub
                    }){
    return(
        <div id="fruitbox">
            <div>{fruitDescription}</div>
            <button
                type="button"
                onClick={fruitSub}
                disabled={fruitAmount === 0}
            >-
            </button>
            <div>{fruitAmount}</div>
            <button
                type="button"
                onClick={fruitAdder}
            >+
            </button>
        </div>
    )
}

export default Fruitbox;