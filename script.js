const properties = document.querySelectorAll(".property-item");

const allFilter = document.getElementById("allFilter");
const saleFilter = document.getElementById("saleFilter");
const rentFilter = document.getElementById("rentFilter");

allFilter.addEventListener("click", () => {

  properties.forEach(property => {
    property.style.display = "block";
  });

});

saleFilter.addEventListener("click", () => {

  properties.forEach(property => {

    if(property.classList.contains("sale")) {
      property.style.display = "block";
    }

    else {
      property.style.display = "none";
    }

  });

});

rentFilter.addEventListener("click", () => {

  properties.forEach(property => {

    if(property.classList.contains("rent")) {
      property.style.display = "block";
    }

    else {
      property.style.display = "none";
    }

  });

});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all fields.");
    } 
    else if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
    } 
    else {
      alert("Message sent successfully!");
      contactForm.reset();
    }
  });
}