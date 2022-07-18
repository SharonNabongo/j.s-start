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
    removeParty:function(partysize){
        this.guestcount=this.guestcount-partysize;
    },
};
restaurant.seatParty(74);
console.log(restaurant.checkAvailability(3));
restaurant.removeParty(2);
console.log(restaurant.checkAvailability(3));