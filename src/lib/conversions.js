/**
 * Conversion constants and functions for fuel & EV efficiency units.
 *
 * Physical constants:
 *   1 US gallon  = 3.785411784 L
 *   1 UK gallon  = 4.54609 L
 *   1 mile       = 1.609344 km
 *   1 kWh/gal-eq = 33.7 kWh  (EPA gasoline equivalent)
 *
 * The fossil conversions are all reciprocal:  X = C / Y  and  Y = C / X
 */

// ── Fossil fuel ──────────────────────────────────────────────────────────────

const US_CONSTANT = (3.785411784 * 100) / 1.609344; // ≈ 235.215
const UK_CONSTANT = (4.54609 * 100)     / 1.609344; // ≈ 282.481

/** US MPG → L/100 km */
export function usMpgToL100km(mpg)   { return US_CONSTANT / mpg; }
/** L/100 km → US MPG */
export function l100kmToUsMpg(l)     { return US_CONSTANT / l;   }

/** UK (imperial) MPG → L/100 km */
export function ukMpgToL100km(mpg)   { return UK_CONSTANT / mpg; }
/** L/100 km → UK (imperial) MPG */
export function l100kmToUkMpg(l)     { return UK_CONSTANT / l;   }

// ── Electric vehicles ────────────────────────────────────────────────────────

const MI_KWH_CONSTANT = 100 / 1.609344; // ≈ 62.137
const MPGE_KWH        = 33.7;           // kWh per gallon equivalent (EPA)

/** mi/kWh → kWh/100 km */
export function miPerKwhToKwh100km(mi)  { return MI_KWH_CONSTANT / mi;  }
/** kWh/100 km → mi/kWh */
export function kwh100kmToMiPerKwh(kwh) { return MI_KWH_CONSTANT / kwh; }

/** mi/kWh → MPGe */
export function miPerKwhToMpge(mi)      { return mi * MPGE_KWH;          }
/** MPGe → mi/kWh */
export function mpgeToMiPerKwh(mpge)    { return mpge / MPGE_KWH;        }

/** kWh/100 km → MPGe */
export function kwh100kmToMpge(kwh)     { return miPerKwhToMpge(kwh100kmToMiPerKwh(kwh)); }
/** MPGe → kWh/100 km */
export function mpgeToKwh100km(mpge)    { return miPerKwhToKwh100km(mpgeToMiPerKwh(mpge)); }
