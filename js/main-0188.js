var uiFileName = "jquery-ui-1.8.12.custom-02.min.js";

// ahussein Ticket 91171
if(devProjects('new_autocomplete')) {
	/*
	 * jQuery Templates Plugin 1.0.0pre http://github.com/jquery/jquery-tmpl
	 */
	(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},i=0,c=0,l=[];function g(g,d,h,e){var c={data:e||(e===0||e===false)?e:d?d.data:{},_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};g&&a.extend(c,g,{nodes:[],parent:d});if(h){c.tmpl=h;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++i;(l.length?f:b)[i]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a(i[h])[d](k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,m,k){if(d[0]&&a.isArray(d[0])){var g=a.makeArray(arguments),h=d[0],j=h.length,i=0,f;while(i<j&&!(f=a.data(h[i++],"tmplItem")));if(f&&c)g[2]=function(b){a.tmpl.afterManip(this,b,k)};r.apply(this,g)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var i,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(j(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);i=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(j(c,null,i)):i},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function j(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:j(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=k(c).concat(b);if(d)b=b.concat(k(d))});return b?b:k(c)}function k(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,k,g,b,c,d){var j=a.tmpl.tag[k],i,e,f;if(!j)throw"Unknown template tag: "+k;i=j._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=h(b);d=d?","+h(d)+")":c?")":"";e=c?b.indexOf(".")>-1?b+h(c):"("+b+").call($item"+d:b;f=c?e:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else f=e=i.$1||"null";g=h(g);return"');"+j[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(f).split("$1").join(e).split("$2").join(g||i.$2||"")+"__.push('"})+"');}return __;")}function n(c,b){c._wrap=j(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function h(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,h;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(h=j.length-1;h>=0;h--)m(j[h]);m(k)}function m(j){var p,h=j,k,e,m;if(m=j.getAttribute(d)){while(h.parentNode&&(h=h.parentNode).nodeType===1&&!(p=h.getAttribute(d)));if(p!==m){h=h.parentNode?h.nodeType===11?0:h.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[h]||f[h]);e.key=++i;b[i]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;h=a.data(j.parentNode,"tmplItem");h=h?h.key:0}if(e){k=e;while(k&&k.key!=h){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery);

	// defining global object
	var bayt = {};
	bayt.search = {
		baseUrl: "/autocomp/quick-autocomplete.adp",	// setting autocomplete URL
		input: "search",								// setting default input ID. Could be set as Object
		resultsContainer: "listing",
		url: "",										// URL handler. This will store the generated url for search
		list: "",										// Handler for List (type) template
		item: "",										// Handler for item search template
		promise: null,
		maxHeight: 400,
		selection: null,
		selectedIndex: -1,
		body: $('body'),
		delayTO: null,			// Delay Timeout handler
		classes: {
            selected: 'bayt-selected',
            suggestion: 'bayt-suggestion'
        },
		init: function (input_id, url){
			var maxHt = '500';
			var wh = $(window).height();
			maxHt = parseInt(wh) - 150;
			$('#searchBtnBox button').prop('disabled', true);
			this.input = this.getObject(input_id);
			this.input.attr('autocomplete', 'off');
			this.resultsContainer = this.getObject(this.resultsContainer);
			this.resultsContainer.css('max-height', maxHt+'px');
			$('#bayt_queck_search_box').css('position','relative').append('<span id="ajaxLoader" class="loading search-loading"></span>');
			if($('#home-head').length > 0){
				this.resultsContainer.css('z-index', 50);
			}
			if(url != ''){
				this.url = url;
			}
			if(currentSearch=='jobs'){
				$('#searchBtnBox button').prop('disabled', false);
			}
			this.events();
			this.getTemplates();
		},
		getObject: function (oid){
			if( oid !== null && typeof(oid) === "object" ){
				return oid;
				// this.input = input_id;
			} else if(oid != ''){
				return $("#"+oid);
			}
		},
		// Cache templates
		getTemplates: function (){
			this.item = $("#suggestion_template").html();
			this.list = $("#suggestions_template").html();
		},
		// Handling events
		events: function (){
			var srch = this;
			srch.input.off();
			$('#search_box_form').off().on('submit', function (e){ return srch.submitForm(e); });
			srch.input.on('keyup', function (e) { srch.onKeyUp(e); });
            srch.input.on('blur', function () { srch.onBlur(); });
            srch.input.on('focus', function (e) { srch.onFocus(e); });
            srch.input.on('change', function (e) { srch.onKeyUp(e); });
            $(".channels .list").on('click', 'span', function (){ srch.hide(); });
            $(document).on('keyup',function (e){ if(e.which == 27){ srch.hide(); } });
		},
        onKeyUp: function (e) {
        	var srch = this;
            var ignores = [13, 16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 91, 93, 116, 144, 145];
            if(typeof(e.which) === "undefined"){return false;}

			if(srch.input.val().length < 2){
				$('#ajaxLoader').hide();
			}
            if(e.which == 27){
            	e.preventDefault();
            	srch.hide();
            	return false;
            }
        	if((currentSearch=='jobs' || currentSearch=='all') && e.which == 13){
        		if(srch.selectedIndex < 0){
        			//e.preventDefault();
		        		$('#search_box_form').attr('action',form_action['jobs']).submit();
		        		return false;
        		} else {
        			e.preventDefault();
        			window.location = $(".suggestion").eq(srch.selectedIndex).data('url');
            		return false;
        		}
        	}
        	clearTimeout(srch.delayTO);
        	
        	/*if(srch.input.val().length > 1){
        		$('#searchBtnBox button').prop('disabled', false);
        	}*/
        	
            if( (srch.input.val().length - 1) < 1){e.preventDefault();srch.hide();return false;}
            
			if($.inArray(e.which, ignores) > -1){
				e.preventDefault();
				if(e.which == 13){
					// go to selected search item
					srch.goToSearch();
				}
				// arrow up
				if(e.which == 38){
					if(srch.selectedIndex != -1){
						srch.selectedIndex -= 1;
						srch.activate();
					}
				}
				// arrow down
				if(e.which == 40){
					if( (srch.selectedIndex < ($(".suggestion").length - 1)) || srch.selectedIndex == -1) {
						srch.selectedIndex += 1;
						srch.activate();
					}
				}
			} else {
				srch.fixPosition();
				srch.resultsContainer.show();
				srch.get();
			}
        },
        submitForm: function (e){
        	var srch = this;
        	if((currentSearch =='jobs' || currentSearch == 'all') && srch.selectedIndex < 0){
        		if(srch.input.hasClass('mute')){
        			srch.input.val('');
        		}
        		$('#search_box_form').attr('action',form_action['jobs']).submit();
        		return true;
        	}
        	if(currentSearch=='jobs' && srch.selectedIndex != -1){
        		srch.goToSearch(); e.preventDefault(); return false;
        	}
        	if(srch.input.hasClass('mute')){
        		e.preventDefault();
        		return false;
        	}
			if((srch.input.val().length < 1) && currentSearch!='jobs'){
				e.preventDefault();
				return false;
			}
        	if(currentSearch == 'companies'){
        		e.preventDefault();
        		url = form_action['companies'] + srch.input.val() + '/';
        		window.location = url;
        		return false;
        	}
        	if(currentSearch == "specialties"){
        		// IE fix
        		if(srch.selectedIndex != -1){ srch.goToSearch(); e.preventDefault(); return false; }
        		url = form_action['specialities'] + srch.input.val() +'/';
        		window.location = url;
        		return false;
        	}
        	if(currentSearch == "people"){
        		if(currentIso==''){
        			url = form_action['people'] +  'keyword/'+ srch.input.val() +'/?lang='+$('body').attr('id');
        		} else {
        			url = form_action['people'].replace('search-results', IsoArray[currentIso]) + 'keyword/'+ srch.input.val() +'/?lang='+$('body').attr('id');
        		}
        		e.preventDefault();
        		window.location = url;
        		return false;
        	}
        	return true;
        },
        fixPosition: function (){
        	var srch = this;
        	var srchCont = $(srch.resultsContainer);
        	var maxHt = 500;
			var wh = $(window).height(); // Window Height
			maxHt = parseInt(wh) - 220;
			srchCont.css('max-height', maxHt+'px');
			
        	offset = srch.input.offset();
        	var c_left = offset.left;
        	var pRight;
        	var pLeft;
        	var sMargin = 'margin-left';
        	var c_right = "497px";
    		var ex = 0;
        	
        	if(currentSearch == "all"){
        		c_left = offset.left - 113;
        		if($("#home-head").length >0){
        			ex = 50;
        		}
        		c_right = (input_keyword.offset().left - (421+ex)) + "px";
        	} else {
        		if($("#home-head").length >0){
        			ex = 60;
        		} else {
        			ex=110;
        		}
        		c_right = (input_keyword.offset().left - (421-ex)) + "px";
        		$(".suggestion-type").css('margin', 0);
        	}
        	if($('body').attr('id') == "ar"){
        		sMargin = 'margin-right';
        		pLeft = 'auto';
        		pRight = c_right;
            	if($('#frame.revamp').length > 0){
            		pLeft = "20px";
            		pRight = 'auto';
            	}
        	} else {
        		pLeft = c_left + 'px';
        		pRight = 'auto';
        		if($('#frame.revamp').length > 0){
            		pLeft = 'auto';
            		pRight = "20px";
        	}
        	}
        	styles = {
                top: (offset.top + srch.input.outerHeight()) + 'px',
                left: pLeft,
                right: pRight
            };
            srchCont.css(styles);
        },
        onFocus: function (e) {
            var srch = this;
            if(currentSearch=='jobs' || currentSearch=='all'){
            	$('#searchBtnBox button').prop('disabled', false);
            }
            if(keyword != "" && keyword != default_values[currentSearch]){
            	srch.input.removeClass('mute');
            	$('#searchBtnBox button').prop('disabled', false);
            	srch.resultsContainer.show();
            	srch.get();
            } else {
	            if(srch.input.hasClass('mute')){
	            	srch.input.removeClass('mute').val('');
	            } else {
	            	srch.resultsContainer.show();
	            	srch.get();
	            }
            }
            srch.fixPosition();
        },

        onBlur: function () {
            // Hide the suggestions
        	var srch = this;
        	if(srch.input.val() == ""){
        		srch.input.val(default_values[currentSearch]).addClass("mute");
        		$('#searchBtnBox button').prop('disabled', true);
        	}
        	setTimeout(function (){srch.resultsContainer.hide();} , 200);
        },
        activate: function () {
            var srch = this,
                activeItem,
                selected = srch.classes.selected,
                container = srch.resultsContainer,
                children = container.find("a.suggestion");

            children.removeClass(selected);

            if (srch.selectedIndex !== -1 && children.length > srch.selectedIndex) {
                activeItem = children.get(srch.selectedIndex);
                $(activeItem).addClass(selected);
                return activeItem;
            }

            return null;
        },
        goToSearch: function (obj){
        	var srch = this;
        	if(typeof(obj) === "object"){
        		window.location = $(obj).data('url');
        		return false;
        	}
        	if(srch.selectedIndex != -1){
        		// There is a selected item
        		window.location = srch.resultsContainer.find("."+srch.classes.selected).data('url');
        		return false;
        	} else {
        		if(currentSearch=='jobs'){
        			$('#search_box_form').attr('action', form_action['jobs']).submit();
            		return false;
        		}
        	}
        },
        adjustScroll: function (index) {
            var srch = this,
                activeItem = srch.activate(index),
                offsetTop,
                upperBound,
                lowerBound,
                heightDelta = 25;

            if (!activeItem) {
                return;
            }

            offsetTop = activeItem.offsetTop;
            upperBound = $(srch.resultsContainer).scrollTop();
            lowerBound = upperBound + srch.maxHeight - heightDelta;

            if (offsetTop < upperBound) {
                $(srch.resultsContainer).scrollTop(offsetTop);
            } else if (offsetTop > lowerBound) {
                $(srch.resultsContainer).scrollTop(offsetTop - srch.maxHeight + heightDelta);
            }
        },
        moveUp: function () {
            var srch = this;

            if (srch.selectedIndex === -1) {
                return;
            }

            if (srch.selectedIndex === 0) {
                $(srch.resultsContainer).children().first().removeClass(srch.classes.selected);
                srch.selectedIndex = -1;
                srch.input.val(srch.currentValue);
                return;
            }

            srch.adjustScroll(srch.selectedIndex - 1);
        },
        moveDown: function () {
            var srch = this;

            srch.adjustScroll(srch.selectedIndex + 1);
        },
		getTypes: function (){
			var srch = this;
			if(currentSearch != "all"){
				return currentSearch + ":5";
			} else 
				return "jobs:2,specialties:2,people:2,salaries:2,companies:2";
		},
		hide: function (){
			var srch = this;
			srch.resultsContainer.html("").hide();
			if(srch.input.val() != default_values[currentSearch]){
				srch.input.removeClass('mute');
			}
		},
		get: function (country){
			var srch = this;
			var LST = this.resultsContainer;
			var sugs = $(".suggestion-type");
			$('#ajaxLoader').show(); 
			sugs.css("opacity", 0.8);
			if(sugs.length < 1){
				LST.removeClass('active-list');
			}
			if(country == true){
				srch.requestResults();
			} else {
				srch.delayTO = setTimeout(function (){
					srch.requestResults();
				}, 300);
			}
		},
		requestResults: function (){
			var srch = this;
			var LST = this.resultsContainer;
			var searches = srch.getTypes();
			var params = {
				search: srch.input.val().replace('-', ''),
				country: currentIso,
				lang: ($('body').attr('id')!="" ? $('body').attr('id') : "en"),
				searchType: searches,
				nospecialties: 0
			};
			var url = srch.baseUrl +"?"+ $.param(params);
			if(srch.promise != null){
				srch.promise.abort();
				$('#ajaxLoader').hide();
			}
			srch.promise = $.ajax({
				url: url,
				contentType: "application/json",
				dataType: "json",
				beforeSend: function (){
					/*var sugs = $(".suggestion-type");
					$('#ajaxLoader').show(); 
					sugs.css("opacity", 0.8);
					if(sugs.length < 1){
						LST.removeClass('active-list');
					}*/
				},
				success: function (data){
					$('#ajaxLoader').hide();
					$(".suggestion-type").css("opacity", 1);
					srch.selectedIndex = -1;
					bayt.search.processTemplate(data);
					$('#listing').show();
				},
				error: function (){
					$('#ajaxLoader').hide();
					LST.hide();
				}
			});
		}
	};
	bayt.search.processTemplate = function (data){
			// Using a templating engine
			var srch = bayt.search;
			var LST = bayt.search.resultsContainer;
			// clearing previous search
			LST.html("");
			var input_val = srch.input.val().replace('-', '');
			// looping in Types
			$.each(data, function (key, value){
				// looping in results
				var items = "";

				if(value.data.length > 1){
					if(LST.hasClass('active-list')!=true){
						LST.addClass('active-list')
					}
					$.template("typesTemplate", srch.list);
					$.tmpl( "typesTemplate", value).appendTo(LST);

					var tempContainer = $("#"+value.type+"_list");
					if(typeof(value.data) !== "undefined") {
						$.each(value.data, function (ikey, item){
							$.template("itemTemplate", srch.item);
							item.text = item.text.replace(new RegExp("("+encodeURIComponent(input_val)+")", 'gi'), "<b>$1<\/b>");
							$.tmpl( "itemTemplate", item).appendTo(tempContainer);
						});
					} else {
						srch.resultsContainer.hide();
					}
				}
			});
			if($(".suggestion-type").length <1){
				LST.removeClass('active-list');
			}
		};
}

function cleanQuestionTitle(title) {
	title = $.trim(title.replace(/[^\u0600-\u06ff^\w0-9]+/g," ").replace(/ +(?= )/g,"")).split(" ").join("-").toLowerCase();
	return encodeURIComponent(title);
}

function formValidator(frm,skipHtml,skipHash){
	window.validatedDates = [];
	($('#server_msg_paragraph').length)?$('#server_msg_paragraph').addClass('hide'):null;

	// VALIDATES ALL FORM ELEMENTS WITHIN A FORM USING THE validInput CHECK ON
	// SUBMIT OF THE FORM
	// CHECK if We need to pass lang and pgSec
	var isValid = true;
	switch($(document.body).attr('id')) {
		case "ar" :
			var errMsg = "<strong>هناك بعض الأخطاء في ارسال بيانات هذه الصفحة:</strong> الرجاء مراجعة المُدخلات المشار اليها بلون مختلف.";
		break
		case "fr" :
			var errMsg = "<strong>Une erreur s'est produite lors de la soumission du formulaire:</strong> Veuillez vérifier les champs ci-dessous.";
		break
		default :
			var errMsg = "<strong>There was a problem submitting this form:</strong> Please review the highlighted fields below and try submitting again.";
	}
	if (document.getElementById("remove_email")){
		var remove_email = document.getElementById("remove_email").value;
	} else {
		var remove_email = 1
	}
	if ( skipHtml == "undefined" || skipHtml != 1) {
		formCleanupInput(frm,remove_email);
	}
	var eleTypArr = new Array("select","input","textarea"); // array of all
															// elements to
															// validate
	for (var x = 0; x < 3; x++){
		var theElements = $(frm).find(eleTypArr[x]); // run through elements
														// array in the form
		for (var i = theElements.length -1; i >= 0; i--){
			if ($(theElements[i]).prop('tagName') != "SELECT" && $(theElements[i]).attr('type') != "checkbox" &&
					$(theElements[i]).attr('type') != "radio" && $(theElements[i]).attr('type') != "file" ) $(theElements[i]).val($.trim(theElements[i].value)); // ie
																																									// trims
																																									// select
																																									// elements
																																									// as
																																									// well
					if (!validInput(theElements[i])) isValid = false; // the
																		// validation
																		// function
		}
	}
	if (!isValid) {
		if (!document.getElementById("submit-alert-message")){
			var frmErrMsg = $(document)[0].createElement("P");
			$(frmErrMsg).attr('id','submit-alert-message').html(errMsg);
			$(frmErrMsg).insertBefore($(frm).children (":first"));
		}
		$('#submit-alert-message').addClass('alert');
		if ( skipHash == "undefined" || skipHash != 1) {
			window.location.hash='#submit-alert-message';
		}
		return false;
	}
	// ITS VALAID RETURN TRUE
	if ($(frm).hasClass("submitOnce")) {
		$(frm).find("[type=submit]").attr("disabled","disabled").text( $(frm).data("ondisable-text") || "Please wait...");
	}
	return true;
}

function formCleanupInput(frm,remove_email){
	var elementsTypeArray = new Array("input","textarea"); 
	for (var i = 0; i < elementsTypeArray.length; i++){
		var theElements = $(frm).find(elementsTypeArray[i]); // run
		if ( theElements != undefined ) {
			for (var j = 0; j < theElements.length; j++){
				if($(theElements[j]).attr('type')!="file")	{
					$(theElements[j]).prop('value', $(theElements[j]).prop('value').replace(/<script.*?>([\s\S]*?)<\/script>|<(\S)* (on.{2,})>|javascript(.)?:/gim,""));
				}
				var inputClass = $(theElements[j]).attr('class')
				if ( inputClass != undefined ) {
					if( $(theElements[j]).prop('tagName') != "INPUT" &&  inputClass.search('keepemail') == -1  )	{
						if ( remove_email == 1 ) {
							$(theElements[j]).attr('value', $(theElements[j]).attr('value').replace(/\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}|\w+@[a-zA-Z_]{2,6}/gim,""));
						}
					}
				}
			}
		}
	}
}

function cleanupInput(remove_email){
	var elementsTypeArray = new Array("input","textarea"); // array of all
															// elements to
															// cleanup
	for (var i = 0; i < elementsTypeArray.length; i++){
		var theElements = document.getElementById("content").getElementsByTagName(elementsTypeArray[i]); // run
																											// through
																											// elements
																											// array
																											// in
																											// the
																											// form
		for (var j = 0; j < theElements.length; j++){
			if($(theElements[j]).attr('type')!="file")	{
				$(theElements[j]).prop('value', $(theElements[j]).prop('value').replace(/<script.*?>([\s\S]*?)<\/script>|<(\S)* (on.{2,})>|javascript(.)?:/gim,""));
			}
			var inputClass = $(theElements[j]).attr('class')
			if( $(theElements[j]).prop('tagName') != "INPUT" &&  inputClass.search('keepemail') == -1  )	{
				if ( remove_email == 1 ) {
					$(theElements[j]).attr('value', $(theElements[j]).attr('value').replace(/\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}|\w+@[a-zA-Z_]{2,6}/gim,""));
				}
			}
		}
	}
}

function validInput(theElement){
	// CHECKS IF A FORM ELEMENT IS VALID ACCORDING TO THE FOLLOWING VALUES IN
	// THE FORM ELEMENT CLASS ATTRIBUTE
	// req = required field
	// alpha = alpha-numeric field (no spaces, punctuation, etc.)
	// number = numeric field
	// mutiNumber = numeric fields sperated by spaces or carriage return
	// min-n = minumum number of characters is n (where n is a specified number)
	// max-n = string: maximum number of characters is n (where n is a specified
	// number)
	// max-n = multiselect: maximum number of selections is n (where n is a
	// specified number)
	// email = email field - searches for "@" and "."
	// match-elementname = checks if the current field and the field in
	// "elementname" are equal (for confirm password)
	// ALL REQUIRE <span class="error" id="err-elementname"></span> IN THE FORM,
	// WHERE "elementname" IS THE NAME OF THE ELEMENT
	var lang = $(document.body).attr('id'),
	pass = true,
	ErrMsg = "",
	theString = $.trim(theElement.value),
	theClasses = $(theElement).prop('class').split(" "),
	errHldr =  $("[id*='err-" + $(theElement).attr('name') + "']"),
	msgReqEn = "This field is required.<br />",
	msgReqAr = "يجب ادخال بيانات لهذا المُدخل.<br />",
	msgAlphEn = "This field may contain numbers and letters only (with no spaces).<br />",
	msgAlphAr = "يجب ادخال إما رقم أو حرف في هذا المُدخل.<br />",
	msgNumEn = "This field may contain numbers only.<br />",
	msgNumAr = "يجب ادخال أرقام فقط في هذا المُدخل.<br />",
	msgEmEn = "This field must be a valid email address.<br />",
	msgEmAr = "يجب ادخال عنوان بريد الكتروني صحيح في هذا المُدخل.<br />",
	multipleEmailsEn = "This field must contain valid email addresses.<br />",
	multipleEmailsAr = "يجب ادخال عنوان بريد الكتروني صحيح في هذا المُدخل.<br />",
	msgEmDomEn = "The email address, <b>1s</b>, contains an invalid domain. Only the following email domain is allowed: <span dir=\"ltr\"><b>@2s</b></span>.<br />",
	msgEmDomAr = "البريد الذي قمت بإدخاله، <b>1s</b>، غير صحيح. يرجى الإلتزام بالصيغ التالية المسوح بها: <span dir=\"ltr\"><b>@2s</b></span>.<br />",
	msgNotAlEmDomAr = "البريد الذي قمت بإدخاله، <b>1s</b>، غير صحيح. يرجى  العلم بان الصيغ التالية غير مسوح بها: <span dir=\"ltr\"><b>@2s</b></span>.<br />",
    msgNotAlEmDomEn = "The email address, <b>1s</b>, contains an invalid domain. the following email domains are not allowed: <span dir=\"ltr\"><b>@2s</b></span>.<br />",
	msgMxEn = "This field cannot exceed :x: characters.<br />",
	msgMxAr = "لقد تجاوزت العدد المسموح للأحرف لهذا المُدخل.<br />",
	msgMnEn = "This field must contain at least :x: characters.<br />",
	msgMnArNew = "يجب احتواء المُدخل على :x: أحرف على الأقل.<br />",
	msgMnAr = "يجب احتواء المُدخل على حرف واحد على الأقل.<br />",
	msgMatEn = "This field does not confirm.<br />",
	msgMatAr = "لم يتطابق تأكيد المٌدخل.<br />",
	msgMxSelEn = "Too many selections: :y: options are selected out of a limit of :x:.<br />",
	msgMxSelAr = "Too many selections: :y: options are selected out of a limit of :x:.<br />",
	msgDatDNotExEn = "This date field is incomplete or incorrect.<br />",
	msgDatDNotExAr = "This date field is incomplete or incorrect.<br />",
	msgDatMatEn = "End date should be greater than start date.<br />",
	msgDatMatAr = "تاريخ البداية و النهايه غير متوافقان, يرجى تصحيح الخطأ.<br />",
	msgDatMxEn = "This date should not be greater than today's date.<br />",
	msgDatMxAr = "لا يمكن للتاريخ أن يكون أكبر من التاريخ الحالي, يرجى تصحيح الخطأ.<br />",
	msgDatMnEn = "This date should be greater than today's date.<br />",
	msgDatMnAr = "لا يمكن للتاريخ أن يكون أصغر من التاريخ الحالي, يرجى تصحيح الخطأ.<br />",
	msgMxValEn = "This field should be less than or equal to :x:.<br />",
	msgMxValAr = "This field should be less than or equal to :x:.<br />",
	msgAtLeastNumEn = "Must contain at least 1 number.<br />",
	msgAtLeastNumAr = "يجب أن تحتوي على رقم واحد على الأقل.<br />",
	msgAtLeastAlphEn = "Must contain at least 1 letter.<br />",
	msgAtLeastAlphAr = "يجب أن تحتوي على حرف واحد على الأقل.<br />",
	msgAlphaPeriodEn = "This field may contain numbers, letters, underscore, and period only (with no spaces).<br />",
	msgAlphaPeriodAr = "This field may contain numbers, letters, underscore, and period only (with no spaces).<br />" ,
	msgPatternEn = "Please follow the given format",
	msgPatternAr = "يرجى إتباع النموذج المحدد",
	msgPatternFr = "Veuillez suivre le format donné",
	msgPPAtLeastAlphEn = "Your Public Profile link must contain at least one letter to be saved.<br />",
	msgPPAtLeastAlphAr = "يجب ان تحتوي الوصلة الخاصة بصفحتك العامة على حرف واحد على الأقل ليتم حفظها.<br />",
	msgPPAtLeastAlphFr = "Le lien de votre profil public doit contenir au moins une lettre pour être sauvegardé.<br />",
	msgUserNameEn = "This field can only include your name.<br />",
	msgUserNameAr = "يجب أن يتضمن هذا المُدخل اسمك فقط.<br />",
	msgUserNameFr = "Cette partie doit contenir votre prénom uniquement.<br />",
	msgCompnayNameEn = "Company name must not contain contact information.<br />",
	msgCompnayNameAr = "لا يجب أن يحتوي إسم الشركة على أي معلومة اتصال.<br />",
	msgCompnayNameFr = "Le Nom de la Société ne doit contenir aucune information de contact.<br />",
	msgUsedEmailEn = "Email address is already used",
	msgUsedEmailAr = "البريد الإلكتروني مستخدم حاليا في تسجيل سابق",
	msgUsedEmailFr = "Adresse email déj�  utilisée",
	msgAraTxtEn = "This field can only contain Arabic alphabets.<br />",
	msgAraTxtAr = "يمكن لهذا المُدخل أن يحتوي على حروف في اللغة العربية فقط.<br />",
	msgAraTxtFr = "Ce champ ne peut contenir que des lettres en langue arabe.<br />",
	msgEngTxtEn = "This field can only contain English alphabets.<br />",
	msgEngTxtAr = "يمكن لهذا المُدخل أن يحتوي على حروف في اللغة الإنجليزية فقط.<br />",
	msgEngTxtFr = "Ce champ ne peut contenir que des lettres en langue anglaise.<br />",
	msgSaIDTxtEn = "Please enter correct Saudi ID Social Security Number.<br />",
	msgSaIDTxtAr = "يرجى إدخال رقم الضمان الإجتماعي السعودي الصحيح.<br />",
	msgSaIDTxtFr = "Veuillez insérer le Numéro de Sécurité Sociale correcte en Arabie Saoudite.<br />",
	msgRakBankEmailAr  = "Please use a different email address. You cannot use your RAKBANK email address here",
	msgRakBankEmailEn  = "Please use a different email address. You cannot use your RAKBANK email address here",
	msgRangeMaxEn = "This field should be greater than the previous one.<br />",
	msgYtVidEn = "<b>Invalid YouTube link:</b> Enter valid url.",
	msgYtVidAr = "<b>رابط يوتيوب غير صالح:</b> أدخل رابط صحيح.",
	msgRangeMaxAr = "لا يمكن لهذا المدخل أن يكون أصغر من المدخل السابق, يرجى تصحيح الخطأ.<br />",
	msgRangeMaxFr = "Ce domaine ne peut pas être inférieur �  celui qui précéde";
	msgUaeglpNationalityAr = "ان برنامج قيادات حكومة الامارات متاح لمواطني دولة الامارات فقط"
	msgUaeglpNationalityEn = "UAE Government Leaders Programme is for UAE Nationals only"
	msgNameEn = "This field may contain letters and spaces only. <br />"
	msgNameAr = "يجب ادخال احرف فقط في هذا المُدخل. <br />"
	msgUniqeEn = "The record with entered field_name already exists on the system."
	msgUniqeAr = "The record with entered field_name already exists on the system."
	msgLessThanEn = "The grade you entered does not match the grading system you chose."
	msgLessThanAr = "ان المعدل الذي قمت بادخاله لا يتناسب مع نظام الدرجات الذي قمت باختياره."
	msgLessThanFr = "La moyenne que vous avez entrée ne correspond pas au système de notation choisi."
	msgInvalVisaEn = "The visa status you entered seems to conflict with your nationality and country of residence."
	msgInvalVisaAr = "إن حالة التأشيرة التي أضفتها تتعارض مع جنسيتك وبلد الإقامة."
	msgInvalVisaFr = "Le statut du visa dont vous avez ajouté  semble être en contradiction avec votre nationalité et le pays de résidence."

	// search into the array of classes to find "locked" class, if its found
	// then nothing should done here, the validation criteria should be skipped.
	if ($(theElement).attr('class') == 'invalid') {
		ErrMsg = $('err-' + theElement.name).html();
		return false;
	}
	if (window.validatedDates === undefined){
		window.validatedDates = [];
	}
	// run through the form element classes to decide how to validate
	for (var i = 0;i < theClasses.length; i++){
		if (ErrMsg !== '') continue;
		var thisClass = theClasses[i];
		switch(thisClass) {
		case "alpha" :
			if (theString != "" && !(/^[a-zA-Z0-9_]+$/.test(theString))) {
				pass = false;
				ErrMsg = (lang == "ar") ? msgAlphAr : msgAlphEn;
			}
			break;
		case "not_zero" :
			if (theString != "" && Number(theString) === 0 ) {
				pass = false;
				ErrMsg = (lang == "ar") ? msgAlphAr : msgAlphEn;
			}
			break;
		case "password" :
			if (theString != "" && !(/^[a-zA-Z0-9ا-يﻻﻹإﻷأآﻵؤءئ_]+$/.test(theString))) {
				pass=false;
				ErrMsg = (lang == "ar") ? msgAlphAr : msgAlphEn;
			}
			break;
		case "date" :
			// detect all date fields by getting the base name and then
			// submitting to checkDate
			var baseName = theElement.name.slice(0,theElement.name.lastIndexOf("_")),
			datArr   = new Array($("#id-"+baseName+"_year"),$("#id-" + baseName + "_month"),$("#id-" + baseName + "_day"));
			errHldr =  $("#err-" + baseName + "_month");
			if (!datArr[0].find('option:selected').val() != !datArr[1].find('option:selected').val() || !datArr[1].find('option:selected').val() != !datArr[2].find('option:selected').val()){
				break;
			}else if (!checkDate(baseName)){
					pass = false;
					ErrMsg = (lang == "ar") ? msgDatDNotExAr : msgDatDNotExEn;
			}
			for (var h = 0; h < 3; h++){
				if (!pass) {
					if (!datArr[h].find('option:selected').val()){
						datArr[h].addClass('error-input');
						continue;
					}
				}
				datArr[h].removeClass('error-input');

			}
			break;
		case "email" :
			var filter = /^[0-9a-zA-Z!#$%&'*+/=?^_`{|}~-]+(\.[0-9a-zA-Z!#$%&'*+/=?^_`{|}~-]+)*@((((([a-zA-Z0-9]{1}[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]{1})|[a-zA-Z])\.)+[a-zA-Z]{2,6})|(\d{1,3}\.){3}\d{1,3}(:\d{1,5})?)$/;
			if (theString != "" && !(filter.test(theString))) {
				pass = false;
				ErrMsg = (lang == "ar") ? msgEmAr : msgEmEn;
			}
			break;
		case "multiple_emails" :
			var filter = /^[0-9a-zA-Z!#$%&'*+/=?^_`{|}~-]+(\.[0-9a-zA-Z!#$%&'*+/=?^_`{|}~-]+)*@((((([a-zA-Z0-9]{1}[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]{1})|[a-zA-Z])\.)+[a-zA-Z]{2,6})|(\d{1,3}\.){3}\d{1,3}(:\d{1,5})?)$/;
			theString = theString.replace(/;$/,'');
			var emails = theString.split(";");
  			for (var i = 0; i < emails.length; i++) {
				if ( !(filter.test(emails[i]) )) {
					pass = false;
					ErrMsg = (lang == "ar") ? multipleEmailsAr : multipleEmailsEn;
				}
			}
			break;
		case "number" :
			if (theString != "" && !(/^([0-9]*)$/.test(theString))) {
				pass = false;
				ErrMsg = (lang == "ar") ? msgNumAr : msgNumEn;
			}
			break;
		case "multinumber" :
			if (theString != "" && !(/^([0-9]*\s*)*$/.test(theString))) {
				pass = false;
				ErrMsg = (lang == "ar") ? msgNumAr : msgNumEn;
			}
			break;
		case "float" :
			var flArr = new Array ("(",")","-","+"," ");
			for (var i = 0;i < 5; i++) {
				theString = theString.replace(flArr[i],"");
			}
			$(theElement).val(theString);
			if (isNaN(theString)){
				pass = false;
				ErrMsg = (lang == "ar") ? msgNumAr : msgNumEn;
			}
			break;
		case "req" :
		case "spc-req":
			if ( $(theElement).hasClass("acv")) pass = false;
			var hide_message = false;
			if ($(theElement)[0].tagName == 'SELECT') {
				if ($(theElement).is('.date')){
					var date_name_prefix = $(theElement).attr('name').replace(/day|month|year/g,'');
					if (jQuery.inArray(date_name_prefix,window.validatedDates) >= 0 ){
						hide_message = true;
					}else if ($(theElement).prop('selectedIndex') == 0){
						window.validatedDates.push(date_name_prefix);
					}
				}
				if ($(theElement).prop("multiple")) {
					if ($(theElement).prop('selectedIndex') < 0) pass = false;
				} else if ($(theElement).prop('selectedIndex') == 0) pass = false;
			} else if ($(theElement).hasClass("radio") || $(theElement).hasClass("checkbox") ) {
				if (!$("input[name="+theElement.name+"]").is(":checked")) pass = false;
			} else {
				if (thisClass != "spc-req") {
					if (isWhitespace(removeHtmlTags(theString))) pass = false;
				} else {
					if (isWhitespace($.trim(theString))) pass = false;
				}
			}
			if (!pass) ErrMsg = hide_message ? '' : ((lang == "ar") ? msgReqAr : msgReqEn);
			break;
		case "alpha_period" :
			if (theString != "" && !(/^[a-zA-Z0-9ا-يﻻﻹإﻷأآﻵؤءئ_.]+$/.test(theString))) {
				pass = false;
				ErrMsg = (lang == "ar") ? msgAlphaPeriodAr : msgAlphaPeriodEn;
			}
			break;
		case "public_profile" :
			if ( theString.length < 6 && theString.length > 0 ) {
				pass = false;
				ErrMsg = (lang == "ar") ? msgMnAr.replace(":x:",6) : msgMnEn.replace(":x:",6);
			} else if ( !(/^[\u0600-\u06ffa-zA-Z0-9-]+$/.test(theString)) ) {
				pass = false;
				ErrMsg = (lang == "ar") ? msgAlphAr : msgAlphEn;
			} else if (theString.search(/[\u0600-\u06ffA-Za-z]/g) == -1) {
				pass = false;
				switch (lang) {
					case "ar":
						ErrMsg = msgPPAtLeastAlphAr;
						break;
					case "fr":
						ErrMsg = msgPPAtLeastAlphFr;
						break;
					default:
						ErrMsg = msgPPAtLeastAlphEn;
				}
			}
			break;
		case "specialty" :
			if ( theString.length == 1 && theString != 'C' && theString != 'c' ) {
				pass = false;
				ErrMsg = (lang == "ar") ? msgMnAr.replace(":x:",2) : msgMnEn.replace(":x:",2);
			} else if ( theString != ""&& /[a-zA-Zا-يg]+/.test(theString) == false) {
				pass = false;
				ErrMsg = (lang == "ar") ? msgAtLeastAlphAr : msgAtLeastAlphEn
			} else if (theString.length > 50 ) {
				pass = false;
				ErrMsg = (lang == "ar") ? msgMxAr.replace(":x:",50) : msgMxEn.replace(":x:",50);
			}
			break;
		case "used_email" :
        	pass = false;
       		switch (lang) {
            	case "ar":
                	ErrMsg = msgUsedEmailAr;
                	break;
            	case "en":
               		ErrMsg = msgUsedEmailEn;
               		break;
            	case "fr":
               		ErrMsg = msgUsedEmailFr;
               		break;
        	}
        break;
		case "user-name" :
			// Not incould Email
			var emailFilter = /[0-9a-zA-Z!#$%&'*+/=?^_`{|}~-]+([.][0-9a-zA-Z!#$%&'*+/=?^_`{|}~-]+)*[ ]?@[ ]?((((([a-zA-Z0-9]{1}[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]{1})|[a-zA-Z])[.])+[a-zA-Z]{2,6})|(\d{1,3}[.]){3}\d{1,3}(:\d{1,5})?)/g;
			var urlFilter   = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g;
			var phoneFilter = /([^0-9]|^)((\+|00)[0-9]+|\([0-9]+\))[0-9/_\-@\.)]+/g;
			var otherPhoneFilter=/\d+(\s|-|_)*/g;
			if (theString != "" && (emailFilter.test(theString)
				|| urlFilter.test(theString)
				|| phoneFilter.test(theString)
				|| otherPhoneFilter.test(theString)
				) ) {

				pass = false;
				switch (lang) {
					case "ar":
						ErrMsg = msgUserNameAr;
						break;
					case "fr":
						ErrMsg = msgUserNameFr;
						break;
					default:
						ErrMsg = msgUserNameEn;
				}
			}
			break;
		case "company-name" : 
			var emailFilter = /[0-9a-zA-Z!#$%&'*+/=?^_`{|}~-]+([.][0-9a-zA-Z!#$%&'*+/=?^_`{|}~-]+)*[ ]?@[ ]?((((([a-zA-Z0-9]{1}[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]{1})|[a-zA-Z])[.])+[a-zA-Z]{2,6})|(\d{1,3}[.]){3}\d{1,3}(:\d{1,5})?)/g;
			var urlFilter   = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g;
			var phoneFilter = /(\+\d)*\s*(\(\d{2,4}\)\s*)*\d{2,4}(-{0,1}|\s{0,1})\d{2,4}(-{0,1}|\s{0,1})\d{2,4}(-{0,1}|\s{0,1})\d{2,4}/g;
			if (theString != "" && (emailFilter.test(theString)
			|| urlFilter.test(theString)
			|| phoneFilter.test(theString)
			) ) {
				pass = false;
				switch (lang) {
					case "ar":
						ErrMsg = msgCompnayNameAr;
						break;
					case "fr":
						ErrMsg = msgCompnayNameFr;
						break;
					default:
						ErrMsg = msgCompnayNameEn;
				}
			}
			break;
		case "aratxt" :
				if(theString != "" && isArabicText(theString, "percentage") == 0) {
					pass = false;
					switch (lang) {
						case "ar":
							ErrMsg = msgAraTxtAr;
							break;
						case "fr":
							ErrMsg = msgAraTxtFr;
							break;
						default:
							ErrMsg = msgAraTxtEn;
					}
				}
			break;
		case "engtxt" :
				if(theString != "" && isArabicText(theString, "percentage") > 0) {
					pass = false;
					switch (lang) {
						case "ar":
							ErrMsg = msgEngTxtAr;
							break;
						case "fr":
							ErrMsg = msgEngTxtFr;
							break;
						default:
							ErrMsg = msgEngTxtEn;
					}
				}
			break;
        case "regular_data" :
            // make sure to add id = "start_date" for the start date field
            var start_data = $('#start_date').val();
            if ( theString != "" && start_data > theString ) {
                 pass = false;
                 ErrMsg = (lang == "ar") ? msgDatMatAr : msgDatMatEn;
            }
            break;
        case "rak_bank_email" :
        	var email_domain = theString.split('@')[1].toLowerCase();
        	if (email_domain == "rakbank.ae") {
        		pass = false;
        		ErrMsg = (lang == "ar") ? msgRakBankEmailAr : msgRakBankEmailEn;
        	}
        	break;
        case "verify_nationality" :
        	if ( theString != "ae" ) {
        		pass = false;
        		ErrMsg = ( lang == "ar" ) ? msgUaeglpNationalityAr : msgUaeglpNationalityEn;
        	}
        	break;
		case "name" :
			if (theString != "" && !(/^[a-zA-Z0-9 ]+$/.test(theString))) {
				pass = false;
				ErrMsg = (lang == "ar") ? msgNameAr : msgNameEn;
			}
			break;
		case "yu_vid" :
			if (theString != "" && !(/^((http:\/\/youtube.com\/watch\?v=)[\w\-]{4,})|^((www.youtube.com\/watch\?v=)[\w\-]{4,})|^((http:\/\/www.youtube.com\/watch\?v=)[\w\-]{4,})/i.test(theString))) {
				pass = false;
				ErrMsg = (lang == "ar") ? msgYtVidAr : msgYtVidEn;
			}
			break;
		case "unique" :
			if (theString != "") {
				var question_id = theElement.name.split('-')[1] ;
				var exist		= 0;
				var section_name= 'unique_field';
				
				if(question_id === undefined || theElement.name == "gen_field_1"){
					question_id = -1 ;
				}
				if($(theElement).hasClass("reg_page"))
					section_name='unique_field_ssn';
				
				$.ajax({
					type: "POST",
					url: "/app/control/byt_new_cv_manager.tcl",
					data: {section:section_name , unique_question_id : question_id , question_value : theString},
					async: false ,
					success: function (data){ exist = data }
				});
				
				if (exist == 1 || exist.length > 1) {
					pass 		= false;
					msgUniqeEn 	= msgUniqeEn.replace("field_name", $(theElement).parent().prev().text().split(":")[0].trim() );
					msgUniqeAr 	= msgUniqeAr.replace("field_name", $(theElement).parent().prev().text().split(":")[0].trim() );
					ErrMsg 		= (lang == "ar") ? msgUniqeAr : msgUniqeEn;
					if (exist.length > 1)
						ErrMsg = exist;
				}
			}
			break;
		case "visa" :
			pass = false;
       		switch (lang) {
            	case "ar":
                	ErrMsg = msgInvalVisaAr;
                	break;
            	case "en":
               		ErrMsg = msgInvalVisaEn;
               		break;
            	case "fr":
               		ErrMsg = msgInvalVisaFr;
               		break;
        	}
        break;
		default :
			if ($(theElement)[0].tagName == 'SELECT') {
				theString = '';
				if ($(theElement).val() != null) theString = $(theElement).val();
			}
			// dual-value classes (creating a name and value by splitting the
			// class from "-")
			if (thisClass.split("-").length > 1 && !isWhitespace(theString)){
				var checkType = thisClass.split("-")[0];
				var checkVal = thisClass.split("-").slice(1).join("-");

				switch (checkType) {
				case "min" :
					if (theString.length < checkVal){
						pass = false;
						ErrMsg = (lang == "ar") ? msgMnArNew.replace(":x:",checkVal) : msgMnEn.replace(":x:",checkVal);
					}
					break;
				case "maxval" :
					if (parseInt(theString) >  parseInt(checkVal)){
						pass = false;
						ErrMsg = (lang == "ar") ? msgMxValAr.replace(":x:",checkVal) : msgMxValEn.replace(":x:",checkVal);
					}
					break;
				case "max" :
					if ($(theElement)[0].tagName == "SELECT"){
						var ctr = $(theElement).val().length;
						if ( ctr > checkVal) {
							pass = false;
							ErrMsg = (lang == "ar") ? msgMxSelAr.replace(":x:",checkVal).replace(":y:",ctr) : msgMxSelEn.replace(":x:",checkVal).replace(":y:",ctr);
						}
					} else if (theString.length+theString.split("\n").length-1 > checkVal) {
						pass = false;
						ErrMsg = (lang == "ar") ? msgMxAr : msgMxEn.replace(":x:",checkVal);
					}
					break;
				case "rangemax" :
				    var append = ""
				    if ($(theElement)[0].tagName == "SELECT"){var append = "id-"}
					var baseName = $(theElement).attr('name');
					var enteredVal = parseInt($("#"+ append + baseName).val());
					var checkValue = parseInt($("#" + append + checkVal).val());
					if ( enteredVal < checkValue ){
						pass = false;
						switch (lang) {
							case "ar":
								ErrMsg = msgRangeMaxAr;
								break;
							case "fr":
								ErrMsg = msgRangeMaxFr;
								break;
							default:
								ErrMsg = msgRangeMaxEn;
						}
					}
					break;
				case "datemax" :
					var baseName = $(theElement).attr('name').slice(0,theElement.name.lastIndexOf("_"));
					var day = ($("#id-" + baseName + "_day").length) ? $("#id-" + baseName + "_day").val() : '00';
					var enteredDate = parseInt($("#id-" + baseName + "_year").val() + $("#id-" + baseName + "_month").val() + day);
					if (enteredDate > parseInt(checkVal)){
						pass = false;
						ErrMsg = (lang == "ar") ? msgDatMxAr : msgDatMxEn;
					}
					break;
				case "datemin" :
					var baseName = $(theElement).attr('name').slice(0,theElement.name.lastIndexOf("_"));
					var day = ($("#id-" + baseName + "_day").length) ? $("#id-" + baseName + "_day").val() : '00';
					var enteredDate = parseInt($("#id-" + baseName + "_year").val() + $("#id-" + baseName + "_month").val() + day);
					if (enteredDate < parseInt(checkVal)){
						pass = false;
						ErrMsg = (lang == "ar") ? msgDatMnAr : msgDatMnEn;
					}
					break;
				case "calMin" :
					var enteredDate = parseInt($(theElement).val().replace(/-/g, ''));
					if ( enteredDate < parseInt(thisClass[1])){
						pass = false;
						ErrMsg = (lang == "ar") ? msgDatMnAr : msgDatMnEn;
					}
					break;
				case "match" :
					if ($.trim($(theElement).val()) != $.trim($('[name='+checkVal+']').val())){
						pass = false;
						ErrMsg = (lang == "ar") ? msgMatAr : msgMatEn;
					}
					break;
				case "datematch" :
					// make sure month is not 'Present' (or any other non
					// numerical string) before doing the check
					if (!isNaN($(theElement).val())) {

						var baseName = $(theElement).attr('name').slice(0,theElement.name.lastIndexOf("_")),
						startDay = ($("#id-" + checkVal + "_day").length) ? $("#id-" + checkVal + "_day").val() : '00',
						endDay = ($("#id-" + baseName + "_day").length) ? $("#id-" + baseName + "_day").val() : '00',
						startDate = $("#id-" + checkVal + "_year").val() + $("#id-" + checkVal + "_month").val() + startDay,
						endDate = $("#id-" + baseName + "_year").val() + $("#id-" + baseName + "_month").val() + endDay;

						if (startDate > endDate){
							pass = false;
							ErrMsg = (lang == "ar") ? msgDatMatAr : msgDatMatEn;
						}
					}
					break;
				case "numberlessthan" :
                    var max_val = parseFloat($.trim($(theElement).val()));
                    var input_val = parseFloat($.trim($('[name='+checkVal+']').val()));
                    if ( input_val > max_val || max_val == "" ) {
                        pass = false;
                        switch(lang) {
                            case "ar" :
                                ErrMsg = msgLessThanAr
                            break
                            case "fr" :
                                ErrMsg = msgLessThanFr
                            break
                            default :
                                ErrMsg = msgLessThanEn
                        }
                    }
                    break;
				case "emailDomain": 
				case "notAllowdEmailDomain" :
					// check the email domain validation
					if (ErrMsg=="") {
						var usrEmDom = theString.split('@')[1].toLowerCase(),
						valDomArr = checkVal.split(','),
						valFg=0; // valFg = 1 => the Domain is valid , else
									// invalid
						if (checkType == "notAllowdEmailDomain" ) {
						  valFg=1;
						}
						for (var count=valDomArr.length-1 ; count>=0 ; count--) {
							if (valDomArr[count].toLowerCase()==usrEmDom){
								// valid domain
								valFg=1
								if (checkType == "notAllowdEmailDomain" ) {
                                    valFg=0
                                }
								break;
							}
						}
						if (valFg==0) {
							pass = false;
							ErrMsg = (lang == "ar") ? msgEmDomAr : msgEmDomEn;
							if (checkType == "notAllowdEmailDomain" ) {
                               ErrMsg = (lang == "ar") ? msgNotAlEmDomAr : msgNotAlEmDomEn;
                            }
							ErrMsg = ErrMsg.replace('1s',theString);
							var orOptr = (lang == "ar") ? ' أو ' : ' or ';
							ErrMsg = ErrMsg.replace('2s',valDomArr.join('</b> '+orOptr+'<b>@'));
						}
					}
					break;
				case "hasNum" :
					if (theString.search(/[0-9]/g) == -1 || theString.match(/[0-9]/g).length < checkVal) {
						pass = false;
						ErrMsg = (lang == "ar") ? msgAtLeastNumAr : msgAtLeastNumEn;
					}
					break;
				case "hasAlpha" :
					if (/[a-zA-Zا-يg]+/.test(theString) == false || theString.match(/[A-Za-zا-ي]/g).length < checkVal) {
						pass = false;
						ErrMsg = (lang == "ar") ? msgAtLeastAlphAr : msgAtLeastAlphEn;
					}
					break;
				case "pattern" :
					checkVal = new RegExp(checkVal);
					if(!checkVal.test(theString)) {
						pass = false;
						switch (lang) {
							case "ar":
								ErrMsg = msgPatternAr;
								break;
							case "fr":
								ErrMsg = msgPatternFr;
								break;
							default:
								ErrMsg = msgPatternEn;
						}
					}
					break;
				case "saudi_national_id" :
					if ( theString.length != checkVal ) {
						pass = false;
						switch (lang) {
							case "ar":
								ErrMsg = msgSaIDTxtAr;
								break;
							case "fr":
								ErrMsg = msgSaIDTxtFr;
								break;
							default:
								ErrMsg = msgSaIDTxtEn;
								break;
						}
					}
					break;
				}
			}
		}
	}
	// insert the error message in its relative <span> location
	if (errHldr){
		var inrHTMLTxt = (!pass) ? ErrMsg : "";
		spanCurrentHtml = $("[id*='err-" + theElement.name + "']").html();

		if ( theElement.name != "tag_list" || spanCurrentHtml == "" ) {
			// This is to prevent the correct specialty tags from emptying the
			// error span.
			var currentSpan = $("[id='err-" + theElement.name + "']");
			var spanParent = $(currentSpan).parent();
			var mesgchanged = false;
			if (currentSpan.html() != undefined && currentSpan.html() != "") {
				mesgchanged = (currentSpan.html().split('.')[0] !== inrHTMLTxt.split('.')[0]);
			}
			if (inrHTMLTxt == "" || mesgchanged ) {
				currentSpan.html(inrHTMLTxt);
			} else {
				var errorMsgsCount = 0
				var errorSpansCount = 0
				if ($(spanParent).children().length > 0) {
					for (var i= 0; i < $(spanParent).children().length; i++) {
						var thisChild = $(spanParent).children()[i];
						if ( thisChild.className == "error"){
							errorSpansCount++;
							if ($(thisChild).html() != "") {
								errorMsgsCount++;
							}
						}
					}
				}
				if (errorSpansCount < 2) {
					currentSpan.html(inrHTMLTxt);
				} else if (errorMsgsCount == 0) {
					currentSpan.html(inrHTMLTxt);
				}
			}

		}
		if (ErrMsg.search(msgDatDNotExEn)!=-1 || ErrMsg.search(msgDatDNotExAr)!=-1) {
			$("[name="+theElement.name+"]").parent().children().each(function(){
				if (($(this).attr("id").search("day") >-1 || $(this).attr("id").search("month") >-1) && $(this).hasClass("error") ){
					$(this).hide();
				}
			});
		}
		else {
			if (theElement.name.search("day")!=-1){
				$("[name="+theElement.name+"]").parent().children().each(function(){
					var attr_exist = ($(this).attr("id") != undefined) ? $(this).attr("id") :"";
					if ((attr_exist.search("day") >-1 || attr_exist.search("month") >-1) && $(this).hasClass("error") ){
						$(this).show();
					}
				});
			}
		}
		if(!pass) $(theElement).addClass('error-input');
	}
	// clear the default text for elements with class "cleartext"
	var cleartext_check = ($(theElement).hasClass("")) ? false : $(theElement).attr('class').match("cleartext");
	if (cleartext_check && $(theElement).val() == $(theElement)[0].defaultValue) $(theElement).val("");
	return pass;
}

function checkDate(baseName){
	var pass = true,lnCom = 8,monEx=$("#id-" + baseName + "_month"),yrEx=$("#id-" + baseName + "_year"),dayEx=$("#id-" + baseName + "_day");
	// make sure month is not 'Present' before doing the check
	if(!isNaN($("#id-" + baseName + "_month").val())) {
		var day = (dayEx)?dayEx.val():"",
		month = (monEx)?monEx.val():"",
		year = (yrEx)?yrEx.val():"",
		monLen = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
		if (year/4 == parseInt(year/4)) monLen[1] = 29;
		if (day > monLen[month-1]) pass = false;
		lnCom = (yrEx.length) ? lnCom : lnCom - 4;
		lnCom = (monEx.length) ? lnCom : lnCom - 2;
		lnCom = (dayEx.length) ? lnCom : lnCom - 2;
		if ((year + month + day).length > 0 && (year + month + day).length < lnCom ) pass = false;
	}
	return pass;
}

// USED IN END DATE: WHEN MONTH = PRESENT, HIDE THE YEAR AND DON'T CHECK IT FOR
// VALIDITY
function checkPresent(datNm){
	var dat = datNm;

	for (i = 4; i >= 1; i--) {
		if ($("#id-" + dat + "_month").length) {
			if ($("#id-" + dat + "_month").val() == "Present"){
				$("#id-" + dat + "_year").val("");
				$("#id-" + dat + "_year").attr('class','hide');
				$("#uaeglp-present").hide();
			} else {
				var end_month_class = $("#id-" + dat + "_month").attr('class').split(' ')[0]
				$("#id-" + dat + "_year").attr('class',''+end_month_class+' date');
				$("#uaeglp-present").show();
			}
			// NOT TO GO THROUGH NEEDLES LOOPS
			if (dat == datNm) break; else dat = "end"+i;
		} else {
			dat = "end"+i;
		}
	}
}


function injectSearchCriteria() {
	// Function to place the search criteria in a hidden field when search
	// criteria is exported (RAKG)
	var search_for_export = new Object();
	$("span.filter_value").each(function(){
		if(!$(this).hasClass('filter_newvalue')) {
			if ($(this).text().trim().length) {
				if (typeof search_for_export[$(this).siblings(".filter_label").text()] === "undefined") {
					search_for_export[$(this).siblings(".filter_label").text()] = $(this).text();
				} else {
					search_for_export[$(this).siblings(".filter_label").text()] += $(this).text();
				}
			}
		}
	});
	if ($('#export_result_summary').length == 0) {
		var search_criteria = document.createElement("input");
		search_criteria.setAttribute("id", "export_result_summary");
		search_criteria.setAttribute("type", "hidden");
		search_criteria.setAttribute("name", "export_result_summary");
		search_criteria.setAttribute("value", JSON.stringify(search_for_export));
		document.getElementById("search-results").appendChild(search_criteria);
	} else {
		$('#export_result_summary').val(JSON.stringify(search_for_export));
	}
}

$.fn.oneTimeClick = function() {

	var lang = $(document.body).attr('id'),mssg;

	switch (lang) {
		case "fr":
			mssg = "Veuillez patienter...";
			break;

		case "ar":
			mssg = "يرجى الإنتظار...";
			break;

		default:
			mssg = "Please wait...";
			break;
	}

	$(this).attr("disabled",true).text(mssg);
}

/*
 * Cookie plugin
 * 
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de) Dual licensed under the MIT and
 * GPL licenses: http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 */

/*
 * Create a cookie with the given name and value and other optional parameters.
 * 
 * @example $.cookie('the_cookie', 'the_value'); @desc Set the value of a
 * cookie. @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/',
 * domain: 'jquery.com', secure: true }); @desc Create a cookie with all
 * available options. @example $.cookie('the_cookie', 'the_value'); @desc Create
 * a session cookie. @example $.cookie('the_cookie', null); @desc Delete a
 * cookie by passing null as value. Keep in mind that you have to use the same
 * path and domain used when the cookie was set.
 * 
 * @param String name The name of the cookie. @param String value The value of
 * the cookie. @param Object options An object literal containing key/value
 * pairs to provide optional cookie attributes. @option Number|Date expires
 * Either an integer specifying the expiration date from now on in days or a
 * Date object. If a negative value is specified (e.g. a date in the past), the
 * cookie will be deleted. If set to null or omitted, the cookie will be a
 * session cookie and will not be retained when the the browser exits. @option
 * String path The value of the path atribute of the cookie (default: path of
 * page that created the cookie). @option String domain The value of the domain
 * attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be
 * set and the cookie transmission will require a secure protocol (like HTTPS).
 * @type undefined
 * 
 * @name $.cookie @cat Plugins/Cookie @author Klaus
 * Hartl/klaus.hartl@stilbuero.de
 */

/*
 * Get the value of a cookie with the given name.
 * 
 * @example $.cookie('the_cookie'); @desc Get the value of a cookie.
 * 
 * @param String name The name of the cookie. @return The value of the cookie.
 * @type String
 * 
 * @name $.cookie @cat Plugins/Cookie @author Klaus
 * Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires
															// attribute,
															// max-age is not
															// supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
// GET RID OF IMAGE FLICKERING UPON HOVER ON IE6//
try {
document.execCommand('BackgroundImageCache', false, true);
} catch(e) {}

// OPENS NEW WINDOW//
function newWin(url,size,target) {
	var wdth = 800; var hght = 500;
	if (size == "s"){wdth = 300; hght = 300;}
	else if (size == "m"){wdth = 550; hght = 475;}

	var winParms = [",top=",Math.floor((screen.height - hght)/2),",left=",Math.floor((screen.width - wdth)/2),",height=",hght,",width=",wdth].join("");
	if (parseInt(navigator.appVersion) >= 4) {window.focus();}
	if ( target === undefined ) var target = '';
	window.open(url,target,["scrollbars=1,resizable=1",winParms].join(""));
}

// OPENS NEW WINDOW WHEN class ATTRIBUTE IS SET
function popup(){
	var clsArr = new Array();
		var aTags = $(document).find('a');
		for (var i = aTags.length -1; i >= 0; i--){
			clsArr = ($(aTags[i]).hasClass("")) ? "" : $(aTags[i]).attr('class').split(" ");
			for (var j = clsArr.length -1; j >= 0; j--){
				if (clsArr[j] == "pop") $(aTags[i]).click(function(){ newWin(this); return false;});
				else if (clsArr[j] == "popm") $(aTags[i]).click(function(){ newWin(this,"m"); return false;});
				else if (clsArr[j] == "pops") $(aTags[i]).click(function(){ newWin(this,"s"); return false;});
			}
		}
}

// LIMITS THE MAX CHARACTERS IN A TEXTAREA INPUT//
function textCounter(inp, id, mxLmt) {
	var mxLmt = (mxLmt) ? mxLmt : 2000,sId   = $('#'+id),sInp  = $(inp);
	sId.addClass('tip');
	// THIS CASE WAS ADDED TO HANDLE BOTH FUNCTIONALITIES FOR BAYT AND SMS
	var extra_returns = sInp.val().split("\n").length - 1;
	var total_count = sInp.val().length + extra_returns


	sId.text([total_count," of ",mxLmt," character limit used."].join(""));
	switch($(document.body).attr('id')) {
		case "ar" :
			sId.text([mxLmt," تم استخدام ",total_count," حرف ","  من أصل "].join(""));
		break
		case "fr" :
			sId.text([total_count," de ",mxLmt," caractères limites ont été utilisés"].join(""));
		break
	}

	sId.removeClass('error');
	if(total_count > mxLmt) {
		sId.addClass('error');
		sId.text([total_count," of ",mxLmt," character limit used! Please edit text"].join(""));
		switch($(document.body).attr('id')) {
			case "ar" :
				sId.text([" تم استخدام ",total_count," حرف من أصل ", mxLmt, " يرجى حذف بعض الأحرف "].join(""));
			break
			case "fr" :
				sId.text([total_count," de ",mxLmt," caractères limites ont été utilisés"].join(""));
			break
		}
	}
}

// DELETE CONFIRMATION//
function ConfirmDelete(m){
	if (!m) {
	switch($(document.body).attr('id')) {
		case "ar" :
			m = "هل أنت متأكد من رغبتك في إتمام عملية الحذف؟\n\nلا يمكن الرجوع عن هذه العملية.";
		break
		case "fr" :
			m = "Etes-vous sur de vouloir supprimer cet élément?\n\nCette action est irréversible.";
		break
		default :
			m = "Are� you� sure� you� want� to� delete� this� item?\n\nYou� will� not� be� able� to undo this action.";
	} }
	return confirm(m);
}

function cbCheckAllInit(){
	// check all checkboxes in table
	var cbTglr= $('#cb-toggler'),cb= $('[name=cb]');
	if(cbTglr.length){
		cbTglr.click(function(){cb.attr('checked',false);(cbTglr.is(':checked'))? cb.attr('checked',true):null;});
		// if any checkbox becomes unchecked, uncheck the "check all" checkbox
		// as well
		cb.click(function(){(cb.not(':checked').length > 0)? cbTglr.attr('checked',false):null;});
	}
}

// CONFIRMS DELETION OF SELECTED CHECKBOXES IN A LIST//
function cbDelete(m1,m2) {
	if ($('[name=cb]').not(':checked').length != $('[name=cb]').length) {
		return confirm(m2);
	}
	alert(m1);
}

// FORM VALIDATOR FUNCTIONS//
function isWhitespace(s){
	return (!/[^\s+]/.test(s));
}

function checkSpelling(inp,m){
	if (isWhitespace($(inp).val())){
		alert(m);
		$(inp).focus();
	} else {
		// create temperary from
		var spillcheckerForm = document.createElement("form");
		spillcheckerForm.setAttribute("method", "post");
		spillcheckerForm.setAttribute("action", '/' + $(document.body).attr('id') + '/spell-check/');

		// setting form target to a window named 'formSpellcheckResult + random
		// number
		var target = 'formSpellcheckResult' + Math.floor(Math.random()*1000)
		spillcheckerForm.setAttribute("target", target);

		var spillcheckerTextArea = document.createElement("input");
		spillcheckerTextArea.setAttribute("name", "text");
		spillcheckerTextArea.setAttribute("value", $(inp).val());

		spillcheckerForm.appendChild(spillcheckerTextArea);
		document.body.appendChild(spillcheckerForm);

		newWin('','m',target);

		spillcheckerForm.submit();

		document.body.removeChild(spillcheckerForm);
	}
}

// FOCUS THE NAVTAB ONMOUSEOVER
function clearTabs(){
		var tabs = $('#nav').children();
		for(var i = tabs.length -1; i >= 0; i--){
			if($(tabs[i]).hasClass('on')) $(tabs[i]).removeClass('on');
		}
}

function focusTab(){
		var timer,tabs = $('#nav').children();
		for(var i = tabs.length -1; i >= 0; i--){
			if(!$(tabs[i]).hasClass('opptab')){
				$(tabs[i]).mouseover(function(){clearTimeout(timer);clearTabs();$(this).addClass('on');});
				$(tabs[i]).mouseout(function(){timer = setTimeout(function() {clearTabs();$('#nav-on').addClass('on');},1000);});
			}
		}
}

function toggle(id){
	// Toggle the visiblility between the block elements at {id}-on and
	// {id}-off.
	// id : the prefix id of the block element that will be toggled.
	var icon = $('#'+id +'-expand'),
	onfAr = new Array ($('#'+id+'-on'),$('#'+id+'-off'));
	for (var i = 1;i >= 0;i--){
		if(onfAr[i].length){
			onfAr[i].toggle();
		}
	}
	if(icon.length){
		icon.attr('class',(icon.attr('class').indexOf('expand') != -1)?icon.attr('class').replace('expand','collapse'):icon.attr('class').replace('collapse','expand'));
	}
}

function multiToggle(id1, id2) {
	// This function switch appearance between two elements (id1, id2)
	if ($("#"+id1).is(":visible")) {
		$("#"+id1).toggle();
		$("#"+id2).show();
	} else {
		$("#"+id2).toggle();
		$("#"+id1).show();
	}
}

function toggleSlide(id,idArray){
	// Set the block element at {id}-on as visible and hide all other block
	// elements with id {idArray[n]}-on.
	// The block element at {id}-off is also hidden.
	// id : the prefix id of the block element that will be affected, where the
	// block element id is [id]-on.
	// idArray : an array of space-separated prefix ids for all block elements
	// that will be hidden by toggleSlide.
	var idArray = idArray.split(' '), thisId;
	for (var j = idArray.length -1; j >= 0; j--){
		thisId = $('#'+idArray[j]+'-on');
		if (idArray[j] == id) {
			thisId.attr('class',thisId.attr('class').replace('hide',''));
		} else {
			thisId.attr('class',(thisId.attr('class').indexOf('hide')>-1)?thisId.attr('class'):thisId.addClass('class')+' hide');
		}
	}
}

function toggleRadio(id,rad,val){
	// Toggle the block element at {id}-off between hidden/visible when the
	// radio <input> at {rad} with value {val} is checked.
	// All <form> elements within the block element {id}-off is set to null and
	// to not required when {id}-off is hidden.
	// id : the prefix id of the block element that will be toggled, where the
	// block element id is {id}-off.
	// rad : the reference to the radio <input> that will determine whether
	// {id}-off is hidden or visible.
	// val : the value of the radio <input> at rad that tells toggleRadio to
	// make {id}-off hidden.
	var thisId = $('#'+id+'-off'), // define the block element {id}-off
	eleTypArr = new Array("select","input","textarea"), // define the array of
														// all <form> elements
														// within {id}-off
	ele;
	// the current checked radio value is not equal to val
	// --> hide the block element and nullify all the <form> elements within.
	if ($(rad).val() != val) {
		(!thisId.hasClass('hide'))?thisId.addClass('hide'):null;
		for (var x = 2; x >= 0; x--){
			ele = thisId.find(eleTypArr[x]);
			if (ele.length) {
				ele.val("");
				(ele.prop("class").indexOf("req") > -1)?ele.attr("class",ele.attr("class").replace("req","reqHide")):ele.addClass("hide");
			}
		}
	// the current checked radio value is equal to val
	// --> show the block element and reset all <form> elements within to their
	// original value.
	} else {
		thisId.removeClass("hide");
		for (var x = 2; x >= 0; x--){
			ele = thisId.find(eleTypArr[x]);
			for (var y = 0; y < ele.length; y++){
				var rep_cls = "hide";
				var rep_with_cls = "";
				if ($(ele[y]).prop("class").indexOf("req") > -1) {
					rep_cls = "reqHide";
					rep_with_cls = "req";
				}
				$(ele[y]).prop("class",$(ele[y]).prop("class").replace(rep_cls,rep_with_cls));
				// reset the form element value to it's original value
				switch ($(ele[y]).prop('tagName')){
					case "SELECT" :
						for (var z = ele[y].options.length -1; z >= 0 ; z--){
							if (ele[y].options[z].defaultSelected) ele[y].options[z].selected = true;
							else ele[y].options[z].selected = false;
						}
						break;
					default :
						// <input> and <textarea> elements
						$(ele[y]).val(ele[y].defaultValue);
						break;
				}
			}
		}
	}
}

function add(obj) {
	obj.attr('class',obj.attr('class').replace('hide',''));
	obj.attr('class',obj.attr('class').replace('reqHide','req'));
}

function rem(obj) {
	obj.attr('class',obj.attr('class')+' hide');
	obj.attr('class',obj.attr('class').replace('req','reqHide'));
}

// JUST PROVIDE THE NAME OF THE DIV's WITHOUT THE NUMBERS.
function addMore(id) {
	var div,
	ele,
	eleTypArr = new Array("select","input","textarea");
	for (i = 10; i >= 1; i--) {
		div = $('#'+id+i);
		if (div.length && div.hasClass('hide')){
			add(div);
		// this code resets all form elements within the hidden block to null so
		// as to not interfere with validator
			for (var x = 2; x >= 0; x--) {
				ele = div.find(eleTypArr[x]);
				for (var y = ele.length -1; y >= 0; y--){
					add($(ele[y]));
				}
			}
		}
	}
}

function remove(id) {
	var div = $('#'+id),
	ele,
	eleTypArr = new Array("select","input","textarea");
	if (div.length && !(div.hasClass('hide'))) {
		rem(div);
		// this code resets all form elements within the hidden block to null so
		// as to not interfere with validator
		for (var x = 2; x >= 0; x--) {
			ele = div.find(eleTypArr[x]);
			for (var y = ele.length -1; y >= 0; y--){
				rem($(ele[y]));
				$(ele[y]).val('');
			}
		}
	}
}

function removeURLParam(url, prm){
	// REMOVE prm FROM THE PASSED URL IF IT EXIST
		var strt = url.indexOf(prm+'='),
		nUrl = url;
		if (strt != -1) {
			var end = url.indexOf('&',strt+1);
			nUrl = url.slice(0,strt) + url.substring(end+1);
			if ( end == -1 )
				nUrl = url.slice(0,strt-1);
		}
		return nUrl;
}

function sort_cv_listing(id,togCri) {
	var sObj = $('[name='+togCri+']:checked').val(), selObj = $('#'+id), url = selObj.val(), uRed = new String(url);
	window.location = [uRed.replace(/&toggle=(\d)/gi, ""),"&toggle=",sObj].join("");
}

function SearchHighlight() {
	if (!document.createElement || !$.cookie('keywords')) return;
	var keyArr = $.cookie("keywords").split("&"),newKeyArr = new Array();
	$.each(keyArr,function(index,value){
		if (value.length>3||(value.length<=3 && value.search(/\+|\-|\&|\*|\/|\%|\#|\@|\!|\~|\$|\^/g) != -1)) {
			if (value.length>3 && value.search(/\S\+\S/g)!=-1) {
				value = value.replace("\+"," ");
			}
			newKeyArr.push(value);
		}});
	if (newKeyArr.length == 0) return;
	var tmp = unescape(newKeyArr.join("|").replace("\+","\\+").replace(/\"|\<|\>/g,'')),reg = new RegExp("\\w*("+tmp+")\\w*(?=[^>]*<)","gim"), nd;
	(arguments.length == 0)?nd=$(document).find("body"):nd=$('#'+arguments[0]);
	var l, arr, ndTxt = nd.html(), txt = ndTxt.match(/<script.*?>([\s\S]*?)<\/script>/gim);
	nd.html(ndTxt.replace(/<script.*?>([\s\S]*?)<\/script>/gim,"<script></script>"));// empty
																						// scripts
																						// so
																						// that
																						// they
																						// don't
																						// get
																						// replaced
	if (nd.html().match(reg) != null) {
		arr = sortByLen(nd.html().match(reg)).join().replace(/(\+|\-|\&|\*|\/|\%|\#|\@|\!|\~|\$|\^)/g,"\\$1").split(",");
		arr=arr.sort();
		for (var i = arr.length -1; i >= 0; i--) {
			if(arr[i] != arr[i-1]) {
				(arr[i].split(' ').length > 1)?l=2:l="";
				nd.html(nd.html().replace(new RegExp("("+arr[i]+")(?=([^>]*<))","g"),"<span class=\"hilite"+l+"\">"+arr[i].replace(/\\/g,"")+"</span>"));
			}
		}
		nd.html(nd.html().replace("<script></script>",txt));
	}
}

function sortByLen(x) {
	var tmp, len = x.length;
	for (var i=0; i<(len-1); i++)
		for (var j=i+1; j<len; j++)
			if ($.trim(x[j]).length < $.trim(x[i]).length) {tmp = $.trim(x[i]);x[i] = $.trim(x[j]);x[j] = tmp;}
	return x;
}

function loadContent(selName,txtName) {
	var content_id = $(selName).val(),content = $("#l"+content_id).attr("title");
	if (isWhitespace(content_id)) {
		$("[name="+txtName+"]").val("")
	} else {
		$("[name="+txtName+"]").val(content);
	}
}

function loadContentLetter(selName,txtName,sbjName,attName) {
	
	var content_id = $(selName).val(),content = $("#l"+content_id).attr("title");
	var sbj_content = $("#lsub"+content_id).attr("title");
	var sbj_attach = $("#lattach"+content_id).attr("title");
	
	$('#attachment_view_'+content_id).hide();
	$('#attachement_id_'+content_id).hide();
	$('#attachement_p_'+content_id).hide();
	$('#attachement_h_'+content_id).hide();
	$('#update_span_'+content_id).hide();
	
	$('.attachments').hide();
	
	if (isWhitespace(content_id)) {
		$("[name="+txtName+"]").val("");
		$("[name="+sbjName+"]").val("");
		
		if (isWhitespace(sbj_attach) || sbj_attach == undefined ) {
			$('#attachment_view_'+content_id).hide();
			$('#attachement_id_'+content_id).hide();
			$('#attachement_p_'+content_id).hide();
			$('#attachement_h_'+content_id).hide();
			$('#update_span_'+content_id).hide();
		} else {
			console.log('we are here');
			$('#attachment_view_'+content_id).show();
			$('#attachement_id_'+content_id).show();
			$('#attachement_p_'+content_id).show();
			$('#attachement_h_'+content_id).show();
			$('#update_span_'+content_id).show();
		}
		
	} else {
		$("[name="+txtName+"]").val(content);
		$("[name="+sbjName+"]").val(sbj_content);
		console.log('sbj_attach>> ' + sbj_attach);
		if (isWhitespace(sbj_attach) || sbj_attach == undefined ) {
			$('#attachment_view_'+content_id).hide();
			$('#attachement_id_'+content_id).hide();
			$('#attachement_p_'+content_id).hide();
			$('#attachement_h_'+content_id).hide();
			$('#update_span_'+content_id).hide();
		} else {
			console.log('wfnihfidhf');
			$('#attachment_view_'+content_id).show();
			$('#attachement_id_'+content_id).show();
			$('#attachement_p_'+content_id).show();
			$('#attachement_h_'+content_id).show();
			$('#update_span_'+content_id).show();
		}
		
	}
}

function setPrefsCookie(lang,iso,cookieName) {
	if(isWhitespace(lang)) lang="en";
	if(isWhitespace(iso)) iso="jo";
	var prefsArr = $.cookie(cookieName).split(" "),newPrefs;
	prefsArr[1]=iso;prefsArr[3]=lang;newPrefs=prefsArr.join(" ");
	$.cookie(cookieName, null, { path: '/' });
	var domain = '.bayt.com'
	if(devProjects('generic'))
		domain = ''; 
	$.cookie(cookieName,newPrefs,{path:'/', domain: domain, expires:7});
}

function setQuickSearchCookie(value) {
	$.cookie("quick_search_jb_loc",value,{path:'/'});
}

function getArrDifference(a1,a2) {
	var diffArr = new Array(), iteratingArr= new Array(), inIteratingArr = new Array();
	if (a1.length > a2.length) {
		iteratingArr = a1;
		inIteratingArr = a2;
	} else {
		iteratingArr = a2;
		inIteratingArr = a1;
	}
	$.each(iteratingArr, function(index,value) {
		(inIteratingArr.indexOf(value) == -1)?diffArr.push(value):null;
	});

	return diffArr;
}
/*
 * SimpleModal 1.1.1 - jQuery Plugin
 * http://www.ericmmartin.com/projects/simplemodal/
 * http://plugins.jquery.com/project/SimpleModal
 * http://code.google.com/p/simplemodal/ all Copyright (c) 2007 Eric Martin -
 * http://ericmmartin.com
 * 
 * Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt)
 * licenses.
 * 
 * Revision: $Id: jquery.simplemodal.js 93 2008-01-15 16:14:20Z emartin24 $
 */
var mStatus,url,urlCall,dataCall,data,callBack,errorCall,successMessage,closeBtn,closeModal=function(){return false;};var baytModal = new ajaxModal();

$("#globalMWCancel").live("click",function() { closeModal();});

function ajaxModal(){
	this.setModal = function (title, content, show_ok, onClose, longin_info) {
		if($("#globalMW").length == 0){
			DrawModalInMiddle('#modalpopup');
			call_ajax_function('http://js.b8cdn.com/scripts/'+uiFileName,'draggable', '$("#modalpopup").draggable({containment: "parent", handle: "h3#globalMWTitle"})');
			return false;
		} else {
			showOk = show_ok;
			if (onClose) {
				closeModal=onClose
			} else {
				closeModal = function () { $.modal.close(true);	}
			}
			(show_ok)?$("#globalMWOk").removeClass():$("#globalMWOk").addClass("hide");
			$("#globalMWTitle").html(title);
			$("#globalMWContent").html(content);
			if ( longin_info != null ) {
				$("#globalMWLonginInfo").show();
				$("#globalMWButtons").css("width","67%").removeClass("bttns").addClass("r");
				$("#globalMWLonginInfo").html(longin_info);
			} else {
				$("#globalMWLonginInfo").hide();
				$("#globalMWButtons").css("width","").removeClass("r").addClass("bttns");
			}
			if (showOk) {
				show_hide_loading(false);
				$("#globalMW").modal({close: (true), onClose: function () {closeModal();}});
			}
			DrawModalInMiddle('#modalpopup');
			call_ajax_function('http://js.b8cdn.com/scripts/'+uiFileName,'draggable', '$("#modalpopup").draggable({containment: "parent", handle: "h3#globalMWTitle"})');
		}
	};

	this.setDeleteModal = function (onClose) {
		if($("#globalMW").length == 0){
			return false;
		} else {
			showOk = true;
			if (onClose) {
				closeModal=onClose
			} else {
				closeModal = function () { $.modal.close(true);	}
			}
			$("#globalMWOk").removeClass();
			$("#globalMWTitle").html(delTitle);
			$("#globalMWContent").html(delBody);
			show_hide_loading(false);
			$("#globalMW").modal({close: (true)});
		}
		DrawModalInMiddle('#modalpopup');
		call_ajax_function('http://js.b8cdn.com/scripts/'+uiFileName,'draggable', '$("#modalpopup").draggable({containment: "parent", handle: "h3#globalMWTitle"})');
	};

	this.postData = function (urlCallVal,dataCallVal,callBackVal,errorCallVal,successMessageVal,mStatusVal,closeBtnText){
		urlCall=urlCallVal;
		dataCall=dataCallVal;
		callBack=callBackVal;
		errorCall=errorCallVal;

		closeBtn = (closeBtnText) ? closeBtnText : ''
		if ( mStatusVal == 0 )
			mStatus = mStatusVal;
		 else
			mStatus = 1;

		if (successMessageVal)
			successMessage=successMessageVal;
		else
			successMessage="" ;
		if(!showOk) {
			postDataCode ();
		}
	};
	this.getData = function (urlCallVal,dataCallVal,callBackVal,errorCallVal,successMessageVal,mStatusVal,closeBtnText){
		urlCall=urlCallVal;
		dataCall=dataCallVal;
		callBack=callBackVal;
		errorCall=errorCallVal;

		closeBtn = (closeBtnText) ? closeBtnText : ''
		if ( mStatusVal == 0 )
			mStatus = mStatusVal;
		 else
			mStatus = 1;

		if (successMessageVal)
			successMessage=successMessageVal;
		else
			successMessage="" ;
		if(!showOk) {
			getDataCode ();
		}
	};
}

function postDataCode() {
	(jQuery.isFunction(dataCall))?data = dataCall():data = dataCall;
	(jQuery.isFunction(urlCall))?url = urlCall():url = urlCall;
	$.baytMW(url,data,callBack,errorCall);
}
function getDataCode() {
	(jQuery.isFunction(dataCall))?data = dataCall():data = dataCall;
	(jQuery.isFunction(urlCall))?url = urlCall():url = urlCall;
	$.baytGetMW(url,data,callBack,errorCall);
}

function validateModal(form) {
	if (document.getElementById('id-role_functions')!= null) {
		if ((document.getElementById ('id-role_functions')).value == '' ) {
			document.getElementById('id-SelectRight').setAttribute('class', 'req');
		} else {
			document.getElementById('id-SelectRight').setAttribute('class', '');
		}
	}
	if(formValidator(form)) {
		$("#submit-alert-message").removeClass();
		$("#submit-alert-message").addClass("hide"); postDataCode();
	} else {
		$("#submit-alert-message").removeClass();
		$("#submit-alert-message").addClass("alert");
	}
	return false;
}

function show_hide_loading(show_p , element_id) {
	if ( typeof element_id != "undefined" && element_id != "" ) {
		if (show_p) {
			$(element_id).children().hide();
			$(element_id).append($("#div_loading_large").clone().removeClass("hide"));
		} else {
			$(element_id).children().hide();
		}
	} else {
		(show_p)?$("#modalloading").modal():$.modal.impl.close(true);
		DrawModalInMiddle('#modalpopup');
	}
}

jQuery.extend({
	bayt: function(url,data,callback,errorCallback,type) {
		if(jQuery.isFunction(data)) {
			callback=data; data={};
		}
		return jQuery.ajax({
			beforeSend: function(xhr){
				xhr.setRequestHeader("Accept","text/x-json");
				if (mStatus) {
					$.modal.close(true);
					show_hide_loading(true);
				}
			},
			timeout: 60000,
			type: "POST",
			url: url,
			data: data,
			success: callback,
			error: errorCallback,
			dataType: type
		});
	},

	baytMW: function(url,data,callback,errorCallBack,type) {
		return $.bayt( url,
			data,
			function (data,status){
				show_hide_loading(false);
				if(successMessage) {
					$('#globalMW').modal({close: (false)});
					$('#globalMWMessage').html(successMessage);
					if (closeBtn != '')
						$('#globalMWCancel').text(closeBtn);
					DrawModalInMiddle('#modalpopup');
				}
				if(jQuery.isFunction(callback)){callback(data,status);}
			},
			function(xhr,errorType){
				show_hide_loading(false);
				if ( errorType == "timeout" ) {
					/* Timeout Error */
					var responseText = ($('body').attr('id') == "ar") ? "<strong>خطأ:</strong> يوجد خطأ ما، آسفون لإزعاجكم" : "<strong>Error:</strong> Sorry an error occurred."
					$('#globalMW').modal({close: (true)});
					$('#globalMWError').html('<p class=\"alert\">'+responseText+'</p>');
					$('#globalMWOk').text(retryBtn);
					if(jQuery.isFunction(errorCallBack)){errorCallBack();}
					DrawModalInMiddle('#modalpopup');
					call_ajax_function('http://js.b8cdn.com/scripts/'+uiFileName,'draggable', '$("#modalpopup").draggable({containment: "parent", handle: "h3#globalMWTitle"})');
				} else if (errorType != "abort") {
					if(xhr.status == 401){
						(bccHasLoginModal)?loginPopupModal():window.location = loginURL;
					} else if( !isWhitespace(xhr.responseText) && xhr.responseText.length < 1024 ){
						$('#globalMW').modal({close: (true)});
						$('#globalMWError').html(xhr.responseText);
						$('#globalMWCancel').removeClass('aux').text($('#globalMWOk').text()).click(function(){$.modal.close()});
						$('#globalMWOk').remove();
						if(jQuery.isFunction(errorCallBack)){errorCallBack();}
						DrawModalInMiddle('#modalpopup');
						call_ajax_function('http://js.b8cdn.com/scripts/'+uiFileName,'draggable', '$("#modalpopup").draggable({containment: "parent", handle: "h3#globalMWTitle"})');
					}
				}
			},
			type
		);
	},
	baytPost: function(url,data,callback,errorCallBack,type) {
		mStatus=0;
		return $.bayt( url,
			data,
			function (data,status){
				if(jQuery.isFunction(callback)){callback(data,status);}
			},
			function(xhr,errorType){
				if(errorType != "timeout" && xhr.status == 401){
					(bccHasLoginModal)?loginPopupModal():window.location = channelLoginUrl;
				} else {
					if(jQuery.isFunction(errorCallBack)){errorCallBack(xhr,errorType);}
				}
			},
			type
		);
	},
	handleError: function( s, xhr, status, e ) {
	        // If a local callback was specified, fire it
            if ( s.error ) {
                    s.error.call( s.context || s, xhr, status, e );
            }
            // Fire the global callback
	        if ( s.global ) {
	                (s.context ? jQuery(s.context) : jQuery.event).trigger( "ajaxError", [xhr, s, e] );
	        }
	},
	curCSS: function( elem, name, force ) {
	                var ret, style = elem.style, filter;
	                var rexclude = /z-?index|font-?weight|opacity|zoom|line-?height/i,
				        ralpha = /alpha\([^)]*\)/,
				        ropacity = /opacity=([^)]*)/,
				        rfloat = /float/i,
				        rdashAlpha = /-([a-z])/ig,
				        rupper = /([A-Z])/g,
				        rnumpx = /^-?\d+(?:px)?$/i,
				        rnum = /^-?\d/,

				        cssShow = { position: "absolute", visibility: "hidden", display:"block" },
				        cssWidth = [ "Left", "Right" ],
				        cssHeight = [ "Top", "Bottom" ],

				        // cache check for defaultView.getComputedStyle
				        getComputedStyle = document.defaultView && document.defaultView.getComputedStyle,
				        // normalize float css property
				        styleFloat = jQuery.support.cssFloat ? "cssFloat" : "styleFloat",
				        fcamelCase = function( all, letter ) {
				                return letter.toUpperCase();
				        };


	                // IE uses filters for opacity
	                if ( !jQuery.support.opacity && name === "opacity" && elem.currentStyle ) {
	                        ret = ropacity.test(elem.currentStyle.filter || "") ?
	                                (parseFloat(RegExp.$1) / 100) + "" :
	                                "";

	                        return ret === "" ?
	                                "1" :
	                                ret;
	                }

	                // Make sure we're using the right name for getting the
					// float value
	                if ( rfloat.test( name ) ) {
	                        name = styleFloat;
	                }

	                if ( !force && style && style[ name ] ) {
	                        ret = style[ name ];

	                } else if ( getComputedStyle ) {

	                        // Only "float" is needed here
	                        if ( rfloat.test( name ) ) {
	                                name = "float";
	                        }

	                        name = name.replace( rupper, "-$1" ).toLowerCase();

	                        var defaultView = elem.ownerDocument.defaultView;

	                        if ( !defaultView ) {
	                                return null;
	                        }

	                        var computedStyle = defaultView.getComputedStyle( elem, null );

	                        if ( computedStyle ) {
	                                ret = computedStyle.getPropertyValue( name );
	                        }

	                        // We should always get a number back from opacity
	                        if ( name === "opacity" && ret === "" ) {
	                                ret = "1";
	                        }

	                } else if ( elem.currentStyle ) {
	                        var camelCase = name.replace(rdashAlpha, fcamelCase);

	                        ret = elem.currentStyle[ name ] || elem.currentStyle[ camelCase ];

	                        // From the awesome hack by Dean Edwards
	                        // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

	                        // If we're not dealing with a regular pixel number
	                        // but a number that has a weird ending, we need to
							// convert it to pixels
	                        if ( !rnumpx.test( ret ) && rnum.test( ret ) ) {
	                                // Remember the original values
	                                var left = style.left, rsLeft = elem.runtimeStyle.left;

	                                // Put in the new values to get a computed
									// value out
	                                elem.runtimeStyle.left = elem.currentStyle.left;
	                                style.left = camelCase === "fontSize" ? "1em" : (ret || 0);
	                                ret = style.pixelLeft + "px";

	                                // Revert the changed values
	                                style.left = left;
	                                elem.runtimeStyle.left = rsLeft;
	                        }
	                }

	                return ret;
	        }
});
jQuery.extend({
	baytGet: function(url,data,callback,errorCallback,type) {
		if(jQuery.isFunction(data)) {
			callback=data; data={};
		}
		return jQuery.ajax({
			beforeSend: function(xhr){
				xhr.setRequestHeader("Accept","text/x-json");
				if (mStatus) {
					$.modal.close(true);
					show_hide_loading(true);
				}
			},
			timeout: 60000,
			type: "GET",
			url: url,
			data: data,
			success: callback,
			error: errorCallback,
			dataType: type
		});
	},

	baytGetMW: function(url,data,callback,errorCallBack,type) {
		return $.baytGet(	url,
			data,
			function (data,status){
				show_hide_loading(false);
				if(successMessage) {
					$('#globalMW').modal({close: (false)});
					$('#globalMWMessage').html(successMessage);
					if (closeBtn != '')
						$('#globalMWCancel').text(closeBtn);
				}
				if(jQuery.isFunction(callback)){callback(data,status);}
			},
			function(xhr,errorType){
				show_hide_loading(false);
				if ( errorType == "timeout" ) {
					/* Timeout Error */
					var responseText = ($('body').attr('id') == "ar") ? "<strong>خطأ:</strong> يوجد خطأ ما، آسفون لإزعاجكم" : "<strong>Error:</strong> Sorry an error occurred."
					$('#globalMW').modal({close: (true)});
					$('#globalMWError').html('<p class=\"alert\">'+responseText+'</p>');
					$('#globalMWOk').text(retryBtn);
					if(jQuery.isFunction(errorCallBack)){errorCallBack();}
				} else if (errorType != "abort") {
					if( xhr.status == 401){
						(bccHasLoginModal)?loginPopupModal():window.location = loginURL;
					} else if ( !isWhitespace(xhr.responseText) && xhr.responseText.length < 1024 ) {
						$('#globalMW').modal({close: (true)});
						$('#globalMWError').html(xhr.responseText);
						$('#globalMWOk').text(retryBtn);
						if(jQuery.isFunction(errorCallBack)){errorCallBack();}
					}
				}
			},
			type
		);
	}
});
jQuery.fn.extend({
	scrollTo : function(speed, easing,callback) {
		return this.each(function() {
			$('html,body').animate({scrollTop: $(this).offset().top}, speed, easing, callback);
		});
	},
	delay :function(time,func) {
		return this.each(function(){
			setTimeout(func,time);
		});
	}
});

var body_loaded_p = true;
if($.browser.msie&&($.browser.version<8)){body_loaded_p=false;jQuery('body').ready(function(){body_loaded_p=true});}

(function($){$.modal=function(data,options){return $.modal.impl.init(data,options);};$.modal.close=function(){$.modal.impl.close(true);};$.fn.modal=function(options){return $.modal.impl.init(this,options);};$.modal.defaults={overlay:75,overlayId:'modaloverlay',overlayCss:{},containerId:'modalpopup',containerCss:{},close:false,closeTitle:'Close',closeClass:'modalClose',persist:false,onOpen:null,onShow:null,onClose:null};$.modal.impl={opts:null,dialog:{},init:function(data,options){if(body_loaded_p==true){if(this.dialog.data){return false;}this.opts=$.extend({},$.modal.defaults,options);if(typeof data=='object'){data=data instanceof jQuery?data:$(data);if(data.parent().parent().size()>0){this.dialog.parentNode=data.parent();if(!this.opts.persist){this.dialog.original=data.clone(true);}}}else if(typeof data=='string'||typeof data=='number'){data=$('<div>').html(data);}else{if(console){console.log('SimpleModal Error: Unsupported data type: '+typeof data);}return false;}this.dialog.data=data.addClass('modalData');data=null;this.create();this.open();if($.isFunction(this.opts.onShow)){this.opts.onShow.apply(this,[this.dialog]);}return this; } else {return this;} },create:function(){this.dialog.overlay=$('<div>').attr('id',this.opts.overlayId).addClass('modaloverlay').css($.extend(this.opts.overlayCss,{opacity:this.opts.overlay/100,height:'100%',width:'100%',position:'fixed',left:0,top:0,zIndex:3000})).hide().appendTo('body');this.dialog.container=$('<div>').attr('id',this.opts.containerId).addClass('modalpopup').css($.extend(this.opts.containerCss,{position:'absolute',zIndex:3100})).append(this.opts.close?'<a class="modalcloseimg '+this.opts.closeClass
+'" title="'+this.opts.closeTitle+'"></a>':'').hide().appendTo('body');if($.browser.msie&&($.browser.version<7)){this.fixIE();}this.dialog.container.append(this.dialog.data.hide());},bindEvents:function(){var modal=this;$('.'+this.opts.closeClass).click(function(e){e.preventDefault();modal.close();});},unbindEvents:function(){$('.'+this.opts.closeClass).unbind('click');},fixIE:function(){var wHeight=$(document.body).height()+'px';var wWidth=$(document.body).width()+'px';this.dialog.overlay.css({position:'absolute',height:wHeight,width:wWidth});this.dialog.container.css({position:'absolute'});this.dialog.iframe=$('<iframe src="javascript:false;">').css($.extend(this.opts.iframeCss,{opacity:0,position:'absolute',height:wHeight,width:wWidth,zIndex:1000,width:'100%',top:0,left:0})).hide().appendTo('body');},open:function(){if(this.dialog.iframe){this.dialog.iframe.show();}if($.isFunction(this.opts.onOpen)){this.opts.onOpen.apply(this,[this.dialog]);}else{this.dialog.overlay.show();this.dialog.container.show();this.dialog.data.show();}this.bindEvents();},close:function(external){if(!this.dialog.data){return false;}if($.isFunction(this.opts.onClose)&&!external){this.opts.onClose.apply(this,[this.dialog]);}else{if(this.dialog.parentNode){if(this.opts.persist){this.dialog.data.hide().appendTo(this.dialog.parentNode);}else{this.dialog.data.remove();this.dialog.original.appendTo(this.dialog.parentNode);}}else{this.dialog.data.remove();}this.dialog.container.remove();this.dialog.overlay.remove();if(this.dialog.iframe){this.dialog.iframe.remove();}this.dialog={};}this.unbindEvents();}};})(jQuery);

function modalWx(element){
	$(element).modal();
	DrawModalInMiddle('#modalpopup');
	call_ajax_function('http://js.b8cdn.com/scripts/'+uiFileName,'draggable', '$("#modalpopup").draggable({containment: "parent", handle: "h3#globalMWTitle"})');
}

/*
 * Close the pop up modal when user press 'Esc' on keyboard
 */
$(document).keydown(function(e){if(e == null){/* IE */keycode = event.keyCode;}else{/* mozilla */keycode = e.which;}if(keycode == 27){/* close */closeModal();}});

/*
 * Multiple Select
 */

function addSelect( fieldName ,max ,otherFieldName){
	var numOfSelect = 1;
	var newElementId = 1;
	for ( var i = max ; i > 0 ; i-- )
		$('#id-'+fieldName+'_'+i).html()==null?newElementId=i:numOfSelect++;
	if ( max >= numOfSelect ) {
		BuildSelect( $('#id-'+fieldName+'_1').html() , fieldName , max , newElementId, otherFieldName,numOfSelect);
	} else {
		$('#add-'+fieldName+'-select').hide();
	}
	// CLEAR THE SELECTED VALUE
	if( otherFieldName != null ) {
		// FIREFOX
		$("#id-"+otherFieldName+"_"+newElementId+" option:selected")[0].defaultSelected = false;
		// IE
		$("#id-"+otherFieldName+"_"+newElementId).val("");
	}
	// FIREFOX
	$("#id-"+fieldName+"_"+newElementId+" option:selected")[0].defaultSelected = false;
	// IE
	$("#id-"+fieldName+"_"+newElementId).val("");
}

function addSelectAC( fieldName ,max ,otherFieldName){
	var numOfSelect = 1;
	var newElementId = 1;
	for ( var i = max ; i > 0 ; i-- )
		$('#id-'+fieldName+'_'+i).html()==null?newElementId=i:numOfSelect++;
	if ( max >= numOfSelect ) {
		BuildSelectAC( $('#id-'+fieldName+'_1_ac').html() , fieldName , max , newElementId, otherFieldName,numOfSelect);
	} else {
		$('#add-'+fieldName+'-select').hide();
	}
	// CLEAR THE SELECTED VALUE
	if( otherFieldName != null ) {
		$("#id-"+otherFieldName+"_"+newElementId).val("");
	}
	$("#id-"+fieldName+"_"+newElementId).val("");
}

function removeSelect( fieldName , i , max, otherFieldName) {
	var className = ($('#id-'+fieldName+'_'+i).attr("className") != undefined) ? $('#id-'+fieldName+'_'+i).attr("className") :"";
	if ( className !=null ) {
		if(otherFieldName!=null) {
			$('#'+fieldName+'_'+i).remove();
		} else {
			$('#id-'+fieldName+'_'+i).remove();
			$('#rem-'+fieldName+'_'+i+'-select').remove();
		}
	}
	var numOfSelect = 1;
	while ( $('#id-'+fieldName+'_'+numOfSelect).html() != null ) {numOfSelect++;}
	if (max>=numOfSelect) {$('#add-'+fieldName+'-select').show();}
	getMultiValues (fieldName ,max , otherFieldName)
}

function removeSelectAC( fieldName , i , max, otherFieldName) {
	var className = ($('#id-'+fieldName+'_'+i).attr("className") != undefined) ? $('#id-'+fieldName+'_'+i).attr("className") :"";
	if ( className !=null ) {
		if(otherFieldName!=null) {
			$('#'+fieldName+'_'+i).remove();
			$('#'+fieldName+'_'+i+'_ac').remove();
			$('#err-'+fieldName+'_'+i+'_ac').remove();
		} else {
			$('#id-'+fieldName+'_'+i+'_ac').remove();
			$('#id-'+fieldName+'_'+i).remove();
			$('#err-'+fieldName+'_'+i+'_ac').remove();
			$('#rem-'+fieldName+'_'+i+'-select').remove();
		}
	}
	var numOfSelect = 1;
	while ( $('#id-'+fieldName+'_'+numOfSelect).html() != null ) {numOfSelect++;}
	if (max>=numOfSelect) {$('#add-'+fieldName+'-select').show();}
	getMultiValues (fieldName ,max , otherFieldName)
}

function getMultiValues (fieldName ,max , otherFieldName) {
	var values = "";
	for ( var i = 1 ; i <= max ; i++ ) {
		if ( $('#id-'+fieldName+'_'+i).val() != '' && $('#id-'+fieldName+'_'+i).html() != null ) {
			if (otherFieldName!=null) {
				var otherFieldValue = 0;
				if ($('#id-'+otherFieldName+'_'+i).val() != '' && $('#id-'+otherFieldName+'_'+i).html() != null) {
					otherFieldValue = $('#id-'+otherFieldName+'_'+i).val();
				}
				values = values + $('#id-'+fieldName+'_'+i).val() + "," + otherFieldValue + " ";
			} else {
				values = values + $('#id-'+fieldName+'_'+i).val() + " ";
			}
		}
	}
	$("input[name="+fieldName+"]").val($.trim(values));
}

function BuildSelect( inhtml , fieldName , max , numOfSelect, otherFieldName, numOfElement)
{
	var newSelectCoded = '<select onchange="javascript:getMultiValues(\''+fieldName+'\', \''+max+'\');" id="id-'+fieldName+'_'+numOfSelect+'" name="'+fieldName+'_'+numOfSelect+'">'+inhtml+'</select>';
	var removeLink = ' <a id="rem-'+fieldName+'_'+numOfSelect+'-select" class="" href = "javascript:removeSelect(\''+fieldName+'\',\''+numOfSelect+'\',\''+max+'\');" ><img src="/images/icons/blt-close.gif" alt="x" /></a>';
	if(otherFieldName!=null) {
		var otherInhtml = $('#id-'+otherFieldName+'_1').html();
		newSelectCoded = '<span id="'+fieldName+'_'+numOfSelect+'" style="display:block;"><select onchange="javascript:getMultiValues(\''+fieldName+'\', \''+max+'\',\''+otherFieldName+'\');" class="w1" id="id-'+fieldName+'_'+numOfSelect+'" name="'+fieldName+'_'+numOfSelect+'">'+inhtml+'</select>';
		newSelectCoded = newSelectCoded + ' <select onchange="javascript:getMultiValues(\''+fieldName+'\', \''+max+'\',\''+otherFieldName+'\');"class="w1" id="id-'+otherFieldName+'_'+numOfSelect+'" name="'+otherFieldName+'_'+numOfSelect+'">'+otherInhtml+'</select>';
		removeLink = ' <a id="rem-'+fieldName+'_'+numOfSelect+'-select" class="" href = "javascript:removeSelect(\''+fieldName+'\',\''+numOfSelect+'\',\''+max+'\',\''+otherFieldName+'\');" ><img src="/images/icons/blt-close.gif" alt="x" /></a></span>';
	}

	$('#multi-'+fieldName+'-select').before(newSelectCoded+removeLink);
	$("select[name="+fieldName+"_"+numOfSelect+"] option[value='']").attr("selected","selected");
	$("select[name="+otherFieldName+"_"+numOfSelect+"] option[value='']").attr("selected","selected");
	if ( max <= numOfElement ) {
		$('#add-'+fieldName+'-select').hide();
	}
}

function BuildSelectAC( inhtml , fieldName , max , numOfSelect, otherFieldName, numOfElement)
{	var lang = $(document.body).attr('id');
	var newSelectCoded = '<input type="text" name="'+fieldName+'_'+numOfSelect+'_ac" id="id-'+fieldName+'_'+numOfSelect+'_ac" onblur="javascript:getMultiValues(\''+fieldName+'\', \''+max+'\');" >'+inhtml+'</input> \
	<input type="hidden" name="'+fieldName+'_'+numOfSelect+'" id="id-'+fieldName+'_'+numOfSelect+'" value="" /> \
	<script>\
		selectAutocomplete("id-'+fieldName+'_'+numOfSelect+'_ac",ac_options_values_'+fieldName+'_1,ac_json_list_'+fieldName+'_1,"id-'+fieldName+'_'+numOfSelect+'");\
	</script>'
	var removeLink = ' <a id="rem-'+fieldName+'_'+numOfSelect+'-select" class="" href = "javascript:removeSelectAC(\''+fieldName+'\',\''+numOfSelect+'\',\''+max+'\');" ><img src="/images/icons/blt-close.gif" alt="x" /></a>';
	$("#id-"+fieldName+"_"+numOfSelect+"_ac").live("keydown input change", function(){
		if (lang == "ar" || lang == undefined || lang == "") {
			var x = $(this).val().replace("أ","ا").replace("آ","ا").replace("إ","ا").replace("ﻷ","ﻻ").replace("ﻵ","ﻻ").replace("ﻹ","ﻻ");
			if (x != $(this).val())
				$(this).val(x);
		}
		getMultiValues(fieldName, max);
	});
	$('#multi-'+fieldName+'-select').before(newSelectCoded+removeLink);
	if ( max <= numOfElement ) {
		$('#add-'+fieldName+'-select').hide();
	}
}

function clearMultiSelect( fieldName , max, otherFieldName )
{
	var form_element = $('*[name='+fieldName+']');
	var selected_values = $(form_element).val().split(" ")
	for (i=2 ; i<= max ; i++) {
		removeSelect( fieldName , i ,max, otherFieldName);
	}
	$("#id-"+fieldName+"_1 option:selected")[0].defaultSelected = false;
	$("#id-"+fieldName+"_1").val("");
	if( otherFieldName != null ) {
		// CLEAR THE SELECTED VALUE
		// FIREFOX
		$("#id-"+otherFieldName+"_1 option:selected")[0].defaultSelected = false;
		// IE
		$("#id-"+otherFieldName+"_1").val("");
	}
	form_element.val("");
}

(function($)
{
/*
 * This function accepts the iso value passed by the element where this function
 * was used. USAGE: OPTIONAL values: lst_cities_container: city dropdown
 * container opt_cities: city dropdown element id selected_city: selected city
 * for a country
 * $(element).get_cities_per_country({"lst_cities_container":"#div_job_company_city",
 * "opt_cities":"#id-job_company_city",
 * "selected_city":obj.job_country_iso_city}).focus(); After calling
 * get_cities_per_country, attached a valid event for this 'SELECT' element.
 * Afterwhich, all the bind controls can be executable on this element.
 * 
 * 
 */
	$.fn.get_cities_per_country = function(options) {
		return this.each(function(){
			$(this).unbind('focus').bind('focus', function(e){
				$(this).display_city_option({'iso':$(this).val(), 'options':options});
			});
			$(this).unbind('change').bind('change', function(e){
				$(this).unbind('focus');
				options.selected_city ='';
				$(this).display_city_option({'iso':$(this).val(), 'options':options});
			});
		})
	};
	/*
	 * Display the cities if present and toggles the city list container to
	 * diplay the options
	 */
	$.fn.display_city_option =  function(o) {
		/* allow to extend or add new object defaults */
		var opts = $.extend(jQuery.fn.get_cities_per_country.defaults, o.options);
		var c_iso = o.iso
		if (c_iso != "") {
			$.getJSON(opts.url_iso_cty,{byt_reg_stage:25,country_iso:c_iso}, function(json){
				var sel_opts = '';
				if ( json.length > 0 ) {
					sel_opts += '<option value="" selected="selected">- Select one -</option>';
					for (var i = 0; i < json.length; i++) {
						sel_opts += '<option value="' + json[i].optionValue + '">' + json[i].optionDisplay + '</option>';
					}
					sel_opts += '<option value="'+ c_iso + ',0,0">Other</option>';
					$(opts.opt_cities).html(sel_opts);
					$(opts.opt_cities + ' option[value=' + opts.selected_city+']').attr('selected','selected');
					$(this).toggle_city_option(1);
				} else {
					$(opts.opt_cities).html(sel_opts);
					$(this).toggle_city_option(0);
				}
			});
		} else {
			$(this).toggle_city_option(0);
			$(opts.opt_cities).html("");
		}
	}
	/* Toggles the city list container */
	$.fn.toggle_city_option = function(flag) {
		var opts = $(this).get_cities_per_country.defaults;
		if (opts.lst_cities_container != undefined && opts.opt_cities != undefined) {
			if (flag) {
				$(opts.lst_cities_container).attr('className','req');
				$(opts.opt_cities).attr('className','req');
				$(opts.lst_cities_container).show();
			} else {
				$(opts.lst_cities_container).hide();
				$(opts.opt_cities).removeClass();
			}
		}
	}
	/* default values */
	$.fn.get_cities_per_country.defaults = {url_iso_cty: '/app/control/byt_reg_manager.tcl',additional_params: ''};
})(jQuery);

function clearText(element, className, text){
	if (typeof(text) == 'undefined') {
		var text = $(element)[0].defaultValue;
	}
	if ($(element).val() == text) {
		$(element).removeClass(className);
		$(element).val("");
	}
}

function returnText(element, className, text){
	if (typeof(text) == 'undefined') {
		var text = element.defaultValue;
	}
	if ( $(element).val() == "" ) {
		$(element).val(text);
		$(element).addClass(className);
	}
}
function removeHtmlTags(string){
	return string.replace(/(<([^>]*)>)/ig,"");
}
function DrawModalInMiddle(element){
	var getElementWidth = $(element).width();
	var getElementHeight = $(element).height();
	var getScreenWidth = document.documentElement.clientWidth;
	var getScreenHeight = document.documentElement.clientHeight;

	var leftDistance = Math.floor((getScreenWidth - getElementWidth)/2) + $(document).scrollLeft();
	if($.browser.msie && ($.browser.version<=8)) {
		var topDistance = Math.floor((getScreenHeight - getElementHeight)/2) + $("html").scrollTop();
	} else {
		var topDistance = Math.floor((getScreenHeight - getElementHeight)/2) + $(document).scrollTop();
	}
	if(getElementHeight > getScreenHeight){
		topDistance += 50;
	}
	$(element).css({left:leftDistance,top:topDistance});
}

function call_ajax_function(filePath, fnName, fnCall) {
	if ($.fn[fnName] != undefined || typeof fnName == 'function' ) {
		eval(fnCall);
	} else {
		$.getScript( filePath, function() {
			eval(fnCall);
		});
	}
}
// //////////////////////////////////////////////////////////////////////////////////////////
/*
 * jQuery plugin: fieldSelection - v0.1.0 - last change: 2006-12-16 (c) 2006
 * Alex Brem <alex@0xab.cd> - http://blog.0xab.cd
 */

(function() {

	var fieldSelection = {

		getSelection: function() {

			var e = this.jquery ? this[0] : this;

			return (

				/* mozilla / dom 3.0 */
				('selectionStart' in e && function() {
					var l = e.selectionEnd - e.selectionStart;
					return { start: e.selectionStart, end: e.selectionEnd, length: l, text: e.value.substr(e.selectionStart, l) };
				}) ||

				/* exploder */
				(document.selection && function() {

					e.focus();

					var r = document.selection.createRange();
					if (r == null) {
						return { start: 0, end: e.value.length, length: 0 }
					}

					var re = e.createTextRange();
					var rc = re.duplicate();
					re.moveToBookmark(r.getBookmark());
					rc.setEndPoint('EndToStart', re);

					return { start: rc.text.length, end: rc.text.length + r.text.length, length: r.text.length, text: r.text };
				}) ||

				/* browser not supported */
				function() {
					return { start: 0, end: e.value.length, length: 0 };
				}

			)();

		},

		replaceSelection: function() {

			var e = this.jquery ? this[0] : this;
			var text = arguments[0] || '';
			var Selection = arguments[1] || '';
			return (

				/* explorer */
				(document.selection && function() {
					e.focus();
					document.selection.createRange().text = text;
					return this;
				}) ||

				/* mozilla / dom 3.0 */
				('selectionStart' in e && function() {
				var start =e.selectionStart;
				var end = e.selectionEnd
					e.value = e.value.substr(0, start) + text + e.value.substr(end, e.value.length);
					if(Selection=="keepSelected") {
						e.selectionStart=start;
						e.selectionEnd=start+text.length;
					}
					else {
						e.selectionStart=start+text.length;
						e.selectionEnd=e.selectionStart;
					}
					e.focus();
					return this;
				}) ||

				/* browser not supported */
				function() {
					e.value += text;
					return this;
				}

			)();

		}

	};

	jQuery.each(fieldSelection, function(i) { jQuery.fn[i] = this; });

})();

// //////////////////////////////////////////////////////////////////////////////////////////

function richTextFormatter(objectName,formatType) {
	var editObj =  $('textarea[name='+objectName+']');
	var selectedTxt = editObj.getSelection().text;
	if(selectedTxt.length==0) return false;
	if (selectedTxt.search(/<.*>/gi) != -1 && selectedTxt.search(/<(b|i|u)>(.|\n)*<\/\1>/gi) ==-1)
		return false;

	switch (formatType) {
		case 'bold': {
			tagName = 'b';
			break;
		}
		case 'italic': {
			tagName = 'i';
			break;
		}
		case 'underline': {
			tagName = 'u';
			break;
		}
	}
	var startTag = '<'+tagName+'>';
	var endTag = '</'+tagName+'>';
	if(selectedTxt.substr(0,3)==startTag&&selectedTxt.substr(selectedTxt.length-4)==endTag) {
		// UNDO FORMAT
		var length = selectedTxt.length
		editObj.replaceSelection(selectedTxt.substr(3,length-7),'keepSelected');
	} else {
		editObj.replaceSelection(startTag + selectedTxt + endTag , 'keepSelected');
	}
	// TO FORCE TEXT COUNTER TO BE CALLED
	editObj.keyup();
}
function richTextToggler(mode,objectName) {
	var obj=$('textarea#id-'+objectName)
	if(mode=='prev') {
		var html =obj.val()
		html=html.replace(/<(?!(\/)?(i|b|u))[^>]*>/gi,'');
		obj.val(html)
		$('#span-id-'+objectName).height(obj.height());
		$('#span-id-'+objectName).html(html.replace(/\n/gi,'<br>'));

	}
	multiToggle(objectName+'-external',objectName+'_container');
}

function countedEntity(countArr,text,lang) {
	if(typeof countArr == "number") countArr=[countArr];
	var returnText = "";
	var textArr=text.split("%%");
	for(var i=0;i<textArr.length;i++){
		if(i%2==0){
			returnText+=textArr[i];
		}else{
			var count=countArr[(i-1)/2];
			var countedText=textArr[i].split(";;");
			var currentText="";
			switch(lang){
			case "ar":
				if(count==1){
					currentText=countedText[0];
				} else if(count==2){
					currentText=countedText[1];
				} else if(count>2 && count<11) {
					currentText=countedText[2];
				} else if(count%100!=0) {
					currentText=countedText[3];
				} else {
					currentText=countedText[4];
				}
				if(typeof currentText=="undefined"||currentText=="") {
					currentText=count+" "+countedText[0];
				}else if(count>2||count==0){
					currentText=count+" "+currentText;
				}
				break;
			case "fr":
				if(count>1){
					currentText=countedText[1];
				} else {
					currentText=countedText[0];
				}
				currentText=count+" "+currentText;
				break;
			default:
				if(count>1){
					currentText=countedText[1];
				} else {
					currentText=countedText[0];
				}
				currentText=count+" "+currentText;
				break;
			}
			returnText+=currentText;
		}
	}
	return returnText;
}

// /////////////////////////////////////////////////////////
// /// TOOLTIP SCRIPT //////////////////////////////////////
$(".tooltip_element").live("focus",function(){
	show_hide_tooltip(1,$(this));
}).live("blur",function(){
	var has_link = $(".tooltip_active").find("a");
	if (has_link.length) {
		if (!has_link.is(':hover')) {
			show_hide_tooltip(0,$(this));
		} else {
			has_link.click(function(){
				show_hide_tooltip(0,$(this));
			});
		}
	} else {
		show_hide_tooltip(0,$(this));
	}
}).live("change", function(){
	show_hide_tooltip(0,$(this));
});
$(".tooltip_element_hover").live("mouseenter",function(){
	show_hide_tooltip(1,$(this));
}).live("mouseleave",function(){
	show_hide_tooltip(0,$(this));
});

function show_hide_tooltip(show_p,element) {
	if (show_p) {
		$(".tooltip_active").remove();
		var lang = $(document.body).attr('id');
		$("body").append(element.next(".tooltip").clone().addClass("tooltip_active"));
		var input_height=element.height();
		$(".tooltip_active").attr("style","display:inline !important;"+$(".tooltip_active").attr("style"));
		var padding_top=parseInt(element.css("padding-top"));
		var box_height=$(".tooltip_active").height();
		var box_widtht=$(".tooltip_active").width();
		var top=element.offset().top+input_height/2-box_height/2;
		reverse=0;
		if (element.next().hasClass("reverse_tooltip")) {
			reverse=1;
		}
		switch (lang) {
			case "en" :
		}
		if ((lang=="en" && reverse==1) || (lang=="fr" && reverse==1) || (lang=="ar" && reverse==0)) {
			$(".tooltip_pointer").css("background-image","url(/images/icons/pointer_ar.gif)");
			$(".tooltip_pointer").css("right","1px");
			var element_padding=parseInt(element.css("padding-left"));
			var left=element.offset().left-box_widtht-8-element_padding;
		} else {
			$(".tooltip_pointer").css("left","1px");
			$(".tooltip_pointer").css("background-image","url(/images/icons/pointer_en.gif)");
			var element_padding=parseInt(element.css("padding-right"));
			var left=element.offset().left+element.width()+8+element_padding;
		}
		top = top + padding_top;
		$(".tooltip_pointer").css("top",(box_height/2 - 9)+"px");
		$(".tooltip_active").css({"top":top+"px","left":left+"px",opacity:"0"});
		$(".tooltip_active").animate({opacity:"1"});
	} else {
		$(".tooltip_active").remove();
	}
}

$.fn.highlight = function(highlightColor, fadein_duration, fadeout_duration, disable_fadein) {
    var highlightBg = highlightColor || "#FBC33E";
    var fadein_time = fadein_duration || 700;
    var fadeout_time = fadeout_duration || 400;
    var originalBg = this.css("backgroundColor");
    $(this).fadeOut(fadeout_time,function(){
		$(this).css({ backgroundColor:highlightColor });
    });
    if (!disable_fadein) {
    	$(this).fadeIn(fadein_time,function(){
			$(this).css({ backgroundColor:originalBg });
	    });
    }
};

// mainly to handle byt_form_list_box scripts
function moveListBoxes(leftSelector,rightSelector,direction,elementNameSelector) {
	var selectFrom = direction == "right" ? leftSelector : rightSelector;
	var moveTo = direction == "right" ? rightSelector : leftSelector;
	var selectedItems = $(selectFrom + " :selected").toArray();
	$(moveTo).append(selectedItems).val("");
	selectedItems.remove;
	var newVal=[];
	$(rightSelector+" option").each(function(ind,val){
		newVal.push(val.value)
	});
	$(elementNameSelector).val(newVal.join(" "));
}
// escape any RegExp
function escapeRegExp(str) {
	return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\&\#\|\;\']/g, "\\$&");
}
// /// Added by IZATARY@BAYT.NET ////
// /////////////// Fixed Position Element ////
function fixed_element_top(element_fixed) {
	block_width = $(element_fixed).width();
	$(window).scroll(function() {
		var doc_scrollTop = ($("body,html,document").scrollTop() > 0) ? $("body,html,document").scrollTop() : $(document).scrollTop();
		if( doc_scrollTop > $(element_fixed).parent("div").offset().top ) {
			$(element_fixed).addClass('fixed_element_position').width(block_width);
		} else {
			$(element_fixed).removeClass('fixed_element_position');
		}
	});
}
// /////////////////////////////////////////////////////////
// // Preepaer Loading Image on button
$(document).ready(function(){
	$("button.loading_prepare").live("click", function(){
		$("button.loading_prepare .legend-box").show();
	}).ajaxStop(function(){
		$("button.loading_prepare .legend-box").hide();
	});
	if ($(".block_fixed").length > 0) {
		fixed_element_top(".block_fixed");
	}
	$(".flat_tabs a").on("click",function() {
		if($(this).parent().hasClass("more_options")) {
			var more_option = $(this).parent().find(".sub_more_options");
			if(more_option.is(":visible")){
				more_option.hide();
			} else {
				more_option.show();
			}
			return false;
		}
		$(".flat_tabs_box").hide();
		$(".flat_tabs li").removeClass("on");
		$(this).parent().addClass("on");
		var activeTab = $(this).attr("href");
		$(activeTab).show();
		if($(this).parents(".sub_more_options").length>0){
			var more_options = $(this).parents(".more_options");
			$(this).parents(".sub_more_options").hide();
			more_options.prev().prependTo(".sub_more_options");
			more_options.last().before($(".sub_more_options .on"));
		}
		
	 	return false;
	});
	
	// Accordion Tabs
	$(".accordion_head").click(function() {
		if ( $(this).hasClass("on") ) {
			$(this).removeClass("on");
			$(this).next(".accordion_body").slideToggle();
			$(this).find("i.i_16").removeClass("i_arrow_gray").addClass("i_arrow2_gray");
		} else {
			$(".accordion_head").removeClass("on");
			$(".accordion_head").find("i.i_16").removeClass("i_arrow_gray").addClass("i_arrow2_gray");
			$(".accordion_body").slideUp();
			$(this).addClass("on");
			$(this).next(".accordion_body").slideToggle();
			$(this).find("i.i_16").removeClass("i_arrow2_gray").addClass("i_arrow_gray");
		}
	});
	// RATING
	$(".rating i").on("click", function() {
		//$(this).addClass("active").prevAll(".rating i").addClass("active");
	});
	$(".rating i").hover(
		function() {
			$(this).css("color","#FFD100").prevAll(".rating i").css("color","#FFD100");
		},
		function() {
			$(this).attr("style","").prevAll(".rating i").attr("style","");
		}
	);
	// Tooltips Down
	$('.tooltip_down[title], .tooltip_right[title], .tooltip_up[title], .tooltip_left[title]').each(function(){
		var $this = $(this);
		$this.data('tooltip',$this.attr('title'));
		$this.removeAttr('title');
	});
	$(document).on("mouseover", ".tooltip_down, .tooltip_right, .tooltip_up, .tooltip_left", function(e) {
		var tooltip_text = $(this).data("tooltip");
		if (tooltip_text && tooltip_text != ""){
			if($(this).hasClass("tooltip_down")) {
				var tooltip_text_tag = $("<span class='tooltip_down_text hide'>"+tooltip_text+"</span>").appendTo("body");
				var tooltip_text_half_width = tooltip_text_tag.outerWidth()/2;
				var tooltip_text_top = $(this).offset().top+$(this).outerHeight()+5;
				var tooltip_text_left = $(this).offset().left-tooltip_text_half_width+($(this).outerWidth()/2);
			} else if($(this).hasClass("tooltip_up")) {
				var tooltip_text_tag = $("<span class='tooltip_up_text hide'>"+tooltip_text+"</span>").appendTo("body");
				var tooltip_text_half_width = tooltip_text_tag.outerWidth()/2;
				var tooltip_text_top = $(this).offset().top-tooltip_text_tag.outerHeight()-5;
				var tooltip_text_left = $(this).offset().left-tooltip_text_half_width+($(this).outerWidth()/2);
			} else if($(this).hasClass("tooltip_right")) {
				var tooltip_text_tag = $("<span class='tooltip_right_text hide'>"+tooltip_text+"</span>").appendTo("body");
				var tooltip_text_half_height = tooltip_text_tag.outerHeight()/2;
				var tooltip_text_top = ($(this).offset().top+$(this).outerHeight()/2)-tooltip_text_half_height;
				var tooltip_text_left = $(this).offset().left+($(this).outerWidth()+5);
			} else if($(this).hasClass("tooltip_left")) {
				var tooltip_text_tag = $("<span class='tooltip_left_text hide'>"+tooltip_text+"</span>").appendTo("body");
				var tooltip_text_half_height = tooltip_text_tag.outerHeight()/2;
				var tooltip_text_top = ($(this).offset().top+$(this).outerHeight()/2)-tooltip_text_half_height;
				var tooltip_text_left = $(this).offset().left-(tooltip_text_tag.outerWidth()+5);
			}
			tooltip_text_tag.css({"top": tooltip_text_top, "left": tooltip_text_left, "position": "absolute"}).show();
		}
	});
	$(document).on("mouseleave", ".tooltip_down, .tooltip_right, .tooltip_up, .tooltip_left", function(e) {
		$(".tooltip_down_text, .tooltip_right_text, .tooltip_up_text, .tooltip_left_text").remove();
	});
	// ///////////////////// apply color for font icon element from data-color
	// attribute
	if ($("[class^='i-'], [class*=' i-']").length) {
		$("[class^='i-'], [class*=' i-']").each(function(i){
			if($(this).data(color)) {
				var color = $(this).data("color")
				$(this).css("color",color);
			}
			if($(this).data(size)) {
				var size = $(this).data("size")
				$(this).css("font-size",size);
			}
		});
	}
	// Menu Actions
	$(".submenu-right").hover(
		function(){
			var menu_width = $(".sub-menu").width();
			$(this).find(".submenu-right-list").css({
				"left":menu_width
			}).show();
		},
		function(){
			$(this).find(".submenu-right-list").hide();
		}
	);
	
	// Tooltip with html
	$(".tooltip_html").hover(
		 function() {
			var tooltip_contents = $(this).next().html();
			if (tooltip_contents && tooltip_contents != "" && $(".tooltip_html_element").length <= 0 ) {
				var tooltip_html_element = $("<div class='tooltip_html_element hide'>"+tooltip_contents+"</div>").appendTo("body");
				var tooltip_text_half_width = tooltip_html_element.outerWidth()/2;
				var tooltip_text_top = $(this).offset().top+$(this).outerHeight()+9;
				var tooltip_text_left = $(this).offset().left-tooltip_text_half_width+($(this).outerWidth()/2);
				tooltip_html_element.css({"top": tooltip_text_top, "left": tooltip_text_left, "position": "absolute"}).removeClass("hide");
			}
			$(document).on("mouseleave", ".tooltip_html_element", function(e) {
				$(".tooltip_html_element").remove();
			});
		 }
	);
	
	/******************** Expand - Collapse ****************/
	$(document).on("click", ".item_col_exp .expand_block", function(e) { 
		var block_collapsed = $(this).parents(".item_col_exp").find(".block_collapsed");
		if($(this).find(".i-expand").hasClass("i-collapse")){
			$(this).find(".i-expand").removeClass("i-collapse");
			block_collapsed.slideUp();
		} else {
			$(this).find(".i-expand").addClass("i-collapse");
			block_collapsed.slideDown();
		}
		if($(this).find(".i-expand").hasClass("ajax")) {
			eval($(this).find(".i-expand").data("type"));
		}
	});
	$(document).on("click", "body", function(e) {
		e.stopPropagation();
		$(".sub_more_options").hide();
	});
});
// //// Test if browser support placeholder
jQuery.support.placeholder = (function(){
    var i = document.createElement('input');
    return 'placeholder' in i;
})();

function isArabicText(text, resultMethod) {
	switch(resultMethod) {
		case 'boolean':
				var result = true;
				var arregex = /[^\u0600-\u06ff ^\u0020-\u0040 ^\u005B-\u0060]/;
				if(arregex.test(text)) {
					var result = false;
				}
			break;
		case 'percentage':
				var arregex = /[^\u0020-\u0040 ^\u005B-\u0060]/;
				var totalCharsCount = 0;
				for(var count=0; count<text.length; count++) {
					if (arregex.test(text.charAt(count))) {
						totalCharsCount++;
					}
				}
				if(totalCharsCount == 0) {
					var result = 0.5;
				} else {
					var arregex = /[\u0600-\u06FF]/;
					var ArabicCharsCount = 0;
					for(var count=0; count<text.length; count++) {
						if (arregex.test(text.charAt(count))) {
							ArabicCharsCount++;
						}
					}
					var result = ArabicCharsCount/totalCharsCount;
				}
			break;
	}
	return result;
}

function related_valid_check() {
	var intRegex = /^\d+$/;
	var tag_name = document.getElementById('tag_name').value;
	var int_relation = document.getElementsByName('score').item(0).value;

	if(isWhitespace(tag_name)) {
		$('div.status').replaceWith('<div class="status"><p class="alert"><strong>Failed:</strong>Please fill the required fields </p></div>');
		return 0;
	}
	else if (int_relation < 0 && int_relation != ""){
		$('div.status').replaceWith('<div class="status"><p class="alert"><strong>Failed:</strong>Relation Score must be more than 0 </p></div>');
		return 0;
	}
	else if (!(intRegex.test(int_relation))) {
		$('div.status').replaceWith('<div class="status"><p class="alert"><strong>Failed:</strong>Relation Score must be integer more than 0 </p></div>');
		return 0;
	}

	document.forms["form"].submit();
	show_hide_loading(true);
}

function manage_related_valid_check() {
	var tag_name = document.getElementById('tag_name').value;
	if(isWhitespace(tag_name)) {
		$('div.saving_status').replaceWith('<div class="saving_status"><p class="alert"><strong>Failed:</strong>Please fill the required fields </p></div>');
		return 0;
	}
	document.forms["form"].submit();
	show_hide_loading(true);
}

function related_settings_valid_check() {
	var intRegex = /^\d+$/;
	var tag_max = document.getElementsByName('max').item(0).value;
	if(isWhitespace(tag_max)) {
		$('div.status').replaceWith('<div class="status"><p class="alert"><strong>Failed:</strong>Please fill the required fields </p></div>');
		return 0;
	}
	else if (tag_max < 0 ){
		$('div.status').replaceWith('<div class="status"><p class="alert"><strong>Failed:</strong>Relation Score must be more than 0 </p></div>');
		return 0;
	}
	else if (!(intRegex.test(tag_max))) {
		$('div.status').replaceWith('<div class="status"><p class="alert"><strong>Failed:</strong>Max Related Tags must be integer more than 0 </p></div>');
		return 0;
	}
	document.forms["form3"].submit();
	show_hide_loading(true);
}

function related_checkSelected (field,remains) {
	var check_field = 0;
	if (field.length == undefined) {
		check_field = 1;
	}
	for (i = 0;i <field.length; i++) {
		if (field[i].checked == true) {
			check_field += 1;
		}
	}
	if (check_field == 0 ) {
		$('div.status').replaceWith('<div class="status"><p class="alert"><strong>No selections made:</strong> Please select the Tags you wish to make related from the list below</p></div>');
		return 0;
	} else if (remains == 0) {
		$('div.status').replaceWith('<div class="status"><p class="alert"><strong>Max selections made:</strong> You reached the limit for relating tags to this tag </p></div>');
		return 0;
	} else if (check_field > remains) {
		$('div.status').replaceWith('<div class="status"><p class="alert"><strong>Max selections made:</strong> You can only select ' + remains + ' tags to make them related</p></div>');
		return 0;
	} else {
		document.forms["form2"].submit();
		show_hide_loading(true);
	}
}

function related_checkAll(field) {
	if (field.length == undefined) {
		field.checked = true ;
		return;
	}
	for (i = 0; i < field.length; i++)
		field[i].checked = true ;
}

function related_uncheckAll(field) {
	if (field.length == undefined) {
		field.checked = false ;
		return;
	}
	for (i = 0; i < field.length; i++)
		field[i].checked = false ;
}

function enhance_professional_model() {
	baytModal.setModal("Enhance Your Professional Presence on the Web","<h1 style='width:300px;'>Enhance Your Professional Presence on the Web</h2>\
		<ul class='pt check'> \
			<li>Enable people to find you through search engines like Google.</li> \
			<li>Create a profile that becomes like your online business card.</li> \
			<li>Make it easy for colleagues to endorse your experience.</li> \
		</ul> \
		<img src='/images/people/create_own_profile.jpg' height='220' width='520' alt='Enhance Your Professional Presence on the Web' />",true,closeModal()
	);
	$("#globalMWCancel").hide();
	$("#modalpopup").width("562px");
	$("#globalMWOk").hide();
	$("#globalMWTitle").hide();
}

function append_hidden_input(selector,name,value) {
	$(selector).append($("<input/>").attr({name:name,value:value}));
}


// Moved from auto complete plug-in to main related to increase jQuery.
/*
 * Dimensions Copyright (c) 2007 Paul Bakaus (paul.bakaus@googlemail.com) and
 * Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net) Dual
 * licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * $LastChangedDate: 2007-09-11 05:38:31 +0300 (Вт, 11 сен 2007) $ $Rev: 3238 $
 * 
 * Version:
 * 
 * @VERSION
 * 
 * Requires: jQuery 1.2+
 */

(function($){$.dimensions={version:'@VERSION'};$.each(['Height','Width'],function(i,name){$.fn['inner'+name]=function(){if(!this[0])return;var torl=name=='Height'?'Top':'Left',borr=name=='Height'?'Bottom':'Right';return this[name.toLowerCase()]()+num(this,'padding'+torl)+num(this,'padding'+borr);};$.fn['outer'+name]=function(options){if(!this[0])return;var torl=name=='Height'?'Top':'Left',borr=name=='Height'?'Bottom':'Right';options=$.extend({margin:false},options||{});return this[name.toLowerCase()]()
+num(this,'border'+torl+'Width')+num(this,'border'+borr+'Width')
+num(this,'padding'+torl)+num(this,'padding'+borr)
+(options.margin?(num(this,'margin'+torl)+num(this,'margin'+borr)):0);};});$.each(['Left','Top'],function(i,name){$.fn['scroll'+name]=function(val){if(!this[0])return;return val!=undefined?this.each(function(){this==window||this==document?window.scrollTo(name=='Left'?val:$(window)['scrollLeft'](),name=='Top'?val:$(window)['scrollTop']()):this['scroll'+name]=val;}):this[0]==window||this[0]==document?self[(name=='Left'?'pageXOffset':'pageYOffset')]||$.boxModel&&document.documentElement['scroll'+name]||document.body['scroll'+name]:this[0]['scroll'+name];};});$.fn.extend({position:function(){var left=0,top=0,elem=this[0],offset,parentOffset,offsetParent,results;if(elem){offsetParent=this.offsetParent();offset=this.offset();parentOffset=offsetParent.offset();offset.top-=num(elem,'marginTop');offset.left-=num(elem,'marginLeft');parentOffset.top+=num(offsetParent,'borderTopWidth');parentOffset.left+=num(offsetParent,'borderLeftWidth');results={top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};}
return results;},offsetParent:function(){var offsetParent=this[0].offsetParent;while(offsetParent&&(!/^body|html$/i.test(offsetParent.tagName)&&$.css(offsetParent,'position')=='static'))
offsetParent=offsetParent.offsetParent;return $(offsetParent);}});var num=function(el,prop){return parseInt($.css(el.jquery?el[0]:el,prop))||0;};})(jQuery);

function autocompleteCompanyName(selector,countryIso) {

	selector.unbind();

	selector.autocomplete("/"+$("body").attr('id')+"/company/searchautocomplete",{
		extraParams:{countryIso:((typeof countryIso ==="undefined")?'':countryIso)},
		autoFill:false,
		selectFirst:false,
		dataType: "json",
		parse: function(data) {
			isEntered = 0;
			var rows = new Array();
			for(var i=0; i<data.length; i++){
				rows[i] = {
					data  : data[i],
					value : data[i].logoImage,
					result: data[i].companyName
				};
			}
			return rows;
		},
		formatItem: function(row, i, n) {
			var htmlElemet=row.companyName;
			if(row.logoImage.length>0)
				htmlElemet="<img src='"+row.logoImage+"' />"+row.companyName;
			return htmlElemet;
		},
		minChars:2,
		matchContains:true,
		width:346,
		max:30,
		cacheLength:1
	}).result(function(event, item) {
		var companyName =  item.companyName;
		selector.val(companyName);
	});
}

function autocompleteSocialSpecialtiesSearch(){
	var searchText = $("input[name=search_keyword]");
	searchText.autocomplete("/app/control/byt_speciality_ajax_manager.tcl?action=10&lang="+$("body").attr("id") ,{
		dataType: "json",
		parse: function(data) {
			var rows = new Array();
			for(var i=0; i<data.length; i++){
				rows[i] = {data : data[i], value : data[i].value, result : data[i].result, category : data[i].category};
			}
			return rows;
		},
		formatItem: function(row, i, n) {
			if (row.category == 'specialty') {
				return "<span class='s_tag'>"+row.result+"</span>";
			} else {
				return row.result;
			}
		},
		hasParent: false,
		appendTo:"#questions-list",
		max:20,
		autoFill:false,
		selectFirst:false,
		minChars:1,
		matchContains:true,
		scrollHeight:230,
		cacheLength:1,
		highlight: function(match, keywords) {
			var splitVar="<span class='s_tag'>"
			var tmpMatch = match.split(splitVar);
			keywords = keywords.split(' ').join('|');
			keywords = keywords.replace(/([?*])/g,' ');
			keywords = keywords.replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&");
			if (tmpMatch.length > 1) {
				// THAT MEANS ITS A SPECIALTY TAG
				var firstMatch = tmpMatch[0].replace("</span>","").replace(new RegExp("("+keywords+")", "gi"),'<b>$1</b>');
				match=firstMatch+splitVar+tmpMatch[1];
				return match;
			} else {
				// THAT MEANS ITS A QUESTION
				return match.replace(new RegExp("("+keywords+")", "gi"),'<b>$1</b>');
			}
		}
	}).result(function(event, item) {
		var sourceId =  item.value;

		if (sourceId > 0 ){
			if ( item.category == "question" ) {
				var urlTitle =item.result;
				urlTitle = cleanQuestionTitle(urlTitle);
				var url = questions_href;
				url =url.replace(/%sourceId/g,sourceId).replace(/%urlTitle/g,urlTitle);
				var feedId = $("#specialties_stream_content h1").attr("name");
				if ( feedId != null) {
					feedId =feedId.split("_")[1];
				} else {
					feedId = ""
				}

				if (!isWhitespace(feedId) ) {
					url+="?feed="+feedId;
				}
				if ( feedId = "my" ) {
					// the splitter takes the word stream out since it's
					// separated by "_". We must get it back.
					feedId = "my_stream";
				}
				searchText.val("");
				window.open(url,"_self",false);// navigate to the chosen URL
			} else {
				var url = specialty_href;
				url = url.replace(/%sourceId/g,encodeURIComponent(item.indexed));
				window.open(url,"_self",false);// navigate to the chosen URL
			}
		}
	});
}
function autocompleteSocialQuestionSearch(){
	var searchText = $("textarea[name=question_title]");
	searchText.autocomplete("/app/control/byt_speciality_ajax_manager.tcl?action=10&nospecialties=1lang="+$("body").attr("id") ,{
		dataType: "json",
		parse: function(data) {
			var rows = new Array();
			for(var i=0; i<data.length; i++){
				rows[i] = {data : data[i], value : data[i].value, result : data[i].result, category : data[i].category};
			}

			if(	data.length > 0 )
			{
				$("#similar_questions_wrapper").show();
			} else {
				$("#similar_questions_wrapper").hide();
			}
			return rows;
		},
		formatItem: function(row, i, n) {
			if (row.category == 'specialty') {
				return "<span class='s_tag'>"+row.result+"</span>";
			} else {
				return row.result;
			}
		},
		hasParent:true, /*
						 * Added by Omar Zeidan, this will help you take action
						 * and manipulate the results container (show and hide,
						 * inside the plugin)
						 */
		parentObject: ".autoContainer", /*
										 * Omar Zeidan, Here you have to specify
										 * the class and / or the ID of the
										 * wrapper element you want to show and
										 * hide, if hasParent=false then leave
										 * it blank or dont use it
										 */
		appendTo:"#similarQuestionsResults",
		max:5,
		autoFill:false,
		selectFirst:false,
		minChars:1,
		matchContains:true,
		scrollHeight:230,
		cacheLength:1,
		highlight: function(match, keywords) {
			var splitVar="<span class='s_tag'>"
			var tmpMatch = match.split(splitVar);
			keywords = keywords.split(' ').join('|');
			keywords = keywords.replace(/([?*])/g,' ');
			keywords = keywords.replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&");
			if (tmpMatch.length > 1) {
				// THAT MEANS ITS A SPECIALTY TAG
				var firstMatch = tmpMatch[0].replace("</span>","").replace(new RegExp("("+keywords+")", "gi"),'<b>$1</b>');
				match=firstMatch+splitVar+tmpMatch[1];
				return match;
			} else {
				// THAT MEANS ITS A QUESTION
				return match.replace(new RegExp("("+keywords+")", "gi"),'<b>$1</b>');
			}
		}
	}).result(function(event, item) {
		var sourceId =  item.value;

		if (sourceId > 0 ){

			if ( item.category == "question" ) {
				var urlTitle =item.result;
				urlTitle = cleanQuestionTitle(urlTitle);
				var url = questions_href;
				url =url.replace(/%sourceId/g,sourceId).replace(/%urlTitle/g,urlTitle);
				var feedId = $("#specialties_stream_content h1").attr("name");
				if ( feedId != null) {
					feedId =feedId.split("_")[1];
				} else {
					feedId = ""
				}

				if (!isWhitespace(feedId) ) {
					url+="?feed="+feedId;
				}
				if ( feedId = "my" ) {
					// the splitter takes the word stream out since it's
					// separated by "_". We must get it back.
					feedId = "my_stream";
				}
				searchText.val("");
				window.open(url,"_self",false);// navigate to the chosen URL
			} else {
				var url = specialty_href;
				url = url.replace(/%sourceId/g,encodeURIComponent(item.indexed));
				window.open(url,"_self",false);// navigate to the chosen URL
			}
		}
	});
}

function get_user_photo(userid, photo) {
	var suffix = userid.slice(-2);
	if (devProjects('generic')) {
		return "/images/uploads/user_photos/"+suffix+"/"+photo+"";
	} else {
		return "http://img.b8cdn.com/images/uploads/user_photos/"+suffix+"/"+photo+"";
	}
}
function cleanUrlInSpecialitySearch(text) {
	var cleanText = text
	.replace(/\p{L}(\p{L}|\p{Nd})*/g, " ")
    .replace(/^p{P}\p{S}/gi, ' ')
	.replace(/[~!@$%^*()_=\{\}\[\]\|\:"; \'<\>,\?\\\/]+/g, " ")
	.replace(/[\s]+/g, " ")
	.replace(/^\s+|\s+$/g, "");
	cleanText = encodeURIComponent(cleanText).replace(/%20/g,"+");
	return cleanText;
}
function post_to_url(path, params) {
    var form = document.createElement("form");
    form.setAttribute("name", "postform");
    form.setAttribute("method", "post");
    form.setAttribute("action", path);
    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);
            form.appendChild(hiddenField);
            }
    }
    document.body.appendChild(form);
    form.submit();
}

/*
 * HOW TO USE: 1) Add HTML element with a specific id, e.g. <div
 * id="content-placeholder"></div> 2) Add a call to the JS function:
 * $("#content-placeholder").deferredLoad(url,params,timeout,max_retries); 3) In
 * the manager return json object with status, message Status : wait, ok
 */
jQuery.fn.extend({
	deferredLoad : function(url,params,timeout,max_retries,status) {
		max_retries = max_retries || 50;
		timeout = timeout || 5000;
		status = status || 0;
		caller = $(this);
		if (max_retries == 0) {
			return 0;
		}
		if (status == 0) {
			show_hide_loading(true, '#'+caller.attr('id'));
		}
		jQuery.post(
		 		url,
		 		params,
		 		function(response) {
					 if (response.status == "wait") {
						 if (status == 0) {
							 caller.html(response.message);
							 caller.append($("#div_loading_large").clone().removeClass("hide"));
						 }
						 setTimeout(function() {caller.deferredLoad(url,params,timeout,--max_retries, 1)}, timeout);
					 } else {
						 caller.html(response.message);
					 }
		 		}
		);
	}
});
function afterValidate(form) {
	var errSummary = $('div.errorSummary');
	if (errSummary.is(":visible")) {
		errSummary.prepend('<span class="icon"></span>').addClass('alertbox').addClass('alert');
		$('div.errorSummary > p').html(errorSummaryMessage);
		$('div.errorSummary > ul').remove();
		form.scrollTo(2000);
	}
	return true;
}
function validateCoords() {
	if ($('#x').val() == 0 &&
		$('#y').val() == 0 &&
		$('#x1').val() == 0 &&
		$('#y1').val() == 0 &&
		$('#w').val() == 0 &&
		$('#h').val() == 0) {
		return false;
	}

	return true;
}

function selectAutocomplete(selectorId,valuesList,optionsJsonList,valueInputId) {
	optionsJsonList = eval(optionsJsonList);
	var selector = $("#"+selectorId+"");
	var select_val = $("#"+valueInputId+"");
	var lowerdValuelist = new Array();
	var defaultValue = "";
	var temp_text = "";
	var optionIndex = -1;

	if (optionsJsonList["def_val"] != undefined ) {defaultValue = optionsJsonList["def_val"];}
	for (var i = 0; i < valuesList.length ; i++) {
		lowerdValuelist.push(valuesList[i].toLowerCase());
	}
	selector.autocomplete(valuesList,
		{
			autoFill:false,
			selectFirst:true,
			matchContains:true,
			minChars:1,
			delay:0,
			resultsClass: "ac_results "+selectorId+"_lst",
			width:selector.width()
		}
	);
	if (selector.val() == defaultValue || selector.val() == "") {
		selector.val(defaultValue);
		selector.addClass("mute acv");
		select_val.val("");
	}
	selector.live("keydown keyup click change focus blur input",function() {
		temp_text = $(this).val().replace(/^\s+/,'').replace(/\s+$/, '').toLowerCase();
		select_val.val(optionsJsonList[temp_text]);
		optionIndex = $.inArray(temp_text,lowerdValuelist);
	});

	selector.live("blur change",function() {
		$(this).val($(this).val().replace(/^\s+/,'').replace(/\s+$/, ''));
		$(this).removeClass("mute acv");
		if (optionsJsonList[temp_text] == undefined) {
			$(this).val(defaultValue);
			$(this).addClass("mute acv");
			select_val.val("");
		} else {
			if (optionIndex > -1) {
				$(this).val(valuesList[optionIndex]);
			}
			$("."+selectorId+"_lst").hide();
		}
	});

	$("."+selectorId+"_lst .ac_over").live("mousedown",function(){
		selector.val($(this).text());
		if (selector.val() != "" || selector.val() != defaultValue) {
			$("."+selectorId+"_lst").hide();
		}
	});
	
	selector.live("focus change",function() {
		$(this).removeClass("mute acv");
		if ($(this).val() == defaultValue) {
			$(this).val("");
			select_val.val("");
			$(this).removeClass("mute acv");
			$("."+selectorId+"_lst").hide();
		}
	})
}

$(document).ready(function(){
	$(document).delegate(".submitOnce:not(form)" , "click",function(event){
		var self = $(this) ;
		if (self[0].tagName != "A")
			self.text( self.data("ondisable-text") ||"Please Wait..");
		if(self.data("clicked") == 1){
			event.preventDefault();
			self.removeAttr("onclick").unbind("click");
		}
		self.attr("data-clicked","1");
	});
});

function removePremiumToolTip() {
	$.bayt("/app/control/byt_general_manager.tcl",{action:22});
	$(".premium_logo ul").hide();
}

// #################################################################
// Changes body value for Bayt URLs.
// Can be used to correct country name in cached pages URLs
// Note: global lang variable is used.
// @return return the new URL after the change,
// no changes are made if lang is not detected in the old URL
// #################################################################
function changeUrlBody(url, newbody) {
	newbody = typeof newbody !== 'undefined' ? newbody : 'uae';

	if (typeof lang === 'undefined') {
		lang = $('body').attr('id');
	}
	
	var startIndex = url.indexOf("/"+lang+"/");
	if (startIndex == -1) {
		return url;
	}
	startIndex = startIndex + lang.length + 2; // start index of the body

	var result = url.substring(0, startIndex) + newbody;
	
	var endIndex = url.indexOf("/", startIndex); // end index of the body
	if (endIndex == -1) {
		return result; 
	}	
	return  result + url.substring(endIndex);
}

function visaValidation () {
	var visa_stat 	= $("select[name=visaStat]");
	if (visa_stat != undefined) {

		if (visa_stat.val() == "1" ) {
			var residc 	= $("input[name=res_country]");
			var nationalities = $("input[name=multi_nat]").val();
			nationalities = nationalities + " " + $("input[name=citizen]").val();
			if (nationalities.search(residc.val()) > -1) {
				visa_stat.removeClass("visa");
			} else {
				visa_stat.addClass("visa");
			}
		} else {
			visa_stat.removeClass("visa");
		}
	}
}

if(typeof String.prototype.trim !== 'function') {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, ''); 
	}
}


// ahussein Ticket 91171
if(devProjects('new_autocomplete')) {
	var form = '';
	var input_keyword = '';
	if(typeof(currentSeach) == "undefined"){
		var currentSearch = "all";
	}
	function setSearchType(isload) {

		if(typeof(currentSearch) == "undefined"){
			return false;
		}
		if(typeof(form) == "undefined" || form==''){
			form = $("#search_box_form");
		}
		if(typeof(input_keyword) == "undefined" || input_keyword==''){
			input_keyword = $("#id-keyword");
		}
		
		$("#listing").removeClass('all');
		
		$("#current-search").text(currentSearch);
		if(isload != 1){
			var element= $(this);
		}
		$(".channels .list").hide();
		var jobsIso = "";
		if ( !isWhitespace(currentIso) && currentIso.length == 2 ) 
			jobsIso = currentIso+",0,0";
		// input_keyword.addClass("mute");
		// $("#bayt_queck_search_box").show();
		// $("#search_box_specialties").hide();
		
		$("#current-l").show();
		
		// $('#current-iso').html($('.countries
		// .list').find('span').eq(0).text());
		
		if(currentSearch == "specialties"){
			//input_keyword.text(specialities_text);
			$("#current-l").hide();
			$(".twrapper").css('width', '73%');
			form.find("input[name=ask-question-title]").val("");
		} else {
			$(".twrapper").css('width', '56%');
			$("#current-iso").html(countries[currentSearch]);
			$(".countries .list").html(country_iso[currentSearch]);
		}
		if($(".countries .list").find('span[name="'+currentIso+'"]').length < 1 ){
			currentIso = "";
		}
		
		if(input_keyword.val()!='' && input_keyword != default_values[currentSearch]){
			$('#searchBtnBox button').prop('disabled', false);
		} else {
			if(currentSearch!='jobs' || currentSearch!='all')
				$('#searchBtnBox button').prop('disabled', true);
		}
		
		$('#searchBtnBox').show();
		
		switch (currentSearch) {
			case "all":
				form.attr("action",'');
				// $('.twrapper').css('width', '70%');
				$("#listing").addClass('all');
				// $('#searchBtnBox').hide();
				// $('#current-l').hide();
				$("#current-search").text(all_text);
				currentSearch= "all";
				break;
			case "jobs":
				form.attr("action",form_action['jobs']);
				$("#current-search").text(jobs_text);
				$("#hidden-1").attr("name","composite_search").attr("value","1");
				$("#hidden-2").attr("name","jb_loc_list").attr("value",jobsIso);
				break;
			case "salaries":
				form.attr("action",form_action['salaries']);
				$("#current-search").text(salaries_text);
				$("#hidden-1").attr("name","search_type").attr("value","salaries");
				$("#hidden-2").attr("name","country_iso").val(currentIso);
				break;
			case "specialties":
				form.attr("action",form_action['specialities']);
				currentIso = "";
				$("#current-search").text(specialities_text);
				$("#hidden-1").attr("name","search_type").attr("value","specialties");
				$("#hidden-2").attr("name","country_iso").attr("value",currentIso);
				break;
			case "people":
				form.attr("action",form_action['people']);
				currentIso = "";
				$("#current-search").text(people_text);
				var keyword_search = "";
				if (input_keyword.val() != "") {
					keyword_search = input_keyword.val()+"/";
				}
				if(page_body == "people-search-results"){
					var peopleSearchText=$("div.specialties_search h1 span span").text();
					input_keyword.val(peopleSearchText);
				}
				$("#hidden-1").attr("name","search_type").attr("value","people");
				$("#hidden-2").attr("name","country_iso").attr("value","");
				break;
			case "companies":
				form.attr("action",form_action['companies']);
				currentIso = "";
				$("#current-search").text(companies_text);
				if(page_body == "people-search-results"){
					var peopleSearchText=$("div.specialties_search h1 span span").text();
					input_keyword.val(peopleSearchText);
				}
				$("#hidden-1").attr("name","search_type").attr("value","company");
				$("#hidden-2").attr("name","country_iso").attr("value","");
				break;
		}

		if(input_keyword.hasClass('mute') || input_keyword.val() == ''){
			input_keyword.val(default_values[currentSearch]);
		}
		$('#current-iso').html($('.countries .list span[name="'+currentIso+'"]').text());
	}
		
	function getSpanCountry(element) {
		$("#current-iso").html($(element).html());
		$(".countries .list").hide();
		currentIso =$(element).attr("name");
		$('#listing').hide();
		if(currentIso=='')
			$('#hidden-2').val('');
		else{
			if(currentSearch!='salaries')
				$('#hidden-2').val(currentIso+',0,0');
			else 
				$('#hidden-2').val(currentIso);
		}
		if(input_keyword.val() !='' && input_keyword.val() != default_values[currentSearch]){
			bayt.search.fixPosition();
			bayt.search.resultsContainer.show();
			bayt.search.get(true);
		}
	}

	function search_validate_form(submitIso){
		switch (currentSearch) {
			case "all":
				currentIso= "all";
				if(input_keyword.val() == default_values['all']){ input_keyword.val("");}
				break;
			case "jobs":
				if ( !isWhitespace(currentIso) && currentIso.length == 2 ) submitIso = currentIso+",0,0";
				if ( default_values['jobs'].search(escapeRegExp(input_keyword.val()))!= -1 ) {
					if(input_keyword.val() == default_values['jobs']){input_keyword.val("");}
					if (isWhitespace(currentIso) || typeof currentIso=="undefined") currentIso= "all";
					window.location = countryLinkToJobsIn[currentIso];
					return false;
				}
				break;
			case "people":
				var keyword_search = "";
				var keyword = "";
				input_string = input_keyword.val();
				var com_ind = input_string.search("Company:");
				var tit_ind = input_string.search("Title:");
				var ins_ind = input_string.search("Institution:");
				if (input_string !== "" && input_string !== default_values['people']) {
					input_string=input_string.replace(/\\\//g," ");
					if (com_ind > -1) {
						if (com_ind > 0) {
							keyword = input_string.slice(0,com_ind-1)+"/";
						}
						keyword_search = "#/company/"+input_string.slice(com_ind+8,input_string.length)+"/keyword/"+keyword;
					} else if (tit_ind > -1) {
						if (tit_ind > 0) {
							keyword = input_string.slice(0,tit_ind-1)+"/";
						}
						keyword_search = "#/job_title/"+input_string.slice(tit_ind+6,input_string.length)+"/keyword/"+keyword;
					} else if (ins_ind > -1) {
						if (ins_ind > 0) {
							keyword = input_string.slice(0,ins_ind-1)+"/";
						}
						keyword_search = "#/institution/"+input_string.slice(ins_ind+12,input_string.length)+"/keyword/"+keyword;
					} else {
						keyword_search = "#/keyword/"+input_string+"/";
					}
				}
				if ($("#current-iso").text() === no_pref_text) {
					$("#id-keyword").removeClass('mute');
				}
				if ($("#id-keyword").val().replace(/^\\s+/,'').replace(/\\s+$/, '') === "" && $("#current-iso").text() === no_pref_text) {
					return false;
				}
				if ($("#current-iso").text() == no_pref_text) {
					form.attr("action",form_urls['people']+keyword_search);
				} else {
					form.attr("action",form_urls['people_iso']+keyword_search);

				}
				$(".quick-search form input").removeAttr('name');
				form.attr("method","POST");
				break;
			case "salaries":
				break;
			case "specialties" :
				// var default_values =
				// $("input[name=search_keyword]").prop("defaultValue");
				var searchText= input_keyword.val().replace(/\\\\//g, " ");
				var cleanText = cleanUrlInSpecialitySearch(searchText);
				var url = form.attr("action");
				if (  isWhitespace(cleanText)  || specialtyFormSubmitted == 1) {
					return false;
				} else {
					form.attr("action",url + cleanText + "/");
					window.location=form.attr("action");
					specialtyFormSubmitted = 1;
					return false;
				}
				break;
			case "companies":
				// var default_values = input_keyword.prop("defaultValue");
				var searchText= input_keyword.val().replace(/\\\\//g, " ");
				// var cleanText = cleanUrlInSpecialitySearch(searchText);
				var url = form.attr("action");
				if ( isWhitespace(searchText) ) {
					return false;
				} else {

					if($("#current-iso").text() == no_pref_text){
						var locationUrl=url + encodeURIComponent(searchText).replace(/\%20/g,"+") + "/";
					} else {
						var locationUrl=url + isoCountryNameArray[currentIso].toLowerCase() + "/" + encodeURIComponent(searchText).replace(/\%20/g,"+") + "/";
					}
					form.attr("action",locationUrl);
					window.location=locationUrl;
					return false
				}
				break;
		}
		$("#hidden-2").attr("value",submitIso);
	}
	$(function (){
		// try{
		if($('#id-keyword').length > 0){
			bayt.search.init($('#id-keyword'));
			// } catch (e){}
			setSearchType();
			$(".channels").mouseleave(function() {
				$(".channels .list").hide();
			}).mouseover( function () {
				$(".channels .list").show();
			});
			$(".countries").mouseleave(function() {
				$(".countries .list").hide();
			}).mouseover( function () {
				$(".countries .list").show();
			});
			$('.countries').find('.list').on('click', 'span', function (e){
				e.preventDefault();
				input_keyword.focus();
				getSpanCountry(this);
			});
			$('.channels').find('.list').on('click', 'span', function (e){
				e.preventDefault();
				currentSearch = $(this).attr('name');
				setSearchType();
			});
		}
	});
}

/**
 * By IZATARy@BAYT.NET fix a couple of related bugs in jQuery's clone() method.
 * https://github.com/spencertipping/jquery.fix.clone/blob/master/jquery.fix.clone.js
 */
(function(e){jQuery.fn.clone=function(){var t=e.apply(this,arguments),n=this.find("textarea").add(this.filter("textarea")),r=t.find("textarea").add(t.filter("textarea")),i=this.find("select").add(this.filter("select")),s=t.find("select").add(t.filter("select"));for(var o=0,u=n.length;o<u;++o)$(r[o]).val($(n[o]).val());for(var o=0,u=i.length;o<u;++o){for(var a=0,f=i[o].options.length;a<f;++a){if(i[o].options[a].selected===true){s[o].options[a].selected=true}}}return t}})(jQuery.fn.clone)

var auto_login_xhr = '0';
function socialAutoLogin(page_fb_app_id,fb_channel_url,body,fbProtocol,page_cached_p){
	if (auto_login_xhr != '0') {
		return false;
	}
	var fb_auto_login = $.cookie('fb_auto_login');
	
	if(fb_auto_login == 1){
		return false;
	}
	if (!window.location.origin) { // Some browsers (mainly IE) does not have this property, so we need to build it manually...
		  window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? (':' + window.location.port) : '');
	}
	window.fbAsyncInit = function() {
		FB.init({appId:page_fb_app_id,status:true,cookie:true,xfbml:true+fb_channel_url});
		FB.getLoginStatus(function(response) {
			if (response.status=="connected") {
				var FBCookie= "access_token="+response.authResponse.accessToken+"&uid="+response.authResponse.userID;
				document.cookie = "fbs_"+page_fb_app_id+"="+encodeURIComponent(FBCookie)+"; path=/";
				// user is logged in and granted some permissions.
				FB.api('/me', function(response) {
					var channel = "jobs";
					var name=response.name;
					var email=response.email;
					var uid=response.id;
					if (typeof current_url == "undefined"){
						current_url=window.location.href
					}
					var paramObj={socialNetwork:"facebook",socialEmail:email,socialId:uid,currentUrl:current_url,channel:channel,pageBody:body};
					auto_login_xhr = $.baytPost(
						window.location.origin+"/ajax/social-login/",
						paramObj,
				       function(response) {
				        	if(response == 1 )
							{
								if( page_cached_p == "1") {
									getTopBar();
								} else {
									window.location.reload(true);
								}					
							}
				        }
					);
				});
			}
		});
	};
	if(fbProtocol != "") {
		var e = document.createElement('script');
		e.src = document.location.protocol + '//connect.facebook.net/'+fbProtocol+'/all.js';
		e.async = true;
		document.getElementById('fb-root').appendChild(e);
	}
	return false;
}
function getGoogleAnalyticsEventTracker(category, action, label){
	label = typeof label !== 'undefined' ? label : '';
	if (devProjects('universal_analytics')) {
		if(window.ga){ga('send', 'event', {eventCategory:category, eventAction:action, eventLabel:label});}
	} else {
		if(window._gaq){_gaq.push(['_trackEvent', category, action, label]);}
	}
}
function getGoogleAnalyticsSocialTracker(network, action, target){
	target = typeof target !== 'undefined' ? target : '';
	if (devProjects('universal_analytics')) {
		if(window.ga){ga('send', 'social', {socialNetwork:network, socialAction:action, socialTarget:target});}
	} else {
		if(window._gaq){_gaq.push(['_trackSocial', network, action, target]);}
	}
}
function getGoogleAnalyticsPageviewScript(pageview){
	if (devProjects('universal_analytics')) {
		if(window.ga){ga('send', 'pageview', pageview);};
	} else {
		if(window._gaq){_gaq.push(['_trackPageview', pageview]);};
	}
}
