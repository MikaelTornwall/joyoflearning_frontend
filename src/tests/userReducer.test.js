import userReducer from '../reducers/userReducer'
import deepFreeze from 'deep-freeze'

describe('userReducer', () => {
  test('returns new state with action ASSIGN_USER', () => {
    const state = {}
    const action = {
      type: 'ASSIGN_USER',
      data: {
        username: 'Testi',
        id: '12345',
        role: 'Admin'
      }
    }

    deepFreeze(state)
    const newState = userReducer.userReducer(state, action)
    console.log('newState: ', newState)

    expect(newState).toBe(action.data)
  })

  test('replaces previous user state with new state', () => {
    const state = {}
    const action = {
      type: 'ASSIGN_USER',
      data: {
        username: 'Test',
        id: '12345',
        role: 'Admin'
      }
    }

    deepFreeze(state)
    const newState = userReducer.userReducer(state, action)

    const updatedAction = {
      type: 'ASSIGN_USER',
      data: {
        username: 'Second test',
        id: '54321',
        role: 'Student'
      }
    }

    deepFreeze(newState)
    const updatedState = userReducer.userReducer(newState, updatedAction)

    expect(updatedState).toBe(updatedAction.data)
  })
})
