import React, { Component } from "react";
import Search from "./Search";
import ArticleDetail from "./ArticleDetail";
import API from "../utils/API";

const titleStyle = {
  "color" : "white",
  "background-color" : "#20315A"
}

class NYTContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchArticles("US News");
  }

  searchArticles = (query, startYear, endYear) => {
    API.search(query, startYear, endYear)
      .then(res => {
        const data = [];
        for (let i = 0; i < 5; i++) {
          data.push(res.data.response.docs[i])
        }

        this.setState({ result: data });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };


  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state.search);
  };

  render() {
    return (
      <div className="container">

        <div className="jumbotron" style={titleStyle}>
          <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
          <h2 className="text-center">Search and annotate articles of inerest!</h2>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <br />

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
              </div>
              <div className="panel-body">

                <Search
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />

              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <br />

            <div className="panel panel-primary">

              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
              </div>

              {console.log(this.state.result)}
              <ArticleDetail results={this.state.result} />
              
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default NYTContainer;
