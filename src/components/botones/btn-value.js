import { items } from "../../Items";
import { user } from "../../utils/user";

class btnValue extends HTMLElement{
    constructor(){
        super()
        this.user = user.getData()
    }
    static get observedAttributes(){
        return['ref']
    }
    attributeChangedCallback(attr, oldVal, newVal){
        if(attr === 'ref'){
            this.ref = newVal
        }
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <button class="item-value__btn" id="${this.ref}">Agregar</button>
        `;
        return template
    }
    render(){
        this.append(this.getTemplate().content.cloneNode(true));
        this.checkItems()
        this.getBtns()
    }
    connectedCallback(){
        this.render();
    }
    getValue(){
        const valueInput = document.querySelector('.item-info__input');
        const expensesData = parseFloat(valueInput.value || 0);
        let itemManualExpenses = items.filter(item => item.id === `${this.ref}`)
        if(this.ref === 'gm00'){
            itemManualExpenses[0].price = expensesData
            this.addItems(`${this.ref}`)
            user.updateExpenses()
        }else{
            user.updateSaves(expensesData)
        }


    }
    getBtns(){
        const btn = this.querySelector('.item-value__btn');
        btn.addEventListener('click', (e=>{
            this.getValue()
            const element = e.target
            const elementId = btn.id
            const check = this.user.misGastos.find(item => item.id === elementId)
            if(check){
                btn.innerText = 'Agregado'
                btn.disabled = true
            }
            element.innerText = 'Agregado'
            element.disabled = true
        }))
    }
    checkItems(){
        const buttons = [...document.querySelectorAll('.item-value__btn')]
        buttons.forEach(btn=>{
            let id = btn.id
            let inCart = this.user.misGastos.find(item => item.id === id) 
            if(inCart){
                btn.innerText = 'Agregado'
                btn.disabled = true
            }
        })    
    }
    addItems(itemId){
        const product = items.filter(item => item.id === itemId)
        product.forEach(e=>{
            this.user.misGastos.push(e)
            localStorage.setItem('user', JSON.stringify(this.user))
        })
    }
}

customElements.define('btn-value', btnValue);