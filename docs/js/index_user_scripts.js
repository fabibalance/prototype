

$(document).ready(function(){

    $("#sidebar").hide();
    $("#sidebar2").hide();
    $("#sidebar3").hide();
    $("#sidebar4").hide();
    $("#sidebar5").hide();
   
    
    //Erste seite 
  $("#Header").click(function(){
   $("#sidebar").toggle();
      $("#sidebar2").toggle();
      $("#sidebar3").toggle();
      $("#sidebar4").toggle();
      $("#sidebar5").toggle();
});
    
    
      $("#btn_news").click(function(){
   activate_page("#mainpage");
});
    
          $("#btn_profile").click(function(){
   activate_page("#Profile");
});
    
              $("#btn_jobs").click(function(){
   activate_page("#Jobs");
});

              $("#btn_applied").click(function(){
   activate_page("#Applied");
});
    
   //zweite seite
      $("#Header2").click(function(){
  $("#sidebar").toggle();
      $("#sidebar2").toggle();
      $("#sidebar3").toggle();
      $("#sidebar4").toggle();
      $("#sidebar5").toggle();
});
          $("#btn_news2").click(function(){
   activate_page("#mainpage");
});
    
              $("#btn_profile2").click(function(){
   activate_page("#Profile");
});
                 $("#btn_jobs2").click(function(){
   activate_page("#Jobs");
});
    
                 $("#btn_applied2").click(function(){
   activate_page("#Applied");
});
    
    //dritte seite 
       $("#Header3").click(function(){
   $("#sidebar").toggle();
      $("#sidebar2").toggle();
      $("#sidebar3").toggle();
      $("#sidebar4").toggle();
      $("#sidebar5").toggle();
});
          $("#btn_news3").click(function(){
   activate_page("#mainpage");
});
    
              $("#btn_profile3").click(function(){
   activate_page("#Profile");
});
                 $("#btn_jobs3").click(function(){
   activate_page("#Jobs");
});
    
                 $("#btn_applied3").click(function(){
   activate_page("#Applied");
});
    //vierte seite 
          $("#Header4").click(function(){
   $("#sidebar").toggle();
      $("#sidebar2").toggle();
      $("#sidebar3").toggle();
      $("#sidebar4").toggle();
      $("#sidebar5").toggle();
});
          $("#btn_news4").click(function(){
   activate_page("#mainpage");
});
    
              $("#btn_profile4").click(function(){
   activate_page("#Profile");
});
                 $("#btn_jobs4").click(function(){
   activate_page("#Jobs");
});
    
                 $("#btn_applied4").click(function(){
   activate_page("#Applied");
});
    
        //restaurant seite 
          $("#Header5").click(function(){
   $("#sidebar").toggle();
      $("#sidebar2").toggle();
      $("#sidebar3").toggle();
      $("#sidebar4").toggle();
      $("#sidebar5").toggle();
});
          $("#btn_news5").click(function(){
   activate_page("#mainpage");
});
    
              $("#btn_profile5").click(function(){
   activate_page("#Profile");
});
                 $("#btn_jobs5").click(function(){
   activate_page("#Jobs");
});
    
                 $("#btn_applied5").click(function(){
   activate_page("#Applied");
});
    
    
    $("#Risotto").click(function(){
        
        activate_page("#Restaurant");
    });
    
    $("#alert").hide();
    
      $("#apply_btn").click(function(){
       $("#alert").show(); 
       
    });
     $("#OK").click(function(){
       $("#alert").hide(); 
       
    });
});