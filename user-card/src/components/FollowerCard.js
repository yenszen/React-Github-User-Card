import React from "react";

const FollowerCard = ({ follower }) => {
  return (
    <div>
      <div className="flwr-card">
        <img src={follower.avatar_url} alt="follower profile img" />
        <h3>{follower.login}</h3>
      </div>
    </div>
  );
};

export default FollowerCard;
