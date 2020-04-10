import * as Types from "./../constants/ActionType";
import * as Messages from "./../constants/Message";

var initiallState = Messages.MGS_WELLCOM;

const message = (state = initiallState, action) => {
  
  switch (action.type) {
    case Types.CHANGE_MESSAGE:
      
      return action.message;
    default:
      return state;
  }
};

export default message;