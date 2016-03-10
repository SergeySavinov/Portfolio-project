var feedbackFormLink = document.querySelector(".contacts-btn");
var feedbackformCloseCross = document.querySelector(".feedback-form-close");
var feedbackformCloseButton = document.querySelector(".form-cansel-btn");
var feedbackModalWindow = document.querySelector(".feedback-form");
var customerName = feedbackModalWindow.querySelector("[name=customer-name]");
var customerEmail = feedbackModalWindow.querySelector("[name=customer-email]");
var letterContent = feedbackModalWindow.querySelector("[name=letter-content]");
var feedbackForm = feedbackModalWindow.querySelector("form");
var storageName = localStorage.getItem("customerName");
var storageEmail = localStorage.getItem("customerEmail");
      
feedbackFormLink.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackModalWindow.classList.add("feedback-form-show");
  customerName.focus();
  if (storageName || storageEmail) {
    customerName.value = storageName;
    customerEmail.value = storageEmail;
  }
  if (storageName && storageEmail) {
    letterContent.focus();
  }
});
      
feedbackformCloseCross.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackModalWindow.classList.remove("feedback-form-show");
  feedbackModalWindow.classList.remove("feedback-form-error");
})
      
feedbackformCloseButton.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackModalWindow.classList.remove("feedback-form-show");
  feedbackModalWindow.classList.remove("feedback-form-error");
})
      
feedbackForm.addEventListener("submit", function(event) {
  if (!customerName.value || !customerEmail.value || !letterContent.value) {
    event.preventDefault();
    feedbackModalWindow.classList.remove("feedback-form-error");
    feedbackModalWindow.offsetWidth = feedbackModalWindow.offsetWidth;
    feedbackModalWindow.classList.add("feedback-form-error");
    } else {
      localStorage.setItem("customerName", customerName.value);
      localStorage.setItem("customerEmail", customerEmail.value);
    }
});
      
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedbackModalWindow.classList.contains("feedback-form-show")) {
      feedbackModalWindow.classList.remove("feedback-form-show");
    }
  }
})