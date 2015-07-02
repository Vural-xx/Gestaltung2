$( document ).ready(function() {




	

var 

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








});