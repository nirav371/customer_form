const CustomerDetails = [];
// name: "",email:'', mobileNo:'',gender:'',favrouiteSubject:'',hobbies:'',date:'',picture:'',
const customerDetailsReducer = (state = CustomerDetails, action) => {
  if (action.type === "coustemerDetails") {
    console.log(typeof action.payload);
    state.push(action.payload);
    state = [...state]
    return state;
  } else if (action.type === "UpdatecoustemerDetails") {
    console.log(action.payload.customerid);
    state.splice(action.payload.customerid, 1);
    state = [
      ...state.slice(0, action.payload.customerid),
      action.payload.Cd,
      ...state.slice(action.payload.customerid),
    ];
    return state;
  } else if(action.type === 'DeletecoustemerDetails'){
    state.splice(action.payload, 1)
    state = [...state]
    return state
  } else { 
    return state;
  }
};

export default customerDetailsReducer;
