function CBrick(iXPos, iYPos, oSprite, iResistance, bDestructible) {

    var _oBrick;
    var _oInfoData = {};

    this._init = function () {
        if (iResistance < 1 && bDestructible === true) {
            _oBrick = createBitmap(oSprite);
            _oBrick.regX = oSprite.width / 2;
            _oBrick.regY = oSprite.height / 2;
            _oInfoData["Effect"] = false;
        }
        else
        {
            if (bDestructible === true) {
                var oData = {
                    images: [oSprite],
                    // width, height & registration point of each sprite
                    frames: {width: oSprite.width / 4, height: oSprite.height / 2, regX: (oSprite.width / 2) / 4, regY: (oSprite.height / 2) / 2},
                    animations: {normal: [1], destoyed: [2, 7, "destroyed", 0.5]}
                };
                var oSpriteSheet = new createjs.SpriteSheet(oData);
                _oBrick = createSprite(oSpriteSheet, "normal", (oSprite.width / 2) / 4, (oSprite.height / 2) / 2, oSprite.width / 4, oSprite.height / 2);
                _oInfoData["Effect"] = true;
            }
            else {
                var oData = {
                    images: [oSprite],
                    // width, height & registration point of each sprite
                    frames: {width: oSprite.width / 8, height: oSprite.height / 2, regX: (oSprite.width / 2) / 8, regY: (oSprite.height / 2) / 2},
                    animations: {reflect: [0, 15, "reflect", 0.5]}
                };
                var oSpriteSheet = new createjs.SpriteSheet(oData);
                _oBrick = createSprite(oSpriteSheet, 0, (oSprite.width / 2) / 8, (oSprite.height / 2) / 2, oSprite.width / 8, oSprite.height / 2);
                _oInfoData["Effect"] = false;
                _oInfoData["Reflect"] = false;
            }
        }

        _oBrick.x = iXPos;
        _oBrick.y = iYPos;
        s_oStage.addChild(_oBrick);
    };

    this.getX = function () {
        return _oBrick.x;
    };

    this.getY = function () {
        return _oBrick.y;
    };

    this.setInfoData = function (szKey, oValue) {
        _oInfoData[szKey] = oValue;
    };

    this.getInfoData = function (szKey) {
        return _oInfoData[szKey];
    };

    this.animBrick = function (szState) {
        _oBrick.gotoAndPlay(szState);
        _oBrick.on("animationend", function () {
            s_oStage.removeChild(_oBrick);
        });
    };

    this.reflectBrick = function () {
        if (_oInfoData["Reflect"] === true) {
            return;
        }
        _oBrick.gotoAndPlay("reflect");
        _oBrick.on("animationend", function () {
            _oBrick.gotoAndStop("reflect");
            _oInfoData["Reflect"] = false;
        });
    };

    this.setPosition = function (iXPos, iYPos) {
        _oBrick.x = iXPos;
        _oBrick.y = iYPos;
    };

    this.setChildIndex = function (iValue) {
        s_oStage.setChildIndex(_oBrick, iValue);
    };

    this.damageBrick = function (iRes) {
        _oBrick.gotoAndStop(iRes);
    };


    this.unload = function () {
        s_oStage.removeChild(_oBrick);
        s_oBrick = null;
    };

    this.update = function () {

    };

    s_oBrick = this;

    this._init();
}

var s_oBrick;

