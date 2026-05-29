Exercice 1 : Configuration


Question 1.1  Le dataProvider est effectivement l'objet qui fait le pont entre React-Admin et l'API (dans ce cas, l'URL http://localhost:3002)
. Son rôle est de traduire les commandes de l'interface en requêtes HTTP CRUD compréhensibles par le serveur


Question 1.2 :Le chargement d'une liste déclenche une requête GET
. L'exemple de paramètres que vous donnez (_sort, _order, _start, _end) correspond typiquement au fonctionnement du ra-data-json-server installé dans l'exercice



Exercice 2 : Liste des employés
Question 2.1 (rowClick="edit") : Votre réponse est juste. Cette prop définit l'action déclenchée au clic sur une ligne du Datagrid, ici la redirection vers la vue d'édition



Question 2.2 (perPage={2}) :Cela modifie le paramètre de pagination de la liste, limitant l'affichage à deux éléments par page comme demandé par la modification de la configuration par défaut (qui était de 5)



Exercice 3 : Création d'un employé
Question 3.1 (Prénom vide) : Puisque le champ "Prénom" est marqué comme Obligatoire dans les consignes, l'absence de saisie bloque la soumission via une validation required



Question 3.2 (Salaire de 500€) L'exercice impose une validation min 1500 pour le salaire
. Une erreur s'affichera donc car 500 est inférieur au minimum requis.



Exercice 4 : Modification d'un employé
Question 4.1 (Méthode HTTP) :  Avec json-server, la mise à jour d'une ressource existante utilise généralement la méthode PUT (ou parfois PATCH)




Question 4.2 (useRecordContext) :Ce hook permet d'accéder aux données de l'employé courant (pour le titre de la page par exemple) et il est undefined tant que la requête de récupération n'a pas abouti



Exercice 5 : Fiche détail
Question 5.1 (Layouts) :  Le SimpleShowLayout empile les champs verticalement, tandis que le TabbedShowLayout permet de les regrouper sous des onglets cliquables pour une meilleure organisation
.
