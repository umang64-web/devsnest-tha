var head = document.querySelector('.head');


var seatBooked = 0;
var Totalseat = 70;

function booking(add) {
    if (add) {
        seatBooked--;
        Totalseat++;
    }
    else {
        seatBooked++;
        Totalseat--;
    }
}
function display(){
    head.innerHTML = `<div class = "seat"><h3>BOOKED SEATS: ${seatBooked}</h3> <h3>REMAINING SEATS: ${Totalseat}</h3></div>`
}
display();
 
var cells = document.querySelectorAll('.cols');
cells.forEach(cell => {
    cell.addEventListener('click', e => {
        if (cell.classList.contains('check')) {
            cell.classList.remove('check');
            booking(true);
            display();
            
        }
        else{
            cell.classList.add('check')
            booking(false);
            display();
        }
    });
});

