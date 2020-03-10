import producer from 'immer';

export default function companyReducer(state = [], action) {
  switch (action.type) {
    case '@employee/ADD': {
      return producer(state, draft => {
        const { employee } = action;
        draft.push(employee);
      });
    }
    case '@employee/REMOVE_FROM_COMPANY':
      return producer(state, draft => {
        console.log('@employee/REMOVE_FROM_COMPANY', action.companyId);
        // const companyIndex = draft.findIndex(
        //   company => company.id === action.companyId
        // );

        // if (companyIndex >= 0) {
        //   draft.splice(companyIndex, 1);
        // }
      });
    default:
      return state;
  }
}
