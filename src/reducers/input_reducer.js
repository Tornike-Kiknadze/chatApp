import { ADD_TEXT } from "../actions";
import inputText from "../data/inputText.json";

function inputReducer(state = inputText, action) {
  switch (action.type) {
    case ADD_TEXT:
      let input = [...state, action.text];
      return input;
    default:
      return state;
  }
}

export default inputReducer;
