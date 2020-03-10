import producer from 'immer';

export default function searchReducer(state = [], action) {
  switch (action.type) {
    case '@search/UPDATE': {
      return producer(state, draft => {
        const { search } = action;
        draft[0] = search;
      });
    }
    default:
      return state;
  }
}
