alert('Welcome to Go Green')

let submitButton = document.querySelector('#submit-button');

function clickListener(event) {
  event.preventDefault();
  console.log('Button clicked');
}

submitButton.addEventListener('click', clickListener);

function clickListener(event) { 
  event.preventDefault();
  
  let emailInput = document.querySelector('#email'); 
  let messageInput = document.querySelector('#message');

  let emailText = emailInput.value; 
  let messageText = messageInput.value;

  console.log('email:', emailText, 'message:', messageText);
}

function emailValidate(email) { 
  if(email.includes('@')) { 
    return true;
  } else { 
  	alert('Oh no!That does not seem like a valid email.Please try again')
    return false;
  }
}
console.log('Thanks for your donation');