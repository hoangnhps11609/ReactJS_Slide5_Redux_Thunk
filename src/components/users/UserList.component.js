import React, { Component } from "react";
import { connect } from "react-redux";
import  { fetchUsersAsync } from "../../redux/users/user-action";

class UserList extends Component {
  componentDidMount = () => {
    this.props.fetchUsersAsync();
  };
  render() {
    return (
      <div className="ui segment container">
        {this.props.isFetching && (
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading...</div>
          </div>
        )}
        <table className="ui collapsing table loading">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.length > 0 &&
              this.props.users.map((item) => (
                <tr key={item.id}>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
  isFetching: state.userReducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
    fetchUsersAsync: () => dispatch(fetchUsersAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
