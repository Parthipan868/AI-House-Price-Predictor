# 🏠 AI House Price Predictor

An AI-powered web application that predicts house prices using machine learning, featuring a stunning professional UI.

## 🚀 Features

- **Beautiful Modern UI** - Glassmorphism design with smooth animations
- **FastAPI Backend** - Fast and modern Python web framework
- **Machine Learning Model** - Trained on California Housing Dataset
- **RESTful API** - Easy-to-use prediction endpoint
- **Indian Rupees Support** - Prices displayed in INR (₹)
- **Cloud Deployment Ready** - Optimized for Render.com

## 📋 API Endpoints

### `GET /`
Returns API status and available endpoints.

### `POST /predict`
Predicts house price based on input features.

**Request Body:**
```json
{
  "data": [8.3252, 41.0, 6.98, 1.02, 322.0, 2.55, 37.88, -122.23]
}
```

**Response:**
```json
{
  "prediction": 452600.0
}
```

### `GET /docs`
Interactive API documentation (Swagger UI)

## 🛠️ Local Development

### Prerequisites
- Python 3.8+
- pip

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Parthipan868/AI-House-Price-Predictor.git
cd AI-House-Price-Predictor
```

2. Create virtual environment:
```bash
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Mac/Linux
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the application:
```bash
python main.py
```

The API will be available at `http://localhost:10000`

## 📊 Model Features

The model expects 8 features in this order:
1. MedInc - Median income in block group
2. HouseAge - Median house age in block group
3. AveRooms - Average number of rooms per household
4. AveBedrms - Average number of bedrooms per household
5. Population - Block group population
6. AveOccup - Average number of household members
7. Latitude - Block group latitude
8. Longitude - Block group longitude

## 🌐 Deployment

This app is deployed on [Render.com](https://render.com)

**Start Command:**
```bash
uvicorn main:app --host=0.0.0.0 --port=10000
```

## 📝 License

MIT License

## 👨‍💻 Author

Created as part of AI/ML deployment learning project.
