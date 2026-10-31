/* Local-only light/dark theme toggle; no network calls or dependencies. */
(() => {
  const key = 'jose-portfolio-theme';
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const label = toggle?.querySelector('.theme-toggle-label');
  const symbol = toggle?.querySelector('.theme-icon');
  const meta = document.querySelector('meta[name="theme-color"]');
  if (!toggle || !label || !symbol) return;

  function render() {
    const dark = root.dataset.theme === 'dark';
    label.textContent = dark ? 'Light mode' : 'Dark mode';
    symbol.textContent = dark ? '☀' : '☾';
    const action = dark ? 'Switch to light mode' : 'Switch to dark mode';
    toggle.setAttribute('aria-label', action);
    toggle.title = action;
    if (meta) meta.content = dark ? '#1c1b1a' : '#fff8ec';
  }

  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem(key, next); } catch (_) { /* private/file preview fallback */ }
    render();
  });

  // System theme changes intentionally do not override dark-first design or user choice.
  render();
})();
