// For Dispaly Only WeekDay, Day and Month

module.exports = getDate;
function getDate(){
    const today = new Date();
    const opstions = {
        weekday : 'long',
        day: 'numeric',
        month: 'long',
    };
    // let day = today.toLocaleDateString('en-US', opstions);
    // return day;
    return today.toLocaleDateString('en-US', opstions);
}

// For Dispaly Only Week Day
module.exports = getDay;
function getDay(){
    const today = new Date();
    const opstions = {
        weekday : 'long',
    };
    // let day = today.toLocaleDateString('en-US', opstions);
    // return day;
    return today.toLocaleDateString('en-US', opstions);
}
