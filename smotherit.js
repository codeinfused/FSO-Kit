(function(a){if(window.mikefsoapi!=="loaded"){var p,q={},i,j={setup:!1,grading:!1,gradingTrue:!1,reportComplete:!1,reportGrades:!1},r,v,w,l,n=a(window),A={video:{color:"#484a57",regex:/(video|screencast)[ ]*[-:]/i},activity:{color:"#75756d",regex:/(act|activity|read|reading|poll)[ ]*[-:]/i},discussion:{color:"#88a75d",regex:/(disc|discuss|discussion|wimba)[ ]*[-:]/i},assignment:{color:"#e85b00",regex:/(asn|assign|assignment|deliverable|deliver|test)[ ]*[-:]/i},project:{color:"#a84d10",regex:/(project)[ ]*[-:]/i},
gps:{color:"#f44e13",regex:/Professionalism/}};window.mikefsoapi="loaded";a("body > *:not(script)").wrapAll('<div id="ajaxsitwrap"></div>');a("#ajaxsitwrap").before('<style type="text/css">.ui-datepicker{z-index:55;}button{padding: 2px 6px 3px 6px;}.sithover{background:#ffff55;}#sortable .ui-selecting { background: #FECA40; }.smotherBox{background:#333; float:left; border-right:2px #ddd solid; height:20px; line-height:20px;}.smotherPad{padding:8px 14px;}.ACTstatus{padding:2px 4px; color:white;}.actsdown{background:#cc0000;}.actsup{background:#009900;}.actsload{background:none;}.smotherACT{position:fixed; top:0; left:0; z-index:1050; fontSize:12px; width:100%; background:#00325e; color:white; border-bottom:6px #ddd solid; -moz-box-shadow:0 0 20px black; -webkit-box-shadow:0 0 20px black; box-shadow:0 0 20px black;}.fsokit-btn a{text-decoration:none !important; text-align:center; background:#555; color:#fff !important; border:1px solid #999 inset; height:15px; width:15px; line-height:15px; padding:2px; margin-right:3px; display:block; -moz-border-radius: 7px; -webkit-border-radius: 7px; border-radius: 7px;}.fsovoice-btn a{text-decoration:none !important; text-align:center; background:#fff; color:#333 !important; border:1px solid #f5c inset; height:15px; width:auto; line-height:15px; padding:2px 6px; margin-right:3px; display:block; -moz-border-radius: 7px; -webkit-border-radius: 7px; border-radius: 7px;}.fsovoice-btn a:hover{background:#ccc;}.kit-tooltip-wrap{z-index:1003; position:absolute; display:none;}.kit-tooltip-body{z-index:1004; position:relative; width:480px; -moz-box-shadow:0 0 20px black; -webkit-box-shadow:0 0 20px black; box-shadow:0 0 20px black; padding:10px; background:white;}.kit-loader{display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:5; background:url(http://codeinfused.com/ajax-loader.gif) no-repeat center center white;}.kit-tooltip-tip-bot{position:absolute; bottom:-23px; z-index:1005; border-color:white transparent transparent transparent; border-style: solid; border-width:12px 12px 12px 12px; font-size:0; height:1px; left:25px; line-height:0; margin:0 0 0 -12px; outline:medium none; width:0px;}.kit-tooltip-tip-top{position:absolute; top:-23px; z-index:1005; border-color:transparent transparent white transparent; border-style: solid; border-width:12px 12px 12px 12px; font-size:0; height:1px; left:25px; line-height:0; margin:0 0 0 -12px; outline:medium none; width:0px;}.kit-tooltip-top{height:4px; background:#333;}.kit-submit-bar{padding:6px; background:#333;}.kit-submit-bar input{padding:2px; border:none; background:#E85B1F; color:white;}.kit-submit-bar span{padding:2px; color:#bbb; font-size:10px;}.kit-error{display:none; position:absolute; z-index:1002; width:200px; left:280px; top:28px; padding:6px 6px 6px 36px; background:#aa0000; color:white; border:1px solid white; -moz-box-shadow:0 0 20px black; -webkit-box-shadow:0 0 20px black; box-shadow:0 0 20px black;}.kit-entries{padding:0px 0px 8px;}.kit-entries p{margin:0; padding:4px 0 0 0;}.kit-entries input{border:1px solid #666; padding:2px;}.kit-entries textarea{width:474px; height:120px; border:1px solid #666; padding:2px;}.grade-slider{float:right; width:370px; margin:4px 10px 4px 0px; background:#ddd; border:1px solid #777;}.kit-entries .grade-slider .ui-slider-handle{background:#E85B1F; border:1px solid #333;}</style>');
var s=function(b){setTimeout(function(){var c=a(b.dpDiv).find(".ui-datepicker-buttonpane");c.find(".ui-datepicker-close").click(function(){a.datepicker._clearDate(b.input);a(b.input).val("Current");return!1}).appendTo(c)},50)},x=function(){i.find(".smotherBlank").remove()},B=function(b){try{a(p[b-1]).removeClass("sithover")}catch(c){}var d=p[b];if(typeof d!=="undefined"){d=a(d);d.addClass("sithover");a("#loadertext").html("Saving changes, please wait... ("+(b+1)+"/"+p.length+")");var g=a(".forcepushdate").val(),
e=a(".forcepulldate").val(),g=g==="Choose"||g==="Current"?d.find('input[name="pushDate"]').val():g,e=e==="Choose"||e==="Current"?d.find('input[name="pullDate"]').val():e;a.ajax({type:"post",dataType:"json",cache:!1,url:"/com/fullsail/lms/service/remote/Delivery.cfc",data:{method:"saveDelivery",_deliveryId:d.find(".deliveryId").val(),_isImportant:0,_isViewable:!0,_sortOrder:d.find(".sortOrder").val(),_accessEventUUID:a("[name=accessEventUUID]").val(),returnFormat:"json",_activeDate:g,_inactiveDate:e},
success:function(){d.find("input[name=pushDate]").val(g);d.find("input[name=pullDate]").val(e);b++;B(b)},error:function(){alert("A date submission failed, please refresh the page and try again.");o()}})}else o()};q.setup=function(){x();a(".nameCol").width(317);a(".buttonsCol:first").width(84);a(".buttonsCol:not(:first)").css({paddingLeft:0,width:68});a('<span class="fitemp"><input type="checkbox" class="forceitem" name="forceitem" /></span>').insertBefore(".buttonsCol:not(:first)").css({zIndex:45,
paddingRight:3}).find("input").bind("click",function(a){a.stopPropagation()});a(".nameCol:not(:first)").bind("click.smotherit",function(){var b=a(this).parent().find(".forceitem");b.attr("checked",b.attr("checked")==!0?!1:!0);return!1});a('<div class="smotherBox smotherPad"><span style="font-weight:bold;">Change All Checkboxed:</span>&nbsp;&nbsp;&nbsp;<span><em>Push: </em><input class="input_red_no_border_e forcepushdate"  readonly="readonly" name="pushDate" size="9" value="Choose" /></span>&nbsp;&nbsp;<span><em>Pull: </em><input class="input_red_no_border_e forcepulldate" readonly="readonly" name="pullDate" size="9" value="Choose" /></span><span>&nbsp;&nbsp;<button class="submitforces">Save</button>&nbsp;&nbsp;<button class="resetchecks">Uncheck All</button></span></div>').prependTo(i);
a(".input_red_no_border_e").datepicker({dateFormat:"M. dd, y",showButtonPanel:!0,closeText:"Use Existing",beforeShow:function(a,c){s(c)},onChangeMonthYear:function(a,c,d){s(d)}});a(".resetchecks").bind("click.smotherit",function(){a("input.forceitem").attr({checked:!1})});a(".submitforces").bind("click",function(){y();t.css({display:"block",left:a(window).width()/2-t.innerWidth()/2,top:a(window).height()/2-t.innerHeight()/2});p=a("input.forceitem:checked").parent().parent();B(0)});a("#sortable").selectable({filter:".nameCol",
selected:function(b,c){var d=a(c.selected).parent().find(".forceitem");d.attr("checked",d.attr("checked")==!0?!1:!0)}});a(".nameCol").each(function(){var b=a(this),c=b.text(),d;for(d in A){var g=A[d];if(c.match(g.regex)){b.siblings(".typeCol").css({backgroundColor:g.color});break}}})};q.reportComplete=function(){if(a.browser.mozilla){x();a('<div class="smotherBox smotherPad"><span style="font-weight:bold;">Table styles fixed.</span></div>').prependTo(i);n.unbind("scroll resize");a("body").css({position:"relative"});
a("#content").css({width:"97%",margin:0,background:"none",paddingBottom:"20px",height:"520px"});a("#contentTop").css({background:"none"});a("#contentBottom").remove();a("#rightCol").css({background:"#eaeaea"});a("#leftCol").css({width:"auto",maxWidth:"none",position:"absolute",left:"0",right:"240px",height:"410px",marginBottom:"20px"});var b=a("#classReportsWrapper").css({width:"auto",maxWidth:"none",marginBottom:"20px",overflow:"auto"});b.scrollLeft(0);b.scrollTop(0);var c=a("#classReports");c.css({position:"relative"});
c.find("tbody").css({position:"relative"});var d=a("<thead></thead>").prependTo(c);c.find("tr:first").appendTo(d).css({position:"relative",top:0,left:0,marginTop:0});c.find("tbody tr:first").css({marginTop:0,position:"static"});var g=d.offset().top-40,e=d.offset().left;d.css({position:"fixed",top:g,left:e});c.find("tbody tr").bind("click",function(){a(this).addClass("classReportActive").siblings().removeClass("classReportActive")});var f=c.find("th:first-child").width(),h=c.find("th:first-child, td:first-child").each(function(){var d=
a(this),c=d.offset().top,b=d.offset().left;d.attr("data-top",c);a(this).css({position:"fixed",top:c,left:b,width:f})}).filter("td");h.filter("td:odd").css({background:"white"});a("#classReports tr td:nth-child(202n-200), #classReports th:nth-child(202n-200)").css({paddingLeft:170});n.add(b).bind("scroll.smotherit",function(){d.css({top:g-n.scrollTop(),left:e-b.scrollLeft()});d.find("th:first").css({top:g-n.scrollTop()});h.css("top",function(){return a(this).attr("data-top")-n.scrollTop()-b.scrollTop()})}).trigger("scroll")}};
q.grading=function(){x();a(".col980").css("width","97%");a("#leftCol").css("width","78%");a(".student .studentName").css({width:"auto",marginLeft:143});a(".student .icons").css({width:143}).prepend('<li class="right fsokit-btn kit-grade" style=""><a href="#">G</a></li><li class="right fsokit-btn kit-except" style=""><a href="#">X</a></li>');a('<iframe src="http://course.online.fullsail.edu/?fuseaction=lms.enterClassSection&classSectionId='+r+'" width="1" height="1" />').appendTo(document.body).bind("load",
function(){a(this).remove()});var b={};a.ajax({type:"get",global:!1,url:"http://faculty.online.fullsail.edu/index.cfm?fuseaction=lms.rosterList",success:function(c){a(c).find(".studentField").each(function(){b[a(this).find(".studentID").text()]=a(this).find("a").text()});a(".student .icons").each(function(){var d=a(this),c=d.closest(".activity").children("h4").text(),e=d.closest(".student").find(".studentName").text(),e=e.slice(e.indexOf("(")+1,e.indexOf(")"));d.prepend('<li class="right fsokit-btn kit-email" style=""><a href="'+
("mailto:"+b[e]+"?subject=Missing%20Activity&body=According%20to%20FSO%2C%20you%20have%20not%20completed%20the%20%22"+c+"%22%20activity.%20%20Please%20contact%20me%20as%20soon%20as%20possible%20if%20this%20is%20in%20error.")+'">E</a></li>')})}});a('<div class="smotherBox smotherPad"><span style="font-weight:bold;">Enhanced</span></div><div class="smotherBox smotherPad"><button class="sit-open-all-dl">Open all download links</button></div>').prependTo(i);a(".sit-open-all-dl").bind("click",function(){a(".downloadIcon").trigger("click");
return!1});a(".activity").each(function(){var c=a(this).attr("fs:activityid");a(this).find("h4").append('&nbsp;<a href="http://course.online.fullsail.edu/index.cfm?fuseaction=lms.activitiesAssignment&activityId='+c+'" target="_blank" style="font-size:12px; color:#FF1100;" class="kit-preview">(preview)</a>').find(".kit-preview").bind("click",function(a){a.stopPropagation()})});a(".student .kit-except a").live("click",function(){var c=a(this),d=c.parent().parent().parent(),b=d.find(".studentName").text(),
e=d.find(".gradeIcon").attr("href"),f=e.substring(e.indexOf("activityId=")+11,e.indexOf("&accountId")),j=e.substring(e.indexOf("accountId=")+10,e.length),b=a.trim(b.substring(0,b.indexOf("(")-1));y();h.css({display:"block"});k.hide();m.hide();a(".kit-tooltip-tip-bot, .kit-tooltip-tip-top").show();h.css({top:c.offset().top-h.outerHeight()-2,left:c.offset().left-15}).find(".kit-submit-bar input").val("Submit Exception: "+b);h.offset().top<a(window).scrollTop()+60?(bot=!1,a(".kit-tooltip-tip-bot").hide(),
h.css({top:c.offset().top+24})):a(".kit-tooltip-tip-top").hide();h.find("form").unbind().bind("submit",function(){k.show();a.ajax({type:"post",global:!1,dataType:"json",data:{method:"saveStudentActivityDelivery",_accountId:j,_activityId:f,_classSectionId:r,_inactiveDate:h.find(".kit-entries input").val(),_accessEventUUID:v,returnFormat:"json"},url:"/com/fullsail/lms/service/remote/Learning.cfc",success:function(a){a.success!==!0?m.show().text("An unknown error occurred."):(o(),d.find(".studentName").append('<em style="color:red"> Exception</em>'))},
error:function(){m.show().text("An unknown error occurred.")},complete:function(){k.hide()}});return!1});return!1});a(".student .kit-grade a").live("click",function(){var c=a(this),b=c.parent().parent().parent(),g=b.find(".studentName").text(),e=b.find(".gradeIcon").attr("href"),h=e.substring(e.indexOf("activityId=")+11,e.indexOf("&accountId")),i=e.substring(e.indexOf("accountId=")+10,e.length),g=a.trim(g.substring(0,g.indexOf("(")-1));y();f.css({display:"block"});f.find(".kit-entries input").val(100);
f.find("textarea").val("");u.slider("value",100);k.hide();m.hide();a(".kit-tooltip-tip-bot, .kit-tooltip-tip-top").show();f.css({top:c.offset().top-f.outerHeight()-2,left:c.offset().left-15}).find(".kit-submit-bar input").val("Submit: "+g);f.offset().top<a(window).scrollTop()+60?(bot=!1,a(".kit-tooltip-tip-bot").hide(),f.css({top:c.offset().top+24})):a(".kit-tooltip-tip-top").hide();j.gradingTrue===!0&&(k.show(),a.ajax({url:"http://faculty.online.fullsail.edu/index.cfm?fuseaction=lms.gradingsAssignment&activityId="+
h+"&accountId="+i,global:!1,type:"get",success:function(b){b=a(b).find(".gradeScore strong").text();f.find(".kit-entries input").val(b);u.slider("value",b);k.hide()}}));f.find("form").unbind().bind("submit",function(){k.show();a.ajax({type:"post",global:!1,dataType:"json",data:{_accountId:i,_activityId:h,_classSectionId:r,_accessEventUUID:v,_gradeScore:f.find(".kit-entries input").val(),_comment:f.find(".kit-entries textarea").val(),method:"saveSimpleGrade",returnFormat:"json"},url:"/com/fullsail/lms/service/remote/Learning.cfc",
success:function(a){a.success!==!0?m.show().text("An unknown error occurred."):(o(),j.gradingTrue===!1&&b.fadeOut(function(){b.remove()}))},error:function(){m.show().text("An unknown error occurred.")},complete:function(){k.hide()}});return!1});return!1})};(function(){var b=window.location.href;j.setup=b.indexOf("setupActivities")!=-1?!0:!1;j.grading=b.indexOf("gradings")!=-1&&b.indexOf("activityType=test")==-1?!0:!1;j.gradingTrue=b.indexOf("isGraded=true")!=-1?!0:!1;j.reportComplete=b.indexOf("reportsCompletionClass")!=
-1?!0:!1;j.reportGrades=b.indexOf("reportsGradesClass")!=-1?!0:!1;r=a("[name=classSectionId]").attr("fs:currentclasssectionid");v=a("[name=termId]").attr("fs:accesseventuuid");a("#headerWrapper").css({paddingTop:54});i=a('<div class="smotherACT" />').insertAfter("#ajaxsitwrap");a('<div class="smotherBox smotherPad smotherBlank">No features are added for this FSO page.</div><div class="smotherBox smotherPad">FSO Status: <span class="ACTstatus actsup">Up</span></div><div class="smotherPad" style="float:left;">FSO-Kit v2.18</div><div class="smotherPad" style="float:left;"><span class="fsovoice-btn"><a target="_blank" href="http://fso.userecho.com/">Give Feedback</a></span></div><div style="clear:both;"></div>').appendTo(i);
l=i.find(".ACTstatus");w=function(){l.removeClass("actsup actsdown").addClass("actsload").text("checking");a.ajax({url:"/com/fullsail/lms/service/remote/Academic.cfc",type:"get",dataType:"json",global:!1,timeout:1E4,data:{method:"searchTermsForAccount",_accountId:a('select[name="termId"]').attr("fs:accountId"),_accessEventUUID:a('select[name="termId"]').attr("fs:accessEventUUID"),_SISId:a('select[name="termId"]').attr("fs:SISId"),returnformat:"json"},success:function(a){a.success!="false"?l.addClass("actsup").text("up"):
l.addClass("actsdown").text("down")},error:function(){l.addClass("actsdown").text("down")},complete:function(){l.removeClass("actsload");setTimeout(w,6E4)}})};setTimeout(w,6E4)})();var z=a('<div style="position:fixed; display:none; top:0; left:0; width:100%; height:100%; background:#555; opacity:0.7; z-index:1000;"></div>').insertAfter("#ajaxsitwrap"),t=a('<div style="-moz-box-shadow:0 0 10px black; -webkit-box-shadow:0 0 10px black; position:fixed; display:none; height:30px; padding:12px 16px; background:url(http://codeinfused.com/ajax-loader.gif) no-repeat 93% 50% white; z-index:1001;"><span id="loadertext" style="display:block; height:30px; line-height:30px; padding-right:42px;">Saving changes, please wait ...</span></div>').insertAfter("#ajaxsitwrap"),
f=a('<div class="kit-tooltip-wrap"><div class="kit-tooltip-tip-top"></div><div class="kit-tooltip-tip-bot"></div><div class="kit-tooltip-body tip-grading"><form action="#"><div class="kit-tooltip-top"></div><div class="kit-entries"><p>Grade:</p><input type="text" size="3" value="100" tabindex="1" /><div class="grade-slider"></div><p>Comments:</p><textarea tabindex="2"></textarea><div class="clear"></div></div><div class="kit-submit-bar"><input type="submit" value="Submit grade" /></div></form><div class="clear"></div><div class="kit-loader"></div></div><div class="kit-error">An unknown error occurred.</div></div>').insertAfter("#ajaxsitwrap"),
h=a('<div class="kit-tooltip-wrap"><div class="kit-tooltip-tip-top"></div><div class="kit-tooltip-tip-bot"></div><div class="kit-tooltip-body tip-except"><form action="#"><div class="kit-tooltip-top"></div><div class="kit-entries"><p>Select a date to extend this exception to:</p><input type="text" size="10" value="" tabindex="1" class="exceptDate" /><div class="clear"></div></div><div class="kit-submit-bar"><input type="submit" value="Submit Exception" /></div></form><div class="clear"></div><div class="kit-loader"></div></div><div class="kit-error">An unknown error occurred.</div></div>').insertAfter("#ajaxsitwrap");
h.find("p").css("paddingBottom",5).end().find(".kit-tooltip-body").width(260);h.find(".exceptDate").datepicker({dateFormat:"M. dd, y",showButtonPanel:!0,closeText:"Use Existing",beforeShow:function(a,c){s(c)},onChangeMonthYear:function(a,c,d){s(d)}});var k=a(".kit-loader"),m=a(".kit-error"),u=f.find(".grade-slider");f.find(".kit-entries input").bind("keyup",function(){u.slider("value",a(this).val())});u.slider({max:100,step:1,value:100,slide:function(a,c){f.find(".kit-entries input").val(c.value)}});
z.click(function(){o();return!1});var y=function(){z.css({display:"block"})},o=function(){z.css({display:"none"});t.css({display:"none"});f.css({display:"none"});h.css({display:"none"})};a.each(j,function(a,c){try{if(c===!0&&a!=="gradingTrue")q[a]()}catch(d){}})}})(jQuery);