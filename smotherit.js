(function(a){if(window.mikefsoapi!=="loaded"){var q,r={},i,j={setup:false,grading:false,gradingTrue:false,reportComplete:false,reportGrades:false},s,w,x,k,o=a(window),B={video:{color:"#484a57",regex:/(video|screencast)[ ]*[-:]/i},activity:{color:"#75756d",regex:/(act|activity|read|reading|poll)[ ]*[-:]/i},discussion:{color:"#88a75d",regex:/(disc|discuss|discussion|wimba)[ ]*[-:]/i},assignment:{color:"#e85b00",regex:/(asn|assign|assignment|deliverable|deliver|test)[ ]*[-:]/i},project:{color:"#a84d10",
regex:/(project)[ ]*[-:]/i},gps:{color:"#f44e13",regex:/Professionalism/}};window.mikefsoapi="loaded";a("body > *:not(script)").wrapAll('<div id="ajaxsitwrap"></div>');a("head").append('<link rel="stylesheet" href="http://wddbs.com/~SFW/smotherit/fsokit.css?v=2.19" />');var t=function(c){setTimeout(function(){var d=a(c.dpDiv).find(".ui-datepicker-buttonpane");d.find(".ui-datepicker-close").click(function(){a.datepicker._clearDate(c.input);a(c.input).val("Current");return false}).appendTo(d)},50)},
y=function(){i.find(".smotherBlank").remove()},C=function(c){try{a(q[c-1]).removeClass("sithover")}catch(d){}var b=q[c];if(typeof b!=="undefined"){b=a(b);b.addClass("sithover");a("#loadertext").html("Saving changes, please wait... ("+(c+1)+"/"+q.length+")");var g=a(".forcepushdate").val(),l=a(".forcepulldate").val(),g=g==="Choose"||g==="Current"?b.find('input[name="pushDate"]').val():g,l=l==="Choose"||l==="Current"?b.find('input[name="pullDate"]').val():l;a.ajax({type:"post",dataType:"json",cache:false,
url:"/com/fullsail/lms/service/remote/Delivery.cfc",data:{method:"saveDelivery",_deliveryId:b.find(".deliveryId").val(),_isImportant:0,_isViewable:true,_sortOrder:b.find(".sortOrder").val(),_accessEventUUID:a("#lmsVars").attr("fs:accesseventid"),returnFormat:"json",_activeDate:g,_inactiveDate:l},success:function(){b.find("input[name=pushDate]").val(g);b.find("input[name=pullDate]").val(l);c++;C(c)},error:function(){alert("A date submission failed, please refresh the page and try again.");p()}})}else p()};
r.setup=function(){y();a(".nameCol").width(317);a(".buttonsCol:first").width(84);a(".buttonsCol:not(:first)").css({paddingLeft:0,width:68});a('<span class="fitemp"><input type="checkbox" class="forceitem" name="forceitem" /></span>').insertBefore(".buttonsCol:not(:first)").css({zIndex:45,paddingRight:3}).find("input").bind("click",function(a){a.stopPropagation()});a(".nameCol:not(:first)").bind("click.smotherit",function(){var c=a(this).parent().find(".forceitem");c.attr("checked",c.attr("checked")==
true?false:true);return false});a('<div class="smotherBox smotherPad"><span style="font-weight:bold;">Change All Checkboxed:</span>&nbsp;&nbsp;&nbsp;<span><em>Push: </em><input class="input_red_no_border_e forcepushdate"  readonly="readonly" name="pushDate" size="9" value="Choose" /></span>&nbsp;&nbsp;<span><em>Pull: </em><input class="input_red_no_border_e forcepulldate" readonly="readonly" name="pullDate" size="9" value="Choose" /></span><span>&nbsp;&nbsp;<button class="submitforces">Save</button>&nbsp;&nbsp;<button class="resetchecks">Uncheck All</button></span></div>').prependTo(i);
a(".input_red_no_border_e").datepicker({dateFormat:"M. dd, y",showButtonPanel:true,closeText:"Use Existing",beforeShow:function(a,d){t(d)},onChangeMonthYear:function(a,d,b){t(b)}});a(".resetchecks").bind("click.smotherit",function(){a("input.forceitem").attr({checked:false})});a(".submitforces").bind("click",function(){z();u.css({display:"block",left:a(window).width()/2-u.innerWidth()/2,top:a(window).height()/2-u.innerHeight()/2});q=a("input.forceitem:checked").parent().parent();C(0)});a("#sortable").selectable({filter:".nameCol",
selected:function(c,d){var b=a(d.selected).parent().find(".forceitem");b.attr("checked",b.attr("checked")==true?false:true)}});a(".nameCol").each(function(){var c=a(this),d=c.text(),b;for(b in B){var g=B[b];if(d.match(g.regex)){c.siblings(".typeCol").css({backgroundColor:g.color});break}}})};r.reportComplete=function(){if(a.browser.mozilla){y();a('<div class="smotherBox smotherPad"><span style="font-weight:bold;">Table styles fixed.</span></div>').prependTo(i);o.unbind("scroll resize");a("body").css({position:"relative"});
a("#content").css({width:"97%",margin:0,background:"none",paddingBottom:"20px",height:"520px"});a("#contentTop").css({background:"none"});a("#contentBottom").remove();a("#rightCol").css({background:"#eaeaea"});a("#leftCol").css({width:"auto",maxWidth:"none",position:"absolute",left:"0",right:"240px",height:"410px",marginBottom:"20px"});var c=a("#classReportsWrapper").css({width:"auto",maxWidth:"none",marginBottom:"20px",overflow:"auto"});c.scrollLeft(0);c.scrollTop(0);var d=a("#classReports");d.css({position:"relative"});
d.find("tbody").css({position:"relative"});var b=a("<thead></thead>").prependTo(d);d.find("tr:first").appendTo(b).css({position:"relative",top:0,left:0,marginTop:0});d.find("tbody tr:first").css({marginTop:0,position:"static"});var g=b.offset().top-40,l=b.offset().left;b.css({position:"fixed",top:g,left:l});d.find("tbody tr").bind("click",function(){a(this).addClass("classReportActive").siblings().removeClass("classReportActive")});var e=d.find("th:first-child").width(),f=d.find("th:first-child, td:first-child").each(function(){var b=
a(this),c=b.offset().top,g=b.offset().left;b.attr("data-top",c);a(this).css({position:"fixed",top:c,left:g,width:e})}).filter("td");f.filter("td:odd").css({background:"white"});a("#classReports tr td:nth-child(202n-200), #classReports th:nth-child(202n-200)").css({paddingLeft:170});o.add(c).bind("scroll.smotherit",function(){b.css({top:g-o.scrollTop(),left:l-c.scrollLeft()});b.find("th:first").css({top:g-o.scrollTop()});f.css("top",function(){return a(this).attr("data-top")-o.scrollTop()-c.scrollTop()})}).trigger("scroll")}};
r.grading=function(){y();a(".col980").css("width","97%");a("#leftCol").css("width","78%");a(".student .studentName").css({width:"auto",marginLeft:143});a(".student .icons").css({width:143}).prepend('<li class="right fsokit-btn kit-grade" style=""><a href="#" title="Quick Grade">G</a></li><li class="right fsokit-btn kit-except" style=""><a href="#" title="Give Exception">X</a></li>');var c=a('<iframe src="http://course.online.fullsail.edu/?fuseaction=lms.enterClassSection&classSectionId='+s+'" width="1" height="1" />').appendTo(document.body);
c.bind("load",function(){setTimeout(function(){c.remove()},2E3)});var d={};a.ajax({type:"get",global:false,url:"http://faculty.online.fullsail.edu/index.cfm?fuseaction=lms.rosterList",success:function(b){a(b).find(".studentField").each(function(){d[a(this).find(".studentID").text()]=a(this).find("a").text()});a(".student .icons").each(function(){var b=a(this),c=b.closest(".activity").children("h4").text(),e=b.closest(".student").find(".studentName").text(),e=e.slice(e.indexOf("(")+1,e.indexOf(")"));
b.prepend('<li class="right fsokit-btn kit-email" style=""><a href="'+("mailto:"+d[e]+"?subject=Missing%20Activity&body=According%20to%20FSO%2C%20you%20have%20not%20completed%20the%20%22"+c+"%22%20activity.%20%20Please%20contact%20me%20as%20soon%20as%20possible%20if%20this%20is%20in%20error.")+'" title="Email Student">E</a></li>')})}});a('<div class="smotherBox smotherPad"><span style="font-weight:bold;">Enhanced</span></div><div class="smotherBox smotherPad"><button class="sit-open-all-dl">Toggle download panels</button></div>').prependTo(i);
a(".activity").each(function(){var b=a(this).attr("fs:activityid");a(this).find("h4").append('&nbsp;<a href="http://course.online.fullsail.edu/index.cfm?fuseaction=lms.activitiesAssignment&activityId='+b+'" target="_blank" style="font-size:12px; color:#FF1100;" class="kit-preview">(preview)</a>').find(".kit-preview").bind("click",function(a){a.stopPropagation()})});a(".sit-open-all-dl").bind("click",function(){var b=a(".downloads");b[b.is(":visible")?"hide":"show"]();return false});a(".downloadIcon").each(function(){var b=
a(this).parent().parent().parent().find(".downloads");a.ajax({type:"POST",url:"/com/fullsail/lms/service/remote/Asset.cfc",data:{method:"listTaskAssets",_taskId:a(this).parent().parent().parent().attr("fs:taskId"),_accessEventUUID:a("#assignments").attr("fs:accessEventUUID"),returnformat:"json"},dataType:"json",success:function(c){if(c.success==true)if(a(b).empty(),c.results>0)for(var d=0;d<c.results;d++){var e=c.data[d],e="<li><a class='"+e.iconClass+"' href='"+e.assetURL+"'>"+(e.title+"."+e.extension)+
"</a></li>";a(b).append(e)}else a(b).append("<li>No files</li>")}})});a(".student .kit-except a").live("click",function(){var b=a(this),c=b.parent().parent().parent(),d=c.find(".studentName").text(),e=c.find(".gradeIcon").attr("href"),f=e.substring(e.indexOf("activityId=")+11,e.indexOf("&deliveryId")),j=e.substring(e.indexOf("deliveryId=")+11,e.indexOf("&accountId")),i=e.substring(e.indexOf("accountId=")+10,e.length),d=a.trim(d.substring(0,d.indexOf("(")-1));z();h.css({display:"block"});m.hide();
n.hide();a(".kit-tooltip-tip-bot, .kit-tooltip-tip-top").show();h.css({top:b.offset().top-h.outerHeight()-2,left:b.offset().left-15}).find(".kit-submit-bar input").val("Submit Exception: "+d);h.offset().top<a(window).scrollTop()+60?(bot=false,a(".kit-tooltip-tip-bot").hide(),h.css({top:b.offset().top+24})):a(".kit-tooltip-tip-top").hide();h.find("form").unbind().bind("submit",function(){m.show();a.ajax({type:"post",global:false,dataType:"json",data:{method:"saveStudentActivityDelivery",_accountId:i,
_activityId:f,_deliveryId:j,_classSectionId:s,_inactiveDate:h.find(".kit-entries input").val(),_accessEventUUID:w,returnFormat:"json"},url:"/com/fullsail/lms/service/remote/Learning.cfc",success:function(a){a.success!==true?n.show().text("An unknown error occurred."):(p(),c.find(".studentName").append('<em style="color:red"> Exception</em>'))},error:function(){n.show().text("An unknown error occurred.")},complete:function(){m.hide()}});return false});return false});a(".student .kit-grade a").live("click",
function(){var b=a(this),c=b.parent().parent().parent(),d=c.find(".studentName").text(),e=c.find(".gradeIcon").attr("href"),h=e.substring(e.indexOf("activityId=")+11,e.indexOf("&deliveryId")),i=e.substring(e.indexOf("deliveryId=")+11,e.indexOf("&accountId")),k=e.substring(e.indexOf("accountId=")+10,e.length),d=a.trim(d.substring(0,d.indexOf("(")-1));z();f.css({display:"block"});f.find(".kit-entries input").val(100);f.find("textarea").val("");v.slider("value",100);m.hide();n.hide();a(".kit-tooltip-tip-bot, .kit-tooltip-tip-top").show();
f.css({top:b.offset().top-f.outerHeight()-2,left:b.offset().left-15}).find(".kit-submit-bar input").val("Submit: "+d);f.offset().top<a(window).scrollTop()+60?(bot=false,a(".kit-tooltip-tip-bot").hide(),f.css({top:b.offset().top+24})):a(".kit-tooltip-tip-top").hide();j.gradingTrue===true&&(m.show(),a.ajax({url:"http://faculty.online.fullsail.edu/index.cfm?fuseaction=lms.gradingsAssignment&activityId="+h+"&accountId="+k,global:false,type:"get",success:function(b){b=a(b).find(".gradeScore strong").text();
f.find(".kit-entries input").val(b);v.slider("value",b);m.hide()}}));f.find("form").unbind().bind("submit",function(){m.show();a.ajax({type:"post",global:false,dataType:"json",data:{_accountId:k,_activityId:h,_deliveryId:i,_classSectionId:s,_accessEventUUID:w,_gradeScore:f.find(".kit-entries input").val(),_comment:f.find(".kit-entries textarea").val(),method:"saveSimpleGrade",returnFormat:"json"},url:"/com/fullsail/lms/service/remote/Learning.cfc",success:function(a){a.success!==true?n.show().text("An unknown error occurred."):
(p(),j.gradingTrue===false&&c.fadeOut(function(){c.remove()}))},error:function(){n.show().text("An unknown error occurred.")},complete:function(){m.hide()}});return false});return false})};(function(){var c=function(){var b=a("<div />").appendTo(document.body).css({position:"fixed",width:"100%",height:"100%",background:"#333",top:0,left:0,opacity:0.8,zIndex:2E3}),c=a("<div />").appendTo(document.body).css({position:"absolute",width:723,height:564,top:20,left:a(window).width()/2-361,zIndex:2001,background:"url(http://images.paraorkut.com/img/funnypics/images/d/darth_vader-13398.gif) no-repeat center center"});
c.add(b).bind("click",function(){b.remove();c.remove()})};a(".colorF:contains('Instructor')").text().indexOf("Josh Donlan")!==-1&&c();c=window.location.href;j.setup=c.indexOf("setupActivities")!=-1?true:false;j.grading=c.indexOf("gradings")!=-1&&c.indexOf("activityType=test")==-1?true:false;j.gradingTrue=c.indexOf("isGraded=true")!=-1?true:false;j.reportComplete=c.indexOf("reportsCompletionClass")!=-1?true:false;j.reportGrades=c.indexOf("reportsGradesClass")!=-1?true:false;s=a("[name=classSectionId]").attr("fs:currentclasssectionid");
w=a("[name=termId]").attr("fs:accesseventuuid");a("#headerWrapper").css({paddingTop:54});i=a('<div class="smotherACT" />').insertAfter("#ajaxsitwrap");a('<div class="smotherBox smotherPad smotherBlank">No features are added for this FSO page.</div><div class="smotherBox smotherPad">FSO Status: <span class="ACTstatus actsup">Up</span></div><div class="smotherPad" style="float:left;">FSO-Kit v2.19</div><div class="smotherPad" style="float:left;"><span class="fsovoice-btn"><a target="_blank" href="http://fso.userecho.com/">Give Feedback</a></span></div><div style="clear:both;"></div>').appendTo(i);
k=i.find(".ACTstatus");var d=a("<div />");x=function(){k.removeClass("actsup actsdown").addClass("actsload").text("checking");d.remove();d=a('<iframe src="http://faculty.online.fullsail.edu/index.cfm?fuseaction=lms.reportsGradesClass" width="100" height="100" />').appendTo(document.body).css({display:"none"});setTimeout(x,12E4);a.ajax({url:"/com/fullsail/lms/service/remote/Academic.cfc",type:"get",dataType:"json",global:false,timeout:1E4,data:{method:"searchTermsForAccount",_accountId:a('select[name="termId"]').attr("fs:accountId"),
_accessEventUUID:a('select[name="termId"]').attr("fs:accessEventUUID"),_SISId:a('select[name="termId"]').attr("fs:SISId"),returnformat:"json"},success:function(a){a.success!="false"?k.addClass("actsup").text("up"):k.addClass("actsdown").text("down")},error:function(){k.addClass("actsdown").text("down")},complete:function(){k.removeClass("actsload")}})};setTimeout(x,12E4)})();var A=a('<div style="position:fixed; display:none; top:0; left:0; width:100%; height:100%; background:#555; opacity:0.7; z-index:1000;"></div>').insertAfter("#ajaxsitwrap"),
u=a('<div style="-moz-box-shadow:0 0 10px black; -webkit-box-shadow:0 0 10px black; position:fixed; display:none; height:30px; padding:12px 16px; background:url(http://codeinfused.com/ajax-loader.gif) no-repeat 93% 50% white; z-index:1001;"><span id="loadertext" style="display:block; height:30px; line-height:30px; padding-right:42px;">Saving changes, please wait ...</span></div>').insertAfter("#ajaxsitwrap"),f=a('<div class="kit-tooltip-wrap"><div class="kit-tooltip-tip-top"></div><div class="kit-tooltip-tip-bot"></div><div class="kit-tooltip-body tip-grading"><form action="#"><div class="kit-tooltip-top"></div><div class="kit-entries"><p>Grade:</p><input type="text" size="3" value="100" tabindex="1" /><div class="grade-slider"></div><p>Comments:</p><textarea tabindex="2"></textarea><div class="clear"></div></div><div class="kit-submit-bar"><input type="submit" value="Submit grade" /></div></form><div class="clear"></div><div class="kit-loader"></div></div><div class="kit-error">An unknown error occurred.</div></div>').insertAfter("#ajaxsitwrap"),
h=a('<div class="kit-tooltip-wrap"><div class="kit-tooltip-tip-top"></div><div class="kit-tooltip-tip-bot"></div><div class="kit-tooltip-body tip-except"><form action="#"><div class="kit-tooltip-top"></div><div class="kit-entries"><p>Select a date to extend this exception to:</p><input type="text" size="10" value="" tabindex="1" class="exceptDate" /><div class="clear"></div></div><div class="kit-submit-bar"><input type="submit" value="Submit Exception" /></div></form><div class="clear"></div><div class="kit-loader"></div></div><div class="kit-error">An unknown error occurred.</div></div>').insertAfter("#ajaxsitwrap");
h.find("p").css("paddingBottom",5).end().find(".kit-tooltip-body").width(260);h.find(".exceptDate").datepicker({dateFormat:"M. dd, y",showButtonPanel:true,closeText:"Use Existing",beforeShow:function(a,d){t(d)},onChangeMonthYear:function(a,d,b){t(b)}});var m=a(".kit-loader"),n=a(".kit-error"),v=f.find(".grade-slider");f.find(".kit-entries input").bind("keyup",function(){v.slider("value",a(this).val())});v.slider({max:100,step:1,value:100,slide:function(a,d){f.find(".kit-entries input").val(d.value)}});
A.click(function(){p();return false});var z=function(){A.css({display:"block"})},p=function(){A.css({display:"none"});u.css({display:"none"});f.css({display:"none"});h.css({display:"none"})};a.each(j,function(a,d){try{if(d===true&&a!=="gradingTrue")r[a]()}catch(b){}})}})(jQuery);