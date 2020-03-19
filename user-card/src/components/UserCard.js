import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card" key={user.id}>
      <img src={user.avatar_url} alt="user profile img" />
      <div className="card-info">
        <h3 className="name">{user.login}</h3>
        <p>
          <a
            href={`${user.html_url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub profile
          </a>
        </p>
        <p>Bio: {user.bio}</p>
        <p>Followers: {user.followers}</p>
      </div>
    </div>
  );
};

export default UserCard;
