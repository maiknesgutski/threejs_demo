<!-- @author: Maik Nesgutski -->
# Dockerized Three.js webapp demo

In dieser kleinen Webapp Demo wird einmal eine three.js Szene instanziiert.
Dies soll ein kleiner Ort zum ausprobieren und lernen sein.

Hierbei wird aktuell nur ein grüner Würfel animiert, welcher sich dreht. Die Kamera ist hierbei statisch.

Nach der Einrichtung ist das Projekt unter der URL: <http://localhost:9595> aufzurufen.

## Setup

Klont euch das Repository: 

Für die Inbetriebname des Projektes muss zuerst das Docker-Image erstellt werden. Dies kann mit folgendem Befehl gemacht werden:

```bash
docker build . -t {TAG}
```

- . steht für das aktuelle Verzeichnis, in dem sich die *Dockerfile* befindet.
- {TAG} steht für das zu vergebene tag für das IMAGE.

## Inbetriebnahme

Für den Start des Docker-Containers sollte folgender Befehl genutzt werden:

```bash
docker run -d -p 9595:9595 {TAG}
```

- {TAG} steht dabei für das zuvor vergebene tag für das erstellte Image.

## Veränderungen an der Demo

In dieser Demo gibt es 3 Dateien die zu beachten sind.

- server.js -> Diese Datei wird von Node.js ausgeführt und stellt unseren sehr minimalistischen Webserver dar.

- public/js/index.js -> Diese Datei wird in der index.html eingebunden und beinhaltet den code für Animation bzw. Szenen-Erstellung.

- public/index.html -> Dies ist die HTML-Datei, die von dem Webserver ausgespielt wird.

**WICHTIG** : Sobald Änderungen an jeglichen Dateien durchgeführt wurden, muss ein neues Image erstellt werden und ein neuer Container gestartet werden. Dies bedeutet die Schritte **SETUP & INBETRIEBNAHME** müssen wiederholt werden.
