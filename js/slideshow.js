  // window.onload = initAll;
  
  // var ImageArr1 = new Array("slideImg0.jpg","slideImg1.jpg","slideImg2.jpg","slideImg3.jpg","slideImg4.jpg","slideImg5.jpg","slideImg6.jpg");
  
  // function initAll() {
  //   RotateImages(0);
  // }
  
  // function RotateImages(Start) {
  // 	var a = "ImageArr1";
  // 	var b = document.getElementById('Rotating1');
  // 	if(Start>=7)
  // 		Start=0;
  // 	b.src = "Images/slide/" + ImageArr1[Start];
  // 	window.setTimeout("RotateImages("+(Start+1)+")",5000);
  // }
  
//-----------------------------------------------------------------------
function ShowDate()
{
	var currentTime = new Date()
	var month = currentTime.getMonth() + 1
	var day = currentTime.getDate()
	var year = currentTime.getFullYear()
	document.write(day + "/" + month + "/" + year)
}
//----------------------------------------------------------------------


window.onload = initAll;
  
  var ImageArr1 = new Array
  ("Pict1.jpg","Pict2.jpg","Pict3.jpg","Pict4.jpg","Pict5.jpg","Pict6.jpg","Pict7.jpg");
  
  function initAll() {
    RotateImages(0);
  }
  
  function RotateImages(Start)
  {
    var a = "ImageArr1";
    var b = document.getElementById('Rotating1');
    if(Start>=5)
      Start=0;
    b.src = "images/slide/" + ImageArr1[Start];
    window.setTimeout("RotateImages("+(Start+1)+")",5000);
  }