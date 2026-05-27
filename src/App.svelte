<script>
  import FossilConverter from './lib/FossilConverter.svelte';
  import EVConverter from './lib/EVConverter.svelte';
  import { locale, t } from './lib/i18n.js';
  import { theme } from './lib/theme.js';

  function toggleLang() {
    locale.update((l) => (l === 'sv' ? 'en' : 'sv'));
  }

  function toggleTheme() {
    theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }
</script>

<div class="app-shell">
  <header>
    <div class="header-inner">
      <div class="wordmark">
        <svg
          class="logo-icon"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="36" height="36" rx="8" fill="currentColor" class="logo-bg"></rect>
          <!-- speedometer needle -->
          <circle
            cx="18"
            cy="20"
            r="8"
            stroke="white"
            stroke-width="1.8"
            fill="none"
            stroke-dasharray="28 22"
          ></circle>
          <line
            x1="18"
            y1="20"
            x2="24"
            y2="13"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          ></line>
          <circle cx="18" cy="20" r="1.8" fill="white"></circle>
        </svg>
        <span class="logo-text">Fuel &amp; EV</span>
      </div>

      <nav class="toolbar" aria-label="Settings">
        <button class="pill-btn" on:click="{toggleLang}" aria-label="Switch language">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            ><circle cx="12" cy="12" r="10"></circle><path
              d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            ></path></svg
          >
          {$t.lang_toggle}
        </button>

        <button
          class="icon-btn"
          on:click="{toggleTheme}"
          aria-label="{$theme === 'dark' ? $t.dark_toggle_off : $t.dark_toggle_on}"
          title="{$theme === 'dark' ? $t.dark_toggle_off : $t.dark_toggle_on}"
        >
          {#if $theme === 'dark'}
            <!-- sun -->
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              ><circle cx="12" cy="12" r="4"></circle><path
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
              ></path></svg
            >
          {:else}
            <!-- moon -->
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg
            >
          {/if}
        </button>
      </nav>
    </div>

    <div class="hero">
      <h1>{$t.title}</h1>
      <p>{$t.subtitle}</p>
    </div>

    <div class="swoosh" aria-hidden="true"></div>
  </header>

  <main>
    <EVConverter />
    <FossilConverter />
  </main>

  <footer>
    <p>{$t.footer}</p>
    <p class="disclaimer">{$t.disclaimer} <a href="mailto:androsen@gmail.com">androsen@gmail.com</a></p>
  </footer>
</div>

<style>
  /* ── Design tokens ─────────────────────────────────── */
  :global(:root) {
    --accent: #e84d0e;
    --accent-dark: #bf3c08;
    --accent-glow: #e84d0e33;

    --bg: #f0f0f2;
    --bg-card: #ffffff;
    --bg-toolbar: #ffffff;
    --border: #e0e0e3;
    --text: #111113;
    --text-muted: #666;
    --text-faint: #aaa;
    --input-border: #ccc;
    --badge-bg: #ebebeb;
    --badge-text: #555;
    --shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
    --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.06);
  }

  :global([data-theme='dark']) {
    --bg: #131315;
    --bg-card: #1e1e22;
    --bg-toolbar: #1e1e22;
    --border: #2e2e34;
    --text: #f0f0f2;
    --text-muted: #9a9aaa;
    --text-faint: #555;
    --input-border: #3a3a44;
    --badge-bg: #2c2c34;
    --badge-text: #9a9aaa;
    --shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
    --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.25);
  }

  /* ── Reset ─────────────────────────────────────────── */
  :global(*, *::before, *::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    font-family:
      system-ui,
      -apple-system,
      'Segoe UI',
      sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100dvh;
    transition:
      background 0.25s,
      color 0.2s;
  }

  /* ── Shell ─────────────────────────────────────────── */
  .app-shell {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }

  /* ── Header ────────────────────────────────────────── */
  header {
    position: relative;
    background: linear-gradient(135deg, #1a1a1e 0%, #2a1008 60%, #e84d0e 100%);
    color: white;
    overflow: hidden;
    padding-bottom: 2.5rem;
  }

  /* diagonal swoosh cut at the bottom */
  header::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2.5rem;
    background: var(--bg);
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
    transition: background 0.25s;
  }

  /* speed-line decorations */
  header::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      -20deg,
      transparent,
      transparent 60px,
      rgba(255, 255, 255, 0.025) 60px,
      rgba(255, 255, 255, 0.025) 61px
    );
    pointer-events: none;
  }

  .header-inner {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.25rem;
  }

  .wordmark {
    display: flex;
    align-items: center;
    gap: 0.55rem;
  }

  .logo-icon {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
  }

  :global(.logo-bg) {
    color: var(--accent);
  }

  .logo-text {
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: white;
  }

  /* ── Toolbar ───────────────────────────────────────── */
  .toolbar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .pill-btn {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    border-radius: 999px;
    padding: 0.3rem 0.75rem;
    font-size: 0.78rem;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    transition: background 0.15s;
    white-space: nowrap;
  }

  .pill-btn:hover {
    background: rgba(255, 255, 255, 0.22);
  }

  .icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    border-radius: 999px;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: background 0.15s;
    flex-shrink: 0;
  }

  .icon-btn:hover {
    background: rgba(255, 255, 255, 0.22);
  }

  /* ── Hero text ─────────────────────────────────────── */
  .hero {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 1.25rem 1.5rem 1rem;
  }

  .hero h1 {
    font-size: 1.9rem;
    font-weight: 900;
    letter-spacing: -0.03em;
    color: white;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
  }

  .hero p {
    margin-top: 0.45rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    max-width: 42ch;
    margin-inline: auto;
  }

  /* ── Main grid ─────────────────────────────────────── */
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    max-width: 800px;
    margin: 0 auto;
    padding: 1.5rem 1.5rem 2rem;
    width: 100%;
  }

  /* ── Footer ────────────────────────────────────────── */
  footer {
    margin-top: auto;
    text-align: center;
    padding: 0 1rem 1.5rem;
    font-size: 0.72rem;
    color: var(--text-faint);
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  footer a {
    color: var(--text-faint);
    text-underline-offset: 2px;
  }

  footer a:hover {
    color: var(--accent);
  }

  .disclaimer {
    font-style: italic;
  }

  /* ── Swoosh (kept for layout spacing) ─────────────── */
  .swoosh {
    display: none;
  }

  /* ── Mobile ────────────────────────────────────────── */
  @media (max-width: 560px) {
    main {
      grid-template-columns: 1fr;
      padding: 1rem 0.875rem 2rem;
    }

    .hero h1 {
      font-size: 1.5rem;
    }
    .hero {
      padding: 1rem 1rem 0.75rem;
    }
  }
</style>
