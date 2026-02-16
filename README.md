# EVE Marketplace – Vertical Event Platform

EVE è una piattaforma marketplace verticale per organizzatori di eventi. Non è un brand di location, ma un sistema neutrale e scalabile.

## Struttura repository
- `/app` – Entry point e navigazione app (Expo Router)
- `/marketplace` – Logica e pagine home marketplace
- `/vendors` – Flussi e pagine partner (es. Team Loris)
- `/booking` – Flussi di prenotazione, configuratori extra
- `/components/marketplace` – Componenti marketplace
- `/components/vendor` – Componenti vendor
- `/components/booking` – Componenti booking
- `/design-system` – Palette, tipografia, tokens, temi
- `/motion` – Motion system, animazioni
- `/strategies` – Strategie di upsell, logica suggerimenti
- `/docs` – Documentazione architetturale, design, motion

## Stack
- React Native (Expo, Expo Router)
- Deploy web automatico su Render

---

## Architettura Marketplace
- Splash animato EVE
- Home: lista vendor (es. Team Loris)
- VendorPage: branding e flow partner
- BookingFlow: scelta sala/location, suggerimenti, extra
- StickySummaryBar: totale sempre visibile

Struttura pronta per aggiungere nuovi partner, filtri, ranking, recensioni.

Per dettagli su UX, flow e design, consulta le cartelle dedicate e `docs/MARKETPLACE_ARCHITECTURE.md`.