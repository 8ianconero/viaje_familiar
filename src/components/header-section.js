import { start } from "..";

class headerSection extends HTMLElement{
    constructor(){
        super()
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
            <nav class="header-nav">
                <p class="body header-nav__title">Viaje a Japón 2024</p>
                <button class="header-nav__btn" id="user-menu"><i class="fas fa-user-circle"></i></button>
                <div class="header-logout" id="header-logout">
                    <button class="header-logout__btn" id="header-logout__btn">Cerrar sesión</button>
                </div>
            </nav>
        `;
        return template
    }
    render(){
        this.append(this.getTemplate().content.cloneNode(true));
        this.querySelector('#user-menu').onclick = () => this.logout();
    }
    connectedCallback(){
        this.render();
    }
    logout(){
        const logoutBtn = this.querySelector('#header-logout');
        logoutBtn.classList.toggle("header-logout--active");
        this.querySelector('#header-logout__btn').onclick = () => start()
    }
}

customElements.define('header-section', headerSection);