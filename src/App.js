import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogList from './components/BlogList'
import SearchBox from './components/SearchBox'

// import articles from './data/news.json'
import axios from 'axios'

// const link = "https://raw.githubusercontent.com/jakarta-workshop-react/react-blog/master/src/data/news.json"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      searchKey: [],
      Loading: true
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
          articles: res.data,
          Loading: false
        })
      })
  }

  doSearch = (e) => {
    this.setState({
      searchKey: e.target.value
    })
  }

  render() {
    const ComponentLoading = <h1> LOADING...</h1>
    const Article =
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {this.state.searchKey}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchBox
          onSearch={this.doSearch}
        />
        {
          this.state.articles.map((item, index) => <BlogList article={item} key={index} />)
        }
      </div>

    const Filtered = this.state.articles.filter(article =>
      article.title.includes(this.state.searchKey))

    console.log(this.state.searchKey)
    return (
      <div className="App">
        {this.state.Loading ? ComponentLoading : Article}
      </div >
    );
  }
}

export default App;
