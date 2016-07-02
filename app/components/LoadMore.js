import React from 'react'

class LoadMore extends React.Component {
  constructor(props){
    super(props);
    this.handleLoadMore = this.props.handleLoadMore.bind(this);
    this.loading = this.props.loading;
  }

  isDisabled(){
    disabledClass = 'disabled';
    if (this.loading){
      return disabledClass;
    }
    return '';
  }

  render(){
    return <button className={'btn btn-primary' + this.isDisabled()} onClick={this.handleLoadMore}>Load More</button>
  }

}


export default LoadMore;
