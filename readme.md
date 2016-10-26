# Halloween fun
A simple web app I built to scare the people in my dorm! This is kind of a 5-minute hack together, not my best code.

## What it does
It uses the camera to detect movement, and when movement is detected it playes one of the scary sounds! I built a pumpking,
placed a speaker inside, and attached the camera to the peek-hole in the door. After that, the fun could begin!


## Features
It uses the camera web api to takes pictures, and then compares the pictures pixels using the HTML canvas.

## What we learned
Cameras are not that accurate, so to detect a difference in an image you could not just compare the color values directly. 
I had to make sure the delta (difference) between the two frames were big enough.

## Built With
HTML, JS, Canvas, Camera.
As base, diff-cam-engine (Copyright (c) 2016 Will Boyd) was used.
