import React from 'react';
import { SearchItem } from "./search-index-item"
import { connect } from 'react-redux';
import { getUsers } from "../../actions/user_actions"
import { getUsersFromQuery } from "../../reducers/selectors/user_selectors";

const mSTP = (state, ownProps) => {
  const queryString = ownProps.match.params.query.replace("_", " ");
  return {
    queryString: queryString,
    users: getUsersFromQuery(state.entities.users, queryString)
  }
}

const mDTP = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

class SearchIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getUsers();
  }

  render(){
    const results = this.props.users.map((user, i) => {
      return <SearchItem user={user} key={i} />
    })
    
    return (
      <div className="search-index-container">
        <div className="search-index-header">
          <h2>Search Results for</h2>
          <div>{this.props.queryString}</div>
        </div>
        <div className="search-index-results">
          <h2>People</h2>
          <ul>
            {results}
          </ul>
        </div>
      </div>
    )
  }
}

export const SearchIndexContainer = connect(mSTP,mDTP)(SearchIndex);