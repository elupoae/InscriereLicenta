<h1> Product Backlog</h1>
<p>Actori: Student, Profesor, Secretar</p>

<h2>Fisa de cerinte:</h2>
<ul>
<li>Login, folosind email si parola, trebuie sa corespunda cu cele existente in baza de date.</li>
<li>Register, posibilitatea de a crea un cont de student sau profesor. In cazul contului de student, va folosi confirmare prin intermediul unui cod transmis prin email ce va fi valid timp de un minut.
Pentru conturile de profesori va mai fi nevoie si de confirmare din partea adminului.</li>
<li>Dacă datele introduse sunt valide, atunci populăm baza de date.</li>
<li>Dacă datele nu sunt corecte/valide, trimitem către modulul de front end un mesaj corespunzător.</li>
</ul>

<p><b>Pachetul Student : </b></p>
<ul>
<li>Se inscrie pentru sustinerea lucrarii de licenta.</li>
<li>Comunicarea cu baza de date pentru a trimite spre modulul de frontend programarea studentului la o anumita comisie(aceasta incluzand ora,sala si comisia).</li>
</ul>

<p><b>Pachetul Profesor:</b></p>
<ul>
<li>Poate vedea comisia careia ii apartine si lista studentilor programati la acea comisie.</li>
<li>Poate vedea lista studentilor si programarile acestora (ora si comisie).</li>
<li>Poate cauta un anumit student pentru a-i vedea programarea.</li>
</ul>
<p>Daca are statutul de "secretar in comisie" : </p>
<ul>
<li>Poate modifica ordinea studentilor programati la aceasi comisie.</li>
</ul>

<p><b>Pachetul Secretar:</b></p>
<ul>
<li>Introduce in baza de date comisiile prestabilite.</li>
<li>Poate vedea lista programarilor, a comisiilor si a studentilor.</li>
<li>Poate cauta un anumit student pentru a-i vedea programarea.</li>
<li>Administreaza conturile.</li>
</ul>
