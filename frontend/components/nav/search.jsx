import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/user_actions"
import { Link } from "react-router-dom";

const mSTP = (state) => {
  return {
    users: state.entities.users,
  }
}

const mDTP = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  }
}

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      string: '',
      results: [],
      focus: false,
    }
    this.handleInput = this.handleInput.bind(this);
    this.searchUsers = this.searchUsers.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInput(e){
    this.setState(
      {
        string: e.target.value.toLowerCase(), 
        focus: true,
      }, () => {
      this.searchUsers(this.state.string);
    })
  }

  handleBlur(){
    this.setState({focus: false});
  }

  searchUsers(queryString){
    if(!queryString.length) this.setState({results: []});
    else {
      const results = [];
      for (let key in this.props.users){
        const user = this.props.users[key];
        const firstName = user.first_name.toLowerCase();
        const lastName = user.last_name.toLowerCase();
        if(
          queryString.includes(firstName) ||
          queryString.includes(lastName) ||
          firstName.slice(0, queryString.length) === queryString ||
          lastName.slice(0, queryString.length) === queryString
          ){
            results.push(user);
        }
      }
      this.setState({results: results});
    }
  }
      

  render(){
    const resultList = this.state.results.map((user, i) => {
      return (
        <Link key={i} to={`/users/${user.id}`}>
          <li>{`${user.first_name} ${user.last_name}`}</li> 
        </Link>
      )
    })

    return (
      <div className={
        this.state.focus ? "search-container focus" : "search-container"
      }>
        <input 
          className={
            this.state.focus ? "search-bar focus" : "search-bar"
          }
          type="text" 
          placeholder="Search Facebewk"
          onFocus={() => {this.props.getUsers(); this.setState({focus: true})}}
          onChange={this.handleInput}
          onBlur={this.handleBlur}
        >
        </input>
        <div className={
          this.state.focus ? "search-results focus" : "search-results"
        }>
          {/* <div id="focus-bg"></div> */}
          <ul className="result-list">
            {resultList.length ? resultList : 'No Results'}
          </ul>
        </div>
      </div>
    )
  }
}

export const SearchContainer = connect(mSTP, mDTP)(Search);