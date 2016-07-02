import React from 'react'

class LoadMore extends React.Component {
  constructor(props){
    super(props);
    this.handleLoadMore = this.props.handleLoadMore.bind(this);
  }

  render(){
    return <button className="btn btn-primary" onClick={this.handleLoadMore}>Load More</button>
  }

}


export default LoadMore;
