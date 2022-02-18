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
        this.updateProgress()
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
        this.updateProgress()
    },
    addExpenses(p){
        let data = this.getData()
        data.misGastos.push(p)
        this.saveUser(data)
        this.updateProgress()
    },
    updateProgress(){
        let data = this.getData()
        const gastos = data.gastos
        const ahorro = data.ahorros

        if( gastos > 0 && ahorro > 0){
            let porcentage = ((ahorro*100)/gastos)
            let porcentageFixed = porcentage.toFixed(2)
            data.progreso = porcentageFixed
            this.saveUser(data)
        }else{
            data.progreso = 0
            this.saveUser(data)
        }
        
        this.saveUser(data)
    },
    updateRank(p){
        let data = this.getData()
        data.rank = p;
        this.saveUser(data)
    }
}
