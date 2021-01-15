/*
  Calmly Writer Copyright
*/



/**
* function parse HTML to Docx document. Need jszip.js and FileSaver.js
* @param: html string
* 
*/

function generateDocx(a){var b=new DOMParser,c=b.parseFromString(a,"text/html"),d=c.getElementsByTagName("body"),e=document.implementation.createDocument(null,"mywordXML"),f=e.childNodes[0],g=new JSZip,h=1,i=1,j='<?xml version="1.0" encoding="utf-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId0" Target="styles.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"/>',k=0,n="",o="",p=0,q=!1,r=!1;this.checkIfInsertTag=function(a){return"w:Noinsert"!==a.nodeName},this.createNodeBlockquote=function(a,b){var c=b.createElement("w:p"),d=b.createElement("w:pPr"),e=b.createElement("w:pStyle");return e.setAttribute("w:val","blockQuote"),d.appendChild(e),c.appendChild(d),c},this.consanguinidadLista=function(a){if("BODY"===a.parentNode.nodeName||"TD"===a.parentNode.nodeName)return!1;if("UL"===a.nodeName||"OL"===a.nodeName||"LI"===a.nodeName)return!0;for(var b=a.parentNode,c=0;c<a.childNodes.length;c++)if(this.consanguinidadLista(a.childNodes[c]))return!0;for(var d=0;d<b.childNodes.length;d++)if(b.childNodes[d]!=a)for(var e=b.childNodes[d],f=0;f<e.childNodes.length;f++)if(this.consanguinidadLista(e.childNodes[f]))return!0;return!1},this.createNodeXML=function(a,b,c){var d=parseHTMLtoDocx(a,b,c),e=b.getElementsByTagName("w:body")[0],f=this.checkIfInsertTag(d);if(f)if("w:tbl"===d.nodeName)e.appendChild(d),q=d;else if("w:tr"===d.nodeName)q.appendChild(d);else if(this.consanguinidadLista(a))if("w:r"===d.nodeName)if("w:p"===e.lastElementChild.nodeName)e.lastElementChild.appendChild(d);else{var g=b.createElement("w:p");g.appendChild(d),e.appendChild(g)}else e.appendChild(d);else c.appendChild(d);d&&(c=d);for(var h=0;h<a.childNodes.length;h++)createNodeXML(a.childNodes[h],b,c)},this.createNodeTD=function(a,b,c){var d=100/c,e=b.createElement("w:tc"),f=b.createElement("w:tcPr"),g=b.createElement("w:vAlign");g.setAttribute("w:val","bottom");var h=b.createElement("w:tblBorders"),i=b.createElement("w:top");i.setAttribute("w:val","single"),i.setAttribute("w:sz","10"),i.setAttribute("w:space","0"),i.setAttribute("w:color","000000");var j=b.createElement("w:start");j.setAttribute("w:val","single"),j.setAttribute("w:sz","10"),j.setAttribute("w:space","0"),j.setAttribute("w:color","000000");var k=b.createElement("w:bottom");k.setAttribute("w:val","single"),k.setAttribute("w:sz","10"),k.setAttribute("w:space","0"),k.setAttribute("w:color","000000");var l=b.createElement("w:end");l.setAttribute("w:val","single"),l.setAttribute("w:sz","10"),l.setAttribute("w:space","0"),l.setAttribute("w:color","000000"),h.appendChild(i),h.appendChild(j),h.appendChild(k),h.appendChild(l);var m=a.parentNode.parentNode;if("THEAD"===m.nodeName){var n=b.createElement("w:shd");n.setAttribute("w:val","clear"),n.setAttribute("w:fill","EEEEEE"),f.appendChild(n)}var o=b.createElement("w:tcW");if(o.setAttribute("w:type","pct"),o.setAttribute("w:w",d+"%"),f.appendChild(h),f.appendChild(o),f.appendChild(g),e.appendChild(f),0==a.childNodes.length){var p=b.createElement("w:p"),q=b.createElement("w:r"),r=b.createElement("w:t"),s=b.createTextNode(" ");r.appendChild(s),q.appendChild(r),p.appendChild(q),e.appendChild(p)}return e},this.createNodeTR=function(a,b){return b.createElement("w:tr")},this.createTableNode=function(a,b){var c=b.createElement("w:tbl"),d=b.createElement("w:tblPr"),e=b.createElement("w:tblStyle");e.setAttribute("w:val","TableGrid");var f=b.createElement("w:tblW");f.setAttribute("w:w","5000"),f.setAttribute("w:type","pct"),d.appendChild(e),d.appendChild(f);var g=b.createElement("w:tblBorders"),h=b.createElement("w:top");h.setAttribute("w:val","single"),h.setAttribute("w:sz","10"),h.setAttribute("w:space","0"),h.setAttribute("w:color","000000");var i=b.createElement("w:start");i.setAttribute("w:val","single"),i.setAttribute("w:sz","10"),i.setAttribute("w:space","0"),i.setAttribute("w:color","000000");var j=b.createElement("w:bottom");j.setAttribute("w:val","single"),j.setAttribute("w:sz","10"),j.setAttribute("w:space","0"),j.setAttribute("w:color","000000");var k=b.createElement("w:end");k.setAttribute("w:val","single"),k.setAttribute("w:sz","10"),k.setAttribute("w:space","0"),k.setAttribute("w:color","000000");var l=b.createElement("w:insideH");l.setAttribute("w:val","single"),l.setAttribute("w:sz","5"),l.setAttribute("w:space","0"),l.setAttribute("w:color","000000");var m=b.createElement("w:insideV");return m.setAttribute("w:val","single"),m.setAttribute("w:sz","5"),m.setAttribute("w:space","0"),m.setAttribute("w:color","000000"),g.appendChild(h),g.appendChild(i),g.appendChild(j),g.appendChild(k),g.appendChild(l),g.appendChild(m),d.appendChild(g),c.appendChild(d),c},this.createHeading=function(a,b,c){if("BODY"===a.parentNode.nodeName||"TD"===a.parentNode.nodeName){var d=b.createElement("w:p"),e=b.createElement("w:pPr"),f=b.createElement("w:pStyle");f.setAttribute("w:val","Heading"+c),d.appendChild(e),e.appendChild(f),d=checkRTL(d,b,a)}else var d=b.createElement("w:r");return d},this.checkRTL=function(a,b,c){if(c.attributes&&c.attributes[0]){var d=c.attributes[0].nodeValue.replace(" ","");d=d.replace("direction:","");var e=d.substring(0,3);if("rtl"===e){if(r=!0,a.childNodes&&a.childNodes[0]&&"w:pPr"===a.childNodes[0].nodeName)var f=a.childNodes[0];else var f=b.createElement("w:pPr");var g=b.createElement("w:bidi");g.setAttribute("w:val","1"),f.appendChild(g),a.appendChild(f)}else r=!1}return a},this.createNodeStrong=function(a,b){var c,d=b.createElement("w:r"),e=b.createElement("w:rPr"),f=b.createElement("w:b");return d.appendChild(e),e.appendChild(f),"BODY"===a.parentNode.nodeName||"TD"===a.parentNode.nodeName?(c=b.createElement("w:p"),c.appendChild(d)):c=d,c},this.createNodeEM=function(a,b){var c,d=b.createElement("w:r"),e=b.createElement("w:rPr"),f=b.createElement("w:i");return d.appendChild(e),e.appendChild(f),"BODY"===a.parentNode.nodeName||"TD"===a.parentNode.nodeName?(c=b.createElement("w:p"),c.appendChild(d)):c=d,c},this.createNodeBR=function(a,b){var c,d=b.createElement("w:r"),e=b.createElement("w:br");return d.appendChild(e),"BODY"===a.parentNode.nodeName||"TD"===a.parentNode.nodeName?(c=b.createElement("w:p"),c.appendChild(d)):c=d,c},this.createHiperlinkNode=function(a,b,c){for(var d=0;d<a.childNodes.length;d++)if("IMG"===a.childNodes[d].nodeName){var e=b.createElement("w:r"),f=b.createElement("w:t");f.setAttribute("xml:space","preserve");var g=b.createTextNode("link format not available");if(e.appendChild(f),f.appendChild(g),"BODY"===a.parentNode.nodeName){var h=b.createElement("w:p");return h.appendChild(e),h}return e}var i=b.createElement("w:hyperlink");if(a.href&&i.setAttribute("r:id","link"+c),"BODY"===a.parentNode.nodeName||"TD"===a.parentNode.nodeName){var j=b.createElement("w:p");j.appendChild(i)}else var j=i;return j},this.createNodeLi=function(a,b,c,d){var f=(a.parentNode,b.createElement("w:p")),g=b.createElement("w:pPr"),h=b.createElement("w:pStyle");h.setAttribute("w:val","ListParagraph"),g.appendChild(h),f.appendChild(g);var i=b.createElement("w:numPr"),j=b.createElement("w:ilvl");j.setAttribute("w:val",d);var k=b.createElement("w:numId");return k.setAttribute("w:val",c),i.appendChild(j),i.appendChild(k),g.appendChild(i),f},this.createNodeParagraphOrRun=function(a,b){var c=a.data;if(c||(c=""),"BODY"===a.parentNode.nodeName||"TD"===a.parentNode.nodeName){var d=b.createElement("w:p");d=checkRTL(d,b,a)}else var d=b.createElement("w:r");return d},this.createMyTextNode=function(a,b){var c=a.data;if(c||(c=""),"TR"===a.parentNode.nodeName||"TABLE"===a.parentNode.nodeName)return b.createElement("w:Noinsert");if("BODY"===a.parentNode.nodeName&&!a.data.trim())return b.createElement("w:Noinsert");var d=b.createElement("w:r");if(r){var e=b.createElement("w:rPr"),f=b.createElement("w:rtl");f.setAttribute("w:val","1"),e.appendChild(f),d.appendChild(e)}if("A"===a.parentNode.nodeName&&a.parentNode.href){var g=b.createElement("w:rStyle");g.setAttribute("w:val","Hyperlink"),d.appendChild(g)}var h=b.createElement("w:t");h.setAttribute("xml:space","preserve");var i=b.createTextNode(c);if(d.appendChild(h),h.appendChild(i),"BODY"===a.parentNode.nodeName||"TD"===a.parentNode.nodeName){var j=b.createElement("w:p");j.appendChild(d)}else var j=d;return j},this.createAstractNumListDecimal=function(a,b){return a=`<w:abstractNum w:abstractNumId="`+b+`" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
\t<w:multiLevelType w:val="hybridMultilevel" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" />
\t\t<w:lvl w:ilvl="0" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
\t\t\t<w:start w:val="1" />
\t\t\t<w:numFmt w:val="decimal" />
\t\t\t<w:lvlText w:val="%1." />
\t\t\t<w:lvlJc w:val="left" />
\t\t\t<w:pPr><w:ind w:left="720" w:hanging="360" /></w:pPr>
\t\t</w:lvl>
\t\t<w:lvl w:ilvl="1" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
\t\t\t<w:start w:val="1" /><w:numFmt w:val="lowerLetter" /><w:lvlText w:val="%2." /><w:lvlJc w:val="left" /><w:pPr><w:ind w:left="1440" w:hanging="360" /></w:pPr>
\t\t</w:lvl>
\t\t<w:lvl w:ilvl="2" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
\t\t\t<w:start w:val="1" /><w:numFmt w:val="lowerRoman" /><w:lvlText w:val="%3." /><w:lvlJc w:val="right" /><w:pPr><w:ind w:left="2160" w:hanging="180" /></w:pPr>
\t\t</w:lvl>
\t\t<w:lvl w:ilvl="3" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
\t\t\t<w:start w:val="1" /><w:numFmt w:val="decimal" /><w:lvlText w:val="%4." /><w:lvlJc w:val="left" /><w:pPr><w:ind w:left="2880" w:hanging="360" /></w:pPr>
\t\t</w:lvl>
\t\t<w:lvl w:ilvl="4" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
\t\t\t<w:start w:val="1" /><w:numFmt w:val="lowerLetter" /><w:lvlText w:val="%5." /><w:lvlJc w:val="left" /><w:pPr><w:ind w:left="3600" w:hanging="360" /></w:pPr>
\t\t</w:lvl>
\t\t<w:lvl w:ilvl="5" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
\t\t\t<w:start w:val="1" /><w:numFmt w:val="lowerRoman" /><w:lvlText w:val="%6." /><w:lvlJc w:val="right" /><w:pPr><w:ind w:left="4320" w:hanging="180" /></w:pPr>
\t\t</w:lvl>
\t\t<w:lvl w:ilvl="6" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
\t\t\t<w:start w:val="1" /><w:numFmt w:val="decimal" /><w:lvlText w:val="%7." /><w:lvlJc w:val="left" /><w:pPr><w:ind w:left="5040" w:hanging="360" /></w:pPr>
\t\t</w:lvl>
\t\t<w:lvl w:ilvl="7" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
\t\t\t<w:start w:val="1" /><w:numFmt w:val="lowerLetter" /><w:lvlText w:val="%8." /><w:lvlJc w:val="left" /><w:pPr><w:ind w:left="5760" w:hanging="360" /></w:pPr>
\t\t</w:lvl>
\t\t<w:lvl w:ilvl="8" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
\t\t\t<w:start w:val="1" /><w:numFmt w:val="lowerRoman" /><w:lvlText w:val="%9." /><w:lvlJc w:val="right" /><w:pPr><w:ind w:left="6480" w:hanging="180" /></w:pPr>
\t\t</w:lvl>
</w:abstractNum>`+a},this.createAstractNumListBullet=function(a,b){return a=`<w:abstractNum xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:abstractNumId="`+b+`">
\t<w:multiLevelType xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:val="hybridMultilevel"/>
\t<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="0">
\t\t<w:start w:val="1"/>
\t\t<w:numFmt w:val="bullet"/>
\t\t<w:lvlText w:val="ï‚·"/>
\t\t<w:lvlJc w:val="left"/>
\t\t<w:pPr>
\t\t<w:ind w:left="720" w:hanging="360"/>
\t\t</w:pPr>
\t\t<w:rPr>
\t\t<w:rFonts w:hint="default" w:ascii="Symbol" w:hAnsi="Symbol"/>
\t\t</w:rPr>
\t</w:lvl>
\t<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="1">
\t\t<w:start w:val="1"/>
\t\t<w:numFmt w:val="bullet"/>
\t\t<w:lvlText w:val="o"/>
\t\t<w:lvlJc w:val="left"/>
\t\t<w:pPr>
\t\t<w:ind w:left="1440" w:hanging="360"/>
\t\t</w:pPr>
\t\t<w:rPr>
\t\t<w:rFonts w:hint="default" w:ascii="Courier New" w:hAnsi="Courier New"/>
\t\t</w:rPr>
\t</w:lvl>
\t<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="2">
\t\t<w:start w:val="1"/>
\t\t<w:numFmt w:val="bullet"/>
\t\t<w:lvlText w:val="ï‚§"/>
\t\t<w:lvlJc w:val="left"/>
\t\t<w:pPr>
\t\t<w:ind w:left="2160" w:hanging="360"/>
\t\t</w:pPr>
\t\t<w:rPr>
\t\t<w:rFonts w:hint="default" w:ascii="Wingdings" w:hAnsi="Wingdings"/>
\t\t</w:rPr>
\t</w:lvl>
\t<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="3">
\t<w:start w:val="1"/>
\t<w:numFmt w:val="bullet"/>
\t<w:lvlText w:val="ï‚·"/>
\t<w:lvlJc w:val="left"/>
\t<w:pPr>
\t<w:ind w:left="2880" w:hanging="360"/>
\t</w:pPr>
\t<w:rPr>
\t<w:rFonts w:hint="default" w:ascii="Symbol" w:hAnsi="Symbol"/>
\t</w:rPr>
\t</w:lvl>
\t<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="4">
\t<w:start w:val="1"/>
\t<w:numFmt w:val="bullet"/>
\t<w:lvlText w:val="o"/>
\t<w:lvlJc w:val="left"/>
\t<w:pPr>
\t<w:ind w:left="3600" w:hanging="360"/>
\t</w:pPr>
\t<w:rPr>
\t<w:rFonts w:hint="default" w:ascii="Courier New" w:hAnsi="Courier New"/>
\t</w:rPr>
\t</w:lvl>
\t<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="5">
\t<w:start w:val="1"/>
\t<w:numFmt w:val="bullet"/>
\t<w:lvlText w:val="ï‚§"/>
\t<w:lvlJc w:val="left"/>
\t<w:pPr>
\t<w:ind w:left="4320" w:hanging="360"/>
\t</w:pPr>
\t<w:rPr>
\t<w:rFonts w:hint="default" w:ascii="Wingdings" w:hAnsi="Wingdings"/>
\t</w:rPr>
\t</w:lvl>
\t<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="6">
\t<w:start w:val="1"/>
\t<w:numFmt w:val="bullet"/>
\t<w:lvlText w:val="ï‚·"/>
\t<w:lvlJc w:val="left"/>
\t<w:pPr>
\t<w:ind w:left="5040" w:hanging="360"/>
\t</w:pPr>
\t<w:rPr>
\t<w:rFonts w:hint="default" w:ascii="Symbol" w:hAnsi="Symbol"/>
\t</w:rPr>
\t</w:lvl>
\t<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="7">
\t<w:start w:val="1"/>
\t<w:numFmt w:val="bullet"/>
\t<w:lvlText w:val="o"/>
\t<w:lvlJc w:val="left"/>
\t<w:pPr>
\t<w:ind w:left="5760" w:hanging="360"/>
\t</w:pPr>
\t<w:rPr>
\t<w:rFonts w:hint="default" w:ascii="Courier New" w:hAnsi="Courier New"/>
\t</w:rPr>
\t</w:lvl>
\t<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="8">
\t<w:start w:val="1"/>
\t<w:numFmt w:val="bullet"/>
\t<w:lvlText w:val="ï‚§"/>
\t<w:lvlJc w:val="left"/>
\t<w:pPr>
\t<w:ind w:left="6480" w:hanging="360"/>
\t</w:pPr>
\t<w:rPr>
\t<w:rFonts w:hint="default" w:ascii="Wingdings" w:hAnsi="Wingdings"/>
\t</w:rPr>
\t</w:lvl>
</w:abstractNum>`+a},this.createNumIdList=function(a,b){return a='<w:num w:numId="'+b+'"><w:abstractNumId w:val="'+b+'"/></w:num>'+a},this.escalarIMG=function(a,b){var c={width:0,height:0},d=a/96,e=b/96,f=914400*d,g=914400*e,h=576e4,i=8892e3;if(f>h){var j=f;f=h,g=Math.floor(f*g/j)}if(g>i){var k=g;g=i,f=Math.floor(g*f/k)}return c.width=Math.floor(f),c.height=Math.floor(g),c},this.nodeVoid=function(a){var b=a.createElement("w:r"),c=a.createElement("w:t");c.setAttribute("xml:space","preserve");var d=a.createTextNode("IMAGE FORMAT NOT AVAILABLE!");return b.appendChild(c),c.appendChild(d),b},this.createDrawingNodeIMG=function(a,b,c,d){var e=".png",f="image"+d+e,g="rId"+d,h=document.createElement("img");h.src=b;var i=this.escalarIMG(h.width,h.height),j=c.createElement("w:r"),k=c.createElement("w:drawing"),l=c.createElement("wp:inline");l.setAttribute("distR","0"),l.setAttribute("distL","0"),l.setAttribute("distB","0"),l.setAttribute("distT","0");var m=c.createElement("wp:extent");m.setAttribute("cy",i.height),m.setAttribute("cx",i.width);var n=c.createElement("wp:effectExtent");n.setAttribute("b","0"),n.setAttribute("r","0"),n.setAttribute("t","0"),n.setAttribute("l","0");var o=c.createElement("wp:docPr");o.setAttribute("name",f),o.setAttribute("id",d);var p=c.createElement("wp:cNvGraphicFramePr"),q=c.createElement("a:graphicFrameLocks");q.setAttribute("xmlns:a","http://schemas.openxmlformats.org/drawingml/2006/main"),q.setAttribute("noChangeAspect","1"),p.appendChild(q);var r=c.createElement("a:graphic");r.setAttribute("xmlns:a","http://schemas.openxmlformats.org/drawingml/2006/main");var s=c.createElement("a:graphicData");s.setAttribute("uri","http://schemas.openxmlformats.org/drawingml/2006/picture");var t=c.createElement("pic:pic");t.setAttribute("xmlns:pic","http://schemas.openxmlformats.org/drawingml/2006/picture");var u=c.createElement("pic:nvPicPr"),v=c.createElement("pic:cNvPr");v.setAttribute("name",f),v.setAttribute("id",d);var w=c.createElement("pic:cNvPicPr");u.appendChild(v),u.appendChild(w);var x=c.createElement("pic:blipFill"),y=c.createElement("a:blip");y.setAttribute("cstate","print"),y.setAttribute("r:embed",g);var z=c.createElement("a:stretch"),A=c.createElement("a:fillRect");z.appendChild(A),x.appendChild(y),x.appendChild(z);var B=c.createElement("pic:spPr"),C=c.createElement("a:xfrm"),D=c.createElement("a:off");D.setAttribute("y","0"),D.setAttribute("x","0");var E=c.createElement("a:ext");E.setAttribute("cy",i.height),E.setAttribute("cx",i.width),C.appendChild(D),C.appendChild(E);var F=c.createElement("a:prstGeom");F.setAttribute("prst","rect");var G=c.createElement("a:avLst");return F.appendChild(G),B.appendChild(C),B.appendChild(F),t.appendChild(u),t.appendChild(x),t.appendChild(B),s.appendChild(t),r.appendChild(s),l.appendChild(m),l.appendChild(n),l.appendChild(o),l.appendChild(p),l.appendChild(r),k.appendChild(l),j.appendChild(k),j},this.stringStartsWith=function(a,b){return a.slice(0,b.length)==b},this.createDocx=function(a,b){var c='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>',d='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default ContentType="image/jpeg" Extension="jpg"/><Default ContentType="image/png" Extension="png"/><Default ContentType="image/gif" Extension="gif"/><Default Extension="xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml" PartName="/word/styles.xml"/><Override ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml" PartName="/word/numbering.xml"/></Types>',e='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" mc:Ignorable="w14 w15 wp14">',f="</w:document>",g=`
\t\t  <w:styles xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml" mc:Ignorable="w14 w15 wp14">
\t\t<w:style w:type="paragraph" w:styleId="Heading1">
\t\t\t<w:name w:val="Heading 1"/>
\t\t\t<w:basedOn w:val="Normal"/>
\t\t\t<w:next w:val="Normal"/>
\t\t\t<w:link w:val="Heading1Char"/>
\t\t\t<w:uiPriority w:val="9"/>
\t\t\t<w:qFormat/>
\t\t\t<w:pPr>
\t\t\t\t<w:keepNext/>
\t\t\t\t<w:keepLines/>
\t\t\t\t<w:spacing w:before="480" w:after="0"/>
\t\t\t\t<w:outlineLvl w:val="0"/>
\t\t\t</w:pPr>
\t\t\t<w:rPr>
\t\t\t\t
\t\t\t\t<w:b/>
\t\t\t\t<w:color w:val="000000"/>
\t\t\t\t<w:sz w:val="48"/>
\t\t\t</w:rPr>
\t\t\t</w:style>
\t\t<w:style w:type="paragraph" w:styleId="Heading2">
\t\t\t<w:name w:val="Heading 2"/>
\t\t\t<w:basedOn w:val="Normal"/>
\t\t\t<w:next w:val="Normal"/>
\t\t\t<w:link w:val="Heading1Char"/>
\t\t\t<w:uiPriority w:val="9"/>
\t\t\t<w:qFormat/>
\t\t\t<w:pPr>
\t\t\t\t<w:keepNext/>
\t\t\t\t<w:keepLines/>
\t\t\t\t<w:spacing w:before="480" w:after="0"/>
\t\t\t\t<w:outlineLvl w:val="0"/>
\t\t\t</w:pPr>
\t\t\t<w:rPr>
\t\t\t\t
\t\t\t\t<w:b/>
\t\t\t\t<w:color w:val="000000"/>
\t\t\t\t<w:sz w:val="38"/>
\t\t\t</w:rPr>
\t\t\t</w:style>
\t\t<w:style w:type="paragraph" w:styleId="Heading3">
\t\t\t<w:name w:val="Heading 3"/>
\t\t\t<w:basedOn w:val="Normal"/>
\t\t\t<w:next w:val="Normal"/>
\t\t\t<w:link w:val="Heading1Char"/>
\t\t\t<w:uiPriority w:val="9"/>
\t\t\t<w:qFormat/>
\t\t\t<w:pPr>
\t\t\t\t<w:keepNext/>
\t\t\t\t<w:keepLines/>
\t\t\t\t<w:spacing w:before="480" w:after="0"/>
\t\t\t\t<w:outlineLvl w:val="0"/>
\t\t\t</w:pPr>
\t\t\t<w:rPr>
\t\t\t\t
\t\t\t\t<w:b/>
\t\t\t\t<w:color w:val="000000"/>
\t\t\t\t<w:sz w:val="35"/>
\t\t\t</w:rPr>
\t\t\t</w:style>
\t\t<w:style w:type="paragraph" w:styleId="Heading4">
\t\t\t<w:name w:val="Heading 4"/>
\t\t\t<w:basedOn w:val="Normal"/>
\t\t\t<w:next w:val="Normal"/>
\t\t\t<w:link w:val="Heading1Char"/>
\t\t\t<w:uiPriority w:val="9"/>
\t\t\t<w:qFormat/>
\t\t\t<w:pPr>
\t\t\t\t<w:keepNext/>
\t\t\t\t<w:keepLines/>
\t\t\t\t<w:spacing w:before="480" w:after="0"/>
\t\t\t\t<w:outlineLvl w:val="0"/>
\t\t\t</w:pPr>
\t\t\t<w:rPr>
\t\t\t\t
\t\t\t\t<w:b/>
\t\t\t\t<w:color w:val="000000"/>
\t\t\t\t<w:sz w:val="30"/>
\t\t\t</w:rPr>
\t\t\t</w:style>\t
\t\t<w:style w:type="paragraph" w:styleId="Heading5">
\t\t\t<w:name w:val="Heading 5"/>
\t\t\t<w:basedOn w:val="Normal"/>
\t\t\t<w:next w:val="Normal"/>
\t\t\t<w:link w:val="Heading1Char"/>
\t\t\t<w:uiPriority w:val="9"/>
\t\t\t<w:qFormat/>
\t\t\t<w:pPr>
\t\t\t\t<w:keepNext/>
\t\t\t\t<w:keepLines/>
\t\t\t\t<w:spacing w:before="480" w:after="0"/>
\t\t\t\t<w:outlineLvl w:val="0"/>
\t\t\t</w:pPr>
\t\t\t<w:rPr>
\t\t\t\t
\t\t\t\t<w:b/>
\t\t\t\t<w:color w:val="000000"/>
\t\t\t\t<w:sz w:val="28"/>
\t\t\t</w:rPr>
\t\t\t</w:style>
\t\t<w:style w:type="paragraph" w:styleId="Heading6">
\t\t\t<w:name w:val="Heading 6"/>
\t\t\t<w:basedOn w:val="Normal"/>
\t\t\t<w:next w:val="Normal"/>
\t\t\t<w:link w:val="Heading1Char"/>
\t\t\t<w:uiPriority w:val="9"/>
\t\t\t<w:qFormat/>
\t\t\t<w:pPr>
\t\t\t\t<w:keepNext/>
\t\t\t\t<w:keepLines/>
\t\t\t\t<w:spacing w:before="480" w:after="0"/>
\t\t\t\t<w:outlineLvl w:val="0"/>
\t\t\t</w:pPr>
\t\t\t<w:rPr>
\t\t\t\t
\t\t\t\t<w:b/>
\t\t\t\t<w:color w:val="000000"/>
\t\t\t\t<w:sz w:val="25"/>
\t\t\t</w:rPr>
\t\t\t</w:style>\t
\t\t\t<w:style w:type="paragraph" w:styleId="blockQuote">
\t\t\t<w:name w:val="blockQuote"/>
\t\t\t<w:basedOn w:val="Normal"/>
\t\t\t<w:next w:val="Normal"/>\t\t\t
\t\t\t<w:uiPriority w:val="9"/>
\t\t\t<w:qFormat/>
\t\t\t<w:pPr>\t\t\t
\t\t\t\t<w:spacing w:before="360" w:after="360"/>
\t\t\t\t<w:ind w:left="1080" w:right="1080" />
\t\t\t</w:pPr>
\t\t\t<w:rPr>\t\t\t\t
\t\t\t\t<w:color w:val="#222222"/>
\t\t\t\t<w:sz w:val="30"/>
\t\t\t</w:rPr>\t\t\t
\t\t\t</w:style>\t\t\t
\t\t<w:style xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:type="character" w:styleId="Hyperlink" mc:Ignorable="w14">
\t\t\t<w:name xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:val="Hyperlink"/>
\t\t\t<w:basedOn xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:val="DefaultParagraphFont"/>
\t\t\t<w:uiPriority xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:val="99"/>
\t\t\t<w:unhideWhenUsed xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"/>
\t\t\t<w:rPr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
\t\t\t<w:color w:val="0563C1" />
\t\t\t<w:b/>
\t\t\t<w:u w:val="single"/>
\t\t\t</w:rPr>
\t\t\t</w:style>
\t\t<w:style mc:Ignorable="w14" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
  w:styleId="ListParagraph" w:type="paragraph">
\t\t\t<w:name xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:val="List Paragraph"/>
\t\t\t<w:basedOn xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:val="Normal"/>
\t\t\t<w:uiPriority xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:val="34"/>
\t\t\t<w:qFormat xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"/>
\t\t\t<w:pPr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
\t\t\t<w:ind xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:left="720"/>
\t\t\t<w:contextualSpacing xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"/>
\t\t\t</w:pPr>
\t\t\t</w:style>

\t\t</w:styles>
\t\t`,h='<?xml version="1.0" encoding="utf-8"?><w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">',i="</w:numbering>";n=h+n+o+i,b.file("_rels/.rels",c),b.file("[Content_Types].xml",d),a=e+a+f,b.file("word/document.xml",a),b.file("word/styles.xml",g),b.file("word/numbering.xml",n);var j=b.generate({type:"blob"});return j},this.parseHTMLtoDocx=function(a,b,c){var d=["H1","H2","H3","H4","H5","H6"];if("BODY"===a.nodeName)var e=b.createElement("w:body");else if(d.indexOf(a.nodeName)>=0)var f=d.indexOf(a.nodeName)+1,e=this.createHeading(a,b,f);else if("P"===a.nodeName)var e=this.createNodeParagraphOrRun(a,b);else if("STRONG"===a.nodeName)var e=this.createNodeStrong(a,b);else if("EM"===a.nodeName)var e=this.createNodeEM(a,b);else if("BR"===a.nodeName)var e=this.createNodeBR(a,b);else if("A"===a.nodeName)if(a.href){var l="link"+i;j=j+'<Relationship Id="'+l+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="'+a.href+'" TargetMode="External"/>';var e=this.createHiperlinkNode(a,b,i);i++}else var e=this.createNodeParagraphOrRun(a,b);else if("UL"===a.nodeName||"OL"===a.nodeName){"LI"!=a.parentNode.nodeName&&k++,"UL"===a.nodeName?n=createAstractNumListBullet(n,k):"OL"===a.nodeName&&(n=createAstractNumListDecimal(n,k)),o=createNumIdList(o,k);var e=b.createElement("w:Noinsert")}else if("LI"===a.nodeName){var m=0,q=a.parentNode.parentNode;if(q)for(var r=!0;r&&"LI"===q.nodeName;)m++,q.parentNode.parentNode?(r=!0,q=q.parentNode.parentNode):r=!1;var e=this.createNodeLi(a,b,k,m)}else if("#text"===a.nodeName)var e=this.createMyTextNode(a,b);else if("IMG"===a.nodeName){var v,s=".png",t="image"+h+s,u="rId"+h,w=a.attributes[0].value;if(this.stringStartsWith(w,"data:")){var x=w.replace(/^data:image\/.+;base64,/," ");g.file("word/media/"+t,x,{base64:!0}),j=j+'<Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/'+t+'" Id="'+u+'" />',v=this.createDrawingNodeIMG(a,w,b,h),h++}else v=this.nodeVoid(b);if("BODY"===a.parentNode.nodeName||"TD"===a.parentNode.nodeName){var e=b.createElement("w:p");e.appendChild(v)}else var e=v}else if("TABLE"===a.nodeName)var e=this.createTableNode(a,b);else if("THEAD"===a.nodeName)var e=b.createElement("w:Noinsert");else if("TBODY"===a.nodeName)var e=b.createElement("w:Noinsert");else if("TR"===a.nodeName){var e=this.createNodeTR(a,b);p=0;for(var y=0;y<a.childNodes.length;y++)"TD"===a.childNodes[y].nodeName&&p++;if(0==p){var z=document.createElement("TD");a.appendChild(z)}}else if("TD"===a.nodeName)var e=this.createNodeTD(a,b,p);else if("BLOCKQUOTE"===a.nodeName)var e=this.createNodeBlockquote(a,b);else var e=this.createNodeParagraphOrRun(a,b);return e},createNodeXML(d[0],e,f),j+='<Relationship Id="Rnumbering1" Target="/word/numbering.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering"/>',j+="</Relationships>",g.file("word/_rels/document.xml.rels",j);var s=e.getElementsByTagName("w:body"),t=this.createDocx(s[0].outerHTML,g);return t}
