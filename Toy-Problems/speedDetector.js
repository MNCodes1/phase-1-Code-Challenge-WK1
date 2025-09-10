
function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit) {
        return "Ok";
    } else {
        let points = ((speed - speedLimit) / kmPerPoint);
        if (points > 12) {
            return "License suspended";
        } else {
            return `Points: ${points}`;
        }
    }
}
console.log(speedDetector(80));
console.log(speedDetector(65));
console.log(speedDetector(130));

