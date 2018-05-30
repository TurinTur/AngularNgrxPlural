import * as companyActions from './../actions/company.actions'

// y devuelve un state. pure function!. state= estado de la store, un array de companies al principio
export function companyReducer (state =  [], action: companyActions.ActionC){
  switch (action.type){
      case companyActions.LOAD_COMPANIES:{
         return [] }
      case companyActions.LOAD_COMPANIES_SUCCESS:{
        return action.payload
      }
      default: {
        return state}
  }
}
