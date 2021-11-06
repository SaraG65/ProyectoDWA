(() => {
    document.addEventListener('DOMContentLoaded', async (e) => {
      let info = await fetch(
        'https://raw.githubusercontent.com/SaraG65/Proyecto-DWA/master/data/info.json'
      ).then((res) => res.json());
  
      let infoContainer = document.getElementById('infoContainer');
  
      let noticiasHtml = info
        .map((informacion) => {
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
    });
  })();