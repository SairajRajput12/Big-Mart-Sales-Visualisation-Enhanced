
---

# **Data Visualization and Chatbot Application**

![Application Preview](https://th.bing.com/th/id/OIP.Xst4M9C5qxoqebUkNzFnXgHaEK?rs=1&pid=ImgDetMain)


## **Overview**
This application allows users to upload a dataset, visualize it through interactive graphs and charts (similar to Power BI dashboards), and interact with a chatbot service for advanced insights or assistance. The application is built using **Flask** for the backend and **React (Vite)** for the frontend, ensuring a seamless user experience. The entire project is deployed for easy accessibility.

**Live Demo**: [Data Visualization and Chatbot Application](https://sairajrajput12.github.io/BigMartSalesFrontend/)

---

## **Features**
1. **Dataset Upload and Visualization**:
   - Users can upload datasets in various formats (e.g., `.csv`).
   - Automatically generates dynamic visualizations such as bar charts, pie charts, line graphs, etc.
   - Provides insights into trends and patterns in the dataset.

2. **Chatbot Integration**:
   - A conversational chatbot service that can provide explanations, answer user queries, and assist in understanding the data.
   - The chatbot leverages AI to generate responses tailored to the uploaded dataset.

3. **Technology Stack**:
   - **Frontend**: React (Vite) for a responsive and interactive user interface.
   - **Backend**: Flask to handle API requests and chatbot interactions.
   - **Deployment**: Fully deployed to ensure accessibility from anywhere.

---

## **Getting Started**
### **Prerequisites**
- **Node.js** (v14 or later)
- **Python** (v3.8 or later)
- **Pip** (Python package manager)

### **Installation**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/data-visualization-chatbot.git
   cd data-visualization-chatbot
   ```

2. **Backend Setup**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Create a virtual environment and activate it:
     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows: venv\Scripts\activate
     ```
   - Install the dependencies:
     ```bash
     pip install -r requirements.txt
     ```

3. **Frontend Setup**:
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

---

### **Running the Application**
1. **Start the Backend**:
   ```bash
   flask run
   ```

2. **Start the Frontend**:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## **Project Structure**
```
data-visualization-chatbot/
├── backend/
│   ├── app.py             # Flask application
│   ├── templates/         # HTML templates (if any)
│   ├── static/            # Static files (CSS, JS)
│   ├── requirements.txt   # Backend dependencies
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main React component
│   │   └── ...
│   ├── public/            # Public assets
│   ├── vite.config.js     # Vite configuration
│   ├── package.json       # Frontend dependencies
│   └── ...
└── README.md
```

---

## **Deployment**
### **Frontend**:
1. Build the React application:
   ```bash
   npm run build
   ```
2. Deploy the built files using GitHub Pages or a hosting service.
   - **Live Demo**: [Data Visualization and Chatbot Application](https://sairajrajput12.github.io/BigMartSalesFrontend/)

### **Backend**:
1. Deploy the Flask application using a hosting service like **Heroku**, **AWS**, or **Render**.

---

## **Usage**
1. **Upload Dataset**:
   - Navigate to the dashboard.
   - Upload your dataset (supported formats: `.csv`, `.xlsx`).
   - Visualizations are generated automatically.

2. **Chatbot Interaction**:
   - Use the chatbot to query insights or request additional explanations about the data.

---

## **Contact**
- **Developer**: [Your Name]
- **Email**: [sairajrajput6@example.com](mailto:sairajrajput6@example.com)
- **GitHub**: [https://github.com/your-username](https://github.com/sairajrajput12)

---

