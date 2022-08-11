const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 2;

// Wall
ctx.strokeRect(35, 100, 150, 110);

// Door
ctx.strokeRect(55, 120, 30, 90);

//window
ctx.strokeRect(115, 110, 50, 30);
ctx.strokeRect(140, 110, 25, 30);
ctx.strokeRect(115, 125, 50, 15);

// Roof
ctx.beginPath();
ctx.moveTo(10, 100);
ctx.lineTo(110, 60);
ctx.lineTo(210, 100);
ctx.closePath();
ctx.stroke();

//window in roof
ctx.beginPath();
ctx.arc(110, 80, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(110, 80, 8, 0, 2 * Math.PI);
ctx.stroke();

//sun
ctx.beginPath();
ctx.arc(5, 5, 50, 0, 2 * Math.PI);
ctx.stroke();

//doggo

//rays
ctx.beginPath();
ctx.moveTo(5, 55);
ctx.lineTo(8, 60);
ctx.closePath();
ctx.stroke();
