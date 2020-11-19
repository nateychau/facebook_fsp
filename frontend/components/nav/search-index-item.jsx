import React from 'react';
import { Link } from 'react-router-dom';

export const SearchItem = ({user}) => {
  return (
    <li className="search-item">
      <div className="img-container">
        <Link to={`/users/${user.id}`}>
          <img src={user.profile_photo}></img>
        </Link>
      </div>
      <div className="search-item-meta">
        <Link to={`/users/${user.id}`}>
          <div>{`${user.first_name} ${user.last_name}`}</div>
        </Link>
      </div>
    </li>
  )
}