import { user } from "../../utils/data";

class homeGreet extends HTMLElement{
    constructor(){
        super()
        this.name = user.nombre
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <h2 class="heading-2 margin-l">Bienvenido(a) <span class="greet-name">${this.name}</span></h2>
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

customElements.define('home-greet', homeGreet)