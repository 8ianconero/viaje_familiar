class expensesHeader extends HTMLElement{
    constructor(){
        super()
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <div class="expenses-header">
            <h3 class="heading-3">Gastos</h3>
            <btn-cart></btn-cart
        </div>
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

customElements.define('expenses-header', expensesHeader)