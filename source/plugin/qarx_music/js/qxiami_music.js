var musicPage=1;var audid=editorid+'_aud';$(audid).parentNode.removeChild($(audid));var qmusicbtn=document.createElement('a');qmusicbtn.id='qarx_aud';_attachEvent(qmusicbtn,'click',function(){addxiami('qarx_aud')});qmusicbtn.setAttribute("href","javascript:;");qmusicbtn.setAttribute("title","��������");qmusicbtn.innerHTML="����";$(editorid+'_vid').parentNode.appendChild(qmusicbtn);function addxiami(cmd){checkFocus();showEditorMenuxm(cmd);return}function showEditorMenuxm(tag,params){var sel,selection;var str='',strdialog=0;var ctrlid=editorid+(params?'_cst'+params+'_':'_')+tag;var opentag='['+tag+']';var closetag='[/'+tag+']';var menu=$(ctrlid+'_menu');var pos=[0,0];var menuwidth=500;var menupos='43!';var menutype='menu';s=str='<table width="100%" cellspacing="0" cellpadding="0" class="fwin"><tbody><tr><td class="t_l"></td><td class="t_c"></td><td class="t_r"></td></tr><tr><td class="m_l">&nbsp;&nbsp;</td><td class="m_c"><div class="mtm"><ul style="margin-top: 0px; margin-bottom: 0px; cursor: move;" id="e_image_ctrl" class="tb tb_s cl"><li class="y"><span onclick="hideMenu(\'\', \'win\');return false;" class="flbc">�ر�</span></li><li id="e_btn_xmusic" class=""><a onclick="switchImagebutton(\'xmusic\');" hidefocus="true" href="javascript:;">Ϻ������</a></li><li id="e_btn_wmusic" class=""><a onclick="switchImagebutton(\'wmusic\');" hidefocus="true" href="javascript:;">��������</a></li></ul><div style="" id="e_xmusic" unselectable="on"><div class="p_opt"><div id="music_search_bar"><input class="inp_txt" name="" title="�����������ר��������������֧��ƴ��������������������" value="�����������ר��������������֧��ƴ��������������������" baiduSug="1" id="search_input"/><a  href="javascript:void(0)" id="search_music_bt" title="����" lowsrc="source/plugin/qarx_music/images/f02332.gif"  onFocus="this.blur()" unselectable="on"><button class="pn pnc"><strong>����</strong></button></a><div id="xmmp3play"></div><ul class="music_list" id="music_list"></ul><div id="self_set_pager_ui"></div></div></div></div><div unselectable="on" id="e_wmusic" style="display: none;"><div class="p_opt cl"><p class="pbn">�����������ļ���ַ:</p><p class="pbn"><input type="text" style="width: 320px;" value="" class="px" id="qarx_aud_param_1"></p><p class="xg2 pbn">֧�� wma mp3 ra rm �����ָ�ʽ<br>ʾ��: http://server/audio.wma</p></div><div class="p_opt pns mtn"><button class="pn pnc" id="qarx_aud_submit" type="submit"><strong>�ύ</strong></button></div></div></div></td><td class="m_r"></td></tr><tr><td class="b_l"></td><td class="b_c"></td><td class="b_r"></td></tr></tbody></table></div>';menupos='00';menutype='win';var menu=document.createElement('div');menu.id=ctrlid+'_menu';menu.style.display='none';menu.className='p_pof upf';menu.style.width=menuwidth+'px';menu.innerHTML=s;$(editorid+'_editortoolbar').appendChild(menu);showMenu({'ctrlid':ctrlid,'mtype':menutype,'evt':'click','duration':3,'cache':0,'drag':1,'pos':menupos});try{if($(ctrlid+'_param_1')){$(ctrlid+'_param_1').focus()}}catch(e){}if($('search_input')){_attachEvent($('search_input'),'focus',function(e){e=e?e:event;obj=BROWSER.ie?event.srcElement:e.target;if(obj.value==obj.title)obj.value=''});_attachEvent($('search_input'),'blur',function(e){e=e?e:event;obj=BROWSER.ie?event.srcElement:e.target;if(!obj.value)obj.value=obj.title});_attachEvent($('search_input'),'keypress',function(e){e=e?e:event;obj=BROWSER.ie?event.srcElement:e.target;if(e.which==13){$('search_input').value?searchMusicList(1):$('search_input').value=$('search_input').title}});_attachEvent($('search_music_bt'),'click',function(e){e=e?e:event;obj=BROWSER.ie?event.srcElement:e.target;if($('search_input').value!=$('search_input').title){$('music_list').innerHTML='';searchMusicList(1)}})}var objs=menu.getElementsByTagName('*');for(var i=0;i<objs.length;i++){_attachEvent(objs[i],'keydown',function(e){e=e?e:event;obj=BROWSER.ie?event.srcElement:e.target;if((obj.type=='text'&&e.keyCode==13)||(obj.type=='textarea'&&e.ctrlKey&&e.keyCode==13)){if($(ctrlid+'_submit')&&tag!='image')$(ctrlid+'_submit').click();doane(e)}else if(e.keyCode==27){hideMenu();doane(e)}})}if($('qarx_aud_submit'))$('qarx_aud_submit').onclick=function(){checkFocus();insertText('[audio]'+$('qarx_aud_param_1').value+'[/audio]',7,8,false);hideMenu('','win');hideMenu()}}function searchMusicList(Page){if($('search_input').value==''){$('search_input').focus();return false}musicPage=Page;var head=$("music_search_bar");var src1="http://www.xiami.com/app/nineteen/search/key/"+encodeURIComponent($('search_input').value)+"/page/"+musicPage+"?random="+new Date().getTime()+".js&callback=getximidate";var __musicList='';searchMusicLoading(true);var JSONP=document.createElement("script");JSONP.type="text/javascript";JSONP.src=src1;document.getElementsByTagName("head")[0].appendChild(JSONP);JSONP.onload=JSONP.onreadystatechange=function(){if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){JSONP.onload=JSONP.onreadystatechange=null}}}function searchMusicLoading(show){if(show==true){$('search_music_bt').innerHTML='<img src="'+$('search_music_bt').getAttribute('lowsrc')+'" align="absmiddle" title="���ݼ�����..."/>'}else{$('search_music_bt').innerHTML='<button class="pn pnc"><strong>����</strong></button>'}}function artnasear(artname){$('search_input').value=artname;searchMusicList(1);return false}function getximidate(jsonData){var __musicList='';if(xmusic_dg){for(var i in jsonData.results){__musicList+='<li><span>'+decodeURIComponent(jsonData.results[i].song_name).replace(/\+/g," ")+'--</span><a  style="float:left;" title="����"  href="javascript:void(0);"   onclick="artnasear(\''+decodeURIComponent(jsonData.results[i].artist_name).replace(/\+/g," ")+'\')">'+decodeURIComponent(jsonData.results[i].artist_name).replace(/\+/g," ")+'</a><a href="javascript:void(0);"  onFocus="this.blur()" unselectable="on" id="'+jsonData.results[i].song_id+'" title="'+decodeURIComponent(jsonData.results[i].song_name).replace(/\+|\'/g," ")+'" onclick="insertMusic(this.id,\''+jsonData.results[i].song_name+'\',\''+jsonData.results[i].artist_name+'\')">[����]</a><a title="�������������ٵ㲥��������"  href="javascript:void(0);" id="'+jsonData.results[i].song_id+'" title="'+decodeURIComponent(jsonData.results[i].song_name).replace(/\+|\'/g," ")+'" onclick="musicPlay(this.id,\''+jsonData.results[i].song_name+'\')" class="song_play">[����]</a><a title="�㲥�˸�" href="plugin.php?id=qarx_music:diange&mid='+jsonData.results[i].song_id+'&mkey='+jsonData.results[i].song_name+'" class="song_play">[���]</a></li>'}}else{for(var i in jsonData.results){__musicList+='<li><span>'+decodeURIComponent(jsonData.results[i].song_name).replace(/\+/g," ")+'--</span><a  style="float:left;" title="����"  href="javascript:void(0);"   onclick="artnasear(\''+decodeURIComponent(jsonData.results[i].artist_name).replace(/\+/g," ")+'\')">'+decodeURIComponent(jsonData.results[i].artist_name).replace(/\+/g," ")+'</a><a href="javascript:void(0);"  onFocus="this.blur()" unselectable="on" id="'+jsonData.results[i].song_id+'" title="'+decodeURIComponent(jsonData.results[i].song_name).replace(/\+|\'/g," ")+'" onclick="insertMusic(this.id,\''+jsonData.results[i].song_name+'\',\''+jsonData.results[i].artist_name+'\')">[����]</a><a title="�������������ٵ㲥��������"  href="javascript:void(0);" id="'+jsonData.results[i].song_id+'" title="'+decodeURIComponent(jsonData.results[i].song_name).replace(/\+|\'/g," ")+'" onclick="musicPlay(this.id,\''+jsonData.results[i].song_name+'\')" class="song_play">[����]</a></li>'}}if(jsonData.total==0){__musicList='<div><p align="center" style="height:70px; line-height:50px"><img  src="source/plugin/qarx_music/images/music_none.gif" align="absmiddle"/> û���ҵ����� <font color="red">'+$('search_input').value+'</font> �����֡�</p></div>';$('self_set_pager_ui').innerHTML='';$('music_list').innerHTML=__musicList;searchMusicLoading(false);return false}$('music_list').innerHTML=__musicList;searchMusicLoading(false);if(jsonData.total>8){$('self_set_pager_ui').innerHTML=pagerView(parseInt(jsonData.total),parseInt(musicPage));var obja=$('music_pager').getElementsByTagName("A");var objb=$('music_list').getElementsByTagName("A");for(i=0;i<obja.length;i++){_attachEvent(obja[i],'click',function(e){e=e?e:event;obj=BROWSER.ie?event.srcElement:e.target;searchMusicList(parseInt(obj.id.replace(/page_to_/,'')))})}}else{$('self_set_pager_ui').innderHTML=''}$('music_list').innerHTML=__musicList}function insertMusic(songId,songName,songAuthor){var textpre='[url=plugin.php?id=qarx_music:diange&mid='+songId+'&mkey='+songName+']'+decodeURIComponent(songName).replace(/\+/g," ")+'[/url]---([url=plugin.php?id=qarx_music:diange&mkey='+songAuthor+']'+decodeURIComponent(songAuthor).replace(/\+/g," ")+'[/url])\n';if(!xmusic_disname){textpre='';}if(xmusic_big){var txt='[flash='+xmusic_width+',118]http://www.xiami.com/widget/8663058_'+songId+',_'+xmusic_width+'_160_'+xmusic_mc+'_'+xmusic_bc+'_'+xmusic_auto+'/multiPlayer.swf[/flash]'}else{var txt='[flash=257,33]http://www.xiami.com/widget/0_'+songId+'/singlePlayer.swf[/flash]'}txt=textpre+txt;if(wysiwyg){txt=txt.replace(/\r?\n/g,'<br />')}insertText(txt,false);hideMenu('','win')}function musicPlay(songId,songName){$('xmmp3play').innerHTML='<iframe src="http://www.qaxxg.cn/xiamilisten.php?songid='+songId+'&songname='+songName+'&mc='+xmusic_mc+'&bc='+xmusic_bc+'"; width="460px" height="160px" scrolling="no" frameborder="0"  hspace="0" allowtransparency="true" vspace="0"></iframe>'}function pagerView(dataCount,currentPage){var __musicListPager='<div class="pages" id="music_pager"><ul><li class="prevpage"><a href="javascript:void(0);" onFocus="this.blur()" unselectable="on" title="��һҳ" id="'+(currentPage<=1?1:currentPage-1)+'">��һҳ</a></li>';var __totalPage=dataCount/8;__totalPage=__totalPage>parseInt(__totalPage)?parseInt(__totalPage)+1:parseInt(__totalPage);var __forLength=currentPage>10?(currentPage>1000?2:3):4;var __forStep=2;var __forStart=(__totalPage>4&&currentPage>__forStep)?(currentPage<__totalPage-__forLength?currentPage-__forStep:__totalPage-__forLength):1;var __forEnd=__forStart+__forLength<__totalPage+1?__forStart+__forLength+1:__totalPage+1;if(__totalPage>4&&currentPage>__forStep+1)__musicListPager+='<li><a href="javascript:void(0)" onFocus="this.blur()" unselectable="on" title="1" id="page_to_1">1...</a></li>';for(var i=__forStart;i<__forEnd;i++){if(currentPage==i){__musicListPager+='<li><a href="javascript:void(0)" onFocus="this.blur()" unselectable="on" title="'+i+'" id="page_to_'+i+'" style="background-color:#839B1B; border:1px solid #839B1B;color: #FFFFFF">'+i+'</a></li>'}else{__musicListPager+='<li><a href="javascript:void(0)" onFocus="this.blur()" unselectable="on" title="'+i+'" id="page_to_'+i+'" >'+i+'</a></li>'}}if(__forEnd<__totalPage)__musicListPager+='<li><a href="javascript:void(0)" onFocus="this.blur()" unselectable="on" title="'+__totalPage+'" id="page_to_'+__totalPage+'">...'+__totalPage+'</a></li>';if(currentPage<__totalPage){currentPage++;__musicListPager+='<li class="nextpage"><a href="javascript:void(0)" onFocus="this.blur()" unselectable="on" title="��һҳ" id="page_to_'+currentPage+'">��һҳ</a></li>'}__musicListPager+='<li class="lastpage"><a href="javascript:void(0)" onFocus="this.blur()" unselectable="on" title="���һҳ" id="page_to_'+__totalPage+'">���һҳ</a></li></ul></div>';return __musicListPager}