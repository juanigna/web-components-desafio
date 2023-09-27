function headerComponent(element) {
    const componentMain = document.createElement('nav')
    componentMain.className = 'nav-container'
    componentMain.innerHTML = `
        <div class="nav-left-side">
            <h2>Tu logo</h2>
        </div>
        <div class="nav-right-side">
            <ul class="nav-right-side-items">
                <li>Portfolio</li>
                <li>Servicios</li>
                <li>Contacto</li>
            </ul>
            <img src="../assets/menu.svg" class="nav-right-side-menu"/>
            <div class="nav-right-side-menu-container">
                <img src="../assets/close.svg" class="nav-right-side-menu-close"/>
                <ul class="nav-right-side-items-mobile">
                    <li class="nav-right-side-items-mobile-item">Portfolio</li>
                    <li class="nav-right-side-items-mobile-item">Servicios</li>
                    <li class="nav-right-side-items-mobile-item">Contacto</li>
                </ul>
            </div>

        </div>
    `

    const abrir = componentMain.querySelector('.nav-right-side-menu')
    const cerrar = componentMain.querySelector('.nav-right-side-menu-close')
    const menuMobile = componentMain.querySelector('.nav-right-side-menu-container')



    abrir?.addEventListener('click', () => {
        menuMobile.style.display = "flex"
    })

    cerrar?.addEventListener('click', () => {
        menuMobile.style.display = "none"
    })

    // Add a listener to detect when the viewport size changes
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Adjust the max-width value as needed

    function handleViewportChange(e) {
        if (!e.matches) {

            // If viewport width is greater than 768px, hide mobile menu
            menuMobile.style.display = "none";
        }
    }

    mediaQuery.addEventListener("change", handleViewportChange); // Add listener
    handleViewportChange(mediaQuery);


    element.appendChild(componentMain)
}

