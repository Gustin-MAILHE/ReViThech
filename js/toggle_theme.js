const toggleTheme = () => {
    const html = document.documentElement;
    const currentMode = html.getAttribute('data-collection-1-mode');
    const newMode = currentMode === 'light' ? 'darck' : 'light';
    html.setAttribute('data-collection-1-mode', newMode);
};