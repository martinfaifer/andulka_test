Po stažení je nutné provést instalaci laravel skrz composer install
Následuje úprava .env.example kde je nutné zadat DB_DATABASE následně provést php artisan migrate
Pro správné nactení frontendu je nutné nainstalovat node packages vcetne reactu a inertiajs npm install && npm watch

UserSeed obsahuje defaulnítho uzivatele admin@andulka.cz s heslem admin, pro vytvoření přístupů je nutné provést seed db pomocí php artisan db:seed

Aplikace využívá pro komunikaci fronentd / backend InertiaJs s podporou react.js

Jelikož aplikace využívá základních principů Laravelu tak tech. dok viz Laravel.com

Schéma DB 

![andulka](https://user-images.githubusercontent.com/51059458/194642778-d0b5cc57-4451-41d3-8ad7-52c6900924f6.png)


Aplikace je psána na rychlo tudíž je zde velký prostor na úpravu kódu co se týká single responsibility ( viz SOLID ).
Dále pro zrychlení aplikace se dá využít redis cache, v tabulkách se dá využít pagination apod. Možností je pousta, implementace weboscketu by také v tomto případě zjednodušila a zpřehlednila využití aplikace.



