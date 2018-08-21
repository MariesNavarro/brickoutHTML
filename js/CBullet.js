function CBullet(iXPos, iYPos, oSprite) {

    var _oBullet;
    var _iCnt;
    var _iOffsetWallUp;
    var _iID;
    this._init = function () {
        var iHeight = oSprite.height / 2;

        _oBullet = createBitmap(oSprite);
        _oBullet.x = iXPos;
        _oBullet.y = iYPos;
        _oBullet.regX = oSprite.width / 2;
        _oBullet.regY = iHeight;

        s_oStage.addChild(_oBullet);
        _iCnt = 0;

        var iEdgeUpWidth = 30 + iHeight;
        _iOffsetWallUp = iEdgeUpWidth + iHeight;
    };

    this.getX = function () {
        return _oBullet.x;
    };

    this.getY = function () {
        return _oBullet.y;
    };

    this.setPosition = function (iXPos, iYPos) {
        if (iXPos === null) {

        } else {
            _oBullet.x = iXPos;
        }
        if (iYPos === null) {

        } else {
            _oBullet.y = iYPos;
        }
    };

    this.unload = function () {
        s_oStage.removeChild(_oBullet);
        s_oBullet = null;
    };

    this.setIndex = function (iID) {
        _iID = iID;
    };

    this.getIndex = function () {
        return _iID;
    };

    this.update = function () {
        _oBullet.y -= BULLET_SPEED;

        if (_oBullet.y < _iOffsetWallUp) {
            s_oGame.unloadBullet(_iID);
            playSound("brick_metal", 1, false);
        }
    };

    s_oBullet = this;

    this._init();
};

var s_oBullet;



