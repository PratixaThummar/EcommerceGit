import React from 'react'
import "./style.css"
import Menucard from './Menucard'
import Navbar from './Navbar'
import Menu from './MenuAPI'

const uniqueList = [
    // ... is used to get only array and value rather than nested array
    // new Set is used to get unique valur from array
    ...new Set(Menu.map((currElement) => {
        console.log(currElement.category)
        return currElement.category
    })), "All"
]

function Resturant() {
    // usestate is used manage and store data in menuData
    // useState is a hook in React that allows functional components to have state. It's used to manage state within a component and update it when necessary.
    const [menuData, setmenuData] = React.useState(Menu)
    const [menuList, setmenuList] = React.useState(uniqueList)
    
    function filterItem(category)  {
        if (category === "All") {
            setmenuData(Menu)
            return
        }
        const updatedList = Menu.filter((currElement) => {
            // console.log(currElement.category);
            return currElement.category === category
        });
        // console.log(updatedList);
        setmenuData(updatedList);
    }
    // console.log(menuData)
    return (
        <>
            <Navbar filterItem={filterItem} uniqueList={menuList} ></Navbar>
            <Menucard menuData={menuData}></Menucard>
        </>
    )
}

export default Resturant