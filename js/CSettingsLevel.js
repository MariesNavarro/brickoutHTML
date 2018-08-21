function CSettingsLevel() {   
        
    this.createBonusOccurance=function(iLevel){
        var aTemp=new Array();
        aTemp=BONUS_OCCURRENCE_PER_LEVEL[iLevel];
        var aBonusAlienOccurance=[];
        
        for(var i=0;i<aTemp.length;i++){
            for(var j=0;j<aTemp[i];j++){
               aBonusAlienOccurance.push(i);
            }
        } 
        return aBonusAlienOccurance;  
    };
   
   this.unload=function(){
     s_oAlienSettings=null;  
   };
 
    s_oAliensSettings = this;

}
var s_oAliensSettings;