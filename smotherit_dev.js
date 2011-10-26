(function($){if(window.mikefsoapi!=="loaded"){

	var version = 2.19,
		checkedboxes, 
		txtbox, 
		txtjson, 
		pageInit = {},
		actbox,
		actboxul,
		page = {
			setup:false, 
			grading:false,
			gradingTrue:false, 
			reportComplete:false, 
			reportGrades:false
		},
		classSectionId,
		accessId,
		pingFn,
		pingBox,
		win = $(window),
		activityColors = {
			video:      { color: '#484a57', regex: /(video|screencast)[ ]*[-:]/i },
			activity:   { color: '#75756d', regex: /(act|activity|read|reading|poll)[ ]*[-:]/i },
			discussion: { color: '#88a75d', regex: /(disc|discuss|discussion|wimba)[ ]*[-:]/i },
			assignment: { color: '#e85b00', regex: /(asn|assign|assignment|deliverable|deliver|test)[ ]*[-:]/i },
			project:    { color: '#a84d10', regex: /(project)[ ]*[-:]/i },
			gps:        { color: '#f44e13', regex: /Professionalism/ }
		}
	;

	window.mikefsoapi = "loaded";
	
	// ===================================================================================================
	// ///////////////////////////////////////////////// PAGE STYLES
	
	$('body > *:not(script)').wrapAll('<div id="ajaxsitwrap"></div>');
	$('head').append('<link rel="stylesheet" href="http://wddbs.com/~SFW/smotherit/fsokit.css?v='+version+'" />');
	
	
	// ===================================================================================================
	// ===================================================================================================
	// ///////////////////////////////////////////////// INIT FOR STARTUP AND PULLS GLOBAL ACCOUNT/PAGE DATA
	
	var clearButton = function(elem){
		setTimeout(function(){
			var pane = $(elem.dpDiv).find('.ui-datepicker-buttonpane');
			
			pane.find('.ui-datepicker-close')
				.click(function() {
					$.datepicker._clearDate( elem.input );
					$(elem.input).val("Current");
					return false;
				}).appendTo( pane )
			;
			
		}, 50);
	};

	
	var baseinit = function(){

		// check the current fso page
		var url = window.location.href;
		
		page.setup = url.indexOf('setupActivities')!= -1 ? true : false;
		page.grading = (url.indexOf('gradings')!= -1 && url.indexOf('activityType=test') == -1) ? true : false;
		page.gradingTrue = url.indexOf('isGraded=true')!= -1 ? true : false;
		page.reportComplete = (url.indexOf('reportsCompletionClass')!= -1 ) ? true : false;
		page.reportGrades = url.indexOf('reportsGradesClass')!= -1 ? true : false;
		
		classSectionId = $('[name=classSectionId]').attr('fs:currentclasssectionid');
		accessId = $('[name=termId]').attr('fs:accesseventuuid');

		// modify current page css
		$('#headerWrapper').css({paddingTop:54}); /* 42 old, 12 diff */
		
		// CREATE STATIC TOP MENU
		actbox = $('<div class="smotherACT" />').insertAfter('#ajaxsitwrap');
		
		$('<div class="smotherBox smotherPad smotherBlank">No features are added for this FSO page.</div>'+
			'<div class="smotherBox smotherPad">FSO Status: <span class="ACTstatus actsup">Up</span></div>'+
			'<div class="smotherPad" style="float:left;">FSO-Kit v'+version+'</div>'+
			'<div class="smotherPad" style="float:left;"><span class="fsovoice-btn"><a target="_blank" href="http://fso.userecho.com/">Give Feedback</a></span></div>'+
			'<div style="clear:both;"></div>').appendTo(actbox)
		;

		pingBox = actbox.find('.ACTstatus');

		pingFn = function(){
			pingBox.removeClass('actsup actsdown').addClass('actsload').text('checking');
			
			$.ajax({
				url: '/com/fullsail/lms/service/remote/Academic.cfc',
				type: 'get',
				dataType: 'json',
				global: false,
				timeout: 10000,
				data: {
					method: 'searchTermsForAccount',
					_accountId: $('select[name="termId"]').attr('fs:accountId'),
					_accessEventUUID: $('select[name="termId"]').attr('fs:accessEventUUID'),
					_SISId: $('select[name="termId"]').attr('fs:SISId'),
					returnformat: 'json'
				},
				success: function(r){
					if(r.success!="false"){
						pingBox.addClass('actsup').text('up');
					}else{
						pingBox.addClass('actsdown').text('down');
					};
				},
				error: function(){
					pingBox.addClass('actsdown').text('down');
				},
				complete: function(){
					pingBox.removeClass('actsload');
					setTimeout(pingFn, 60000);
				}
			});
		};
		
		setTimeout(pingFn, 60000);

	};
	
	var removeBlankDiv = function(){
		actbox.find('.smotherBlank').remove();
	};
	
	
	// ===================================================================================================
	// ===================================================================================================
	// ===================================================================================================
	// ////////////////////////////////////////////////////////////////////// GLOBAL PUSH/PULL SAVE BUTTON (from top menu)
	
	var submitdates = function(i){
		try{$(checkedboxes[i-1]).removeClass('sithover');}catch(err){};
		var cb = checkedboxes[i];
		if(typeof cb !== "undefined"){
			cb = $(cb);
			cb.addClass('sithover');
			$('#loadertext').html('Saving changes, please wait... ('+(i+1)+'/'+checkedboxes.length+')');
			
			var forcepush = $('.forcepushdate').val();
			var forcepull = $('.forcepulldate').val();
			
			forcepush = (forcepush === 'Choose' || forcepush === 'Current') ? cb.find('input[name="pushDate"]').val() : forcepush;
			forcepull = (forcepull === 'Choose' || forcepull === 'Current') ? cb.find('input[name="pullDate"]').val() : forcepull;
						
			$.ajax({
				type: "post",
				dataType: "json",
				cache: false,
				url: "/com/fullsail/lms/service/remote/Delivery.cfc",
				data: {
					method: 'saveDelivery',
					_deliveryId: cb.find('.deliveryId').val(),
					_isImportant: 0,
					_isViewable: true,
					_sortOrder: cb.find('.sortOrder').val(),
					_accessEventUUID: $('[name=accessEventUUID]').val(),
					returnFormat: 'json',
					_activeDate: forcepush,
					_inactiveDate: forcepull
					//_weight: cb.find('select[name=weightSelect]').val()
				},
				success: function(r){
					cb.find('input[name=pushDate]').val(forcepush);
					cb.find('input[name=pullDate]').val(forcepull);
					i++;
					submitdates(i);	
				},
				error: function(){
					alert("A date submission failed, please refresh the page and try again.");
					closeloader();
				}
			});

		}else{
			closeloader();
			return;
		};
	};
	
	
	// typeCol
	// ===================================================================================================
	// ===================================================================================================
	// ===================================================================================================
	// ////////////////////////////////////////////////////////////////////// ACTIVITY SETUP PAGE
	
	pageInit.setup = function(){
		removeBlankDiv();
		
		$('.nameCol').width(317);
		$('.buttonsCol:first').width(84);
		$('.buttonsCol:not(:first)').css({paddingLeft:0, width:68});
		$('<span class="fitemp"><input type="checkbox" class="forceitem" name="forceitem" /></span>')
		    .insertBefore('.buttonsCol:not(:first)')
		    .css({zIndex:45, paddingRight:3})
		    .find('input')
		    .bind('click', function(e){e.stopPropagation();});
		
		// AUTO-CHECK FORCE-BOXES WHEN USER CLICKS ANYWHERE ON ROW
		$('.nameCol:not(:first)').bind('click.smotherit', function(){
			var t = $(this).parent().find('.forceitem');
			t.attr('checked', (t.attr('checked')==true?false:true));
			return false;
		});
		
		$(''+
			'<div class="smotherBox smotherPad">'+
				'<span style="font-weight:bold;">Change All Checkboxed:</span>&nbsp;&nbsp;&nbsp;'+
				'<span><em>Push: </em><input class="input_red_no_border_e forcepushdate"  readonly="readonly" name="pushDate" size="9" value="Choose" /></span>&nbsp;&nbsp;'+
				'<span><em>Pull: </em><input class="input_red_no_border_e forcepulldate" readonly="readonly" name="pullDate" size="9" value="Choose" /></span>'+
				'<span>&nbsp;&nbsp;<button class="submitforces">Save</button>&nbsp;&nbsp;<button class="resetchecks">Uncheck All</button></span>'+
			'</div>'+
		'').prependTo(actbox);
				
		$('.input_red_no_border_e').datepicker({ 
			dateFormat: 'M. dd, y',
			showButtonPanel: true,
			closeText: 'Use Existing',
			beforeShow: function(e, i){
				clearButton(i);
			},
			onChangeMonthYear: function(m, y, i){
				clearButton(i);
			}
		});
			
		$('.resetchecks').bind('click.smotherit', function(){
			$('input.forceitem').attr({checked:false});
		});
		
		$('.submitforces').bind('click', function(){
			openloader();
			checkedboxes = $('input.forceitem:checked').parent().parent();
			submitdates(0);
		});
		
		
		// SELECTABLE CHECKBOX CHANGER
		$('#sortable').selectable({
			filter: '.nameCol',
			selected:function(e,ui){
				var t = $(ui.selected).parent().find('.forceitem');
				t.attr('checked', (t.attr('checked')==true?false:true));
			}
		});
		
		$('.nameCol').each(function(){
			var nameCol = $(this),
				sname = nameCol.text();
			;
			for(var k in activityColors){
				var color = activityColors[k];
				if( sname.match(color.regex) ){
					nameCol.siblings('.typeCol').css({backgroundColor: color.color});
					break;
				};
			};
		});
		
	}; // END OF INITPAGESETUP
	

	// ===================================================================================================
	// ===================================================================================================
	// ===================================================================================================
	// ////////////////////////////////////////////////////////////////////// Report Complete
	
	pageInit.reportComplete = function(){
	if($.browser.mozilla){
		removeBlankDiv();
		$(''+
			'<div class="smotherBox smotherPad">'+
				'<span style="font-weight:bold;">Table styles fixed.</span>'+
			'</div>'+
		'').prependTo(actbox);
	
		win.unbind('scroll resize');
		$('body').css({position:'relative'});
		$('#content').css({
		    width: '97%',
		    margin: 0,
		    background: 'none',
		    paddingBottom:'20px',
		    height:'520px'
		});
		$('#contentTop').css({background:'none'});
		$('#contentBottom').remove();
		$('#rightCol').css({background:'#eaeaea'});
		$('#leftCol').css({
		    width:'auto',
		    maxWidth:'none',
		    position:'absolute',
		    left:'0',
		    right:'240px',
		    height:'410px',
		    marginBottom:'20px'
		});
		
		var crWrap = $('#classReportsWrapper').css({
		    width:'auto',
		    maxWidth:'none',
		    marginBottom:'20px',
		    overflow:'auto'
		});
		crWrap.scrollLeft(0);
		crWrap.scrollTop(0);
		
		var classReports = $('#classReports');
		classReports.css({
			position:'relative'
		});
		classReports.find('tbody').css({
		    position:'relative'
		});
		var classHead = $('<thead></thead>').prependTo(classReports);
		classReports.find('tr:first').appendTo(classHead).css({
		    position:'relative',
		    top:0,
		    left:0,
		    marginTop:0
		});
		classReports.find('tbody tr:first').css({marginTop:0, position:'static'});
		var chTop = classHead.offset().top - 40;
		var chLeft = classHead.offset().left;
		classHead.css({
			position:'fixed',
			top:chTop,
			left:chLeft
		});
		
		classReports.find('tbody tr').bind('click', function(){
			$(this).addClass('classReportActive').siblings().removeClass('classReportActive');
		});
		
		var firstColW = classReports.find('th:first-child').width();
		var firstCol = classReports.find('th:first-child, td:first-child').each(function(){
		    var t = $(this);
		    var tTop = t.offset().top;
		    var tLeft = t.offset().left;
		    t.attr('data-top', tTop);
		    $(this).css({
		        position:'fixed',
		        top: tTop,
		        left: tLeft,
		        width: firstColW
		    });
		}).filter('td');
		firstCol.filter('td:odd').css({background:'white'});
		$('#classReports tr td:nth-child(202n-200), #classReports th:nth-child(202n-200)').css({paddingLeft: 170});
		
		win.add(crWrap).bind('scroll.smotherit', function(){
			classHead.css({
				top: chTop - win.scrollTop(),
				left: chLeft - crWrap.scrollLeft()
			});
			classHead.find('th:first').css({top: chTop - win.scrollTop()});
			firstCol.css('top', function(){
				 return $(this).attr('data-top') - win.scrollTop() - crWrap.scrollTop();
			});
		}).trigger('scroll');
	};
	};


	// ===================================================================================================
	// ===================================================================================================
	// ===================================================================================================
	// ////////////////////////////////////////////////////////////////////// Grading Page
	
	pageInit.grading = function(){
		removeBlankDiv();
		
		$('.col980').css('width', '97%');
		$('#leftCol').css('width', '78%');
		$('.student .studentName').css({width:'auto'/*597*/, marginLeft:143});
		$('.student .icons').css({width:143}).prepend('<li class="right fsokit-btn kit-grade" style=""><a href="#" title="Quick Grade">G</a></li><li class="right fsokit-btn kit-except" style=""><a href="#" title="Give Exception">X</a></li>');
		
		// preload the preview page (first load always fails)
		var tmpiframe = $('<iframe src="http://course.online.fullsail.edu/?fuseaction=lms.enterClassSection&classSectionId='+classSectionId+'" width="1" height="1" />').appendTo(document.body);
		tmpiframe.bind('load', function(){
			$(this).remove();
		});
		
		// scrape student emails from roster, add E and X button to icons
		// ===================================================================================================
		// ////////////////////////////////////////////////////////////////////// Button Maker & Student Email Scraper	
		var studentEmails = {};
		$.ajax({
		    type:'get',
		    global: false,
		    url:'http://faculty.online.fullsail.edu/index.cfm?fuseaction=lms.rosterList',
		    success: function(h){
		        var html = $(h);
		        var students = html.find(".studentField");
		        students.each(function(){
		        	studentEmails[$(this).find('.studentID').text()] = $(this).find('a').text();
		        });
		        $('.student .icons').each(function(){
		        	var icons = $(this),
		        		activityName = icons.closest('.activity').children('h4').text(),
						student = icons.closest('.student'),
						studentTXT = student.find('.studentName').text(),
						studentID = studentTXT.slice( studentTXT.indexOf('(')+1 , studentTXT.indexOf(')') ),
						emailLink = 'mailto:' + studentEmails[studentID] + '?subject=Missing%20Activity&body=According%20to%20FSO%2C%20you%20have%20not%20completed%20the%20%22'+ activityName +'%22%20activity.%20%20Please%20contact%20me%20as%20soon%20as%20possible%20if%20this%20is%20in%20error.'
					;
					icons.prepend('<li class="right fsokit-btn kit-email" style=""><a href="'+ emailLink +'" title="Email Student">E</a></li>');
		        });
		    }
		});
		
		$(''+
			'<div class="smotherBox smotherPad">'+
				'<span style="font-weight:bold;">Enhanced</span>'+
			'</div>'+
			'<div class="smotherBox smotherPad">'+
				'<button class="sit-open-all-dl">Toggle download panels</button>'+
			'</div>'+
		'').prependTo(actbox);
		
		$('.activity').each(function(){
			var activitynum = $(this).attr('fs:activityid');
			$(this)
				.find('h4')
				.append('&nbsp;<a href="http://course.online.fullsail.edu/index.cfm?fuseaction=lms.activitiesAssignment&activityId='+activitynum+'" target="_blank" style="font-size:12px; color:#FF1100;" class="kit-preview">(preview)</a>')
				.find('.kit-preview')
				.bind('click', function(e){
					e.stopPropagation();
				})
			;
		});
		
		// ===================================================================================================
		// ////////////////////////////////////////////////////////////////////// Toggle Downloads Button
		
		$('.sit-open-all-dl').bind('click', function(){
			var dls = $('.downloads');
			dls[ ( dls.is(':visible')?'hide':'show' ) ]();
			return false;
		});
		
		$('.downloadIcon').each(function(){
		
			var oDownloadsPane = $(this).parent().parent().parent().find('.downloads');
        	var oTaskAssetData = {};
        
            $.ajax({ 
                type        : 'POST', 
                url         : '/com/fullsail/lms/service/remote/Asset.cfc',
                data        : {
                    method: 'listTaskAssets',
                    _taskId: $(this).parent().parent().parent().attr('fs:taskId'),
                    _accessEventUUID: $('#assignments').attr('fs:accessEventUUID'),
                    returnformat: 'json'
                },
                dataType    : 'json',
                success     : function(response){
                    if (response.success == true){
                        //Build the content to be appended to the list.
                        $(oDownloadsPane).empty();
                        if(response.results > 0){
                            for(var i=0;i<response.results;i++){
                                var oItem = response.data[i];
                                var sFileName = oItem.title + oItem.uuid + "." + oItem.extension;
                                var sFileTitle = oItem.title + "." + oItem.extension;
                                var sTaskAsset = "<li><a class='" + oItem.iconClass + "' href='" + oItem.assetURL + "'>" + sFileTitle + "</a></li>";
                                $(oDownloadsPane).append(sTaskAsset);
                            };
                        }else{
                            $(oDownloadsPane).append('<li>No files</li>');
                        };
                    };
                }
                                
            });
		
		});
		
				
		// ===================================================================================================
		// ////////////////////////////////////////////////////////////////////// Exception Button Code
		
		$('.student .kit-except a').live('click', function(){
			var link = $(this),
				student = link.parent().parent().parent(),
				sname = student.find('.studentName').text(),
				gradeLink = student.find('.gradeIcon').attr('href'),
				activityId = gradeLink.substring(gradeLink.indexOf('activityId=')+11, gradeLink.indexOf('&deliveryId')),
				deliveryId = gradeLink.substring(gradeLink.indexOf('deliveryId=')+11, gradeLink.indexOf('&accountId')),
				accountId = gradeLink.substring(gradeLink.indexOf('accountId=')+10, gradeLink.length)
			;
			sname = $.trim(sname.substring(0, sname.indexOf('(')-1));
			
			openExceptPopup();
			tipLoader.hide();
			tipError.hide();
			
			$('.kit-tooltip-tip-bot, .kit-tooltip-tip-top').show();
			
			exceptPopup
				.css({
					top: link.offset().top - exceptPopup.outerHeight() - 2,
					left: link.offset().left - 15
				})
				.find('.kit-submit-bar input')
				.val('Submit Exception: ' + sname)
			;
						
			if (exceptPopup.offset().top < $(window).scrollTop() + 60) {
				bot = false;
				$('.kit-tooltip-tip-bot').hide();
				exceptPopup.css({
					top: link.offset().top + 24
				});
			}else{
				$('.kit-tooltip-tip-top').hide();
			};
			
			exceptPopup
				.find('form')
				.unbind()
				.bind('submit', function(){
					tipLoader.show();
					$.ajax({
					    type: 'post',
					    global: false,
					    dataType: 'json',
					    data:{
					        method          : 'saveStudentActivityDelivery',
			                _accountId      : accountId,                               
			                _activityId     : activityId,
			                _deliveryId		: deliveryId,
			                _classSectionId : classSectionId,
			                _inactiveDate   : exceptPopup.find('.kit-entries input').val(),
			                _accessEventUUID: accessId,
					        returnFormat: 'json'
					    },
					    url: '/com/fullsail/lms/service/remote/Learning.cfc',
					    success: function(r){
					        if(r.success !== true){
					        	tipError.show().text('An unknown error occurred.');
					        }else{
					        	closeloader(); /* closes all loader overlays */
					        	student.find('.studentName').append('<em style="color:red"> Exception</em>');
					        };
					    },
					    error: function(){
					    	tipError.show().text('An unknown error occurred.');
					    },
					    complete: function(){
					    	tipLoader.hide();
					    }
					});
					return false;
				});
			;
			
			/*
			$.ajax({ 
	            type: 'POST', 
	            url: '/com/fullsail/lms/service/remote/Learning.cfc',
	            data: {
	                method          : 'saveStudentActivityDelivery',
	                _accountId      : accountId,                               
	                _activityId     : activityId,
	                _classSectionId : classSectionId,
	                _activeDate     : oParentForm.children('[name=exceptionActiveDate]').val(),
	                _inactiveDate   : oParentForm.children('[name=exceptionInactiveDate]').val(),
	                _accessEventUUID: accessId,
	                returnformat: 'json'
	            },
	            dataType: 'json',
	            error: function(){
	                closeAsyncSavingMessage();
	                    $('ul.errorMessage').html('<li>This request generated an error.  Please try again later</li>');
	                    $('ul.errorMessage').show();
	            },
	            success: function(response){
	                if (!validateCallResponse(response)) {
	                    closeAsyncSavingMessage();
	                    return;
	                }
	                
	                //hide any previous errors
	                $('ul.errorMessage').html('');
	                $('ul.errorMessage').hide();
	                //bold it
	                var sActivitySelector = 'li#activity' + oParentForm.children('[name=activityId]').val();
	                $(sActivitySelector).addClass('activityBold');
	                //show the reset icon
	                var sResetIconSelector = '[id=resetIcon' + oParentForm.children('[name=activityId]').val() + ']';
	                $(sResetIconSelector).css('display', 'block');
	                closeAsyncSavingMessage();
	            } 
	                        
	        }); //ajax
*/
			
			return false;
		});
		
		// ===================================================================================================
		// ////////////////////////////////////////////////////////////////////// Grade Button Code
		
		$('.student .kit-grade a').live('click', function(){
			var link = $(this),
				student = link.parent().parent().parent(),
				sname = student.find('.studentName').text(),
				gradeLink = student.find('.gradeIcon').attr('href'),
				activityId = gradeLink.substring(gradeLink.indexOf('activityId=')+11, gradeLink.indexOf('&deliveryId')),
				deliveryId = gradeLink.substring(gradeLink.indexOf('deliveryId=')+11, gradeLink.indexOf('&accountId')),
				accountId = gradeLink.substring(gradeLink.indexOf('accountId=')+10, gradeLink.length)
			;
			sname = $.trim(sname.substring(0, sname.indexOf('(')-1));
			openGradesPopup();
			tipLoader.hide();
			tipError.hide();
			
			$('.kit-tooltip-tip-bot, .kit-tooltip-tip-top').show();
			
			gradesPopup
				.css({
					top: link.offset().top - gradesPopup.outerHeight() - 2,
					left: link.offset().left - 15
				})
				.find('.kit-submit-bar input')
				.val('Submit: ' + sname)
			;
						
			if (gradesPopup.offset().top < $(window).scrollTop() + 60) {
				bot = false;
				$('.kit-tooltip-tip-bot').hide();
				gradesPopup.css({
					top: link.offset().top + 24
				});
			}else{
				$('.kit-tooltip-tip-top').hide();
			};
			
			if(page.gradingTrue === true){
				tipLoader.show();
				$.ajax({
					url: "http://faculty.online.fullsail.edu/index.cfm?fuseaction=lms.gradingsAssignment&activityId="+activityId+"&accountId="+accountId,
					global: false,
					type: 'get',
					success: function(h){
						var score = $(h).find('.gradeScore strong').text();
						gradesPopup.find('.kit-entries input').val(score);
						gradesSlider.slider('value', score);
						tipLoader.hide();
					}
				});
			};
			
			gradesPopup
				.find('form')
				.unbind()
				.bind('submit', function(){
					tipLoader.show();
					
					$.ajax({
					    type: 'post',
					    global: false,
					    dataType: 'json',
					    data:{
					        _accountId: accountId,
					        _activityId: activityId,
					        _deliveryId: deliveryId,
					        _classSectionId: classSectionId,
					        _accessEventUUID: accessId,
					        _gradeScore: gradesPopup.find('.kit-entries input').val(),
					        _comment: gradesPopup.find('.kit-entries textarea').val(),
					        method: 'saveSimpleGrade',
					        returnFormat: 'json'
					    },
					    url: '/com/fullsail/lms/service/remote/Learning.cfc',
					    success: function(r){
					        if(r.success !== true){
					        	tipError.show().text('An unknown error occurred.');
					        }else{
					        	closeloader(); /* closes all loader overlays */
					        	if(page.gradingTrue === false){
					        		student.fadeOut(function(){student.remove();});
					        	};
					        };
					    },
					    error: function(){
					    	tipError.show().text('An unknown error occurred.');
					    },
					    complete: function(){
					    	tipLoader.hide();
					    }
					});
					return false;
				});
			;
			return false;
		});
	};
	
	
	// SET UP MAIN GLOBAL PREREQS
	baseinit();
	
	
	// ===================================================================================================
	// ===================================================================================================
	// ===================================================================================================
	// //////////////////////////////////////////////////////////////////////  dialog popups
	
	var overlay = $('<div style="position:fixed; display:none; top:0; left:0; width:100%; height:100%; background:#555; opacity:0.7; z-index:1000;"></div>').insertAfter('#ajaxsitwrap');
	
	var loaderb = $('<div style="-moz-box-shadow:0 0 10px black; -webkit-box-shadow:0 0 10px black; position:fixed; display:none; height:30px; padding:12px 16px; background:url(http://codeinfused.com/ajax-loader.gif) no-repeat 93% 50% white; z-index:1001;"><span id="loadertext" style="display:block; height:30px; line-height:30px; padding-right:42px;">Saving changes, please wait ...</span></div>').insertAfter('#ajaxsitwrap');
	
	var gradesPopup = $(''+
		'<div class="kit-tooltip-wrap">'+
			'<div class="kit-tooltip-tip-top"></div>'+
			'<div class="kit-tooltip-tip-bot"></div>'+
			'<div class="kit-tooltip-body tip-grading">'+
				'<form action="#">'+
				'<div class="kit-tooltip-top"></div>'+
				'<div class="kit-entries">'+
					'<p>Grade:</p>'+
					'<input type="text" size="3" value="100" tabindex="1" /><div class="grade-slider"></div>'+
					'<p>Comments:</p>'+
					'<textarea tabindex="2"></textarea>'+
					'<div class="clear"></div>'+
				'</div>'+
				'<div class="kit-submit-bar">'+
					'<input type="submit" value="Submit grade" />'+
				'</div>'+
				'</form>'+
				'<div class="clear"></div>'+
				'<div class="kit-loader"></div>'+
			'</div>'+
			'<div class="kit-error">An unknown error occurred.</div>'+
		'</div>'
		).insertAfter('#ajaxsitwrap')
	;
	
	var exceptPopup = $(''+
		'<div class="kit-tooltip-wrap">'+
			'<div class="kit-tooltip-tip-top"></div>'+
			'<div class="kit-tooltip-tip-bot"></div>'+
			'<div class="kit-tooltip-body tip-except">'+
				'<form action="#">'+
				'<div class="kit-tooltip-top"></div>'+
				'<div class="kit-entries">'+
					'<p>Select a date to extend this exception to:</p>'+
					'<input type="text" size="10" value="" tabindex="1" class="exceptDate" />'+
					'<div class="clear"></div>'+
				'</div>'+
				'<div class="kit-submit-bar">'+
					'<input type="submit" value="Submit Exception" />'+
				'</div>'+
				'</form>'+
				'<div class="clear"></div>'+
				'<div class="kit-loader"></div>'+
			'</div>'+
			'<div class="kit-error">An unknown error occurred.</div>'+
		'</div>'
		).insertAfter('#ajaxsitwrap')
	;
	
	exceptPopup.find('p').css('paddingBottom', 5).end().find('.kit-tooltip-body').width(260);
	exceptPopup.find('.exceptDate').datepicker({ 
		dateFormat: 'M. dd, y',
		showButtonPanel: true,
		closeText: 'Use Existing',
		beforeShow: function(e, i){
			clearButton(i);
		},
		onChangeMonthYear: function(m, y, i){
			clearButton(i);
		}
	});
	
	var tipLoader = $('.kit-loader'),
		tipError = $('.kit-error'),
		gradesSlider = gradesPopup.find('.grade-slider')
	;
	
	gradesPopup.find('.kit-entries input').bind('keyup', function(){
		gradesSlider.slider('value', $(this).val());
	});
	
	gradesSlider.slider({
		max: 100,
		step: 1,
		value: 100,
		slide: function(e, ui){
			gradesPopup.find('.kit-entries input').val(ui.value);
		}
	});

	overlay.click(function(){
		closeloader();
		return false;
	});
	
	var openOverlay = function(){
		overlay.css({display:'block'});
	};

	var openloader = function(){
		openOverlay();
		loaderb.css({
			display:'block',
			left:$(window).width()/2-loaderb.innerWidth()/2,
			top:$(window).height()/2-loaderb.innerHeight()/2
		});
	};
	
	var closeloader = function(){
		overlay.css({display:'none'});
		loaderb.css({display:'none'});
		gradesPopup.css({display:'none'});
		exceptPopup.css({display:'none'});
	};
	
	var openGradesPopup = function(){
		openOverlay();
		gradesPopup.css({display:'block'});
		gradesPopup.find('.kit-entries input').val(100);
		gradesPopup.find('textarea').val("");
		gradesSlider.slider('value', 100);

	};
	
	var openExceptPopup = function(){
		openOverlay();
		exceptPopup.css({display:'block'});
	};
	
	// end global prereqs	
	
	
	// INIT MODULES BASED ON PAGE
	$.each(page, function(i, v){
		try{
			if(v===true && i !== 'gradingTrue'){
				pageInit[i]();
			};
		}catch(err){
		
		};
	});
	
	
	
};})(jQuery);