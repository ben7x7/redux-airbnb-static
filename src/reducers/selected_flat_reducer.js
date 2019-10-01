export default function(state, action) {
  if (state === undefined) {
    //reducer initialisation
    return null;
  }
    //TODO handle some actions
    if (action.type === 'SELECT_FLAT') {
      return action.payload;
    } else {
      return state;
  }
}

