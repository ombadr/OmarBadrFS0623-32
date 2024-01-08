import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import fantasy from './data/books/fantasy.json'
import BookList from './components/BookList';
import React, { Component } from 'react';
import CommentArea from './components/CommentArea';
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedAsin: null
    }

    this.selectBook = this.selectBook.bind(this)
  }

  selectBook(asin) {
    if (this.state.selectedAsin !== asin) {

      this.setState({ selectedAsin: asin })
    }
  }

  render() {
    return (
      <div className="App">
        <MyNav />
        <Welcome />

        <Container>
          <Row>
            <Col>
              <BookList books={fantasy} onBookSelect={this.selectBook} />
            </Col>
            <Col className='mt-5'>
              {this.state.selectedAsin && <CommentArea asin={this.state.selectedAsin} />}

            </Col>
          </Row>
        </Container>
        <MyFooter />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <MyNav />
//       <Welcome />
//       {/* <AllTheBooks category={fantasy} /> */}
//       <BookList books={fantasy} />
//       <MyFooter />
//     </div>
//   );
// }

export default App;
