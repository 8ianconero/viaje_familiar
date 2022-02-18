import { items } from "../../Items";
import { user } from "../../utils/user";

class btnAdd extends HTMLElement{
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
        <button class="item-add__btn" id="${this.ref}">Agregar</button>
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
    getBtns(){
        const btn = this.querySelector('.item-add__btn');
        btn.addEventListener('click', (e=>{
            const element = e.target
            const elementId = btn.id
            const check = this.user.misGastos.find(item => item.id === elementId)
            if(check){
                btn.innerText = 'Agregado'
                btn.disabled = true
            }
            element.innerText = 'Agregado'
            element.disabled = true
            this.addItems(elementId)
        }))
    }
    checkItems(){
        const buttons = [...document.querySelectorAll('.item-add__btn')]
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
        this.changeCart()
        user.updateExpenses()
    }
    changeCart(){
        const cart = document.getElementById('my-expenses')
        cart.classList.add('cart--active')
    }
}

customElements.define('btn-add', btnAdd);