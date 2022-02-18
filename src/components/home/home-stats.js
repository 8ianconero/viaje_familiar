import { user } from "../../utils/user";

class homeStats extends HTMLElement{
    constructor(){
        super()
        this.user = user.getData()
        this.gastos = this.user.gastos
        this.ahorros = this.user.ahorros
        this.progreso = this.user.progreso
        this.rank = this.user.rank
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <section class="stats-container margin-l">
            <h4 class='stats-container__title heading-4 margin'>Mis stats</h4>
            <div class='cards-container'>
                <div class='card'>
                    <i class="fas fa-dollar-sign"></i>
                    <p class='card__title text'>Gastos</p>
                    <p class='card__text text-bold'>$${this.gastos}</p>
                </div>
                <div class='card'>
                    <i class="fas fa-piggy-bank"></i>
                    <p class='card__title text'>Ahorro</p>
                    <p class='card__text text-bold'>$${this.ahorros}</p>
                </div>
                <div class='card'>
                    <i class="fas fa-spinner"></i>
                    <p class='card__title text'>Progreso</p>
                    <p class='card__text text-bold'>${this.progreso}%</p>
                </div>
                <div class='card'>
                    <i class="fas fa-medal"></i>
                    <p class='card__title text'>Rank</p>
                    <p class='card__text text-bold'>${this.rank}°</p>
                </div>
            </div>
        </section>
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

customElements.define('home-stats', homeStats)