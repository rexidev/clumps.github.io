function loadFile(event) {
    const avatar = document.getElementById('avatar');
    avatar.src = URL.createObjectURL(event.target.files[0]);
    avatar.style.display = 'block';
}

// Здесь будет добавлен весь JavaScript для анимаций и взаимодействий.
