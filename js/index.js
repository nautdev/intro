var hashtags = document.querySelectorAll(".font-small"),
		circles = document.querySelectorAll(".circle-huge"),
		circlesLater = document.querySelectorAll(".circle-huge-later"),
		titoli = document.querySelectorAll(".font-title"),
		partner = document.querySelectorAll(".font-partner"),
		triangles = document.querySelectorAll(".triangle"),
		partnerCircle = document.querySelectorAll(".circle-small");

var counterOn = 0;
var animationStep = 0;/*
var animationStep = 1;

animate();
setTimeout(function() {
	animationStep = 5;
	animate();
}, 2000);*/
document.onclick = function() {
	setTimeout(function() {
	   counterOn = 0;
	}, 300); //TODO
	var e = window.event;
	if(counterOn == 0){
		if (e.clientX > 960){
			animationStep++;
		} else {
			animationStep--;
		}
	}
	document.getElementById("xy").innerHTML = animationStep;
	counterOn = 1;
  if(animationStep == 30) {
      animationStep = 1;
  }
	animate();
}

//TweenMax.to("#canvaCon", 1, {opacity:0.8});
function animate() {
	if(animationStep == 1){
		// Change BG
		TweenMax.to("#bgContain", 1, {opacity:0.8, delay:1});
		document.getElementById("bgContain").style.left = "47.5%";


		// ANI OUT
		TweenMax.to("#logoClaim", 0.7, {opacity:0});
		TweenMax.to("#logo", 2, {ease: Power4.easeOut, y:-100});
		TweenMax.to("#canvaCon", 1, {opacity:0});
		setTimeout( function(){
    	document.getElementsById("canvas").remove();
		},1000);
		changeBG();

		TweenMax.to("#claimVersatile", 1.4, {ease: Power4.easeOut, css:{top:"35%"}});
		TweenMax.to("#claimVersatile", 0.3, {opacity:1});
		TweenMax.to(titoli, 1, {opacity:1, delay:2.6});

	  TweenMax.to(circles, 0.5, {opacity:1, delay:0.5});
	  TweenMax.to("#c01", 2, {attr:{cx:1930,cy:860}, 	 ease: Power4.easeOut})
    TweenMax.to("#c02", 2, {attr:{cx:1628, cy:1310}, ease: Power4.easeOut})
	  TweenMax.to("#c03", 2, {attr:{cx:2230, cy:1310}, ease: Power4.easeOut})
	  TweenMax.to(titoli, 0.5, {opacity:1, delay:0.5});
	  TweenMax.to("#title01", 2.2, {attr:{x:1930,y:870}, 	 ease: Power4.easeOut})
	  TweenMax.to("#title02", 2.2, {attr:{x:1628, y:1330}, ease: Power4.easeOut})
	  TweenMax.to("#title03", 2.2, {attr:{x:2235, y:1330}, ease: Power4.easeOut})

		setTimeout( function(){
			TweenMax.to("#title01", 1.7, {attr:{y:860}, 					 ease: Power4.easeInOut})
			TweenMax.to("#title02", 1.7, {attr:{x:1630, y:1310}, ease: Power4.easeInOut})
			TweenMax.to("#title03", 1.7, {attr:{x:2230, y:1310}, ease: Power4.easeInOut})
			// ANI IN
			TweenMax.to("#c01", 1.3, {ease: Power4.easeInOut, attr:{cy:940}})
			TweenMax.to("#c02", 1.3, {ease: Power4.easeInOut, attr:{cx:1720, cy:1260}})
			TweenMax.to("#c03", 1.3, {ease: Power4.easeInOut, attr:{cx:2120, cy:1260}})
	    TweenMax.to(circles, 1.7, {ease: Power4.easeInOut, attr:{r:300}, svgOrigin:"1920 1080"})
			TweenMax.to("#secClaimVersatile",1.3, {opacity:1, delay:1});
	    TweenMax.to("#secClaimVersatile", 1, {ease: Power4.easeOut, delay:0.8, css:{top:"60%"}});

			TweenMax.to("#nautlogo", 1, {opacity:1, delay:1.4});
		}, 200); //2100);


		  TweenMax.to(hashtags, 0.5, {opacity:0})
	    TweenMax.to("#nautlogo", 1, {attr:{y:1180},css:{fontSize:43}})
	}

  if(animationStep == 2){
	  TweenMax.to("#playGround", 1, {scaleX:0.75, scaleY:0.75, css:{top:"40%"}});
    TweenMax.to(hashtags, 1, {opacity:1, delay:0.5})
		TweenMax.to(titoli, 1, {opacity:0});
		TweenMax.to("#secClaimVersatile", 0.3, {opacity:0.3});
		TweenMax.to("#claimVersatile", 0.3, {opacity:0.3});
		TweenMax.to("#claimVersatile", 0.6, {css:{top:"6%"}});
		TweenMax.to("#secClaimVersatile", 0.8, {css:{top:"31%"}});
		TweenMax.to("#triVersa", 1, {opacity:1, delay:0.5});
		TweenMax.to("#triVersa", 0.6, {css:{top:"71%"}, delay:0.5});
    TweenMax.to(circles, 1, {attr:{r:635}, opacity:0.4, svgOrigin:"1920 1080"})
    TweenMax.to("#title01", 1, {attr:{y:540}, svgOrigin:"1920 1080"})
    TweenMax.to("#title02", 1, {attr:{x:1320, y:1380}, svgOrigin:"1920 1080"})
    TweenMax.to("#title03", 1, {attr:{x:2580, y:1380}, svgOrigin:"1920 1080"})
    TweenMax.to("#c01", 1, {attr:{cy:820}, svgOrigin:"1920 1080"})
    TweenMax.to("#c02", 1, {attr:{cx:1600, cy:1180}, svgOrigin:"1920 1080"})
    TweenMax.to("#c03", 1, {attr:{cx:2240, cy:1180}, svgOrigin:"1920 1080"})
    TweenMax.to("#nautlogo", 1, {attr:{y:1160},css:{fontSize:60}})
		TweenMax.to(partner, 0.5, {opacity:0})
		TweenMax.to(partnerCircle, 0.4, {opacity:0,attr:{r:0}})
  }

  if(animationStep == 3){
	  TweenMax.to(partner, 0.3, {opacity:1, delay:1.5})
	  TweenMax.to(partnerCircle, 1, {opacity:1,attr:{r:0}})
    TweenMax.to(titoli, 1, {opacity:1})
    TweenMax.to(hashtags, 0.5, {opacity:0})
		TweenMax.to("#secClaimVersatile", 0.3, {opacity:0});
		TweenMax.to("#triVersa", 0.3, {opacity:0.3});
		TweenMax.to("#triVersa", 0.8, {css:{top:"30%"}});
		TweenMax.to("#quaVersa", 1, {opacity:1, delay:0.5});
		TweenMax.to("#quaVersa", 0.6, {css:{top:"70%"}, delay:0.5});
		TweenMax.to("#claimVersatile", 0.6, {css:{top:"3%"}});

		TweenMax.to("#playGround", 1, {scaleX:0.75, scaleY:0.75, css:{top:"43%"}});
    TweenMax.to("#nautlogo", 1, {attr:{x:1916, y:1170},css:{fontSize:40}})
    TweenMax.to("#title01", 1, {attr:{y:840}, svgOrigin:"1920 1080"})
    TweenMax.to("#title02", 1, {attr:{x:1620, y:1320}, svgOrigin:"1920 1080"})
    TweenMax.to("#title03", 1, {attr:{x:2240, y:1320}, svgOrigin:"1920 1080"})
    TweenMax.to("#c01", 1, {attr:{cy:920}, svgOrigin:"1920 1080"})
    TweenMax.to("#c02", 1, {attr:{cx:1720, cy:1280}, svgOrigin:"1920 1080"})
    TweenMax.to("#c03", 1, {attr:{cx:2120, cy:1280}, svgOrigin:"1920 1080"})
    TweenMax.to(circles, 1, {opacity:1, attr:{r:330}, svgOrigin:"1920 1080"})
    TweenMax.to(partner, 1, {opacity:1, delay:1})
    TweenMax.to(partnerCircle, 0.6, {opacity:1,attr:{r:100}, delay:0.8})
  }

  if(animationStep == 4){
	  TweenMax.to(partner, 0.5, {opacity:0})
	  TweenMax.to(partnerCircle, 0.4, {opacity:0,attr:{r:0},delay:0.3})
    TweenMax.to(titoli, 0.5, {opacity:0})
    TweenMax.to(".triangle", 0.5, {opacity:1, delay:1})
		TweenMax.to("#nautlogo", 0.5, {opacity:0});
		TweenMax.to(circles, 1, {ease:Linear.easeNone, rotation:360, repeat:-1, delay:1})
		TweenMax.to(circles, 0.5, {opacity:0.8, css:{strokeWidth:2}, delay:0.6})
		TweenMax.to(circlesLater, 0.5, {opacity:0.8, delay:1})
		TweenMax.to("#c01", 1, {attr:{cx:1924, cy:1080}, delay:0.5})
    TweenMax.to("#c02", 1, {attr:{cx:1920, cy:1084}, delay:0.5})
    TweenMax.to("#c03", 1, {attr:{cx:1916, cy:1076}, delay:0.5})
    TweenMax.to("#playGround", 1, {scaleX:0.75, scaleY:0.75, delay:0.5, css:{top:"50%"}});

		TweenMax.to("#t01", 6, {ease:Linear.easeNone, rotation:360, repeat:-1, svgOrigin:"1920 1080"})
		TweenMax.to("#t02", 6.4, {ease:Linear.easeNone, rotation:360, repeat:-1, svgOrigin:"1920 1080"})
		TweenMax.to("#t03", 6.2, {ease:Linear.easeNone, rotation:360, repeat:-1, svgOrigin:"1920 1080"})
		TweenMax.to("#t04", 6.3, {ease:Linear.easeNone, rotation:360, repeat:-1, svgOrigin:"1920 1080"})
		TweenMax.to("#t05", 6.1, {ease:Linear.easeNone, rotation:360, repeat:-1, svgOrigin:"1920 1080"})

		TweenMax.to("#c01", 5, {ease:Linear.easeNone, rotation:360, repeat:-1, svgOrigin:"1920 1080", delay:1})
		TweenMax.to("#c02", 5.4, {ease:Linear.easeNone, rotation:360, repeat:-1, svgOrigin:"1920 1080", delay:1})
		TweenMax.to("#c03", 5.2, {ease:Linear.easeNone, rotation:360, repeat:-1, svgOrigin:"1920 1080", delay:1})
		TweenMax.to("#c04", 5.3, {ease:Linear.easeNone, rotation:360, repeat:-1, svgOrigin:"1920 1080", delay:1})
		TweenMax.to("#c05", 5.1, {ease:Linear.easeNone, rotation:360, repeat:-1, svgOrigin:"1920 1080", delay:1})

  }

  if(animationStep == 5){

		TweenMax.to("#playGround", 1, {scaleX:0.2, scaleY:0.8});
		setTimeout( function(){
		TweenMax.to(triangles, 0.5, {opacity:0})
		TweenMax.to(circles, 0.5, {rotation:0, svgOrigin:"1920 1080"})
		TweenMax.to(circlesLater, 0.5, {rotation:0, svgOrigin:"1920 1080"})
		TweenMax.to(processCircles, 0.1, {opacity:1})


		TweenMax.set("#processImg", {scaleX:0.8, scaleY:0.8});


			TweenMax.to("#playGround", 1, {css:{left:"60%", top:"64%"}});

			TweenMax.to("#c04", 0.5, {opacity:1})
			TweenMax.to("#c05", 0.5, {opacity:1})
	    TweenMax.to("#processImg", 0.5, {opacity:1, delay:0.5})

			TweenMax.to("#c01", 1, {attr:{cx:1522, cy:1060, r:94}})
			TweenMax.to("#c02", 1, {attr:{cx:1734, cy:1300, r:86}})
			TweenMax.to("#c03", 1, {attr:{cx:2174, cy:954, r:112}})
			TweenMax.to("#c04", 1, {attr:{cx:2125, cy:1272, r:84}})
			TweenMax.to("#c05", 1, {attr:{cx:2173, cy:955, r:112}})
		}, 2500); //2100);
	}
}
createCircles();
var processCircles;
function createCircles() {
	var svgns = "http://www.w3.org/2000/svg",
	    svgCon = document.getElementById( 'mask-path' );
			for (var i = 0; i < 12; i++) {
				var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'cx', 1920);
        circle.setAttributeNS(null, 'cy', 1080);
        circle.setAttributeNS(null, 'r', 330);
        circle.setAttributeNS(null, 'class', "processCircles");
        svgCon.appendChild(circle);
     }
		 processCircles = document.querySelectorAll(".processCircles")
}

function strokIt(what) {
	var shape = document.getElementById(what);
	setTimeout(function () {
			shape.setAttribute('stroke-dashoffset', 0);
	}, 0);
}
function changeBG() {
		  document.getElementById('bgContain').src="https://naut.ch/bgContainer.html";
}
/*
$(document).ready(function() {
  $("#playGround").click(function(event){
    var relX = event.pageX - $(this).offset().left;
    var relY = event.pageY - $(this).offset().top;
    var relBoxCoords =  relX + "," + relY;

  });
});*/
