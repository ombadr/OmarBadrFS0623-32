import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import fantasy from './data/books/fantasy.json'
import BookList from './components/BookList';
import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MyNav />
        <Welcome />
        {/* <AllTheBooks category={fantasy} /> */}
        <BookList books={fantasy} />
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
