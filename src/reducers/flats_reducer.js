export default function(state, action) {
  if (state === undefined) {
    //reducer initialisation
    return []
  }
    //TODO handle some actions
  if (action.type === 'SET_FLATS') {
    return action.payload;
  } else {
    return state;
  }

   // instead of (if else)

   //   switch (action.type) {
   //     case 'SET_FLATS':
   //       return action.payload;
   //     default:
   //       return state;
   //   }
}
