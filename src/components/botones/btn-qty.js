import { items } from "../../Items"

class btnQty extends HTMLElement{
    constructor(){
        super()
    }
    static get observedAttributes(){
        return['ref', 'qty', 'price']
    }
    attributeChangedCallback(attr, oldVal, newVal){
        if(attr === 'ref'){
            this.ref = newVal
        }
        if(attr === 'qty'){
            this.qty = newVal
        }
        if(attr === 'price'){
            this.price = newVal
        }
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <div class="item-qty">
            <button type=button class="item-qty__btn item-qty--less" data-tagId="${this.ref}">-</button>
            <p class="item-qty__text" data-tagId="${this.ref}" id="${this.ref}__qty">${this.qty}</p>
            <button type=button class="item-qty__btn item-qty--add" data-tagId="${this.ref}">+</button>
        </div>
        `;
        return template
    }
    render(){
        this.append(this.getTemplate().content.cloneNode(true));
        this.changeItemQty()
    }
    connectedCallback(){
        this.render();
    }
    changeItemQty(){
        const buttons = [...document.querySelectorAll('.item-qty__btn')]
        buttons.forEach(btn => {
            btn.addEventListener('click', e => {
                if(e.target.classList.contains('item-qty--less')){
                    let id = e.target.dataset.tagid,
                    filter = items.find(i => i.id === id)
                    if(filter.qty >= 2){
                        filter.qty-=1
                        const price = filter.price*filter.qty
                        console.log(filter.qty, filter.price, price)
                        this.printQty(filter.qty, price, id)
                    }
                }else if(e.target.classList.contains('item-qty--add')){
                    let id = e.target.dataset.tagid,
                    filter = items.find(i => i.id === id)
                    if(filter.qty >= 1){
                        filter.qty+=1
                        const price = filter.price*filter.qty
                        console.log(filter.qty, filter.price, price)
                        this.printQty(filter.qty, price, id)
                    }
                }
            })
        })
    }
    printQty(qty, price, id){
        let printQty = document.getElementById(`${id}__qty`),
        printPrice = document.getElementById(`${id}__price`);
        printQty.innerText = qty;
        printPrice.innerText = `$${price}`;
    }
}

customElements.define('btn-qty', btnQty);