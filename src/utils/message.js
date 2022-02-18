import { appContainer } from "..";

class message extends HTMLElement {
    constructor(){
        super()
        this.container = document.createElement('div');

        this.titleMsj = document.createElement('h3');

        this.textMsj = document.createElement('p')
        
    }
    static get observedAttributes(){
        return['type', 'titleclass', 'errortitle', 'msjclass', 'msjtext']
    }
    attributeChangedCallback(attr, oldVal, newVal){
        if(attr === 'type'){
            this.type = newVal
        }
        if(attr === 'titleclass'){
            this.titleClass = newVal
        }
        if(attr === 'errortitle'){
            this.errorTitle = newVal
        }
        if(attr === 'msjclass'){
            this.msj = newVal
        }
        if(attr === 'msjtext'){
            this.msjText = newVal
        }
    }
    connectedCallback(){
        this.container.className = `${this.type}`

        this.titleMsj.className = `${this.titleClass} heading-4`
        this.titleMsj.textContent = `${this.errorTitle}`

        this.textMsj.className = `${this.msjClass} text`
        this.textMsj.textContent = `${this.msjText}`

        this.container.append(this.titleMsj, this.textMsj)
        this.append(this.container)
    }
}

customElements.define('new-msj', message)

export const updateSuccess = () => {
    
    const updateMsgContainer = document.createElement('div')
    updateMsgContainer.className = 'update-success'

    const updateMsgTitle = document.createElement('h3')
    updateMsgTitle.textContent = 'Listo'
    updateMsgTitle.className = 'heading-4 margin'

    const updateMsgText = document.createElement('p')
    updateMsgText.textContent = 'Se han guardado correctamente tus datos'
    updateMsgText.className = 'text'

    updateMsgContainer.append(updateMsgTitle, updateMsgText)

    return updateMsgContainer
}