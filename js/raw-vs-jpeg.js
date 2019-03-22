//var set1 = [new ImgPair("./img/sets/1/0.png", "./img/sets/1/0.jpg"), new ImgPair("./img/sets/1/1.png", "./img/sets/1/1.jpg"), new ImgPair("./img/sets/1/2.png", "./img/sets/1/2.jpg"), new ImgPair("./img/sets/1/-1.png", "./img/sets/1/-1.jpg"), new ImgPair("./img/sets/1/-2.png", "./img/sets/1/-2.jpg")];
var set1 = [new ImgPair("./img/sets/1/0(mid).png", "./img/sets/1/0(mid).jpg"), new ImgPair("./img/sets/1/1(mid).png", "./img/sets/1/1(mid).jpg"), new ImgPair("./img/sets/1/2(mid).png", "./img/sets/1/2(mid).jpg"), new ImgPair("./img/sets/1/-1(mid).png", "./img/sets/1/-1(mid).jpg"), new ImgPair("./img/sets/1/-2(mid).png", "./img/sets/1/-2(mid).jpg")];
var set1s = [new ImgPair("./img/sets/1/0(small).png", "./img/sets/1/0(small).jpg"), new ImgPair("./img/sets/1/1(small).png", "./img/sets/1/1(small).jpg"), new ImgPair("./img/sets/1/2(small).png", "./img/sets/1/2(small).jpg"), new ImgPair("./img/sets/1/-1(small).png", "./img/sets/1/-1(small).jpg"), new ImgPair("./img/sets/1/-2(small).png", "./img/sets/1/-2(small).jpg")];
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
            document.getElementById("raw").src = set1s[exposure].raw;
            //console.log(set1s[exposure].raw);
            document.getElementById("jpeg").src = set1s[exposure].jpeg;
            //console.log(set1s[exposure].jpeg);
            switchToLargerImgs(set1[exposure].raw, set1[exposure].jpeg);
            break;
        
        default:
            break;
    }
}

function switchToLargerImgs(rawSrc, jpegSrc)
{
    var rawImg = new Image();
    var jpegImg = new Image();
    rawImg.src = rawSrc;
    jpegImg.src = jpegSrc;
    rawImg.onload = function()
    {
        document.getElementById("raw").src = rawImg.src;
    }
    jpegImg.onload = function()
    {
        document.getElementById("jpeg").src = jpegImg.src;
    }
}