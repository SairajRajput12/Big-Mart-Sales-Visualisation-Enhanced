from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Hello flask application"})

@app.route('/preprocess', methods=['POST'])
def preprocess_data():
    try:
        # Get JSON data from the request
        data = request.json
        print(request)
        if not data or 'dataframe' not in data:
            return jsonify({"error": "No dataframe found in the request"}), 400

        # Convert JSON dataframe to pandas DataFrame
        dataframe = pd.DataFrame(data['dataframe'])

        print(dataframe)
        # Dropping null values
        if dataframe.isnull().any().any():
            dataframe = dataframe.dropna()

        # Setting the data type for columns
        # try:
        #     dataframe['ProductVisibility'] = dataframe['ProductVisibility'].astype(float)
        #     dataframe['MRP'] = dataframe['MRP'].astype(int)
        #     dataframe['Outlet_Establishment_Year'] = dataframe['Outlet_Establishment_Year'].astype(int)
        #     dataframe['Item_Outlet_Sales'] = dataframe['Item_Outlet_Sales'].astype(int)
        #     dataframe['Item_Visibility_Percentage'] = dataframe['Item_Visibility_Percentage'].astype(int)
        # except KeyError as e:
        #     return jsonify({"error": f"Column {str(e)} not found in the dataframe"}), 400
        # except ValueError as e:
        #     return jsonify({"error": f"Error in data type conversion: {str(e)}"}), 400

        result = dataframe.to_dict(orient='records')

        return jsonify({'message': 'Dataset preprocessed successfully!', 'data': result})
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
