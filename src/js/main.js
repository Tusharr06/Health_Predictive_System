// Symptoms data - matches the Python dictionary
const symptomsDict = {
    'itching': 0, 'skin_rash': 1, 'nodal_skin_eruptions': 2, 'continuous_sneezing': 3, 'shivering': 4, 'chills': 5, 'joint_pain': 6, 'stomach_pain': 7, 'acidity': 8, 'ulcers_on_tongue': 9, 'muscle_wasting': 10, 'vomiting': 11, 'burning_micturition': 12, 'spotting_ urination': 13, 'fatigue': 14, 'weight_gain': 15, 'anxiety': 16, 'cold_hands_and_feets': 17, 'mood_swings': 18, 'weight_loss': 19, 'restlessness': 20, 'lethargy': 21, 'patches_in_throat': 22, 'irregular_sugar_level': 23, 'cough': 24, 'high_fever': 25, 'sunken_eyes': 26, 'breathlessness': 27, 'sweating': 28, 'dehydration': 29, 'indigestion': 30, 'headache': 31, 'yellowish_skin': 32, 'dark_urine': 33, 'nausea': 34, 'loss_of_appetite': 35, 'pain_behind_the_eyes': 36, 'back_pain': 37, 'constipation': 38, 'abdominal_pain': 39, 'diarrhoea': 40, 'mild_fever': 41, 'yellow_urine': 42, 'yellowing_of_eyes': 43, 'acute_liver_failure': 44, 'fluid_overload': 45, 'swelling_of_stomach': 46, 'swelled_lymph_nodes': 47, 'malaise': 48, 'blurred_and_distorted_vision': 49, 'phlegm': 50, 'throat_irritation': 51, 'redness_of_eyes': 52, 'sinus_pressure': 53, 'runny_nose': 54, 'congestion': 55, 'chest_pain': 56, 'weakness_in_limbs': 57, 'fast_heart_rate': 58, 'pain_during_bowel_movements': 59, 'pain_in_anal_region': 60, 'bloody_stool': 61, 'irritation_in_anus': 62, 'neck_pain': 63, 'dizziness': 64, 'cramps': 65, 'bruising': 66, 'obesity': 67, 'swollen_legs': 68, 'swollen_blood_vessels': 69, 'puffy_face_and_eyes': 70, 'enlarged_thyroid': 71, 'brittle_nails': 72, 'swollen_extremeties': 73, 'excessive_hunger': 74, 'extra_marital_contacts': 75, 'drying_and_tingling_lips': 76, 'slurred_speech': 77, 'knee_pain': 78, 'hip_joint_pain': 79, 'muscle_weakness': 80, 'stiff_neck': 81, 'swelling_joints': 82, 'movement_stiffness': 83, 'spinning_movements': 84, 'loss_of_balance': 85, 'unsteadiness': 86, 'weakness_of_one_body_side': 87, 'loss_of_smell': 88, 'bladder_discomfort': 89, 'foul_smell_of urine': 90, 'continuous_feel_of_urine': 91, 'passage_of_gases': 92, 'internal_itching': 93, 'toxic_look_(typhos)': 94, 'depression': 95, 'irritability': 96, 'muscle_pain': 97, 'altered_sensorium': 98, 'red_spots_over_body': 99, 'belly_pain': 100, 'abnormal_menstruation': 101, 'dischromic _patches': 102, 'watering_from_eyes': 103, 'increased_appetite': 104, 'polyuria': 105, 'family_history': 106, 'mucoid_sputum': 107, 'rusty_sputum': 108, 'lack_of_concentration': 109, 'visual_disturbances': 110, 'receiving_blood_transfusion': 111, 'receiving_unsterile_injections': 112, 'coma': 113, 'stomach_bleeding': 114, 'distention_of_abdomen': 115, 'history_of_alcohol_consumption': 116, 'fluid_overload.1': 117, 'blood_in_sputum': 118, 'prominent_veins_on_calf': 119, 'palpitations': 120, 'painful_walking': 121, 'pus_filled_pimples': 122, 'blackheads': 123, 'scurring': 124, 'skin_peeling': 125, 'silver_like_dusting': 126, 'small_dents_in_nails': 127, 'inflammatory_nails': 128, 'blister': 129, 'red_sore_around_nose': 130, 'yellow_crust_ooze': 131
};

// Disease data
const diseaseData = {
    descriptions: {
        'Fungal infection': 'Fungal infection is a common skin condition caused by fungi.',
        'Allergy': 'Allergy is an immune system reaction to a substance in the environment.',
        'GERD': 'GERD (Gastroesophageal Reflux Disease) is a digestive disorder that affects the lower esophageal sphincter.',
        'Chronic cholestasis': 'Chronic cholestasis is a condition where bile flow from the liver is reduced for a prolonged period.',
        'Drug Reaction': 'Drug Reaction occurs when the body reacts adversely to a medication.',
        'Peptic ulcer disease': 'Peptic ulcer disease involves sores that develop on the inner lining of the stomach and small intestine.',
        'AIDS': 'AIDS (Acquired Immunodeficiency Syndrome) is a disease caused by HIV that weakens the immune system.',
        'Diabetes': 'Diabetes is a chronic condition that affects how the body processes blood sugar.',
        'Gastroenteritis': 'Gastroenteritis is an inflammation of the stomach and intestines, typically caused by a virus or bacteria.',
        'Bronchial Asthma': 'Bronchial Asthma is a respiratory condition characterized by inflammation of the airways.',
        'Hypertension': 'Hypertension, or high blood pressure, is a common cardiovascular condition.',
        'Migraine': 'Migraine is a type of headache that often involves severe pain and sensitivity to light and sound.',
        'Cervical spondylosis': 'Cervical spondylosis is a degenerative condition of the cervical spine.',
        'Paralysis (brain hemorrhage)': 'Paralysis (brain hemorrhage) refers to the loss of muscle function due to bleeding in the brain.',
        'Jaundice': 'Jaundice is a yellow discoloration of the skin and eyes, often indicating liver problems.',
        'Malaria': 'Malaria is a mosquito-borne infectious disease affecting humans and other animals.',
        'Chicken pox': 'Chicken pox is a highly contagious viral infection causing an itchy rash.',
        'Dengue': 'Dengue is a mosquito-borne viral infection causing flu-like symptoms.',
        'Typhoid': 'Typhoid is a bacterial infection that can lead to a high fever and gastrointestinal symptoms.',
        'hepatitis A': 'hepatitis A is a viral liver disease.',
        'Hepatitis B': 'Hepatitis B is a viral infection that attacks the liver.',
        'Hepatitis C': 'Hepatitis C is a viral infection that causes liver inflammation.',
        'Hepatitis D': 'Hepatitis D is a serious liver disease caused by the hepatitis D virus.',
        'Hepatitis E': 'Hepatitis E is a viral infection that causes liver inflammation.',
        'Alcoholic hepatitis': 'Alcoholic hepatitis is inflammation of the liver due to alcohol consumption.',
        'Tuberculosis': 'Tuberculosis is a bacterial infection that primarily affects the lungs.',
        'Common Cold': 'Common Cold is a viral infection of the upper respiratory tract.',
        'Pneumonia': 'Pneumonia is an inflammatory condition affecting the air sacs in the lungs.',
        'Dimorphic hemmorhoids(piles)': 'Dimorphic hemmorhoids(piles) is a condition characterized by swollen blood vessels in the rectum.',
        'Heart attack': 'Heart attack is a sudden and severe reduction in blood flow to the heart muscle.',
        'Varicose veins': 'Varicose veins are enlarged, twisted veins that usually appear on the legs.',
        'Hypothyroidism': 'Hypothyroidism is a condition where the thyroid gland doesn\'t produce enough thyroid hormone.',
        'Hyperthyroidism': 'Hyperthyroidism is a condition where the thyroid gland produces too much thyroid hormone.',
        'Hypoglycemia': 'Hypoglycemia is a condition characterized by abnormally low blood sugar levels.',
        'Osteoarthristis': 'Osteoarthristis is a degenerative joint disease that affects the cartilage in joints.',
        'Arthritis': 'Arthritis is inflammation of one or more joints, causing pain and stiffness.',
        '(vertigo) Paroymsal Positional Vertigo': '(Vertigo) Paroxysmal Positional Vertigo is a type of dizziness caused by specific head movements.',
        'Acne': 'Acne is a skin condition that occurs when hair follicles become clogged with oil and dead skin cells.',
        'Urinary tract infection': 'Urinary tract infection is an infection in any part of the urinary system.',
        'Psoriasis': 'Psoriasis is a chronic skin condition characterized by red, itchy, and scaly patches.',
        'Impetigo': 'Impetigo is a highly contagious skin infection causing red sores that can break open.'
    },
    precautions: {
        'Drug Reaction': ['stop irritation', 'consult nearest hospital', 'stop taking drug', 'follow up'],
        'Malaria': ['Consult nearest hospital', 'avoid oily food', 'avoid non veg food', 'keep mosquitos out'],
        'Allergy': ['apply calamine', 'cover area with bandage', '', 'use ice to compress itching'],
        'Hypothyroidism': ['reduce stress', 'exercise', 'eat healthy', 'get proper sleep'],
        'Psoriasis': ['wash hands with warm soapy water', 'stop bleeding using pressure', 'consult doctor', 'salt baths'],
        'GERD': ['avoid fatty spicy food', 'avoid lying down after eating', 'maintain healthy weight', 'exercise'],
        'Chronic cholestasis': ['cold baths', 'anti itch medicine', 'consult doctor', 'eat healthy'],
        'hepatitis A': ['Consult nearest hospital', 'wash hands through', 'avoid fatty spicy food', 'medication'],
        'Osteoarthristis': ['acetaminophen', 'consult nearest hospital', 'follow up', 'salt baths'],
        '(vertigo) Paroymsal Positional Vertigo': ['lie down', 'avoid sudden change in body', 'avoid abrupt head movment', 'relax'],
        'Hypoglycemia': ['lie down on side', 'check in pulse', 'drink sugary drinks', 'consult doctor'],
        'Acne': ['bath twice', 'avoid fatty spicy food', 'drink plenty of water', 'avoid too many products'],
        'Diabetes': ['have balanced diet', 'exercise', 'consult doctor', 'follow up'],
        'Impetigo': ['soak affected area in warm water', 'use antibiotics', 'remove scabs with wet compressed cloth', 'consult doctor'],
        'Hypertension': ['meditation', 'salt baths', 'reduce stress', 'get proper sleep'],
        'Peptic ulcer disease': ['avoid fatty spicy food', 'consume probiotic food', 'eliminate milk', 'limit alcohol'],
        'Dimorphic hemmorhoids(piles)': ['avoid fatty spicy food', 'consume witch hazel', 'warm bath with epsom salt', 'consume alovera juice'],
        'Common Cold': ['drink vitamin c rich drinks', 'take vapour', 'avoid cold food', 'keep fever in check'],
        'Chicken pox': ['use neem in bathing', 'consume neem leaves', 'take vaccine', 'avoid public places'],
        'Cervical spondylosis': ['use heating pad or cold pack', 'exercise', 'take otc pain reliver', 'consult doctor'],
        'Hyperthyroidism': ['eat healthy', 'massage', 'use lemon balm', 'take radioactive iodine treatment'],
        'Urinary tract infection': ['drink plenty of water', 'increase vitamin c intake', 'drink cranberry juice', 'take probiotics'],
        'Varicose veins': ['lie down flat and raise the leg high', 'use oinments', 'use vein compression', 'dont stand still for long'],
        'AIDS': ['avoid open cuts', 'wear ppe if possible', 'consult doctor', 'follow up'],
        'Paralysis (brain hemorrhage)': ['massage', 'eat healthy', 'exercise', 'consult doctor'],
        'Typhoid': ['eat high calorie vegitables', 'antiboitic therapy', 'consult doctor', 'medication'],
        'Hepatitis B': ['consult nearest hospital', 'vaccination', 'eat healthy', 'medication'],
        'Fungal infection': ['bath twice', 'use detol or neem in bathing water', 'keep infected area dry', 'use clean cloths'],
        'Hepatitis C': ['Consult nearest hospital', 'vaccination', 'eat healthy', 'medication'],
        'Migraine': ['meditation', 'reduce stress', 'use poloroid glasses in sun', 'consult doctor'],
        'Bronchial Asthma': ['switch to loose cloothing', 'take deep breaths', 'get away from trigger', 'seek help'],
        'Alcoholic hepatitis': ['stop alcohol consumption', 'consult doctor', 'medication', 'follow up'],
        'Jaundice': ['drink plenty of water', 'consume milk thistle', 'eat fruits and high fiberous food', 'medication'],
        'Hepatitis E': ['stop alcohol consumption', 'rest', 'consult doctor', 'medication'],
        'Dengue': ['drink papaya leaf juice', 'avoid fatty spicy food', 'keep mosquitos away', 'keep hydrated'],
        'Hepatitis D': ['consult doctor', 'medication', 'eat healthy', 'follow up'],
        'Heart attack': ['call ambulance', 'chew or swallow asprin', 'keep calm', ''],
        'Pneumonia': ['consult doctor', 'medication', 'rest', 'follow up'],
        'Arthritis': ['exercise', 'use hot and cold therapy', 'try acupuncture', 'massage'],
        'Gastroenteritis': ['stop eating solid food for while', 'try taking small sips of water', 'rest', 'ease back into eating'],
        'Tuberculosis': ['cover mouth', 'consult doctor', 'medication', 'rest']
    }
};

// Global state
let selectedSymptoms = new Set();
let allSymptoms = [];
let filteredSymptoms = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupSymptoms();
    setupEventListeners();
    showSection('home');
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            showSection(section);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            navMenu.classList.remove('active');
        });
    });

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

function setupSymptoms() {
    // Convert symptoms dictionary to array and clean up names
    allSymptoms = Object.keys(symptomsDict).map(symptom => ({
        key: symptom,
        display: symptom.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    }));
    
    filteredSymptoms = [...allSymptoms];
    renderSymptoms();
}

function setupEventListeners() {
    const searchInput = document.getElementById('symptom-search');
    const clearButton = document.getElementById('clear-symptoms');
    const predictButton = document.getElementById('predict-btn');

    searchInput.addEventListener('input', handleSearch);
    clearButton.addEventListener('click', clearAllSymptoms);
    predictButton.addEventListener('click', predictDisease);
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    filteredSymptoms = allSymptoms.filter(symptom => 
        symptom.display.toLowerCase().includes(searchTerm)
    );
    renderSymptoms();
}

function renderSymptoms() {
    const symptomsGrid = document.getElementById('symptoms-grid');
    symptomsGrid.innerHTML = '';

    filteredSymptoms.forEach(symptom => {
        const isSelected = selectedSymptoms.has(symptom.key);
        const symptomElement = document.createElement('div');
        symptomElement.className = `symptom-item ${isSelected ? 'selected' : ''}`;
        symptomElement.innerHTML = `
            <input type="checkbox" id="symptom-${symptom.key}" ${isSelected ? 'checked' : ''}>
            <label for="symptom-${symptom.key}">${symptom.display}</label>
        `;
        
        symptomElement.addEventListener('click', () => toggleSymptom(symptom.key));
        symptomsGrid.appendChild(symptomElement);
    });
}

function toggleSymptom(symptomKey) {
    if (selectedSymptoms.has(symptomKey)) {
        selectedSymptoms.delete(symptomKey);
    } else {
        selectedSymptoms.add(symptomKey);
    }
    
    updateSelectedSymptoms();
    renderSymptoms();
}

function updateSelectedSymptoms() {
    const selectedList = document.getElementById('selected-symptoms');
    const selectedCount = document.getElementById('selected-count');
    const predictButton = document.getElementById('predict-btn');
    
    selectedCount.textContent = selectedSymptoms.size;
    predictButton.disabled = selectedSymptoms.size === 0;
    
    selectedList.innerHTML = '';
    selectedSymptoms.forEach(symptomKey => {
        const symptom = allSymptoms.find(s => s.key === symptomKey);
        if (symptom) {
            const tag = document.createElement('div');
            tag.className = 'symptom-tag';
            tag.innerHTML = `
                ${symptom.display}
                <button onclick="removeSymptom('${symptomKey}')">×</button>
            `;
            selectedList.appendChild(tag);
        }
    });
}

function removeSymptom(symptomKey) {
    selectedSymptoms.delete(symptomKey);
    updateSelectedSymptoms();
    renderSymptoms();
}

function clearAllSymptoms() {
    selectedSymptoms.clear();
    updateSelectedSymptoms();
    renderSymptoms();
}

async function predictDisease() {
    if (selectedSymptoms.size === 0) {
        alert('Please select at least one symptom.');
        return;
    }

    showLoading(true);
    
    try {
        // Simulate API call - in a real implementation, this would call your Python backend
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock prediction - replace with actual API call
        const mockPrediction = getMockPrediction(Array.from(selectedSymptoms));
        displayResults(mockPrediction);
        
    } catch (error) {
        console.error('Prediction error:', error);
        alert('An error occurred while predicting. Please try again.');
    } finally {
        showLoading(false);
    }
}

function getMockPrediction(symptoms) {
    // Simple mock logic - in reality, this would be handled by your ML model
    const diseases = Object.keys(diseaseData.descriptions);
    const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
    
    return {
        disease: randomDisease,
        confidence: Math.floor(Math.random() * 20) + 80, // 80-100%
        description: diseaseData.descriptions[randomDisease],
        precautions: diseaseData.precautions[randomDisease] || ['Consult a healthcare professional'],
        medications: ['Consult a healthcare professional for proper medication'],
        diet: ['Maintain a balanced diet', 'Stay hydrated', 'Follow medical advice'],
        recommendations: ['Get adequate rest', 'Follow medical guidance', 'Monitor symptoms']
    };
}

function displayResults(prediction) {
    const resultsContent = document.getElementById('results-content');
    
    resultsContent.innerHTML = `
        <div class="prediction-result">
            <div class="predicted-disease">${prediction.disease}</div>
            <div class="confidence-score">Confidence: ${prediction.confidence}%</div>
        </div>
        
        <div class="result-tabs">
            <button class="tab-button active" onclick="showTab('description')">Description</button>
            <button class="tab-button" onclick="showTab('precautions')">Precautions</button>
            <button class="tab-button" onclick="showTab('medications')">Medications</button>
            <button class="tab-button" onclick="showTab('diet')">Diet</button>
            <button class="tab-button" onclick="showTab('recommendations')">Recommendations</button>
        </div>
        
        <div class="tab-content active" id="tab-description">
            <p>${prediction.description}</p>
        </div>
        
        <div class="tab-content" id="tab-precautions">
            <ul class="recommendation-list">
                ${prediction.precautions.map(item => item ? `<li>${item}</li>` : '').join('')}
            </ul>
        </div>
        
        <div class="tab-content" id="tab-medications">
            <ul class="recommendation-list">
                ${prediction.medications.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="tab-content" id="tab-diet">
            <ul class="recommendation-list">
                ${prediction.diet.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="tab-content" id="tab-recommendations">
            <ul class="recommendation-list">
                ${prediction.recommendations.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div style="margin-top: 2rem; padding: 1rem; background-color: rgba(239, 68, 68, 0.1); border-radius: 0.5rem; border-left: 4px solid #ef4444;">
            <strong>⚠️ Medical Disclaimer:</strong> This prediction is for informational purposes only and should not replace professional medical advice. Always consult with a healthcare provider for proper diagnosis and treatment.
        </div>
    `;
}

function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(`tab-${tabName}`).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName).classList.add('active');
    
    // Update URL hash
    window.location.hash = sectionName;
}

function showLoading(show) {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (show) {
        loadingOverlay.classList.add('active');
    } else {
        loadingOverlay.classList.remove('active');
    }
}

// Handle browser back/forward buttons
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        showSection(hash);
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === hash) {
                link.classList.add('active');
            }
        });
    }
});

// Expose functions to global scope for onclick handlers
window.showSection = showSection;
window.showTab = showTab;
window.removeSymptom = removeSymptom;