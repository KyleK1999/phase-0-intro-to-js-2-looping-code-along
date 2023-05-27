function writeCards(names) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  
  const names = ["Guadalupe", "Ollie", "Aki"];
  const messages = writeCards(names);
  console.log(messages);
  function countDown(number){
    for (let i=number; i>=0; i--) {
        console.log(i);
    }
  }