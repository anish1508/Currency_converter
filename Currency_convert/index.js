document.getElementById('btn').addEventListener('click',function(){
    const fromCurrency = document.querySelectorAll('.currency')[0].value;
    const toCurrency = document.querySelectorAll('.currency')[1].value;
    const amount = document.getElementById('input').value;

    if(amount===''){
        alert('please enter the valid amount');
        return;
    }
    const apikey='19821f9fa47adbafde6519c2136e88b3';
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data =>{
            const rate = data.rates[toCurrency];
            if(rate){
                const converted_amount = amount*rate;
                document.getElementById('result').value = converted_amount.toFixed(2);
            }
            else{
                alert('Conversion rate is not available for the selected currency');
            }
        })
    .catch(error =>{
        console.error('Error fetching exchange rates',error);
        alert('An error occurred while fetching exchange rates. Please try again later.');
    });

});