class travelCities extends HTMLElement{
    constructor(){
        super()
        this.cities = [
            {src: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", 
            ref: "https://www.google.com/travel/things-to-do?dest_mid=%2Fm%2F07dfk&dest_state_type=main&dest_src=yts&authuser=1&tcfs=EhEKCC9tLzA3ZGZrEgVUb2tpbw#ttdm=35.642854_139.792202_11", 
            ciudad: "Tokio"},
            {src: "https://images.pexels.com/photos/161164/senso-ji-kyoto-japan-temple-161164.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", 
            ref: "https://www.google.com/travel/things-to-do?dest_mid=%2Fm%2F09d4_&dest_state_type=main&dest_src=yts&authuser=1#ttdm=34.975136_135.732489_11&ttdmf=%252525252Fm%252525252F05ldrm", 
            ciudad: "Kioto"},
            {src: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", 
            ref: "https://www.google.com/travel/things-to-do?dest_mid=%2Fm%2F0dqyw&dest_state_type=main&dest_src=yts&authuser=1&tcfs=EhEKCC9tLzBkcXl3EgVPc2FrYQ#ttdm=34.664780_135.477460_12", 
            ciudad: "Osaka"},
            {src:"https://images.pexels.com/photos/2389157/pexels-photo-2389157.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            ref: "",
            ciudad:"Yokohama"},
            {src:"https://images.pexels.com/photos/5720170/pexels-photo-5720170.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            ref: "",
            ciudad:"Nagoya"},
            {src:"https://images.pexels.com/photos/460738/pexels-photo-460738.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            ref: "",
            ciudad:"Kobe"},
        ]
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <h3>Ciudades</h3>
        <div class="cities-container" id="cities-container">
        </div>
        `;
        return template
    }
    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true))
        this.addCities()
    }
    connectedCallback(){
        this.render()
    }
    addCities(){
        const container = document.getElementById('cities-container')
        this.cities.forEach(e=>{
            container.innerHTML += `
            <div class="city-card">
                <img src="${e.src}" alt="${e.ciudad}" />
                <a href="${e.src}" target="_blank">${e.ciudad}</a>
            </div>
            `
        })
    }
}

customElements.define('travel-cities', travelCities)