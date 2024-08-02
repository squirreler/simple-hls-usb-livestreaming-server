# terrible-hls-usb-livestreaming-server
High latency usb camera implementation of a hls live streaming server.

#installation instructions

1.) Clone the repository git clone

2.) Create virtual environment: python3 -m venv env

3.) Find your usb camera device: gst-device-monitor-1.0 | grep /dev/
 
You will get output results like the following. Choose either of the values on the right side of the video that 
do not have the string "v4l2" in the value. 
( 
  api.v4l2.path = /dev/video0
  object.path = v4l2:/dev/video0
  api.v4l2.path = /dev/video2
  object.path = v4l2:/dev/video2
) 

For example my camera path is "/dev/video2"

4.) In the directory of the git repository, fun the command below: 


