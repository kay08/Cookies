function goBack() {

    window.history.back();

}



$(document).ready(function()

		{

	

	 $("#btn1").click(function(){

	        $(".button").animate({height: "100px"});

	    });

	

			$(".button").click( function()

			        {

			          alert('button clicked');

			        }

			 );

			

		});



$(document).ready(function(){

	$(".imagesContainer").click(function(){

		alert("Image Clicked");

	});	

});



$(document).ready(function(){

    $("#resume").click(function(){

        $("#marq").toggleClass("main");

    });

});


$('div').each(function (index, value) { 

	  console.log($(this).attr('id')); 

	});



function setCookie()

{

document.cookie = "name="+document.getElementById("txtName").value;

document.cookie = "email="+document.getElementById("txtEmail").value;

alert("cookies set");


}


function getCookie()

{

var cookiesArray = document.cookie.split("; ");

for(var i=0; i<cookiesArray.length;i++)

{

var nameValueArray = cookiesArray[i].split("=");

if(nameValueArray[0]=="name")

{

document.getElementById("txtName").value=nameValueArray[1];

}

else if(nameValueArray[0]=="email")

{

document.getElementById("txtEmail").value=nameValueArray[1];

alert('dd');

}

}

alert('Display cookies');

}





