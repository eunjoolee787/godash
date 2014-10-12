// create your project file to "whatever.js" for example cholo.js
// put this code in here!
 
module.exports = {
  compact: function(array){
 	var results = [];

  	for(var i = 0; i < array.length; i++){
  	  if(array[i]){
		
	    results.push(array[i])
  	 }

  	//console.log(array[i]);
    }
  	 return results;
  }
  // difference: function(){},
  //etc...
  //test: function(){console.log("test! rename this file to your project name")}
};
 

