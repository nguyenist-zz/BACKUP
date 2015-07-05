var objects = [
	["Hillary Clintons", 5.58, "http://placekitten.com/200/300"], 
	["Blue Whales", 108.27], 
	["Tyrannosaurus Rexs",40],
   ["DC Metro Cars", 75],
   ["Cars",20 ]
	];

function evaluateLength(){
	var input = document.getElementById('userinput').value;
   var array_length = objects.length;   
   var random_value = Math.floor(Math.random() * (array_length - 0) + 0);
   var output = Math.round(input / objects[random_value][1]) + " " + objects[random_value][0];
   var html_element = document.getElementById('output_value');
   html_element.innerHTML = output;
   
   
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