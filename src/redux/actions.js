export const AddClientAction = (payload) => {
  return {
    type: 'ADD_CLIENT',
    payload: payload,
  }
}
export const EditClientAction = (payload) => ({
  type: 'EDIT_CLIENT',
  payload: payload,
})
export const DeleteClientAction = (payload) => ({
  type: 'DELETE_CLIENT',
  payload: payload,
})
