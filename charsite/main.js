const charid = window.location.search

const linkar = charid.split("=");
const id = linkar[1];
const char = data[id];

const con = document.getElementById('con');
const site = document.createElement('div');

site.innerHTML =
`
    <div id="title" style="text-align: center;">
        <h1>${char["element"]}:${char["name"]}</h1>
    </div>
`;

con.appendChild(site)
