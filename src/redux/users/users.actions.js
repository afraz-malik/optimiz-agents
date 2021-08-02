export const AddUserAction = (payload) => {
  return {
    type: 'ADD_USER',
    payload: payload,
  }
}
export const EditUserAction = (payload) => ({
  type: 'EDIT_USER',
  payload: payload,
})
export const DeleteUserAction = (payload) => ({
  type: 'DELETE_USER',
  payload: payload,
})
