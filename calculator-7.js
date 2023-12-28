$(function(){

	calc();

	$('#calc_plan').on('change', calc);
	$('#inv_amount').bind('change keyup', calc).on('keypress', isNumberKey);

});

function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 45 || charCode > 57))
		return false;
	return true;
}

function calc() {

	var plan = $('#calc_plan').val();
	var amount = $('#inv_amount').val();
	var percent;

	switch (plan) {
		case '1':
			switch (true) {
				case (amount=>20):
                    
					dpercent = 1;
					tpercent = 200;
					break;
				
				case (amount>1000):
                    
					dpercent = 0;
					tpercent = 0;
					break;

			   default:
					dpercent = 1;
					tpercent = 200;
			}
			break;
		case '2':
			switch (true) {
				case (amount=>1000):
                    
					dpercent = 1.5;
					tpercent = 200;
					break;
				
				case (amount>2500):
                    
					dpercent = 0;
					tpercent = 0;
					break;

			   default:
					dpercent = 1.5;
					tpercent = 200;
			}
			break;
		case '3':
			switch (true) {
				case (amount=>2500):
                    
					dpercent = 2;
					tpercent = 200;
					break;
				
				case (amount>5000):
                    
					dpercent = 0;
					tpercent = 0;
					break;

			   default:
					dpercent = 2;
					tpercent = 200;
			}
			break;
		case '4':
			switch (true) {
				case (amount=>5000):
                    
					dpercent = 2.5;
					tpercent = 200;
					break;
				
				case (amount>10000):
                    
					dpercent = 0;
					tpercent = 0;
					break;

			   default:
					dpercent = 2.5;
					tpercent = 200;
			}
			break;
		case '5':
			switch (true) {
				case (amount=>10000):
                    
					dpercent = 3;
					tpercent = 200;
					break;
				
				case (amount>50000):
                    
					dpercent = 0;
					tpercent = 0;
					break;

			   default:
					dpercent = 3;
					tpercent = 200;
			}
			break;

	


	}

$('#assign_per').val(tpercent+'%');
	var total = amount*tpercent/100;
	$('#total_return').val('$'+total.toFixed(2));


	var daily = amount*dpercent/100;
	$('#daily_return').val('$'+daily.toFixed(2));

	if(total <= 0){
		$('#net_profit').val('0.00');
	}else{
		$('#net_profit').val('$'+(total-amount).toFixed(2));
	}




}
