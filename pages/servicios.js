function servicesComponent(element) {
    getServices().then(data => {
        data.map(service => {
            const card = document.createElement('div')
            card.innerHTML = `
                <div class="services-card">
                    <img src="https:${service.img}" />
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            `

            element.appendChild(card)
        })

    })
}


function getServices() {
    return fetch('https://cdn.contentful.com/spaces/qzqmy881jhl7/environments/master/entries?access_token=ulXcAai_kE0WwBJT67-ywL1_ETyxE0m9MF5DJVtsgp0&content_type=webComponents').then(res => res.json()).then(data => {
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
        // const obj = {
        //     title: data.items[0].fields.title,
        //     description: data.items[0].fields.description.content[0].content[0].value,
        //     img: data.includes.Asset[0].fields.file.url
        // }
        // return [obj]
    })
}
