import { writable, derived } from 'svelte/store';

const translations = {
  sv: {
    title: 'Fuel & EV Converter',
    subtitle: 'Konvertera bränsleförbrukning och elförbrukning mellan imperialiska och metriska enheter.',
    fossil_heading: 'Fossildrivna fordon',
    ev_heading: 'Elbilar',
    us_mpg_label: 'Miles per gallon',
    uk_mpg_label: 'Miles per gallon',
    l100km_label: 'Liter per 100 km',
    mi_per_kwh_label: 'Miles per kWh',
    kwh100km_label: 'kWh per 100 km',
    mpge_label: 'MPGe',
    hint_us_gal: '1 US gallon = 3,785 L',
    hint_uk_gal: '1 imp. gallon = 4,546 L',
    hint_eu_std: 'Europastandard',
    hint_us_uk: 'Vanlig i USA & UK',
    hint_eu_wltp: 'Europastandard (WLTP)',
    hint_mpge: 'Miles per gallon equivalent · 1 gal = 33,7 kWh (EPA)',
    placeholder_us_mpg: 't.ex. 30',
    placeholder_uk_mpg: 't.ex. 36',
    placeholder_l100km: 't.ex. 7,8',
    placeholder_mi_kwh: 't.ex. 3,5',
    placeholder_kwh100: 't.ex. 17',
    placeholder_mpge: 't.ex. 120',
    footer: '1 US gal = 3,785 L · 1 imp. gal = 4,546 L · 1 mile = 1,609 km · MPGe: 1 gal = 33,7 kWh (EPA)',
    lang_toggle: 'English',
    dark_toggle_on: 'Mörkt läge',
    dark_toggle_off: 'Ljust läge',
    fossil_tagline: 'Njut medan det varar — elbilarna tar över.',
  },
  en: {
    title: 'Fuel & EV Converter',
    subtitle: 'Convert fuel and energy consumption between imperial and metric units.',
    fossil_heading: 'Combustion vehicles',
    ev_heading: 'Electric vehicles',
    us_mpg_label: 'Miles per gallon',
    uk_mpg_label: 'Miles per gallon',
    l100km_label: 'Litres per 100 km',
    mi_per_kwh_label: 'Miles per kWh',
    kwh100km_label: 'kWh per 100 km',
    mpge_label: 'MPGe',
    hint_us_gal: '1 US gallon = 3.785 L',
    hint_uk_gal: '1 imp. gallon = 4.546 L',
    hint_eu_std: 'European standard',
    hint_us_uk: 'Common in US & UK',
    hint_eu_wltp: 'European standard (WLTP)',
    hint_mpge: 'Miles per gallon equivalent · 1 gal = 33.7 kWh (EPA)',
    placeholder_us_mpg: 'e.g. 30',
    placeholder_uk_mpg: 'e.g. 36',
    placeholder_l100km: 'e.g. 7.8',
    placeholder_mi_kwh: 'e.g. 3.5',
    placeholder_kwh100: 'e.g. 17',
    placeholder_mpge: 'e.g. 120',
    footer: '1 US gal = 3.785 L · 1 imp. gal = 4.546 L · 1 mile = 1.609 km · MPGe: 1 gal = 33.7 kWh (EPA)',
    lang_toggle: 'Svenska',
    dark_toggle_on: 'Dark mode',
    dark_toggle_off: 'Light mode',
    fossil_tagline: 'Enjoy it while it lasts — EVs are taking over.',
  },
};

function detectLang() {
  const nav = typeof navigator !== 'undefined' ? navigator.language || '' : '';
  return nav.toLowerCase().startsWith('sv') ? 'sv' : 'en';
}

export const locale = writable(detectLang());

export const t = derived(locale, ($locale) => translations[$locale] ?? translations.en);
