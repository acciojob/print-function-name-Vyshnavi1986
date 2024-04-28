//your JS code here. If required.
 function GFGs() { 
            var me = arguments.callee.toString(); 
            me = me.substr('function '.length);      
            me = me.substr(0, me.indexOf('('));      
            alert(me); 
        } 
        GFGs();    