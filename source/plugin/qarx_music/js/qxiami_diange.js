var musicPage=1;if($('search_input')){_attachEvent($('search_input'),'focus',function(e){e=e?e:event;obj=BROWSER.ie?event.srcElement:e.target;if(obj.value==obj.title)obj.value=''});_attachEvent($('search_input'),'blur',function(e){e=e?e:event;obj=BROWSER.ie?event.srcElement:e.target;if(!obj.value)obj.value=obj.title});_attachEvent($('search_input'),'keypress',function(e){e=e?e:event;obj=BROWSER.ie?event.srcElement:e.target;if(e.which==13){$('search_input').value?searchMusicList(1):$('search_input').value=$('search_input').title}});_attachEvent($('search_music_bt'),'click',function(e){e=e?e:event;obj=BROWSER.ie?event.srcElement:e.target;if($('search_input').value!=$('search_input').title){$('music_list').innerHTML='';searchMusicList(1)}})}function searchMusicList(Page){if($('search_input').value==''){$('search_input').focus();return false}musicPage=Page;var head=$("music_search_bar");var src1="http://www.xiami.com/app/nineteen/search/key/"+encodeURIComponent($('search_input').value)+"/page/"+musicPage+"?random="+new Date().getTime()+".js&callback=getximidate";var __musicList='';searchMusicLoading(true);var JSONP=document.createElement("script");JSONP.type="text/javascript";JSONP.src=src1;document.getElementsByTagName("head")[0].appendChild(JSONP);JSONP.onload=JSONP.onreadystatechange=function(){if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){JSONP.onload=JSONP.onreadystatechange=null}}}function searchMusicLoading(show){if(show==true){$('search_music_bt').innerHTML='<img src="'+$('search_music_bt').getAttribute('lowsrc')+'" align="absmiddle" title="数据加载中..."/>'}else{$('search_music_bt').innerHTML='<button class="pn pnc"><strong>搜索</strong></button>'}}function artnasear(artname){$('search_input').value=artname;searchMusicList(1);return false}function getximidate(jsonData){var __musicList='';for(var i in jsonData.results){__musicList+='<li><span>'+decodeURIComponent(jsonData.results[i].song_name).replace(/\+/g," ")+'--</span><a  style="float:left;" title="搜索"  href="javascript:void(0);"   onclick="artnasear(\''+decodeURIComponent(jsonData.results[i].artist_name).replace(/\+/g," ")+'\')">'+decodeURIComponent(jsonData.results[i].artist_name).replace(/\+/g," ")+'</a><a href="javascript:void(0);"  onFocus="this.blur()" unselectable="on" id="'+jsonData.results[i].song_id+'" title="'+decodeURIComponent(jsonData.results[i].song_name).replace(/\+|\'/g," ")+'" onclick="insertMusic(this.id,this.title)">[点播此歌]</a><a title="请试听正常后点播发布歌曲"  href="javascript:void(0);" id="'+jsonData.results[i].song_id+'" title="'+decodeURIComponent(jsonData.results[i].song_name).replace(/\+/g," ")+'" onclick="musicPlay(this.id,\''+decodeURIComponent(jsonData.results[i].song_name).replace(/\+|\'/g," ")+'\')" class="song_play">[试听]</a></li>'}if(jsonData.total==0){__musicList='<div><p align="center" style="height:70px; line-height:50px"><img  src="source/plugin/qarx_music/images/music_none.gif" align="absmiddle"/> 没有找到关于 <font color="red">'+$('search_input').value+'</font> 的音乐。</p></div>';$('self_set_pager_ui').innerHTML='';$('music_list').innerHTML=__musicList;searchMusicLoading(false);return false}$('music_list').innerHTML=__musicList;searchMusicLoading(false);if(jsonData.total>8){$('self_set_pager_ui').innerHTML=pagerView(parseInt(jsonData.total),parseInt(musicPage));var obja=$('music_pager').getElementsByTagName("A");var objb=$('music_list').getElementsByTagName("A");for(i=0;i<obja.length;i++){_attachEvent(obja[i],'click',function(e){e=e?e:event;obj=BROWSER.ie?event.srcElement:e.target;searchMusicList(parseInt(obj.id.replace(/page_to_/,'')))})}}else{$('self_set_pager_ui').innderHTML=''}$('music_list').innerHTML=__musicList}function pagerView(dataCount,currentPage){var __musicListPager='<div class="pages" id="music_pager"><ul><li class="prevpage"><a href="javascript:void(0);" onFocus="this.blur()" unselectable="on" title="上一页" id="'+(currentPage<=1?1:currentPage-1)+'">上一页</a></li>';var __totalPage=dataCount/8;__totalPage=__totalPage>parseInt(__totalPage)?parseInt(__totalPage)+1:parseInt(__totalPage);var __forLength=currentPage>10?(currentPage>1000?2:3):4;var __forStep=2;var __forStart=(__totalPage>4&&currentPage>__forStep)?(currentPage<__totalPage-__forLength?currentPage-__forStep:__totalPage-__forLength):1;var __forEnd=__forStart+__forLength<__totalPage+1?__forStart+__forLength+1:__totalPage+1;if(__totalPage>4&&currentPage>__forStep+1)__musicListPager+='<li><a href="javascript:void(0)" onFocus="this.blur()" unselectable="on" title="1" id="page_to_1">1...</a></li>';for(var i=__forStart;i<__forEnd;i++){if(currentPage==i){__musicListPager+='<li><a href="javascript:void(0)" onFocus="this.blur()" unselectable="on" title="'+i+'" id="page_to_'+i+'" style="background-color:#839B1B; border:1px solid #839B1B;color: #FFFFFF">'+i+'</a></li>'}else{__musicListPager+='<li><a href="javascript:void(0)" onFocus="this.blur()" unselectable="on" title="'+i+'" id="page_to_'+i+'" >'+i+'</a></li>'}}if(__forEnd<__totalPage)__musicListPager+='<li><a href="javascript:void(0)" onFocus="this.blur()" unselectable="on" title="'+__totalPage+'" id="page_to_'+__totalPage+'">...'+__totalPage+'</a></li>';if(currentPage<__totalPage){currentPage++;__musicListPager+='<li class="nextpage"><a href="javascript:void(0)" onFocus="this.blur()" unselectable="on" title="下一页" id="page_to_'+currentPage+'">下一页</a></li>'}__musicListPager+='<li class="lastpage"><a href="javascript:void(0)" onFocus="this.blur()" unselectable="on" title="最后一页" id="page_to_'+__totalPage+'">最后一页</a></li></ul></div>';return __musicListPager}function musicPlay(songId,songName){$('xmmp3play').innerHTML='<iframe src="http://www.qaxxg.cn/xiamilisten.php?songid='+songId+'&songname='+songName+'&mc='+xmusic_mc+'&bc='+xmusic_bc+'"; width="460px" height="160px" scrolling="no" frameborder="0"  hspace="0" allowtransparency="true" vspace="0"></iframe>'}function insertMusic(songId,songName){musicPlay(songId,songName);$('typeoption_songname').value=songName;$('typeoption_xiamisongid').value=songId;return false}var allowpostattach=parseInt('1');var allowpostimg=parseInt('1');var pid=parseInt('0');var tid=parseInt('0');var extensions='';var imgexts='jpg, jpeg, gif, png, bmp';var postminchars=parseInt('10');var postmaxchars=parseInt('10000');var disablepostctrl=parseInt('1');var seccodecheck=parseInt('0');var secqaacheck=parseInt('0');var typerequired=parseInt('');var sortrequired=parseInt('1');var special=parseInt('0');var isfirstpost=1;var allowposttrade=parseInt('');var allowpostreward=parseInt('');var allowpostactivity=parseInt('');var sortid=parseInt('3');var special=parseInt('0');var fid=83;var ispicstyleforum=0;function checkoption(identifier,required,checktype,checkmaxnum,checkminnum,checkmaxlength){if(checktype!='image'&&checktype!='select'&&!$('typeoption_'+identifier)||!$('check'+identifier)){return true}var ce=$('check'+identifier);ce.innerHTML='';if(checktype=='select'){if(required!='0'&&$('typeoption_'+identifier)==null){warning(ce,'必填项目没有填写');return false}else if(required=='0'&&($('typeoption_'+identifier)==null||$('typeoption_'+identifier).value=='0')){ce.innerHTML='<img src="'+IMGDIR+'/check_error.gif" width="16" height="16" class="vm" /> 请选择下一级';ce.className="warning";return true}}if(checktype=='image'){var checkvalue=$('sortaid_'+identifier).value}else{var checkvalue=$('typeoption_'+identifier).value}if(required!='0'){if(checkvalue==''||checkvalue=='0'){warning(ce,'必填项目没有填写');return false}else{ce.innerHTML='<img src="'+IMGDIR+'/check_right.gif" width="16" height="16" class="vm" />'}}if(checkvalue){if((checktype=='number'||checktype=='range')&&isNaN(checkvalue)){warning(ce,'数字填写不正确');return false}else if(checktype=='email'&&!(/^[\-\.\w]+@[\.\-\w]+(\.\w+)+$/.test(checkvalue))){warning(ce,'邮件地址不正确');return false}else if((checktype=='text'||checktype=='textarea')&&checkmaxlength!='0'&&(mb_strlen(checkvalue)<checkminnum||mb_strlen(checkvalue)>checkmaxlength)){warning(ce,'字数没在范围内');return false}else if((checktype=='number'||checktype=='range')){if(checkmaxnum!='0'&&parseInt(checkvalue)>parseInt(checkmaxnum)){warning(ce,'大于设置最大值');return false}else if(checkminnum!='0'&&parseInt(checkvalue)<parseInt(checkminnum)){warning(ce,'小于设置最小值');return false}}else{ce.innerHTML='<img src="'+IMGDIR+'/check_right.gif" width="16" height="16" class="vm" />'}}return true}