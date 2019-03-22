echo converting exposure 0
ffmpeg -i 0.png -vf scale=3000:2000 0(mid).png
ffmpeg -i 0.png -vf scale=600:400 0(small).png
ffmpeg -i 0.jpg -vf scale=3000:2000 0(mid).jpg
ffmpeg -i 0.jpg -vf scale=600:400 0(small).jpg
echo converting exposure 1
ffmpeg -i 1.png -vf scale=3000:2000 1(mid).png
ffmpeg -i 1.png -vf scale=600:400 1(small).png
ffmpeg -i 1.jpg -vf scale=3000:2000 1(mid).jpg
ffmpeg -i 1.jpg -vf scale=600:400 1(small).jpg
echo converting exposure 2
ffmpeg -i 2.png -vf scale=3000:2000 2(mid).png
ffmpeg -i 2.png -vf scale=600:400 2(small).png
ffmpeg -i 2.jpg -vf scale=3000:2000 2(mid).jpg
ffmpeg -i 2.jpg -vf scale=600:400 2(small).jpg
echo converting exposure -1
ffmpeg -i ./-1.png -vf scale=3000:2000 ./-1(mid).png
ffmpeg -i ./-1.png -vf scale=600:400 ./-1(small).png
ffmpeg -i ./-1.jpg -vf scale=3000:2000 ./-1(mid).jpg
ffmpeg -i ./-1.jpg -vf scale=600:400 ./-1(small).jpg
echo converting exposure -2
ffmpeg -i ./-2.png -vf scale=3000:2000 ./-2(mid).png
ffmpeg -i ./-2.png -vf scale=600:400 ./-2(small).png
ffmpeg -i ./-2.jpg -vf scale=3000:2000 ./-2(mid).jpg
ffmpeg -i ./-2.jpg -vf scale=600:400 ./-2(small).jpg