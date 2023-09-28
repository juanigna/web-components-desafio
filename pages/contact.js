function contactComponent() {
    const mainComponent = document.createElement('div')
    mainComponent.innerHTML = `
    <div class="container contact-container">
            <h2 class="contact-title">Escribime</h2>
            <form class="form-container">
                <label class="name">
                    <p>Nombre</p>
                    <input type="text"  class="form-input" name="nombre"/>
                </label>
                <label class="email">
                    Email
                    <input type="email"  class="form-input" name="email"/>
                </label>
                <label class="mensaje">
                    Mensaje
                    <textarea class="form-textarea" name="mensaje"></textarea>
                </label>
                <button class="form-button" type="submit">Enviar 🛩️</button>
            </form>
    </div>
    `

    const form = mainComponent.querySelector('.form-container')
    const contactContainer = document.querySelector('.contact')
    contactContainer.appendChild(mainComponent)
    sendEmail(form)
}

async function sendEmail(form) {


    form?.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        const nombre = formData.get('nombre')
        const email = formData.get('email')
        const mensaje = formData.get('mensaje')



        fetch('https://apx-api.vercel.app/api/utils/dwf', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                to: email,
                message: mensaje
            })
        })

        let data = `Nombre:${nombre},email:${email},Mensaje:${mensaje}`
        console.log(data)
    });
}

function main() {
    contactComponent()
    sendEmail()
}

main()