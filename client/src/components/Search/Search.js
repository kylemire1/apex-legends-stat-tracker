import React from "react";

const Search = props => {
  return (
    <section className="search">
      <h1>Search for a Legend</h1>
      <form onSubmit={props.onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="platform">Platform</label>
          <select
            name="platform"
            id="platform"
            defaultValue={props.selectedPlatform}
            onChange={props.onChangeHandler}
          >
            <option value="origin">PC</option>
            <option value="psn">Playstation 4</option>
            <option value="xbl">Xbox</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={props.searchValue}
            name="text"
            placeholder="Origin ID, Xbox Live Gamertag, or PSN ID"
            onChange={props.onChangeHandler}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="btn" />
        </div>
      </form>
    </section>
  );
};

export default Search;
