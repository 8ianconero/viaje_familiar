import './styles/styles.scss'
import './components/start-section.js'
import './components/header-section.js'
import './components/menu-section.js'

//home
import './components/home/home-greet.js'
import './components/home/home-countdown.js'
import './components/home/home-stats.js'
import './components/home/home-savings.js'
//expenses
import './components/expenses/expenses-header.js'
import './components/expenses/expenses-nav.js'
import './components/expenses/expenses-section.js'

//travel
import './components/travel/travel-header.js'
import './components/travel/travel-dates.js'
import './components/travel/travel-cities.js'

//btn
import './components/botones/btn-cart.js'
import './components/botones/btn-add.js'
import './components/botones/btn-qty.js'
import './components/botones/btn-value.js'
import './components/botones/btn-remove.js'
import { user } from './utils/user'

export const appContainer = document.getElementById('app')

export const contentApp = (a) => {
    const content = document.querySelector('content-app')
    switch (a) {
        case 'expenses':
            content.innerHTML = ''
            const expensesHeader = document.createElement('expenses-header')
            const expensesNav = document.createElement('expenses-nav')
            const expensesContainer = document.createElement('expenses-section')

            content.append(expensesHeader, expensesNav, expensesContainer)
            break;
        case 'travel':
            content.innerHTML = ''
            const travelHeader = document.createElement('travel-header')
            const travelDates = document.createElement('travel-dates')
            const travelCities = document.createElement('travel-cities')

            content.append(travelHeader, travelDates, travelCities)
            break;
        case 'rtj':
            content.innerHTML = ''
            const rtjHeader = document.createElement('rtj-header')
            const rtjContainer = document.createElement('rtj-container')
            content.append(rtjHeader, rtjContainer)
            break;
        default:
            content.innerHTML = ''
            const homeGreet = document.createElement('home-greet')
            const homeCountdown = document.createElement('home-countdown')
            const homeStats = document.createElement('home-stats')
            const homeSavings = document.createElement('home-savings')
            content.append(homeGreet, homeCountdown, homeStats, homeSavings)
            break;
    }
}

export function startApp(){
    appContainer.innerHTML = '';
    const header = document.createElement('header-section')
    header.className = 'header'
    const menu = document.createElement('menu-section')
    menu.className = 'menu';
    const content = document.createElement('content-app');
    appContainer.append(header, menu, content)
}

export const start = () => {
    appContainer.innerHTML = '';
    const content = document.createElement('start-section')
    appContainer.append(content)

}

window.addEventListener('load', start())