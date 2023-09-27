function contactComponent(element) {
    const mainComponent = document.createElement('div')
    mainComponent.innerHTML = `
    <div class="container contact-container">
            <h2 class="contact-title">Escribime</h2>
            <form class="form-container">
                <label class="name">
                    <p>Nombre</p>
                    <input type="text" placeholder="Tu nombre" class="form-input" />
                </label>
                <label class="email">
                    Email
                    <input type="email" placeholder="tu@gmail.com" class="form-input" />
                </label>
                <label class="mensaje">
                    Mensaje
                    <textarea class="form-textarea"></textarea>
                </label>
                <button class="form-button">Enviar 🛩️</button>
            </form>
    </div>
    `

    element.appendChild(mainComponent)
}