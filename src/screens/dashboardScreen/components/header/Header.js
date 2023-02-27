import React, { useState } from "react";

import "./Header.css";

function Header() {
  const [movieName, setMovieName] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(false);

  const handleMovieName = (e) => {
    setMovieName(e.target.value);
  };

  const handleSearchBoxSelect = () => {
    setActiveDropdown(!activeDropdown);
  };

  const handleMovieSearch = async (e) => {
    e.preventDefault();
    console.log(movieName);
    setMovieName("");
  };
  return (
    <div className="header">
      <h3 className="header-logo">OMDb</h3>
      <form className="header-search-form" onSubmit={handleMovieSearch}>
        <div className="header-search-select" onClick={handleSearchBoxSelect}>
          <h3 className="header-search-select-option">All</h3>
          <i
            className={`fa-solid fa-chevron-down header-search-select-icon ${
              activeDropdown ? "expanded" : ""
            }`}
          ></i>
          {activeDropdown && (
            <div className="header-search-select-dropdown">
              <div className="content">
                <i className="fa-solid fa-magnifying-glass"></i>
                <h3>All</h3>
              </div>
              <div className="content">
                <i className="fa-solid fa-film"></i>
                <h3>Titles</h3>
              </div>
              <div className="content">
                <i class="fa-solid fa-tv"></i>
                <h3>Movies</h3>
              </div>
              <div className="content">
                <i className="fa-solid fa-user-group"></i>
                <h3>Celebs</h3>
              </div>
            </div>
          )}
        </div>
        <input
          type="text"
          value={movieName}
          className="header-search-input"
          placeholder="  Search omdb (eg : Pirates of the caribbean)"
          onChange={handleMovieName}
          required
        />
      </form>
    </div>
  );
}

export default Header;
