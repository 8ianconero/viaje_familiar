import { appContainer, contentApp } from "../../index";
import { user } from "../../utils/user";

class btnCart extends HTMLElement{
    constructor(){
        super()
        this.userData = user.getData()
        this.cartEmpty = true
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <button id="my-expenses"><i class="fas fa-shopping-cart"></i></button>
        `;
        return template
    }
    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true))
        this.updateItems()
        this.activeCart()
        document.getElementById('my-expenses').onclick = () => this.openCart()
    }
    connectedCallback(){
        this.render()
    }
    activeCart(){
        if(this.userData.misGastos.length > 0){
            this.cartEmpty = false
        }else{
            this.cartEmpty = true
        }
        if(!this.cartEmpty){
            const cart = document.getElementById('my-expenses')
            cart.classList.add('cart--active')
        }  
    }
    updateItems(){
        this.userData = user.getData()
    }
    openCart(){
        this.updateItems()
        const cartTemplate = document.createElement('div')
        cartTemplate.className = 'overlay active'
        cartTemplate.innerHTML = `
        <div class="overlay-container">
            <h3 class="overlay__title">Mis Gastos</h3>
            <button id="overlay-btn" class="overlay-btn">
                <span></span>
                <span></span>
            </button>
            <div class="overlay-cart" id="overlay-cart"></div>
        </div>
        `;
        appContainer.append(cartTemplate)
        this.printItems()
        this.noScroll()
        document.getElementById('overlay-btn').onclick = () => this.closeBtn()
        contentApp('expenses')
    }
    noScroll(){
        const body = document.querySelector('body')
        if(body.classList.contains('noscroll')){
            body.classList.remove('noscroll')
        }else{
            body.classList.add('noscroll')
        }
    }
    async printItems(){
        const container = document.getElementById('overlay-cart')
        container.innerHTML = ''
        const expenses = this.userData.misGastos
        expenses.forEach(product => {
            container.innerHTML += `
            <div class="cart-card">
                    <div class="card-info">
                        <p class="card-info__title text-s">${product.name}<span class="card-info__qty">(${product.qty})<span></p>
                        <p class="card-info__price text-s bold">$${product.price*product.qty}</p>
                    </div>
                    <div class="card-btns">
                        <button class="card-btn__remove" id="${product.id}">Quitar</button>
                    </div>
                </div>
            `
        });
        this.removeItems()
    }
    closeBtn(){
        contentApp('expenses')
        const overlay = document.querySelector('.overlay')
        overlay.classList.remove('active')
        overlay.remove()
        this.noScroll()
        this.activeCart()
    }
    removeItems(){
        const buttons = [...document.querySelectorAll('.card-btn__remove')]
        buttons.forEach(btn=>{
            btn.addEventListener('click', e => {
                const userExpenses = this.userData.misGastos
                const element = e.target.id
                const filter = userExpenses.filter((e)=> e.id !== element)
                this.userData.misGastos = filter
                this.printItems()
                localStorage.setItem('user', JSON.stringify(this.userData))
                user.updateExpenses()
            })
        })
    }
}

customElements.define('btn-cart', btnCart)