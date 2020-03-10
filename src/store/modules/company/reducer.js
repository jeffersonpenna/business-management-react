import producer from 'immer';

export default function companyReducer(state = [], action) {
  switch (action.type) {
    case '@company/ADD': {
      return producer(state, draft => {
        const { company } = action;
        draft.push(company);
      });
    }
    case '@company/REMOVE':
      return producer(state, draft => {
        const companyIndex = draft.findIndex(
          company => company.id === action.companyId
        );

        if (companyIndex >= 0) {
          draft.splice(companyIndex, 1);
        }
      });
    default:
      return state;
  }
}
