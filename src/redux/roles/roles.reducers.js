import { deleteRole, editRole } from './roles.stateHandlers'
const initialRoles = {
  roles: [
    {
      roleName: 'Admin',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: false,
        createUsers: false,
        deleteUsers: false,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: false,
      },
    },
    {
      roleName: 'User',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: true,
        createUsers: false,
        deleteUsers: true,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: false,
      },
    },
    {
      roleName: 'Client',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: true,
        createUsers: false,
        deleteUsers: false,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: true,
      },
    },
    {
      roleName: 'Admin',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: false,
        createUsers: false,
        deleteUsers: false,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: false,
      },
    },
    {
      roleName: 'User',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: true,
        createUsers: false,
        deleteUsers: true,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: false,
      },
    },
    {
      roleName: 'Client',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: true,
        createUsers: false,
        deleteUsers: false,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: true,
      },
    },
    {
      roleName: 'Admin',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: false,
        createUsers: false,
        deleteUsers: false,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: false,
      },
    },
    {
      roleName: 'User',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: true,
        createUsers: false,
        deleteUsers: true,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: false,
      },
    },
    {
      roleName: 'Client',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: true,
        createUsers: false,
        deleteUsers: false,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: true,
      },
    },
    {
      roleName: 'Admin',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: false,
        createUsers: false,
        deleteUsers: false,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: false,
      },
    },
    {
      roleName: 'User',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: true,
        createUsers: false,
        deleteUsers: true,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: false,
      },
    },
    {
      roleName: 'Client',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: true,
        createUsers: false,
        deleteUsers: false,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: true,
      },
    },
    {
      roleName: 'Admin',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: false,
        createUsers: false,
        deleteUsers: false,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: false,
      },
    },
    {
      roleName: 'User',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: true,
        createUsers: false,
        deleteUsers: true,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: false,
      },
    },
    {
      roleName: 'Client',
      roles: {
        accountManager: false,
        analytics: false,
        clients: false,
        compaigns: true,
        createUsers: false,
        deleteUsers: false,
        manageAccounts: true,
        manageAccountsUser: true,
        performance: true,
      },
    },
  ],
}
export const roleReducer = (state = initialRoles, action) => {
  switch (action.type) {
    case 'ADD_ROLE':
      return Object.assign({}, state, {
        roles: [...state.roles, action.payload],
      })
    case 'DELETE_ROLE': {
      const newRoles = deleteRole(state.roles, action.payload)
      return { ...state, roles: newRoles }
    }
    case 'EDIT_ROLE': {
      const newRole = editRole(
        state.roles,
        action.payload.newRole,
        action.payload.index
      )

      return { ...state, roles: newRole }
    }
    default:
      return state
  }
}
