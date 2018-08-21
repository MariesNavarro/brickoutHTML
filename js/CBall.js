function CBall(iXPos, iYPos, oSprite, iXDir, iYDir, iSpeed, bFire, iRadius) {

    var _oBall;
    var _oInfoData = {};
    var _vDirection;
    var _vUpVector;
    var _iRadius;
    var _iOffsetWallRight;
    var _iOffsetWallLeft;
    var _iOffsetWallUp;
    var _iOffsetWallDown;
    var _iOffsetWallDownDown;
    var _iOffsetFallDown;
    var _bDownWall;
    var _iSpeed;
    var _iSpeedRate;
    var _iRotation = 0;

    this._init = function () {
        if (!bFire) {
            _oBall = createBitmap(oSprite);
        } else
        {
            var oData = {
                images: [oSprite],
                // width, height & registration point of each sprite
                frames: {width: oSprite.width / 8, height: oSprite.height, regX: (oSprite.width / 2) / 8, regY: oSprite.height / 2},
                animations: {fire: [0, 7, "fire", 0.5]}
            };
            var oSpriteSheet = new createjs.SpriteSheet(oData);
            _oBall = createSprite(oSpriteSheet, "fire", (oSprite.width / 2) / 8, oSprite.height / 2, oSprite.width / 8, oSprite.height);
        }

        _oBall.x = iXPos;
        _oBall.y = iYPos;

        _iRadius = iRadius + OFFSET_RADIUS_BALL;

        _bDownWall = false;

        _vDirection = new CVector2(iXDir, iYDir);
        _vUpVector = new CVector2(0, -1);

        _oBall.regX = _iRadius;
        _oBall.regY = _iRadius;

        var iEdgeRightWidth = -OFFSETEDGERIGHT - _iRadius;
        var iEdgeLeftWidth = OFFSETEDGELEFT + _iRadius;
        var iEdgeDownWidth = -OFFSETEDGEDOWN - _iRadius;
        var iEdgeUpWidth = OFFSETEDGEUP + _iRadius;
        _iOffsetWallRight = CANVAS_WIDTH + iEdgeRightWidth;
        _iOffsetWallLeft = iEdgeLeftWidth;
        _iOffsetWallDown = CANVAS_HEIGHT + iEdgeDownWidth - _iRadius;
        _iOffsetWallUp = iEdgeUpWidth + _iRadius;
        _iOffsetFallDown = CANVAS_HEIGHT + _iRadius;
        _iOffsetWallDownDown = CANVAS_HEIGHT + iEdgeDownWidth - _iRadius + OFFSETPOWERUPFLOOR;

        _iSpeedRate = iSpeed;

        _iSpeed = BALL_SPEED * _iSpeedRate;

        s_oStage.addChild(_oBall);
        s_oStage.setChildIndex(_oBall,1);
        
    };

    this.changeDirection = function (iXDir, iYDir, bPadding, szHit) {
        if (bPadding === true) {
            _vDirection.set(iXDir, _vDirection.getY() * iYDir);
        }
        else
        {
            if (szHit === "base") {
                _vDirection.set(_vDirection.getX() * iXDir, iYDir);
            } else if (szHit === "side") {
                _vDirection.set(_vDirection.getX() * iXDir, _vDirection.getY() * iYDir);
            } else if (szHit === "launch") {
                _vDirection.set(iXDir, iYDir);
            }
        }

    };

    this.changeSprite = function (oSprite, szType) {
        var iXPos = _oBall.x;
        var iYPos = _oBall.y;
        if (szType === "fire") {
            s_oStage.removeChild(_oBall);
            _oBall = null;
            var oData = {
                images: [oSprite],
                // width, height & registration point of each sprite
                frames: {width: oSprite.width / 8, height: oSprite.height, regX: (oSprite.width / 2) / 8, regY: oSprite.height / 2},
                animations: {fire: [0, 7, "fire", 0.5]}
            };
            var oSpriteSheet = new createjs.SpriteSheet(oData);
            _oBall = createSprite(oSpriteSheet, "fire", (oSprite.width / 2) / 8, oSprite.height / 2, oSprite.width / 8, oSprite.height);

            _oBall.x = iXPos;
            _oBall.y = iYPos;
            s_oStage.addChild(_oBall);
        }
        else {
            s_oStage.removeChild(_oBall);
            _oBall = createBitmap(oSprite);
            _oBall.x = iXPos;
            _oBall.y = iYPos;
            _oBall.regX = _iRadius;
            _oBall.regY = _iRadius;
            s_oStage.addChild(_oBall);
        }
        this.changeRotation();
        s_oStage.setChildIndex(_oBall,1);
    };

    this.downFloor = function (bVal) {
        _bDownWall = bVal;
    };

    this.getDirectionY = function () {
        return _vDirection.getY();
    };

    this.getX = function () {
        return _oBall.x;
    };

    this.getY = function () {
        return _oBall.y;
    };

    this.setDirection = function (x, y) {
        _vDirection.normalize();
        _vDirection.set(x, y);
        this.changeRotation();
    };

    this.changeRotation = function () {

        _iRotation = Math.round(toDegree(_vDirection.angleBetweenVectors(_vUpVector)));
        // identify if high or low direction
        if (_vDirection.getY() > 0) {
            //DOWN
            _iRotation *= -1;
            if (_vDirection.getX() >= 0) {
                // R
                _iRotation *= -1;
            }
        } else {
            //UP
            if (_vDirection.getX() <= 0) {
                // L
                _iRotation *= -1;
            }
        }
        _oBall.rotation = _iRotation;
    };

    this.setPosition = function (iXPos, iYPos) {
        if (iXPos === null) {

        } else {
            _oBall.x = iXPos;
        }
        if (iYPos === null) {

        } else {
            _oBall.y = iYPos;
        }
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
        s_oStage.removeChild(_oBall);
        s_oBall = null;
    };

    this.setVelocityRate = function (iValue) {
        _iSpeedRate = iValue;
        _iSpeed = BALL_SPEED * _iSpeedRate;
    };
    
    this.update = function () {

        _oBall.x += (_iSpeed * _vDirection.getX());
        _oBall.y += (_iSpeed * _vDirection.getY());

        if (_oBall.x >= _iOffsetWallRight) {
            _vDirection.set(_vDirection.getX() * -1, _vDirection.getY());
            this.changeRotation();
            _oBall.x -= 1;
            playSound("boing", 1, false);
        } else if (_oBall.x <= _iOffsetWallLeft) {
            _vDirection.set(_vDirection.getX() * -1, _vDirection.getY());
            this.changeRotation();
            _oBall.x += 1;
            playSound("boing", 1, false);
        } else if (_oBall.y >= _iOffsetWallDown && _bDownWall === true && _oBall.y < _iOffsetWallDownDown) {
            _vDirection.set(_vDirection.getX(), _vDirection.getY() * -1);
            this.changeRotation();
            playSound("boing", 1, false);
        } else if (_oBall.y <= _iOffsetWallUp) {
            _vDirection.set(_vDirection.getX(), _vDirection.getY() * -1);
            this.changeRotation();
            playSound("boing", 1, false);
        } else if (_oBall.y > _iOffsetFallDown) {
            s_oGame.loseBall(_oInfoData["ID"]);
        } else if (_oBall.x <= _iOffsetWallLeft - 1) {
            _oBall.x += 2;
        } else if (_oBall.x >= _iOffsetWallRight + 1) {
            _oBall.x -= 2;
        } else if (_oBall.y <= _iOffsetWallUp - 1) {
            _oBall.y += 2;
        }
    };

    s_oBall = this;

    this._init();
}

var s_oBall;

