import { combineReducers } from 'redux'
import { CHANGE_NAME, CHANGE_AGE, INITIALIZE_FORM } from './actions'

const initialState = {
  form: {
    name: '',
    age: ''
  },
  characters: {
    isFetching: false,
    characterArray: []
  }
}

const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      }
    case CHANGE_AGE:
      return {
        ...state,
        age: action.age
      }
    case INITIALIZE_FORM:
      return initialState.formReducer
    default:
      return state
  }
}

const characterReducer = (state = initialState.characters, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  form: formReducer,
  characters: characterReducer
})

export default rootReducer
