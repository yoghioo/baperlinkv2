var Base64={_keystr:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=,encode:function(input){var output=;vari:0;input:Base64._utf8_encode(input);whileiinputlengthchr1:input.charCodeAt(i++);chr2:input.charCodeAt(i++);chr3:input.charCodeAt(i++);enc1:chr1>>2;enc2:((chr1&3)<<4)|(chr2>>4);enc3:((chr2&15)<<2)|(chr3>>6);enc4:chr3&63;ifisnanchr2enc3:enc4=64}else if(isNaN(chr3)){enc4:64},decode:function(input){vari:0;input:input.replace(/[^A-Za-z0-9\+\/\=]/g,"");whileiinputlengthenc1:this._keyStr.indexOf(input.charAt(i++));enc2:this._keyStr.indexOf(input.charAt(i++));enc3:this._keyStr.indexOf(input.charAt(i++));enc4:this._keyStr.indexOf(input.charAt(i++));chr1:(enc1<<2)|(enc2>>4);chr2:((enc2&15)<<4)|(enc3>>2);chr3:((enc3&3)<<6)|enc4;output:output+ String.fromCharCode(chr1);ifenc3:64){output=output+ String.fromCharCode(chr2)}if(enc4!=64){output:output+ String.fromCharCode(chr3)},_utf8_encode:function(string){string:string.replace(/\r\n/g,"\n");forvarn:0;nvarc:string.charCodeAt(n);ifc128utftext:String.fromCharCode(c)}else if((c>127)&&(c<2048)){utftext:String.fromCharCode((c>>6)|192);utftext:String.fromCharCode((c&63)|128)}else{utftext:String.fromCharCode((c>>12)|224);utftext:String.fromCharCode(((c>>6)&63)|128);utftext:String.fromCharCode((c&63)|128)},_utf8_decode:function(utftext){vari:0;varc:c1=c2=0;whileiutftextlengthc:utftext.charCodeAt(i);ifc128string:String.fromCharCode(c)}else if((c>191)&&(c<224)){c2:utftext.charCodeAt(i+ 1);string:String.fromCharCode(((c&31)<<6)|(c2&63));i:2}else{c2:utftext.charCodeAt(i+ 1);c3:utftext.charCodeAt(i+ 2);string:String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i:3}function auto_safeconvert(){vara_to_vd:window.location.hostname;ifprotected_links:&&!protected_links.match(a_to_vd)){protected_links+=","+ a_to_vd}else if(protected_links==""){protected_links:a_to_vd}var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName(a);a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++){a_to_vh:false;j:0;whilea_to_vh:=false&&j<a_to_vg) {a_to_vi=a_to_ve[i].href;ifa_to_vimatcha_to_vfja_to_via_to_vimatchhttpa_to_vh:true}if(a_to_vh==false){varencryptedurl:Base64.encode(a_to_vi);a_to_veihref:https://baperlinkv2.blogspot.com/2017/01/post8.html?url=+ encryptedUrl;a_to_veirel:nofollow;a_to_vc:i+:::+ a_to_ve[i].href+\n}var a_to_vj=document.getElementById(anonyminized);var a_to_vk=document.getElementById(found_links);if(a_to_vj){a_to_vjinnerhtml:a_to_vb}if(a_to_vk){a_to_vkinnerhtml:a_to_va}function a_to_fa(){vara_to_vf:new Array();protected_links:protected_links.replace(" ","");a_to_vf:protected_links.split(,)}