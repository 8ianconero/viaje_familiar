// import { itemsData, user, upgradeData } from '../../utils/user';
import { appContainer } from '../..';
import { items } from '../../Items';

import { updateSuccess } from '../../utils/message';

export const expensesContent = (a) => {
    const section = document.querySelector('expenses-section')
    section.innerHTML = ''
    switch (a) {
        case 'JR Pass-option':
            const trains = items.filter(item => item.type === 'transporte')
            const trainList = trains.map(item => {
                return `
                <expenses-card 
                ref="${item.id}" 
                name="${item.name}" 
                description="${item.description}" 
                price="${item.price}" type="${item.type}" 
                qty="${item.qty}" 
                icon="fas fa-train">
                </expenses-card>`
            })
            section.innerHTML = trainList.join('')
            break;
        case 'Pasaporte-option':
            const passports = items.filter(item => item.type === 'pasaporte')
            const passportList = passports.map(item => {
                return `
                <expenses-card 
                ref="${item.id}" 
                name="${item.name}" 
                description="${item.description}" 
                price="${item.price}" type="${item.type}" 
                qty="${item.qty}" 
                icon="fas fa-passport">
                </expenses-card>`
            })
            section.innerHTML = passportList.join('')
            break;
        case 'Comida-option':
            const foods = items.filter(item => item.type === 'comida')
            const foodMenu = items.filter(item => item.type === 'comidaMc')
            let foodItems = []
            let foodInMenu = []

            const allFoodTitle = document.createElement('h4')
            allFoodTitle.textContent = 'Cálculo Aproximado del viaje'
            allFoodTitle.className = 'heading-5 margin-s food__title'
            const allFoodContainer = document.createElement('div')
            allFoodContainer.className = 'food-section'
            
            const mcFoodTitle = document.createElement('h4')
            mcFoodTitle.textContent = "McDonald's"
            mcFoodTitle.className = 'heading-5 margin-s mc__title'
            const mcFoodContainer = document.createElement('div')
            mcFoodContainer.className = 'food-section'

            foods.forEach((food) => {
                let element =`
                <expenses-card ref="${food.id}" name="${food.name}" description="${food.description}" price="${food.price}" type="${food.type}" qty="${food.qty}" icon="fas fa-utensils">
                </expenses-card>
                `;
                foodItems.push(element)
            })
            allFoodContainer.innerHTML+=foodItems

            foodMenu.forEach((food) => {
                let element =`
                <expenses-card ref="${food.id}" name="${food.name}" description="${food.description}" price="${food.price}" type="${food.type}" qty="${food.qty}" icon="fas fa-utensils">
                </expenses-card>
                `;
                foodInMenu.push(element)
            })
            mcFoodContainer.innerHTML+=foodInMenu

            section.append(allFoodTitle, allFoodContainer, mcFoodTitle, mcFoodContainer)
            break;
        
        case 'Hospedaje-option':
            const lodgings = items.filter(item => item.type === 'atracciones')
        const lodgingsList = lodgings.map(item => {
            return `
            <expenses-card 
            ref="${item.id}" 
            name="${item.name}" 
            description="${item.description}" 
            price="${item.price}" type="${item.type}" 
            qty="${item.qty}" 
            icon="fas fa-hotel">
            </expenses-card>`
        })
        section.innerHTML = lodgingsList.join('')
        break;

        case 'Atracciones-option':
        const amusements = items.filter(item => item.type === 'atracciones')
        const amusementsList = amusements.map(item => {
            return `
            <expenses-card 
            ref="${item.id}" 
            name="${item.name}" 
            description="${item.description}" 
            price="${item.price}" type="${item.type}" 
            qty="${item.qty}" 
            icon="fas fa-torii-gate">
            </expenses-card>`
        })
        section.innerHTML = amusementsList.join('')
        break;
        
        case 'Otros-option':
            const others = items.filter(item => item.type === 'otros')
            const othersList = others.map(item => {
                return `
                <expenses-card 
                ref="${item.id}" 
                name="${item.name}" 
                description="${item.description}" 
                price="${item.price}" 
                type="${item.type}" 
                qty="${item.qty}" 
                icon="fas fa-shopping-basket">
                </expenses-card>`
            })
            section.innerHTML = othersList.join('')
            break;
        case 'Gastos manuales-option':
        const manualExpenses = items.filter(item => item.type === 'gastos manuales')
        const manualExpensesList = manualExpenses.map(item => {
            return `
            <expenses-card 
            ref="${item.id}" 
            name="${item.name}" 
            price="${item.price}" 
            type="${item.type}" 
            qty="${item.qty}" 
            icon="fas fa-dollar-sign">
            </expenses-card>`
        })
        section.innerHTML = manualExpensesList.join('')
        break;

        case 'Ahorro-option':
        section.innerHTML =`
        <expenses-card type="ahorro manual" icon="fas fa-piggy-bank">
        </expenses-card>
        `
            break;
        default:
            const flights = items.filter(item => item.type === 'vuelo')
            const fligthsList = flights.map(item => {
                return `
                <expenses-card 
                ref="${item.id}" 
                name="${item.name}" 
                description="${item.description}" 
                price="${item.price}" type="${item.type}" 
                qty="${item.qty}" 
                icon="fas fa-plane">
                </expenses-card>`
            })
            section.innerHTML = fligthsList.join('')
            break;
    }
}


class expensesCards extends HTMLElement{
    constructor(){
        super()
    }
    static get observedAttributes(){
        return['ref', 'name', 'description', 'price', 'type', 'qty', 'icon']
    }
    attributeChangedCallback(attr, oldVal, newVal){
        if(attr === 'ref'){
            this.ref = newVal
        }
        if(attr === 'name'){
            this.name = newVal
        }
        if(attr === 'description'){
            this.description = newVal
        }
        if(attr === 'price'){
            this.price = newVal
        }
        if(attr === 'type'){
            this.type = newVal
        }
        if(attr === 'qty'){
            this.qty = newVal
        }
        if(attr === 'icon'){
            this.icon = newVal
        }
    }
    getTemplate(){
        const template = document.createElement('template')
        if(this.type === 'gastos manuales'){
            template.innerHTML =`
            <div class="item-card--input">
                <div class="item-icon Gastos-manuales"><i class="${this.icon}"></i></div>
                <div class="item-info">
                    <p class="item-info__title text-m">Cantidad:</p>
                    <input placeholder="Inserte Cantidad" type="number" class="item-info__input text-m" id="manualExpenses-value"></input>
                </div>
                <div class="item-btns">
                <btn-value ref="${this.ref}"></btn-value>
                </div>
            </div>
            `;
            return template
        }else if(this.type === 'ahorro manual'){
            template.innerHTML =`
            <div class="item-card--input">
                <div class="item-icon Ahorro"><i class="${this.icon}"></i></div>
                <div class="item-info">
                    <p class="item-info__title text-m">Cantidad:</p>
                    <input placeholder="Inserte Cantidad" type="number" class="item-info__input text-m" id="savings-value"></input>
                </div>
                <div class="item-btns">
                    <btn-value ref="${this.ref}"></btn-value>
                    <btn-remove></btn-remove>
                </div>
            </div>
            `;
            return template
        }else if(this.type === 'otros' || this.type === 'comidaMc') {
            template.innerHTML = `
            <div class="item-card" id="${this.ref}-card">
                <div class="item-icon ${this.type}"><i class="${this.icon}"></i></div>
                <div class="item-info">
                    <p class="item-info__title text-m">${this.name}</p>
                    <p class="item-info__text text-s">${this.description}</p>
                    <p class="item-info__price text-m bold" id="${this.ref}__price">$${this.price}</p>
                </div>
                <div class="item-btns" id="${this.ref}-btns">
                    <btn-add ref="${this.ref}"></btn-add>
                    <btn-qty
                    ref="${this.ref}"
                    qty="${this.qty}"
                    price="${this.price}"
                    ></btn-qty>
                </div>
            </div>
            `;
            return template
        }else{
            template.innerHTML = ''
            template.innerHTML = `
            <div class="item-card" id="${this.ref}-card">
                <div class="item-icon ${this.type}"><i class="${this.icon}"></i></div>
                <div class="item-info">
                    <p class="item-info__title text-m">${this.name}</p>
                    <p class="item-info__text text-s">${this.description}</p>
                    <p class="item-info__price text-m bold">$${this.price}</p>
                </div>
                <div class="item-btns" id="${this.ref}-btns">
                    <btn-add ref="${this.ref}"></btn-add>
                </div>
            </div>
            `;
            return template
        }
    }
    getMenu(){
        const template = document.createElement('template')
        if(this.type === 'comidaMc'){
            
            template.innerHTML = `
            <div class="item-card" id="${this.ref}-card">
                <div class="item-icon ${this.type}"><i class="${this.icon}"></i></div>
                <div class="item-info">
                    <p class="item-info__title text-m">${this.name}</p>
                    <p class="item-info__text">${this.description}</p>
                    <p class="item-info__price" id="${this.ref}__price">$${this.price}</p>
                </div>
                <div class="item-btns" id="${this.ref}-btns">
                    <btn-add ref="${this.ref}"></btn-add>
                    <btn-qty
                    ref="${this.ref}"
                    qty="${this.qty}"
                    price="${this.price}"
                    ></btn-qty>
                </div>
            </div>
            `;
            return template
        }
    }
    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define('expenses-card', expensesCards)