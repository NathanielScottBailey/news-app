
var KEY= '6749d9263afb42e58644248fa4df7246';
//

var $button = $('#button')
var $body= $('#body');

var articles = [];
 var result	=[];

 var documents = "" +
 "<div style='position: relative;left: 540px;top:300px;z-index:2; color: gold; background-color: black;width:100px;border-radius:18%;'><p>  {{author}} </p> </div>" +
 "<div style='position: relative;left: 540px;top:300px;z-index:2; color: gold; background-color: black;width:300px;border-radius:18%;'><p> {{ description }} </p> </div>" +
  "<div style='position: relative;left: 540px;top:300px;z-index:2; color: gold; background-color: black;width:200px;border-radius:18%;'><p> {{ publishedAt}} </p> </div>" +
 "<div style='position: relative;left: 540px;top:300px; z-index:2; color: gold;background-color: black;width:300px;border-radius:18%;'><p> {{ title }} </p> </div>" +
 "<div> <a href= '{{url}}' target='_blank' ><img src='{{ urlToImage}}' style='width: 800px; position: relative; left: 300px; border: 4px solid black; border-radius:50%;'></a> </div>";

function print(result){
	$body.append(Mustache.render(documents, result))
};

$.ajax({
  url:' https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=' + KEY,
  method: 'GET',
}).done(function(result) {
	articles = result.articles
	result= result
  	console.log(articles);
  	$.each(result.articles, function(i , result){;
  	});
  });
var detailsPresent = false
//var bye = art.articles[articleNumber]
$('#button').on('click',function(){
 
	var articleNumber= $('#articleNumber').val();
	print(articles[articleNumber]);
	//if (detailsPresent === true) {
	//	result.empty();
	//	detailsPresent = false;
	//}
});
 $("#talkbubble").fadeOut();
 $("#header").hover(function(){
    $("#talkbubble").fadeIn("slow");
},
function(){
    $("#talkbubble").fadeOut();
});


 var detailsPresent=true
$('body').css({'background-image': 'url(img/forest3.jpg)','overflow-x': 'hidden', 'background-position': '50% 40%'})
$('#header').css({'background-image': 'url(img/deer1.jpg)', 'background-position': '20% 65%', 'border': '5px solid black', 'color': '#D0D3D4', 'position': 'relative', 'right': '20px'})
$('.title').css({'position':'relative','left':'300px'})
$('h1').css({'background-color':'black', 'border': '3px solid #D4AC0D', 'width': '350px','border-radius':'20%'})
$('.fillIn').css({'position':'relative','left':'160px', 'color':'black'})
$('#button').css({'position':'relative','left':'170px'})
//$('.photo').css({'background-size': '400px'})
//when a user inputs a number the click event will execute
//a function that appends the individual object to the DOM

//user wants #3 article - articles[2].
//get one article accept articleNumber
//articles[articleNumber]
//send this to the print function

 

// }).fail(function() {
//   console.log('error');
// });


//$body.append(
  //	'<p>' + result.articles[0].author + '</p>', 
 // 	'<p>' + result.articles[2].author + '</p>', 
 // ) 

