from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World! Jeg er en server.."

if __name__ == '__main__':
    app.run(debug=True)
