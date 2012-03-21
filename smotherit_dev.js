/*
	Major release 3.03
	Adapting FSO-Kit to the ajax upgrade of FSO
	Ajax-loaded pages will receive functionality
	
	TODO
	==============
	April 1st Vader popup
*/

/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 */
;(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
/*
 * jQuery hashchange event - v1.2 - 2/11/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 */
;(function($,i,b){var j,k=$.event.special,c="location",d="hashchange",l="href",f=$.browser,g=document.documentMode,h=f.msie&&(g===b||g<8),e="on"+d in i&&!h;function a(m){m=m||i[c][l];return m.replace(/^[^#]*#?(.*)$/,"$1")}$[d+"Delay"]=100;k[d]=$.extend(k[d],{setup:function(){if(e){return false}$(j.start)},teardown:function(){if(e){return false}$(j.stop)}});j=(function(){var m={},r,n,o,q;function p(){o=q=function(s){return s};if(h){n=$('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;q=function(){return a(n.document[c][l])};o=function(u,s){if(u!==s){var t=n.document;t.open().close();t[c].hash="#"+u}};o(a())}}m.start=function(){if(r){return}var t=a();o||p();(function s(){var v=a(),u=q(t);if(v!==t){o(t=v,u);$(i).trigger(d)}else{if(u!==t){i[c][l]=i[c][l].replace(/#.*/,"")+"#"+u}}r=setTimeout(s,$[d+"Delay"])})()};m.stop=function(){if(!n){r&&clearTimeout(r);r=0}};return m})()})(jQuery,this);


;(function($){

if(window.mikefsoapi!=="loaded"){

	var version = '3.03',
		currentPage,
		pageGlobalPromise = true,
		pageInitPromise = false,
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
			reportGrades:false,
			gradingPosts:false
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
		},
		changelog = [
			'v3.03: Added dates to Discussion Grading',
			'v3.01: Added "mia report" emailer',
			'v3.00: Fixed FSOKit to adapt to Grading page changes',
			'v2.16: Quick-Exception popup added to Grading page',
			'v2.15: Added color coding for Setup page'
		]
	;

	window.mikefsoapi = "loaded";

	
	// ===================================================================================================
	// ///////////////////////////////////////////////// PAGE STYLES
	
	//$('body > *:not(script)').wrapAll('<div id="ajaxsitwrap"></div>');
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
	
	
	// nemesis joke.
	// ===================================================================================================
	var today = new Date();
	var isA1 = false;
	var isNemesis = false;
	var instructor = $(".colorF:contains('Instructor')").text();
	
	if(today.getMonth()===3 && today.getDate()===1){
		isA1 = true;
	};
	
	if(instructor.indexOf("Tagtekin") !== -1){
		isNemesis = true;
	};
	
	var initDarth = function(){
		var dartholay = $('<div />').appendTo(document.body).css({position:"fixed", width:"100%", height:"100%", background:"#333", top:0, left:0, opacity:0.8, zIndex:2000});
		var darth = $('<div><p>Happy April Fools!</p></div>').appendTo(document.body).css({position:"absolute", width:723, height:564, top:20, left:( $(window).width()/2 - 361 ), zIndex:2001, background:"url(http://images.paraorkut.com/img/funnypics/images/d/darth_vader-13398.gif) no-repeat center center"});
		darth.find('p').css({display:"block", position:'absolute', bottom:-50, left:0, fontSize:26, color:"white", width:"100%", textAlign:"center"});
		darth.add(dartholay).bind('click', function(){
			dartholay.remove();
			darth.remove();
		});
	};
	
	var initMario = function(){
		//$(document.body).css('background', 'url(http://img138.imageshack.us/img138/7143/snesworldbykeryg32rp8.jpg) no-repeat fixed bottom center white');
		
		if($('.mario').length > 0){
			return;
		}
		
		$.get('http://www.pimpmynintendo.com/images/super-mario-bros-3-background-sprites-sheet.png');
		
		var mario = $('<div class="mario" />').appendTo(document.body).css({
			position: 'fixed',
			bottom: -100,
			left: -100,
			background: 'url(http://th311.photobucket.com/albums/kk480/Blackvegi/th_mario.gif) no-repeat',
			width: 33,
			height: 39
		});
		var bowser = $('<div class="bowser" />').appendTo(document.body).css({
			position: 'fixed',
			bottom: 111,
			right: 276,
			background: 'url(http://th264.photobucket.com/albums/ii179/Ferballz/th_Big-Bowser.gif) no-repeat',
			width: 34,
			height: 40
		});
		$('<div />').appendTo(document.body).css({
			position: 'fixed',
			bottom: 0,
			right: 130,
			background: 'url(http://mmii.info/icons/HeLlHaWk23/mario_piranhaPlantPipe.gif) no-repeat',
			width: 80,
			height: 80
		});
		$('<div />').appendTo(document.body).css({
			position: 'fixed',
			bottom: 0,
			right: 220,
			background: 'url(http://www.pimpmynintendo.com/images/super-mario-bros-3-background-sprites-sheet.png) no-repeat 0px -205px',
			width: 230,
			height: 116
		});
		
		var marioFn = function(){
			mario.css({
				bottom: 80,
				left: '-20%'
			}).animate({
				bottom: 500,
				left: '120%'
			}, 14000);
		};
		setTimeout(marioFn, 1500);
		setInterval(marioFn, 40000);
	};
	
	if(isA1===true){initDarth();initMario();}else if(isNemesis===true){initMario();}


	// SET UP DIV FOR PINGING IFRAME
	// ===================================================================================================

	var pingiframe = $("<div />");
	pingFn = function(){
		pingBox = actbox.find('.ACTstatus');
		pingBox.removeClass('actsup actsdown').addClass('actsload').text('checking');
		pingiframe.remove();
		pingiframe = $('<iframe src="http://faculty.online.fullsail.edu/index.cfm?fuseaction=lms.reportsGradesClass" width="100" height="100" />').appendTo(document.body).css({display:"none"});
		setTimeout(pingFn, 120000);
		
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
			}
		});
	};
	
	setTimeout(pingFn, 180000);
	
	
	// =========================================================================================================
	// =========================================================================================================
	// AJAXSETUP AND BASEINIT HAVE PROMISE VARIABLES
	// THIS LISTENER WAITS FOR BOTH, AND FIRES THE RESOLVE (then resets)
	
	var pageTimer = setInterval(function(){
		if(pageGlobalPromise === true && pageInitPromise === true){
			pageGlobalPromise = false;
			pageInitPromise = false;
			resolveinit();
		};
	}, 200);

	
	
	// modify current page css
	$('#headerWrapper').css({paddingTop:54}); /* 42 old, 12 diff */
	
	// CREATE STATIC TOP MENU
	actbox = $('<div class="smotherACT" />').appendTo(document.body);
	
	// =========================================================================================================
	// =========================================================================================================
	// =========================================================================================================
	// FILL THE ACTION BAR (actbox)
	
	$('<div class="smotherBox smotherPad smotherBlank">No features are added for this FSO page.</div>'+
		'<div class="smotherBox smotherPad">FSO Status: <span class="ACTstatus actsup">Up</span></div>'+
		'<div class="smotherPad" style="float:left;">'+
			'<span class="actbox-ver">FSO-Kit v'+version+'</span>'+
			'<span class="actbox-btn"><a target="_blank" href="http://fso.userecho.com/">Give Feedback</a></span>'+
			'<span class="actbox-btn changelog-btn"><a href="#">Changelog</a></span>'+
			'<span class="actbox-btn mario-btn"><a href="#">Mario Me Up</a></span>'+
		'</div>'+
		'<div style="clear:both;"></div>').appendTo(actbox)
	;
	
	
	// =========================================================================================================
	// =========================================================================================================
	// =========================================================================================================
	// BASEINIT: ACTIVATE ACTBOX DATA PER PAGE
	
	var resolveinit = function(){
		
		classSectionId = $('[name=classSectionId]').attr('fs:currentclasssectionid');
		accessId = $('[name=termId]').attr('fs:accesseventuuid');

		// =========================================================================================================
		// =========================================================================================================
		// =========================================================================================================
		// CHECK THE CURRENT FSO PAGE
		
		var url = window.location.href;
				
		page.setup = url.indexOf('setupActivities')!= -1 ? true : false;
		page.grading = (url.indexOf('gradings')!= -1 && url.indexOf('activityType=test') == -1 /*&& url.indexOf('activityType=discussion') == -1*/ ) ? true : false;
		page.gradingTrue = url.indexOf('isGraded=true')!= -1 ? true : false;
		page.reportComplete = (url.indexOf('reportsCompletionClass')!= -1 ) ? true : false;
		page.reportGrades = url.indexOf('reportsGradesClass')!= -1 ? true : false;
		page.gradingPosts = ( url.indexOf('gradingsDiscussion')!= -1 && url.indexOf('activityId')!= -1 )
		
		// INIT MODULES BASED ON PAGE
		$.each(page, function(i, v){
			try{
				if(v===true && i !== 'gradingTrue'){
					pageInit[i]();
				};
			}catch(err){
			
			};
		});
		
	};
	
	var baseinit = function(){
	
		removeBlankDiv();
		$('<div class="smotherBox smotherPad smotherBlank">No features are added for this FSO page.</div>').prependTo(actbox);

		resolveinit();
		
	}; // end base-init
	
	
	var removeBlankDiv = function(){
		actbox.find('.smotherBlank').remove();
		actbox.find('.actActions').remove();
	};
	
	
	// ===================================================================================================
	// ===================================================================================================
	// ===================================================================================================
	// ////////////////////////////////////////////////////////////////////// GLOBAL PUSH/PULL SAVE BUTTON (Setup Page)
	
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
					_accessEventUUID: $('#lmsVars').attr("fs:accesseventid"),
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
			'<div class="smotherBox smotherPad actActions">'+
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
				'<div class="smotherBox smotherPad actActions">'+
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
			setTimeout(function(){
				tmpiframe.remove();
			}, 2000);
		});
		
		
		
		// ===================================================================================================
		// scrape student emails from roster, add E and X button to icons
		// ===================================================================================================
		// ////////////////////////////////////////////////////////////////////// Button Maker & Student Email Scraper	
		// ===================================================================================================
		
		var studentEmails = {};

		$.ajax({
			url: '/com/fullsail/lms/service/remote/Learning.cfc',
			global: false,
			data: {
				method: 'listClassSectionRoster',
				_classSectionId: classSectionId,
				_accessEventUUID: accessId,
				returnFormat: 'json' 
			},
			dataType: 'json',
			type: 'post',
			success: function(r){
				var d;
				for(var i=0, j=r.data.length; i<j; i++){
					d = r.data[i];
					studentEmails[d.studentId] = d.primaryEmail;
				};
				
				$('.student .icons').each(function(){
		        	var icons = $(this),
		        		activityName = $.trim(icons.closest('.activity').children('h4').text()),
						student = icons.closest('.student'),
						studentTXT = student.find('.studentName').text(),
						studentID = studentTXT.slice( studentTXT.indexOf('(')+1 , studentTXT.indexOf(')') ),
						emailLink = 'mailto:' + studentEmails[studentID] + '?subject=Missing%20Activity&body=According%20to%20FSO%2C%20you%20have%20not%20completed%20the%20%22'+ activityName +'%22%20activity.%20%20Please%20contact%20me%20as%20soon%20as%20possible%20if%20this%20is%20in%20error.'
					;
					icons.prepend('<li class="right fsokit-btn kit-email" style=""><a href="'+ emailLink +'" title="Email Student">E</a></li>');
		        });
		        
		        $('.activity').each(function(){
					var activityNum = $(this).attr('id'),
						activityTitle = $(this).find('h4'),
						activityName = $.trim(activityTitle.text()),
						emailLink
					;
					activityTitle
						.append('&nbsp;<a href="http://course.online.fullsail.edu/index.cfm?fuseaction=lms.activitiesAssignment&activityId='+activityNum+'" target="_blank" class="kit-preview kit-btn">preview</a>')
						.find('.kit-preview')
						.bind('click', function(e){
							e.stopPropagation();
						})
					;
					var mias = [];
					$(this).find('.student').each(function(){
						var student = $(this),
							studentTXT = student.find('.studentName').text(),
							studentID = studentTXT.slice( studentTXT.indexOf('(')+1 , studentTXT.indexOf(')') ),
							isMIA = (studentTXT.indexOf('not been') != -1 && studentTXT.indexOf('Test_FSO') == -1)
						;
						if(isMIA){
							mias.push(studentEmails[studentID]);
						};
					}); // end student loop
					
					if(mias.length > 0){
						var emails = mias.join(',');
						emailLink = 'mailto:[me]?subject=Missing%20Activity&bcc='+emails+'&body=According%20to%20FSO%2C%20you%20have%20not%20completed%20the%20%22'+ activityName +'%22%20activity.%20%20Please%20contact%20me%20as%20soon%20as%20possible%20if%20this%20is%20in%20error.';
						activityTitle
							.append('&nbsp;<a href="'+emailLink+'" class="kit-mia kit-btn" title="MIA Report">mia report</a>')
							.find('.kit-mia')
							.bind('click', function(e){
								e.stopPropagation();
							})
						;
					};
					
				}); // end activity loop
			}
		});
		
		$(''+
			'<div class="smotherBox smotherPad actActions">'+
				'<span style="font-weight:bold;">Enhanced</span>'+
			'</div>'+
			'<div class="smotherBox smotherPad actActions">'+
				'<button class="sit-open-all-dl">Toggle download panels</button>'+
			'</div>'+
		'').prependTo(actbox);
		
		
		
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
	
	
	// ===================================================================================================
	// ===================================================================================================
	// ===================================================================================================
	// ////////////////////////////////////////////////////////////////////// ACTIVITY SETUP PAGE
	
	pageInit.gradingPosts = function(){
		removeBlankDiv();
		var activityId = $('input[name="activityId"]').val();
		var deliveryId = $('input[name="deliveryId"]').val();
		var accountId = $('input[name="accountId"]').val();
		var accessId = $('input[name="accessEventUUID"]').val();
		var classSectionId = $('input[name="classSectionId"]').val();
		var forumId = '1111111';
		
		$.getJSON('http://faculty.online.fullsail.edu/com/fullsail/lms/service/remote/Discussion.cfc?method=listLearningForumPosts&_classSectionId='+classSectionId+'&_activityId='+activityId+'&_deliveryId='+deliveryId+'&_accessEventUUID='+accessId+'&returnFormat=json', function(data){
			
			var matches = $.map(data.data, function(val){
			    if(val.ACCOUNTID==accountId){
			        return val;
			    }
			});
			
			console.log(matches);
		
			$('.studentRepliesList > li').each(function(i){
				$('<span>'+matches[i].postDate+'</span>').css({padding:2, background:'#f50', color:'white'}).prependTo(this);
			});
		
		});

	};
	
	
	// ===================================================================================================
	// ===================================================================================================
	// ===================================================================================================
	// //////////////////////////////////////////////////////////////////////  dialog popups
	
	var overlay = $('<div style="position:fixed; display:none; top:0; left:0; width:100%; height:100%; background:#555; opacity:0.7; z-index:1000;"></div>').appendTo(document.body);
	
	var loaderb = $('<div style="-moz-box-shadow:0 0 10px black; -webkit-box-shadow:0 0 10px black; position:fixed; display:none; height:30px; padding:12px 16px; background:url(http://codeinfused.com/ajax-loader.gif) no-repeat 93% 50% white; z-index:1001;"><span id="loadertext" style="display:block; height:30px; line-height:30px; padding-right:42px;">Saving changes, please wait ...</span></div>').appendTo(document.body);
	
	var gradesPopup = $(''+
		'<div class="kit-tooltip-wrap">'+
			'<div class="kit-tooltip-close"></div>'+
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
		).appendTo(document.body)
	;
	
	var exceptPopup = $(''+
		'<div class="kit-tooltip-wrap">'+
			'<div class="kit-tooltip-close"></div>'+
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
		).appendTo(document.body)
	;
	
	var changelogPopup = $(''+
		'<div class="changelog" style="display:none;">'+
			'<ul>'+
				'<li class="loveme"><img src="http://wddbs.com/~SFW/smotherit/images/beer.gif" align="absmiddle" title="FSOKit is not my job, I just love writing JavaScript." />&nbsp;&nbsp;You should buy Mike Smotherman a beer.</li>'+
				'<li>' + changelog.join('</li><li>') + '</li>'+
			'</ul>'+
		'</div>'
		).appendTo(document.body)
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

	overlay.add('.kit-tooltip-close').bind('click', function(){
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
	
	$('.changelog-btn a').bind('click', function(){
		var that = $(this);
		changelogPopup.toggle().css({
			left: that.offset().left - changelogPopup.width() + that.width(),
			top: that.offset().top + that.outerHeight() + 9
		});
		return false;
	});
	
	$('.mario-btn a').bind('click', function(){
		initMario();
		return false;
	});
	

};	// END SETUP OF FSO-KIT (all elements and functions are declared, not called)
	

// =========================================================================================================
// =========================================================================================================
// =========================================================================================================
// PAGE SWITCHING INITIALIZER


baseinit();

currentPage = window.location.href;

$(window).bind( 'hashchange', function(event){
/*
	var hash_str = event.fragment,
		param_obj = event.getState()
	;
*/
	var loader = $('#loadingGif');
	var timer = setInterval(function(){
		if(loader.css('display')=='none'){
			baseinit();
			clearInterval(timer);
		};
	}, 50);
	
});	

/*
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-29733063-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
*/

(function(){

var pageTracker2 = _gat._getTracker("UA-29733063-1");
pageTracker2._trackPageview(); 

})();


})(jQuery);