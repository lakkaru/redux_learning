export const GET_USER_LIST="GET_USER_LIST";

export function getUserList() {
  return {
    type: GET_USER_LIST,
    payload: [{ name: 'lakshman' }, { name: 'karunasena' }],
  };
}
