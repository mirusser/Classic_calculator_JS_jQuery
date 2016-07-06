
$(document).ready(function(){
	var b_value = document.getElementById("input_display"); // Get text field
	var prev_value = 0; 
	var operation;
	var dot = 0;
	$('#calculator').draggable();
	
	$('.button').click(function() {
			var button_value = $(this).attr("value");
			switch(button_value)
			{
				case '.':
					if(dot===0)
					{
						b_value.value += button_value;
						dot++;
					}
					if((b_value.value % 1) !=0)
					{
						dot++;
					}
					break;				
				case '*':
					operation = '*'
					prev_value = b_value.value;
					b_value.value = "";
					dot=0;
					break;
				case '/':
					operation = '/'
					prev_value = b_value.value;
					b_value.value = "";
					dot=0;
					break;
				case '+':
					operation = '+'
					prev_value = b_value.value;
					b_value.value = "";
					dot=0;
					break;
				case '-':
					operation = '-'
					prev_value = b_value.value;
					b_value.value = "";
					dot=0;
					break;			
				case 'C':
					operation = ''
					prev_value = "";
					b_value.value = "";
					dot=0;
					break;							
				case '=':
					switch(operation)
					{
						case '*':
							prev_value *= b_value.value;
							b_value.value = prev_value;
							prev_value = "";
							break;
						case '/':
							prev_value /= b_value.value;
							b_value.value = prev_value;
							prev_value = "";
							break;
						case '+':
							prev_value = eval(prev_value) + eval(b_value.value);
							b_value.value = prev_value;
							prev_value = "";							
							break;
						case '-':
							prev_value -= b_value.value;
							b_value.value = prev_value;
							prev_value = "";
							break;
						default:
							operation = "";
					}
					break;
				default:
					b_value.value += button_value; // Change field
					break;
			}
     }); 
});