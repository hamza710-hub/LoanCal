document.getElementById('loan-form').addEventListener('submit', function(e){

  document.getElementById('results').style.display = 'none';

  document.getElementById('loading').style.display = 'block';
  setTimeout(calculate, 2000);

  e.preventDefault();
});

function calculate(){
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12 ;
    const calculatedPayments = parseFloat(years.value)*12;

    // for monthly payments

    const x = Math.pow(1 + calculatedInterest , calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = ((monthly*calculatedPayments)).toFixed(2);
      totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);

      document.getElementById('loading').style.display = 'none';

      document.getElementById('results').style.display = 'block';

    }else{
      showError('Please enter correct value');
    }
  console.log('Hello');

 
}

function showError(error){

  document.getElementById('results').style.display = 'none';

  document.getElementById('loading').style.display = 'none';

  const ErrDiv = document.createElement('div');

  //calling elements 
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //Add class to errror div
  ErrDiv.className = 'alert alert-danger';

  //Append a text node to Div
  const node = document.createTextNode(error); //error is the given input to showError();
  ErrDiv.appendChild(node);

  //Div must be displayed ABOVE ERROR
  card.insertBefore(ErrDiv , heading);
  
  setTimeout(clearErrDiv ,3000);
}

function clearErrDiv(){
  document.querySelector('.alert').remove();
}