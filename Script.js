// JavaScript source code
//*****Workout 1*****
//**** a) for-in loop*****
let obj=
{
	name:"Aswini",
	last_name:"KP",
	designation:"Software developer"
}
 //document. write("\n");
 console.log("***for in loop***");
for(let i in obj)
{
	
	console.log(obj[i]);
	
}

//******* b) for of *******
//document. write("\n");
let obj2=['Aswini','Akhil','Aswathi','Abhilash']
console.log("***for of loop***");
for(let i of obj2)
{
	
	console.log(i);
}

//****** Workout 2******
//*****a) WHile loop *****
console.log("***While loop***");
let i=1;
while(i<10)
{
	i+=2;
	console.log(i);
}
//**** b) Area of triangle ***

console.log("***Area of triangle***");
 let b=10;
 let h=30;
function areaoftri(b,h)
{
	console.log("base is 10");
	console.log("height is 30");
	return(b*h*0.5);
	
	
}
 let tri=areaoftri(b,h);
 console.log("area is "+ tri);

 //****** Workout 3******
function detailsform()
{
	let name=document.getElementById("name");
	let nameVal=name.value;

	let Pname=document.getElementById("partnername");
	let PnameVal=Pname.value;

	let location=document.getElementById("location");
	let locationVal=location.value;

	let designation=document.getElementById("desig");
	let desigeVal=designation.value;

	let company=document.getElementById("company");
	let companyVal=company.value;

    document.write("<p>Hi i am "+ nameVal +" and my partners name is "+ PnameVal +". I stay in "+ locationVal +". I am working as a "+desigeVal +" in "+ companyVal +" </p>");
	
}


