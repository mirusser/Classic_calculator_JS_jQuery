
$(document).ready(function(){
	var b_value = document.getElementById("input_display"); // Get text field
	var prev_value = 0; 
	var operation;
	$('#calculator').draggable();
	
	$('.button').click(function() {
			var button_value = $(this).attr("value");
			switch(button_value)
			{
				case '.':
					if(b_value.value % 1 !=0) //checking if value is float, if is, then you can't put another dot
					{

					}
					else
					{
						b_value.value += button_value; //if value is integer then you can put a dot
					}							
					break;				
				case '*':
					operation = '*'
					prev_value = b_value.value;
					b_value.value = "";
					break;
				case '/':
					operation = '/'
					prev_value = b_value.value;
					b_value.value = "";
					break;
				case '+':
					operation = '+'
					prev_value = b_value.value;
					b_value.value = "";
					break;
				case '-':
					operation = '-'
					prev_value = b_value.value;
					b_value.value = "";
					break;			
				case 'C':
					operation = ''
					prev_value = "";
					b_value.value = "";
					break;							
				case '=':
					switch(operation)
					{
						case '*':
							prev_value *= b_value.value;
							b_value.value = prev_value;
							/*prev_value = "";*/
							break;
						case '/':
							prev_value /= b_value.value;
							b_value.value = prev_value;
							/*prev_value = "";*/
							break;
						case '+':
							prev_value = eval(prev_value) + eval(b_value.value);
							b_value.value = prev_value;
							/*prev_value = "";	*/						
							break;
						case '-':
							prev_value -= b_value.value;
							b_value.value = prev_value;
							/*prev_value = "";*/
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