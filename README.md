# 🌍 Projecte Web de Geografia

## 1. Tema / Motivació

Com a ciclista i veient la necessitat d'una web que recollís les rutes més emblemàtiques del territori català, vaig decidir crear-ne una que integrés tota aquesta informació en un sol lloc, acompanyada d’un mapa interactiu que les mostra de manera clara i visual.

## 2. Dades / Continguts

Les dades i materials utilitzats a la web provenen de fonts oficials i fiables com:
- **Institut Cartogràfic i Geològic de Catalunya (ICGC)**
- **Google maps**
- **OpenStreetMap**
- **Wikiloc**
- Textos redactats a partir d'informació contrastada 

## 3. Estructura de la Web

La web està estructurada en diverses seccions:
- **Inici**: Presentació general del tema
- **Membres**: Secció dedicada a conèixer els membres que participen en el projecte
- **Projectes**: Aquí es troben totes les rutes del territori català
- **Mapa**: Mapa interactiu que mostra la informació annterior de manera visual i interactiva
- **Contacte**: Formulari de contacte per proposar millores o comunicar incidències 

## 4. Web Responsive

Per fer la web adaptativa a diferents dispositius (mòbil, tauleta, ordinador) s’ha utilitzat:
- **Media Queries en CSS** per canviar el disseny segons la mida de pantalla
- **Unitats relatives (%, em, rem)** per evitar dissenys rígids
- **Imatges amb resolució adequada** i amb propietats `max-width: 100%` per evitar desbordaments
- Menú adaptat per a dispositius mòbils: Per fer que el menú de navegació funcioni correctament en dispositius petits com els mòbils, he afegit un botó tipus "hamburguesa" (☰) que apareix només en pantalles petites gràcies a les classes w3-hide-large i w3-hide-medium de W3.CSS. Quan l’usuari fa clic en aquest botó, s’executa una funció JavaScript (toggleMenu()) que mostra o amaga un menú vertical ocult per defecte (#mobileMenu) amb les mateixes opcions de navegació que el menú principal.

## 5. Cartografia.

Llegenda personalitzada: He creat una llegenda a la part inferior dreta del mapa per ajudar a identificar visualment cada recorregut. A cada color li correspon un traçat concret, i també he afegit una imatge d’una bicicleta per representar l’inici de ruta. Aquesta llegenda està feta amb codi HTML dins de Leaflet i em permet explicar el significat dels elements que apareixen al mapa d'una manera clara i intuïtiva.

Buscador (Geocoder): Per facilitar la navegació, he afegit un cercador interactiu al mapa. Gràcies a la llibreria `leaflet-control-geocoder`, els usuaris poden introduir el nom d’un lloc i localitzar-lo automàticament. Aquest element fa el mapa més útil i accessible.

Aglomeració de punts (Clustering): Com que alguns punts d’inici de ruta poden estar molt junts, he implementat un sistema d’aglomeració amb la llibreria `leaflet.markercluster`. Això permet que els marcadors es mostrin agrupats i s’expandeixin només quan es fa zoom, evitant que se solapin. També he personalitzat aquests punts amb una icona de bicicleta.

Altres:
* He afegit una capa base amb imatge satèl·lit de Google Maps per millorar la visualització.
* Cada recorregut està estilitzat amb un color diferent i inclou popups amb informació detallada (nom, descripció, enllaços...).
* He fet servir la llibreria `Autolinker` per convertir enllaços de text en clicables dins els popups.
* Per millorar l’organització i visibilitat dels elements, també he integrat `labelgun` i `rbush`.

## 6. Dificultats / Millores

Durant el desenvolupament es van presentar dificultats com:
- Adaptar la Web a W3
- Adaptació de continguts per a dispositius petits
- Mal funcionament de Git-hub

Millores futures:
- Afegir més contingut
- Traducció multilingüe de la web
- Optimització del rendiment i temps de càrrega, sobretot de les fotos





## 📌 Tecnologies Utilitzades

- HTML5 / CSS3
- JavaScript
- Leaflet.js
- Git / GitHub

## 👤 Autoria

Projecte realitzat per: Josep Francesc Pradell Santalla
Assignatura de Geografia – PRODUCCIÓ I DISSENY CARTOGRÀFIC. EINES WEB (21234127)
Data: 07/05/2025



