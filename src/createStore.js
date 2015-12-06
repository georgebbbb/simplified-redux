export default function(reducer, initialState){

  var currentState = initialState
  var currentReducer =reducer
  var listeners = []

  function getState(){
    return currentState
  }

  function dispater(action){
    currentState=currentReducer(action)
    listeners.forEach(listener=>listener())
  }

  function subscribe(listener){
    listeners.push(listener)
  }

  return {
    dispater,
    getState,
    subscribe
  }
}
