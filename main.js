let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = true;

let runnersAge = 13;

if(earlyRegistration && runnersAge > 18){
   raceNumber += 1000;
}
if(earlyRegistration && runnersAge > 18) {
    console.log (`Race will begin at 9:30 and your race number is: ${raceNumber}.`);
} else if (!earlyRegistration && runnersAge > 18) {
    console.log (`Race will begin at 11:00 and your race number is: ${raceNumber}.`);
} else if (runnersAge<18) {
    console.log (`Race will begin at 12:30 and your race number is: ${raceNumber}.`);
}
