
	$(function(){
		$('.tab-panels .tabs li').on('click', function(){
			var $panel = $(this).closest('.tab-panels')
			//figure out which panel to show
			var panelToShow = $(this).attr('data');

			//Changing Tab class to active to show highlight
			$panel.find('.tabs li.active').removeClass('active');
			$(this).addClass('active');
			
			//hide current panel
			$panel.find('.panel.active').slideUp(300, showNextPanel);

			//show panel
			function showNextPanel() {
				$(this).removeClass('active');

				$('#'+panelToShow).slideDown(300, function(){
					$(this).addClass('active');
				});
			}
			
		});
	});
