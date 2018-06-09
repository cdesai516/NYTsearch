$(document).ready(function() {
var userSearch = "";
var userStartDate = "";
var userEndDate =  "";
var userArtNumber = 0;

console.log("userSearch");
console.log("userStartDate");
console.log("userEndDate");
console.log("userArtNumber");
    

$("#search").on("click", function(event){

    event.preventDefault();


//we Realized that we needed an api key.

var urlink = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
let userSearch = $("#userInput1").val;
let userStartDate = $("#userInput3").val;
let userEndDate =$("#userInput4").val;
let userArtNumber = $("#userInput2").val;

console.log(userSearch);
console.log(userStartDate);
var url = urlink+userSearch+userStartDate+userEndDate+userArtNumber
console.log(url);

url += '?' + $.param({
  'q': "cavs"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

})

})

