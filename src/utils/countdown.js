export const timeRemaining = function(difference){
    const seconds = 1000;
    const minutes = seconds*60
    const hour = minutes*60
    const day = hour*24
    const month = day*(365/12)
    const year = month*12

    const yearRemaining = Math.floor(difference / year);
    const monthRemaining = Math.floor((difference % year)/month)
    const dayRemaining = Math.floor((difference % month)/day)
    const hourRemaining = Math.floor((difference % day)/hour)
    const minuteRemaining = Math.floor((difference % hour / minutes))

    const timeRemaining = `${yearRemaining} a&ntilde;os, ${monthRemaining} meses, ${dayRemaining} d&iacute;as, ${hourRemaining} horas y ${minuteRemaining} mins.`
    
    return timeRemaining
}
export const countdownTravel = function(){
    const today = new Date()
    const travelDate = new Date(2023, 11)
    const difference = Math.abs(today - travelDate);
    return difference
}

export const countdownTickets = function(){
    const today = new Date()
    const flightDate = new Date(2023, 1)
    const difference = Math.abs(today - flightDate);
    return difference
}

export const monthRemaining = function(difference){
    const seconds = 1000;
    const minutes = seconds*60
    const hour = minutes*60
    const day = hour*24
    const month = day*(365/12)
    
    const monthDifference = Math.floor(difference / month)
    return monthDifference
}