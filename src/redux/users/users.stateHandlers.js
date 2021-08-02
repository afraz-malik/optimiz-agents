export const editUser = (oldUser, newUser, index) => {
  return oldUser.map((User, i) => {
    if (i !== index) {
      return User
    }
    return {
      ...newUser,
    }
  })
}
export const deleteUser = (oldUser, index) => {
  return [...oldUser.slice(0, index), ...oldUser.slice(index + 1)]
}
