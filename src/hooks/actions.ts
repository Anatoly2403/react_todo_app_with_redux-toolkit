import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { todosActions } from "../store/slices/todosSlice";

const actions = {
  ...todosActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
