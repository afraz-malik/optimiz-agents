export const editClent = (oldClient, newClient, index) => {
  return oldClient.map((client, i) => {
    if (i !== index) {
      return client
    }
    return {
      ...newClient,
    }
  })
}
export const deleteClient = (oldClient, index) => {
  return [...oldClient.slice(0, index), ...oldClient.slice(index + 1)]
}
