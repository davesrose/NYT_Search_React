# NYT_Search_React

Live website can be found here:

[https://davesrose-nyt-react.herokuapp.com/](https://davesrose-nyt-react.herokuapp.com/)

We're tasked to take a previous class project that was getting data from the New York Times API.  The previous project used API calls and rendered everything in static Javascript.  This time, we're supposed to use React to create components, and react-router to provide callback routes for saving retrieved articles (as well as be able to delete them) from a mongo database.

My main component is one titled NYTContainer, and it has states for the search query (including search topic, and optional start year as well as end year), the first 5 results of the NYT API response, and the saved articles array (that includes the article title, moment.js's date now, as well as article url).


## File structure used:

```
.
├── client
│   ├── build
│   ├── public
│   └── src
│       ├── components
│       ├── pages
│       └── utils
├── controllers
│   └── articlesController.js
│ 
├── models
│   ├── article.js
│   └── index.js
│
├── node_modules
│
├── routes
│   └── api
│       ├── Article.js
│       └── index.js
│       index.js
│
│
└─ server.js
```

- - -
