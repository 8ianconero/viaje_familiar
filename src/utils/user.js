export const user = {
    ahorros: 0,
    gastos: 0,
    misGastos: [],
    nombre: 'Invitado',
    progreso:0,
    rank:0,
    getData(){
        let userData = JSON.parse(localStorage.getItem('user'))
        return userData
    },
    createUser(){
        localStorage.setItem('user', JSON.stringify(user))
    },
    saveUser(data){
        localStorage.setItem('user', JSON.stringify(data))
    },
    updateSaves(p){
        let data = this.getData()
        data.ahorros = p;
        this.saveUser(data)
    },
    updateExpenses(){
        let data = this.getData()
        let allPrices = []
        data.misGastos.forEach(element => {
            const elementPrice = element.price*element.qty;
            allPrices.push(elementPrice)
        });
        let total = allPrices.reduce((a,b)=> a+b, 0)
        data.gastos = total
        this.saveUser(data)
    },
    addExpenses(p){
        let data = this.getData()
        data.misGastos.push(p)
        this.saveUser(data)
    },
    updateProgress(p){
        let data = this.getData()
        data.progreso = p;
        this.saveUser(data)
    },
    updateRank(p){
        let data = this.getData()
        data.rank = p;
        this.saveUser(data)
    }
}
