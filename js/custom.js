$(function() {
	var documentWidth = $(document).width();
	$('body').on("click", '.modal', function() {
		var popupid = $(this).attr('rel');
		$('#' + popupid).fadeIn();
		$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(50);
		
			var popuptopmargin = ($('#' + popupid).height() + 10) / 2;
			var popupleftmargin = ($('#' + popupid).width() + 10) / 2;
					
			if(documentWidth < 979){
				$('#' + popupid).css({
					'top' : $(document).scrollTop() + 100,
					'margin-left' : -popupleftmargin
				});				
			}else{
				$('#' + popupid).css({
					'margin-top' : -popuptopmargin,
					'margin-left' : -popupleftmargin
				});
			}
	});
	$('#fade, .close-modal').on("click", function() {
		$('#fade, .modal-box').fadeOut(50);
		return false;
	});
});
$(function() {
	$('.btn.start-test').on('click', function() {
		$('[data-index="1"]').fadeOut(0);
		$('[data-index="2"]').fadeIn(0);
		
			$('.layer-block-2').fadeOut(0);
			$('.layer-block').fadeIn(0);		
	});
	$('.back').on('click', function() {
		
		var index = $(this).parents('.tab-item').data('index');
		
		$(this).parents('.tab-item').css("display", "none");
		$('.tab-item[data-index="'+(index - 1)+'"]').css("display", "block");
		
		if(index < 2){
			$('.layer-block-2').fadeIn(0);
			$('.layer-block').fadeOut(0);
		}
				
	});	
	$('.forward').on('click', function() {
		
		var preindex = $(this).parents('.tab-item').data('index');
		var index = $(this).parents('.tab-item').data('index') + 1;
		
	
		
		var li = $('.tab-item[data-index="'+preindex+'"]').find('.list ul li').length;
		var active_li = $('.tab-item[data-index="'+preindex+'"]').find('.list ul li.active').length;
		var active_li_val = $('.tab-item[data-index="'+preindex+'"]').find('.list ul li.active').attr('value');
		
		if(li > 1){
			if(active_li > 0){
				if (preindex == 3){
					if (active_li_val=='Я работаю один'){
						alert("Мы не работаем с клиентами без коллцентра или менеджера по продажам")	
					   return false;
					}
				}
					if((index - 1) != 6){
						$(this).parents('.tab-item').css("display", "none");
						$('.tab-item[data-index="'+index+'"]').css("display", "block");
					}				
			}else{
				alert('Выберите вариант ответа!');
				return false;				
			}
		}


	});
	
	$('.list ul li').on('click', function() {
		var index = $(this).parents('.tab-item').data('index');
		var value = $(this).text();
		
		$('.tab-item[data-index="'+(index)+'"] li').removeClass("active");
		$(this).addClass("active");
		
		$('[name="step_'+(index-1)+'"]').val(value);
		
	});
	
	$('[name="phone"]').keyup(function() {
		var phone = $(this).val();		
		$('[name="step_7"]').val(phone);
	});
	
	
	$(".bonus-btn").on("click", function(){
				
		$.ajax({
			url: '/send/send.php',
			method: 'POST',
			dataType: 'html',
			data: $('#send').serialize(),
			success: function(data){
                console.log(data);
				if(data == 1){
					$(this).parents('.tab-item').css("display", "none");
					$('.tab-item[data-index="6"]').fadeOut(0);
					$('.layer-block,.layer-block-2').fadeOut(0);
					$('.result-send').fadeIn(0);
					$('.layer-block-3').fadeIn(0);
                    fbq('track', 'Contact');
                    ym(63267841,'reachGoal','order');
				}else{
					$('#phone1').addClass('error');
					alert('Заполните номер телефона!');
				}
			}
		});
	});	
	
	
	$('.modal-content .btn').on('click', function(e) {
		e.preventDefault();

		$.ajax({
			url: '/send/call.php',
			method: 'POST',
			dataType: 'html',
			data: $('#call').serialize(),
			success: function(data){
              	console.log(data);
				if(data == 1){
					$('.result-call').text('Ваше сообщение успешно отправлено!').fadeIn(0).delay(3000).fadeOut(0);
					//$('#call').reset();
                    fbq('track', 'Contact');
                    ym(63267841,'reachGoal','call');
					setTimeout(function(){
						$('.modal-1').fadeOut(50);
					},3000);
				}else{
					$('#phone2').addClass('error');
					$('.result-call').text('Заполните поле телефон!').fadeIn(0).delay(3000).fadeOut(0);
				}
			}
		});		
	});
	
	$("#phone1").mask("+7(999)999-99-99");
	$("#phone2").mask("+7(999)999-99-99");
});
