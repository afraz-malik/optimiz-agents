export const editRole = (oldRoles, newRole, index) => {
  return oldRoles.map((client, i) => {
    if (i !== index) {
      return client
    }
    return {
      ...newRole,
    }
  })
}
export const deleteRole = (roles, index) => {
  return [...roles.slice(0, index), ...roles.slice(index + 1)]
}
