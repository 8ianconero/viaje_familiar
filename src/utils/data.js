


const obtainUserProgress =()=>{
    const gastos = user.gastos
    const ahorro = user.ahorros

    if( gastos > 0 && ahorro > 0){
        let porcentage = ((ahorro*100)/gastos)
        let porcentageFixed = porcentage.toFixed(2)
        user.progreso = porcentageFixed
        localStorage.setItem('user', JSON.stringify(user))
    }else{
        user.progreso = 0
        localStorage.setItem('user', JSON.stringify(user))
    }
}

const updateUserExpensesTotal = () => {
    const userItems = user.misGastos
    let precio = []
    userItems.forEach(e => {
        const resultado = e.precio*e.cantidad
        precio.push(resultado)
    })
    let gastoTotal = precio.reduce((a,b)=> a + b, 0)
    user.gastos = gastoTotal
    localStorage.setItem('user', JSON.stringify(user))
}

export const upgradeData = () => {
    updateUserExpensesTotal()
    obtainUserProgress()
    rank()
}

export const rank = async() => {
    if(user.progreso > 0){
        user.rank = 1;
        localStorage.setItem('user', JSON.stringify(user))
    }else{
        user.rank = 0;
        localStorage.setItem('user', JSON.stringify(user))
    }
}
