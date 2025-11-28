// API Configuration
const API_URL = window.location.origin;

// Form Elements
const predictionForm = document.getElementById('predictionForm');
const predictBtn = document.getElementById('predictBtn');
const resultSection = document.getElementById('resultSection');
const predictionValue = document.getElementById('predictionValue');

// Default values for California Housing Dataset
const defaultValues = {
    medInc: 8.3252,
    houseAge: 41.0,
    aveRooms: 6.98,
    aveBedrms: 1.02,
    population: 322,
    aveOccup: 2.55,
    latitude: 37.88,
    longitude: -122.23
};

// Initialize form with default values
window.addEventListener('DOMContentLoaded', () => {
    populateFormDefaults();
    addInputAnimations();
});

// Populate form with default values
function populateFormDefaults() {
    document.getElementById('medInc').value = defaultValues.medInc;
    document.getElementById('houseAge').value = defaultValues.houseAge;
    document.getElementById('aveRooms').value = defaultValues.aveRooms;
    document.getElementById('aveBedrms').value = defaultValues.aveBedrms;
    document.getElementById('population').value = defaultValues.population;
    document.getElementById('aveOccup').value = defaultValues.aveOccup;
    document.getElementById('latitude').value = defaultValues.latitude;
    document.getElementById('longitude').value = defaultValues.longitude;
}

// Add input animations
function addInputAnimations() {
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('focus', (e) => {
            e.target.parentElement.style.transform = 'scale(1.02)';
        });
        input.addEventListener('blur', (e) => {
            e.target.parentElement.style.transform = 'scale(1)';
        });
    });
}

// Handle form submission
predictionForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const data = [
        parseFloat(document.getElementById('medInc').value),
        parseFloat(document.getElementById('houseAge').value),
        parseFloat(document.getElementById('aveRooms').value),
        parseFloat(document.getElementById('aveBedrms').value),
        parseFloat(document.getElementById('population').value),
        parseFloat(document.getElementById('aveOccup').value),
        parseFloat(document.getElementById('latitude').value),
        parseFloat(document.getElementById('longitude').value)
    ];

    // Validate inputs
    if (data.some(isNaN)) {
        showError('Please fill in all fields with valid numbers');
        return;
    }

    // Show loading state
    setLoadingState(true);

    try {
        // Make API request
        const response = await fetch(`${API_URL}/predict`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data })
        });

        if (!response.ok) {
            throw new Error('Prediction failed. Please try again.');
        }

        const result = await response.json();

        // Show result
        showResult(result.prediction);

    } catch (error) {
        showError(error.message);
    } finally {
        setLoadingState(false);
    }
});

// Set loading state
function setLoadingState(isLoading) {
    predictBtn.disabled = isLoading;

    if (isLoading) {
        predictBtn.innerHTML = '<span class="spinner"></span> Analyzing...';
    } else {
        predictBtn.innerHTML = '🔮 Predict Price';
    }
}

// Show prediction result
function showResult(prediction) {
    // Format prediction
    const formattedPrice = formatPrice(prediction);

    // Update UI
    predictionValue.textContent = formattedPrice;
    resultSection.style.display = 'block';

    // Scroll to result
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Add success animation
    resultSection.classList.remove('alert-error');
    resultSection.classList.add('alert-success');

    // Remove animation class after animation completes
    setTimeout(() => {
        resultSection.classList.remove('alert-success');
    }, 500);
}

// Show error message
function showError(message) {
    predictionValue.textContent = `Error: ${message}`;
    resultSection.style.display = 'block';
    resultSection.classList.add('alert-error');

    setTimeout(() => {
        resultSection.classList.remove('alert-error');
    }, 500);
}

// Format price in Indian Rupees
function formatPrice(value) {
    // The model returns values in units of $100,000
    const actualPriceUSD = value * 100000;

    // Convert USD to INR (approximate rate: 1 USD = 83 INR)
    const conversionRate = 83;
    const actualPriceINR = actualPriceUSD * conversionRate;

    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(actualPriceINR);
}

// Add random example generator
function generateRandomExample() {
    const randomValues = {
        medInc: (Math.random() * 10 + 1).toFixed(4),
        houseAge: Math.floor(Math.random() * 50 + 1),
        aveRooms: (Math.random() * 5 + 3).toFixed(2),
        aveBedrms: (Math.random() * 2 + 0.5).toFixed(2),
        population: Math.floor(Math.random() * 2000 + 100),
        aveOccup: (Math.random() * 4 + 1).toFixed(2),
        latitude: (Math.random() * 5 + 32).toFixed(2),
        longitude: (Math.random() * 10 - 124).toFixed(2)
    };

    document.getElementById('medInc').value = randomValues.medInc;
    document.getElementById('houseAge').value = randomValues.houseAge;
    document.getElementById('aveRooms').value = randomValues.aveRooms;
    document.getElementById('aveBedrms').value = randomValues.aveBedrms;
    document.getElementById('population').value = randomValues.population;
    document.getElementById('aveOccup').value = randomValues.aveOccup;
    document.getElementById('latitude').value = randomValues.latitude;
    document.getElementById('longitude').value = randomValues.longitude;
}

// Particle effect for background (optional enhancement)
function createParticles() {
    const container = document.querySelector('.bg-animation');

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(99, 102, 241, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';

        container.appendChild(particle);
    }
}

// Optional: Initialize particles
// createParticles();
