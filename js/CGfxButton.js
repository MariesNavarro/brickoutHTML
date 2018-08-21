function CGfxButton(iXPos,iYPos,oSprite){
    
    var _iScale;
    
    var _aCbCompleted;
    var _aCbOwner;
    var _aParams = [];
    var _oButton;
    var _bBlock;
    
    this._init =function(iXPos,iYPos,oSprite){
        
        _iScale = 1;
        
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _oButton = createBitmap( oSprite);
        _oButton.x = iXPos;
        _oButton.y = iYPos; 
                                   
        _oButton.regX = oSprite.width/2;
        _oButton.regY = oSprite.height/2;
        if (!s_bMobile){
            _oButton.cursor = "pointer";
	}
        s_oStage.addChild(_oButton);
        
        _bBlock=false;
        
        this._initListener();
    };
    
    this.unload = function(){
       _oButton.off("mousedown", this.buttonDown);
       _oButton.off("pressup" , this.buttonRelease); 
       
       s_oStage.removeChild(_oButton);
    };
    
    this.setVisible = function(bVisible){
        _oButton.visible = bVisible;
    };
    
    this._initListener = function(){
       _oButton.on("mousedown", this.buttonDown);
       _oButton.on("pressup" , this.buttonRelease);      
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.addEventListenerWithParams = function(iEvent,cbCompleted, cbOwner,aParams){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
        _aParams = aParams;
    };
    
    this.buttonRelease = function(){
        
        if(_bBlock){
            return;
        }
        
        _oButton.scaleX = _iScale;
        _oButton.scaleY = _iScale;

        if(_aCbCompleted[ON_MOUSE_UP]){
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP],_aParams);
        }
    };
    
    this.buttonDown = function(){
        
        if(_bBlock){
            return;
        }
        
        _oButton.scaleX = _iScale*0.9;
        _oButton.scaleY = _iScale*0.9;

       if(_aCbCompleted[ON_MOUSE_DOWN]){
           _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN],_aParams);
       }
    };
    
    this.setScale = function(iValue){
        _iScale = iValue;
        _oButton.scaleX = iValue;
        _oButton.scaleY = iValue;
    };
    
    this.setPosition = function(iXPos,iYPos){
         _oButton.x = iXPos;
         _oButton.y = iYPos;
    };
    
    this.setX = function(iXPos){
         _oButton.x = iXPos;
    };
    
    this.setY = function(iYPos){
         _oButton.y = iYPos;
    };
    
    this.getButtonImage = function(){
        return _oButton;
    };
    
    this.getX = function(){
        return _oButton.x;
    };
    
    this.getY = function(){
        return _oButton.y;
    };
    
    this.block = function(bVal){
        _bBlock=bVal;
    };
    
    this._init(iXPos,iYPos,oSprite);
    
    return this;
}