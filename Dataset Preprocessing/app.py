from flask import Flask, request, jsonify
import pandas as pd
import numpy as np 

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Hello flask application"})


@app.route('/preprocess', methods=['POST'])
def preprocess_data():
    try:
        # Get JSON data from the request
        data = request.json
        if not data or 'dataframe' not in data:
            return jsonify({"error": "No dataframe found in the request"}), 400

        # Convert JSON dataframe to pandas DataFrame
        dataframe = pd.DataFrame(data['dataframe'])
        dataframe = dataframe.dropna()

        # Columns to validate and extract
        required_columns = [
            'ProductVisibility', 'ProductID', 'ProductType',
            'EstablishmentYear',
            'LocationType', 'OutletType', 'MRP','OutletSales'
        ]
        

        extracted_data = {}
        missing_columns = []

        # Validate and extract required columns
        for column in required_columns:
            if column in dataframe.columns:
                extracted_data[column] = dataframe[column].to_numpy().tolist()
            else:
                missing_columns.append(column)

        
        return jsonify({
            "message": "Dataset preprocessed successfully!",
            "data": extracted_data
        })
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
