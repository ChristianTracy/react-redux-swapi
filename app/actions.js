export const LOAD_FETCHED_DATA = 'LOAD_FETCHED_DATA';
export const START_LOADING_DATA = 'START_LOADING_DATA';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export let loadFetchedData = (body) => {
  return {
    type: LOAD_FETCHED_DATA,
    body: body
  };
};

export let fetchData = () => {
  return (dispatch) => {
    dispatch(startLoading());
    fetch('http://swapi.co/api/people/')
      .then((res) => {
        return res.json()
      }, (err) => {
        console.error("RROR");
        console.error(err);
      })
      .then((body) => {
        dispatch(loadFetchedData(body));
      });
  };
};

export let loadMore = (nextPage) => {
  return (dispatch) => {
    fetch(nextPage)
      .then((res) => {
        return res.json()
      }, (err) => {
        console.error("RROR");
        console.error(err);
      })
      .then((body) => {
        dispatch(loadFetchedData(body));
      });
  };
};

export let startLoading = () => {
  return {
    type: START_LOADING_DATA
  };
}
