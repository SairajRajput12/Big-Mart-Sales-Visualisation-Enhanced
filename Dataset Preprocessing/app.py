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
        # print(dataframe)
        # dataframe = dataframe.dropna()
        print('hello')
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
            extracted_data['min_year'] = int(dataframe['Outlet_Establishment_Year'].min()) 
            extracted_data['years'] = dataframe['Outlet_Establishment_Year'].unique().tolist()
            
        
        print('year task completed')
        
        if 'Item_Outlet_Sales' in dataframe.columns: 
            extracted_data['sum_sales'] = int(dataframe['Item_Outlet_Sales'].sum())
        
        print('item sales task completed')
        if 'Item_MRP' in dataframe.columns: 
            extracted_data['sum_mrp'] = int(dataframe['Item_MRP'].sum())
        
        
        print('mrp task completed')
        if 'Outlet_Type' in dataframe.columns: 
            extracted_data['Unique_Outlet_Type'] = dataframe['Outlet_Type'].unique().tolist() 
            print(dataframe['Outlet_Type'].unique()) 
        # print(extracted_data)
        
        print('outlet type task completed')
        # way to find total sales per outlet type 
        outlet_sales_data = {}
        for outlet in extracted_data['Unique_Outlet_Type']:
            outlet_data = dataframe.loc[dataframe['Outlet_Type'] == outlet] 
            total_sales = int(outlet_data['Item_Outlet_Sales'].sum()) 
            outlet_sales_data[outlet] = total_sales
        
        extracted_data['outlet_type_per_sales'] = outlet_sales_data 
        
        print('outlet type per sales task completed')
        
        # item cost per item type
        if 'Item_Type' in dataframe.columns: 
            extracted_data['items'] = dataframe['Item_Type'].unique().tolist() 
        
        print('item type task completed')
        item_sales_data = []
        for item in extracted_data['items']: 
            item_data = dataframe.loc[dataframe['Item_Type'] == item] 
            total_cost = int(item_data['Item_MRP'].sum()) 
            temp_data = {}
            temp_data['name'] = item 
            temp_data['cost'] = total_cost
            item_sales_data.append(temp_data)
            
        print('item cost task completed')
         
        extracted_data['items_cost_per_item'] = item_sales_data 
        
        print('line 92 no error')
        # code to calculate the sum during each year 
        year_data = {}
        for year in extracted_data['years']: 
            year_record = dataframe.loc[dataframe['Outlet_Establishment_Year'] == year]
            sum_of_items = int(year_record['Item_Outlet_Sales'].sum()) 
            year_data[year] = sum_of_items
        
        extracted_data['year_total_sales'] = year_data
        
        print('error')

        
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
    
    outlet_sales_data = {}
    for outlet in extracted_data['Unique_Outlet_Type']:
        outlet_data = dataframe.loc[dataframe['Outlet_Type'] == outlet] 
        total_sales = int(outlet_data['Item_Outlet_Sales'].sum()) 
        outlet_sales_data[outlet] = total_sales
        
    extracted_data['outlet_type_per_sales'] = outlet_sales_data 
    
    item_sales_data = []
    for item in extracted_data['items']: 
        item_data = dataframe.loc[dataframe['Item_Type'] == item] 
        total_cost = int(item_data['Item_MRP'].sum()) 
        temp_data = {}
        temp_data['name'] = item 
        temp_data['cost'] = total_cost
        item_sales_data.append(temp_data)
             
         
    extracted_data['items_cost_per_item'] = item_sales_data 
        
    
    return jsonify({
            "message": "Dataset preprocessed successfully!",
            "data": extracted_data
    }),200
        

    
    



if __name__ == '__main__':
    app.run(debug=True)
