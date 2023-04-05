import React, { useReducer } from "react";
// import "./styles.css";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }

  if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  // const initialData = 15;
  //   const [myNum, setMyNum] = React.useState(0);
  const intialData = 10;
//  first dispatch is call and than use of reduce we can update the crrent state
  const [state, dispatch] = useReducer(reducer, intialData);

  return (
    <>
      <div style={{background:"black"}} className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={() => dispatch({ type: "DECR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};
// useEffect-------------------------

// import React, { useState, useEffect } from "react";
// import "./style.css";

// const UseEffect = () => {
//   // const initialData = 15;
//   const [myNum, setMyNum] = useState(0);

//   useEffect(() => {
//     document.title = `Chats(${myNum})`;
//   });

//   return (
//     <>
//       <div className="center_div">
//         <p>{myNum}</p>
//         <div class="button2" onClick={() => setMyNum(myNum + 1)}>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           INCR
//         </div>
//       </div>
//     </>
//   );
// };

// export default UseEffect;




export default UseReducer;