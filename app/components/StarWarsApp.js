import React from 'react'
import Person from './Person.js'
import LoadMore from './LoadMore'
import {loadMore} from '../actions'

class StarWarsApp extends React.Component {
  constructor(props){
    super(props);
    this.store = this.props.store;
    this.state = this.store.getState();
    this.loadMoreHandler = this.loadMoreHandler.bind(this);
  }

  loadMoreHandler(){
    this.store.dispatch(loadMore(this.store.getState().next));
  }

  componentDidMount() {
    let store = this.store;
    let self = this;
    store.subscribe(() => self.setState(store.getState()));
  }
  render () {
    let components = this.state.people.map((val, idx) => {
      return <Person person={val} key={val.name.replace(' ', '-')}/>
    });
    return <div>
      {components}
      <LoadMore handleLoadMore={this.loadMoreHandler}></LoadMore>
    </div>;
  }
}

export default StarWarsApp;
