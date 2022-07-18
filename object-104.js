//object methods

let restaurant={
    name:"Gaucho",
    guestcapacity:75,
    guestcount:0,
    checkAvailability:function(partysize){
        let seatsleft=this.guestcapacity-this.guestcount;
        return partysize<=seatsleft;
    },
    seatParty:function(partysize){
        this.guestcount=this.guestcount-partysize;
    },
};
restaurant.seatParty(67);
console.log(restaurant.checkAvailability(3));