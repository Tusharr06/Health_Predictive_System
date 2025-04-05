import streamlit as st
import pandas as pd
import numpy as np
import pickle
import os
from PIL import Image

st.set_page_config(
    page_title="Disease Predictor",
    page_icon="🏥",
    layout="wide",
    initial_sidebar_state="expanded"
)

@st.cache_resource
def load_model():
    try:
        with open('model.pkl', 'rb') as file:
            loaded_model = pickle.load(file)
        return loaded_model
    except FileNotFoundError:
        st.error("Model file not found. Please make sure 'model.pkl' exists in the app directory.")
        return None

@st.cache_data
def load_data():
    try:
        description = pd.read_csv('./dataset/description.csv')
        precautions = pd.read_csv('./dataset/precautions_df.csv')
        medications = pd.read_csv('./dataset/medications.csv')
        diets = pd.read_csv('./dataset/diets.csv')
        recommendations = pd.read_csv('./dataset/workout_df.csv')
        return description, precautions, medications, diets, recommendations
    except FileNotFoundError as e:
        st.error(f"Data file not found: {e}")
        return None, None, None, None, None

symptoms_dict = {'itching': 0, 'skin_rash': 1, 'nodal_skin_eruptions': 2, 'continuous_sneezing': 3, 'shivering': 4, 'chills': 5, 'joint_pain': 6, 'stomach_pain': 7, 'acidity': 8, 'ulcers_on_tongue': 9, 'muscle_wasting': 10, 'vomiting': 11, 'burning_micturition': 12, 'spotting_ urination': 13, 'fatigue': 14, 'weight_gain': 15, 'anxiety': 16, 'cold_hands_and_feets': 17, 'mood_swings': 18, 'weight_loss': 19, 'restlessness': 20, 'lethargy': 21, 'patches_in_throat': 22, 'irregular_sugar_level': 23, 'cough': 24, 'high_fever': 25, 'sunken_eyes': 26, 'breathlessness': 27, 'sweating': 28, 'dehydration': 29, 'indigestion': 30, 'headache': 31, 'yellowish_skin': 32, 'dark_urine': 33, 'nausea': 34, 'loss_of_appetite': 35, 'pain_behind_the_eyes': 36, 'back_pain': 37, 'constipation': 38, 'abdominal_pain': 39, 'diarrhoea': 40, 'mild_fever': 41, 'yellow_urine': 42, 'yellowing_of_eyes': 43, 'acute_liver_failure': 44, 'fluid_overload': 45, 'swelling_of_stomach': 46, 'swelled_lymph_nodes': 47, 'malaise': 48, 'blurred_and_distorted_vision': 49, 'phlegm': 50, 'throat_irritation': 51, 'redness_of_eyes': 52, 'sinus_pressure': 53, 'runny_nose': 54, 'congestion': 55, 'chest_pain': 56, 'weakness_in_limbs': 57, 'fast_heart_rate': 58, 'pain_during_bowel_movements': 59, 'pain_in_anal_region': 60, 'bloody_stool': 61, 'irritation_in_anus': 62, 'neck_pain': 63, 'dizziness': 64, 'cramps': 65, 'bruising': 66, 'obesity': 67, 'swollen_legs': 68, 'swollen_blood_vessels': 69, 'puffy_face_and_eyes': 70, 'enlarged_thyroid': 71, 'brittle_nails': 72, 'swollen_extremeties': 73, 'excessive_hunger': 74, 'extra_marital_contacts': 75, 'drying_and_tingling_lips': 76, 'slurred_speech': 77, 'knee_pain': 78, 'hip_joint_pain': 79, 'muscle_weakness': 80, 'stiff_neck': 81, 'swelling_joints': 82, 'movement_stiffness': 83, 'spinning_movements': 84, 'loss_of_balance': 85, 'unsteadiness': 86, 'weakness_of_one_body_side': 87, 'loss_of_smell': 88, 'bladder_discomfort': 89, 'foul_smell_of urine': 90, 'continuous_feel_of_urine': 91, 'passage_of_gases': 92, 'internal_itching': 93, 'toxic_look_(typhos)': 94, 'depression': 95, 'irritability': 96, 'muscle_pain': 97, 'altered_sensorium': 98, 'red_spots_over_body': 99, 'belly_pain': 100, 'abnormal_menstruation': 101, 'dischromic _patches': 102, 'watering_from_eyes': 103, 'increased_appetite': 104, 'polyuria': 105, 'family_history': 106, 'mucoid_sputum': 107, 'rusty_sputum': 108, 'lack_of_concentration': 109, 'visual_disturbances': 110, 'receiving_blood_transfusion': 111, 'receiving_unsterile_injections': 112, 'coma': 113, 'stomach_bleeding': 114, 'distention_of_abdomen': 115, 'history_of_alcohol_consumption': 116, 'fluid_overload.1': 117, 'blood_in_sputum': 118, 'prominent_veins_on_calf': 119, 'palpitations': 120, 'painful_walking': 121, 'pus_filled_pimples': 122, 'blackheads': 123, 'scurring': 124, 'skin_peeling': 125, 'silver_like_dusting': 126, 'small_dents_in_nails': 127, 'inflammatory_nails': 128, 'blister': 129, 'red_sore_around_nose': 130, 'yellow_crust_ooze': 131}

diseases_list = {15: 'Fungal infection', 4: 'Allergy', 16: 'GERD', 9: 'Chronic cholestasis', 14: 'Drug Reaction', 33: 'Peptic ulcer diseae', 1: 'AIDS', 12: 'Diabetes ', 17: 'Gastroenteritis', 6: 'Bronchial Asthma', 23: 'Hypertension ', 30: 'Migraine', 7: 'Cervical spondylosis', 32: 'Paralysis (brain hemorrhage)', 28: 'Jaundice', 29: 'Malaria', 8: 'Chicken pox', 11: 'Dengue', 37: 'Typhoid', 40: 'hepatitis A', 19: 'Hepatitis B', 20: 'Hepatitis C', 21: 'Hepatitis D', 22: 'Hepatitis E', 3: 'Alcoholic hepatitis', 36: 'Tuberculosis', 10: 'Common Cold', 34: 'Pneumonia', 13: 'Dimorphic hemmorhoids(piles)', 18: 'Heart attack', 39: 'Varicose veins', 26: 'Hypothyroidism', 24: 'Hyperthyroidism', 25: 'Hypoglycemia', 31: 'Osteoarthristis', 5: 'Arthritis', 0: '(vertigo) Paroymsal  Positional Vertigo', 2: 'Acne', 38: 'Urinary tract infection', 35: 'Psoriasis', 27: 'Impetigo'}

def get_predicted_value(patient_symptoms, loaded_model):
    if loaded_model is None:
        return None
    
    input_vector = np.zeros(len(symptoms_dict))
    for item in patient_symptoms:
        input_vector[symptoms_dict[item]] = 1
    
    try:
        prediction = loaded_model.predict([input_vector])[0]
        return diseases_list[prediction]
    except Exception as e:
        st.error(f"Prediction error: {e}")
        return None

def helper(dis, description, precautions, medications, diets, recommendations):
    try:
        desc = description[description['Disease'] == dis]['Description']
        desc = " ".join([str(w) for w in desc]) if not desc.empty else "No description available"
        
        pre = precautions[precautions['Disease'] == dis][['Precaution_1', 'Precaution_2', 'Precaution_3', 'Precaution_4']]
        pre = pre.values.tolist() if not pre.empty else [["No precautions available"]]
        
        med = medications[medications['Disease'] == dis]['Medication']
        med = [str(m) for m in med.values] if not med.empty else ["No medication information available"]
        
        die = diets[diets['Disease'] == dis]['Diet']
        die = [str(d) for d in die.values] if not die.empty else ["No diet recommendations available"]
        
        rec = recommendations[recommendations['disease'] == dis]['workout']
        rec = [str(r) for r in rec.values] if not rec.empty else ["No recommendations available"]
        
        return desc, pre, med, die, rec
    except Exception as e:
        st.error(f"Error retrieving information: {e}")
        return ("No description available", [["No precautions available"]], ["No medications available"], 
                ["No diet recommendations available"], ["No recommendations available"])

st.markdown("""
<style>
/* General App Styling */
body {
    font-family: 'Arial', sans-serif;
    background-color: #000000;
    color: #ffffff;
}
.stApp {
    background-color: #000000;
}
h1, h2, h3, h4, h5, h6 {
    color: #ffffff;
}
.stMarkdown, .stText, p {
    color: #ffffff;
}

/* Header Styling */
.main-header {
    font-size: 2.5rem !important;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    margin-bottom: 1.5rem;
}
.sub-header {
    font-size: 1.2rem;
    color: #cccccc;
    text-align: center;
    margin-bottom: 2rem;
}

/* Sidebar Styling */
.stSidebar {
    background-color: #1a1a1a;
    border-right: 1px solid #333333;
    padding: 20px;
}
.stSidebar h1, .stSidebar h2, .stSidebar h3 {
    color: #ffffff;
}
.stSidebar .stRadio label {
    font-size: 1rem;
    color: #ffffff;
}

/* Button Styling */
.stButton button {
    background-color: #333333;
    color: #ffffff;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    transition: background-color 0.3s ease;
    margin-top: 10px;
}
.stButton button:hover {
    background-color: #555555;
}

/* Tabs Styling */
.stTabs [data-baseweb="tab"] {
    background-color: #1a1a1a;
    color: #ffffff;
    font-weight: bold;
    border-radius: 5px 5px 0 0;
    padding: 10px;
    margin-right: 5px;
}
.stTabs [aria-selected="true"] {
    background-color: #333333 !important;
    color: #ffffff !important;
}

/* Card Styling */
.card {
    background-color: #1a1a1a;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
    margin-bottom: 20px;
}
.card h2 {
    color: #ffffff;
}

/* Result Box Styling */
.result-box {
    background-color: #1a1a1a;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
    margin-top: 20px;
    color: #ffffff;
}
.prediction-result {
    font-size: 1.5rem;
    font-weight: bold;
    color: #4caf50;
    text-align: center;
    margin: 20px 0;
}

/* Disclaimer Styling */
.disclaimer {
    background-color: #330000;
    border-left: 5px solid #ff4444;
    padding: 15px;
    margin-top: 20px;
    border-radius: 5px;
    color: #ffffff;
}

/* Symptom Search Styling */
.symptom-search {
    background-color: #1a1a1a;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
}

/* Item Point Styling */
.item-point {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 5px;
    background-color: #333333;
    color: #ffffff;
    font-size: 1rem;
}

/* Column Layout Fix */
.stColumns {
    gap: 20px;
}
</style>
""", unsafe_allow_html=True)

def main():
    loaded_model = load_model()
    description, precautions, medications, diets, recommendations = load_data()
    
    st.markdown('<h1 class="main-header">🏥 Disease Prediction System</h1>', unsafe_allow_html=True)
    st.markdown('<p class="sub-header">Predict diseases based on your symptoms and get personalized health recommendations</p>', unsafe_allow_html=True)
    
    with st.sidebar:
        st.image("https://img.icons8.com/color/96/000000/caduceus.png", width=80)
        st.title("Navigation")
        page = st.radio("", ["Disease Predictor", "About", "Help"], index=0)
        
        st.markdown("---")
        st.markdown("### How it works")
        st.markdown("1. Select your symptoms")
        st.markdown("2. Click 'Predict Disease'")
        st.markdown("3. Get your diagnosis and recommendations")
        
        st.markdown("---")
        st.caption("© 2025 Disease Predictor")
    
    if page == "Disease Predictor":
        with st.container():
            st.markdown('<div class="card">', unsafe_allow_html=True)
            st.subheader("📋 Select Your Symptoms")
            
            # Display all available symptoms
            symptom_options = list(symptoms_dict.keys())
            clean_symptoms = [s.replace('_', ' ').title() for s in symptom_options]
            symptoms_display = dict(zip(clean_symptoms, symptom_options))
            
            # Multi-select for symptoms
            selected_clean_symptoms = st.multiselect(
                "Select all applicable symptoms:",
                options=clean_symptoms,
                default=None
            )
            
            # Convert selected symptoms back to original keys
            selected_symptoms = [symptoms_display[clean] for clean in selected_clean_symptoms]
            
            col1, col2 = st.columns([1, 1])
            with col1:
                predict_button = st.button("🔍 Predict Disease", type="primary", use_container_width=True)
            with col2:
                reset_button = st.button("🔄 Reset", use_container_width=True)
            st.markdown('</div>', unsafe_allow_html=True)
            
            if 'prediction_made' not in st.session_state:
                st.session_state.prediction_made = False
            
            if reset_button:
                st.session_state.prediction_made = False
                st.experimental_rerun()
            
            if predict_button or st.session_state.prediction_made:
                if not selected_symptoms:
                    st.warning("⚠️ Please select at least one symptom to get a prediction.")
                else:
                    st.session_state.prediction_made = True
                    
                    with st.spinner("Analyzing your symptoms..."):
                        predicted_disease = get_predicted_value(selected_symptoms, loaded_model)
                        
                        if predicted_disease:
                            st.markdown(f'<div class="prediction-result">Predicted Condition: {predicted_disease}</div>', unsafe_allow_html=True)
                            
                            desc, pre, med, die, rec = helper(
                                predicted_disease, description, precautions, medications, diets, recommendations
                            )
                            
                            st.markdown('<div class="result-box">', unsafe_allow_html=True)
                            tabs = st.tabs([
                                "📝 Description", "🛡️ Precautions", "💊 Medications", "🍎 Diet", "🏋️ Recommendations"
                            ])
                            
                            with tabs[0]:
                                st.markdown(f"### About {predicted_disease}")
                                st.write(desc)
                            
                            with tabs[1]:
                                st.markdown("### Recommended Precautions")
                                if pre and len(pre) > 0:
                                    for precaution_set in pre:
                                        for p in precaution_set:
                                            if p and str(p).lower() != "nan":
                                                st.markdown(f'<div class="item-point">✅ {p}</div>', unsafe_allow_html=True)
                                else:
                                    st.info("No specific precautions available for this condition.")
                            
                            with tabs[2]:
                                st.markdown("### Recommended Medications")
                                if med and len(med) > 0:
                                    for m in med:
                                        if str(m).lower() != "nan":
                                            st.markdown(f'<div class="item-point">💊 {m}</div>', unsafe_allow_html=True)
                                else:
                                    st.info("No specific medications listed. Please consult a healthcare professional.")
                                    
                            with tabs[3]:
                                st.markdown("### Dietary Recommendations")
                                if die and len(die) > 0:
                                    for d in die:
                                        if str(d).lower() != "nan":
                                            st.markdown(f'<div class="item-point">🍎 {d}</div>', unsafe_allow_html=True)
                                else:
                                    st.info("No specific dietary recommendations available.")
                                    
                            with tabs[4]:
                                st.markdown("### Recommendations")
                                if rec and len(rec) > 0:
                                    for r in rec:
                                        if str(r).lower() != "nan":
                                            st.markdown(f'<div class="item-point">🏋️ {r}</div>', unsafe_allow_html=True)
                                else:
                                    st.info("No specific recommendations available.")
                            
                            st.markdown('</div>', unsafe_allow_html=True)
                            st.markdown('<div class="disclaimer">⚠️ <b>Medical Disclaimer:</b> This prediction is based on machine learning and should not replace professional medical advice. Always consult with a healthcare provider for proper diagnosis and treatment.</div>', unsafe_allow_html=True)
    
    elif page == "About":
        st.header("About This System")
        
        with st.container():
            st.markdown('<div class="card">', unsafe_allow_html=True)
            st.subheader("How It Works")
            st.write("""
            This Disease Prediction System uses machine learning to analyze symptoms and predict possible diseases. 
            The system is trained on a dataset of disease symptoms and their corresponding diagnoses.
            """)
            
            col1, col2, col3 = st.columns(3)
            with col1:
                st.markdown("#### Step 1")
                st.markdown("🔍 Select your symptoms from the provided list")
            with col2:
                st.markdown("#### Step 2")
                st.markdown("🧠 The AI analyzes symptom patterns")
            with col3:
                st.markdown("#### Step 3")
                st.markdown("📊 View detailed health recommendations")
            st.markdown('</div>', unsafe_allow_html=True)
        
        with st.container():
            st.markdown('<div class="card">', unsafe_allow_html=True)
            st.subheader("Dataset Information")
            st.write("The system uses multiple datasets:")
            col1, col2 = st.columns(2)
            with col1:
                st.markdown("- Symptom-disease mappings")
                st.markdown("- Disease descriptions")
                st.markdown("- Recommended precautions")
            with col2:
                st.markdown("- Medication information")
                st.markdown("- Dietary recommendations")
                st.markdown("- Exercise recommendations")
            st.markdown('</div>', unsafe_allow_html=True)
            
        with st.container():
            st.markdown('<div class="card">', unsafe_allow_html=True)
            st.subheader("Technology Used")
            tech_col1, tech_col2, tech_col3, tech_col4 = st.columns(4)
            with tech_col1:
                st.markdown("#### Python")
                st.image("https://img.icons8.com/color/96/000000/python.png", width=50)
            with tech_col2:
                st.markdown("#### Streamlit")
                st.image("https://streamlit.io/images/brand/streamlit-mark-color.svg", width=50)
            with tech_col3:
                st.markdown("#### Machine Learning")
                st.image("https://img.icons8.com/color/96/000000/artificial-intelligence.png", width=50)
            with tech_col4:
                st.markdown("#### Data Processing")
                st.image("https://img.icons8.com/color/96/000000/data-configuration.png", width=50)
            st.markdown('</div>', unsafe_allow_html=True)
        
    elif page == "Help":
        st.header("Help & Frequently Asked Questions")
        
        with st.container():
            st.markdown('<div class="card">', unsafe_allow_html=True)
            st.subheader("How to Use This Application")
            st.write("""
            1. Select your symptoms from the dropdown list on the Disease Predictor page
            2. You can search for specific symptoms using the search box
            3. Click 'Predict Disease' to get your diagnosis
            4. Review the information provided in the tabs below the prediction
            """)
            st.markdown('</div>', unsafe_allow_html=True)
        
        with st.container():
            st.markdown('<div class="card">', unsafe_allow_html=True)
            st.subheader("Frequently Asked Questions")
            
            faq1 = st.expander("Is this a substitute for medical advice?")
            with faq1:
                st.write("""
                No. This application is for informational purposes only and is not a substitute for professional medical advice, 
                diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any 
                questions you may have regarding a medical condition.
                """)
                
            faq2 = st.expander("How accurate is the prediction?")
            with faq2:
                st.write("""
                The system uses machine learning algorithms trained on symptom-disease relationships. While it can provide 
                useful insights, no prediction system is 100% accurate. The accuracy depends on the quality and completeness 
                of the symptoms provided.
                """)
                
            faq3 = st.expander("What should I do after getting a prediction?")
            with faq3:
                st.write("""
                If you have health concerns, you should consult with a healthcare professional. The prediction and information 
                provided can be a starting point for discussion with your doctor.
                """)
                
            faq4 = st.expander("Can I use this for emergency medical situations?")
            with faq4:
                st.write("""
                No. In case of a medical emergency, call your local emergency services immediately or go to the nearest 
                emergency room.
                """)
            st.markdown('</div>', unsafe_allow_html=True)

if __name__ == '__main__':
    main()