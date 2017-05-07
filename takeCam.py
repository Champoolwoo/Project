import RPi.GPIO as GPIO
import time
import os

GPIO.setmode(GPIO.BCM)

#-------------------
time.sleep(3)
os.system("fswebcam -s 15 -d /dev/video0 -r 1280x780 --no-banner public/picture/cam1/Floor1.jpg")
os.system("fswebcam -s 15 -d /dev/video1 -r 1280x780 --no-banner public/picture/cam2/Floor2.jpg")
os.system("fswebcam -s 15 -d /dev/video2 -r 1280x780 --no-banner public/picture/cam3/Floor3.jpg")
