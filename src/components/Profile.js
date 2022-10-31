import React from "react";
import pfp  from "../assets/img/pfp.jpg";
import share from '../assets/icons/_Avatar share button.svg'

const Profile = () => {
  return (
    <div className="profile">
        <div className="share">
            <img src={share}/>
        </div>
      <div className="pfp" id="profile__img">
        <img src={pfp} />
      </div>
      <h3 className="usr__twitter" id="twitter">
        Odediran
      </h3>
      <h3 className="usr__slack hidden" id="slack">
        Seyiodediran
      </h3>
    </div>
  );
};

export default Profile;
