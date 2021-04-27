import { LIKE_STORAGE } from "./types";

export function likeRegister(data) {
  const array = [];
  array.push(data);
  localStorage.setItem("userId", JSON.stringify(array));
  return {
    type: LIKE_STORAGE,
    payload: data,
  };
}
