import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogList from './components/BlogList'
// import articles from './data/news.json'
import axios from 'axios'

// const link = "https://raw.githubusercontent.com/jakarta-workshop-react/react-blog/master/src/data/news.json"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  // componentDidMount() {
  //   fetch(link)
  //     .then((data) => data.json())
  //     .then((data) => {
  //       this.setState({
  //         articles: data
  //       })
  //     })
  // }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/jakarta-workshop-react/react-blog/master/src/data/news.json')
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
  }

  render() {
    // console.log(articles)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.state.articles.map((item, index) => <BlogList article={item} key={index} />)}

      </div>
    );
  }
}

export default App;
