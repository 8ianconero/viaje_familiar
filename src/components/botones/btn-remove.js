import { user } from "../../utils/user";

class btnRemove extends HTMLElement{
    constructor(){
        super()
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <button class="item-remove__btn" id="savings-remove">Borrar</button>
        `;
        return template
    }
    render(){
        this.append(this.getTemplate().content.cloneNode(true));
        this.removeSavings()
    }
    connectedCallback(){
        this.render();
    }
    removeSavings(){
        const btn = document.getElementById('savings-remove')
        btn.addEventListener('click', (e=>{
            user.updateSaves(0)
        }))
    }
}

customElements.define('btn-remove', btnRemove);