//var set1 = [new ImgPair("./img/sets/1/0.png", "./img/sets/1/0.jpg"), new ImgPair("./img/sets/1/1.png", "./img/sets/1/1.jpg"), new ImgPair("./img/sets/1/2.png", "./img/sets/1/2.jpg"), new ImgPair("./img/sets/1/-1.png", "./img/sets/1/-1.jpg"), new ImgPair("./img/sets/1/-2.png", "./img/sets/1/-2.jpg")];
var set1 = [new ImgPair("./img/sets/1/0(mid).png", "./img/sets/1/0(mid).jpg"), new ImgPair("./img/sets/1/1(mid).png", "./img/sets/1/1(mid).jpg"), new ImgPair("./img/sets/1/2(mid).png", "./img/sets/1/2(mid).jpg"), new ImgPair("./img/sets/1/-1(mid).png", "./img/sets/1/-1(mid).jpg"), new ImgPair("./img/sets/1/-2(mid).png", "./img/sets/1/-2(mid).jpg")];
var set = 1;

function ImgPair(raw, jpeg)
{
    this.raw = raw;
    this.jpeg = jpeg;
}

function displayImgs(exposure)
{
    switch (set) 
    {
        case 1:
            document.getElementById("raw").src = set1[exposure].raw;
            console.log(set1[exposure].raw);
            document.getElementById("jpeg").src = set1[exposure].jpeg;
            console.log(set1[exposure].jpeg);
            break;
        
        default:
            break;
    }
}