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

Zoek op `TODO` en op de class `ph` (placeholder). Beide markeren wat er nog mist:

- E-mailadres, telefoonnummer, KVK-nummer, vestigingsadres
- Werkgebied (regio's of "heel Nederland")
- Domein in de `canonical` en `og:` tags
- VCA en meetapparatuur, als je die als trust-signaal wil noemen
- Logo in `img/`, en een favicon

Haal bij het invullen de class `ph` weg, anders blijft de gestippelde
placeholder-styling staan.

## Formulier koppelen

`js/main.js` valideert nu alleen. Voor echte verzending:

- Bij PHP-hosting: een klein `send.php` endpoint met `mail()` of PHPMailer
- Zonder backend: Formspree of Web3Forms, dan hoeft er niets te draaien
- Op Netlify: `data-netlify="true"` op het `form` element

Voeg in alle gevallen een honeypot-veld toe tegen spam.

## Thema

De site volgt het systeemthema van de bezoeker. Alle kleuren staan als
custom properties bovenin `css/style.css`. Pas daar aan, niet in de
componenten zelf.

## Hosting

Statische site, dus alles kan: Vercel, Netlify, Cloudflare Pages, of
gewone Nederlandse hosting met FTP. Zorg voor HTTPS en een redirect van
`kingdomservices.nl` naar `www.kingdomservices.nl` (of andersom, kies er
één).
