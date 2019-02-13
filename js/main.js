var photos = ["./img/sitting.jpg", "./img/laying.jpg", "./img/stretching.jpg"];
var position = 0;

function nextPhoto()
{
    if(position < 2)
    {
        document.getElementById("photo").src = photos[++position];
    }
    else if(position == 2)
    {
        document.getElementById("photo").src = photos[0];
        position = 0;
    }
}

function prevPhoto()
{
    if(position > 0)
    {
        document.getElementById("photo").src = photos[--position];
    }
    else if(position == 0)
    {
        document.getElementById("photo").src = photos[2];
        position = 2;
    }
}