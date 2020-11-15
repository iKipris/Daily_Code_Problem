"use strict";

var x=['dog','deer','deal'];
var s='do';

console.log(autocomplete(x,s))
function autocomplete(x,s)
{
	var result=[];
	var bound=s.length;
	for (var element of x)
  {
  	
  	var checkstr=element.substring(0,bound+2);
    console.log(checkstr);
    if (checkstr.includes(s))
    {
    	
    	result.push(element)
    }
  }
  return result;
}
