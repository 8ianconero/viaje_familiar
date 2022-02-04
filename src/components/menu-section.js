import { appContainer, contentApp } from "..";

class menuSection extends HTMLElement{
    constructor(){
        super()
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <footer>
            <button class="home-option menu-option" id="menu-home">
                <i class="fas fa-home"></i>
                <p class="menu-text text-s" data-tagname="expenses">Inicio</p>
            </button>
            <button class="expenses-option menu-option" data-tagname="expenses" id="menu-expenses">
                <i class="fas fa-dollar-sign"></i>
                <p class="menu-text text-s" data-tagname="expenses">Presupuesto</p>
            </button>
            <button class="travel-option menu-option" data-tagname="travel" id="menu-travel">
                <i class="fas fa-plane-departure"></i>
                <p class="menu-text text-s" data-tagname="travel">Viaje</p>
            </button>
            <button class="rtj-option menu-option" data-tagname="rtj" id="menu-rtj">
                <i class="fas fa-hiking"></i>
                <p class="menu-text text-s" data-tagname="rtj">RtJ</p>
            </button>
        </footer>
        `;
        return template
    }
    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true))
        this.start()
        this.querySelector('#menu-home').onclick = () => this.home()
        this.querySelector('#menu-expenses').onclick = () => this.expenses()
        this.querySelector('#menu-travel').onclick = () => this.travel()
        this.querySelector('#menu-rtj').onclick = () => this.rtj()
    }
    connectedCallback(){
        this.render()
    }
    start(){
        const remove = this.querySelector('.menu-option--active')
        if(!remove){
            const option = this.querySelector('#menu-home')
            option.classList.add('menu-option--active')
            contentApp()
        }
    }
    home(){
        const option = this.querySelector('#menu-home')
        const remove = this.querySelector('.menu-option--active')
        remove.classList.remove('menu-option--active')
        option.classList.add('menu-option--active')
        contentApp('home')
    }
    expenses(){
        const option = this.querySelector('#menu-expenses')
        const remove = this.querySelector('.menu-option--active')
        remove.classList.remove('menu-option--active')
        option.classList.add('menu-option--active')
        contentApp('expenses')
    }
    travel(){
        const option = this.querySelector('#menu-travel')
        const remove = this.querySelector('.menu-option--active')
        remove.classList.remove('menu-option--active')
        option.classList.add('menu-option--active')
        contentApp('travel')
    }
    rtj(){
        const option = this.querySelector('#menu-rtj')
        const remove = this.querySelector('.menu-option--active')
        remove.classList.remove('menu-option--active')
        option.classList.add('menu-option--active')
        contentApp('rtj')
    }
}

customElements.define('menu-section', menuSection)