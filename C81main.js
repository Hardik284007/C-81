canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokestyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();
canvas.addEventlistener("mousedown",my_mousedown());
function my_mousedown(e)
{
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
console.log("X-"+mouse_x+",Y-"+mouse_y);
}
function circle(mouse_y,mouse_x)
{
    ctx.beginPath();
ctx.strokestyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
ctx.stroke();
}