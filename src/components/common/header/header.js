import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        className="header-logo"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i class="fi fi-rs-marker absolute-center location-icon"></i>
              <div>Banglore</div>
            </div>
            <i class="fi fi-rr-angle-small-down absolute-center "></i>
          </div>
          <div className="location-search-seperator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center  search-icon"></i>
            <input
              placeholder="Search for restaurant,cuisine or a dish "
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            className="header-profile-image"
            src="	https://b.zmtcdn.com/images/user_avatars/cupcake.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="profile"
          />
          <span className="header-username">Nikhil</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon "></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
