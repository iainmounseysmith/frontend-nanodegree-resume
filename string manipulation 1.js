//we trim the first array alement and slice off the first letter , which we capitalise
//we capitalise the second array alement.
var name="iain mounseysmith";
console.log(inName(name));
//var inernationalizedName;
function inName(){
var newNameArray=name.split(" ");
//firstName=newNameArray[0].
console.log(newNameArray[0].slice(0,1));
console.log(newNameArray[0].slice(1));
console.log(newNameArray[0].trim().slice(0,1).toUpperCase() + newNameArray[0].trim().slice(1)+ " " + newNameArray[1].toUpperCase());
var internationalizedName=(newNameArray[0].trim().slice(0,1).toUpperCase() + newNameArray[0].trim().slice(1)+ " " + newNameArray[1].toUpperCase());
//var internationalizedName=newNameArray[0] + " " + newNameArray[1].toUpperCase();
		return internationalizedName;
}