'use strict';

function double_to_one(collection) {
	var ar = [];
	
	if(!(collection instanceof Array))
		return ;
		
	for(var i in collection){
		if(collection[i] instanceof Array){
			for(var j in collection[i])
				ar.push(collection[i][j]);
		}else{
			ar.push(collection[i]);		
		}
	}
	
	return ar;
}

module.exports = double_to_one;
