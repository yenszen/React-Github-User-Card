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
      .get(`https://api.github.com/users/yenszen/followers`)
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
        {/* <FollowerCard followers={this.state.followers} /> */}
        {this.state.followers.map(follower => {
          return <FollowerCard follower={follower} />;
        })}
      </div>
    );
  }
}

export default FollowerList;
