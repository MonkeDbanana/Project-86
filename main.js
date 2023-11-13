canvas=new fabric.Canvas("myCanvas");
var x=document.getElementById("birthdayaudio");
function playsound()

{
    x.play();


}
function new_image()
{
fabric.Image.fromURL('OIP.jpg', function(img) {
block_image_object=img;

block_image_object.scaleToWidth(700);
block_image_object.scaleToHeight(510);
block_image_object.set({top:0, left:0});
canvas.add(block_image_object);
});


}