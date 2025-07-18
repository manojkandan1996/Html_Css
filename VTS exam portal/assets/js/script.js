

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('error-msg');

    const logins = [
        {
            email: 'admin@vts.com',
            password: 'admin123',
            redirect: 'assets/pages/adminoverview.html'
        },
        {
            email: 'trainer@vts.com',
            password: 'trainer123',
            redirect: 'assets/pages/traineroverview.html'
        },
        {
            email: 'student@vts.com',
            password: 'student123',
            redirect: 'assets/pages/studentoverview.html'
        }
    ];

    const matchedUser = logins.find(user =>
        user.email === email && user.password === password
    );

    if (matchedUser) {
        errorMsg.style.color = 'green';
        errorMsg.textContent = 'Login successful! Redirecting...';
        setTimeout(() => {
            window.location.href = matchedUser.redirect;
        }, 1500);
    } else {
    let role = null;
    let correctPassword = null;
    let redirectUrl = null;

    if (email.includes('admin') && email.endsWith('@vts.com')) {
      role = 'admin';
      correctPassword = 'admin123';
      redirectUrl = 'assets/pages/adminoverview.html';
    } else if (email.includes('trainer') && email.endsWith('@vts.com')) {
      role = 'trainer';
      correctPassword = 'trainer123';
      redirectUrl = 'assets/pages/traineroverview.html';
    } else if (email.includes('student') && email.endsWith('@vts.com')) {
      role = 'student';
      correctPassword = 'student123';
      redirectUrl = 'assets/pages/studentoverview.html';
    }

    if (role && password === correctPassword) {
      errorMsg.style.color = 'green';
      errorMsg.textContent = `Login successful! Redirecting to ${role} overview...`;
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 1500);
    } else {
      errorMsg.style.color = 'red';
      errorMsg.textContent = 'Invalid Email or Password!';
    }
  }
});


function openAddPopup() {
    document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}

function openExamPopup() {
    document.getElementById("examPopup").classList.remove("hidden");
}

function closeExamPopup() {
    document.getElementById("examPopup").classList.add("hidden");
}

function openFilterPopup() {
    document.getElementById('filterPopup').classList.remove('hidden');
}

function closeFilterPopup() {
    document.getElementById('filterPopup').classList.add('hidden');
}

function toggleFilterPopup() {
    document.getElementById('filterPopup').classList.toggle('hidden');
}



