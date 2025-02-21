from flask import Flask, render_template, request
from model_data import model_data  # Importing the model data

app = Flask(__name__)

@app.route('/viewer')
def viewer():
    model = request.args.get('model')

    # Validate if the model exists
    if not model or model not in model_data:
        return "Error: No model specified or invalid model.", 400

    model_name = model_data[model]["name"]
    left_text = model_data[model]["left"]
    right_text = model_data[model]["right"]

    return render_template(
        'viewer.html', 
        model_path=f"/static/models/{model}", 
        model_name=model_name,
        left_text=left_text, 
        right_text=right_text
    )

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)
