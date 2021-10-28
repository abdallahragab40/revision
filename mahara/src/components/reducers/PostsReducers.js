import TYPES from "./Types";

const initalState = {
  items: [],
  item: {},
};

const reducer = (state = initalState, action) => {
  const { payload, type } = action;
  switch (type) {
    case TYPES.FETCH_POSTS:
      return { ...state, items: payload };

    case TYPES.ADD_POST:
      return { ...state, items: [payload, ...state.items], item: payload };

    default:
      return state;
  }
};

export default reducer;
