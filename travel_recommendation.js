
var homeButton = document.findElementByID('home');
var aboutButton = document.findElementByID('about');
var contactButton = document.findElementByID('contact');

document.querySelector(".search-bar button").addEventListener('click',function(){
	
	
	var input = document.querySelector(".search-bar input").value.toLowerCase();
	
	fetch('travel_recommendation_api.json')
		.then( response => response.json())
		.then( data => {
			
			
			console.log(data.beaches);
			if(input in data){
				
			}
			else
				console.log("Not");
			
		})
		.catch(error => {
			console.log(error);
		});

	
});

document.querySelector(".hero").addEventListener('click',function(){
	
});	
document.querySelector(".destinations").addEventListener('click',function(){
	
});