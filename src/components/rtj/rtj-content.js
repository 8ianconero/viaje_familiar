import { user } from "../../utils/user";

class rtjContent extends HTMLElement{
    constructor(){
        super()
        this.userData = [user.getData()]
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <div class="rtj-container" >
            <div class="rtj-content" id="rtj-content"></div?
        </div>
        `;
        return template
    }

    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true))
        this.addUsers()
    }
    connectedCallback(){
        this.render()
    }
    addUsers(){
        const container = document.getElementById('rtj-content')
        this.userData.forEach(e=>{
            container.innerHTML += `
            <div class="rtj-user">
                <h4>${e.nombre}</h4>
            </div>
            <div class="rtj-progress">
                <div class="bar" id="bar">
                    <div class="progress-bar" id="progress-bar" style="width:${e.progreso}%"></div>
                </div>
                <p>${e.progreso}%</p>
            </div>
            `
        })
    }
}

customElements.define('rtj-content', rtjContent)