import React from 'react'
function Menucard({ menuData }) {
    console.log("deatatata", menuData)
    return (
        <><section className="main-card--cointainer">
            {/* map is used to get particular value from ARRAY */}
            {menuData.map((currentElement, index) => {
                const { id, name, category, image, description,price } = currentElement;

                return (
                    <>
                        <div className="card-container" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span>
                                    <span className="card-author subtle">{category}</span>
                                </div>
                                <h2 className="card-title"> {name}</h2>
                                <span className="card-description subtle">
                                    {description}
                                </span>
                                <div className="card-read">Read</div>
                            </div>
                            <img src={image}
                                alt="images" className="card-media" />

                            <span className="card-tag subtle">Order Now {price}</span>
                        </div>


                    </>
                )
            })}
        </section>
        </>
    )
}

export default Menucard