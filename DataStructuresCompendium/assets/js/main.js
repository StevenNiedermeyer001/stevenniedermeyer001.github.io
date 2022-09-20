const myList = [0];


for(var i = 1; i < 20; i++)
{
    myList.push(i);
    if(i % 7 == 0)
    {
        myList.push(i);
    }
}

document.getElementById("oList").innerHTML = myList;

var j = 0;
var k = 0;

for(i = 0; i < myList.length; i++)
{
    j = Math.floor(Math.random() * myList.length);
    k = myList[i];
    myList[i] = myList[j];
    myList[j] = k;
}

document.getElementById("shList").innerHTML = myList;

var x = false;

while(x == false)
{
    x = true;
    for(i = 0; i < myList.length; i++)
    {
        if(myList[i] > myList[i+1])
        {
            k = myList[i];
            myList[i] = myList[i+1];
            myList[i+1] = k;

            x = false;
        }
    }
    document.getElementById("soList").innerHTML += myList;
    document.getElementById("soList").innerHTML += "<br>";
}
