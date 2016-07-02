import {LOAD_FETCHED_DATA, START_LOADING_DATA} from './actions';

export function swapiReducer(state, action){
  switch (action.type) {
  case LOAD_FETCHED_DATA:
    console.log(action.body);
    return {
      people: state.people.concat(action.body.results),
      next: action.body.next,
      loading: false
    };
  case START_LOADING_DATA:
    return{
      people: state.people.concat(action.body.results),
      next: action.body.next,
      loading: true
    }
  default:
    return {
      people: [],
      next: '',
      loading: false
    };
  }
}
