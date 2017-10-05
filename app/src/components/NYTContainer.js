import React, { Component } from "react";
import Search from "./Search";
import API from "../utils/API";

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
    id: 0,
    startYear: "",
    endYear: "",
    search: "",
    article: [],
    title: "",
    date: "",
    url: ""
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
        this.setState({ result: data, search: "", startYear: "", endYear: "" });
      })
      .then(this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    //  const { name, value } = event.target;
    // this.setState({
    //   [name]: value
    // });
     const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    // let optionalSearch = this.state.search+`&begin_date=${this.state.startYear}0101&end_date=${this.state.endYear}0101`;
    // if (this.state.startYear && this.state.endYear) this.setState({ search : optionalSearch });
    if (this.state.startYear && this.state.endYear) this.state.search = this.state.search+`&begin_date=${this.state.startYear}0101&end_date=${this.state.endYear}0101`
    this.searchArticles(this.state.search);
    this.setState({ search: "" })
  };

  saveArticle = data => {
    API.saveArticle({
      title : this.state.result[data].headline.main,
      date : moment().format('MMMM Do YYYY, h:mm A'),
      url : this.state.result[data].web_url
    })
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ article: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
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
                    value2={this.state.startYear}
                    value3={this.state.endYear}
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
                    {this.state.result.map((article, i) => {
                      return (
                      <div className="panel-body" id="well-section" key={i}>
                        <div className="well">

                          <h3 style={floatLeftHead}>{article.headline.main}</h3><h4 style={floatRightHead}>{moment(article.pub_date).format('MMMM Do YYYY, h:mm A')}</h4>
                          
                          <div style={clear}></div>

                          <hr />

                          <a href={article.web_url} style={floatLeft} target="_blank">{article.web_url}</a><button className="btn btn-primary" style={floatRight} onClick={() => this.saveArticle(i)} >Save</button>          

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


        <div className="row">
          <div className="col-sm-12">
            <br />

            <div className="panel panel-primary">

              <div className="panel-heading">
                <h3 className="panel-title" id="results"><strong><i className="fa fa-table"></i>   Saved Articles</strong></h3>
              </div>

              {this.state.article.length ? (
                <div>
                {this.state.article.map(article => (
                  <div className="panel-body" id="well-section" key={article._id}>
                    <div className="well saved">

                      <h3 className='articleHeadline' style={floatLeftHead}><a href={article.url} target="_blank">{article.title}</a></h3><h4 style={floatRightHead}>{article.date}</h4>

                      <div style={clear}></div>
                      <hr />

                      <button className="btn btn-primary" style={floatRight} onClick={() => this.deleteArticle(article._id)}>Remove</button>

                      <div style={clear}></div>

                    </div>
                  </div>
                ))}
                </div>
                ) : (
                  <div className="panel-body" id="well-section">
                    <div className="well saved">

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
