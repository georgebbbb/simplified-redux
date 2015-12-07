export default function(reducer, initialState){
  var currentState = initialState
  var currentReducer =reducer
  var listeners = []
  function getState(){
    return currentState
  }
  function dispatch(action){
    currentState=currentReducer(currentState,action)
    listeners.forEach(listener=>listener())
  }
  function subscribe(listener){
    listeners.push(listener)
  }
  return {
    dispatch,
    getState,
    subscribe
  }
}
