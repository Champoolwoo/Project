import RPi.GPIO as GPIO
import time
import os

GPIO.setmode(GPIO.BCM)

#-------------------
time.sleep(3)
os.system("fswebcam -s 15 -d /dev/video0 -r 1280x780 --no-banner public/picture/cam1/Floor1.jpg")
<<<<<<< HEAD
os.system("fswebcam -s 15 -d /dev/video5 -r 1280x780 --no-banner public/picture/cam2/Floor2.jpg")
os.system("fswebcam -s 15 -d /dev/video2 -r 1280x780 --no-banner public/picture/cam3/Floor3.jpg")
=======
os.system("fswebcam -s 15 -d /dev/video1 -r  -p YUYV 640x480 --no-banner public/picture/cam2/Floor2.jpg")
os.system("fswebcam -s 15 -d /dev/video2 -r  -p YUYV 640x480 --no-banner public/picture/cam3/Floor3.jpg")

>>>>>>> 301d70b76a90f00388bb4a0edadad4dd740ab5d2
