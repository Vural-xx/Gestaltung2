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
	chuck=$("#fleischpopup .chuck"),
	rib=$("#fleischpopup .rib"),
	shortloin=$("#fleischpopup .shortloin"),
	sirloin=$("#fleischpopup .sirloin"),
	round=$("#fleischpopup .round"),
	flank=$("#fleischpopup .flank"),
	shortplate=$("#fleischpopup .shortplate"),
	brisfor=$("#fleischpopup .brisfor"),
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
	tl.set([chuck], {yPercent:10, opacity:0});
	tl.set([rib], {yPercent:10, opacity:0});
	tl.set([shortloin], {yPercent:10, opacity:0});
	tl.set([sirloin], {yPercent:10, opacity:0});
	tl.set([round], {yPercent:10, opacity:0});
	tl.set([flank], {yPercent:10, opacity:0});
	tl.set([shortplate], {yPercent:10, opacity:0});
	tl.set([brisfor], {yPercent:10, opacity:0});
	tl.set([test], {opacity:0});


	teiloben=$("#Teil_vorn"),
	teil2oben=$("#Teil_2_oben"),
	teil3oben=$("#Teil_3_oben"),
	teil4oben=$("#Teil_4_oben"),
	teilunten=$("#Ebene_11"),
	teil2unten=$("#Teil_2_unten"),
	teil3unten=$("#Teil_3_unten"),
	teilhinten=$("#Teil_hinten"),
	(teiloben).hover(overChuck, outChuck);
	(teil2oben).hover(overRib, outRib);
	(teil3oben).hover(overShortloin, outShortloin);
	(teil4oben).hover(overSirloin, outSirloin);
	(teilunten).hover(overChuck, outChuck);
	(teilhinten).hover(overRound, outRound);
	(teil3unten).hover(overFlank, outFlank);
	(teil2unten).hover(overBrisfor, outBrisfor);



	function overChuck(){
		TweenMax.to([kuh],0.5,{opacity:0.5},0),
  		TweenMax.to(this, 0.2, {opacity:1}, 0.2),
		TweenMax.to([test], 0.5, {opacity:1},0.5),
  		TweenMax.fromTo(test, 0.5, {drawSVG:"0%"},{drawSVG:"100%"},0),
   		TweenMax.to(chuck,0.5,{yPercent:0,opacity:1},2);
	}

	function outChuck(){
		TweenMax.to([kuh],0.5,{opacity:1},0),
  		TweenMax.to(this, 0.5, {opacity:0},0.2);
  		TweenMax.to(chuck,0.5,{yPercent:10,opacity:0},1);
  		TweenMax.to([test], 0.5, {opacity:0},0.5),
  		TweenMax.fromTo([test], 0.5, {drawSVG:"100%"},{drawSVG:"0%"},0.5);
	}

	function overRib(){
		TweenMax.to([kuh],0.5,{opacity:0.5},0),
  		TweenMax.to(this, 0.2, {opacity:1}, 0.2),
		TweenMax.to([test], 0.5, {opacity:1},0.5),
  		TweenMax.fromTo(test, 0.5, {drawSVG:"0%"},{drawSVG:"100%"},0),
   		TweenMax.to(rib,0.5,{yPercent:0,opacity:1},2);
	}

	function outRib(){
		TweenMax.to([kuh],0.5,{opacity:1},0),
  		TweenMax.to(this, 0.5, {opacity:0},0.2);
  		TweenMax.to(rib,0.5,{yPercent:10,opacity:0},1);
  		TweenMax.to([test], 0.5, {opacity:0},0.5),
  		TweenMax.fromTo([test], 0.5, {drawSVG:"100%"},{drawSVG:"0%"},0.5);
	}

	function overShortloin(){
		TweenMax.to([kuh],0.5,{opacity:0.5},0),
  		TweenMax.to(this, 0.2, {opacity:1}, 0.2),
		TweenMax.to([test], 0.5, {opacity:1},0.5),
  		TweenMax.fromTo(test, 0.5, {drawSVG:"0%"},{drawSVG:"100%"},0),
   		TweenMax.to(shortloin,0.5,{yPercent:0,opacity:1},2);
	}

	function outShortloin(){
		TweenMax.to([kuh],0.5,{opacity:1},0),
  		TweenMax.to(this, 0.5, {opacity:0},0.2);
  		TweenMax.to(shortloin,0.5,{yPercent:10,opacity:0},1);
  		TweenMax.to([test], 0.5, {opacity:0},0.5),
  		TweenMax.fromTo([test], 0.5, {drawSVG:"100%"},{drawSVG:"0%"},0.5);
	}

	function overSirloin(){
		TweenMax.to([kuh],0.5,{opacity:0.5},0),
  		TweenMax.to(this, 0.2, {opacity:1}, 0.2),
		TweenMax.to([test], 0.5, {opacity:1},0.5),
  		TweenMax.fromTo(test, 0.5, {drawSVG:"0%"},{drawSVG:"100%"},0),
   		TweenMax.to(sirloin,0.5,{yPercent:0,opacity:1},2);
	}

	function outSirloin(){
		TweenMax.to([kuh],0.5,{opacity:1},0),
  		TweenMax.to(this, 0.5, {opacity:0},0.2);
  		TweenMax.to(sirloin,0.5,{yPercent:10,opacity:0},1);
  		TweenMax.to([test], 0.5, {opacity:0},0.5),
  		TweenMax.fromTo([test], 0.5, {drawSVG:"100%"},{drawSVG:"0%"},0.5);
	}

	function overRound(){
		TweenMax.to([kuh],0.5,{opacity:0.5},0),
  		TweenMax.to(this, 0.2, {opacity:1}, 0.2),
		TweenMax.to([test], 0.5, {opacity:1},0.5),
  		TweenMax.fromTo(test, 0.5, {drawSVG:"0%"},{drawSVG:"100%"},0),
   		TweenMax.to(round,0.5,{yPercent:0,opacity:1},2);
	}

	function outRound(){
		TweenMax.to([kuh],0.5,{opacity:1},0),
  		TweenMax.to(this, 0.5, {opacity:0},0.2);
  		TweenMax.to(round,0.5,{yPercent:10,opacity:0},1);
  		TweenMax.to([test], 0.5, {opacity:0},0.5),
  		TweenMax.fromTo([test], 0.5, {drawSVG:"100%"},{drawSVG:"0%"},0.5);
	}

	function overFlank(){
		TweenMax.to([kuh],0.5,{opacity:0.5},0),
  		TweenMax.to(this, 0.2, {opacity:1}, 0.2),
		TweenMax.to([test], 0.5, {opacity:1},0.5),
  		TweenMax.fromTo(test, 0.5, {drawSVG:"0%"},{drawSVG:"100%"},0),
   		TweenMax.to(flank,0.5,{yPercent:0,opacity:1},2);
	}

	function outFlank(){
		TweenMax.to([kuh],0.5,{opacity:1},0),
  		TweenMax.to(this, 0.5, {opacity:0},0.2);
  		TweenMax.to(flank,0.5,{yPercent:10,opacity:0},1);
  		TweenMax.to([test], 0.5, {opacity:0},0.5),
  		TweenMax.fromTo([test], 0.5, {drawSVG:"100%"},{drawSVG:"0%"},0.5);
	}

	function overBrisfor(){
		TweenMax.to([kuh],0.5,{opacity:0.5},0),
  		TweenMax.to(this, 0.2, {opacity:1}, 0.2),
		TweenMax.to([test], 0.5, {opacity:1},0.5),
  		TweenMax.fromTo(test, 0.5, {drawSVG:"0%"},{drawSVG:"100%"},0),
   		TweenMax.to(brisfor,0.5,{yPercent:0,opacity:1},2);
	}

	function outBrisfor(){
		TweenMax.to([kuh],0.5,{opacity:1},0),
  		TweenMax.to(this, 0.5, {opacity:0},0.2);
  		TweenMax.to(brisfor,0.5,{yPercent:10,opacity:0},1);
  		TweenMax.to([test], 0.5, {opacity:0},0.5),
  		TweenMax.fromTo([test], 0.5, {drawSVG:"100%"},{drawSVG:"0%"},0.5);
	}









});