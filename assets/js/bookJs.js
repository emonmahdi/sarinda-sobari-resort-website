const bookBtns = document.querySelectorAll(".btn-book");
const modal = document.getElementById("bookingModal");
const closeBtns = document.querySelectorAll(".close-btn, .close-btn-final");
const roomNameSpan = document.getElementById("roomName");
const bookingForm = document.getElementById("bookingForm");
const bookingFormView = document.querySelector(".booking-form-view");
const successMessageView = document.querySelector(".success-message-view");

const summaryRoom = document.getElementById("summaryRoom");
const summaryName = document.getElementById("summaryName");
const summaryEmail = document.getElementById("summaryEmail");
const summaryCheckIn = document.getElementById("summaryCheckIn");
const summaryCheckOut = document.getElementById("summaryCheckOut");

// Open Modal with Room Name
bookBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const roomName = btn.closest(".room-overlay").querySelector("h3").innerText;
    roomNameSpan.innerText = roomName;
    modal.classList.remove("d-none");
    bookingFormView.classList.remove("d-none");
    successMessageView.classList.add("d-none");
  });
});

// Close Modal
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("d-none");
    bookingForm.reset();
  });
});

// Submit Booking Form
bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("guestName").value;
  const email = document.getElementById("guestEmail").value;
  const checkIn = document.getElementById("checkIn").value;
  const checkOut = document.getElementById("checkOut").value;
  const room = roomNameSpan.innerText;

  // Set summary data
  summaryRoom.innerText = room;
  summaryName.innerText = name;
  summaryEmail.innerText = email;
  summaryCheckIn.innerText = checkIn;
  summaryCheckOut.innerText = checkOut;

  bookingFormView.classList.add("d-none");
  successMessageView.classList.remove("d-none");
});

// Download as PDF
document.getElementById("downloadPDF").addEventListener("click", () => {
  const element = document.getElementById("bookingSummary");
  html2pdf()
    .from(element)
    .set({
      margin: 0.5,
      filename: "booking-summary.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    })
    .save();
});
