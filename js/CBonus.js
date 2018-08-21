function CBonus(iXPos, iYPos, oSprite, iType, iID) {

    var _aCbCompleted;
    var _aCbOwner;
    var _oBonus;
    var _oInfoData = {};
    var _bBonusUnload;
    var _iSpeed;
    var _iBonusOffset;

    this._init = function (iXPos, iYPos, oSprite, iType, iID) {
        _aCbCompleted = new Array();
        _aCbOwner = new Array();
        _bBonusUnload = false;

        _oInfoData["Type"] = iType;
        _oInfoData["ID"] = iID;

        if (iType === 0 || iType === 7 || iType === 9) {
            var oData = {
                images: [oSprite],
                // width, height & registration point of each sprite
                frames: {width: oSprite.width / 5, height: oSprite.height / 2, regX: (oSprite.width / 2) / 5, regY: (oSprite.height / 2) / 2},
                animations: {normal: [0, 9, "normal", 1]}
            };
            var oSpriteSheet = new createjs.SpriteSheet(oData);
            _oBonus = createSprite(oSpriteSheet, "normal", (oSprite.width / 2) / 5, (oSprite.height / 2) / 2, oSprite.width / 5, oSprite.height / 2);
            _oInfoData["offsetX"] = (oSprite.width / 5) / 2;
            _oInfoData["offsetY"] = (oSprite.height / 2) / 2;
        } else if (iType === 1 || iType === 2 || iType === 4 || iType === 5 || iType === 8) {
            var oData = {
                images: [oSprite],
                // width, height & registration point of each sprite
                frames: {width: oSprite.width / 4, height: oSprite.height / 2, regX: (oSprite.width / 2) / 4, regY: (oSprite.height / 2) / 2},
                animations: {normal: [0, 7, "normal", 1]}
            };
            var oSpriteSheet = new createjs.SpriteSheet(oData);
            _oBonus = createSprite(oSpriteSheet, "normal", (oSprite.width / 2) / 4, (oSprite.height / 2) / 2, oSprite.width / 4, oSprite.height / 2);
            _oInfoData["offsetX"] = (oSprite.width / 4) / 2;
            _oInfoData["offsetY"] = (oSprite.height / 2) / 2;
        } else {
            var oData = {
                images: [oSprite],
                // width, height & registration point of each sprite
                frames: {width: oSprite.width / 6, height: oSprite.height / 2, regX: (oSprite.width / 2) / 6, regY: (oSprite.height / 2) / 2},
                animations: {normal: [0, 11, "normal", 1]}
            };
            var oSpriteSheet = new createjs.SpriteSheet(oData);
            _oBonus = createSprite(oSpriteSheet, "normal", (oSprite.width / 2) / 6, (oSprite.height / 2) / 2, oSprite.width / 6, oSprite.height / 2);
            _oInfoData["offsetX"] = (oSprite.width / 6) / 2;
            _oInfoData["offsetY"] = (oSprite.height / 2) / 2;
        }
        _iSpeed = BONUS_SPEED;

        _oBonus.x = iXPos;
        _oBonus.y = iYPos;

        s_oStage.addChild(_oBonus);
        
        //s_oStage.setChildIndex(_oBonus,s_oStage.numChildren-1);
        _iBonusOffset = CANVAS_HEIGHT + _oInfoData["offsetX"];
    };

    this.getX = function () {
        return _oBonus.x;
    };

    this.getY = function () {
        return _oBonus.y;
    };

    this.setInfoData = function (szKey, oValue) {
        _oInfoData[szKey] = oValue;
    };

    this.getInfoData = function (szKey) {
        return _oInfoData[szKey];
    };

    this.resetTheIndex = function (iValue) {
        _oInfoData["ID"] = iValue;
    };

    this.unload = function () {
        s_oStage.removeChild(_oBonus);
    };

    this.update = function () {
        _oBonus.y += _iSpeed;
        if (_oBonus.y < _iBonusOffset) {
            return;
        }
        else
        {
            s_oGame.unloadBonus(_oInfoData["ID"]);
        }
    };

    s_oBonus = this;

    this._init(iXPos, iYPos, oSprite, iType, iID);
}

var s_oBonus;

