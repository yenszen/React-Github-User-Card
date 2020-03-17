import React from "react";

const FollowerCard = ({ follower }) => {
  return (
    <div>
      <div className="flwr-card" key={follower.id}>
        <img src={follower.avatar_url} />
        <h3>{follower.login}</h3>
      </div>
    </div>
  );
};

export default FollowerCard;
