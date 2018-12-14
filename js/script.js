var feedbackUp = document.querySelector(".contacts-button");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".close");
var userName = popup.querySelector(".feedback-field-name");
var userEmail = popup.querySelector(".feedback-field-email");
var userFeedback = popup.querySelector(".feedback-field-content");
var form = popup.querySelector(".feedback-form");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";
  
 try {
    storageName = localStorage.getItem("userName");
    storageEmail = localStorage.getItem("userEmail");
  	} catch (err) {
    isStorageSupport = false;
  }


feedbackUp.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("feedback-show");
	if (storageName && storageEmail) {
		userName.value = storageName;
		userEmail.value = storageEmail;
		userFeedback.focus(); 
	} else if (storageName) {
		userName.value = storageName;
		userEmail.focus();
	} else if (storageEmail) {
		userName.focus();
		userEmail.value = storageEmail;		
	} else {
		userName.focus();
	}	
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("feedback-show");
	popup.classList.remove("feedback-error");
});

form.addEventListener("submit", function(evt){
	if (!userName.value || !userEmail.value || !userFeedback.value) {
	evt.preventDefault();
	popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("feedback-error");
	} else {
		if (isStorageSupport) {
		localStorage.setItem("userName", userName.value);
		localStorage.setItem("userEmail", userEmail.value);
		}		
	}
});

window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27) {
      	evt.preventDefault();
      	if (popup.classList.contains("feedback-show")) {
        popup.classList.remove("feedback-show");
        popup.classList.remove("feedback-error");
      	}
    }
});
