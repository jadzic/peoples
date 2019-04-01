import React, { Component } from 'react';
import './App.css';
import fetchUserData from "./services/fetchUserData"
import { Header } from './components/header';
import { Footer } from './components/footer';
import Main from './services/main';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users1: [],
      useGridLayout: (!!JSON.parse(localStorage.getItem("useGridLayout"))),
    }
  }

  fetchUsers = () => fetchUserData()
    .then((users) => {
      this.setState({
        users1: users
      })
    });

  componentDidMount = () => {
    this.fetchUsers();
  }

  handleClick = () => {
    this.setState((state) => {
      localStorage.setItem("useGridLayout", !state.useGridLayout);
      return { useGridLayout: !state.useGridLayout };
    })
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <>
        <Header handler={this.handleClick} init={this.fetchUsers} />
        <div className="row grid">
          <input onChange={this.onInputChange} type="search"></input>
          <Main users={this.state.users1} case={this.state.useGridLayout} />
        </div>

        <Footer />
      </>
    );
  }
}

export default App;
