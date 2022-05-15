$(document).ready(function(){
  //alert("hi")
  $("#one").click(function(){
    	$("#two").show();
    	});
      $("#one").click(function(){
        	$("#three").show();
        	});
          $("#one").click(function(){
            	$("#four").show();
            	});
              $("#four").click(function(){
                	$("#five").show();
                	});
                  $("#four").click(function(){
                    	$("#six").show();
                    	});
                      $("#four").click(function(){
                        	$("#seven").show();
                        	});
                          $("#four").click(function(){
                            	$("#eight").show();
                            	});
                              $("#eight").click(function(){
                                	$("#nine").show();
                                	});
                                  $("#eight").click(function(){
                                    	$("#ten").show();
                                    	});
                                      $("#eight").click(function(){
                                        	$("#eleven").show();
                                        	});
                                          $("#eight").click(function(){
                                            	$("#twelve").show();
                                            	});
                                              $("#eight").click(function(){
                                                	$("#thirteen").show();
                                                	});
                                                  $("#eight").click(function(){
                                                    	$("#fourteen").show();
                                                    	});
                                                      $("#fourteen").click(function(){
                                                        	$("#fifteen").show();
                                                        	});
                                                          $("#fourteen").click(function(){
                                                            	$("#sixteen").show();
                                                            	});
                                                              $("#fourteen").click(function(){
                                                                	$("#seventeen").show();
                                                                	});
                                                                  $("#fourteen").click(function(){
                                                                    	$("#eighteen").show();
                                                                    	});
                                                                      $("#fourteen").click(function(){
                                                                        	$("#nineteen").show();
                                                                        	});
                                                                          $("#nineteen").click(function(){
                                                                              $("#twenty").show();
                                                                              });
                                                                              $("#nineteen").click(function(){
                                                                                  $("#tone").show();
                                                                                  });
                                                                                  $("#nineteen").click(function(){
                                                                                      $("#ttwo").show();
                                                                                      });
                                                                                      $("#nineteen").click(function(){
                                                                                          $("#tthree").show();
                                                                                          });
                                                                                          $("#tthree").click(function(){
                                                                                              $("#tfour").show();
                                                                                              });
                                                                                              $("#tthree").click(function(){
                                                                                                  $("#tfive").show();
                                                                                                  });
                                                                                                  $("#tthree").click(function(){
                                                                                                      $("#tsix").show();
                                                                                                      });
                                                                                                      $("#tthree").click(function(){
                                                                                                          $("#tseven").show();
                                                                                                          });
                                                                                                          $("#tseven").click(function(){
                                                                                                              $("#run").show();
                                                                                                              });
                                                                                                              $("#tseven").click(function(){
                                                                                                                  $("#door").show();
                                                                                                                  });
                                                                                                                  $("#tseven").click(function(){
                                                                                                                      $("#green").show();
                                                                                                                      });
                                                                                                                      $("#tseven").click(function(){
                                                                                                                          $("#record").show();
                                                                                                                          });
                                                                                                                          $("#tseven").click(function(){
                                                                                                                              $("#closet").show();
                                                                                                                              });
                                                                                                                              $("#tseven").click(function(){
                                                                                                                                  $("#guitar").show();
                                                                                                                                  });
                                                                                                                                  $("#record").click(function(){
                                                                                                                                    	$("#lyrics").show();
                                                                                                                                    	});
                                                                                                                                      /*$("#green").click(function(){
                                                                                                                                        	$("#greengif").show();
                                                                                                                                        });
                                                                                                                                          $("#guitar").click(function(){
                                                                                                                                            	$("#guitargif").show();
                                                                                                                                            });
                                                                                                                                            $("#door").click(function(){
                                                                                                                                              	$("#doorgif").show();
                                                                                                                                              });
                                                                                                                                              $("#record").click(function(){
                                                                                                                                                	$("#recordgif").show();
                                                                                                                                                });
                                                                                                                                                $("#closet").click(function(){
                                                                                                                                                  	$("#closetgif").show();
                                                                                                                                                  });*/



$('#green').click(function(){
  $('#greensound')[0].play();
  document.getElementById('greengif').hidden = false;
});

document.getElementById('greensound').addEventListener("ended", function(){
  document.getElementById('greensound').currentTime = 0;
  document.getElementById('greengif').hidden = true;
});

$('#closet').click(function(){
  $('#closetsound')[0].play();
  document.getElementById('closetgif').hidden = false;
});

document.getElementById('closetsound').addEventListener("ended", function(){
  document.getElementById('closetsound').currentTime = 0;
  document.getElementById('closetgif').hidden = true;
});

$('#door').click(function(){
  $('#doorsound')[0].play();
  document.getElementById('doorgif').hidden = false;
});

document.getElementById('doorsound').addEventListener("ended", function(){
  document.getElementById('doorsound').currentTime = 0;
  document.getElementById('doorgif').hidden = true;
});

$('#guitar').click(function(){
  $('#guitarsound')[0].play();
  document.getElementById('guitargif').hidden = false;
});

document.getElementById('guitarsound').addEventListener("ended", function(){
  document.getElementById('guitarsound').currentTime = 0;
  document.getElementById('guitargif').hidden = true;
});

$('#record').click(function(){
  $('#recordsound')[0].play();
  document.getElementById('recordgif').hidden = false;
});

document.getElementById('recordsound').addEventListener("ended", function(){
  document.getElementById('recordsound').currentTime = 0;
  document.getElementById('recordgif').hidden = true;
});



})
