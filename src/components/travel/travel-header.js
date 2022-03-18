class travelHeader extends HTMLElement{
    constructor(){
        super()
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <h3 class="heading-3 margin-s">Viaje</h3>
        <p class="margin">En esta sección podrás ver las fechas importantes y las ciudades a visitar.</p>
        `;
        return template
    }
    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define('travel-header', travelHeader)