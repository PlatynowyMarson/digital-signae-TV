# ANS Digital Signage na GitHub Pages

To jest samodzielny ekran dla telewizorow Samsung. Nie wymaga lokalnego serwera ani aplikacji administratora.

## Zmiana tresci

Otworz `admin.html`, aby edytowac tresc w osobnym panelu. Podaj nazwe
uzytkownika GitHub, repozytorium, galaz i token fine-grained z uprawnieniem
Contents: Read and write TYLKO do tego repozytorium. Token nie jest zapisywany.
Po wczytaniu repozytorium edytuj pozycje i kliknij Opublikuj. Mozesz tez
edytowac plik `index.html` recznie. Na poczatku sekcji `<body>` sa dwa obiekty:
`window.ANS_STATIC_DATA` (komunikaty, materialy, wydarzenia, obrony i wlaczone ekrany)
oraz `window.ANS_STATIC_NEWS` (aktualnosci WNE). Zapisz zmiany w repozytorium,
a potem odswiez strone w przegladarce TV. Zegar i zmiana plansz dzialaja lokalnie.

Nie umieszczaj w publicznym repozytorium danych osobowych bez zgody i prawa publikacji.
Sprawdz tez prawa do logotypow i zdjec. W tej paczce jest kopia danych projektu,
ktora moze roznic sie od danych zapisanych w uruchomionej aplikacji administratora.
Aktualnosci WNE nie pobieraja sie automatycznie; zmieniaj je w edytorze
lub w HTML.
Licznik transferu konkretnego telewizora zobaczysz pod adresem strony z
`?stats=1` na koncu. Jesli przegladarka nie obsuguje Performance API,
pomiar bedzie niedostepny. Edytor pokazuje dodatkowo przyblizony transfer.

## Publikacja

Wgraj ZAWARTOSC tego katalogu do osobnego publicznego repozytorium GitHub.
W Settings > Pages wybierz Deploy from a branch, branch main, folder /(root).
Adres bedzie mial postac https://NAZWA.github.io/REPOZYTORIUM/ .
Najpierw sprawdz wyswietlanie na jednym telewizorze. Nie zmieniaj jeszcze adresow
na wszystkich ekranach, zanim nie potwierdzisz dzialania przegladarki Samsung.

Plik jest w pelni statyczny: nie zapisuje zmian z panelu admina, nie steruje
zasilaniem TV i nie odtwarza filmow z lokalnego serwera.
