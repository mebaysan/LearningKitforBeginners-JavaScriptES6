let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        if (partySize > seatsLeft) {
            console.log(`We have just ${seatsLeft} seats but your party size -> ${partySize}`)
            return false
        }
        this.guestCount += partySize
        console.log(`${partySize} people added new count -> ${this.guestCount}`)
        return true
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize
        console.log(`removed ${partySize} seats. New count -> ${this.guestCount}`)
    }
}


restaurant.checkAvailability(72)
restaurant.checkAvailability(3)
restaurant.checkAvailability(1)
restaurant.removeParty(3)
restaurant.checkAvailability(1)
