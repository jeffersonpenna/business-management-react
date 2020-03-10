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
        let employeeIndex = -1;
        do {
          employeeIndex = draft.findIndex(
            item => item.company == action.companyId
          );

          if (employeeIndex != -1) {
            draft.splice(employeeIndex, 1);
          }
        } while (employeeIndex != -1);
      });
    default:
      return state;
  }
}
