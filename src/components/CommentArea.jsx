import React from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';

class CommentArea extends React.Component {
  constructor(props) {
    super(props);
    this.asin = props.asin;
  }

  render() {
    return (
      <>
        <CommentList asin={this.asin} />
        <AddComment asin={this.asin} />
      </>
    );
  }
}

export default CommentArea;
