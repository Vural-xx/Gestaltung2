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
	ebene=$("#Ebene_1"),

	test=$("#text1 path"),
	tl;		



		tl=new TimelineMax();


//aus dem bild nehmen

	tl.set([burgeroben],{yPercent: -200, opacity:0});
	tl.set([samen1], {scale:0});
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
	tl.set([burgerunten],{yPercent: 400, opacity:0});

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
	.staggerFrom(schrift, 0.3,{autoAlpha:0}, 0.1)


	.to([ebene], 0.8, {yPercent:-27, xPercent:0,scale:0.5}, 5)





	.to([loader], 2,{opacity:0},5)
	.to([loader], 0,{visibility:"hidden"},7.2)



	


 

 




});