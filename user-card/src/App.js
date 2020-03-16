import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/yenszen")
      .then(res => {
        console.log("CDM axios GET: initial ", res);
        this.setState({
          users: [...this.state.users, res.data] // res.data is an object, so had to be put into an array to gain access to map function!
        });
      })
      .catch(err => console.log(err));

    axios
      .get("https://api.github.com/users/yenszen/followers")
      .then(res => {
        console.log("CDM axios GET: followers: ", res);
        this.setState({
          users: [...this.state.users, res.data]
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      console.log("latest users data", this.state.users),
      (
        <div className="App">
          <h1>React Github User Card</h1>
          {this.state.users.map(user => {
            return (
              <div className="card" key={user.id}>
                <img src={user.avatar_url} />
                <div className="card-info">
                  <h3 className="name">{user.login}</h3>
                  <p className="username">GitHub username: {user.login}</p>
                  <p>
                    <a href={`${user.html_url}`} target="_blank">
                      GitHub profile
                    </a>
                  </p>
                  <p>Bio: {user.bio}</p>
                  <p>Followers: {user.followers}</p>
                  <p>Following: {user.following}</p>
                </div>
              </div>
            );
          })}
        </div>
      )
    );
  }
}

export default App;
