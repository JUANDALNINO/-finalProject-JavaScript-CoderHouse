// First book:
function alertFirstBook() {
    Swal.fire({
        title: "Missing Data",
        text: "Please select your data calendar",
        icon: "info",
    })
}


// Don't exist reservations:
function alertNotReservation() {
    Swal.fire({
        title: "Sorry",
        text: "You don't have any reservations. Please book one.",
        icon: "error",
    })
}


// Car create with success:
function alertCarCreated() {
    Swal.fire({
        title: "Success",
        text: "Car created successfully",
        icon: "success",
    })
}


// Write in the blanks - Create Car:
function alertWriteBlanks() {
    Swal.fire({
        title: "Missing text",
        text: "Please write in the blank",
        icon: "info",
    })
}