/* eslint-disable func-style */

export const CONSTANTS = {
  TOGGLE: "TOGGLE",
  SET: "SET",
  UNSET: "UNSET"
};

export function clickedPhotoReducer(state, action) {
  switch (action.type) {
  case CONSTANTS.SET:
    return action.info;
  case CONSTANTS.UNSET:
    return null;
  default:
    return state;
  }
}

export function favPhotoReducer(state, action) {
  switch (action.type) {
  case CONSTANTS.TOGGLE:
    if (!state.includes(action.id)) {
      return [...state, action.id];
    }
    return state.filter(i => i !== action.id);
  default:
    return state;
  }
}
