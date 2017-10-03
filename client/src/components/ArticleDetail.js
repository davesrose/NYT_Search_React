import React, { Component } from "react";
//import NYTContainer from "./NYTContainer";

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

const ArticleDetail = props =>
<div>
  {console.log(props.results)}
  <div className="panel-body" id="well-section">
    <div className="well">

      <h3 style={floatLeftHead}>{props.title}</h3><h4 style={floatRightHead}>{props.date}</h4>
      
      <div style={clear}></div>

      <hr />

      <a href="{props.url}" style={floatLeft}>{props.url}</a><button className="btn btn-primary" style={floatRight}>Save</button>          

      <div style={clear}></div>

    </div>
  </div>;
</div>
export default ArticleDetail;

  // {if (props.results !=== undefined) props.results.map((props, i) => {