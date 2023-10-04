function portafolioComponent() {
    getPortafolio().then(data => {
        data.map(service => {
            const card = document.createElement('div')
            card.innerHTML = `
                <div class="portafolio-card">
                    <img src="https:${service.img}" />
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            `

            const servicesContainer = document.querySelector('.portafolio-container')
            servicesContainer.appendChild(card)
        })

    })
}


function getPortafolio() {
    return fetch('https://cdn.contentful.com/spaces/qzqmy881jhl7/environments/master/entries?access_token=ulXcAai_kE0WwBJT67-ywL1_ETyxE0m9MF5DJVtsgp0&content_type=portafolio').then(res => res.json()).then(data => {
        const services = data.items.map(s => {
            const assetId = s.fields.img.sys.id;
            const asset = data.includes.Asset.find((a) => a.sys.id == assetId);
            const img = asset.fields.file.url;
            return {
                title: s.fields.title,
                description: s.fields.description.content[0].content[0].value,
                img
            }
        })
        return services
    })
}


portafolioComponent()