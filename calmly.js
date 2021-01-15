main(function () {
  
  
  
 english_messages={
"appName": {
    "message": "Calmly Writer",
    "description": "Calmly Writer"
  },
  "appDesc": {
    "message": "The best way to focus on writing", 
    "description":"The best way to focus on writing"
},
"words": {
  "message":"Words"
},
"characters": {
  "message":"Characters"
},
"readingtime": {
  "message":"Reading Time"
},
"selectedtext": {
  "message":"Selected text"
},
"closemsg": {
  "message":"Close Menu"
},
"newmsg": {
  "message":"New"
},
"openmsg": {
  "message":"Open"
},
"savemsg": {
  "message":"Save"
},
"saveasmsg": {
  "message":"Save"
},
"insertpicturemsg": {
  "message":"Insert Picture"
},
"prfocusmode": {
  "message":"Focus Mode"
},
"fullscreenmsg": {
  "message":"Toggle Full Screen"
},
"printmsg": {
  "message":"Print"
},
"aboutmsg": {
  "message":"About Calmly Writer"
},
"exitmsg": {
  "message":"Exit"
},
"documentchanges": {
  "message":"The document contains changes that have not been saved."
},
"discardmsg": {
  "message":"Discard changes and exit"
},
"cancelmsg": {
  "message":"Cancel"
},
"acceptmsg": {
  "message":"Accept"
},
"untitledmsg": {
  "message":"untitled"
},
"okdiscardmsg": {
  "message":"Ok, discard changes"
},
"errorsavingmsg": {
  "message":"An error occurred while saving the document. Please choose another location."
},
"pictureformatmsg": {
  "message":"Picture format not supported."
},
"invalidfilemsg": {
  "message":"Invalid file format."
},
"savedmsg": {
  "message":"Saved"
},
"enterurlmsg": {
  "message":"Enter URL"
},
"htmlsourceclosemsg": {
  "message":"Close"
},
"preferencesmsg": {
  "message":"Preferences"
},
"prtextwidth": {
  "message":"Text width"
},
"prnarrow":{
  "message":"Narrow"
},
"prmedium":{
  "message":"Medium"
},
"prwide":{
  "message":"Wide"
},
"prsaveas": {
  "message":"Format"
},
"prtxt":{
  "message":".txt/.md"
},
"prhtm":{
  "message":".htm"
},
"prdocx":{
  "message":".docx"
},
"prfont":{
  "message":"Font"
},
"prdroid":{
  "message":"Droid Serif"
},
"prcousine":{
  "message":"Cousine"
},
"propensans":{
  "message":"Open Sans"
},
"prdark":{
  "message":"Dark mode"
},
"pron":{
  "message":"On"
},
"proff":{
  "message":"Off"
},
"prscreen":{
  "message":"Screen"
},
"prsmartpunctuation":{
  "message":"Smart punctuation"
},
"prsmartquotes":{
  "message":"Quotes and apostrophes"
},
"prsmartdash":{
  "message":"En, Em Dashes"
},
"prsmartellipses":{
  "message":"Ellipses"
},
"prformatting":{
  "message":"Formatting"
},
"prtoolbar":{
  "message":"Popup toolbar"
},
"openlocalfile":{
  "message":"Import"
},
"removelocalfile":{
  "message":"Remove"
},
"undoremove":{
  "message":"Undo"
},
"undoremovemsg":{
  "message":"The document has been removed"
},
"syncmsg":{
  "message":"Synchronizing"
},
"areyousuremsg":{
  "message":"Are you sure?"
},
"yesmsg":{
  "message":"Yes"
},
"nomsg":{
  "message":"No"
},
"prasterisk":{
  "message":"Start a bulleted list with *"
},
"prnumbered":{
  "message":"Start an ordered list with 1."
},
"prfontsize":{
  "message":"Font size"
},
"prfontsmall":{
  "message":"Small"
},
"prfontmedium":{
  "message":"Medium"
},
"prfontlarge":{
  "message":"Large"
},
"prmarginparagraphs":{
  "message":"Margin between paragraphs"
},
"rssmsg":{
  "message":"Publish"
},
"prdyslexic":{
  "message":"OpenDyslexic mode"
},
"prdyslexicregular":{
  "message":"Standard"
},
"prdyslexicmono":{
  "message":"Monospaced"
},
"customizationmsg":{
  "message":"Customization"
},
"prcloudsaving":{
  "message":"Cloud Saving"
},
"prtypesound":{
  "message":"Typewriter sound"
},
"prtextcaret":{
  "message":"Text Caret"
},
"prautocapitalization":{
  "message":"Auto-Capitalization"
},
"przerowidthnonjoiner":{
  "message":"Insert zero-width non-joiner with shift+space"
},
"prwordcounter":{
  "message":"Word counter always visible"
},
"recentmsg":{
  "message":"Recent"
},
"backupmsg":{
  "message":"Backups"
},
"unsavedmsg":{
  "message":"Unsaved"
}


}


  preferencesobj={
    prtextwidth:'prmedium',
    prfont:'prdroid',
    prdark:'proff',
    prsmartquotes:'pron',
    prsmartdash:'pron',
    prsmartellipses:'pron',
    prtoolbar:'pron',
    prfocusmode:'proff',
    prasterisk:'pron',
    prnumbered:'pron',
    prfontsize:'prfontmedium',
    prmarginparagraphs:'pron',
    prdyslexic:'proff',
    prcloudsaving:'pron',
    prtypesound:'proff',
    prtextcaret:'default',
    prdefaultformat:'cml',
    prautocapitalization:'proff',
    prwordcounter:'proff',
    prsaveas:'prtxt',
    przerowidthnonjoiner:'proff'
  };
  preventhidetooltip=false;
  menuvisible=true;
  lastmousex=0;
  lastmousey=0;
  menuopen=false;
  filemanageropen=false;
  preferencesopen=false;
  saveasopen=false;
  documenttitle=getMessage("untitledmsg");
  documentid=raceme._generateId();
  documentDriveId='';
  fullscreen=false;
  mainarea=by('id:main');
  wrapper=by('id:wrapper');
  editor=new Editor(mainarea,wrapper);
  marcas=new GrapeGroup();
  current_mark=0;
  topshadow=by('id:topshadow');
  bottomshadow=by('id:bottomshadow');
  wrappergroup=new GrapeGroup();
  wrappergroup.push(wrapper);
  wrappergroup.push(topshadow);
  wrappergroup.push(bottomshadow);
  calmlylogo=by('id:calmlylogo');
  options=by('id:options');
  distancia_wheel=100;
  direccion_wheel=0;
  menuanimation=null;
  scrollanimation=null;
  dbautosave=null;
  dbcurrent=null;
  dblocalfiles=null;
  syncing_files=[];
  canautosave=true;
  main_padding_bottom=150;
  
  timer_links_openable=null;
  timer_links_enter=null;
  countertimeout=null;

  //sonidos
  mp3_backspace=by('id:mp3-backspace').seed;
  mp3_key_01=by('id:mp3-key-01').seed;
  mp3_key_02=by('id:mp3-key-02').seed;
  mp3_key_03=by('id:mp3-key-03').seed;
  mp3_key_04=by('id:mp3-key-04').seed;
  mp3_sound_keys=[by('id:mp3-key-new-01').seed,by('id:mp3-key-new-02').seed,by('id:mp3-key-new-03').seed,by('id:mp3-key-new-04').seed,by('id:mp3-key-new-05').seed];
  mp3_whatsound=[]
  var currsound=0;
  for (var h=0;h<300;h++) {
    mp3_whatsound.push(mp3_sound_keys[currsound]);
    currsound++;
    if (currsound==5) currsound=0;
  }
  mp3_return=by('id:mp3-return').seed;
  mp3_return_new=by('id:mp3-return-new').seed;
  mp3_scrollDown=by('id:mp3-scrollDown').seed;
  mp3_scrollUp=by('id:mp3-scrollUp').seed;
  mp3_space=by('id:mp3-space').seed;
  mp3_space_new=by('id:mp3-space-new').seed;
  
  useruilanguage=window.navigator.userLanguage || window.navigator.language;
  
  local_conflicting_detector={name:'',time:new Date().getTime()};
  
  markdowntextext=['txt','text','markdown','mdown','mkdn','md','mkd','mdwn','mdtxt','mdtext'];
 
  searchfilemanagerinput=by('id:searchfilemanagerinput');
  // i18n  -----------------------------
  options.by('class:menumsg').each(function() {if (this.id()) this.text(getMessage(this.id()));});
  
  //if (chrome.i18n.getUILanguage) moment.locale(chrome.i18n.getUILanguage());
  

  var defaultdirection="ltr";
    try {
      if (document.defaultView.getComputedStyle(document.documentElement,null).direction) {
        defaultdirection=document.defaultView.getComputedStyle(document.documentElement,null).direction;
      }
      mainarea.style('direction',defaultdirection);
  } catch(e) {

  }
  
 

  
  by('id:save_msg').text(getMessage('savedmsg'));
 
  by('id:remove_button').text(getMessage('removelocalfile'));
  by('id:yes_remove_button').text(getMessage('yesmsg'));
  by('id:no_remove_button').text(getMessage('nomsg'));
  by('id:documentremoved_msg').text(getMessage('areyousuremsg'));

  // resize window
  window.onresize=resize_window;
 



  filemanager=new Filemanager(function () {
            by('id:splash_screen').animate(200).opacity(0).done(function () {this.remove();});
            if (this.isOK && preferencesobj['prcloudsaving']=='pron') {
              //by('id:opsavedirect').hide();
              documenttitle=getMessage("untitledmsg");
              
            }
            by('body').item(0).addChild(new Grape('input','html').id('filebt').attr('name','filebt').attr('type','file').style('display','none').change(abrir_fichero));
            by('body').item(0).addChild(new Grape('input','html').id('insertbt').attr('name','insertbt').attr('type','file').style('display','none').change(insertar_imagen));

            
          


           
            by('id:oppreferences').clic(preferences_window);
            

            

            by('body').item(0).mousemove(showmenus);

            




            window.onkeydown=function (e) {window_onkeydown(e);}

            wrapper
              .mousedown(function (e) {
                if (e.button && e.button!=0) return false; // Para que no pase cuando se presiona el boton derecho o central
                
                editor.restoreSelection();
                editor.disableZoomOut(e);
                 
                  
                
                
              })
              .click(function (e) {
                 hide_tooltip_links_openable();
                 
                 if (!e.target) {
                    editor.unfocusmode();
                  } else {
                    if (!isDescendant(mainarea.seed,e.target) && e.target!=mainarea.seed) {
                      editor.unfocusmode();
                    } else {
                      editor.focusmode();
                    }
                }
                 if (menuopen) calmlylogo.click();
                      var ob=new Grape(e.target);
                      if (ob.tagName()=='DIV' && (ob.id()=='wrapper' || ob.id()=='frame_options' || ob.id()=='main')) {
                        editor.removeStyles();
                        if (window.getSelection().toString()=='') editor.hideTooltip();
                      }
                      if (window.getSelection().toString()=='') editor.restoreSelection();

                      mainarea.focus();

              },'wrclic',false)
              .mouseup(function (e) {
                if (mainarea.seed===document.activeElement) editor.showtooltip(e);
              });

            



            by('id:opback').click(function () {wrapper.click();});

            by('id:opnew').click(function () {
              new_doc();
            });



            by('id:opopen').click(function () {
                
                  if (menuopen) {
                    if (filemanageropen==false) showhidefilemanager();  
                  } else {
                    setTimeout(function () {calmlylogo_clic();showhidefilemanager();},400);
                    //setTimeOut(function () {showhidefilemanager();},300);  
                  }
                  
                
            });
            by('id:open_local_file').clic(function () {by('id:filebt').clic();});
            if (isCalmlyOffline) {
              by('id:subopendrive').clic(function () {alert_window('Sorry, Calmly Writer can not open Google Drive files while it is running offline.');});
            } else {
              by('id:subopendrive').clic(function () {TryToCreatePicker();});
            }
            

            by('id:opsave').click(function () {
              if (menuopen) {
                    if (saveasopen==false) saveas_window();  
                  } else {
                    
                    setTimeout(function () {calmlylogo_clic(); saveas_window();},400);
          
                  }
            });

           

            by('id:opinsert')
              .clic(function () {
                hidefilemanager();
                by('id:insertbt').click();
              });






            by('id:opfull').click(function () {
             
              if (is_full()==false) {

                 requestFullScreen();
                 setTimeout(_showmenus,500);
              } else {
                 exitFullScreen();
                 if (menuopen) forceclosemenu(true);
                 setTimeout(_showmenus,500);
              }
            });

            

            by('id:opprint')
              .clic(function () {
              window.print();
              });


            wrapper.scroll(scrollEffect);
            by('body').item(0).scroll(function (e) {forceclosemenu(true);});
            wrapper.mousewheel(function (e) {/*editor.unfocusmode();*/ wrapper.removeClass('disablescroll');});


            

            searchfilemanagerinput
                .input(dosearchfilemanager)
                .focus(function () {editor.hideTooltip();})

            by('id:stopsearchfilemanager').clic(function () {
              searchfilemanagerinput.value('').input().focus();

            });


            
            



            

            
            

            

            calmlylogo.clic(calmlylogo_clic);



            
            _showmenus();
            mainarea.focus();

            document.execCommand("outdent");
            document.execCommand("formatBlock", false, "p");
            editor.documentsaved=true;
            
            updatewordcounter();
            showcalmlylogo(true);

            getlocalstorage('preferencesobj', function(result){
                    if (result) preferencesobj=result;
                    applyPreferences();
            });
            var dropZone = document.getElementById('wrapper');
            dropZone.addEventListener('dragover', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                evt.dataTransfer.dropEffect = 'copy';
            }
              , false);
            dropZone.addEventListener('drop', function (evt) {
              evt.stopPropagation();
              evt.preventDefault();
              var files = evt.target.files || evt.dataTransfer.files;
              if (files[0]) leer_contenido_fichero(files[0]);  
              
            }, false);


          



           
            
  });



});



























function new_doc (close_menu) {
      editor.documentsaved=true;
      
      canautosave=false;
      editor.mainarea.clear();
      documenttitle=getMessage("untitledmsg");
      documentDriveId='';
      if (filemanager.isOK && preferencesobj['prcloudsaving']=='pron') {
        documentid=raceme._generateId();
        canautosave=true;
      } 
     
      //by('id:titletext').value(documenttitle);
      if (typeof close_menu!=='boolean' || close_menu!==false) {
        wrapper.click();
      } else {
        updatewordcounter();
      }
      mainarea.focus();

      document.execCommand("outdent");
      document.execCommand("formatBlock", false, "p");
      wrapper.style('top','0px');
      editor.documentsaved=true;
      
      deleteandinitautosave();
}



function resize_window (closemenu) {
hide_tooltip_links_openable();
wrapper.removeClass('disablescroll');
setTimeout(function () {
      adapt_main_padding_bottom();
      editor.hideTooltip();
      if (menuopen && (typeof closemenu==='undefined' || closemenu==true)) forceclosemenu(true);
           
            by('id:opback').style('display','block');
            by('body').item(0).style('border-width','0px');
            if (menuopen==false) showcalmlylogo(true);
            
            wrapper.style('top','0px');
            
            options.style('top','0px');
            by('id:preferences_window').style('top','0px');
            by('id:file_manager').style('top','0px');
            by('id:saveas_window').style('top','0px');
            topshadow.style('top','-15px');


          
          editor.marginImgs();
          editor.interactionImgs();

    scrollEffect();
   
},0);

}

function adapt_main_padding_bottom() {
  main_padding_bottom=Math.round(window.innerHeight*0.5);
  mainarea.style('padding-bottom',main_padding_bottom+'px');
}

function make_links_openable() {
  hide_tooltip_links_openable();
  var tool_open=by('id:tooltip_make_links_openable');
  tool_open.removeEvent();
  tool_open.mouseenter(function () {
    if (menuopen==false) tool_open._is_hover_openable_link=true;
  },'enter_tool_open');
  tool_open.mouseleave(function () {
    tool_open._is_hover_openable_link=false;
        if (timer_links_openable) clearTimeout(timer_links_openable);
        timer_links_openable=setTimeout(function () {
          if (tool_open._is_hover_openable_link==false) {
            tool_open.animate(200).opacity(0).done(function () {this.style('display','none');});
          }
        },1800);
  },'leave_tool_open');
  tool_open.clic(function () {
    window.open(this._url_openable_link);
  },'clic_links_openable')
  
  mainarea.by('a').removeEvent();
  mainarea.by('a').each(function () {
      this.mousemove(function () {
        if (editor.editor_tooltip.style('display')=='none' && menuopen==false) {
          if (timer_links_openable) clearTimeout(timer_links_openable);
          if (tool_open._is_hover_openable_link==false) {
            tool_open._is_hover_openable_link=true;
            if (timer_links_enter) clearTimeout(timer_links_enter);
            tool_open._url_openable_link=this.attr('href');
            tool_open.attr('title',this.attr('href'));
            var _this=this;
            timer_links_enter=setTimeout(function () {
              if (editor.editor_tooltip.style('display')=='none' && menuopen==false) {
                var bbb=_this.getBBox();
                var t_wrapper=parseInt(wrapper.style('top'));
                tool_open.style('top',Math.max(bbb.y-24-wrapper.scrollTop()+t_wrapper,52)+'px');
                tool_open.style('left',(bbb.x)+'px');
                tool_open.style('display','block');
                if (tool_open.opacity()==0) tool_open.animate(200).opacity(1);   
              } else {
                hide_tooltip_links_openable();
              } 
            },300);
            
          }
          
        } else {
          hide_tooltip_links_openable();
        }
        
      },'move_links_openable')
      .mouseleave(function () {
        if (timer_links_enter) clearTimeout(timer_links_enter);
        tool_open._is_hover_openable_link=false;
        if (timer_links_openable) clearTimeout(timer_links_openable);
        timer_links_openable=setTimeout(function () {
          if (tool_open._is_hover_openable_link==false) {
            tool_open.animate(200).opacity(0).done(function () {this.style('display','none');});
          }
        },1800);

      },'leave_links_openable')

  });
}
function hide_tooltip_links_openable() {
  if (timer_links_openable) clearTimeout(timer_links_openable);
  timer_links_openable=null;
  if (timer_links_enter) clearTimeout(timer_links_enter);
  timer_links_enter=null;
  var tool_open=by('id:tooltip_make_links_openable');
  tool_open._is_hover_openable_link=false;
  tool_open.opacity(0).style('display','none');
}

function window_onkeydown (e) {

    if ((e.ctrlKey) && e.keyCode===80) {
      by('id:opprint').clic();
    } else if ((e.ctrlKey) && (e.keyCode=='79' || e.keyCode=='111')) {
          e.preventDefault();
          e.cancelBubble = true;
          raceme.by('id:opopen').click();
          return false;
       } else if ((e.ctrlKey) && (e.keyCode=='115' || e.keyCode=='83')) {
          e.preventDefault();
          e.cancelBubble = true;
          editor.saveSelection();
          by('id:opsave').click();
         return false
       }
}


function opsave_clic () {
        hidefilemanager();
        hidepreferences_window();
        var dctitle=by('id:inputtextname').value().trim();
        if (dctitle=='') dctitle="untitled";
        var file_ext=getFileExtension(dctitle);
        
        if (!file_ext) {
          if (preferencesobj['prsaveas']=='prdocx') {
            dctitle+='.docx';
          } else if (preferencesobj['prsaveas']=='prhtm') {
            dctitle+='.html';
          } else {
            dctitle+='.txt';
          }
        } else {
          if (file_ext=='docx') {
            preferencesobj['prsaveas']='prdocx';
          } else if (file_ext=='htm' || file_ext=='html') {
            preferencesobj['prsaveas']='prhtm';
          } else {
            preferencesobj['prsaveas']='prtxt';
          }
          applyPreferences();
        }
        var content=getContenttoSave(dctitle);
        var blob;
        if (preferencesobj['prsaveas']=='prdocx') {
          blob = new Blob(content, {type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"});
        } else {
          blob = new Blob(content, {type: "text/html;charset=UTF-8"});  
        }
        
        saveAs(blob, dctitle);
        documenttitle=dctitle;
        wrapper.click();

}
function opsave_drive_clic() {
        hidefilemanager();
        hidepreferences_window();
        var dctitle=by('id:inputtextname').value();
        if (dctitle.trim()=='') dctitle="untitled";
        var file_ext=getFileExtension(dctitle);
      
        if (!file_ext) {
          if (preferencesobj['prsaveas']=='prdocx') {
            dctitle+='.docx';
          } else if (preferencesobj['prsaveas']=='prhtm') {
            dctitle+='.html';
          } else {
            dctitle+='.txt';
          }
        } else {
          if (file_ext=='docx') {
            preferencesobj['prsaveas']='prdocx';
          } else if (file_ext=='htm' || file_ext=='html') {
            preferencesobj['prsaveas']='prhtm';
          } else {
            preferencesobj['prsaveas']='prtxt';
          }
          applyPreferences();
        }
        if (dctitle!=documenttitle) {
          documenttitle=dctitle;
          documentDriveId='';
        }
        var content=getContenttoSave(dctitle);
        if (preferencesobj['prsaveas']=='prdocx') {
          if (pickerApiLoaded && oauthToken) {
           blobToBase64(content[0],function (r) {
             uploadFile(r,dctitle);
              wrapper.click();
          });
         } else {
            getAuthPreUploadDrive();
         }
        } else {
          uploadFile(content[0],dctitle);
          wrapper.click();
        }
}








function dosearchfilemanager() {
  by('id:remove_button').removeEvent();
  by('id:remove_button').addClass('remove_button_disabled');
  by('class:current_selected_file').removeClass('current_selected_file');
  var val=this.value().trim();
  if (val=='') {
    by('id:lupasearchfilemanager').show();
    by('id:stopsearchfilemanager').hide();
  } else {
    by('id:lupasearchfilemanager').hide();
    by('id:stopsearchfilemanager').show();
  }
  var vals=val.split(" ");
  by('id:file_list').getChildren().each(function () {
  
      if (val=='') {
        this.show();
      } else {
        var coincide=true;
        for (var g=0; g<vals.length;g++) {
          if (this.firstChild().text().toUpperCase().indexOf(vals[g].toUpperCase())==-1) {
            coincide=false; break;
          }
        }
        if (coincide==false) {
          this.hide();
        } else {
          this.show();
        }
      }
  });
}



function getWords(elm) {
var words='';
var hijos=elm.childNodes;
for (var i=0; i<hijos.length;i++) {
    if (hijos[i].nodeType==3) {
     words+=hijos[i].nodeValue.split('\n').join(' ');
    } else if (hijos[i].nodeType==1) {
      words+=getWords(hijos[i]);
    }

}
name=elm.tagName;
if (name=='P' || name=='BLOCKQUOTE' || name=='UL' || name=='OL' || name=='LI' || editor.HTMLheaders.indexOf(name)!=-1 || name=='DIV' || name=='TR' || name=='TABLE' || name=='TD' || name=='THEAD' || name=='TBODY' || name=='TH' || name=='BR' || name=='HR') words+=' ';
return words;
}





function calmlylogo_clic(e) {
  editor.disableZoomOut();
  hide_tooltip_links_openable();
  current_mark=0;
  
  editor.unfocusmode();
  editor.hideTooltip();
  hidefilemanager();
  hidepreferences_window();
  hidesaveas_window();
  if (menuopen==false) {
      menuopen=true;
      updatewordcounter();
      by('id:countdiv').remove().removeClass('alwaysvisible').addTo(by('id:options'));
 
            showcalmlylogo(false);
            options.opacity(1).style('left','0px');
            if (menuanimation) menuanimation.stop();
            menuanimation=wrappergroup.animate(150,200).ease('out').style('left','482px').style('right','-'+getRightDisplacement(482)+'px');


      


  } else {
      forceclosemenu();


  }
};

function getRightDisplacement(right_mov) {
      var mainareawidth=parseInt(mainarea.style('width'))+66;

      var wininner=window.innerWidth;
      if (wininner-right_mov>mainareawidth) {
        return 0;
      }

      return mainareawidth-(wininner-right_mov);
}

function updatewordcounter() {
      var seltext=window.getSelection().toString();
      var splittext;
      if (seltext=='') {
        splittext=getWords(mainarea.seed).trim();
      } else {
        splittext=seltext.split('\n').join(' ');
      }
      var regex_1 = /\s+([;â€“â€”:â€¦.,!â€˜â€™â€œâ€"'-?Â¿Â¡:={}\(\)_\[\]])/g;
      var regex_2 = /([;â€“â€”:â€¦.,!â€˜â€™â€œâ€"'-?Â¿Â¡:={}\(\)_\[\]])+\s/g;
      var regex_3=/([;â€“â€”:â€¦.,!â€˜â€™â€œâ€"'-?Â¿Â¡:={}\(\)_\[\]])/g;
      var splitwords=splittext.replace(regex_1, ' ').replace(regex_2,' ').replace(regex_3,'').replace(/\s{2,}/g, ' ').split(' ');
      for (var h=0; h<splitwords.length; h++) {
        if (splitwords[h]=='') {
            splitwords.splice(h,1);
            h--;
        }
      }
      var splitchars=splittext.split(' ').join('');
      var numchars=splitchars.length;
      var numwords;
      numwords=splitwords.length;

      // 270 word per minute

      var inforeading='<span class="countline">'+numwords.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' '+getMessage("words")+'</span><span class="countline">'+numchars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' '+getMessage("characters")+'</span><span class="countline">'+getReadingTime((numwords/270)*60)+' '+getMessage("readingtime")+'</span>';
      if (seltext!='') inforeading='<span style="opacity:0.7" class="countline">'+getMessage("selectedtext")+'</span><br />'+inforeading;

      by('id:countdiv').seed.innerHTML=inforeading;
}
function callwordcounter() {
  if (preferencesobj['prwordcounter'] && preferencesobj['prwordcounter']=='pron') {
    if (countertimeout) clearTimeout(countertimeout);
        countertimeout=setTimeout(function () {
          updatewordcounter();
        },50);
      }
}

function showhidefilemanager() {
  hidepreferences_window();
  if (menuopen) {
    if (filemanageropen==false) {
        showfilemanager();
    } else {
        hidefilemanager();
    }
  }
}

function showfilemanager() {

 if (filemanageropen==false) {
  
  
  
    by('id:stopsearchfilemanager').clic();
    by('id:documentremoved_msg').hide();
    by('id:yes_remove_button').hide();
    by('id:no_remove_button').hide();
    by('id:remove_button').show();
     if (menuanimation) menuanimation.stop();
     var fil_lis=by('id:file_list');
     fil_lis.clear();
     new Grape('img','html').attr('src','img/loading.png').opacity(0.5).style('display','block').style('margin','auto').style('margin-top','20px').addTo(fil_lis);
     
     filemanager.getGrapes();

      by('id:file_manager').show();
      hidepreferences_window();
      hidesaveas_window();
      


      menuanimation=wrappergroup.style('left','42px').animate(150).ease('out').style('left','482px').style('right','-'+getRightDisplacement(482)+'px');
      filemanageropen=true;
      by('id:opopen').addClass('selected_option');
      
  }

}

function removeFileItem(gr) {
 

 filemanager.removeFile(gr._calmly_nom_doc+gr._calmly_id_doc+'.cml', function () {
                      
                      by('id:remove_button').removeEvent();
                      by('id:remove_button').addClass('remove_button_disabled').show();
                       by('id:documentremoved_msg').hide();
                      by('id:no_remove_button').hide();
                     by('id:yes_remove_button').hide();
                      new_doc(false);
                      editor.mainarea.blur();

                     
  })
}

function hidefilemanager() {

  if (filemanageropen) {
     by('id:opopen').removeClass('selected_option');
      if (menuanimation) menuanimation.stop();
      menuanimation=wrappergroup.animate(150).ease('out').style('left','482px').style('right','-'+getRightDisplacement(482)+'px').done(function () {by('id:file_manager').hide();});
      filemanageropen=false;

  } else {
    by('id:file_manager').hide();
  }
  by('id:opopen').removeClass('selected_option');
}



function showcalmlylogo (sh) {

    if (sh==true) {
      wrapper.removeClass('disablescroll');
      calmlylogo.stop().show().animate(200).ease('out').opacity(1).done(function () {});
    } else {
      calmlylogo.stop().animate(200).ease('out').opacity(0).done(function () {this.hide();});
    }



}

function forceclosemenu(instant) {

  menuopen=false;
  if (menuanimation) menuanimation.stop();
  if (typeof instant==='undefined' || instant==false) {
    menuanimation=wrappergroup.animate(150).ease('out').style('left','0px').style('right','0px').done(function () {
      if (preferencesobj['prwordcounter'] && preferencesobj['prwordcounter']=='pron') by('id:countdiv').remove().addClass('alwaysvisible').addTo(by('id:wrapper'));
      options.style('left','-482px'); showcalmlylogo(true); by('id:file_manager').hide(); by('id:preferences_window').hide();by('saveas_window').hide(); editor.marginImgs();});
  } else {
  wrappergroup.style('left','0px').style('right','0px');
  options.style('left','-482px'); showcalmlylogo(true); by('id:file_manager').hide(); by('id:preferences_window').hide();by('saveas_window').hide();
  editor.marginImgs();
  if (preferencesobj['prwordcounter'] && preferencesobj['prwordcounter']=='pron') by('id:countdiv').remove().addClass('alwaysvisible').addTo(by('id:wrapper')); 
  }
}




function scrollEffect(e) {


    hide_tooltip_links_openable();


    if (preventhidetooltip==false) editor.hideTooltip();
    preventhidetooltip=false;

    if (wrapper.seed.scrollTop>0) {
      if (topshadow.style('display')=='none') {

          topshadow.stop().style('display','block').animate(482).style('opacity','1');


      }

    } else  {
      if (topshadow.style('display')=='block') {

        topshadow.stop().style('opacity','0').style('display','none');


     }
    }

    if (wrapper.seed.scrollTop+window.innerHeight<mainarea.seed.clientHeight-main_padding_bottom) {
      if (bottomshadow.style('display')=='none') {
        bottomshadow.stop().style('display','block').animate(482).style('opacity','1');


        }
    } else {
      if (bottomshadow.style('display')=='block') {
        bottomshadow.stop().style('opacity','0').style('display','none');
      }
    }



}

function ajustarImg() {
  var ratio=1;
  if ((window.innerWidth/this.seed.width)>(window.innerHeight/this.seed.height)) {
  ratio=window.innerWidth/this.seed.width;
  } else {
  ratio=window.innerHeight/this.seed.height;
  }

  var nuevo_width=this.seed.width*ratio;
  var nuevo_height=this.seed.height*ratio;
  this.style('position','absolute').style('left','-'+((nuevo_width-window.innerWidth)/2)+'px').style('top','-'+((nuevo_height-window.innerHeight)/2)+'px');
 this.width(nuevo_width);
 this.height(nuevo_height);
 if (this.opacity()==0) {
    this.animate(500).ease('out').opacity(0.8);
 }

}


function alert_window(text, confn, contxt) {
editor.mainarea.blur();
if (by('id:alert_window')!=null) by('id:alert_window').remove();
var al=new Grape('div','html').id('alert_window');
al.style('overflow','hidden').style('width','100%').style('height','100%').style('position','absolute').style('top','0px').style('left','0px').style('background-color','rgba(0,0,0,0.7)').style('z-index','2000');

by('body').item(0).addChild(al);
var wn=new Grape('div','html')
  .style('max-width','600px')
  .style('margin','auto')
  .style('position','relative')
  .opacity(0)
  .style('background-color','rgb(245,245,245)')
  .style('padding','20px')
  .style('box-shadow','0px 0px 7px rgb(0, 0, 0)')
  .style('min-height','150px')
  .style('font-size','16px')
  .text(text)
  .addTo(al);
var bt=new Grape('div','html')
  .style('display','block')
   .style('width','200px')
  .style('margin-top','20px')
  .style('text-align','center')
  .style('border-radius','2px')
  .style('background-color','rgb(0,179,114)')
  .style('color','white')
  .style('padding','8px')
  .style('position','absolute')
  .style('right','20px')
  .style('bottom','20px')
  .addTo(wn);

if (typeof confn==='undefined') {
  bt.text(getMessage("acceptmsg")).style('right','20px');
} else {
  bt.text(getMessage("cancelmsg")).style('left','20px');
  var oklink=new Grape('a','html')

  .style('display','block')

  .style('text-align','right')
  .addClass('oklink')
  .style('margin-bottom','8px')
  .style('position','absolute')
  .style('right','20px')
  .style('bottom','20px')
  .text(contxt)
  .addTo(wn);
  oklink.clic(function () { bt.click(); confn.call();});
}

wn.style('top',((window.innerHeight/2)-(wn.seed.clientHeight/2))+'px');
wn.animate(500).ease('out').opacity(1).style('top','-=40px');
//by('id:titletext').focus().blur();
bt.click(function () {
    al.remove();
    wrapper.clic();
});
al.click(function (e) {
if (e.target==e.currentTarget) bt.click();
},'alclick',false);
al.mousemove(function (e) {
e.preventDefault();
});



}

function code_window() {
if (by('id:alert_window')!=null) by('id:alert_window').remove();
var al=new Grape('div','html').id('alert_window');
al.style('overflow','hidden').style('width','100%').style('height','100%').style('position','absolute').style('top','0px').style('left','0px').style('background-color','rgba(0,0,0,0.7)').style('z-index','2000');

by('body').item(0).addChild(al);
var wn=new Grape('div','html')
  .style('left','40px')
  .style('top','70px')
  .style('bottom','10px')
  .style('right','40px')
  .style('position','absolute')
  .opacity(0)
  .style('background-color','rgb(245,245,245)')
  .style('padding','20px')
  .style('box-shadow','0px 0px 7px rgb(0, 0, 0)')
  .style('font-size','16px')
  .addTo(al);
var bt=new Grape('div','html')
  .style('display','block')
  .style('width','200px')
  .style('margin-top','20px')
  .style('text-align','center')
  .style('border-radius','2px')
  .style('background-color','rgb(0,179,114)')
  .style('color','white')
  .style('padding','8px')
  .style('position','absolute')
  .style('left','20px')
  .style('bottom','20px')
  .text(getMessage('htmlsourceclosemsg'))
  .addTo(wn);
var code=new Grape('div','html')
  .style('left','20px')
  .style('top','20px')
  .style('bottom','80px')
  .style('right','20px')
  .style('position','absolute')
  .style('overflow','auto')
  .style('border-width','1px')
  .style('border-color','rgb(240,240,240)')
  .style('border-style','solid')
  .style('background-color','rgb(250,250,250)')
  .style('padding','10px')
  .style('-webkit-user-select','text')
  .style('user-select','text')


  .addTo(wn);

  code.seed.innerHTML='<pre><code>'+(editor.htmlCode().split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;'))+'</code></pre>';
  var range = document.createRange();
  range.selectNodeContents(code.seed);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);

wn.animate(320).ease('out').opacity(1).style('top','40px').style('bottom','40px');

bt.click(function () {
    al.remove();
    wrapper.clic();
});






}

function hidepreferences_window() {
  by('id:oppreferences').removeClass('selected_option');
  if (preferencesopen) {
     
      if (menuanimation) menuanimation.stop();
      menuanimation=wrappergroup.animate(150).ease('out').style('left','482px').style('right','-'+getRightDisplacement(482)+'px').done(function () {by('id:preferences_window').hide();});
      
  } else{
    by('id:preferences_window').hide();
  }
  preferencesopen=false;
}
function hidesaveas_window() {
  by('id:opsave').removeClass('selected_option');
  if (saveasopen) {
     
      if (menuanimation) menuanimation.stop();
      menuanimation=wrappergroup.animate(150).ease('out').style('left','482px').style('right','-'+getRightDisplacement(482)+'px').done(function () {by('id:saveas_window').hide();});
      
  } else {
    by('id:saveas_window').hide();
  }
  saveasopen=false;
}

function showpreferences_window() {

  if (preferencesopen==false) {
     if (menuanimation) menuanimation.stop();
     var pwin=by('id:preferences_window');
     by('id:file_manager').hide();
     by('id:saveas_window').hide();
     focusmode_checkbox=new Checkbox('prfocusmode');
     pwin.clear()
      .addChild(new Grape('div','html').text(getMessage('prscreen')).addClass('prTitle'))
      .addChild(focusmode_checkbox.getGrape())
      .addChild(new Checkbox('prdark').getGrape())
      .addChild(new Selector('prtextwidth',['prnarrow','prmedium','prwide']).getGrape())
      .addChild(new Selector('prfont',['prdroid','prcousine','propensans']).getGrape())
      .addChild(new Selector('prfontsize',['prfontsmall','prfontmedium','prfontlarge']).getGrape())
      .addChild(ColorSelector())
      .addChild(new Checkbox('prmarginparagraphs').getGrape())
      .addChild(new Grape('div','html').text(getMessage('prsmartpunctuation')).addClass('prTitle'))
      .addChild(new Checkbox('prsmartquotes').getGrape())
      .addChild(new Checkbox('prsmartdash').getGrape())
      .addChild(new Checkbox('prsmartellipses').getGrape())
      .addChild(new Checkbox('prautocapitalization').getGrape())
      .addChild(new Checkbox('przerowidthnonjoiner').getGrape())
      .addChild(new Grape('div','html').text(getMessage('prformatting')).addClass('prTitle'))
      .addChild(new Checkbox('prtoolbar').getGrape())
      .addChild(new Checkbox('prasterisk').getGrape())
      .addChild(new Checkbox('prnumbered').getGrape());
    
      pwin.addChild(new Grape('div','html').text(getMessage('customizationmsg')).addClass('prTitle'));
    
    
    
    if (mp3_return.play) {
      pwin.addChild(new Checkbox('prtypesound').getGrape());
    }
    pwin.addChild(new Checkbox('prwordcounter').getGrape());
    
      pwin.addChild(new Checkbox('prdyslexic').getGrape());
     pwin.addChild(new Grape('div','html').text('Extensions').addClass('prTitle'));
     
     pwin.addChild(new Grape('a','html').text('Free Grammar Checker').attr('target','_blank').attr('href','https://grammarly.go2cloud.org/aff_c?offer_id=209&aff_id=7817').attr('rel','nofollow').addClass('option'));
     pwin.addChild(new Grape('a','html').text('Typewriter sounds on Chrome').attr('target','_blank').attr('href','https://chrome.google.com/webstore/detail/typewriter/jfghikfjnjkjkdpndeecjheealfoabhc?hl=en').attr('rel','nofollow').addClass('option'));
     /*
     var coffe=new Grape("div");
     coffe.style('padding','10px').style('text-align','center').style('padding-bottom','40px');
     coffe.seed.innerHTML='<style>.bmc-button img{width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 5px 7px 10px !important;line-height: 35px !important;height:51px !important;min-width:217px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#5F7FFF !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 5px 7px 10px !important;font-size: 28px !important;letter-spacing:0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:"Cookie", cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/0tAPzKa"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:15px;font-size:28px !important;">Buy me a coffee</span></a>';
     pwin.addChild(coffe);
     */
     //pwin.addChild(new Grape('a','html').text('Plagiarism Checker & Proofreader').attr('target','_blank').attr('href','https://grammarly.go2cloud.org/aff_c?offer_id=2&aff_id=7817').attr('rel','nofollow').addClass('option'));
     
      

      pwin.show();

      
        by('id:dr_droid_selector').text(getMessage("prdroid"));
        by('id:dr_cousine_selector').text(getMessage("prcousine"));
        by('id:dr_opensans_selector').text("Open Sans");
      




      menuanimation=wrappergroup.style('left','42px').animate(150).ease('out').style('left','482px').style('right','-'+getRightDisplacement(482)+'px');
      preferencesopen=true;
      by('id:oppreferences').addClass('selected_option');


  }

}
function showsaveas_window() {
  if (saveasopen==false) {
     if (menuanimation) menuanimation.stop();
      var swin=by('id:saveas_window');
      var dctitle=documenttitle;
      //if (dctitle.lastIndexOf('.')!=-1) {
      //  dctitle=dctitle.substr(0,dctitle.lastIndexOf('.'));
      //}
      dctitle=dctitle.trim();
      if (dctitle=='') dctitle="untitled";

      var savelocalfile=new Grape('a','html').addClass('option').id('save_local_file').attr('href','#').attr('style','cursor:pointer');
      savelocalfile
        .addChild(new Grape('img','html').attr('src','img/icnsave.png'))
        .addChild(new Grape('span','html')).addClass('menumsg').text('Download');

      var savegoogledrive=new Grape('a','html').addClass('option').id('save_google_drive').attr('href','#').attr('style','cursor:pointer');
      savegoogledrive
        .addChild(new Grape('img','html').attr('src','img/icndrive.png'))
        .addChild(new Grape('span','html')).addClass('menumsg').text('Save to Google Drive');

      savelocalfile.clic(opsave_clic);
      if (isCalmlyOffline) {
        savegoogledrive.clic(function () {alert_window('Sorry, Calmly Writer can not save to Google Drive while it is running offline.')});
      } else {
        savegoogledrive.clic(opsave_drive_clic);
      }
      
      swin.clear()
      .addChild(new Grape('div','html').text('1. File').addClass('prTitle'))
      .addChild(new Grape('input','html').id('inputtextname').attr('value',dctitle))
      .addChild(new Selector('prsaveas',['prtxt','prhtm','prdocx']).getGrape())
      .addChild(new Grape('div','html').text('2. Location').addClass('prTitle'))
      .addChild(new Grape('div','html').addClass('suboptions').addChild(savelocalfile).addChild(savegoogledrive));
      
      
    

     
     swin.show();
     by('id:inputtextname').focus();
      menuanimation=wrappergroup.style('left','42px').animate(150).ease('out').style('left','482px').style('right','-'+getRightDisplacement(482)+'px');
      saveasopen=true;
      by('id:opsave').addClass('selected_option');
  }
}

function preferences_window() {
      hidefilemanager();
      hidesaveas_window();
      if (preferencesopen==false) {
        showpreferences_window();
      } else {
        hidepreferences_window();
      }
}
function saveas_window() {
  hidefilemanager();
  hidepreferences_window();
  if (saveasopen==false) {
        showsaveas_window();
      } else {
        hidesaveas_window();
      }
}

function applyPreferences() {

  if (preferencesobj['prdark'] && preferencesobj['prdark']=='pron') {
    by('body').item(0).addClass("darkmode");
  } else {
    by('body').item(0).removeClass("darkmode");
    preferencesobj['prdark']='proff';
  }

  if (preferencesobj['prfont'] && preferencesobj['prfont']=='prcousine') {
    mainarea.removeClass('droid').removeClass('opensans').addClass('cousine');
  } else if (preferencesobj['prfont'] && preferencesobj['prfont']=='propensans') { 
    mainarea.removeClass('cousine').removeClass('droid').addClass('opensans');
  } else {
    mainarea.removeClass('cousine').removeClass('opensans').addClass('droid');
    preferencesobj['prfont']='prdroid';
  }

  if (preferencesobj['prtypesound'] && preferencesobj['prtypesound']=='pron') {
    preferencesobj['prtypesound']='pron';
  } else {
    preferencesobj['prtypesound']='proff';
  }
  if (preferencesobj['prautocapitalization'] && preferencesobj['prautocapitalization']=='pron') {
    preferencesobj['prautocapitalization']='pron';
  } else {
    preferencesobj['prautocapitalization']='proff';
  }

  if (preferencesobj['przerowidthnonjoiner'] && preferencesobj['przerowidthnonjoiner']=='pron') {
    preferencesobj['przerowidthnonjoiner']='pron';
  } else {
    preferencesobj['przerowidthnonjoiner']='proff';
  }

  if (preferencesobj['prtoolbar'] && preferencesobj['prtoolbar']=='proff') {
    preferencesobj['prtoolbar']='proff';
  } else {
    preferencesobj['prtoolbar']='pron';
  }
  
    preferencesobj['prcloudsaving']='pron';
    
    trytoautosave();
  

  if (!preferencesobj['prtextcaret']) preferencesobj['prtextcaret']='default';
  if (!preferencesobj['prdefaultformat']) preferencesobj['prdefaultformat']='cml';
  if (preferencesobj['prtextcaret']=='default') {
    mainarea.removeClass('pinkcaret').removeClass('orangecaret').removeClass('greencaret').removeClass('bluecaret');
    by('class:colorpicker').removeClass('selected_colorpicker');
    by('class:default_colorpicker').addClass('selected_colorpicker');
  } else if (preferencesobj['prtextcaret']=='blue') {
    mainarea.removeClass('pinkcaret').removeClass('orangecaret').removeClass('greencaret').addClass('bluecaret');
    by('class:colorpicker').removeClass('selected_colorpicker');
    by('class:blue_colorpicker').addClass('selected_colorpicker');
  } else if (preferencesobj['prtextcaret']=='pink') {
    mainarea.removeClass('pinkcaret').removeClass('orangecaret').removeClass('greencaret').addClass('bluecaret').addClass('pinkcaret');
    by('class:colorpicker').removeClass('selected_colorpicker');
    by('class:pink_colorpicker').addClass('selected_colorpicker');
  } else if (preferencesobj['prtextcaret']=='orange') {
    mainarea.removeClass('pinkcaret').removeClass('orangecaret').removeClass('greencaret').addClass('bluecaret').addClass('orangecaret');
    by('class:colorpicker').removeClass('selected_colorpicker');
    by('class:orange_colorpicker').addClass('selected_colorpicker');
  } else if (preferencesobj['prtextcaret']=='green') {
    mainarea.removeClass('pinkcaret').removeClass('orangecaret').removeClass('greencaret').addClass('bluecaret').addClass('greencaret');
    by('class:colorpicker').removeClass('selected_colorpicker');
    by('class:green_colorpicker').addClass('selected_colorpicker');
  }

  if (preferencesobj['prtextwidth'] && preferencesobj['prtextwidth']=='prnarrow') {
     mainarea.style('max-width','550px');
     if (preferencesopen) {
        wrappergroup.style('right','-'+wrapper.style('left'));
        editor.marginImgs(); editor.interactionImgs();
        wrappergroup.style('right','-'+getRightDisplacement(482)+'px');
        editor.marginImgs(); editor.interactionImgs();
      }

  } else if (preferencesobj['prtextwidth'] && preferencesobj['prtextwidth']=='prwide') {
     mainarea.style('max-width','975px');
      if (preferencesopen) {
        wrappergroup.style('right','-'+wrapper.style('left'));
        editor.marginImgs(); editor.interactionImgs();
        wrappergroup.style('right','-'+getRightDisplacement(482)+'px');
        editor.marginImgs(); editor.interactionImgs();
      }
  } else {
   preferencesobj['prtextwidth']='prmedium';
   mainarea.style('max-width','750px');
    if (preferencesopen) {
        wrappergroup.style('right','-'+wrapper.style('left'));
        editor.marginImgs(); editor.interactionImgs();
        wrappergroup.style('right','-'+getRightDisplacement(482)+'px');
        editor.marginImgs(); editor.interactionImgs();
      }
  }

  if (!preferencesobj['prsaveas']) {
    preferencesobj['prsaveas']='prtxt';
  }

  if (preferencesobj['prfontsize'] && preferencesobj['prfontsize']=='prfontsmall') {
      by('body').item(0).removeClass("prfontsize_large").addClass('prfontsize_small');
  } else if (preferencesobj['prfontsize'] && preferencesobj['prfontsize']=='prfontlarge') {
      by('body').item(0).removeClass("prfontsize_small").addClass('prfontsize_large');
  } else {
      preferencesobj['prfontsize']='prfontmedium';
      by('body').item(0).removeClass("prfontsize_large").removeClass('prfontsize_small');
  }
  if (preferencesobj['prmarginparagraphs'] && preferencesobj['prmarginparagraphs']=='proff') {
    by('body').item(0).addClass("nomarginsbetweenP");
  } else {
    preferencesobj['prmarginparagraphs']='pron';
    by('body').item(0).removeClass("nomarginsbetweenP");
  }
  if (preferencesobj['prdyslexic'] && preferencesobj['prdyslexic']=='pron') {
    by('body').item(0).addClass("opendyslexicfont"); 
    //by('id:dr_droid_selector').text(getMessage("prdyslexicregular"));
    //by('id:dr_cousine_selector').text(getMessage("prdyslexicmono"));
  } else {
    by('body').item(0).removeClass("opendyslexicfont"); 
    //by('id:dr_droid_selector').text(getMessage("prdroid"));
    //by('id:dr_cousine_selector').text(getMessage("prcousine"));
  }

  if (preferencesobj['prwordcounter'] && preferencesobj['prwordcounter']=='pron' && !menuopen) {
    by('id:countdiv').remove().addClass('alwaysvisible').addTo(by('id:wrapper'));
  } else {
    by('id:countdiv').remove().removeClass('alwaysvisible').addTo(by('id:options'));
  }

  if (preferencesobj['prfocusmode'] && preferencesobj['prfocusmode']=='pron') {

    editor.focusmodeon=true;
    editor.unfocusmode(true);


  } else {
    preferencesobj['prfocusmode']='proff';
    editor.focusmodeon=false;
    editor.unfocusmode(false);
  }

  if (preferencesobj['prasterisk'] && preferencesobj['prasterisk']=='proff') {
    preferencesobj['prasterisk']='proff';
  } else {
    preferencesobj['prasterisk']='pron';
  }

  if (preferencesobj['prnumbered'] && preferencesobj['prnumbered']=='proff') {
    preferencesobj['prnumbered']='proff';
  } else {
    preferencesobj['prnumbered']='pron';
  }

  editor.marginImgs();



}




function abrir_fichero(e) {

if (e && e.target && e.target.files[0]) leer_contenido_fichero(e.target.files[0]);

}
function leer_contenido_fichero(file,readEntry) {
      var reader = new FileReader();
      
      reader.onerror = function () {invalid_file();};
      reader.onload = function(e) {

        documentDriveId='';
        leer_contenido_fichero_2(file.name,file.type, e.target.result);


      };
      var fi_ex=getFileExtension(file.name);
      block_screen();
      if (fi_ex=='docx') {
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsText(file);  
      }
}

function leer_contenido_fichero_2 (name, filetype, targetresult) {
        var parser;
        var doc;
        var child;

       try {
               var file_ext=getFileExtension(name);
               if (file_ext=='docx') {
                 filetype='docx';
               }  else if (filetype=='') {   
                  if (file_ext!=null && markdowntextext.indexOf(file_ext)!=-1) filetype='text/plain';
               }
               
               if (file_ext=='docx') {
                  preferencesobj['prsaveas']='prdocx';
                } else if (file_ext=='htm' || file_ext=='html') {
                  preferencesobj['prsaveas']='prhtm';
                } else {
                  preferencesobj['prsaveas']='prtxt';
                }
                applyPreferences();
               
              
                if (filetype=='docx') {
                   
                     mammoth.convertToHtml({arrayBuffer: targetresult},{styleMap: ["p[style-name='blockQuote'] => blockquote:fresh"]})
                          .then(function(result){
                              var html = '<html><body>'+result.value+'</body></html>'; 
                              unblock_screen();
                              content_2_editor(html, 'text/html', name);
                          }).done();
                
                }  else {
                  unblock_screen();
                  content_2_editor(targetresult, filetype,name);
               }




        } catch (err) {
          unblock_screen();
          console.log(err);
          invalid_file();

        }
        
}

function block_screen() {
  by('id:loader_block_screen').show();
  by('id:loader_input_block').value('').focus();
  var bar=by('id:loader_block_bar');
  bar.stop();
  bar.style('left','0px').style('right',window.innerWidth+'px');
  bar.animate(1000).ease('inout').style('right','0px').animate(1000).ease('inout').style('left',window.innerWidth+'px').done(function() {this.restart()});
}
function block_screen_set_value(val) {
  var bar=by('id:loader_block_bar');
  bar.stop();
  bar.style('left','0px');
  val=window.innerWidth-(val*window.innerWidth);
  bar.animate(50).ease('out').style('right',val);
}
function unblock_screen() {
  by('id:loader_block_screen').hide();
  by('id:loader_block_bar').stop();
}

function content_2_editor(result,filetype,name) {
                        
                       if (filetype!='text/plain') {
                          parser = new DOMParser();
                          doc = parser.parseFromString(result, "text/html");
                          child=doc.getElementsByTagName('body').item(0);
                          }

                       editor.mainarea.clear();
                       var tipo;

                       if (filetype=='text/html') {
                          tipo='html';

                       } else if (filetype=='text/plain') {
                          tipo='texto';
                       } else {
                         tipo='texto';
                         for (var d=0; d<child.childNodes.length;d++) {
                            if (child.childNodes.item(d).nodeType!=3 && !(child.childNodes.item(d) instanceof HTMLUnknownElement)) {
                              tipo='html';
                              break;
                            }
                         }
                       }
                       if (tipo=='texto') {
                       // Texto plano
                           var contenido=marked(result.split(String.fromCharCode(160)).join('&nbsp;'));
                           editor.mainarea.seed.innerHTML=contenido;
                       } else {
                       // html
                          while (child.hasChildNodes()) {
                            editor.mainarea.seed.appendChild(child.removeChild(child.firstChild));
                          }
                       }

                      editor.removeStyles();
                      editor.removeNBSP();
                      resize_window();
                      wrapper.scrollTop(26);
                      documenttitle=name;

                      if (filemanager.isOK && preferencesobj['prcloudsaving']=='pron') {
                        //if (documenttitle.lastIndexOf('.')) documenttitle=documenttitle.substr(0,documenttitle.lastIndexOf('.')); 
                        if (documenttitle.length>4 && documenttitle.substr(documenttitle.length-4,4).toUpperCase()=='.CML') documenttitle=documenttitle.substr(0,documenttitle.length-4);
                      }
                      

                      wrapper.click();

                      editor.documentsaved=true;
                      make_links_openable();
                      deleteandinitautosave();
                      
}


function insertar_imagen(e) {

var fi = e.target.files[0]; 

//by('id:insertbt').remove();
//by('body').item(0).addChild(new Grape('input','html').id('insertbt').attr('name','insertbt').attr('type','file').style('display','none').change(insertar_imagen));

  

var reader = new FileReader();
if (!fi) {
   alert_window('Picture format not supported.');
} else {
    reader.onload=function (e) {
       
        try {
                
                
               if (e.target.result.substring(0,10)=='data:image') {
               
                wrapper.click();
                document.execCommand('insertImage',false,e.target.result);
                editor.documentsaved=false;
               editor.marginImgs(); 
               editor.interactionImgs();
               trytoautosave();
               
              } else {
                 wrapper.click();
                 alert_window(getMessage("pictureformatmsg"));
              }
         
         
         
            
           
          
        
        } catch (err) {
         alert_window(getMessage("pictureformatmsg"));
        
        }
        
        
    };
    reader.onerror=function (e) {alert_window(getMessage("pictureformatmsg"));};
    
    
    reader.readAsDataURL(fi);
    


}  


}




function invalid_file() {
alert_window(getMessage("invalidfilemsg"));
}

function HtmlEncode(s)
{
  var el = document.createElement("div");
  el.innerText = el.textContent = s;
  s = el.innerHTML;
  return s;
}

function getReadingTime(segundos) {
    var s = parseInt(segundos,10);
    var h = Math.floor(s/3600);
    var m = Math.floor((s-(h * 3600))/60);
    var sec = s-(h*3600)-(m*60);

    if (h<10) h="0"+h;
    if (m<10) m="0"+m;
    if (sec<10) sec="0"+sec;
    return h+":"+m+':'+sec;

}
function make_pattern(search_string) {
    // split into words
    var words = search_string.split(/\s+/);

    // replace characters by their compositors
    var accent_replacer = function(chr) {
        return accented[chr.toUpperCase()] || chr;
    }
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].replace(/\S/g,accent_replacer);
    }

    // join as alternatives
    var regexp = words.join(" ");
    return new RegExp(regexp,'g');
}

function ValidURL(str) {
var urlRegEx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-]*)?\??(?:[\-\+=&;%@\.\w]*)#?(?:[\.\!\/\\\w]*))?)/g;
var pattern=new RegExp(urlRegEx);
 /*
 var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
*/
  return pattern.test(str);
}

var accented = {
    'A': '[Aa\xaa\xc0-\xc5\xe0-\xe5\u0100-\u0105\u01cd\u01ce\u0200-\u0203\u0226\u0227\u1d2c\u1d43\u1e00\u1e01\u1e9a\u1ea0-\u1ea3\u2090\u2100\u2101\u213b\u249c\u24b6\u24d0\u3371-\u3374\u3380-\u3384\u3388\u3389\u33a9-\u33af\u33c2\u33ca\u33df\u33ff\uff21\uff41]',
    'B': '[Bb\u1d2e\u1d47\u1e02-\u1e07\u212c\u249d\u24b7\u24d1\u3374\u3385-\u3387\u33c3\u33c8\u33d4\u33dd\uff22\uff42]',
    'C': '[Cc\xc7\xe7\u0106-\u010d\u1d9c\u2100\u2102\u2103\u2105\u2106\u212d\u216d\u217d\u249e\u24b8\u24d2\u3376\u3388\u3389\u339d\u33a0\u33a4\u33c4-\u33c7\uff23\uff43]',
    'D': '[Dd\u010e\u010f\u01c4-\u01c6\u01f1-\u01f3\u1d30\u1d48\u1e0a-\u1e13\u2145\u2146\u216e\u217e\u249f\u24b9\u24d3\u32cf\u3372\u3377-\u3379\u3397\u33ad-\u33af\u33c5\u33c8\uff24\uff44]',
    'E': '[Ee\xc8-\xcb\xe8-\xeb\u0112-\u011b\u0204-\u0207\u0228\u0229\u1d31\u1d49\u1e18-\u1e1b\u1eb8-\u1ebd\u2091\u2121\u212f\u2130\u2147\u24a0\u24ba\u24d4\u3250\u32cd\u32ce\uff25\uff45]',
    'F': '[Ff\u1da0\u1e1e\u1e1f\u2109\u2131\u213b\u24a1\u24bb\u24d5\u338a-\u338c\u3399\ufb00-\ufb04\uff26\uff46]',
    'G': '[Gg\u011c-\u0123\u01e6\u01e7\u01f4\u01f5\u1d33\u1d4d\u1e20\u1e21\u210a\u24a2\u24bc\u24d6\u32cc\u32cd\u3387\u338d-\u338f\u3393\u33ac\u33c6\u33c9\u33d2\u33ff\uff27\uff47]',
    'H': '[Hh\u0124\u0125\u021e\u021f\u02b0\u1d34\u1e22-\u1e2b\u1e96\u210b-\u210e\u24a3\u24bd\u24d7\u32cc\u3371\u3390-\u3394\u33ca\u33cb\u33d7\uff28\uff48]',
    'I': '[Ii\xcc-\xcf\xec-\xef\u0128-\u0130\u0132\u0133\u01cf\u01d0\u0208-\u020b\u1d35\u1d62\u1e2c\u1e2d\u1ec8-\u1ecb\u2071\u2110\u2111\u2139\u2148\u2160-\u2163\u2165-\u2168\u216a\u216b\u2170-\u2173\u2175-\u2178\u217a\u217b\u24a4\u24be\u24d8\u337a\u33cc\u33d5\ufb01\ufb03\uff29\uff49]',
    'J': '[Jj\u0132-\u0135\u01c7-\u01cc\u01f0\u02b2\u1d36\u2149\u24a5\u24bf\u24d9\u2c7c\uff2a\uff4a]',
    'K': '[Kk\u0136\u0137\u01e8\u01e9\u1d37\u1d4f\u1e30-\u1e35\u212a\u24a6\u24c0\u24da\u3384\u3385\u3389\u338f\u3391\u3398\u339e\u33a2\u33a6\u33aa\u33b8\u33be\u33c0\u33c6\u33cd-\u33cf\uff2b\uff4b]',
    'L': '[Ll\u0139-\u0140\u01c7-\u01c9\u02e1\u1d38\u1e36\u1e37\u1e3a-\u1e3d\u2112\u2113\u2121\u216c\u217c\u24a7\u24c1\u24db\u32cf\u3388\u3389\u33d0-\u33d3\u33d5\u33d6\u33ff\ufb02\ufb04\uff2c\uff4c]',
    'M': '[Mm\u1d39\u1d50\u1e3e-\u1e43\u2120\u2122\u2133\u216f\u217f\u24a8\u24c2\u24dc\u3377-\u3379\u3383\u3386\u338e\u3392\u3396\u3399-\u33a8\u33ab\u33b3\u33b7\u33b9\u33bd\u33bf\u33c1\u33c2\u33ce\u33d0\u33d4-\u33d6\u33d8\u33d9\u33de\u33df\uff2d\uff4d]',
    'N': '[Nn\xd1\xf1\u0143-\u0149\u01ca-\u01cc\u01f8\u01f9\u1d3a\u1e44-\u1e4b\u207f\u2115\u2116\u24a9\u24c3\u24dd\u3381\u338b\u339a\u33b1\u33b5\u33bb\u33cc\u33d1\uff2e\uff4e]',
    'O': '[Oo\xba\xd2-\xd6\xf2-\xf6\u014c-\u0151\u01a0\u01a1\u01d1\u01d2\u01ea\u01eb\u020c-\u020f\u022e\u022f\u1d3c\u1d52\u1ecc-\u1ecf\u2092\u2105\u2116\u2134\u24aa\u24c4\u24de\u3375\u33c7\u33d2\u33d6\uff2f\uff4f]',
    'P': '[Pp\u1d3e\u1d56\u1e54-\u1e57\u2119\u24ab\u24c5\u24df\u3250\u3371\u3376\u3380\u338a\u33a9-\u33ac\u33b0\u33b4\u33ba\u33cb\u33d7-\u33da\uff30\uff50]',
    'Q': '[Qq\u211a\u24ac\u24c6\u24e0\u33c3\uff31\uff51]',
    'R': '[Rr\u0154-\u0159\u0210-\u0213\u02b3\u1d3f\u1d63\u1e58-\u1e5b\u1e5e\u1e5f\u20a8\u211b-\u211d\u24ad\u24c7\u24e1\u32cd\u3374\u33ad-\u33af\u33da\u33db\uff32\uff52]',
    'S': '[Ss\u015a-\u0161\u017f\u0218\u0219\u02e2\u1e60-\u1e63\u20a8\u2101\u2120\u24ae\u24c8\u24e2\u33a7\u33a8\u33ae-\u33b3\u33db\u33dc\ufb06\uff33\uff53]',
    'T': '[Tt\u0162-\u0165\u021a\u021b\u1d40\u1d57\u1e6a-\u1e71\u1e97\u2121\u2122\u24af\u24c9\u24e3\u3250\u32cf\u3394\u33cf\ufb05\ufb06\uff34\uff54]',
    'U': '[Uu\xd9-\xdc\xf9-\xfc\u0168-\u0173\u01af\u01b0\u01d3\u01d4\u0214-\u0217\u1d41\u1d58\u1d64\u1e72-\u1e77\u1ee4-\u1ee7\u2106\u24b0\u24ca\u24e4\u3373\u337a\uff35\uff55]',
    'V': '[Vv\u1d5b\u1d65\u1e7c-\u1e7f\u2163-\u2167\u2173-\u2177\u24b1\u24cb\u24e5\u2c7d\u32ce\u3375\u33b4-\u33b9\u33dc\u33de\uff36\uff56]',
    'W': '[Ww\u0174\u0175\u02b7\u1d42\u1e80-\u1e89\u1e98\u24b2\u24cc\u24e6\u33ba-\u33bf\u33dd\uff37\uff57]',
    'X': '[Xx\u02e3\u1e8a-\u1e8d\u2093\u213b\u2168-\u216b\u2178-\u217b\u24b3\u24cd\u24e7\u33d3\uff38\uff58]',
    'Y': '[Yy\xdd\xfd\xff\u0176-\u0178\u0232\u0233\u02b8\u1e8e\u1e8f\u1e99\u1ef2-\u1ef9\u24b4\u24ce\u24e8\u33c9\uff39\uff59]',
    'Z': '[Zz\u0179-\u017e\u01f1-\u01f3\u1dbb\u1e90-\u1e95\u2124\u2128\u24b5\u24cf\u24e9\u3390-\u3394\uff3a\uff5a]'
};

function lengthInUtf8Bytes(str) {
   var m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}


function deleteandinitautosave() {
  if (dbcurrent!=null && dbautosave) {
      canautosave=false;
      dbautosave.documents.remove(dbcurrent).then(function () {
       initunsaved();
      });

  } else {
    canautosave=true;
  }

}

function initunsaved() {

  dbcurrent=null;
  canautosave=true;
  trytoautosave();
}

function trytoautosave() {
make_links_openable();
   
      if (canautosave && editor.documentsaved==false) {
      
      canautosave=false;
        
        var waiting_time=2000;
        setTimeout(function () {
          filemanager.addFile(documenttitle+documentid+'.cml', editor.htmlCode(), function () {
            // done
            canautosave=true;
            editor.documentsaved=true;
            console.log('saved');
          });
        },waiting_time);
      
    }
   
}

function hidemenus(e) {
  if (menuopen==false) {
  wrapper.addClass('disablescroll');
      if (menuvisible) {

        
             calmlylogo.stop().animate(800,1000).ease('out').opacity(0);
             topshadow.stop().style('top','-15px');
             menuvisible=false;

        




      }
  }

}

function showmenus (e) {

  if (menuvisible==false && (lastmousex!=e.clientX || lastmousey!=e.clientY)) {
    _showmenus();


  }

  lastmousex=e.clientX;
  lastmousey=e.clientY;


}

function _showmenus() {

      resize_window();
     
       mainarea.style('padding-top','50px');

       if (menuopen==false) showcalmlylogo(true);
       topshadow.stop().style('top','-15px');
  

  menuvisible=true;

}

function getFileExtension(name) {
  if (name.lastIndexOf('.')==-1) return null;
  return name.substr(name.lastIndexOf('.') + 1).toLowerCase();
}
function getContenttoSave(name) {


  var file_ext=getFileExtension(name);

  if (file_ext!=null && markdowntextext.indexOf(file_ext)!=-1) {
     if (file_ext=='txt' || file_ext=='text') {
        return [md(editor.htmlCode(),{inline:true}).split(String.fromCharCode(160)).join(' ')];
     }  else {
      
        var ccc=md(editor.htmlCode(),{inline:true});
        ccc=ccc.replace(/\\\[\^(.*?)\\\]/g,function (str, p1) {return "[^"+p1+"]";}); // Para que no se 'escapen' los footnotes tipo [^1] o [^hola]
        return [ccc];
     }
  } else if (file_ext!=null && file_ext=='docx') {
        
        
        return [generateDocx('<html>\n<body>\n'+editor.htmlCode(true)+'</body>\n</html>')]; 
     }

  return ['<html>\n<body>\n'+editor.htmlCode()+'</body>\n</html>'];

}

function isDescendant(parent, child) {
     var node = child.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function getBase64Image(img_reference) {
    // Create an empty canvas element
    var img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = img_reference.src;
    var canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}



function getMessage(key) {
  return english_messages[key].message;
}
function getlocalstorage(key,done) {
  if (localStorage && localStorage.getItem(key)) done(JSON.parse(localStorage.getItem(key)));
}
function setlocalstorage(key,value) {
  if (localStorage) localStorage.setItem(key,JSON.stringify(value));
}
function requestFullScreen() {

    var element=document.body;
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullscreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}
function exitFullScreen() {
   var element=document;
   var requestMethod= element.exitFullscreen || element.webkitExitFullscreen || element.mozCancelFullScreen || element.msExitFullscreen;
   if (requestMethod) requestMethod.call(element);
}
function is_full() {
  var element=document;
  var requestMethod=element.fullscreen || element.webkitIsFullScreen || element.mozFullScreen;
  if (typeof requestMethod=='boolean') return requestMethod;
  if (window.innerHeight!=screen.height || window.innerWidth!=screen.width) {
    return false;
  }
  return true;

}


// The Browser API key obtained from the Google API Console.
    // Replace with your own Browser API key, or your own key.
    var developerKey = 'AIzaSyCkmyhWfQqtrxgZcKfJ8w_iizqxbAJKbsE';

    // The Client ID obtained from the Google API Console. Replace with your own Client ID.
    var clientId = "679243812516-oq8d5f6akieprhu3akto0ku35cej0ghp.apps.googleusercontent.com"

    // Replace with your own App ID. (Its the first number in your Client ID)
    var appId = "679243812516";

    // Scope to use to access user's Drive items.
    var scope = ['https://www.googleapis.com/auth/drive'];

    var pickerApiLoaded = false;
    var oauthToken;

    // Use the Google API Loader script to load the google.picker script.
    function loadPicker() {
      
    }

    function getAuthPreOpenDrive() {
      gapi.load('auth', {'callback': onAuthApiLoad});
      gapi.load('picker', {'callback': onPickerApiLoad});
    }

    function getAuthPreUploadDrive() {
      gapi.load('auth', {'callback': onAuthApiLoad2});
      gapi.load('picker', {'callback': onPickerApiLoad2});
    }

    function TryToCreatePicker() {
      if (pickerApiLoaded && oauthToken) {
        createPicker();
      } else {
        getAuthPreOpenDrive();
      }
    }

    function onAuthApiLoad() {
      window.gapi.auth.authorize(
          {
            'client_id': clientId,
            'scope': scope,
            'immediate': false
          },
          handleAuthResult);
    }

    function onAuthApiLoad2() {
      window.gapi.auth.authorize(
          {
            'client_id': clientId,
            'scope': scope,
            'immediate': false
          },
          handleAuthResult2);
    }

    function onPickerApiLoad() {

      pickerApiLoaded = true;
      createPicker();
    }

    function onPickerApiLoad2() {

      pickerApiLoaded = true;
       by('id:save_google_drive').clic();
    }

    function handleAuthResult(authResult) {
      if (authResult && !authResult.error) {
        oauthToken = authResult.access_token;
        createPicker();
      }
    }

    function handleAuthResult2(authResult) {
      if (authResult && !authResult.error) {
        oauthToken = authResult.access_token;
        by('id:save_google_drive').clic();
      }
    }

    // Create and render a Picker object for searching images.
    function createPicker() {
      if (pickerApiLoaded && oauthToken) {
        var view = new google.picker.DocsView(google.picker.ViewId.DOCS);
        //view.setIncludeFolders(true);
        view.setMimeTypes("text/html,text/plain,application/vnd.openxmlformats-officedocument.wordprocessingml.document,chemical/x-cml,text/markdown");
        var picker = new google.picker.PickerBuilder()
            .enableFeature(google.picker.Feature.NAV_HIDDEN)
            //.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
            .setAppId(appId)
            .setOAuthToken(oauthToken)
            .addView(view)
            .setDeveloperKey(developerKey)
            .setCallback(pickerCallback)
            .build();
         picker.setVisible(true);
      }
    }
    function uploadFile(content,title) {
      if (pickerApiLoaded && oauthToken) {
       
     
        var xhr = new XMLHttpRequest();
        var accessToken = gapi.auth.getToken().access_token;

        var data;
        
        if (preferencesobj['prsaveas']=='prdocx') {
            data='\r\n--foo_bar_baz\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n{"name": "'+title+'"}\r\n\r\n--foo_bar_baz\r\nContent-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document\r\nContent-Transfer-Encoding: base64\r\n\r\n'+content+'\r\n--foo_bar_baz--';
          } else if (preferencesobj['prsaveas']=='prhtm') {
            data='\r\n--foo_bar_baz\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n{"name": "'+title+'"}\r\n\r\n--foo_bar_baz\r\nContent-Type: text/html; charset=UTF-8\r\n\r\n'+content+'\r\n--foo_bar_baz--';
          } else {
            data='\r\n--foo_bar_baz\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n{"name": "'+title+'"}\r\n\r\n--foo_bar_baz\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n'+content+'\r\n--foo_bar_baz--';
          }
        if (documentDriveId) {
        xhr.open('PATCH', 'https://www.googleapis.com/upload/drive/v3/files/'+documentDriveId+'?uploadType=multipart');
        } else {
        xhr.open('POST', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart');  
        }
        
        xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
        xhr.setRequestHeader("Content-Type", 'multipart/related; boundary=foo_bar_baz');
        xhr.upload.addEventListener('progress',function(e) {block_screen_set_value(e.loaded/e.total);}, false);
    
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('Uploaded');
            var res=JSON.parse(xhr.response);
            if (res.id) documentDriveId=res.id;
            unblock_screen();
           
            by('id:save_msg').stop().style('top','0px').opacity(1).show().animate(250).ease('out').opacity(1).style('top','15px').animate(250,2000).opacity(0).done(function () {this.hide()});
        } else if (xhr.status == 404) {
          if (documentDriveId) {
            documentDriveId='';
            uploadFile(content,title);
          } else {
            unblock_screen();
          }
        } else {
          console.log(xhr.status);
          }
          
        };
        xhr.send(data);
        block_screen();
      } else {
        getAuthPreUploadDrive();
      }
        

    }

    // A simple callback implementation.
    function pickerCallback(data) {
      if (data.action == google.picker.Action.PICKED) {
        var fileId = data.docs[0].id;
        downloadFile(data.docs[0],function(response) {
          documentDriveId=data.docs[0].id;
          leer_contenido_fichero_2(data.docs[0].name,data.docs[0].mimeType,response);
        });
      }
    }

  function downloadFile(file, callback) {
      if (file.url) {
        var accessToken = gapi.auth.getToken().access_token;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://www.googleapis.com/drive/v3/files/'+file.id+'?alt=media');
        xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
        if (file.mimeType=='application/vnd.openxmlformats-officedocument.wordprocessingml.document') xhr.responseType="arraybuffer";
        block_screen();
        xhr.onload = function() {
         
          if (file.mimeType=='application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            callback(xhr.response);
          } else {
            callback(xhr.responseText);
          }
        };
        xhr.onerror = function() {
          unblock_screen();
          callback(null);
        };
        xhr.send();
      } else {
        unblock_screen();
      callback(null);
      }
}

function blobToBase64(blob, cb) {
    var reader = new FileReader();
    reader.onload = function() {
      var dataUrl = reader.result;
      var base64 = dataUrl.split(',')[1];
      cb(base64);
    };
    reader.readAsDataURL(blob);
};

function Checkbox(title) {
  this._state=false;  
  this._title=title;
  this.gr=new Grape('a','html').addClass('option').style('padding-left','45px');

  this.gr.addChild(new Grape('img','html').attr('src','img/check_off.png').addClass('check_option_off'));
  this.gr.addChild(new Grape('img','html').attr('src','img/check_on.png').addClass('check_option_on'));
  if (preferencesobj[this._title] && preferencesobj[this._title]=='pron') {
    this._state=true;
    this.gr.addClass('option_state_true');
  }
  this.gr.addChild(new Grape('span','html').text(getMessage(title)));
  var _this=this;
  this.gr.clic(function () {_this.setState(!_this._state);});
}
Checkbox.fn=Checkbox.prototype;

Checkbox.fn.getGrape=function () {
  return this.gr;
}
Checkbox.fn.setState=function (state) {

  if (typeof state==='boolean') {
    if (state==true) {
      this.gr.addClass('option_state_true');
      preferencesobj[this._title]='pron';
    } else {
      this.gr.removeClass('option_state_true');
      preferencesobj[this._title]='proff';
    }
    this._state=state;
    applyPreferences();
        setlocalstorage('preferencesobj', preferencesobj);
  }
}
Checkbox.fn.clic=function () {
  this.gr.clic();
  console.log('ye');
}

function Selector (title,options) {
this._title=title;
this._options=options;

}
Selector.fn=Selector.prototype;
Selector.fn.getGrape=function () {
var _this=this;
var dv=new Grape('div','html').style('margin-bottom','15px').style('margin-top','15px');
var leftdv=new Grape('div','html').text(getMessage(this._title)).addClass("prevSelector").addTo(dv);
var rightdv=new Grape('div','html').addClass('prSelector').addTo(dv);
var rul=new Grape('ul','html').addTo(rightdv);
for (var i=0; i<this._options.length; i++) {
    var rli=new Grape('li','html');
    rli.seed.innerHTML=getMessage(this._options[i]);
   
    if (this._options[i]=='prdroid') rli.id('dr_droid_selector');
    if (this._options[i]=='prcousine') rli.id('dr_cousine_selector');
    if (this._options[i]=='propensans') rli.id('dr_opensans_selector');
    if (this._options[i]=='pron' || this._options[i]=='proff') rli.style('min-width','34px');
    if (preferencesobj[this._title]==this._options[i]) rli.addClass('prSelected');
    rli.preference_option=this._options[i];
    rli.preference_group=this._title;
    rli.clic(function () {
        var par=this.getParent();
        par.by('li').removeClass('prSelected');
        this.addClass('prSelected');
        preferencesobj[this.preference_group]=this.preference_option;
        applyPreferences();
        setlocalstorage('preferencesobj', preferencesobj);
        if (this.preference_group=='prsaveas') {
            // prtxt prhtm prdocx
            var dctitle=by('id:inputtextname').value().trim();
            var file_ext=getFileExtension(dctitle);
            if (file_ext) {
                if (this.preference_option=='prdocx' && file_ext!='docx') {
                    dctitle=dctitle.substr(0,dctitle.lastIndexOf('.'));
                    dctitle+='.docx';
                    by('id:inputtextname').value(dctitle);
                } else if (this.preference_option=='prhtm' && file_ext!='htm' && file_ext!='html') {
                    dctitle=dctitle.substr(0,dctitle.lastIndexOf('.'));
                    dctitle+='.htm';
                    by('id:inputtextname').value(dctitle);
                } else if (this.preference_option=='prtxt' && markdowntextext.indexOf(file_ext)==-1) {
                    dctitle=dctitle.substr(0,dctitle.lastIndexOf('.'));
                    dctitle+='.txt';
                    by('id:inputtextname').value(dctitle);
                }
            }
         
        }
    });
    rli.addTo(rul);
}

return dv;

}

function ColorSelector () {
    var dv=new Grape('div','html').style('margin-bottom','15px').style('margin-top','15px');
    var leftdv=new Grape('div','html').text(getMessage('prtextcaret')).addClass("prevSelector").addTo(dv);
    var defaultcolor=new Grape('div','html').addClass('colorpicker').addClass('default_colorpicker').addTo(dv);
    if (preferencesobj['prtextcaret']=='default') defaultcolor.addClass('selected_colorpicker');
    defaultcolor.clic(function () {
        preferencesobj['prtextcaret']='default';
        applyPreferences();
         setlocalstorage('preferencesobj', preferencesobj);
    });
    
    var bluecolor=new Grape('div','html').addClass('colorpicker').addClass('blue_colorpicker').addTo(dv);
    if (preferencesobj['prtextcaret']=='blue') bluecolor.addClass('selected_colorpicker');
    bluecolor.clic(function () {
        preferencesobj['prtextcaret']='blue';
        applyPreferences();
         setlocalstorage('preferencesobj', preferencesobj);
    });

    var pinkcolor=new Grape('div','html').addClass('colorpicker').addClass('pink_colorpicker').addTo(dv);
    if (preferencesobj['prtextcaret']=='pink') pinkcolor.addClass('selected_colorpicker');
    pinkcolor.clic(function () {
        preferencesobj['prtextcaret']='pink';
        applyPreferences();
         setlocalstorage('preferencesobj', preferencesobj);
    });

    var greencolor=new Grape('div','html').addClass('colorpicker').addClass('green_colorpicker').addTo(dv);
    if (preferencesobj['prtextcaret']=='green') greencolor.addClass('selected_colorpicker');
    greencolor.clic(function () {
        preferencesobj['prtextcaret']='green';
        applyPreferences();
         setlocalstorage('preferencesobj', preferencesobj);
    });

    var orangecolor=new Grape('div','html').addClass('colorpicker').addClass('orange_colorpicker').addTo(dv);
    if (preferencesobj['prtextcaret']=='orange') orangecolor.addClass('selected_colorpicker');
    orangecolor.clic(function () {
        preferencesobj['prtextcaret']='orange';
        applyPreferences();
         setlocalstorage('preferencesobj', preferencesobj);
    });

    return dv;
}
