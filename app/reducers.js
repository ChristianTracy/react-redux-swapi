import {LOAD_FETCHED_DATA} from './actions';

export function swapiReducer(state, action){
  switch (action.type) {
  case LOAD_FETCHED_DATA:
    console.log(action.body);
    return {
      people: state.people.concat(action.body.results),
      next: action.body.next
    }
  default:
    return {
      people: [],
      next: ''
    };
  }
}
