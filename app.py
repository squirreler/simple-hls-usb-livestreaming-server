from flask import Flask
from flask import render_template
from flask import send_from_directory

app = Flask(__name__)
# app.config["USE_X_SENDFILE"] = True
@app.route("/")
def render_video_page():
    return render_template("index.html")

@app.route("/video-files/playlist.m3u8")
def send_manifest(): 
    return send_from_directory("./video-files/","playlist.m3u8")
#converts to string by default
@app.route("/video-files/<tsfilename>")
def send_video(tsfilename): 
    print(tsfilename)
    return send_from_directory("./video-files/", tsfilename)