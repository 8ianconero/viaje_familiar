import { startApp } from "..";
import { user } from "../utils/user";

class startSection extends HTMLElement{
    constructor(){
        super()
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <main class="start">
            <picture class='start-bg'>
                <source media='(min-width: 768px)' srcset='./assets/img/bg-medium.jpg'>
                <source media='(min-width: 1024px)' srcset='./assets/img/bg-large.jpg'>
                <img src='./assets/img/bg-small.jpg'>
            </picture>
            <div class='start-content' id='start-content'>
                <h1 class='heading-1 start-content__title'>Japón</h1>
                <button type="button" id="start-btn" class="start-content__btn btn-cta">Iniciar</button>
            </div>
        </main>
        `;
        return template
    }
    render(){
        this.append(this.getTemplate().content.cloneNode(true));
        this.querySelector('#start-btn').onclick = () => this.startForm()
    }
    connectedCallback(){
        this.render()
    }
    startForm(){
        let userExist = user.getData()
        if(userExist){
            startApp()
        }else{
            user.createUser()
            this.startForm()
        }
    }
}

customElements.define('start-section', startSection);