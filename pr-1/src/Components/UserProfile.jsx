 
import React from "react";
import "../css/UserProfile.css"; 
 
class UserProfile extends React.Component {

    constructor(props){
        super()
    }
  render() {
    const { user } = this.props;   

    return (
      <div className="user-profile">
        <div className="profile-header">
          <img
            className="profile-pic"
            src={this.props.profilePic} 
            alt={`${this.props.name}'s profile`} 
          />
          <h2 className="user-name">{this.props.name}</h2>
          <hr/>
        </div>
        <div className="profile-details">
              <p><strong>Occupation  :</strong> {this.props.Occupation}</p>
          <p><strong>Email  :</strong> {this.props.email}</p>
          <p><strong>Location  :</strong> {this.props.location}</p>
          <p><strong>Age  :</strong> {this.props.age}</p>
        </div> 
      </div>
    );

    
  }
}

export default UserProfile;
