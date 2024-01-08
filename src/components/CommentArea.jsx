import React from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';

class CommentArea extends React.Component {
  constructor(props) {
    super(props);
    // this.asin = props.asin;
    this.state = {
      asin: props.asin,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({ asin: this.props.asin });
    }
  }

  render() {
    return (
      <>
        <CommentList asin={this.state.asin} />
        <AddComment asin={this.state.asin} />
      </>
    );
  }
}

export default CommentArea;
