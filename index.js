import { a } from "./index1.js"

console.log(a)
//draw board
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'blue';
ctx.fillRect(20, 10, 200, 100);

let lastTime = null;


//state
const state = {
  direction: "left",
  snake: { coords: { x: 1, y: 1 }, },
  playfield:
    ['111111111111111111111111111111',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',]
}

const directionReducer = (state, action) => {
  console.log(state, action.type, "direction")
  switch (action.type) {
    case "CHANGE_DIRECTION_LEFT":
      return {
        ...state, direction: "left"
      }
    case "CHANGE_DIRECTION_UP":
      return {
        ...state, direction: "up"
      }
    default:
      return state
  }
}



//createstore
const createStore = (store, reducer) => {
  let currentState = store
  let currentListeners = [];

  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    // state changes, notify to invoke callbacks
    currentListeners.forEach(listener => listener());
  }

  const getState = () => currentState

  return {
    getState,
    dispatch,
  };
}

const store = createStore(state, directionReducer)

//key handeler
const onKeyPress = (e) => {
  const key = e.key
  changeDirection(key, "onkey")
}

const changeDirection = (key) => {

  if (key === "a") store.dispatch({ type: 'CHANGE_DIRECTION_LEFT' });
  if (key === "w") store.dispatch({ type: 'CHANGE_DIRECTION_UP' });

}

document.addEventListener('keypress', onKeyPress);


//timer
const step = (millis) => {

  if (lastTime !== null) {
    const diff = millis - lastTime;
    update(diff / 1000);
  }
  lastTime = millis;
  window.requestAnimationFrame(step);
};

const update = () => {

  draw()
}

const draw = () => {

}







// //update state
// updateSnake()
// changeDirection()
// draw()




const start = () => window.requestAnimationFrame(step);

// start()


// //dispatch
// dispatch({ type: 'ACTION_TYPE' });
// //reducer
// reducer(currentState, action);






















