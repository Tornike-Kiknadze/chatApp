export const ADD_TEXT = "ADD_TEXT";

export function addText(text) {
  const action = { type: ADD_TEXT, text };
  return action;
}
