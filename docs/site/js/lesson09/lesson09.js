// load global variables

        $(function(){
            $("#includedHeader").load(g.headerUrl); 
        });
        window.onload = function(){
   document.title = g.courseMaterials;
   document.getElementById('g_otherUnofficial').innerHTML = g.otherUnofficial;
   document.getElementById('g_prepare').innerHTML  = g.prepare;
   document.getElementById('g_teach').innerHTML    = g.teach;
   document.getElementById('g_ponder').innerHTML   = g.ponder;
   document.getElementById('g_w09').innerHTML             = g.w09;

};