var imagesPath="images/custom_forms/";var selectRightWidthSimple=19;var selectRightWidthScroll=2;var selectMaxHeight=200;var textareaTopPadding=10;var textareaSidePadding=10;var NF=new Array();var isIE=false;var resizeTest=1;aaa='';function NFInit(){try{document.execCommand('BackgroundImageCache',false,true);}catch(e){}
if(!document.getElementById){return false;}
NFDo('start');}
function NFDo(what){var niceforms=document.getElementsByTagName('form');var identifier=new RegExp('(^| )'+'custom_form'+'( |$)');if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var ieversion=new Number(RegExp.$1);if(ieversion<7){return false;}
isIE=true;}
for(var q=0;q<niceforms.length;q++){if(identifier.test(niceforms[q].className)){if(what=="start"){NF[q]=new niceform(niceforms[q]);niceforms[q].start();}else{niceforms[q].unload();NF[q]="";}}}}
function NFFix(){NFDo('stop');NFDo('start');}
function niceform(nf){nf._inputText=new Array();nf._inputRadio=new Array();nf._inputCheck=new Array();nf._inputSubmit=new Array();nf._inputFile=new Array();nf._textarea=new Array();nf._select=new Array();nf._multiselect=new Array();nf.add_inputText=function(obj){this._inputText[this._inputText.length]=obj;inputText(obj);}
nf.add_inputRadio=function(obj){this._inputRadio[this._inputRadio.length]=obj;inputRadio(obj);}
nf.add_inputCheck=function(obj){this._inputCheck[this._inputCheck.length]=obj;inputCheck(obj);}
nf.add_inputSubmit=function(obj){this._inputSubmit[this._inputSubmit.length]=obj;inputSubmit(obj);}
nf.add_inputFile=function(obj){this._inputFile[this._inputFile.length]=obj;inputFile(obj);}
nf.add_textarea=function(obj){this._textarea[this._textarea.length]=obj;textarea(obj);}
nf.add_select=function(obj){this._select[this._select.length]=obj;selects(obj);}
nf.add_multiselect=function(obj){this._multiselect[this._multiselect.length]=obj;multiSelects(obj);}
nf.start=function(){var allInputs=this.getElementsByTagName('input');for(var w=0;w<allInputs.length;w++){switch(allInputs[w].type){case"text":case"password":{this.add_inputText(allInputs[w]);break;}
case"radio":{this.add_inputRadio(allInputs[w]);break;}
case"checkbox":{this.add_inputCheck(allInputs[w]);break;}
case"submit":case"reset":case"button":{this.add_inputSubmit(allInputs[w]);break;}
case"file":{this.add_inputFile(allInputs[w]);break;}}}
var allButtons=this.getElementsByTagName('button');for(var w=0;w<allButtons.length;w++){this.add_inputSubmit(allButtons[w]);}
var allTextareas=this.getElementsByTagName('textarea');for(var w=0;w<allTextareas.length;w++){if(allTextareas[w].id=='description')continue;this.add_textarea(allTextareas[w]);}
var allSelects=this.getElementsByTagName('select');for(var w=0;w<allSelects.length;w++){if(allSelects[w].size=="1"){this.add_select(allSelects[w]);}
else{this.add_multiselect(allSelects[w]);}}
for(w=0;w<this._inputText.length;w++){this._inputText[w].init();}
for(w=0;w<this._inputRadio.length;w++){this._inputRadio[w].init();}
for(w=0;w<this._inputCheck.length;w++){this._inputCheck[w].init();}
for(w=0;w<this._inputSubmit.length;w++){this._inputSubmit[w].init();}
for(w=0;w<this._inputFile.length;w++){this._inputFile[w].init();}
for(w=0;w<this._textarea.length;w++){this._textarea[w].init();}
for(w=0;w<this._select.length;w++){this._select[w].init(w);}
for(w=0;w<this._multiselect.length;w++){this._multiselect[w].init(w);}}
nf.unload=function(){for(w=0;w<this._inputText.length;w++){this._inputText[w].unload();}
for(w=0;w<this._inputRadio.length;w++){this._inputRadio[w].unload();}
for(w=0;w<this._inputCheck.length;w++){this._inputCheck[w].unload();}
for(w=0;w<this._inputSubmit.length;w++){this._inputSubmit[w].unload();}
for(w=0;w<this._inputFile.length;w++){this._inputFile[w].unload();}
for(w=0;w<this._textarea.length;w++){this._textarea[w].unload();}
for(w=0;w<this._select.length;w++){this._select[w].unload();}
for(w=0;w<this._multiselect.length;w++){this._multiselect[w].unload();}}}
function inputText(el){jQuery(el).trigger('change_custom_form');el.width_space=document.createElement('div');el.width_space.style.width=el.offsetWidth+12+'px';el.width_space.style.height='0';el.oldClassName=el.className;el.left=document.createElement('img');el.left.src=imagesPath+"0.png";el.left.className="NFTextLeft";el.right=document.createElement('img');el.right.src=imagesPath+"0.png";el.right.className="NFTextRight";el.dummy=document.createElement('div');el.dummy.className="NFTextCenter";el.c_disabled=function(makeDisabled){if(makeDisabled===false){el.left.className=str_replace('disabled','',el.left.className);el.right.className=str_replace('disabled','',el.right.className);el.dummy.className=str_replace('disabled','',el.dummy.className);el.className=str_replace('disabled','',el.className);el.disabled=false;jQuery(el).removeClass('disabled');}else{el.left.className+=' disabled';el.right.className+=' disabled';el.dummy.className+=' disabled';el.className+=' disabled';el.disabled=true;jQuery(el).addClass('disabled');}}
el.init=function(){if(this.disabled){this.left.className+=' disabled';this.right.className+=' disabled';this.dummy.className+=' disabled';this.className+=' disabled';}else{this.left.className=str_replace(' disabled','',this.left.className);this.right.className=str_replace(' disabled','',this.right.className);this.dummy.className=str_replace(' disabled','',this.dummy.className);this.className=str_replace(' disabled','',this.className);}
this.parentNode.insertBefore(el.width_space,this);this.parentNode.insertBefore(this.left,this);this.parentNode.insertBefore(this.right,this.nextSibling);this.dummy.appendChild(this);this.right.parentNode.insertBefore(this.dummy,this.right);jQuery(this).addClass('NFText');}
el.unload=function(){if(this.parentNode==null)return false;this.parentNode.parentNode.appendChild(this);this.parentNode.removeChild(this.left);this.parentNode.removeChild(this.right);this.parentNode.removeChild(this.dummy);this.className=this.oldClassName;}}
function inputRadio(el){el.oldClassName=el.className;el.dummy=document.createElement('div');if(el.checked)el.dummy.className='NFRadio NFh';else el.dummy.className='NFRadio';el.dummy.ref=el;el.c_disabled=function(makeDisabled){if(makeDisabled===false){el.dummy.className=str_replace('disabled','',el.dummy.className);el.className=str_replace('disabled','',el.className);el.disabled=false;jQuery(el).removeClass('disabled');}else{el.dummy.className+=' disabled';el.className+=' disabled';el.disabled=true;jQuery(el).addClass('disabled');}}
el.dummy.onclick=function(){if(el.disabled==true)return false;if(!this.ref.checked){var siblings=getInputsByName(this.ref.name);for(var q=0;q<siblings.length;q++){siblings[q].checked=false;siblings[q].dummy.className="NFRadio";}
this.ref.checked=true;jQuery(this.ref).click();this.className="NFRadio NFh";}}
el.onclick=function(){if(this.checked){var siblings=getInputsByName(this.name);for(var q=0;q<siblings.length;q++){siblings[q].dummy.className="NFRadio";}
this.dummy.className="NFRadio NFh";}}
el.init=function(){if(this.disabled){this.dummy.className+=' disabled';this.className+=' disabled';}else{this.dummy.className=str_replace('disabled','',this.dummy.className);this.className=str_replace('disabled','',this.className);}
this.parentNode.insertBefore(this.dummy,this);el.className="NFhidden";}
el.unload=function(){this.parentNode.removeChild(this.dummy);this.className=this.oldClassName;}}
function inputCheck(el){el.oldClassName=el.className;el.dummy=document.createElement('img');el.dummy.src=imagesPath+'0.png';if(el.checked){el.dummy.className='NFCheck NFh';}
else{el.dummy.className='NFCheck'}
el.dummy.ref=el;el.c_disabled=function(makeDisabled){if(makeDisabled===false){el.dummy.className=str_replace('disabled','',el.dummy.className);el.className=str_replace('disabled','',el.className);el.disabled=false;jQuery(el).removeClass('disabled');}else{el.dummy.className+=' disabled';el.className+=' disabled';el.disabled=true;jQuery(el).addClass('disabled');}}
el.dummy.onclick=function(){if(strpos(el.dummy.className,'disabled')!==false)return;if(!this.ref.checked){this.ref.checked=true;this.className="NFCheck NFh";}
else{this.ref.checked=false;this.className="NFCheck";}
jQuery(el).change();}
el.onclick=function(){if(this.checked){this.dummy.className="NFCheck NFh";}
else{this.dummy.className="NFCheck";}}
el.init=function(){if(this.disabled){this.dummy.className+=' disabled';this.className+=' disabled';}else{this.dummy.className=str_replace('disabled','',this.dummy.className);this.className=str_replace('disabled','',this.className);}
this.parentNode.insertBefore(this.dummy,this);el.className="NFhidden";}
el.unload=function(){if(this.parentNode==null)return false;this.parentNode.removeChild(this.dummy);this.className=this.oldClassName;}}
function inputSubmit(el){el.oldClassName=el.className;el.left=document.createElement('img');el.left.className='NFButtonLeft';el.left.src=imagesPath+'0.png';el.right=document.createElement('img');el.right.src=imagesPath+'0.png';el.right.className='NFButtonRight';el.c_disabled=function(makeDisabled){if(makeDisabled===false){el.left.className=str_replace('disabled','',el.left.className);el.right.className=str_replace('disabled','',el.right.className);el.className=str_replace('disabled','',el.className);el.disabled=false;jQuery(el).removeClass('disabled');}else{el.left.className+=' disabled';el.right.className+=' disabled';el.className+=' disabled';el.disabled=true;jQuery(el).addClass('disabled');}}
el.onmouseover=function(){this.className='NFButton NFh';this.left.className='NFButtonLeft NFh';this.right.className='NFButtonRight NFh';}
el.onmouseout=function(){this.className='NFButton';this.left.className='NFButtonLeft';this.right.className='NFButtonRight';}
el.init=function(){this.className='NFButton';if(this.disabled){this.left.className+=' disabled';this.right.className+=' disabled';this.className+=' disabled';}else{this.left.className=str_replace('disabled','',this.left.className);this.right.className=str_replace('disabled','',this.right.className);this.className=str_replace('disabled','',this.className);}
this.parentNode.insertBefore(this.left,this);this.parentNode.insertBefore(this.right,this.nextSibling);}
el.unload=function(){if(this.parentNode==null)return false;this.parentNode.removeChild(this.left);this.parentNode.removeChild(this.right);this.className=this.oldClassName;}}
function inputFile(el){el.oldClassName=el.className;el.dummy=document.createElement('div');el.dummy.className="NFFile";el.file=document.createElement('div');el.file.className="NFFileNew";el.center=document.createElement('div');el.center.className="NFTextCenter";el.clone=document.createElement('input');el.clone.type="text";el.clone.className="NFText";el.clone.ref=el;el.left=document.createElement('img');el.left.src=imagesPath+"0.png";el.left.className="NFTextLeft";el.button=document.createElement('img');el.button.src=imagesPath+"0.png";el.button.className="NFFileButton";el.button.ref=el;el.button.onclick=function(){this.ref.click();}
el.init=function(){var top=this.parentNode;if(this.previousSibling){var where=this.previousSibling;}
else{var where=top.childNodes[0];}
top.insertBefore(this.dummy,where);this.dummy.appendChild(this);this.center.appendChild(this.clone);this.file.appendChild(this.center);this.file.insertBefore(this.left,this.center);this.file.appendChild(this.button);this.dummy.appendChild(this.file);this.className="NFhidden";this.relatedElement=this.clone;}
el.unload=function(){if(this.parentNode==null)return false;this.parentNode.parentNode.appendChild(this);this.parentNode.removeChild(this.dummy);this.className=this.oldClassName;}
el.onchange=el.onmouseout=function(){this.relatedElement.value=this.value;}
el.onfocus=function(){this.left.className="NFTextLeft NFh";this.center.className="NFTextCenter NFh";this.button.className="NFFileButton NFh";}
el.onblur=function(){this.left.className="NFTextLeft";this.center.className="NFTextCenter";this.button.className="NFFileButton";}
el.onselect=function(){this.relatedElement.select();this.value='';}}
function textarea(el){el.oldClassName=el.className;el.style.visibility='visible';el.topLeft=document.createElement('img');el.topLeft.src=imagesPath+"0.png";el.topLeft.className='NFTextareaTopLeft';el.topRight=document.createElement('div');el.topRight.className='NFTextareaTop';el.bottomLeft=document.createElement('img');el.bottomLeft.src=imagesPath+'0.png';el.bottomLeft.className='NFTextareaBottomLeft';el.bottomRight=document.createElement('div');el.bottomRight.className='NFTextareaBottom';el.left=document.createElement('div');el.left.className='NFTextareaLeft';el.right=document.createElement('div');el.right.className='NFTextareaRight';el.c_disabled=function(makeDisabled){if(makeDisabled===false){el.topLeft.className=str_replace('disabled','',el.topLeft.className);el.topRight.className=str_replace('disabled','',el.topRight.className);el.bottomLeft.className=str_replace('disabled','',el.bottomLeft.className);el.bottomRight.className=str_replace('disabled','',el.bottomRight.className);el.left.className=str_replace('disabled','',el.left.className);el.right.className=str_replace('disabled','',el.right.className);el.className=str_replace('disabled','',el.className);el.disabled=false;jQuery(el).removeClass('disabled');}else{el.topLeft.className+=' disabled';el.topRight.className+=' disabled';el.bottomLeft.className+=' disabled';el.bottomRight.className+=' disabled';el.left.className+=' disabled';el.right.className+=' disabled';el.className+=' disabled';el.disabled=true;jQuery(el).addClass('disabled');}}
el.init=function(){this.className='NFTextarea';if(this.disabled){this.topLeft.className+=' disabled';this.topRight.className+=' disabled';this.bottomLeft.className+=' disabled';this.bottomRight.className+=' disabled';this.left.className+=' disabled';this.right.className+=' disabled';this.className+=' disabled';}else{this.topLeft.className=str_replace('disabled','',this.topLeft.className);this.topRight.className=str_replace('disabled','',this.topRight.className);this.bottomLeft.className=str_replace('disabled','',this.bottomLeft.className);this.bottomRight.className=str_replace('disabled','',this.bottomRight.className);this.left.className=str_replace('disabled','',this.left.className);this.right.className=str_replace('disabled','',this.right.className);this.className=str_replace('disabled','',this.className);}
var top=this.parentNode;var where=top.childNodes[0];if(this.previousSibling)where=this.previousSibling;top.insertBefore(el.topRight,where);top.insertBefore(el.right,where);top.insertBefore(el.bottomRight,where);this.topRight.appendChild(this.topLeft);this.right.appendChild(this.left);this.right.appendChild(this);this.bottomRight.appendChild(this.bottomLeft);jQuery(el.left).height(jQuery(el).height()-5);}
el.unload=function(){if(this.parentNode==null)return false;this.parentNode.parentNode.appendChild(this);this.parentNode.removeChild(this.topRight);this.parentNode.removeChild(this.bottomRight);this.parentNode.removeChild(this.right);this.className=this.oldClassName;}}
function selects(el){el.oldClassName=el.className;el.dummy=document.createElement('div');el.dummy.className='NFSelect';el.dummy.style.width=el.offsetWidth+'px';el.dummy.ref=el;el.left=document.createElement('img');el.left.src=imagesPath+'0.png';el.left.className='NFSelectLeft';el.right=document.createElement('div');el.right.className='NFSelectRight';el.txt=document.createTextNode(el.options[0].text);el.bg=document.createElement('div');el.bg.className='NFSelectTarget';el.bg.style.display='none';el.opt=document.createElement('ul');el.opt.className='NFSelectOptions';el.style.marginBottom='4px';el.style.marginRight='14px';el.c_disabled=function(makeDisabled){jQuery(el.bg).css('display','none');jQuery(el.bg).mouseout();if(makeDisabled===false){el.left.className=str_replace('disabled','',el.left.className);el.right.className=str_replace('disabled','',el.right.className);el.className=str_replace('disabled','',el.className);el.disabled=false;jQuery(el).removeClass('disabled');}else{el.left.className+=' disabled';el.right.className+=' disabled';el.className+=' disabled';el.disabled=true;jQuery(el).addClass('disabled');}}
el.opts=new Array(el.options.length);el.init=function(pos){if(this.disabled){this.left.className+=' disabled';this.right.className+=' disabled';this.className+=' disabled';}else{this.left.className=str_replace('disabled','',this.left.className);this.right.className=str_replace('disabled','',this.right.className);this.className=str_replace('disabled','',this.className);}
this.dummy.appendChild(this.left);this.right.appendChild(this.txt);this.dummy.appendChild(this.right);this.bg.appendChild(this.opt);this.dummy.appendChild(this.bg);for(var q=0;q<this.options.length;q++){this.opts[q]=new option(this.options[q],q);this.opt.appendChild(this.options[q].li);this.options[q].lnk.className=this.options[q].className;this.options[q].lnk.onclick=function(){this._onclick();this.ref.dummy.getElementsByTagName('div')[0].innerHTML=this.ref.options[this.pos].text;this.ref.dummy.getElementsByTagName('div')[0].className='NFSelectRight '+this.ref.options[this.pos].className;if(!this.ref.options[this.pos].selected){this.ref.options[this.pos].selected="selected";for(var w=0;w<this.ref.options.length;w++)this.ref.options[w].lnk.className=str_replace('NFOptionActive','',this.ref.options[w].lnk.className);this.ref.options[this.pos].lnk.className="NFOptionActive "+this.ref.options[this.pos].className;jQuery(el).trigger('change');}}}
if(this.options.selectedIndex){this.dummy.getElementsByTagName('div')[0].innerHTML=this.options[this.options.selectedIndex].text;this.options[this.options.selectedIndex].lnk.className="NFOptionActive";}
this.dummy.style.zIndex=999-pos;this.parentNode.insertBefore(this.dummy,this);this.className+=' NFhidden';this.right.className+=' '+jQuery(this).find("option[value='"+jQuery(this).val()+"']").attr('class');}
el.unload=function(){if(this.parentNode==null)return false;this.parentNode.removeChild(this.dummy);this.className=this.oldClassName;}
el.dummy.onclick=function(){if(strpos(el.className,'disabled')!==false)return;var allDivs=document.getElementsByTagName('div');for(var q=0;q<allDivs.length;q++){if((allDivs[q].className=="NFSelectTarget")&&(allDivs[q]!=this.ref.bg)){allDivs[q].style.display="none";}}
if(this.ref.bg.style.display=="none"){this.ref.bg.style.display="block";}
else{this.ref.bg.style.display="none";}
if(this.ref.opt.offsetHeight>selectMaxHeight){this.ref.bg.style.width=this.ref.offsetWidth-selectRightWidthScroll+33+'px';this.ref.opt.style.width=this.ref.offsetWidth-selectRightWidthScroll+10+'px';}
else{this.ref.bg.style.width=this.ref.offsetWidth-selectRightWidthSimple+33+'px';this.ref.opt.style.width=this.ref.offsetWidth-selectRightWidthSimple+27+'px';}}
el.bg.onmouseout=function(e){if(!e)var e=window.event;e.cancelBubble=true;if(e.stopPropagation)e.stopPropagation();reltg=(e.relatedTarget)?e.relatedTarget:e.toElement;if(reltg!=undefined){if((reltg.nodeName=='A')||(reltg.nodeName=='LI')||(reltg.nodeName=='UL'))return;if((reltg.nodeName=='DIV')||(reltg.className=='NFSelectTarget'))return;else{this.style.display="none";}}}
el.dummy.onmouseout=function(e){if(!e)var e=window.event;e.cancelBubble=true;if(e.stopPropagation)e.stopPropagation();reltg=(e.relatedTarget)?e.relatedTarget:e.toElement;if(reltg!=undefined){if((reltg.nodeName=='A')||(reltg.nodeName=='LI')||(reltg.nodeName=='UL'))return;if((reltg.nodeName=='DIV')||(reltg.className=='NFSelectTarget'))return;else{this.ref.bg.style.display="none";}}}
el.onkeydown=function(e){if(!e)var e=window.event;var thecode=e.keyCode;var active=this.selectedIndex;switch(thecode){case 40:if(active<this.options.length-1){for(var w=0;w<this.options.length;w++){this.options[w].lnk.className="";}
var newOne=active+1;this.options[newOne].selected="selected";this.options[newOne].lnk.className="NFOptionActive";this.dummy.getElementsByTagName('div')[0].innerHTML=this.options[newOne].text;}
return false;break;case 38:if(active>0){for(var w=0;w<this.options.length;w++){this.options[w].lnk.className="";}
var newOne=active-1;this.options[newOne].selected="selected";this.options[newOne].lnk.className="NFOptionActive";this.dummy.getElementsByTagName('div')[0].innerHTML=this.options[newOne].text;}
return false;break;default:break;}}}
function multiSelects(el){el.oldClassName=el.className;el.height=el.offsetHeight;el.width=el.offsetWidth;el.topLeft=document.createElement('img');el.topLeft.src=imagesPath+"0.png";el.topLeft.className="NFMultiSelectTopLeft";el.topRight=document.createElement('div');el.topRight.className="NFMultiSelectTop";el.bottomLeft=document.createElement('img');el.bottomLeft.src=imagesPath+"0.png";el.bottomLeft.className="NFMultiSelectBottomLeft";el.bottomRight=document.createElement('div');el.bottomRight.className="NFMultiSelectBottom";el.left=document.createElement('div');el.left.className="NFMultiSelectLeft";el.right=document.createElement('div');el.right.className="NFMultiSelectRight";el.init=function(){var top=this.parentNode;if(this.previousSibling){var where=this.previousSibling;}
else{var where=top.childNodes[0];}
top.insertBefore(el.topRight,where);top.insertBefore(el.right,where);top.insertBefore(el.bottomRight,where);this.topRight.appendChild(this.topLeft);this.right.appendChild(this.left);this.right.appendChild(this);this.bottomRight.appendChild(this.bottomLeft);el.style.width=el.topRight.style.width=el.bottomRight.style.width=el.width+'px';el.style.height=el.left.style.height=el.right.style.height=el.height+'px';el.className="NFMultiSelect";}
el.unload=function(){if(this.parentNode==null)return false;this.parentNode.parentNode.appendChild(this);this.parentNode.removeChild(this.topRight);this.parentNode.removeChild(this.bottomRight);this.parentNode.removeChild(this.right);this.className=this.oldClassName;this.style.width=this.style.height="";}}
function option(el,no){el.li=document.createElement('li');el.lnk=document.createElement('a');el.lnk.href="javascript:;";el.lnk.ref=el.parentNode;el.lnk.pos=no;el.lnk._onclick=el.onclick||function(){};jQuery(el.li).attr('style',jQuery(el).attr('style'));el.txt=document.createTextNode(el.text);el.lnk.appendChild(el.txt);el.li.appendChild(el.lnk);}
function findPosY(obj){var posTop=0;do{posTop+=obj.offsetTop;}while(obj=obj.offsetParent);return posTop;}
function findPosX(obj){var posLeft=0;do{posLeft+=obj.offsetLeft;}while(obj=obj.offsetParent);return posLeft;}
function getInputsByName(name){var inputs=document.getElementsByTagName("input");var w=0;var results=new Array();for(var q=0;q<inputs.length;q++){if(inputs[q].name==name){results[w]=inputs[q];++w;}}
return results;}
var existingLoadEvent=window.onload||function(){};var existingResizeEvent=window.onresize||function(){};window.onload=function(){existingLoadEvent();NFInit();}