
// /* insert app levels actions below */
// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   SELECT_PHOTO: 'SELECT_PHOTO',
//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case FAV_PHOTO_ADDED:
//       return { /* insert logic */ }
//     { /* insert all relevant actions as case statements*/ }
    
//     }
//     default:
//       throw new Error(
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );
//   }
// };


// function reducer(state, action) {
//   if (action.type === "add") {
//     return state + action.value;
//   }
//   if (action.type === "subtract") {
//     return state - action.value;
//   }

//   return state;
// }

// function BoringCalculator() {
//   const [state, dispatch] = useReducer(reducer, 0);

//   return (
//     <div>
//       <button onClick={() => dispatch({ type: "add", value: 3 })}>Add 3</button>
//       <button onClick={() => dispatch({ type: "subtract", value: 5 })}> Subtract 5</button>
//       <button onClick={() => dispatch({ type: "add", value: 7 })}>Add 7</button>
//       <h2>{state}</h2>
//     </div>
//   );
// }


// const reducer = (state, action) => {
//   switch(action.type) {
//     case FAV_PHOTO 


//     case 'inc': return state + action.payload;
//     case 'dec': return state - action.payload;

//     // for any other type, return the current state
//     default: return state;
//   }
// }


// const App = () => {
//   // specify the reducer and an initial value for the state
//   const [value, setValue] = useReducer(reducer, 0);

//   const inc = (e) => setValue({type: 'inc', payload: 1});
//   const dec = (e) => setValue({type: 'dec', payload: 1});

//   return (
//     <div className="App">
//       <button onClick={inc}>Increment</button>
//       <button onClick={dec}>Decrement</button>
//       Counter:{value}
//     </div>
//   );
// }


// // store photos
// // store topics
// //favourite photos

// state=current state
// payload=

// // dispatch actions

// // update a photo-dispatch

// // select a photo to view in modal-dispatch
// //Modal State
// // const [modal, setModal] = useState(false);
// // //Store Images for Modal
// // const [selectImages , setSelectImages] = useReducer(reducer, {});
// // //Store Simlar Photos or Baselist
// // const [photosList, setPhotosList] = useReducer(reducer, []);


// // backend returns application data

// //these useStates should be dispatched.
