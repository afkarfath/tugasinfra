document.addEventListener('DOMContentLoaded', function() {

    // ===========================================
    // 1. Logika Menu Hamburger (Mobile)
    // ===========================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('header nav ul');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('header nav ul li a').forEach(link => {
        if (!link.id.includes('login-btn')) { // Jangan tutup menu saat tombol login diklik
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        }
    });

    // ===========================================
    // 2. Logika Modal Login
    // ===========================================
    const loginModal = document.getElementById('login-modal');
    const loginBtn = document.getElementById('login-btn');
    const closeBtn = document.querySelector('.close-btn');
    const loginForm = document.getElementById('login-form');

    // Fungsi untuk membuka modal
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah link '#' menggulir ke atas
        loginModal.style.display = 'flex';
    });

    // Fungsi untuk menutup modal via tombol 'x'
    closeBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    // Fungsi untuk menutup modal dengan klik di luar area form
    window.addEventListener('click', function(e) {
        if (e.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Simulasi saat form login disubmit
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login berhasil! (Ini adalah simulasi)');
        loginModal.style.display = 'none'; // Tutup modal setelah login
    });

    // ===========================================
    // 3. Logika Tombol "Back to Top"
    // ===========================================
    const backToTopButton = document.querySelector('.back-to-top');
    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});