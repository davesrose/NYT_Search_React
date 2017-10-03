import React, { Component } from "react";
import Search from "./Search";
import API from "../utils/API";
import Saved from "./Saved";

const moment = require("moment");

const titleStyle = {
  "color" : "white",
  "background-color" : "#20315A"
}

const floatLeftHead = {
  "float" : "left",
  "padding" : "0px",
  "height" : "0px",
  "margin-top" : "-5px"
}

const floatLeft = {
  "float" : "left",
}

const floatRightHead = {
  "float" : "right",
  "padding" : "0px",
  "height" : "0px",
  "margin-top" : "-5px"
}

const floatRight = {
  "float" : "right"
}

const clear = {
  "clear" : "both"
}

class NYTContainer extends Component {
  state = {
    result: {},
    articleData: [],
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchArticles("US News");
  }

  searchArticles = (query) => {
    API.search(query)
      .then(res => {
        const data = [];
        for (let i = 0; i < 5; i++) {
          data.push(res.data.response.docs[i])
        }
        this.setState({ search: "", startYear: "", endYear: "" })
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
    if (this.state.startYear && this.state.endYear) this.state.search = this.state.search+`&begin_date=${this.state.startYear}0101&end_date=${this.state.endYear}0101`
    this.searchArticles(this.state.search);
  };

  saveArticle = data => {
    console.log(data);
    //console.log(this.state.articleData);
    API.saveArticle({
      //title : this.state.result.headline.main,
      //date : this.state.result.pub_date,
      //url : this.state.result.web_url
    })
  }

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
                <h3 className="panel-title" id="results"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
              </div>
                {console.log(this.state.result)}
                {this.state.result.length ? (
                  <div>
                    {this.state.result.map(article => {
                      
                      return (
                      <div className="panel-body" id="well-section">
                        <div className="well">

                          <h3 style={floatLeftHead}>{article.headline.main}</h3><h4 style={floatRightHead}>{article.pub_date = moment(article.pub_date).format('MMMM Do YYYY, h:mm A')}</h4>
                          
                          <div style={clear}></div>

                          <hr />

                          <a href={article.web_url} style={floatLeft} target="_blank">{article.web_url}</a><button className="btn btn-primary" style={floatRight} onClick={this.saveArticle} >Save</button>          

                          <div style={clear}></div>

                        </div>
                      </div>
                      )

                    })}
                  </div>
                ) : (

                  <div className="panel-body" id="well-section">
                    <div className="well">

                    </div>
                  </div>

                )}
              
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default NYTContainer;
