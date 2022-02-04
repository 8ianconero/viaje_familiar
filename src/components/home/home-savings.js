import { countdownTickets, countdownTravel } from "../../utils/countdown";
import { user } from "../../utils/data";
class homeSavings extends HTMLElement{
    constructor(){
        super()
        this.savings = user.ahorros
        this.expenses = user.gastos
        this.flight = user.misGastos.filter(item => item.tipo  === 'Vuelo')
        this.flightDate = countdownTickets()
        this.travelDate = countdownTravel()
        this.savingsForPlane = this.getSavingsForPlane()
        this.savingsForExpenses = this.getSavingsForExpenses()
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <section class="savings-container margin-l">
            <h4 class='savings-container__title heading-4 margin'>Ahorro mensual</h4>
            <div class='cards-container'>
                <div class='card-monthly'>
                    <p class='card-monthly__text text margin-s'>Hasta 31/02/2021  <span id="saving-part1">${this.savingsForPlane}</span></p>
                    <p class='card-monthly__text text'>Después 01/03/2021  <span id="saving-part2">${this.savingsForExpenses}</span></p>
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
        this.printsSavings()   
    }
    getSavingsForPlane(){
        if(this.flight.length === 0){
            return this.savingsForPlane
        }else{
            if(this.savings >= this.flight[0].precio){
                this.savingsForPlane = 0
                return this.savingsForPlane
            }else{
                const resultado = Math.ceil((this.flight[0].precio - this.savings) / (this.flightDate - 1))
                this.savingsForPlane = resultado
                return this.savingsForPlane
            }
        }
    }
    getSavingsForExpenses(){
        if(this.expenses > 0){
            if(this.flight.length === 0){
                const resultado = Math.ceil((this.expenses - this.savings)/this.travelDate)
                this.savingsForExpenses = resultado
                return this.savingsForExpenses
            }else if(this.flight.length > 0 && this.savings < this.flight[0].precio){
                if(this.savings === 0){
                    const resultado = Math.ceil((this.expenses - this.flight[0].precio)/this.travelDate)
                    this.savingsForExpenses = resultado
                    return this.savingsForExpenses
                }else{
                    const resultado = Math.ceil((this.expenses - this.flight[0].precio)/this.travelDate)
                    this.savingsForExpenses = resultado
                    return this.savingsForExpenses
                }
            }else if(this.flight.length > 0 && this.savings >= this.flight[0].precio){
                const resultado = Math.ceil(((this.expenses - this.flight[0].precio)-(this.savings-this.flight[0]))/this.travelDate)
                this.savingsForExpenses = resultado
                return this.savingsForExpenses
            }
        }else{
            return this.savingsForExpenses
        }
    }
    printsSavings(){
        const printPart1 = document.getElementById('saving-part1')
        const printPart2 = document.getElementById('saving-part2')
        if(this.savingsForPlane === undefined && this.savingsForExpenses === undefined){
            printPart1.innerHTML = `Faltan gastos`
            printPart2.innerHTML = `Faltan gastos`
        }else if(this.savingsForPlane === undefined){
            printPart1.innerHTML = `$${this.savingsForExpenses}`
            printPart2.innerHTML = `$${this.savingsForExpenses}`
        }else if(this.expenses <= this.savings){
            printPart1.innerHTML = `Completado`
            printPart2.innerHTML = `Completado`
        }else if(this.flight[0] <= this.savings){
            printPart1.innerHTML = `$${this.savingsForExpenses}`
            printPart2.innerHTML = `$${this.savingsForExpenses}`
        }else{
            printPart1.innerHTML = `$${this.savingsForPlane+this.savingsForExpenses}`
            printPart2.innerHTML = `$${this.savingsForExpenses}`
        }
    }
}

customElements.define('home-savings', homeSavings)