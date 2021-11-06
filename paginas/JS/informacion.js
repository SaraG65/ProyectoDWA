document.addEventListener('DOMContentLoaded', async (e) => {
    let { pathname, search } = window.location;
  
    let { id } = search
      .split('?')
      .map((pair) => {
        if (pair !== '') return pair.split('=');
      })
      .filter((values) => values)
      .reduce((json, params) => {
        let key = params[0];
        let value = params[1];
        return { ...json, [key]: value };
      }, {});
  
    // si no existe id por parametro nos redirecciona a index
    if (!id) window.location.href = '../index.html';
  
    let info = await fetch(
      'https://raw.githubusercontent.com/SaraG65/Proyecto-DWA/master/data/info.json'
    ).then((res) => res.json());
  
    let informacion = info.find((p) => p.id == id);
  
    // Si no existe la información en la data
    if (!informacion) window.location.href = '../index.html';
  
    let InfoData = document.getElementById('infoContainer');
   
    let noticiasHtml = `
      <h3 class="card-title" style="font-style: italic; color: #1e212e;">
        ${informacion.titulo}
      </h3><br>
      <p class="text-muted">
        ${informacion.subtitulo}
      </p>
      <img src= "images/${informacion.images}.jpg" class="img-fluid  img-thumbnail">
      <p class="card-text" style="text-align:justify;"><br>
         ${informacion.dato1}
      </p><br>
      <p class="card-text" style="text-align:justify;">
        ${informacion.dato2}
      </p><br>
      <p class="card-text" style="text-align:justify;">
        ${informacion.dato3}
      </p><br>
      <img src= "images/${informacion.images2}.jpg" class="img-fluid  img-thumbnail">
      <h4 class="card-title" style="font-style: oblique; color:black;"><br>
        ${informacion.titulo2}
      </h4><br>
      <p class="card-text" style="text-align:justify;">
        ${informacion.dato4}
      </p><br>
      <p class="card-text" style="text-align:justify;">
        ${informacion.dato5}
      </p><br>                            
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    `;
  
    InfoData.innerHTML = noticiasHtml;
  });
  