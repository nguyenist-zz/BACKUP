var objects = [
	["Hillary Clintons", 5.58, "http://i.imgur.com/dlGtWst.png"], 
	["Blue Whales", 108.27, "http://images.fineartamerica.com/images/artworkimages/mediumlarge/1/blue-whale-michael-vigliotti.jpg"], 
	["Tyrannosaurus Rexes",40, "http://img2.wikia.nocookie.net/__cb20141230024946/jurassicpark/images/3/34/T-Rex_3.png"],
   	["DC Metro Cars", 75, "http://www.wurlington-bros.com/DC/MetroTrainModel.jpg"],
   	["Cars", 20, "http://dailythunder.com/wp-content/uploads/2010/01/large_minivan.jpg"],
   	["Brachiosaurses", 85, "http://th09.deviantart.net/fs8/PRE/i/2005/276/5/3/Supersaurus_vivianae_by_unlobogris.jpg"],
   	["Giraffes", 16.9, "http://l.rgbimg.com/cache1nGF2F/users/s/sq/sqback/600/mi45Ypw.jpg"],
   	["Football Fields", 300, "http://media.lehighvalleylive.com/joe-owens_impact/photo/warren-hills-stadium-727b781e11c6638b.jpg"],
   	["Olympic Sized Swimming Pools", 150, "http://cdn.londonandpartners.com/asset/937be3311e34f560fbbfae03f8196acc.jpg"],
   	["Railroad Cars", 53, "http://www.midcontinent.org/rollingstock/builders/Images/harrisburg_tank.jpg"],
   	["Slip and Slides", 16, "http://www.wired.com/wp-content/uploads/blogs/geekdad/wp-content/uploads/2012/06/GDB13.Slipnslide.jpg"],
   	["Michael Jordans", 6.5, "https://espngrantland.files.wordpress.com/2014/05/jordan_wings.jpg"],
   	["Average American Driveways", 20, "http://cx.aos.ask.com/question/aq/700px-394px/what-are-standard-driveway-lengths-and-widths_7bd61377-3e4f-4dae-9912-704b40843d25.jpg"],
   	["Great White Sharks", 22.96, "http://www.dpi.nsw.gov.au/__data/assets/image/0003/219756/Great-white-shark.jpg"],
   	["Mane Jellyfish", 120, "http://i.imgur.com/o067ztD.jpg"]
	];

function evaluateLength(){
   // var input = document.getElementById('userinput').value;
   var distance_in_feet = convert();
   var array_length = objects.length;   
   var random_value = Math.floor(Math.random() * array_length);
   var output = Math.round(distance_in_feet / objects[random_value][1]) + " " + objects[random_value][0];
   var html_element = document.getElementById('output_value');
   html_element.innerHTML = output;
   var image_blast = document.getElementById("imageid");
   image_blast.src=objects[random_value][2];
}

function convert(){
	var choice_metric = document.getElementById('choiceMetric').value;
	var input = document.getElementById('userinput').value;
	if(choice_metric==="feet"){
		return input;
	} else if (choice_metric==="meters"){
		input = (input * 3.28084);
		return input;
	} else if (choice_metric==="kilometers"){
		input = (input * 3280.84);
		return input;
	} else if (choice_metric==="yards"){
		input = (input * 3);
		return input;
	} else if (choice_metric==="nauticalmiles"){
		input = (input * 6076.12);
		return input;
	} else{
		input = (input * 5280);
		return input;
	}
	console.log(input);
}





   
  /* bmi = Math.round(bmi*100)/100;
   
   var html_element = document.getElementById('output_value'); 
   
   if(bmi <= 15.0){
      html_element.innerHTML = bmi + ' (Very severely underweight - gonna die soon)';
   }else if(bmi >15.0 && bmi< 16.0){
      html_element.innerHTML = bmi + ' (Severely underweight)';
   }else if(bmi >=16.0 && bmi < 18.5){
      html_element.innerHTML = bmi + ' (underweight)';
   }else if(bmi >= 18.5 && bmi <=25.0){
      html_element.innerHTML = bmi + ' (normal)';
   }else if(bmi >25.0 && bmi <=30.0){
      html_element.innerHTML = bmi + ' (overweight)';
   }else if(bmi > 30.0 && bmi <= 35.0){
      html_element.innerHTML = bmi + ' (Moderately obese)';
   }else if(bmi > 35.0 && bmi <=40){
      html_element.innerHTML = bmi + ' Severely obese';
   }else{
      html_element.innerHTML = bmi + ' Very severely obese - gonna die soon';
   }
}*/


// document.getElementById('submit').addEventListener('click', getConversion(document.getElementById('userinput', objects).value));

// function getConversion(number, array){
// 	distance = Math.round(number);
// 	rand = Math.round(Math.random()*array.length);
// 	console.log(rand)
// }