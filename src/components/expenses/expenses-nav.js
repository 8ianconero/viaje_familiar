import { expensesContent } from './expenses-section';

class expensesNav extends HTMLElement{
    constructor(){
        super()
        this.menuOptions = ['Vuelo', 'JR Pass', 'Pasaporte', 'Comida', 'Hospedaje', 'Atracciones', 'Otros', 'Gastos manuales', 'Ahorro']
    
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <div class="expenses-nav" id="expenses-menu">
        </div>
        `;
        return template
    }
    render(){
        this.append(this.getTemplate().content.cloneNode(true))
        this.printItems()
        this.start()
        this.btn()
    }
    connectedCallback(){
        this.render()
    }
    printItems(){
        const container = document.getElementById('expenses-menu')
        let items = this.menuOptions
        items.forEach(item => {
            container.innerHTML += `
            <button class="expenses-chips__item" id="${item}-option">${item}</button>
            `
        });
    }
    start(){
        const remove = document.querySelector('.chip--active')
        if(!remove){
            const option = document.getElementById('Vuelo-option')
            option.classList.add('chip--active')
            expensesContent()
        }
    }
    btn(){
        const btns = document.querySelectorAll('.expenses-chips__item');
        btns.forEach(btn => {
            btn.addEventListener('click', (b)=>{
                const remove = document.querySelector('.chip--active')
                remove.classList.remove('chip--active')
                const element = b.target
                element.classList.add('chip--active')
                expensesContent(element.id)
            })
        })
    }
}

customElements.define('expenses-nav', expensesNav)