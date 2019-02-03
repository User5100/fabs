import React from 'react'

function Child({ handleClick, hideFAB }) {

    function onClick(event) {
        handleClick(event)
        hideFAB()
    }
    return (
        <section>
            <h1>Modal</h1>
            <button onClick={ onClick }>Confirm</button>
            <button onClick={ onClick }>Cancel</button>
        </section>
    )
}
export default Child
