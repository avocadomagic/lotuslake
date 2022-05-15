$(document).ready(function(){
  //alert("hi")
  $("#mailbox1").click(function(){
    	$("#letter").toggle();
    	});
      $("#letter").click(function(){
        	$("#letter").hide();
        	});
          $("#mailbox1").click(function(){
            	$("#letter2").hide();
            	});
              $("#mailbox2").click(function(){
                	$("#letter2").toggle();
                	});
                  $("#letter2").click(function(){
                    	$("#letter2").hide();
                    	});
                      $("#mailbox2").click(function(){
                        	$("#letter").hide();
                        	});
                          $("#apple").click(function(){
                            	$("#apple").hide();
                            	});
                              $("#apple").click(function(){
                                	$("#boy2").show();
                                	});
                                  $("#apple").click(function(){
                                    	$("#boy1").hide();
                                    	});
                                      $("#boy2").click(function(){
                                        	$("#lyrics").show();
                                        	});
          $("#run").click(function(){
            $("#run").animate({
              top: '70vh',
              left: '64vw'
            },"slow");
            });
            $("#run").click(function(){
              	$("#run").css("cursor","auto")();
              	});


})
