$(".navbar-toggle" ).click(function() {
  $(".test-1").toggleClass("two");
  $(".test").toggleClass("one");
  $(".test-2").toggleClass("three");
  $("li").toggleClass("nav-stacked");
  $(this).toggleClass("navbar-clicked");
  $("a").toggleClass("text");
  $("body").toggleClass("bodycolor");
  $("div > img").toggle();
  $(".navbar-collapse").css({"border":"none", "outline":"none","box-shadow" : "none"});
    var src = $("#logo-main").attr("src");
    var newsrc = (src=="images/logo/Logo-02.png") ? "images/logo/Logo-03.png" : "images/logo/Logo-02.png";
    $("#logo-main").attr('src', newsrc );
    $("h1").toggle();
    $("h3").toggle();
    $(".gamma-container").toggle();
    $(".biocontainers").toggle();
        $(".biocontainer").toggle();
        $("img:eq(1)").toggle();
        $(".row1").toggle();
        $(".container").toggle();
         $("#container").toggle();
         $("#footer").toggle();
});


$(".projectContainer li").hover(function(){
      $(this).find("h3").css( {"opacity": "1" , "transition":"all 0.5s ease"});
      $(this).find("h4").css( {"opacity": "1" , "transition":"all 0.5s ease"});
      $(this).find("img").css( {"opacity": "0" , "transition":"all 0.5s ease"});
    }, function(){
        // change to any color that was previously used.
     $(this).find("h3").css( "opacity","0" );
      $(this).find("h4").css( "opacity","0" )
        $(this).find("img").css( {"opacity": "1" , "transition":"all 0.5s ease"});

    });

$(".photoContainer li").hover(function(){
      $(this).find("h3").css( {"opacity": "1" , "transition":"all 0.5s ease"});
      $(this).find("h4").css( {"opacity": "1" , "transition":"all 0.5s ease"});
      $(this).find("img").css( {"opacity": "0" , "transition":"all 0.5s ease"});
    }, function(){
        // change to any color that was previously used.
     $(this).find("h3").css( "opacity","0" );
      $(this).find("h4").css( "opacity","0" )
        $(this).find("img").css( {"opacity": "1" , "transition":"all 0.5s ease"});

    });


$(".projectContainer li h3").hover(function(){
      $(this).prev().css( {"opacity": "0" , "transition":"all 0.5s ease"});

    });

$(".projectContainer li h4").hover(function(){
  console.log("here")
      $(this).prev().prev().css( {"opacity": "0" , "transition":"all 0.5s ease"});

    });

$( window ).load(function() {
  // Run code\
  var windowsize = $(window).width();
    var windowsize2 =$(window).width();

  setTimeout(function() {
     var height =  $(".box1").outerHeight();
 console.log(windowsize2);
  $(".box2").css("height" , height);
}, 0);
  if(windowsize < 750  ){
  	$("a").hover( function() {
	$(this).toggleClass("bodycolor");
});
  $(".grid-1").addClass("grid-mobile");
   $(".grid-2").addClass("grid-mobile");
    $(".grid-3").addClass("grid-mobile");
     $(".grid-4").addClass("grid-mobile");
     $(".grid-5").addClass("grid-mobile");
     $(".grid-6").addClass("grid-mobile");
     $(".contentItem.greenpeace").css({"width":"100%", "margin-bottom" : "8%"});
		 $(".contentItem.triangle").css({"width": "50%", "margin-bottom" : "8%"});

  }

   if(windowsize2 <= 974 && windowsize2 >=768){
    $(".text-1").css("top","80%");
    $(".text-2").css("top","80%");
    $(".text-3").css("top","80%");
    $(".text-4").css("top","80%");
     $(".text-1_2").css("top","88%");
    $(".text-2_2").css("top","88%");
    $(".text-3_2").css("top","88%");
    $(".text-4_2").css("top","88%");
    
  } else if(windowsize2 <= 767 && windowsize2 > 750) {

    $(".text-1").css("top","75%");
    $(".text-2").css("top","75%");
    $(".text-3").css("top","75%");
    $(".text-4").css("top","70%");
     $(".text-1_2").css("top","85%");
    $(".text-2_2").css("top","85%");
    $(".text-3_2").css("top","85%");
    $(".text-4_2").css("top","85%");


  } else if(windowsize2 < 750 && windowsize2 > 376) {
    $(".text-1").css({"top":"80%", "font-size" : "calc(1em + 1vmin)"});
     $(".text-2").css({"top":"80%", "font-size" : "calc(1em + 1vmin)"});
      $(".text-3").css({"top":"80%", "font-size" : "calc(1em + 1vmin)"});
       $(".text-4").css({"top":"80%", "font-size" : "calc(1em + 1vmin)"});
       $(".text-1_2").css({"top":"87%", "font-size" : "calc(0.6em + 1vmin)"});
     $(".text-2_2").css({"top":"87%", "font-size" : "calc(0.6em + 1vmin)"});
      $(".text-3_2").css({"top":"87%", "font-size" : "calc(0.6em + 1vmin)"});
       $(".text-4_2").css({"top":"87%", "font-size" : "calc(0.6em + 1vmin)"});


  } else if(windowsize2 < 376 && windowsize2 > 350) {
    $(".text-1").css({"top":"77%", "font-size" : "calc(1em + 1vmin)"});
     $(".text-2").css({"top":"77%", "font-size" : "calc(1em + 1vmin)"});
      $(".text-3").css({"top":"77%", "font-size" : "calc(1em + 1vmin)"});
       $(".text-4").css({"top":"77%", "font-size" : "calc(1em + 1vmin)"});
       $(".text-1_2").css({"top":"85%", "font-size" : "calc(0.6em + 1vmin)"});
     $(".text-2_2").css({"top":"85%", "font-size" : "calc(0.6em + 1vmin)"});
      $(".text-3_2").css({"top":"85%", "font-size" : "calc(0.6em + 1vmin)"});
       $(".text-4_2").css({"top":"85%", "font-size" : "calc(0.6em + 1vmin)"});


  } else if(windowsize2 < 350 && windowsize2 > 320) {
    $(".text-1").css({"top":"78%", "font-size" : "calc(0.75em + 1vmin)"});
     $(".text-2").css({"top":"78%", "font-size" : "calc(0.75em + 1vmin)"});
      $(".text-3").css({"top":"78%", "font-size" : "calc(0.75em + 1vmin)"});
       $(".text-4").css({"top":"78%", "font-size" : "calc(0.75em + 1vmin)"});
       $(".text-1_2").css({"top":"86%", "font-size" : "calc(0.4em + 1vmin)"});
     $(".text-2_2").css({"top":"86%", "font-size" : "calc(0.4em + 1vmin)"});
      $(".text-3_2").css({"top":"86%", "font-size" : "calc(0.4em + 1vmin)"});
       $(".text-4_2").css({"top":"86%", "font-size" : "calc(0.4em + 1vmin)"});


  }  else if(windowsize2 < 320 && windowsize2 > 300) {
     $(".text-1").css({"top":"78%", "font-size" : "calc(0.45em + 1vmin)"});
     $(".text-2").css({"top":"78%", "font-size" : "calc(0.45em + 1vmin)"});
      $(".text-3").css({"top":"78%", "font-size" : "calc(0.45em + 1vmin)"});
       $(".text-4").css({"top":"78%", "font-size" : "calc(0.45em + 1vmin)"});
       $(".text-1_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});
     $(".text-2_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});
      $(".text-3_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});
       $(".text-4_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});


  }

   else if(windowsize2 < 300 && windowsize2 > 290) {
     $(".text-1").css({"top":"78%", "font-size" : "calc(0.40em + 1vmin)"});
     $(".text-2").css({"top":"78%", "font-size" : "calc(0.40em + 1vmin)"});
      $(".text-3").css({"top":"78%", "font-size" : "calc(0.40em + 1vmin)"});
       $(".text-4").css({"top":"78%", "font-size" : "calc(0.40em + 1vmin)"});
       $(".text-1_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});
     $(".text-2_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});
      $(".text-3_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});
       $(".text-4_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});


  }

  else if(windowsize2 < 290 ) {
     $(".text-1").css({"top":"78%", "font-size" : "calc(0.35em + 1vmin)"});
     $(".text-2").css({"top":"78%", "font-size" : "calc(0.35em + 1vmin)"});
      $(".text-3").css({"top":"78%", "font-size" : "calc(0.35em + 1vmin)"});
       $(".text-4").css({"top":"78%", "font-size" : "calc(0.35em + 1vmin)"});
       $(".text-1_2").css({"top":"84%", "font-size" : "calc(0.30em + 1vmin)"});
     $(".text-2_2").css({"top":"84%", "font-size" : "calc(0.30em + 1vmin)"});
      $(".text-3_2").css({"top":"84%", "font-size" : "calc(0.30em + 1vmin)"});
       $(".text-4_2").css({"top":"84%", "font-size" : "calc(0.30em + 1vmin)"})


  }

  	
});

$( window ).resize(function() {
  // Run code\
 
  var windowsize = $(window).width();
  var windowsize2 =$(window).width();
  console.log(windowsize);
  setTimeout(function() {
     var height =  $(".box1").outerHeight();
 //console.log(height);
  $(".box2").css("height" , height);
}, 0);
  if(windowsize > 750  ){

  	$("body").removeClass("bodycolor");
     $(".grid-1").removeClass("grid-mobile");
   $(".grid-2").removeClass("grid-mobile");
    $(".grid-3").removeClass("grid-mobile");
     $(".grid-4").removeClass("grid-mobile");
      $(".grid-5").removeClass("grid-mobile");
     $(".grid-6").removeClass("grid-mobile");
      $(".contentItem.greenpeace").css({"width":"67.7%", "margin-bottom" : "0%"});
     $(".contentItem.triangle").css({"width":"32.3%", "margin-bottom": "0%"});
     $(".text-1").css("top","85%");
    $(".text-2").css("top","85%");
    $(".text-3").css("top","85%");
    $(".text-4").css("top","85%");
     $(".text-1_2").css({"top":"90%", "font-size" : "12px"});
     $(".text-2_2").css({"top":"90%", "font-size" : "12px"});
      $(".text-3_2").css({"top":"90%", "font-size" : "12px"});
       $(".text-4_2").css({"top":"90%", "font-size" : "12px"})

  } else {
    $(".grid-1").addClass("grid-mobile");
   $(".grid-2").addClass("grid-mobile");
    $(".grid-3").addClass("grid-mobile");
     $(".grid-4").addClass("grid-mobile");
      $(".grid-5").addClass("grid-mobile");
     $(".grid-6").addClass("grid-mobile");
      $(".contentItem.greenpeace").css({"width":"100%", "margin-bottom" : "8%"});
     $(".contentItem.triangle").css({"width": "50%", "margin-bottom" : "8%"});

  }

 if(windowsize2 <= 974 && windowsize2 >=768){

    $(".text-1").css({"top":"80%", "font-size" : "20px"});
     $(".text-2").css({"top":"80%", "font-size" : "20px"});
      $(".text-3").css({"top":"80%", "font-size" : "20px"});
       $(".text-4").css({"top":"80%", "font-size" : "20px"});
       $(".text-1_2").css({"top":"88%", "font-size" : "12px"});
     $(".text-2_2").css({"top":"88%", "font-size" : "12px"});
      $(".text-3_2").css({"top":"88%", "font-size" : "12px"});
       $(".text-4_2").css({"top":"88%", "font-size" : "12px"});
   
  } else if(windowsize2 <= 767 && windowsize2 > 750) {

    $(".text-1").css("top","75%");
    $(".text-2").css("top","75%");
    $(".text-3").css("top","75%");
    $(".text-4").css("top","70%");
     $(".text-1_2").css("top","85%");
    $(".text-2_2").css("top","85%");
    $(".text-3_2").css("top","85%");
    $(".text-4_2").css("top","85%");

    $(".text-1").css({"top":"75%", "font-size" : "20px"});
     $(".text-2").css({"top":"75%", "font-size" : "20px"});
      $(".text-3").css({"top":"75%", "font-size" : "20px"});
       $(".text-4").css({"top":"70%", "font-size" : "20px"});
       $(".text-1_2").css({"top":"85%", "font-size" : "12px"});
     $(".text-2_2").css({"top":"85%", "font-size" : "12px"});
      $(".text-3_2").css({"top":"75%", "font-size" : "12px"});
       $(".text-4_2").css({"top":"85%", "font-size" : "12px"});


  } else if(windowsize2 < 750 && windowsize2 > 376) {
    $(".text-1").css({"top":"80%", "font-size" : "calc(1em + 1vmin)"});
     $(".text-2").css({"top":"80%", "font-size" : "calc(1em + 1vmin)"});
      $(".text-3").css({"top":"80%", "font-size" : "calc(1em + 1vmin)"});
       $(".text-4").css({"top":"80%", "font-size" : "calc(1em + 1vmin)"});
       $(".text-1_2").css({"top":"87%", "font-size" : "calc(0.6em + 1vmin)"});
     $(".text-2_2").css({"top":"87%", "font-size" : "calc(0.6em + 1vmin)"});
      $(".text-3_2").css({"top":"87%", "font-size" : "calc(0.6em + 1vmin)"});
       $(".text-4_2").css({"top":"87%", "font-size" : "calc(0.6em + 1vmin)"});


  } else if(windowsize2 < 376 && windowsize2 > 350) {
    $(".text-1").css({"top":"77%", "font-size" : "calc(1em + 1vmin)"});
     $(".text-2").css({"top":"77%", "font-size" : "calc(1em + 1vmin)"});
      $(".text-3").css({"top":"77%", "font-size" : "calc(1em + 1vmin)"});
       $(".text-4").css({"top":"77%", "font-size" : "calc(1em + 1vmin)"});
       $(".text-1_2").css({"top":"85%", "font-size" : "calc(0.6em + 1vmin)"});
     $(".text-2_2").css({"top":"85%", "font-size" : "calc(0.6em + 1vmin)"});
      $(".text-3_2").css({"top":"85%", "font-size" : "calc(0.6em + 1vmin)"});
       $(".text-4_2").css({"top":"85%", "font-size" : "calc(0.6em + 1vmin)"});


  } else if(windowsize2 < 350 && windowsize2 > 320) {
    $(".text-1").css({"top":"78%", "font-size" : "calc(0.75em + 1vmin)"});
     $(".text-2").css({"top":"78%", "font-size" : "calc(0.75em + 1vmin)"});
      $(".text-3").css({"top":"78%", "font-size" : "calc(0.75em + 1vmin)"});
       $(".text-4").css({"top":"78%", "font-size" : "calc(0.75em + 1vmin)"});
       $(".text-1_2").css({"top":"86%", "font-size" : "calc(0.4em + 1vmin)"});
     $(".text-2_2").css({"top":"86%", "font-size" : "calc(0.4em + 1vmin)"});
      $(".text-3_2").css({"top":"86%", "font-size" : "calc(0.4em + 1vmin)"});
       $(".text-4_2").css({"top":"86%", "font-size" : "calc(0.4em + 1vmin)"});


  }

  else if(windowsize2 < 320 && windowsize2 > 300) {
     $(".text-1").css({"top":"78%", "font-size" : "calc(0.45em + 1vmin)"});
     $(".text-2").css({"top":"78%", "font-size" : "calc(0.45em + 1vmin)"});
      $(".text-3").css({"top":"78%", "font-size" : "calc(0.45em + 1vmin)"});
       $(".text-4").css({"top":"78%", "font-size" : "calc(0.45em + 1vmin)"});
       $(".text-1_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});
     $(".text-2_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});
      $(".text-3_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});
       $(".text-4_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});


  }

   else if(windowsize2 < 300 && windowsize2 > 290) {
     $(".text-1").css({"top":"78%", "font-size" : "calc(0.40em + 1vmin)"});
     $(".text-2").css({"top":"78%", "font-size" : "calc(0.40em + 1vmin)"});
      $(".text-3").css({"top":"78%", "font-size" : "calc(0.40em + 1vmin)"});
       $(".text-4").css({"top":"78%", "font-size" : "calc(0.40em + 1vmin)"});
       $(".text-1_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});
     $(".text-2_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});
      $(".text-3_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});
       $(".text-4_2").css({"top":"84%", "font-size" : "calc(0.35em + 1vmin)"});


  }

  else if(windowsize2 < 290 ) {
     $(".text-1").css({"top":"78%", "font-size" : "calc(0.35em + 1vmin)"});
     $(".text-2").css({"top":"78%", "font-size" : "calc(0.35em + 1vmin)"});
      $(".text-3").css({"top":"78%", "font-size" : "calc(0.35em + 1vmin)"});
       $(".text-4").css({"top":"78%", "font-size" : "calc(0.35em + 1vmin)"});
       $(".text-1_2").css({"top":"84%", "font-size" : "calc(0.30em + 1vmin)"});
     $(".text-2_2").css({"top":"84%", "font-size" : "calc(0.30em + 1vmin)"});
      $(".text-3_2").css({"top":"84%", "font-size" : "calc(0.30em + 1vmin)"});
       $(".text-4_2").css({"top":"84%", "font-size" : "calc(0.30em + 1vmin)"})


  }
  	

  	
});
	





