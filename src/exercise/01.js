// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, dispatch) => {
  switch (dispatch.type) {
    case 'INCREMENT':
      return {...state, count: state.count + dispatch.step}
    default:
      throw new Error(`Unhandled action type: ${dispatch.type}`)
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
