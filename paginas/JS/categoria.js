document.addEventListener('DOMContentLoaded', async (e) => {
    let { pathname, search } = window.location;
  
    let { nombre } = search
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
    if (!nombre) window.location.href = '../index.html';
  
    let info = await fetch(
      'https://raw.githubusercontent.com/SaraG65/Proyecto-DWA/master/data/info.json'
    ).then((res) => res.json());
  
    let noticiasCategoria = info.filter((p) => p.categoria == nombre);
  
    // Si no se encuentra ninguna información con esa categoria regresar al index
    if (noticiasCategoria.length === 0)
      window.location.href = '../index.html';
  
    let infoContainer = document.getElementById('infoContainer');
    let NombreCategoria = document.getElementById('nombreCategoria');
  
    let noticiasHtml = noticiasCategoria
      .map((informacion, index) => {
        const { images, subtitulo, titulo, id } = informacion;
        const imageUrl = `paginas/images/${images}.jpg`;

        return `
          <div class="col-md-3">
            <div class="card mb-4 border-0 shadow-sm card:effect">
              <img src="${imageUrl}" alt="" class="card-img-top card:img:crop">
              <div class="card-body">
              <h5 class="card-title" style="font-style: italic; color: #1e212e;">
                  ${titulo}
              </h3>
              <p class="text font-weight-light">${subtitulo}</p>
              </div>
                <a class="btn btn-outline-info btn-sm" href="paginas/noticias.html?id=${id}" id="noticiasUrl">
                  <i class="bi bi-plus-square me-2 pe-none"></i>
                  <span class="pe-none">Leer más</span>
                </a>
              </div>
            </div>
          </div>
        `;
      })
      .join(',')
      .replace(/\,/g, '')
      .toString();
  
    infoContainer.innerHTML = noticiasHtml;
    NombreCategoria.innerHTML = nombre;
  });