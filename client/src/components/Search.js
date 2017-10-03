import React from "react";

const Search = props =>
  <form>

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
        <input type="text" className="form-control" id="start-year" />
      </div>

      <div className="form-group">
        <label>End Year (Optional):</label>
        <input type="text" className="form-control" id="end-year" />
      </div>

      <button type="submit" className="btn btn-default" id="run-search" onClick={props.handleFormSubmit}><i className="fa fa-search"></i> Search</button>
      <button type="button" className="btn btn-default" id="clear-all" onClick={this.clearForm}><i className="fa fa-trash"></i> Clear Results</button>

    </form>;

export default Search;
