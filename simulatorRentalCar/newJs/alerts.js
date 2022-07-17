// First book:
function alertFirstBook() {
    Swal.fire({
        title: "Missing Data",
        text: "Please select your data calendar",
        icon: "info",
    })
}


//Saving Booking:
function savingBooking() {
    Swal.fire({
        icon: 'success',
        title: 'Loading available cars',
        showConfirmButton: false,
        timer: 1500
      })
      loadListCars();
}


// Saving Car:
function savingCar(saveCar) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You can able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Excellent!',
            'Your car has been saved',
            'success'
          )
          carSaved(saveCar);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Choose another car',
            'error'
          )
          console.log(null)
        }
      })
}