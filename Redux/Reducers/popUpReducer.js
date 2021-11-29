import * as PopUpAction from "../Actions/popUpActions";

export const popUpReducer = (state = false, action) => {
  if (action.type == PopUpAction.SHOW_POP_UP) return true;
  if (action.type == PopUpAction.HIDE_POP_UP) return false;
  return state;
};
