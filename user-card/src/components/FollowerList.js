import React from "react";
import axios from "axios";
import FollowerCard from "./FollowerCard";

class FollowerList extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/tetondan/followers`)
      .then(res => {
        console.log("CDM follower res: ", res);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h3>Followers</h3>
        {this.state.followers.map(follower => {
          return (
            <div key={follower.id}>
              <FollowerCard follower={follower} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default FollowerList;
