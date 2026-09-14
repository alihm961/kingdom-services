# Kingdom Services

Website voor Kingdom Services, data &amp; electra. Statische site, geen build step.

## Structuur

```
kingdom-services/
├── index.html      # de hele one-pager
├── css/style.css   # tokens, layout, componenten, responsive
├── js/main.js      # validatie van het offerteformulier
└── img/            # logo en projectfoto's
```

## Lokaal draaien

Open `index.html` direct in de browser, of start een servertje:

```bash
python3 -m http.server 5173
# http://localhost:5173
```

In VS Code werkt de Live Server extensie ook prima.

## Nog in te vullen

- VCA en meetapparatuur, als je die als trust-signaal wil noemen

## Formulier

`js/main.js` valideert en verstuurt de offerteaanvraag naar Web3Forms
(`api.web3forms.com/submit`), die 'm doorzet als e-mail naar
khaledkhattab979@hotmail.com. De access key staat als hidden input in het
formulier in `index.html`; het `botcheck`-veld is de honeypot tegen spam.

## Thema

Vast lichte/witte huisstijl (geen dark mode meer). Alle kleuren staan als
custom properties bovenin `css/style.css`. Pas daar aan, niet in de
componenten zelf.

## Hosting

Live op Vercel. Broncode staat op GitHub (`alihm961/kingdom-services`,
branch `master`). Er is een GitHub Actions workflow
(`.github/workflows/deploy.yml`) die bij elke push naar `master` moet
deployen, maar die faalt nog (Vercel-token in de repo secrets mist de
juiste team-scope) — tot dat is opgelost, deploy je handmatig vanuit de
projectmap met `vercel --prod`.

Domeinen: `kingdomservices.nl` en `www.kingdomservices.nl`, DNS bij
GoDaddy (A-records naar `76.76.21.21`), SSL via Vercel.
