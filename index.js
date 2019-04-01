window.addEventListener("load", () => {
  //start your code here
  document.getElementById("myForm").addEventListener("submit", submit);
  });
  
    
  function generatePassword(passwordLength) {
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "#$%&()*+,-./:;<=>?@[\]^_{|}~";
  let allChars = lowerChars + upperChars + numberChars + specialChars;
  for(var i=0; i < passwordLength; i++ );
  let password = allChars.charAt(Math.floor(Math.random() * allChars.length));
  return password;
    }
  
  function submit(e){
    e.preventDefault();
    console.log();
    let passwordLength = document.getElementById("passwordLength").value;
    console.log(passwordLength);
    let password = generatePassword(passwordLength);
    document.getElementById("result").innerHTML = password;
    }
  
  