# Disease Prediction System 🏥

A machine learning-based web application that predicts diseases based on symptoms and provides personalized health recommendations.

## Features

- **Symptom Analysis**: Select multiple symptoms to get a potential diagnosis
- **Comprehensive Results**: Get detailed information about predicted conditions
- **Health Recommendations**: Receive personalized:
  - Precautions
  - Medications
  - Dietary advice
  - Exercise recommendations
- **User-Friendly Interface**: Clean, intuitive design with easy navigation
- **Responsive Design**: Works well on both desktop and mobile devices

## Tech Stack

- **Frontend**: Streamlit
- **Backend**: Python
- **Machine Learning**: Scikit-learn
- **Data Processing**: Pandas, NumPy
- **Data Storage**: CSV files

## Installation

1. Clone the repository:

```bash
git clone git@github.com:Tusharr06/Health_Predictive_System.git
cd Health_Predictive_System
```

2. Create a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

## Usage

1. Start the application:

```bash
streamlit run app.py
```

2. Open your web browser and navigate to:

```
http://localhost:8501
```

3. Use the application:
   - Select symptoms from the dropdown menu
   - Use the search box to find specific symptoms
   - Click "Predict Disease" to get results
   - View detailed recommendations in the tabs below

## Project Structure

```
Health_Predictive_System/
├── app.py                 # Main application file
├── model.pkl             # Trained machine learning model
├── requirements.txt      # Project dependencies
├── dataset/             # Data files
│   ├── description.csv
│   ├── precautions_df.csv
│   ├── medications.csv
│   ├── diets.csv
│   └── workout_df.csv
└── README.md            # Project documentation
```

## Data Sources

The application uses multiple datasets for:

- Disease descriptions
- Symptom-disease mappings
- Recommended precautions
- Medication information
- Dietary recommendations
- Exercise recommendations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

⚠️ **Medical Disclaimer**: This application is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
