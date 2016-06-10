'use strict';

function double_to_one(collection) {
	var ar = [];
			
	if(!(collection instanceof Array))
		return ;
				
	for(var i = 0; i < collection.length; i++){
		for(var j = 0; j < collection[i].length; j++){
			if(ar.length == 0)
				ar.push(collection[i][j]);
			else{
				for(var p = 0; p < ar.length && ar[p] !=  collection[i][j]; p++)
					;
				if(p >= ar.length)
					ar.push(collection[i][j]);
			}
		}
	}
			
	return ar;
}

module.exports = double_to_one;
