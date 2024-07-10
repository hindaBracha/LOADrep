import { produce } from 'immer'

export const InitialState = {
  //רשימה שתמולא מהשרת
  reportsList: [

  ]
}
export const reportsReducer = produce((state, action) => {
  switch (action.type) {
    case 'FILL_DATA': state.reportsList = action.payload
      break;
    default:
      return state;
  }
}, InitialState)