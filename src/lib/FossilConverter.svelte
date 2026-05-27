<script>
  import {
    usMpgToL100km,
    l100kmToUsMpg,
    ukMpgToL100km,
    l100kmToUkMpg,
    l100kmToKmL,
    kmLToL100km,
  } from '../lib/conversions.js';
  import { t } from './i18n.js';

  let usMpg = '';
  let ukMpg = '';
  let l100km = '';
  let kmL = '';

  function fmt(n) {
    return n > 0 && isFinite(n) ? n.toFixed(2) : '';
  }

  function onUsMpg(e) {
    usMpg = e.currentTarget.value;
    const v = parseFloat(usMpg);
    if (v > 0) {
      const l = usMpgToL100km(v);
      l100km = fmt(l);
      ukMpg = fmt(l100kmToUkMpg(l));
      kmL = fmt(l100kmToKmL(l));
    } else {
      l100km = '';
      ukMpg = '';
      kmL = '';
    }
  }

  function onUkMpg(e) {
    ukMpg = e.currentTarget.value;
    const v = parseFloat(ukMpg);
    if (v > 0) {
      const l = ukMpgToL100km(v);
      l100km = fmt(l);
      usMpg = fmt(l100kmToUsMpg(l));
      kmL = fmt(l100kmToKmL(l));
    } else {
      l100km = '';
      usMpg = '';
      kmL = '';
    }
  }

  function onL100km(e) {
    l100km = e.currentTarget.value;
    const v = parseFloat(l100km);
    if (v > 0) {
      usMpg = fmt(l100kmToUsMpg(v));
      ukMpg = fmt(l100kmToUkMpg(v));
      kmL = fmt(l100kmToKmL(v));
    } else {
      usMpg = '';
      ukMpg = '';
      kmL = '';
    }
  }

  function onKmL(e) {
    kmL = e.currentTarget.value;
    const v = parseFloat(kmL);
    if (v > 0) {
      const l = kmLToL100km(v);
      l100km = fmt(l);
      usMpg = fmt(l100kmToUsMpg(l));
      ukMpg = fmt(l100kmToUkMpg(l));
    } else {
      l100km = '';
      usMpg = '';
      ukMpg = '';
    }
  }
</script>

<div class="card">
  <h2>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5"></path>
      <path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"></path>
      <path d="M2 21h13"></path>
      <path d="M3 9h11"></path>
    </svg>
    {$t.fossil_heading}
  </h2>
  <p class="tagline">{$t.fossil_tagline}</p>

  <div class="fields">
    <div class="field">
      <label for="us-mpg">{$t.us_mpg_label} <span class="badge">US</span></label>
      <div class="input-row">
        <input
          id="us-mpg"
          type="number"
          value="{usMpg}"
          on:input="{onUsMpg}"
          min="0"
          step="0.1"
          placeholder="{$t.placeholder_us_mpg}"
        />
        <span class="unit">mpg</span>
      </div>
      <p class="hint">{$t.hint_us_gal}</p>
    </div>

    <div class="arrows">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m21 16-4 4-4-4"></path>
        <path d="M17 20V4"></path>
        <path d="m3 8 4-4 4 4"></path>
        <path d="M7 4v16"></path>
      </svg>
    </div>

    <div class="field">
      <label for="uk-mpg">{$t.uk_mpg_label} <span class="badge">UK</span></label>
      <div class="input-row">
        <input
          id="uk-mpg"
          type="number"
          value="{ukMpg}"
          on:input="{onUkMpg}"
          min="0"
          step="0.1"
          placeholder="{$t.placeholder_uk_mpg}"
        />
        <span class="unit">mpg</span>
      </div>
      <p class="hint">{$t.hint_uk_gal}</p>
    </div>

    <div class="arrows">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m21 16-4 4-4-4"></path>
        <path d="M17 20V4"></path>
        <path d="m3 8 4-4 4 4"></path>
        <path d="M7 4v16"></path>
      </svg>
    </div>

    <div class="field">
      <label for="l100km">{$t.l100km_label} <span class="badge">EU</span></label>
      <div class="input-row">
        <input
          id="l100km"
          type="number"
          value="{l100km}"
          on:input="{onL100km}"
          min="0"
          step="0.1"
          placeholder="{$t.placeholder_l100km}"
        />
        <span class="unit">L/100 km</span>
      </div>
      <p class="hint">{$t.hint_eu_std}</p>
    </div>

    <div class="arrows">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m21 16-4 4-4-4"></path>
        <path d="M17 20V4"></path>
        <path d="m3 8 4-4 4 4"></path>
        <path d="M7 4v16"></path>
      </svg>
    </div>

    <div class="field">
      <label for="kml">{$t.kml_label} <span class="badge">JP/IN</span></label>
      <div class="input-row">
        <input
          id="kml"
          type="number"
          value="{kmL}"
          on:input="{onKmL}"
          min="0"
          step="0.1"
          placeholder="{$t.placeholder_kml}"
        />
        <span class="unit">km/L</span>
      </div>
      <p class="hint">{$t.hint_kml}</p>
    </div>
  </div>
</div>

<style>
  .card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: var(--shadow-card);
    transition:
      background 0.25s,
      border-color 0.2s;
  }

  h2 {
    margin: 0 0 1.2rem;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  h2 svg {
    color: var(--accent);
    flex-shrink: 0;
  }

  .fields {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .arrows {
    display: flex;
    justify-content: center;
    color: var(--text-faint);
    margin: 0.3rem 0;
    user-select: none;
  }

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .badge {
    font-size: 0.68rem;
    font-weight: 700;
    background: var(--badge-bg);
    color: var(--badge-text);
    border-radius: 4px;
    padding: 1px 5px;
    letter-spacing: 0.04em;
  }

  .input-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input[type='number'] {
    flex: 1;
    padding: 0.5rem 0.75rem;
    border: 1.5px solid var(--input-border);
    border-radius: 8px;
    font-size: 1.1rem;
    font-family: inherit;
    background: var(--bg-card);
    color: var(--text);
    transition:
      border-color 0.15s,
      background 0.2s,
      box-shadow 0.15s;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input[type='number']:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-glow);
  }

  /* Remove spinner arrows */
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .unit {
    font-size: 0.8rem;
    color: var(--text-muted);
    white-space: nowrap;
    min-width: 5rem;
  }

  .hint {
    margin: 0;
    font-size: 0.72rem;
    color: var(--text-faint);
    padding-left: 0.1rem;
  }

  .tagline {
    font-size: 0.75rem;
    color: var(--text-faint);
    font-style: italic;
    margin: -0.6rem 0 1.1rem;
  }
</style>
