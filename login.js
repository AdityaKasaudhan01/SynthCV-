// Login JavaScript
const API_BASE = 'http://localhost:3000/api';

const signinBtn = document.getElementById('signin-btn');
const signupBtn = document.getElementById('signup-btn');
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');

// Form toggle
signinBtn.addEventListener('click', function() {
    signinBtn.classList.add('active');
    signupBtn.classList.remove('active');
    signinForm.classList.add('active');
    signupForm.classList.remove('active');
});

signupBtn.addEventListener('click', function() {
    signupBtn.classList.add('active');
    signinBtn.classList.remove('active');
    signupForm.classList.add('active');
    signinForm.classList.remove('active');
});

// Sign Up
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const errorEl = document.getElementById('signup-error');

    errorEl.textContent = '';

    if (!name || !email || !password || !confirmPassword) {
        errorEl.textContent = 'Please fill all fields';
        return;
    }

    if (password !== confirmPassword) {
        errorEl.textContent = 'Passwords do not match';
        return;
    }

    if (password.length < 6) {
        errorEl.textContent = 'Password must be at least 6 characters';
        return;
    }

    // API call
    fetch(`${API_BASE}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            errorEl.textContent = data.error;
        } else {
            // Store token
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            // Redirect to dashboard
            window.location.href = 'index.html';
        }
    })
    .catch(error => {
        errorEl.textContent = 'Network error. Please try again.';
        console.error('Signup error:', error);
    });
});

// Sign In
signinForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signin-email').value.trim();
    const password = document.getElementById('signin-password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    const errorEl = document.getElementById('signin-error');

    errorEl.textContent = '';

    if (!email || !password) {
        errorEl.textContent = 'Please fill all fields';
        return;
    }

    // API call
    fetch(`${API_BASE}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            errorEl.textContent = data.error;
        } else {
            // Store token and user
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            if (rememberMe) {
                localStorage.setItem('rememberEmail', email);
            } else {
                localStorage.removeItem('rememberEmail');
            }

            // Redirect to dashboard
            window.location.href = 'index.html';
        }
    })
    .catch(error => {
        errorEl.textContent = 'Network error. Please try again.';
        console.error('Signin error:', error);
    });
});

// Load remembered email
const rememberedEmail = localStorage.getItem('rememberEmail');
if (rememberedEmail) {
    document.getElementById('signin-email').value = rememberedEmail;
    document.getElementById('remember-me').checked = true;
}