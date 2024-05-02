/**
 * Funciones que se ejecutan cuando se carga totalmente la ventana
 */
window.addEventListener("load", () => {
  const session=JSON.parse(sessionStorage.getItem("data"));
  console.log(session);
  if(session===null){
    insertNavBar();
  }else if(session.rol==="admin"){
    insertNavBarAdmin();
  }

  insertFooter();
  //alert("Entra");
});

/**
 * Inserta el navbar en la página
 */
function insertNavBar() {
  const pathHome = "index.html";
  const pathProduct = "productsView.html";
  const catEquipoMate="EquipoMate";
  const catMate="Mate";
  const contact="contactForm.html";
  let header = document.getElementById("header");
  let headerContainer = document.createElement("div");
  let imgContainer = document.createElement("div");
  headerContainer.setAttribute(
    "class",
    "d-flex justify-content-center optionBar sticky-top"
  );
  //crea los datos del contenedor de la imagen del logo
  imgContainer.innerHTML = `
      <div class='container d-lg-flex justify-content-center mt-3 mb-5'>
            <div class='row'>
                  <div class='col-lg-5 col-md-12'>
                        <img src='assets/img/logos/logo-8.png' class="img-fluid"/>
                  </div>

                  <div class='col-lg-7 col-md-12 d-flex align-items-center 
                        opcionesRegistro'>
                       <div class="container ms-lg-5">
                          <div class="row ms-5 fw-bold">
                              <div class="col-7 col-sm-8">
                              <a href="newResponsiveForm.html" class="bi bi-people-fill">
                                    Registrarse
                              </a>
                              </div>

                              <div class="col-5 col-sm-4">
                              <a href="formLogin.html" class="bi bi-bookmark-check">
                                  Login
                              </a>
                              </div>
                          </div>
                       </div>
                   </div>
            </div>
      </div>  

    
    `;
  //crea los datos de la barra de navegación
  headerContainer.innerHTML = `
  <nav class="navbar sticky-top">
  <div class="container-fluid">
  <button class="btn d-lg-none hamburgerBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar" aria-controls="navbar">
  <i class="fa-solid fa-bars"></i>

</button>
<div class="offcanvas-lg offcanvas-end" tabindex="-1" id="navbar" aria-labelledby="offcanvasResponsiveLabel">
<div class="offcanvas-header">
<button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#navbar" aria-label="Close"></button>
</div>
<div class="offcanvas-body optionBar">

<nav class="navbar navbar-expand-lg">
<div class="container-fluid">
 <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
   <li class="nav-item">
     <a class="nav-link" aria-current="page" href="${pathHome}">Home</a>
   </li>

  
   <li class="nav-item dropdown">
     <a class="nav-link dropdown-toggle" href="${pathProduct}"role="button" data-bs-toggle="dropdown" aria-expanded="false">
       Productos
     </a>
     <ul class="dropdown-menu optionBar">
       <li><a class="dropdown-item" id="equipoMate"
       onclick="getProduct('${catEquipoMate}')">
       Equipos De Mate</a></li>
       <li><a class="dropdown-item" id="mate"
       onclick="getProduct('${catMate}')">Mate</a></li>
       <li><a class="dropdown-item" id="termo-mate">Termos y Mates</a></li>
       <li><a class="dropdown-item" id="latas">Juego De Latas</a></li>
       <li><a class="dropdown-item" id="bolsos">Bolsos Materos</a></li>
     </ul>
    
    </li>
    
    
   <li class="nav-item">
   <a class="nav-link" aria-current="page" href="#">Info</a>
   </li>

 
 <li class="nav-item">
     <a class="nav-link" aria-current="page" href='${contact}'>Contacto</a>
 </li>
 </ul>

</div>
</nav>
</div>
</div>
</div>

  </div>
</nav>
   
    `;
  //agrega la imagen y la barra de navegación en la página
  header.append(imgContainer);
  header.append(headerContainer);
}

function insertFooter() {
  let footer = document.getElementById("footer");
  let footerContainer = document.createElement("div");
  footerContainer.setAttribute("class", "footer-container");
  footerContainer.setAttribute("id", "footer-container");
  footerContainer.innerHTML = `
  <div class="footer-row">
  <div class="footer-links">
      <h4>Comercialización</h4>
      <ul>
          <li>
              <a href="">
                  ¿Quienes Somos?
              </a>
              
          </li>
          <li>
              <a href="">
                  Politicas de privacidad
              </a>
             
          </li>
          <li>
              <a href="">
                  Contacto
              </a>
             
          </li>
      </ul>
  </div>
  <div class="footer-links">
      <h4>Contactos</h4>
      <ul>
          <li>
  
              <i class="fa-solid fa-mobile-screen">
                  3794-876543
              </i>
              
          </li>
          <li>
              <i class="fa-regular fa-envelope">
                  almacen_de_mates@almacen.com
              </i>
              
          </li>
          <li>
              <i class="fa-solid fa-house">
                  Calle Evergreen 1234
              </i>

              
          </li>
      </ul>
  </div>
  <div class="footer-links">
      <h4>Contáctanos</h4>
      <div class="footer-social">
          <a href="">
              <i class="fa-brands fa-facebook-messenger">
                 
              </i>
          </a>
          <a href="">
              <i class="fa-brands fa-x-twitter">
                 
              </i>
          </a>
          <a href="">
              <i class="fa-brands fa-square-instagram">
                  
              </i>
          </a>
        
      </div>
      
  </div>
</div>
    
    `;
  footer.append(footerContainer);
}

function insertNavBarAdmin() {
 
  let header = document.getElementById("header");
  let headerContainer = document.createElement("div");
  //let imgContainer = document.createElement("div");
  header.setAttribute('class','sticky-top');
  headerContainer.setAttribute(
    "class",
    "d-flex justify-content-center optionBar"
  );

  
  //crea los datos de la barra de navegación
  headerContainer.innerHTML = `
    <button class="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
             <i class="bi bi-list"></i>
    
    </button>
          <div class="offcanvas-lg offcanvas-end optionBar" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" onclick="cerrarSesion()">Cerrar Sesión</a>
              </li>
      </nav>
        </div>
      </div>
    
    
    `;
  //agrega la imagen y la barra de navegación en la página
  //header.append(imgContainer);
  header.append(headerContainer);
}



/*function getAbsolutePath() {
  /**
   * Código obtenido de: https://cybmeta.com/obtener-la-url-de-la-pagina-actual-con-javascript-y-sus-componentes
  // *
  var loc = window.location;
  var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf("/") + 1);
  return loc.href.substring(
    0,
    loc.href.length -
      ((loc.pathname + loc.search + loc.hash).length - pathName.length)
  );
}*/
