import React ,{useState} from "react";
import "./PersonalInfo.css";
import { FaRegEdit } from "react-icons/fa";

const PersonalInfo = () => {
    const [isDisabled, setIsDisabled] = useState(true);

  const handleToggle = () => {
    setIsDisabled(!isDisabled);
  };
  return (
    <div>
      <div className="user-info">
        <button className="user-edit-profile-btn" onClick={handleToggle}><FaRegEdit />Edit Profile</button>
        <div className="user-name-div">
          <div className="user-name">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className="input-box-user" disabled={isDisabled}/>
          </div>
          <div className="user-name">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="input-box-user" disabled={isDisabled}/>
          </div>
        </div>
        <div className="user-name-div">
          <div className="user-name">
            <label htmlFor="phone">Phone</label>
            <input type="text" className="input-box-phone" disabled={isDisabled}/>
          </div>
          <div className="user-name">
            <label htmlFor="email">Email</label>
            <input type="email" className="input-box-email" disabled={isDisabled}/>
          </div>
        </div>
        {/* </di */}
        <div className="user-address">
          <label htmlFor="address">Address</label>
          <input type="text" className="input-box-address" disabled={isDisabled}/>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
