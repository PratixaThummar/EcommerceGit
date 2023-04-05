import React from 'react'

function Navbar({ filterItem, uniqueList }) {
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    {
                        uniqueList.map((currElement) => {
                            return (<button className='btn-group__item' onClick={() => filterItem(currElement)}>{currElement}</button>
                            );
                        })
                    }
                    {/* <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
                    <button className='btn-group__item' onClick={() => filterItem("evening")}>Evening</button>
                    <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button> */}
                </div>
            </nav></>
    )
}

export default Navbar