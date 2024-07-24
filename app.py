from flask import Flask

app = Flask(__name__)

@app.route("/")
def render_video_page():
    return render_template(index.html);
