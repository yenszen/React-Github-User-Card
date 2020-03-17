import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/yenszen")
      .then(res => {
        console.log("CDM user res: ", res);
        this.setState({
          user: [...this.state.user, res.data] // res.data is an object, so had to be put into an array to gain access to map function!
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>React Github User Card</h1>
        <UserCard user={this.state.user} />
        {/*  */}
        <FollowerList />
      </div>
    );
  }
}

export default App;
