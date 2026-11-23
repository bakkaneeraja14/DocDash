 // Doctor Information
const doctors = [
    {
        name: "Dr. Mehta",
        speciality: "Cardiology",
        experience: "10 Years",
        status: "Available"
    },
    {
        name: "Dr. Priya",
        speciality: "Pediatrics",
        experience: "8 Years",
        status: "Available"
    },
    {
        name: "Dr. Rahul",
        speciality: "Orthopedics",
        experience: "12 Years",
        status: "Available"
    },
    {
        name: "Dr. Anjali",
        speciality: "General Medicine",
        experience: "7 Years",
        status: "Available"
    }
];

// Select doctor container
const doctorList = document.getElementById("doctorList");

// Display doctors
doctors.forEach(function(doctor, index) {

    doctorList.innerHTML += `
        <div class="doctor-card">

            <h3>${doctor.name}</h3>

            <p>Speciality: ${doctor.speciality}</p>

            <p>Experience: ${doctor.experience}</p>

            <p>Status: ${doctor.status}</p>

            <button onclick="bookDoctor(${index})">
                Book Appointment
            </button>

        </div>
    `;

});

// Booking Function
function bookDoctor(index) {

    const selectedDoctor = doctors[index];

    alert(
        "You selected " +
        selectedDoctor.name +
        " - " +
        selectedDoctor.speciality
    );

}


let selectedDoctor = null;
let tokenNumber = 1;

// Select Doctor
function bookDoctor(index) {

    selectedDoctor = doctors[index];

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

}

// Confirm Appointment
document.getElementById("bookingForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("patientName").value;
    const phone = document.getElementById("phone").value;
    const shift = document.getElementById("shift").value;

    if (!selectedDoctor) {
        alert("Please select a doctor first!");
        return;
    }

    const token = tokenNumber++;

    document.getElementById("bookingResult").innerHTML = `
        <h3>Appointment Confirmed!</h3>
        <p>Patient Name: ${name}</p>
        <p>Doctor: ${selectedDoctor.name}</p>
        <p>Speciality: ${selectedDoctor.speciality}</p>
        <p>Mobile: ${phone}</p>
        <p>Shift: ${shift}</p>
        <h2>Your Token Number: ${token}</h2>
    `;

    document.getElementById("bookingForm").reset();

    selectedDoctor = null;

});