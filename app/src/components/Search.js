import React from "react";

const Search = props =>
  <form >

      <div className="form-group">
        <label>Search Term:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For News"
          id="search"
        />
      </div>

      <div className="form-group">
        <label>Start Year (Optional):</label>
        <input type="text" className="form-control" id="start-year" value={props.value2} placeholder="YYYY" onChange={props.handleInputChange} name="startYear" />
      </div>

      <div className="form-group">
        <label>End Year (Optional):</label>
        <input type="text" className="form-control" id="end-year" value={props.value3} placeholder="YYYY" onChange={props.handleInputChange} name="endYear" />
      </div>

      <button type="submit" className="btn btn-default" id="run-search" onClick={props.handleFormSubmit}><i className="fa fa-search"></i> Search</button>

    </form>;

export default Search;
