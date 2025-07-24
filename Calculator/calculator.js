let calulation='';
document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
    calulation += key;
    output();
  } else if (key === 'Enter') {
    equal();
  } else if (key === 'Backspace') {
    backspace();
  } else if (key === 'Escape') {
    clean();
  } else if (key === '%') {
    percent();
  }
});


    function calculating(value)
    {
        calulation+=value;
        console.log(calulation);
        output();
     
    }

    function clean()
    {
        calulation='';
        console.log(calulation);
        output();
    }

   function equal() {
      try {
        calulation = String(eval(calulation));
      } catch {
        calulation = 'Invalid Expression';
        setTimeout(() => {
          calulation = '';
          output();
        }, 1500);
      }
      output();
}

    function percent()
    {
      try{
        calulation=eval(calulation)/100;
      }
      catch{
        calulation='error';
      }
      output();
    }

    function backspace()
    {
      calulation=calulation.slice(0,-1);
       output();
    }


    function output()
    {
        const inputElement=document.querySelector('.input-button');
        inputElement.value=calulation;
    }


    