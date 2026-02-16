# EVE – Glovo for Events

EVE è l’app mobile intelligente per prenotare eventi, feste e animazione. Mobile-first, moderna, premium.

## Struttura repository
- `/app` – Entry point e navigazione app (Expo Router)
- `/components` – Componenti UI riutilizzabili
- `/design-system` – Palette, tipografia, tokens, temi
- `/motion` – Motion system, animazioni
- `/strategies` – Strategie di upsell, logica suggerimenti
- `/docs` – Documentazione architetturale, design, motion

## Stack
- React Native (Expo, Expo Router)
- Deploy web automatico su Render

---

La UX EVE è integrata nel flow Expo Router:
1. Home: headline emozionale, CTA "Inizia"
2. Scelta tipo evento: Sala EVE / Location esterna
3. Step sala/location/extra

Pronta per deploy web/mobile.