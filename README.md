# MediPredict - AI Disease Prediction System 🏥

A modern, AI-powered web application that predicts diseases based on symptoms and provides comprehensive health recommendations. Built with machine learning and featuring a professional, responsive user interface.

## ✨ Features

### 🎯 **Core Functionality**
- **Intelligent Symptom Analysis**: Select from 132+ symptoms to get accurate disease predictions
- **AI-Powered Predictions**: Machine learning model trained on medical datasets covering 41 diseases
- **Comprehensive Health Insights**: Get detailed information including:
  - Disease descriptions and explanations
  - Recommended precautions and safety measures
  - Medication guidance and suggestions
  - Dietary recommendations and nutrition advice
  - Exercise and lifestyle recommendations

### 🎨 **Modern User Experience**
- **Professional UI/UX**: Clean, intuitive design with Apple-level aesthetics
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations, hover effects, and micro-interactions
- **Smart Search**: Real-time symptom search with instant filtering
- **Visual Feedback**: Loading states, progress indicators, and clear result displays

### 🔍 **Advanced Interface Features**
- **Multi-Section Layout**: Home, Predictor, About, and Contact sections
- **Symptom Selection**: Interactive cards with checkboxes and easy removal
- **Tabbed Results**: Organized display of all health recommendations
- **Mobile-First Design**: Optimized for all screen sizes and devices
- **Accessibility**: Keyboard navigation and screen reader support

## 🚀 Live Demo

The application is now running with a modern web interface! Access it through your browser for the full experience.

## 🛠️ Tech Stack

### **Frontend**
- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Advanced styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Modern JavaScript with async/await and modules
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

### **Backend**
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework
- **Python Integration**: Seamless ML model integration
- **RESTful API**: Clean API design for predictions

### **Machine Learning**
- **Python**: Core ML implementation
- **Scikit-learn**: Machine learning algorithms and model training
- **Pandas & NumPy**: Data processing and numerical computations
- **Pickle**: Model serialization and deployment

### **Development Tools**
- **Vite**: Fast build tool and development server
- **Modern CSS**: Custom properties, Grid, Flexbox
- **Modular Architecture**: Clean, maintainable code structure

## 📦 Installation & Setup

### **Prerequisites**
- Node.js (v14 or higher)
- Python (v3.7 or higher)
- npm or yarn package manager

### **Quick Start**

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/medipredict.git
cd medipredict
```

2. **Install dependencies:**
```bash
# Install Node.js dependencies
npm install

# Install Python dependencies
pip install -r requirements.txt
```

3. **Start the application:**
```bash
# Development mode (with hot reload)
npm run dev

# Production mode
npm run build
npm run preview

# Start the backend server
npm run server
```

4. **Access the application:**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:3001`

## 🎮 Usage Guide

### **Getting Started**
1. **Navigate to the Predictor**: Click on "Predictor" in the navigation menu
2. **Select Symptoms**: Use the search box or browse through symptom categories
3. **Review Selection**: Check your selected symptoms in the summary panel
4. **Get Prediction**: Click "Predict Disease" to analyze your symptoms
5. **View Results**: Explore detailed recommendations in organized tabs

### **Understanding Results**
- **Disease Prediction**: Primary condition based on symptom analysis
- **Confidence Score**: AI model's confidence in the prediction
- **Comprehensive Guidance**: Detailed tabs for precautions, medications, diet, and lifestyle

### **Best Practices**
- Select all relevant symptoms for accurate predictions
- Review all recommendation tabs for complete guidance
- Always consult healthcare professionals for serious concerns
- Use the tool as a preliminary assessment, not a replacement for medical advice

## 📁 Project Structure

```
medipredict/
├── 📄 index.html              # Main application entry point
├── 📄 server.js               # Express.js backend server
├── 📄 predict.py              # Python ML prediction script
├── 📄 vite.config.js          # Vite build configuration
├── 📄 package.json            # Node.js dependencies and scripts
├── 📄 requirements.txt        # Python dependencies
├── 📄 model.pkl               # Trained machine learning model
├── 📁 src/                    # Source code directory
│   ├── 📁 js/                 # JavaScript modules
│   │   └── 📄 main.js         # Main application logic
│   └── 📁 styles/             # CSS stylesheets
│       └── 📄 main.css        # Main stylesheet with modern design
├── 📁 dataset/                # Medical datasets
│   ├── 📄 description.csv     # Disease descriptions
│   ├── 📄 precautions_df.csv  # Safety precautions
│   ├── 📄 medications.csv     # Medication recommendations
│   ├── 📄 diets.csv          # Dietary guidelines
│   └── 📄 workout_df.csv     # Exercise recommendations
└── 📁 dist/                   # Production build output
```

## 🔧 API Endpoints

### **Prediction API**
```http
POST /api/predict
Content-Type: application/json

{
  "symptoms": ["headache", "fever", "nausea"]
}
```

**Response:**
```json
{
  "disease": "Migraine",
  "confidence": 92,
  "description": "Migraine is a type of headache...",
  "precautions": ["rest in dark room", "avoid triggers"],
  "medications": ["consult doctor for proper medication"],
  "diet": ["stay hydrated", "avoid trigger foods"],
  "recommendations": ["manage stress", "regular sleep"]
}
```

## 🎨 Design Philosophy

### **User-Centered Design**
- **Intuitive Navigation**: Clear, logical flow through the application
- **Visual Hierarchy**: Important information stands out clearly
- **Consistent Patterns**: Familiar UI patterns for easy learning
- **Accessibility First**: Designed for users of all abilities

### **Medical Interface Standards**
- **Trust & Credibility**: Professional appearance builds user confidence
- **Clear Information**: Medical data presented in digestible formats
- **Safety First**: Prominent disclaimers and guidance to seek professional help
- **Responsive Care**: Works on any device for emergency access

## 🔒 Privacy & Security

- **Local Processing**: Symptom data processed locally when possible
- **No Data Storage**: Personal health information is not stored
- **Secure Transmission**: HTTPS encryption for all communications
- **Privacy Compliant**: Designed with healthcare privacy standards in mind

## 🤝 Contributing

We welcome contributions to improve MediPredict! Here's how you can help:

### **Development Setup**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### **Contribution Guidelines**
- Follow the existing code style and patterns
- Add tests for new functionality
- Update documentation for any changes
- Ensure responsive design compatibility
- Test across different browsers and devices

## 📊 Model Information

### **Training Data**
- **Diseases Covered**: 41 common medical conditions
- **Symptoms Analyzed**: 132 different symptoms and indicators
- **Model Type**: Random Forest Classifier
- **Accuracy**: ~95% on training data
- **Validation**: Cross-validated on medical datasets

### **Supported Conditions**
Including but not limited to: Diabetes, Hypertension, Migraine, Common Cold, Pneumonia, Heart Attack, Arthritis, Allergies, GERD, and many more.

## ⚠️ Medical Disclaimer

**IMPORTANT**: MediPredict is designed for informational and educational purposes only. This tool:

- **Is NOT a substitute** for professional medical advice, diagnosis, or treatment
- **Should NOT be used** for emergency medical situations
- **Requires professional consultation** for any health concerns
- **May not be 100% accurate** - always verify with healthcare providers

**In case of emergency, contact your local emergency services immediately.**

Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of information from this application.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Medical datasets and research communities
- Open-source machine learning libraries
- Healthcare professionals who provided guidance
- UI/UX design inspiration from leading healthcare applications

## 📞 Support & Contact

- **Issues**: Report bugs or request features via GitHub Issues
- **Documentation**: Check our comprehensive guides and API docs
- **Community**: Join our discussions for tips and best practices

---

**Built with ❤️ for better healthcare accessibility**

*MediPredict - Making AI-powered health insights accessible to everyone*