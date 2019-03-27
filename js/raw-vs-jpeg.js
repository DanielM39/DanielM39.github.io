/*
$('.imgSet').click(function(){
    $('.imgSet').removeClass('on').addClass('off');
    $(this).addClass('on').removeClass('off');
});
$('.exp').click(function(){
    $('.exp').removeClass('on').addClass('off');
    $(this).addClass('on').removeClass('off');
});
*/
//var set1 = [new ImgPair("./img/sets/1/0.png", "./img/sets/1/0.jpg"), new ImgPair("./img/sets/1/1.png", "./img/sets/1/1.jpg"), new ImgPair("./img/sets/1/2.png", "./img/sets/1/2.jpg"), new ImgPair("./img/sets/1/-1.png", "./img/sets/1/-1.jpg"), new ImgPair("./img/sets/1/-2.png", "./img/sets/1/-2.jpg")];
var set1 = [new ImgPair("./img/sets/1/0(mid).png", "./img/sets/1/0(mid).jpg"), new ImgPair("./img/sets/1/1(mid).png", "./img/sets/1/1(mid).jpg"), new ImgPair("./img/sets/1/2(mid).png", "./img/sets/1/2(mid).jpg"), new ImgPair("./img/sets/1/-1(mid).png", "./img/sets/1/-1(mid).jpg"), new ImgPair("./img/sets/1/-2(mid).png", "./img/sets/1/-2(mid).jpg")];
var set1s = [new ImgPair("./img/sets/1/0(small).png", "./img/sets/1/0(small).jpg"), new ImgPair("./img/sets/1/1(small).png", "./img/sets/1/1(small).jpg"), new ImgPair("./img/sets/1/2(small).png", "./img/sets/1/2(small).jpg"), new ImgPair("./img/sets/1/-1(small).png", "./img/sets/1/-1(small).jpg"), new ImgPair("./img/sets/1/-2(small).png", "./img/sets/1/-2(small).jpg")];

var set2 = [new ImgPair("./img/sets/2/0(mid).png", "./img/sets/2/0(mid).jpg"), new ImgPair("./img/sets/2/1(mid).png", "./img/sets/2/1(mid).jpg"), new ImgPair("./img/sets/2/2(mid).png", "./img/sets/2/2(mid).jpg"), new ImgPair("./img/sets/2/-1(mid).png", "./img/sets/2/-1(mid).jpg"), new ImgPair("./img/sets/2/-2(mid).png", "./img/sets/2/-2(mid).jpg")];
var set2s = [new ImgPair("./img/sets/2/0(small).png", "./img/sets/2/0(small).jpg"), new ImgPair("./img/sets/2/1(small).png", "./img/sets/2/1(small).jpg"), new ImgPair("./img/sets/2/2(small).png", "./img/sets/2/2(small).jpg"), new ImgPair("./img/sets/2/-1(small).png", "./img/sets/2/-1(small).jpg"), new ImgPair("./img/sets/2/-2(small).png", "./img/sets/2/-2(small).jpg")];

var set3 = 

var set = 1;
var ex = 0;

function ImgPair(raw, jpeg)
{
    this.raw = raw;
    this.jpeg = jpeg;
}

function displayImgs(exposure)
{
    var expo = "Exposure: ";
    switch(exposure)
    {
        case 0:
            expo += "0";
            break;
        case 1:
            expo += "1";
            break;
        case 2:
            expo += "2";
            break;
        case 3:
            expo += "-1";
            break;
        case 4:
            expo += "-2";
        default:
            break;
    }
    document.getElementById("exp").innerHTML = expo;
    switch (set) 
    {
        case 1:
            document.getElementById("raw").src = set1s[exposure].raw;
            //console.log(set1s[exposure].raw);
            document.getElementById("jpeg").src = set1s[exposure].jpeg;
            //console.log(set1s[exposure].jpeg);
            switchToLargerImgs(set1[exposure].raw, set1[exposure].jpeg);
            break;
        case 2:
            document.getElementById("raw").src = set2s[exposure].raw;
            document.getElementById("jpeg").src = set2s[exposure].jpeg;
            switchToLargerImgs(set2[exposure].raw, set2[exposure].jpeg);
            break;
        default:
            break;
    }
    ex = exposure;
}

function setInfo()
{
    document.getElementById("imgSet").innerHTML = "Image Set: " + set;
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