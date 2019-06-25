$(document).ready(function(){
	//Styles the H1
	$("h1").css("color", "#900C3F");
	$("h1").css("textAlign", "center" );
	// var h1 = document.querySelector("h1");
	// h1.style.color = "#900C3F";
	// h1.style.textAlign="center";


	var allcontacts = [];

	// Function stores variable on clicking save
	$("#save-id").click(function(event){
		event.preventDefautl();
		var fname = $("#fname").val();
		var sname = $("#sname").val();
		var tel = $("#tel").val();
		var email = $("#email").val();
		var address = $("#address").val();
		var statusElm = $(".status");
		statusElm.empty();

		if(email.length>5 && email.includes("@") && email.includes("."))
			else
				statusElm.append("<div> Email is not Valid</div>");

		if (fname.length > 10 ) {
			statusElm.append("<div> The First name must have no more than 10 characters</div>");
    		//alert("The First name must have no more than 10 characters");  
    		Submitted = "false";
		}
		if (sname.length >10) {
	    	statusElm.append("<div> The Second name must have no more than 10 characters</div>");
	    	//alert("The Second name must have no more than 10 characters");  
	    	Submitted = "false";
		}
		if (fname.length=="" || sname.length=="" || tel.length==""|| email.length==""||address=="") {
	    	statusElm.append("<div> Name field can not be empty!</div>")
	    	//alert("Name field can not be empty!");  
	    	Submitted = "false";
		}
		else{
			var contact = [fname,sname,tel,email,address];
			allcontacts.push(contact);
			console.log(allcontacts);
		}

	});
	// function contact_function(ev) {
	// // ev.preventDefautl();
	// fname = document.querySelector("#fname").value;
	// //alert(fname);
	// sname = document.querySelector("#sname").value;
	// tel = document.querySelector("#tel").value;
	// email = document.querySelector("#email").value;
	// address = document.querySelector("#address").value;
	//Submitted = "true";

	// if (fname.length > 10 ) {
 //    	alert("The First name must have no more than 10 characters");  
 //    	Submitted = "false";
	// }
	// if (sname.length >10) {
 //    	alert("The Second name must have no more than 10 characters");  
 //    	Submitted = "false";
	// }
	// if (fname.length=="" || sname.length=="" || tel.length==""|| email.length==""||address=="") {
 //    	alert("Name field can not be empty!");  
 //    	Submitted = "false";
	// }
	// else{
	// 	var contact = [fname,sname,tel,email,address];
	// 	allcontacts.push(contact);
	// 	console.log(allcontacts);
	// }

	//alert("Saved!");
	//alert(array[0]);
	

}
//Function to search through saved contacts
$("#search-id").click(function(event){
	event.preventDefautl();
	//function search_function(){
	var phrase = $("#search-id").val();
	//var phrase = document.querySelector("#search-id").value;
 	for (var y=0; y<allcontacts.length; y++){
 		var contactarray = allcontacts[y];
 		if(contactarray[0].includes(phrase)){
	 		console.log(contactarray);
	 		//document.getElementById("search").innerHTML = contactarray[0];
	 		statusElm.append("<div>"contactarray[0]"</div>")
 	}

 }
}
// }
// function search_function(){
// var phrase = document.querySelector("#search-id").value;
//  for (var y=0; y<allcontacts.length; y++){
//  	var contactarray = allcontacts[y];
//  	if(contactarray[0].includes(phrase)){
//  		console.log(contactarray);
//  		document.getElementById("search").innerHTML = contactarray[0];
//  		var statusElm = $(".search_result");
// 		statusElm.empty();
//  	}
//  }
// }

 	
 //  contactFields.appendChild(div);
 //}
 // contactFields.style.display = "block";
 //  var div = document.createElement("div");
 //  div.innerHTML = fname.value;

// }



});
