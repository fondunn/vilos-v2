import { createAction } from 'redux-actions'

export const createRequestAction = (actionType, payloadCreator) => {
  const actionCreator = createAction(actionType, payloadCreator)
  actionCreator.success = `${actionType}_SUCCESS`
  actionCreator.fail = `${actionType}_FAIL`
  return actionCreator
}