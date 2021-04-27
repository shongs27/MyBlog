import { LIKE_STORAGE } from "./types";

export default function (state = [], action) {
  switch (action.type) {
    case LIKE_STORAGE:
      return [...state, action.payload];

    default:
      return state;
  }
}
