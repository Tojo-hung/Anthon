from flask import Flask, render_template
from flask import request
import json

app = Flask(__name__)

def forward():
   
def backward():
   
def right():
   
def left():
   
def stop():
   
@app.route('/')
def home():
   return render_template('index.html')

@app.route("/<direction>")
def action(direction):
	if direction == 'forward':
		forward()
	if direction == 'backward':
		backward()
	if direction == 'right':
		right()
   if direction == 'left':
		left()
	if direction == 'stop':
		stop()   
	return render_template('index.html')


if __name__ == '__main__':
   app.run(host="0.0.0.0", debug=True)
