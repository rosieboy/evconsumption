<script>
  import {
    miPerKwhToKwh100km,
    kwh100kmToMiPerKwh,
    miPerKwhToMpge,
    mpgeToMiPerKwh,
    kwh100kmToMpge,
    mpgeToKwh100km,
    kwh100kmToKwh100mi,
    kwh100miToKwh100km,
  } from '../lib/conversions.js';
  import { t } from './i18n.js';

  let miPerKwh = '';
  let kwh100km = '';
  let mpge = '';
  let kwh100mi = '';

  function fmt(n) {
    return n > 0 && isFinite(n) ? n.toFixed(2) : '';
  }

  function onMiPerKwh(e) {
    miPerKwh = e.currentTarget.value;
    const v = parseFloat(miPerKwh);
    if (v > 0) {
      const k = miPerKwhToKwh100km(v);
      kwh100km = fmt(k);
      mpge = fmt(miPerKwhToMpge(v));
      kwh100mi = fmt(kwh100kmToKwh100mi(k));
    } else {
      kwh100km = '';
      mpge = '';
      kwh100mi = '';
    }
  }

  function onKwh100km(e) {
    kwh100km = e.currentTarget.value;
    const v = parseFloat(kwh100km);
    if (v > 0) {
      miPerKwh = fmt(kwh100kmToMiPerKwh(v));
      mpge = fmt(kwh100kmToMpge(v));
      kwh100mi = fmt(kwh100kmToKwh100mi(v));
    } else {
      miPerKwh = '';
      mpge = '';
      kwh100mi = '';
    }
  }

  function onMpge(e) {
    mpge = e.currentTarget.value;
    const v = parseFloat(mpge);
    if (v > 0) {
      const mi = mpgeToMiPerKwh(v);
      miPerKwh = fmt(mi);
      const k = miPerKwhToKwh100km(mi);
      kwh100km = fmt(k);
      kwh100mi = fmt(kwh100kmToKwh100mi(k));
    } else {
      miPerKwh = '';
      kwh100km = '';
      kwh100mi = '';
    }
  }

  function onKwh100mi(e) {
    kwh100mi = e.currentTarget.value;
    const v = parseFloat(kwh100mi);
    if (v > 0) {
      const k = kwh100miToKwh100km(v);
      kwh100km = fmt(k);
      miPerKwh = fmt(kwh100kmToMiPerKwh(k));
      mpge = fmt(kwh100kmToMpge(k));
    } else {
      kwh100km = '';
      miPerKwh = '';
      mpge = '';
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
      <path
        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
      ></path>
    </svg>
    {$t.ev_heading}
  </h2>

  <div class="fields">
    <div class="field">
      <label for="mi-per-kwh">{$t.mi_per_kwh_label} <span class="badge">US/UK</span></label>
      <div class="input-row">
        <input
          id="mi-per-kwh"
          type="number"
          value="{miPerKwh}"
          on:input="{onMiPerKwh}"
          min="0"
          step="0.01"
          placeholder="{$t.placeholder_mi_kwh}"
        />
        <span class="unit">mi/kWh</span>
      </div>
      <p class="hint">{$t.hint_us_uk}</p>
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
      <label for="kwh-100km">{$t.kwh100km_label} <span class="badge">EU</span></label>
      <div class="input-row">
        <input
          id="kwh-100km"
          type="number"
          value="{kwh100km}"
          on:input="{onKwh100km}"
          min="0"
          step="0.1"
          placeholder="{$t.placeholder_kwh100}"
        />
        <span class="unit">kWh/100 km</span>
      </div>
      <p class="hint">{$t.hint_eu_wltp}</p>
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
      <label for="mpge">{$t.mpge_label} <span class="badge">EPA</span></label>
      <div class="input-row">
        <input
          id="mpge"
          type="number"
          value="{mpge}"
          on:input="{onMpge}"
          min="0"
          step="1"
          placeholder="{$t.placeholder_mpge}"
        />
        <span class="unit">MPGe</span>
      </div>
      <p class="hint">{$t.hint_mpge}</p>
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
      <label for="kwh-100mi">{$t.kwh100mi_label} <span class="badge">UK</span></label>
      <div class="input-row">
        <input
          id="kwh-100mi"
          type="number"
          value="{kwh100mi}"
          on:input="{onKwh100mi}"
          min="0"
          step="0.1"
          placeholder="{$t.placeholder_kwh100mi}"
        />
        <span class="unit">kWh/100 mi</span>
      </div>
      <p class="hint">{$t.hint_kwh100mi}</p>
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
</style>
