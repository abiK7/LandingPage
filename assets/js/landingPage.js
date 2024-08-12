jQuery(function(){
	jQuery(document).on("click","#saveEmailId",function(){
		if(jQuery("#emailId").val()==""){
			alert("Email is empty");
		}else{
			var emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
			var emailid=jQuery("#emailId").val();
			if(emailPattern.test(emailid)==false){
				alert("The email address is not formatted correctly");
			}
		}
	});
});
