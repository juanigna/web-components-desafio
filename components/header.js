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
        </div>
    `

    element.appendChild(componentMain)
}