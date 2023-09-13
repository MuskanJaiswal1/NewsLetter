const general = document.getElementById("general");
const business = document.getElementById("business");
const entertainment = document.getElementById("entertainment");
const health = document.getElementById("health");
const science = document.getElementById("science");
const sports = document.getElementById("sports");
const technology = document.getElementById("technology");

const newsQuery = document.getElementById("newsQuery");
const searchBtn = document.getElementById("searchBtn");
const newsType = document.getElementById("newsType");
const newsDetails = document.getElementById("newsDetails");

var newsDataArr = [];

const API_KEY = "426283dcd5914d8b811a7035d5616ead";
const HEADLINES_NEWS =
  "newsapi.org/v2/top-headlines?country=in&apiKey=426283dcd5914d8b811a7035d5616ead";
const GENERAL_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const ENTERTAINMENT_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const HEALTH_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=";
const SCIENCE_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=";
const SPORTS_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const TECHNOLOGY_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

general.addEventListener("click", function () {
  fetchGeneralNews();
});

business.addEventListener("click", function () {
  fetchBusinessNews();
});

entertainment.addEventListener("click", function () {
  fetchEntertainmentNews();
});

health.addEventListener("click", function () {
  fetchHealthNews();
});

science.addEventListener("click", function () {
  fetchScienceNews();
});

sports.addEventListener("click", function () {
  fetchSportsNews();
});

technology.addEventListener("click", function () {
  fetchTechnologyNews();
});

searchBtn.addEventListener("click", function () {
  // newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
  fetchQueryNews();
});

const fetchGeneralNews = async () => {
  const response = await fetch(GENERAL_NEWS + API_KEY);
  // successful response then add data else error msg
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

fetchGeneralNews();

const fetchBusinessNews = async () => {
  const response = await fetch(BUSINESS_NEWS + API_KEY);
  // successful response then add data else error msg
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchEntertainmentNews = async () => {
  const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
  // successful response then add data else error msg
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchHealthNews = async () => {
  const response = await fetch(HEALTH_NEWS + API_KEY);
  // successful response then add data else error msg
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchScienceNews = async () => {
  const response = await fetch(SCIENCE_NEWS + API_KEY);
  // successful response then add data else error msg
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchSportsNews = async () => {
  const response = await fetch(SPORTS_NEWS + API_KEY);
  // successful response then add data else error msg
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchTechnologyNews = async () => {
  const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
  // successful response then add data else error msg
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchQueryNews = async () => {
  if (newsQuery.value == null) return;
  const response = await fetch(
    SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY
  );
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle error
    console.log(response.status, response.statusText);
  }
  displayNews();
};

function displayNews() {
  newsDetails.innerHTML = "";
  if (newsDataArr.length == 0) {
    newsDetails.innerHTML = "<h5>No Data Found.</h5>";
    return;
  }
  newsDataArr.forEach((news) => {
    var date = news.publishedAt.split("T");
    var col = document.createElement("div");
    col.className = "card";
    var card = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("height", "190px");
    image.setAttribute("width", "330px");
    image.src = news.urlToImage;

    var cardBody = document.createElement("div");
    var newsHeading = document.createElement("h3");
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;
    var dateHeading = document.createElement("h6");
    dateHeading.className = "date";
    dateHeading.innerHTML = date[0];
    var description = document.createElement("p");
    description.className = "text-muted";
    description.innerHTML = news.description;

    var link = document.createElement("a");
    link.className = "btn btn-dark ";
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "Read More";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(description);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);
    col.appendChild(card);
    newsDetails.appendChild(col);
  });
}
