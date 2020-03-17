import React from "react";

const UserCard = props => {
  return (
    <div>
      {props.user.map(user => {
        return (
          <div className="card" key={user.id}>
            <img src={user.avatar_url} />
            <div className="card-info">
              <h3 className="name">{user.login}</h3>
              <p>
                <a href={`${user.html_url}`} target="_blank">
                  GitHub profile
                </a>
              </p>
              <p>Bio: {user.bio}</p>
              <p>Followers: {user.followers}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
