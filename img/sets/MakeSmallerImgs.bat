echo converting exposure 0
rem ffmpeg -i 0.png -vf scale=3000:2000 0(mid).png
rem ffmpeg -i 0.png -vf scale=600:400 0(small).png
rem ffmpeg -i 0(mid).jpg -vf scale=3000:2000 0(mid).jpg
ffmpeg -i 0(mid).jpg -vf scale=600:400 0(small).jpg
echo converting exposure 1
rem ffmpeg -i 1.png -vf scale=3000:2000 1(mid).png
rem ffmpeg -i 1.png -vf scale=600:400 1(small).png
rem ffmpeg -i 1(mid).jpg -vf scale=3000:2000 1(mid).jpg
ffmpeg -i 1(mid).jpg -vf scale=600:400 1(small).jpg
echo converting exposure 2
rem ffmpeg -i 2.png -vf scale=3000:2000 2(mid).png
rem ffmpeg -i 2.png -vf scale=600:400 2(small).png
rem ffmpeg -i 2(mid).jpg -vf scale=3000:2000 2(mid).jpg
ffmpeg -i 2(mid).jpg -vf scale=600:400 2(small).jpg
echo converting exposure -1
rem ffmpeg -i ./-1.png -vf scale=3000:2000 ./-1(mid).png
rem ffmpeg -i ./-1.png -vf scale=600:400 ./-1(small).png
rem ffmpeg -i ./-1(mid).jpg -vf scale=3000:2000 ./-1(mid).jpg
ffmpeg -i ./-1(mid).jpg -vf scale=600:400 ./-1(small).jpg
echo converting exposure -2
rem ffmpeg -i ./-2.png -vf scale=3000:2000 ./-2(mid).png
rem ffmpeg -i ./-2.png -vf scale=600:400 ./-2(small).png
rem ffmpeg -i ./-2(mid).jpg -vf scale=3000:2000 ./-2(mid).jpg
ffmpeg -i ./-2(mid).jpg -vf scale=600:400 ./-2(small).jpg