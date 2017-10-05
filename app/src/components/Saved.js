import React, { Component } from "react";
import API from "../utils/API";

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

class Saved extends Component {

  state = {
    article: [],
    title: "",
    date: "",
    url: ""
  };

  componentDidMount() {
    this.loadArticles();
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
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

	render() {
		return (
      <div>
      {this.state.article.length ? (
        <div>
        {this.state.articles.map(article => (
          <div className="panel-body" id="well-section">
            <div className="well saved">

              <h3 className='articleHeadline' style={floatLeftHead}><a href={article.url} target="_blank">{article.title}</a></h3><h4 style={floatRightHead}>{article.date}</h4>

              <div style={clear}></div>
              <hr />

              <button className="btn btn-primary" style={floatRight} onClick={() => this.deleteBook(article._id)}>Remove</button>

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
		)
	}

}
export default Saved;