import React, { useState, useEffect } from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';

// class CommentArea extends React.Component {

const CommentArea = (props) => {
  const [asin, setAsin] = useState(props.asin);

  useEffect(() => {
    if (props.asin !== asin) {
      setAsin(props.asin);
    }
  }, [props.asin, asin]);

  // constructor(props) {
  //   super(props);
  //   // this.asin = props.asin;
  //   this.state = {
  //     asin: props.asin,
  //   };
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({ asin: this.props.asin });
  //   }
  // }

  return (
    <>
      <CommentList asin={asin} />
      <AddComment asin={asin} />
    </>
  );
};

export default CommentArea;
