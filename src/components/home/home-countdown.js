import { countdownTravel, timeRemaining } from "../../utils/countdown";

class homeCountdown extends HTMLElement{
    constructor(){
        super()
        this.travelCountdown = countdownTravel()
        this.countdown = timeRemaining(this.travelCountdown)
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        <div class="countdown-container margin-l">
            <p class="text-s" id="time-remaining">Falta: ${this.countdown}</p>
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

customElements.define('home-countdown', homeCountdown)
