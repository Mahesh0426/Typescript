var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 5] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 6] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 7] = "WINDOW";
    SeatChoice[SeatChoice["LATERAL"] = 8] = "LATERAL";
})(SeatChoice || (SeatChoice = {}));
var mySeat = SeatChoice.AISLE;
console.log("mySeat is : ".concat(mySeat));
