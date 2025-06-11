const express = require('express');
const cors = require('cors');
const { PythonShell } = require('python-shell');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// API endpoint for disease prediction
app.post('/api/predict', async (req, res) => {
    try {
        const { symptoms } = req.body;
        
        if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
            return res.status(400).json({ error: 'Symptoms array is required' });
        }

        // Python script options
        const options = {
            mode: 'text',
            pythonPath: 'python3', // or 'python' depending on your system
            pythonOptions: ['-u'], // get print results in real-time
            scriptPath: __dirname,
            args: [JSON.stringify(symptoms)]
        };

        // Run Python prediction script
        PythonShell.run('predict.py', options, (err, results) => {
            if (err) {
                console.error('Python script error:', err);
                return res.status(500).json({ error: 'Prediction failed' });
            }

            try {
                const prediction = JSON.parse(results[0]);
                res.json(prediction);
            } catch (parseError) {
                console.error('Parse error:', parseError);
                res.status(500).json({ error: 'Failed to parse prediction results' });
            }
        });

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Serve the main application
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});