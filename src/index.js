import './styles/styles.scss'
import './components/start-section.js'
import { items } from './Items';

const appContainer = document.getElementById('app')

export const start = () => {
    appContainer.innerHTML = '';
    const content = document.createElement('start-section')
    appContainer.append(content)

}

export const startApp = () => {
    appContainer.innerHTML = '';
    const header = document.createElement('header-section')
    const menu = document.createElement('menu-section')
    appContainer.append(header, menu)
}

window.addEventListener('load', start())