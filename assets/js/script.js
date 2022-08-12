const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 4;
ctx.fillStyle = 'purple';
var currentX = 0;
var currentY = 0;

function createRect()
{
    const path = new Path2D();
    path.rect(135, 250, 30, 30);
    return path;
}

const playerRect = createRect();

function strokePath(path, x, y, lineWidth = ctx.lineWidth, color = ctx.strokeStyle) { // defaults to current style
    ctx.setTransform(1, 0, 0, 1, x, y);  // position the path so its (0,0) origin is at x,y
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke(path);
}

strokePath(playerRect, currentX, currentY);

function move(e)
{
    if(e.keyCode == 37)
    {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        currentX = currentX - 10;
        strokePath(playerRect, currentX, currentY);
    }
    if(e.keyCode == 39)
    {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        currentX = currentX + 10;
        strokePath(playerRect, currentX, currentY);
    }
}

document.onkeydown = move;
