from flask import Flask, render_template
from flask import request
import json

app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/postmethod', methods = ['POST', 'GET'])
def get_post_javascript_data():
    jsdata = request.form['direction']
    return f"<h1>{jsdata}</h1>"
    print(jsdata)

if __name__ == '__main__':
   app.run(host="0.0.0.0", debug=True)
