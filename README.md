## O aplikacji

Strona internetowa będąca pewną alternatywną, estetyczniejszą formą mojego CV. Strona składa się z czterech podstron:

1. Strona główna - składa się z sekcji streszczających niektóre informacje o mnie ( aktualnie lorem ipsum xd). Sekcje
   urozmaicone są ilustracjami i prostymi, lecz satysfakcjonującymi animacjami.
2. Projekty - zawiera krótkie opisy projektów programistycznych, w których brałem udział, powiązane z nimi ilustracje
   oraz odnośniki.
3. Hobby - galeria zdjęć wykutych przeze mnie przedmiotów. Jest ich więcej, tylko nie miałem akurat zdjęć.
4. Kontakt - zawiera formularz kontaktowy, dzięki któremu można wysłać do mnie maila. Wykorzystuje HeroTofu.

Strona posiada współdzielony między podstronami nagłówek, pozwalający przejść do mojego profilu na LinkedIn, opisanych
wyżej podstron, oraz na zmianę schematu kolorów.

## Uruchomienie aplikacji

Do uruchomienia aplikacji w trybie developerskim wymagany jest zainstalowany node.js i npm.
Aby uruchomić aplikację lokalnie należy pobrać pliki źródłowe.
Następnie, wewnątrz katalogu projektu wykonać polecenia:

### `npm install`

### `npm start`

Wówczas powinien zostać uruchomiony serwer, a aplikacja powinna być dostępna pod adresem:
### http://localhost:3000.

Aplikacja jest także dostępna na platformie Netlify pod adresem:

### https://rimbibimbi.netlify.app

## Wykorzystane technologie i rozwiązania

### React.js
Strona nie jest zbyt skomplikowana, a użycie react.js jest zdecydowanym overkillem. Użycie tej technologii miało charakter czysto ćwiczeniowy.

### HeroTofu
Obsługa wysyłki maili. Funkcjonalność działa (a przynajmniej działała zaraz po upublicznieniu strony), jednak nie odwiedzam swojej skrzynki na HeroTofu, więc efektywnie maile do mnie nie docierają.

### LocalStorage
Przechowywanie ustawiionego schematu kolorów.

### Netlify
Deploy na Netlify ze względu na znajomość i darmowość platformy i łatwość wykonania.
