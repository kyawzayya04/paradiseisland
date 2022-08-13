$(document).ready(function(){

    // BTT Starts

    $(".btn-backtotops").hide();
    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        console.log(getscrolltop)

        if(getscrolltop >= 370){
            $(".btn-backtotops").fadeIn(1000);
        }else{
            $(".btn-backtotops").fadeOut(1000);
        }
    })

    // BTT Ends

	$(window).scroll(function(){

		let abc = $(this).scrollTop();
		// console.log(abc);

		if(abc >= 100){
			$(".navbar").addClass("navbars")
			$(".spl").addClass("spls")
			$(".img").addClass("imgs")
		}else{
			$(".navbar").removeClass("navbars")
			$(".spl").removeClass("spls")
			$(".img").removeClass("imgs")
		}
	})

	$(".pls").click(function(){
		$(this).addClass("activeitems").siblings().removeClass("activeitems")

		// for filter
		let getvalue = $(this).attr("data-filter")
		console.log(getvalue)

		if(getvalue === "all"){
			$(".filters").show("slide",800)
		}else{
			$(".filters").hide("slide",800)
			$(".filters").not("."+ getvalue).hide("slide",800)
			$(".filters").filter("."+ getvalue).show("slide",800)
		}
	})

	// for lightbox
	lightbox.option({
      'showImageNumberLabel':true,
      "maxWidth":300,
      "maxHeight":200,
      "fitImagesInViewport":true
      // "albumLabel":true
      // "alwaysShowNavOnTouchDevice":true
    })

    // for heart starts

    $(".heart").click(function(){
        if($(this).hasClass("activee")){
            $(this).removeClass("activee")
        }else if(!$(this).hasClass("activee")){
            $(this).addClass("activee")
        }
    })

    // for heart ends

    // Pricing Starts

    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop()
        console.log(getscrolltop)

        if(getscrolltop >= 3451){
            $(".card1").addClass("afl")
            $(".card2").addClass("afb")
            $(".card3").addClass("afr")
        }else{
           $(".card1").removeClass("afl")
            $(".card2").removeClass("afb")
            $(".card3").removeClass("afr") 
        }
    })

    // Pricing Ends

    // Footer Starts

    let getyear = $("#getyear")
    let getfullyear = new Date().getUTCFullYear();

    getyear.text(getfullyear)

    // Footer Ends


})