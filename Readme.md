## Carpool Webapplikation mit Python REST API und Docker Datenbank

### Ziel:
Eine Postgresql Datenbank soll über Docker betrieben werden und mithilfe einer Python REST API in einer Webapplikation mit Angular demonstriert werden.

### Aufbau:

##### PythonAPI/
In dieser Datei findet ihr alles was ihr für die REST API in Python benötigt.
##### CARPoolAngular/
Hier findet ihr die Angular Webapplikation, mit Ausnahme der node_module

### Installation:

 Sowohl zu der Erstellung einer Python REST API, als auch zu der Erstellung der Webapplikation, habe ich einen Blogpost erfasst, diese findet ihr unter:
* Python REST API: https://www.esentri.com/python-rest-api-101
* Angular : https://www.esentri.com/angular-demonstration-rest-api
#### Generell
* Klonen des Git Repository in eurem lokalen Ordner
#### Python REST API
* Python Umgebung installieren, siehe dazu den Blogpost Python REST API, dort erkläre ich alles von Anfang bis Ende
####  Für Angular Webapplikation
* Node.js installieren, falls nichts vorhanden https://nodejs.org/en/download/
* In deinem lokalen CarPoolAngular Verzeichnis den Befehl ‘npm install‘ ausführen, um die node_modules zu erzeugen
* 'ng serve --open' öffnet einen Dev Server mit 'http://localhost:4200/'