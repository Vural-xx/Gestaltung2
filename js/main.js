$( document ).ready(function() {




	

var burgeroben=$("#oben"),
	burgerunten=$("#unten"),
	schrift=$("#schrift"),
	samen1=$("#samen1"),
	samen2=$("#samen2"),
	samen3=$("#samen3"),
	samen4=$("#samen4"),
	samen5=$("#samen5"),
	samen6=$("#samen6"),
	samen7=$("#samen7"),
	samen8=$("#samen8"),
	samen9=$("#samen9"),
	samen10=$("#samen10"),
	samen11=$("#samen11"),
	loader=$("#loader"),
	rstrich=$("#rezeptstriche"),
	rstrich1=$("#rezeptstriche1"),
	pfeil=$("#pfeil"),
	vielicon=$("#vielicon"),
	burgericon=$("#burgericon"),
	ebene=$("#Ebene_1"),
	rezept=$("#rezept"),
	anleitung=$("#anleitung"),

	kreis=$("#kreis"),
	teil1=$("#kuchen1"),
	teil2=$("#kuchen2"),
	teil3=$("#kuchen3"),
	teil4=$("#kuchen4"),
	teiloben=$("#Teil_vorn"),
	teil2oben=$("#Teil_2_oben"),
	teil3oben=$("#Teil_3_oben"),
	teil4oben=$("#Teil_4_oben"),
	teilunten=$("#Ebene_11"),
	teil2unten=$("#Teil_2_unten"),
	teil3unten=$("#Teil_3_unten"),
	teilhinten=$("#Teil_hinten"),
	test=$(".wurst"),
	fleischpopup=$("#fleischpopup"),
	kuh=$("#Kuh"),



	tl;		



		tl=new TimelineMax();


//aus dem bild nehmen

	tl.set([burgeroben],{yPercent: -200, opacity:0});
	tl.set([samen1], {scale:0});
	tl.set([ebene], {xPercent:-0.60});
	tl.set([samen2], {scale:0});
	tl.set([samen3], {scale:0});
	tl.set([samen4], {scale:0});
	tl.set([samen5], {scale:0});
	tl.set([samen6], {scale:0});
	tl.set([samen7], {scale:0});
	tl.set([samen8], {scale:0});
	tl.set([samen9], {scale:0});
	tl.set([samen10], {scale:0});
	tl.set([samen11], {scale:0});
	tl.set([schrift], {opacity:0});
	tl.set([burgericon], {visibility:"hidden"});
	tl.set([burgerunten],{yPercent: 400, opacity:0});
	tl.set([rstrich], {visibility:"visible"});
	tl.set([vielicon], {opacity:0});
	tl.set([rezept],{yPercent:5, opacity:0});
	tl.set([anleitung],{yPercent:5, opacity:0});

	tl.set([kreis],{opacity:0});
	tl.set([teil1],{scale:0});
	tl.set([teil2],{scale:0});
	tl.set([teil3],{scale:0});
	tl.set([teil4],{scale:0});

	tl.set([pfeil], {scale:0});
	// KuhTeile
	tl.set([teiloben], {opacity:0});
	tl.set([teil2oben], {opacity:0});
	tl.set([teil3oben], {opacity:0});
	tl.set([teil4oben], {opacity:0});
	tl.set([teilunten], {opacity:0});
	tl.set([teil2unten], {opacity:0});
	tl.set([teil3unten], {opacity:0});
	tl.set([teilhinten], {opacity:0});
	tl.set([fleischpopup], {yPercent:10, opacity:0});
	tl.set([test], {opacity:0});


	teiloben=$("#Teil_vorn"),
	teil2oben=$("#Teil_2_oben"),
	teil3oben=$("#Teil_3_oben"),
	teil4oben=$("#Teil_4_oben"),
	teilunten=$("#Ebene_11"),
	teil2unten=$("#Teil_2_unten"),
	teil3unten=$("#Teil_3_unten"),
	teilhinten=$("#Teil_hinten"),
	(teiloben).hover(over, out);
	(teil2oben).hover(over, out);
	(teil3oben).hover(over, out);
	(teil4oben).hover(over, out);
	(teilunten).hover(over, out);
	(teil2unten).hover(over, out);
	(teil3unten).hover(over, out);
	(teilhinten).hover(over, out);

	function over(){
		TweenMax.to([kuh],0.5,{opacity:0.5},0),
  TweenMax.to(this, 0.2, {opacity:1}, 0.2),
TweenMax.to([test], 0.5, {opacity:1},0.5),
  TweenMax.fromTo(test, 0.5, {drawSVG:"0%"},{drawSVG:"100%"},0),
   TweenMax.to(fleischpopup,0.5,{yPercent:0,opacity:1},2);
}

function out(){
	TweenMax.to([kuh],0.5,{opacity:1},0),
  TweenMax.to(this, 0.5, {opacity:0},0.2);
  TweenMax.to(fleischpopup,0.5,{yPercent:10,opacity:0},1);
  TweenMax.to([test], 0.5, {opacity:0},0.5),
  TweenMax.fromTo([test], 0.5, {drawSVG:"100%"},{drawSVG:"0%"},0.5);
}


	var controller = new ScrollMagic.Controller();

var tlCurtain=new TimelineMax();
	tlCurtain.to([burgeroben], 0.8, {opacity:1}, 1)
	.to([burgerunten], 0.8, {opacity:1}, 1)
	.to([burgeroben], 0.8, {yPercent:0, ease:Elastic.easeOut}, 2.4)
	.to([burgerunten], 0.8, {yPercent:0, ease:Elastic.easeOut}, 2)

	.to([samen1], 0.3, {scale:1, ease:Elastic.easeOut},3)
	.to([samen2], 0.3, {scale:1, ease:Elastic.easeOut},3.1)
	.to([samen3], 0.3, {scale:1, ease:Elastic.easeOut},3.2)
	.to([samen4], 0.3, {scale:1, ease:Elastic.easeOut},3.3)
	.to([samen5], 0.3, {scale:1, ease:Elastic.easeOut},3.4)
	.to([samen6], 0.3, {scale:1, ease:Elastic.easeOut},3.5)
	.to([samen7], 0.3, {scale:1, ease:Elastic.easeOut},3.6)
	.to([samen8], 0.3, {scale:1, ease:Elastic.easeOut},3.7)
	.to([samen9], 0.3, {scale:1, ease:Elastic.easeOut},3.8)
	.to([samen10], 0.3, {scale:1, ease:Elastic.easeOut},3.9)
	.to([samen11], 0.3, {scale:1, ease:Elastic.easeOut},4)
	.to([schrift], 0.3,{opacity:1}, 4.5)


	.to([ebene], 0.8, {yPercent:-28.2, xPercent:-0.62,scale:0.535}, 5)





	.to([loader], 2.5,{opacity:0},5.2)
	.to([loader], 0,{visibility:"hidden"},7.5)
	.to([ebene], 0,{visibility:"hidden"},6)
	.to([burgericon], 0,{visibility:"visible"},6)



	var vier= new TimelineMax();
	  vier.fromTo([test], 1, {drawSVG:"0%"},{drawSVG:"100%"},1);



var scene=new ScrollMagic.Scene({triggerElement: "#burgericon"})
	
		.addTo(controller)
		.setTween(tlCurtain);

		var zwei= new TimelineMax();
		zwei.to([rezept],0.3,{yPercent:0 , opacity:1},0.5),
		zwei.to([anleitung],0.3,{yPercent:0 , opacity:1},0.5),
		zwei.staggerFrom(rstrich, 0.05,{autoAlpha:0, scale: 0}, 0.1,'+=0.25'),
		zwei.staggerFrom(rstrich1, 0.05,{autoAlpha:0, scale: 0}, 0.1,'+=0.25');
		//zwei.staggerFrom(pfeil, 0.02,{autoAlpha:0, scale: 0}, 0.1,'+=0.8');
		//zwei.to([vielicon],0.3,{opacity:1},3);


			var drei= new TimelineMax();
			drei.to([kreis], 0.5,{opacity:1},1.5),
			drei.to([kuchen1], 1, {scale:1, ease:Elastic.easeOut},2),
			drei.to([kuchen2], 1, {scale:1, ease:Elastic.easeOut},2.1),
			drei.to([kuchen3], 1, {scale:1, ease:Elastic.easeOut},2.2),
			drei.to([kuchen4], 1, {scale:1, ease:Elastic.easeOut},2.3);


		var scene2=new ScrollMagic.Scene({triggerElement: "#profiles"})
	
		.addTo(controller)
		.setTween(zwei);

		var scene3=new ScrollMagic.Scene({triggerElement: "#naehrwerte"})

	


	.addTo(controller)
		.setTween(drei);
 





});