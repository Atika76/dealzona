# DealZóna – átnézett, javított verzió

## Amit most javítottam
- jobb mobil menü
- saját favicon / logó
- kereső a termékekhez
- a rendelési űrlap már előkészített e-mailt nyit meg
- kattintható e-mail és telefonszám
- tisztább termék-szállítás jelzés

## Fontos teendő feltöltés előtt
Ezt a 3 dolgot írd át:
1. `script.js` → `const TARGET_EMAIL = 'sajat@email.hu';`
2. `index.html` footerben az e-mail cím
3. `index.html` footerben a telefonszám

## Feltöltés GitHubra
1. Csomagold ki a ZIP-et
2. Új repository vagy meglévő repo gyökerébe másold be:
   - index.html
   - styles.css
   - script.js
   - favicon.svg
3. GitHub → Settings → Pages → Deploy from branch
4. main / root
5. Mentsd el

## Őszinte vélemény
Ez már jó alap egy induló, figyelemfelkeltő bemutató / rendelésgyűjtő oldalnak.
Viszont még nem teljes webshop motor.

Ha később komolyabbat akarsz, a következő szint:
- Supabase rendelésmentés
- admin felület
- termékfeltöltő oldal
- valódi fizetés
- külön termékoldalak
