function footerComponent() {
    const mainComponent = document.createElement('div')
    mainComponent.innerHTML = `
        <div class="container footer-container">
        <div class="footer-logo">
            <h4>Tu logo</h4>
        </div>
        <div class="footer-logos">
            <div class="footer-logo">
                <img src="./assets/home.png" />
                <p>Home</p>
            </div>
            <div class="footer-logo">
                <img src="./assets/user.svg" />
                <p>Servicios</p>
            </div>
            <div class="footer-logo">
                <img src="./assets/phone.svg" />
                <p>Contacto</p>
            </div>
        </div>
        <div class="footer-logos footer-logos-social">
            <div class="footer-logo-social">
                <img src="./assets/github.svg" />
            </div>
            <div class="footer-logo-social">
                <img src="./assets/linkedin.svg" />
            </div>
            <div class="footer-logo-social">
                <img src="./assets/twitter.svg" />
            </div>
        </div>
        <p class="footer-text">©2022 - https://apx.school</p>
    </div>
    `
    const footerContainer = document.querySelector('.footer')
    footerContainer.appendChild(mainComponent)
}

footerComponent()