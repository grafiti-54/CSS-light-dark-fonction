//Fonction de changement du theme. 
function toggleTheme() {
    const root = document.documentElement;
    // Ajoute une classe pendant la transition
    root.classList.add('theme-transitioning');

    if (root.style.colorScheme === 'light') {
        root.style.colorScheme = 'dark';
    } else {
        root.style.colorScheme = 'light';
    }

    // Retire la classe après la transition
    setTimeout(() => {
        root.classList.remove('theme-transitioning');
    }, 100); // Durée de transition
}
