function getpin(){
    const pin = genaratePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('got 3 digit and calling again', pin);
        return getpin();
    }

}

function genaratePin () {
     const random = Math.round(Math.random() * 10000);
     return random;
}


document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getpin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});


document.getElementById('calculator').addEventListener('click', function(event){
   const number = event.target.innerText;
   const typeNumberField = document.getElementById('typed-number');
   const previousTypeNumber = typeNumberField.value;
   if(isNaN(number)){
      if(number === 'C'){
        typeNumberField.value = '';
      }
      else if (number === '<'){
        const digits = previousTypeNumber.split('');
          digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;


      }
   }
    else{
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;    
    }

});


document.getElementById('verify-pin').addEventListener('click', function(){
       const displayPin = document.getElementById('display-pin');
       const currentPin = displayPin.value;

       const typeNumberField = document.getElementById('typed-number');
         const typeNumber = typeNumberField.value;

         if (typeNumber === currentPin){
            const pinSuccess = document.getElementById('pin-success');
            pinSuccess.style.display = 'block';
         }
         else{
            const pinFail = document.getElementById('pin-fail');
            pinFail.style.display = 'block';
         }

});