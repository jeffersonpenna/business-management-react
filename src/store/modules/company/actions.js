export function addCompany(company) {
  return {
    type: '@company/ADD',
    company,
  };
}

export function removeCompany(id) {
  return {
    type: '@company/REMOVE',
    id,
  };
}
