import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q="

//defining API calls that will be handled by express

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  saveArticle: function(articleData) {
  	return axios.post("/api/saved", articleData);
  },
  getArticles: function() {
  	return axios.get("/api/saved");
  },
  deleteArticle: function(id) {
  	return axios.delete("/api/saved/"+id);
  }
  // Gets all books
};