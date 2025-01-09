from flask import Flask, request, jsonify
import pandas as pd
import numpy as np 
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


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
        print(dataframe)
        # dataframe = dataframe.dropna()

        # Columns to validate and extract
        required_columns = [
            'Item_Visibility', 'Item_Type','Item_MRP',
            'Outlet_Establishment_Year',
            'Outlet_Location_Type', 'Outlet_Type', 'Item_Outlet_Sales'
        ]
        

        extracted_data = {}
        missing_columns = []

        # print(extracted_data)
        
        # Validate and extract required columns
        for column in required_columns:
            if column in dataframe.columns:
                extracted_data[column] = dataframe[column].to_numpy().tolist()
            else:
                missing_columns.append(column)
        
        if 'Outlet_Establishment_Year' in dataframe.columns: 
            extracted_data['max_year'] = int(dataframe['Outlet_Establishment_Year'].max()) 
            extracted_data['min_year'] = int(dataframe['Outlet_Establishment_Year'].min() )
        
        if 'Item_Outlet_Sales' in dataframe.columns: 
            extracted_data['sum_sales'] = int(dataframe['Item_Outlet_Sales'].sum())
        
        if 'Item_MRP' in dataframe.columns: 
            extracted_data['sum_mrp'] = int(dataframe['Item_MRP'].sum())
        
        if 'Outlet_Type' in dataframe.columns: 
            extracted_data['Unique_Outlet_Type'] = dataframe['Outlet_Type'].unique().tolist() 
            print(dataframe['Outlet_Type'].unique()) 
        # print(extracted_data)
        

        
        return jsonify({
            "message": "Dataset preprocessed successfully!",
            "data": extracted_data
        })
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

@app.route('/specific_data',methods=['POST']) 
def specify_data(): 
    data = request.json 
    name_of_store = data.get('store_type') 
    dataframe = data.get('dataframe') 
    
    print(dataframe)
    
    if not data or 'dataframe' not in data or 'store_type' not in data:
        return jsonify({"error": "No dataframe found in the request"}), 400

    # Convert JSON dataframe to pandas DataFrame
    dataframe = pd.DataFrame(data['dataframe'])
    specified_dataframe = dataframe.loc[dataframe['Outlet_Type'] == name_of_store] 
    
    required_columns = [
            'Item_Visibility', 'Item_Type','Item_MRP',
            'Outlet_Establishment_Year',
            'Outlet_Location_Type', 'Outlet_Type', 'Item_Outlet_Sales'
        ]
        

    extracted_data = {}
    missing_columns = []

    # print(extracted_data)
        
    # Validate and extract required columns
    for column in required_columns:
        if column in specified_dataframe.columns:
            extracted_data[column] = specified_dataframe[column].to_numpy().tolist()
        else:
            missing_columns.append(column)
        
    if 'Outlet_Establishment_Year' in specified_dataframe.columns: 
        extracted_data['max_year'] = int(specified_dataframe['Outlet_Establishment_Year'].max()) 
        extracted_data['min_year'] = int(specified_dataframe['Outlet_Establishment_Year'].min() )
        
    if 'Item_Outlet_Sales' in specified_dataframe.columns: 
        extracted_data['sum_sales'] = int(specified_dataframe['Item_Outlet_Sales'].sum())
        
    if 'Item_MRP' in specified_dataframe.columns: 
        extracted_data['sum_mrp'] = int(specified_dataframe['Item_MRP'].sum())
        
    if 'Outlet_Type' in specified_dataframe.columns: 
        extracted_data['Unique_Outlet_Type'] = dataframe['Outlet_Type'].unique().tolist() 
        print(specified_dataframe['Outlet_Type'].unique()) 
    # print(extracted_data)
    
    return jsonify({
            "message": "Dataset preprocessed successfully!",
            "data": extracted_data
    })
        

    
    



if __name__ == '__main__':
    app.run(debug=True)
