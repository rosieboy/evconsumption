import { writable } from 'svelte/store';

const STORAGE_KEY = 'fuel-converter-theme';

function getInitialTheme() {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export const theme = writable(getInitialTheme());

theme.subscribe((value) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', value);
  }
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, value);
  }
});
