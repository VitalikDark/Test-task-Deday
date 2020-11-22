const input = document.querySelectorAll('.number input');
		const btnInc = document.querySelectorAll('.btn-inc')
		const btnDec = document.querySelectorAll('.btn-dec')

		btnInc.forEach(function(e, i) {
		  e.addEventListener('click', function() {
		    	if (+input[i].value > 0) { input[i].value--; }
		  })
	  })
	  btnDec.forEach(function(e, i) {
		  e.addEventListener('click', function() {
		   	input[i].value++;
		  })
	  })

		// btnInc.addEventListener('click', function() {
		// 	if (+input.value > 0) { input.value--; }
		// });

		// btnDec.addEventListener('click', function() {
		// 	input.value++;
		// });

		input[0].value = 1;
		input[1].value = 1;
		input[2].value = 0;