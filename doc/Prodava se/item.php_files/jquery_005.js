(function($){$.fn.ticker=function(options){var opts=$.extend({},$.fn.ticker.defaults,options);var newsID='#'+$(this).attr('id');var tagType=$(this).get(0).tagName;return this.each(function(){var settings={position:0,time:0,distance:0,newsArr:{},play:true,paused:false,contentLoaded:false,dom:{contentID:'#ticker-content',titleID:'#ticker-title',titleElem:'#ticker-title SPAN',tickerID:'#ticker',wrapperID:'#ticker-wrapper',revealID:'#ticker-swipe',revealElem:'#ticker-swipe SPAN',controlsID:'#ticker-controls',prevID:'#prev',nextID:'#next',playPauseID:'#play-pause'}};if(tagType!='UL'&&tagType!='OL'&&opts.htmlFeed===true){debugError('Cannot use <'+tagType.toLowerCase()+'> type of element for this plugin - must of type <ul> or <ol>');return false;}
opts.direction=='rtl'?opts.direction='right':opts.direction='left';initialisePage();function countSize(obj){var size=0,key;for(key in obj){if(obj.hasOwnProperty(key))size++;}
return size;};function debugError(obj){if(opts.debugMode){if(window.console&&window.console.log){window.console.log(obj);}
else{alert(obj);}}}
function initialisePage(){$(settings.dom.wrapperID).append('<div id="'+settings.dom.tickerID.replace('#','')+'"><div id="'+settings.dom.titleID.replace('#','')+'"><span><!-- --></span></div><p id="'+settings.dom.contentID.replace('#','')+'"></p><div id="'+settings.dom.revealID.replace('#','')+'"><span><!-- --></span></div></div>');$(settings.dom.wrapperID).removeClass('no-js').addClass('has-js '+opts.direction);$(settings.dom.tickerElem+','+settings.dom.contentID).hide();if(opts.controls){$(settings.dom.controlsID).live('click mouseover mousedown mouseout mouseup',function(e){var button=e.target.id;if(e.type=='click'){switch(button){case settings.dom.prevID.replace('#',''):settings.paused=true;$(settings.dom.playPauseID).addClass('paused');manualChangeContent(button);break;case settings.dom.nextID.replace('#',''):settings.paused=true;$(settings.dom.playPauseID).addClass('paused');manualChangeContent(button);break;case settings.dom.playPauseID.replace('#',''):if(settings.play==true){settings.paused=true;$(settings.dom.playPauseID).addClass('paused');pauseTicker();}
else{settings.paused=false;$(settings.dom.playPauseID).removeClass('paused');restartTicker();}
break;}}
else if(e.type=='mouseover'&&$('#'+button).hasClass('controls')){$('#'+button).addClass('over');}
else if(e.type=='mousedown'&&$('#'+button).hasClass('controls')){$('#'+button).addClass('down');}
else if(e.type=='mouseup'&&$('#'+button).hasClass('controls')){$('#'+button).removeClass('down');}
else if(e.type=='mouseout'&&$('#'+button).hasClass('controls')){$('#'+button).removeClass('over');}});$(settings.dom.wrapperID).append('<ul id="'+settings.dom.controlsID.replace('#','')+'"><li id="'+settings.dom.playPauseID.replace('#','')+'" class="controls"></li><li id="'+settings.dom.prevID.replace('#','')+'" class="controls"></li><li id="'+settings.dom.nextID.replace('#','')+'" class="controls"></li></ul>');}
if(opts.displayType!='fade'){$(settings.dom.contentID).mouseover(function(){if(settings.paused==false){pauseTicker();}}).mouseout(function(){if(settings.paused==false){restartTicker();}});}
processContent();}
function processContent(){if(settings.contentLoaded==false){if(opts.ajaxFeed){if(opts.feedType=='xml'){$.ajax({url:opts.feedUrl,cache:false,dataType:opts.feedType,async:true,success:function(data){count=0;for(var a=0;a<data.childNodes.length;a++){if(data.childNodes[a].nodeName=='rss'){xmlContent=data.childNodes[a];}}
for(var i=0;i<xmlContent.childNodes.length;i++){if(xmlContent.childNodes[i].nodeName=='channel'){xmlChannel=xmlContent.childNodes[i];}}
for(var x=0;x<xmlChannel.childNodes.length;x++){if(xmlChannel.childNodes[x].nodeName=='item'){xmlItems=xmlChannel.childNodes[x];var title,link=false;for(var y=0;y<xmlItems.childNodes.length;y++){if(xmlItems.childNodes[y].nodeName=='title'){title=xmlItems.childNodes[y].lastChild.nodeValue;}
else if(xmlItems.childNodes[y].nodeName=='link'){link=xmlItems.childNodes[y].lastChild.nodeValue;}
if((title!==false&&title!='')&&link!==false){settings.newsArr['item-'+count]={type:opts.titleText,content:'<a href="'+link+'">'+title+'</a>'};count++;title=false;link=false;}}}}
if(countSize(settings.newsArr<1)){debugError('Couldn\'t find any content from the XML feed for the ticker to use!');return false;}
setupContentAndTriggerDisplay();settings.contentLoaded=true;}});}
else{debugError('Code Me!');}}
else if(opts.htmlFeed){if($(newsID+' LI').length>0){$(newsID+' LI').each(function(i){settings.newsArr['item-'+i]={type:opts.titleText,content:$(this).html()};});setupContentAndTriggerDisplay();}
else{debugError('Couldn\'t find HTML any content for the ticker to use!');return false;}}
else{debugError('The ticker is set to not use any types of content! Check the settings for the ticker.');return false;}}}
function setupContentAndTriggerDisplay(){settings.contentLoaded=true;$(settings.dom.titleElem).html(settings.newsArr['item-'+settings.position].type);$(settings.dom.contentID).html(settings.newsArr['item-'+settings.position].content);if(settings.position==(countSize(settings.newsArr)-1)){settings.position=0;}
else{settings.position++;}
distance=$(settings.dom.contentID).width();time=distance/opts.speed;revealContent();}
function revealContent(){$(settings.dom.contentID).css('opacity','1');if(settings.play){var offset=$(settings.dom.titleElem).width()+20;$(settings.dom.revealID).css(opts.direction,offset+'px');if(opts.displayType=='fade'){$(settings.dom.revealID).hide(0,function(){$(settings.dom.contentID).css(opts.direction,offset+'px').fadeIn(opts.fadeInSpeed,postReveal);});}
else if(opts.displayType=='scroll'){}
else{$(settings.dom.revealElem).show(0,function(){$(settings.dom.contentID).css(opts.direction,offset+'px').show();animationAction=opts.direction=='right'?{marginRight:distance+'px'}:{marginLeft:distance+'px'};$(settings.dom.revealID).css('margin-'+opts.direction,'0px').delay(20).animate(animationAction,time,'linear',postReveal);});}}
else{return false;}};function postReveal(){if(settings.play){$(settings.dom.contentID).delay(opts.pauseOnItems).fadeOut(opts.fadeOutSpeed);if(opts.displayType=='fade'){$(settings.dom.contentID).fadeOut(opts.fadeOutSpeed,function(){$(settings.dom.wrapperID).find(settings.dom.revealElem+','+settings.dom.contentID).hide().end().find(settings.dom.tickerID+','+settings.dom.revealID).show().end().find(settings.dom.tickerID+','+settings.dom.revealID).removeAttr('style');setupContentAndTriggerDisplay();});}
else{$(settings.dom.revealID).hide(0,function(){$(settings.dom.contentID).fadeOut(opts.fadeOutSpeed,function(){$(settings.dom.wrapperID).find(settings.dom.revealElem+','+settings.dom.contentID).hide().end().find(settings.dom.tickerID+','+settings.dom.revealID).show().end().find(settings.dom.tickerID+','+settings.dom.revealID).removeAttr('style');setupContentAndTriggerDisplay();});});}}
else{$(settings.dom.revealElem).hide();}}
function pauseTicker(){settings.play=false;$(settings.dom.tickerID+','+settings.dom.revealID+','+settings.dom.titleID+','+settings.dom.titleElem+','+settings.dom.revealElem+','+settings.dom.contentID).stop(true,true);$(settings.dom.revealID+','+settings.dom.revealElem).hide();$(settings.dom.wrapperID).find(settings.dom.titleID+','+settings.dom.titleElem).show().end().find(settings.dom.contentID).show();}
function restartTicker(){settings.play=true;settings.paused=false;postReveal();}
function manualChangeContent(direction){pauseTicker();switch(direction){case'prev':if(settings.position==0){settings.position=countSize(settings.newsArr)-2;}
else if(settings.position==1){settings.position=countSize(settings.newsArr)-1;}
else{settings.position=settings.position-2;}
$(settings.dom.titleElem).html(settings.newsArr['item-'+settings.position].type);$(settings.dom.contentID).html(settings.newsArr['item-'+settings.position].content);break;case'next':$(settings.dom.titleElem).html(settings.newsArr['item-'+settings.position].type);$(settings.dom.contentID).html(settings.newsArr['item-'+settings.position].content);break;}
if(settings.position==(countSize(settings.newsArr)-1)){settings.position=0;}
else{settings.position++;}}});};$.fn.ticker.defaults={speed:0.10,ajaxFeed:false,feedUrl:'',feedType:'xml',displayType:'fade',htmlFeed:true,debugMode:true,controls:true,titleText:'News',direction:'ltr',pauseOnItems:3000,fadeInSpeed:600,fadeOutSpeed:300};})(jQuery);