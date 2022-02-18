class travelDates extends HTMLElement{
    constructor(){
        super()
        this.events = [{evento: 'Comprar boletos de avión', fecha: new Date(2022, 2)}]
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <h3>Fechas</h3>
        <div class="dates-container" id="dates-container">
        </div>
        `;
        return template
    }
    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true))
        this.addEvents()
    }
    connectedCallback(){
        this.render()
    }
    addEvents(){
        const container = document.getElementById('dates-container')
        this.events.forEach(e=>{
            container.innerHTML += `
            <div class="dates-card">
                <h4>${e.evento}</h4>
                <p>${e.fecha.toDateString()}</p>
            </div>
            `
        })
    }
}

customElements.define('travel-dates', travelDates)