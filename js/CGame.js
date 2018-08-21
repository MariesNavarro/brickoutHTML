function CGame(oData, iLevel) {

    var _oBgLevel;
    var _oInterface;
    var _iLevel;
    var _bPause;
    var _aBall;
    var _aBrick;
    var _aBullet;
    var _oPadding;
    var _pPaddingDim = {};
    var _iRadius;
    var _iCheckDistance;
    var _fPhysicsTime = 0;
    var _aBrickSectionUpRight;
    var _aBrickSectionUpLeft;
    var _aBrickSectionDownRight;
    var _aBrickSectionDownLeft;
    var _aBrickSectionCenterH;
    var _aBrickSectionCenterY;
    var _iCanvasWidthHalf;
    var _iCanvasHeightHalf;
    var _pBrickDim = {};
    var _iCenterYDiagram;
    var _iTotBrick;
    var _iRow;
    var _iCenterXDiagram;
    var _iOffsetYBricks;
    var _iOffsetXBricks;
    var _iOffsetBounceYBricks;
    var _iOffsetBounceXBrick;
    var _iOffsetXPadRight;
    var _iOffsetXPadLeft;
    var _iOffsetYBallMagnetic;
    var _oSettingsLevel;
    var _aBonusOccurrence;
    var _aBonus;
    var _iNum_Of_Bonus_Spawned;
    var _iSpaceBetWall;
    var _bLaunch;
    var _iTimeFireBall;
    var _iTimeFloor;
    var _iTimeMagnetic;
    var _iTimeShot;
    var _bAlmostABonus;
    var _iTimeReflectBrick;
    var _bLargePad;
    var _bFireBall;
    var _bFloor;
    var _bMagnetic;
    var _bShot;
    var _bSlowBall;
    var _bFastBall;
    var _bSmallPad;
    var _oSpriteBullet;
    var _oPowerUpEdge;
    var _iLife;
    var _iScore;
    var _iBulletSPWRate;
    var _iFiredBullet;
    var _bShotLeft;
    var _iSpeedBallRate;
    var _iOffsetWallRight;
    var _iOffsetWallLeft;
    var _iOffsetBrickYPos;
    var _iOffsetBrickXPos;
    var _iOffsetBrickSectionX;
    var _iOffsetBrickSectionY;
    var _oDetectiveX = {};
    var _oDetectiveY = {};
    var _oCannons;
    var _iCurAngleRot;
    var _fTimeBounce;
    var _iLevelAds;

    this._init = function () {
        _bPause = false;
        var oSpriteBall = s_oSpriteLibrary.getSprite("normal_ball");
        _iNum_Of_Bonus_Spawned = 0;
        _iCanvasWidthHalf = CANVAS_WIDTH / 2;
        _iCanvasHeightHalf = CANVAS_HEIGHT / 2;

        _aBall = new Array();
        _aBrick = new Array();
        _aBonus = new Array();

        _iSpaceBetWall = SPACE_BETWEEN_BRICKS;
        _iCheckDistance = 0;
        _iTotBrick = 0;

        var oSpriteBrick = s_oSpriteLibrary.getSprite("brick0");
        _pBrickDim = {x: oSpriteBrick.width / 2, y: oSpriteBrick.height / 2};

        _iSpeedBallRate = 1;
        _iRadius = (oSpriteBall.height / 2) + OFFSET_RADIUS_BALL;
        _iLevel = iLevel;
        _iScore = 0;
        _fTimeBounce = 0;
        _iBulletSPWRate = MAX_TIME_SHOT_BONUS;
        _iLife = LIFE;

        _oSettingsLevel = new CSettingsLevel();
        _aBrickSectionDownLeft = new Array();
        _aBrickSectionDownRight = new Array();
        _aBrickSectionUpLeft = new Array();
        _aBrickSectionUpRight = new Array();
        _aBrickSectionCenterH = new Array();
        _aBrickSectionCenterY = new Array();

        this.createPadding(CANVAS_WIDTH / 2);

        _bLargePad = false;
        _bFireBall = false;
        _bFloor = false;
        _bMagnetic = false;
        _bShot = false;
        _bSlowBall = false;
        _bFastBall = false;
        _bSmallPad = false;
        _bAlmostABonus = false;

        _iTimeShot = 0;
        _iLevelAds = 0;

        var iEdgeRightWidth = -OFFSETEDGERIGHT - _iRadius;
        var iEdgeLeftWidth = OFFSETEDGELEFT + _iRadius;

        _iOffsetWallRight = CANVAS_WIDTH + iEdgeRightWidth;
        _iOffsetWallLeft = iEdgeLeftWidth;

        _oBgLevel = createBitmap(s_oSpriteLibrary.getSprite("bg_level_1"));
        s_oStage.addChild(_oBgLevel); //Draws on canvas
        _oBgLevel.addEventListener("click", this.launchBall);
        s_oStage.setChildIndex(_oBgLevel, 0);

        _aBonusOccurrence = new Array();
        _iOffsetYBricks = _pBrickDim.y + _iRadius + OFFSET_HEIGHT_BRICK;
        _iOffsetXBricks = _pBrickDim.x + _iRadius + OFFSET_WIDTH_BRICK;
        _iOffsetBounceYBricks = _iOffsetYBricks + OFFSET_Y_BRICK;
        _iOffsetBounceXBrick = _iOffsetXBricks + OFFSET_X_BRICK;
        _iOffsetXPadLeft = EDGE_OFFSET + _pPaddingDim.x;
        _iOffsetXPadRight = CANVAS_WIDTH - EDGE_OFFSET - _pPaddingDim.x;
        _iOffsetXPadLeft = EDGE_OFFSET + _pPaddingDim.x;
        _iOffsetYBallMagnetic = OFFSET_PAD_MAGNETIC_Y;
        _iOffsetBrickYPos = (_pBrickDim.y * 2) + OFFSET_BRICK_Y_POS;
        _iOffsetBrickXPos = (_pBrickDim.x * 2);

        _iOffsetBrickSectionX = OFFSET_BRICK_SECTION_X + OFFSET_DETECTION_BRICK_SECTION_X;
        _iOffsetBrickSectionY = OFFSET_BRICK_SECTION_Y + OFFSET_DETECTION_BRICK_SECTION_Y;
        _iTimeReflectBrick = TIME_REFLECT_IRON_BRICK;

        _oInterface = new CInterface();

        this.createABall(0, _oPadding.x, _oPadding.y - _iRadius - _pPaddingDim.y, oSpriteBall, true);
        this.createLevel();
        if (_iLevel < 1) {
            _oInterface.help(_iLevel);
        } else {
            _oInterface.showNumLevel(_iLevel + 1);
        }
        _oInterface.numLevel(_iLevel);

        _bShotLeft = true;
        _bLaunch = false;
        _iFiredBullet = 0;

        setVolume("soundtrack", 0.3);
    };

    this.launchBall = function () {
        if (_bLaunch === false && _bPause === false) {

            if (_oPadding.x > _iCanvasWidthHalf) {
                _oPadding.x -= _iCanvasWidthHalf;
                _iCurAngleRot = -(_oPadding.x / _iCanvasWidthHalf);
            } else {
                _iCurAngleRot = _oPadding.x / _iCanvasWidthHalf;
            }

            _aBall[0].setPosition(null, _aBall[0].getY() - 3);
            _aBall[0].setDirection(_iCurAngleRot, -1);
            _aBall[0].setInfoData("OnPad", false);
            _bLaunch = true;
        } else if (_bMagnetic === true) {
            s_oGame.launchUnmagneticBall();
        }
    };

    this.createLevel = function () {
        this.setLevelBrick();
        $(s_oMain).trigger("start_level", _iLevel);
        _aBonusOccurrence = _oSettingsLevel.createBonusOccurance(_iLevel);
    };

    this.createABall = function (iID, iXPos, iYPos, oSpriteBall, bVal, iXDir, iYDir) {
        _aBall[iID] = new CBall(iXPos, iYPos, oSpriteBall, iXDir, iYDir, _iSpeedBallRate, _bFireBall, _iRadius);
        _aBall[iID].setInfoData("ID", iID);
        _aBall[iID].setInfoData("OnPad", bVal);
        _aBall[iID].setInfoData("Collision", 0);
        _aBall[iID].changeRotation();
        if (_bFloor === true) {
            _aBall[iID].downFloor(true);
        }
        if (bVal === true) {
            _bLaunch = false;
        }
    };
    this.generateABonus = function (iXPos, iYPos) {
        var iTypeRand = Math.floor(Math.random() * _aBonusOccurrence.length);
        var oSpriteBonus = s_oSpriteLibrary.getSprite("bonus" + _aBonusOccurrence[iTypeRand]);
        _aBonus.push(new CBonus(iXPos, iYPos, oSpriteBonus, _aBonusOccurrence[iTypeRand]));
        _aBonus[_iNum_Of_Bonus_Spawned].setInfoData("ID", _iNum_Of_Bonus_Spawned);
        _iNum_Of_Bonus_Spawned++;
    };

    this.createPadding = function (iXPos) {
        if (_oPadding) {
            s_oStage.removeChild();
        }
        var oSprite = s_oSpriteLibrary.getSprite("paddle");

        var oData = {
            images: [oSprite],
            // width, height & registration point of each sprite
            frames: {width: oSprite.width / 7, height: oSprite.height / 2, regX: (oSprite.width / 2) / 7, regY: (oSprite.height / 2) / 7},
            animations: {
                small: {
                    frames: [0]
                },
                normal: {
                    frames: [6]
                },
                big: {
                    frames: [12]
                },
                StoN: {
                    frames: [1, 2, 3, 4, 5, 6]
                },
                NtoB: {
                    frames: [7, 8, 9, 10, 11, 12]
                },
                BtoN: {
                    frames: [11, 10, 9, 8, 7, 6]
                },
                NtoS: {
                    frames: [5, 4, 3, 2, 1, 0]
                }
            }
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _oPadding = createSprite(oSpriteSheet, "normal", (oSprite.width / 2) / 7, (oSprite.height / 2) / 2, oSprite.width / 7, oSprite.height / 2);

        _oPadding.x = iXPos;
        _oPadding.y = HEIGHT_OF_PADDLE;
        s_oStage.addChild(_oPadding);
        s_oStage.setChildIndex(_oPadding, 3);
        _pPaddingDim = {x: PADDLE_DIMENSION[1] / 2, y: ((oSprite.height / 2) / 2) - OFFSET_PAD_Y};

    };

    this.setLevelBrick = function () {
        var aLevelDiagram = BRICKS_LEVEL_POSITION[_iLevel];
        var iBrickNum = 0;
        var iMakeBrick = 0;
        _iRow = aLevelDiagram.length / MAX_BRICK_FOR_ROW;
        for (var i = 0; i < _iRow; i++) {
            for (var j = 0; j < MAX_BRICK_FOR_ROW; j++) {
                if (aLevelDiagram[iBrickNum] !== -1) {
                    var oSpriteBrick = s_oSpriteLibrary.getSprite("brick" + aLevelDiagram[iBrickNum]);
                    var iXPos = CANVAS_WIDTH / 2 - 250 - _iSpaceBetWall + ((_iOffsetBrickXPos + _iSpaceBetWall) * j);
                    var iYPos = CANVAS_HEIGHT / 2 - 310 + ((_iOffsetBrickYPos + _iSpaceBetWall) * i);
                    _aBrick[iMakeBrick] = new CBrick(iXPos, iYPos, oSpriteBrick, BRICKS_RESISTANCE[aLevelDiagram[iBrickNum]], BRICKS_DESTRUCTIBLE[aLevelDiagram[iBrickNum]]);
                    _aBrick[iMakeBrick].setInfoData("resistance", BRICKS_RESISTANCE[aLevelDiagram[iBrickNum]]);
                    _aBrick[iMakeBrick].setInfoData("score", BRICKS_SCORE[aLevelDiagram[iBrickNum]]);
                    _aBrick[iMakeBrick].setInfoData("destructible", BRICKS_DESTRUCTIBLE[aLevelDiagram[iBrickNum]]);
                    _aBrick[iMakeBrick].setChildIndex(4);

                    if (BRICKS_DESTRUCTIBLE[aLevelDiagram[iBrickNum]] === true) {
                        _iTotBrick++; //TOTAL BRICK TO DESTROY FOR COMPLETE THE LEVEL
                    }
                    else
                    {
                        //DON'T COUNT THE INDESTRUCTIBLE BRICKS
                    }
                    iMakeBrick++;
                }
                iBrickNum++;
            }
        }

        _iCheckDistance = _aBrick[iMakeBrick - 1].getY() + OFFSET_DIAGRAM_CHECK + _pBrickDim.y;
        this.createBricksSections();
    };

    this.loseBall = function (iID) {
        this.unloadBall(iID);
        if (_aBall.length < 1) {
            _iLife--;
            _oInterface.refreshBallLife(_iLife);
            if (_bLargePad === true) {
                this.deactiveLargePad();
            } else if (_bSmallPad === true) {
                this.deactiveSmallPad();
            }

            if (_bShot === true) {
                _iTimeShot = 0;
            } else if (_bMagnetic === true) {
                this.deactiveMagnetic();
            }

            if (_bFloor === true) {
                this.deactiveFloor();
            }
            if (_bFireBall === true) {
                this.stopFireSound();
            }

            _bLargePad = false;
            _bFireBall = false;
            _bFloor = false;
            _bMagnetic = false;
            _bSlowBall = false;
            _bFastBall = false;

            _iSpeedBallRate = 1;

            this.checkOtherActiveBonus();
            //create a ball if the user has more than a life
            if (_iLife > 0) {
                _bLaunch = false;
                var oSpriteBall = s_oSpriteLibrary.getSprite("normal_ball");
                this.createABall(0, _oPadding.x, _oPadding.y - _iRadius - _pPaddingDim.y, oSpriteBall, true);
            }
            else
            {
                _oInterface.gameOver(_iScore);
            }
        }
        playSound("ball_lose", 1, false);
    };

    this.setPause = function (bVal) {
        _bPause = bVal;
    };

    this.createBricksSections = function () {

        var iInsBrickRUp = 0;
        var iInsBrickLUp = 0;
        var iInsBrickRDown = 0;
        var iInsBrickLDown = 0;
        var iInsBrickCenterX = 0;
        var iInsBrickCenterY = 0;

        if (_iRow % 2 === 1) {
            _iCenterYDiagram = _aBrick[Math.floor(_aBrick.length / 2)].getY() + _pBrickDim.y * 2 + OFFSET_CENTER_Y_DIAGRAM;
        }
        else
        {
            _iCenterYDiagram = _aBrick[Math.floor(_aBrick.length / 2)].getY() - _pBrickDim.y + OFFSET_CENTER_Y_DIAGRAM;
        }

        _iCenterXDiagram = _iCanvasWidthHalf + _iOffsetYBricks + Math.floor(_iSpaceBetWall / 2) + OFFSET_CENTER_X_DIAGRAM;

        _oDetectiveX = {left: _iCenterXDiagram + _iOffsetBrickSectionX, right: _iCenterXDiagram - _iOffsetBrickSectionX, cleft: _iCenterXDiagram + OFFSET_BRICK_SECTION_X, cright: _iCenterXDiagram - OFFSET_BRICK_SECTION_X};
        _oDetectiveY = {down: _iCenterYDiagram + OFFSET_BRICK_SECTION_Y, up: _iCenterYDiagram - OFFSET_BRICK_SECTION_Y, cdown: _iCenterYDiagram + OFFSET_DETECTION_BRICK_SECTION_Y, cup: _iCenterYDiagram - OFFSET_DETECTION_BRICK_SECTION_Y};

        for (var i = 0; i < _aBrick.length; i++) {
            //INSERTION OF BRICKS IN SUB ARRAY
            if (_aBrick[i].getX() <= _iCenterXDiagram - OFFSET_BRICK_SECTION_X && _aBrick[i].getY() < _iCenterYDiagram - OFFSET_BRICK_SECTION_Y) {
                _aBrickSectionUpLeft[iInsBrickLUp] = _aBrick[i];
                iInsBrickLUp++;
            } else
            if (_aBrick[i].getX() >= _iCenterXDiagram + OFFSET_BRICK_SECTION_X && _aBrick[i].getY() < _iCenterYDiagram - OFFSET_BRICK_SECTION_Y) {
                _aBrickSectionUpRight[iInsBrickRUp] = _aBrick[i];
                iInsBrickRUp++;
            } else
            if (_aBrick[i].getX() <= _iCenterXDiagram - OFFSET_BRICK_SECTION_X && _aBrick[i].getY() > _iCenterYDiagram + OFFSET_BRICK_SECTION_Y) {
                _aBrickSectionDownLeft[iInsBrickLDown] = _aBrick[i];
                iInsBrickLDown++;
            } else
            if (_aBrick[i].getX() >= _iCenterXDiagram + OFFSET_BRICK_SECTION_X && _aBrick[i].getY() > _iCenterYDiagram + OFFSET_BRICK_SECTION_Y) {
                _aBrickSectionDownRight[iInsBrickRDown] = _aBrick[i];
                iInsBrickRDown++;
            } else if (_aBrick[i].getX() <= _iCenterXDiagram + OFFSET_BRICK_SECTION_X && _aBrick[i].getX() >= _iCenterXDiagram - OFFSET_BRICK_SECTION_X) {
                _aBrickSectionCenterH[iInsBrickCenterX] = _aBrick[i];
                iInsBrickCenterX++;
            } else if (_aBrick[i].getY() <= _iCenterYDiagram + OFFSET_BRICK_SECTION_Y && _aBrick[i].getY() >= _iCenterYDiagram - OFFSET_BRICK_SECTION_Y && _aBrick[i] && _aBrick[i].getX() >= _iCenterXDiagram + OFFSET_BRICK_SECTION_X || _aBrick[i].getX() <= _iCenterXDiagram - OFFSET_BRICK_SECTION_X) {
                _aBrickSectionCenterY[iInsBrickCenterY] = _aBrick[i];
                iInsBrickCenterY++;
            }
        }
    };

    this.onExit = function () {
        s_oGame.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("end_level", _iLevel);
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("show_interlevel_ad");
        setVolume("soundtrack", 1);
    };

    this.bonusLargePad = function () {
        _iScore += BONUS_SCORE.s0;
        _oInterface.refreshScore(_iScore);
        if (_bSmallPad === true) {
            this.deactiveSmallPad();
            return;
        } else if (_bMagnetic === true) {
            this.deactiveMagnetic();
        } else if (_oCannons) {
            _iTimeShot = 0;
            _oCannons.gotoAndPlay("go");
            _oCannons.on("animationend", function () {
                s_oStage.removeChild(_oCannons);
                _oCannons = null;
            });
        }
        this.audioPowerUpBonus();
        if (_bLargePad) {
            return;
        }

        _pPaddingDim.x = PADDLE_DIMENSION[2] / 2;
        _oPadding.gotoAndPlay("NtoB");
        _oPadding.on("animationend", function () {
            _oPadding.gotoAndStop("big");
        });
        _bLargePad = true;
        _iOffsetXPadRight = CANVAS_WIDTH - EDGE_OFFSET - _pPaddingDim.x;
        _iOffsetXPadLeft = EDGE_OFFSET + _pPaddingDim.x;

    };
    this.bonusSmallPad = function () {
        _iScore += BONUS_SCORE.s9;
        _oInterface.refreshScore(_iScore);
        this.audioPowerUpMalus();
        if (_bLargePad === true) {
            this.deactiveLargePad();
            return;
        } else if (_bMagnetic === true) {
            this.deactiveMagnetic();
        } else if (_oCannons) {
            _iTimeShot = 0;
            _oCannons.gotoAndPlay("go");
            _oCannons.on("animationend", function () {
                s_oStage.removeChild(_oCannons);
                _oCannons = null;
            });
        }
        if (_bSmallPad) {
            return;
        }
        _pPaddingDim.x = PADDLE_DIMENSION[0] / 2;
        _oPadding.gotoAndPlay("NtoS");
        _oPadding.on("animationend", function () {
            _oPadding.gotoAndStop("small");
        });
        _bSmallPad = true;
        _iOffsetXPadRight = CANVAS_WIDTH - EDGE_OFFSET - _pPaddingDim.x;
        _iOffsetXPadLeft = EDGE_OFFSET + _pPaddingDim.x;
    };

    this.bonusMultiBall = function () {
        _iScore += BONUS_SCORE.s5;
        _oInterface.refreshScore(_iScore);

        if (_aBall.length >= MAX_BALL_SPAWN) {
            return;
        }
        this.audioPowerUpBonus();
        var iAddBalls = 0;
        var iCnt = 0;
        var oSpriteBall;
        iAddBalls = _aBall.length + BONUS_MULTI_BALL;
        var iNBallsPres = _aBall.length;
        if (_bFireBall === false && _bMagnetic === false) {
            oSpriteBall = s_oSpriteLibrary.getSprite("normal_ball");
        } else if (_bFireBall === true) {
            oSpriteBall = s_oSpriteLibrary.getSprite("fire_ball");
        }
        else {
            oSpriteBall = s_oSpriteLibrary.getSprite("iron_ball");
        }
        for (var i = iNBallsPres; i < iNBallsPres + iAddBalls; i++) {
            if (iCnt % 2 === 0) {
                this.createABall(i, _aBall[iCnt].getX(), _aBall[iCnt].getY(), oSpriteBall, false, 1, -1);
            }
            else
            {
                this.createABall(i, _aBall[iCnt].getX(), _aBall[iCnt].getY(), oSpriteBall, false, -1, 1);
            }
            iCnt++;
        }
    };
    this.bonusFireBall = function () {
        _iScore += BONUS_SCORE.s1;
        _oInterface.refreshScore(_iScore);
        _iTimeFireBall = BONUS_TIME.t1;
        if (_bFireBall === true) {
            return;
        }
        var oSpriteFireBall = s_oSpriteLibrary.getSprite("fire_ball");
        for (var i = 0; i < _aBall.length; i++) {
            _aBall[i].changeSprite(oSpriteFireBall, "fire");
        }
        _bFireBall = true;
        if (_bMagnetic === true) {
            s_oStage.removeChild(_oPadding);
            this.createPadding(_oPadding.x);
            this.launchUnmagneticBall();
            _bMagnetic = false;
        }
        _bAlmostABonus = true;

        playSound("fireball", 1,true);

        this.audioPowerUpBonus();
    };

    this.createFloor = function () {
        var oSpriteEdge = s_oSpriteLibrary.getSprite("powerup_edge");
        _oPowerUpEdge = createBitmap(oSpriteEdge);
        _oPowerUpEdge.x = _iCanvasWidthHalf;
        _oPowerUpEdge.y = CANVAS_HEIGHT + oSpriteEdge.height / 2;
        _oPowerUpEdge.regX = oSpriteEdge.width / 2;
        _oPowerUpEdge.regY = oSpriteEdge.height / 2;
        s_oStage.addChild(_oPowerUpEdge);
        s_oStage.setChildIndex(_oPowerUpEdge, s_oStage.numChildren - 1);
        createjs.Tween.get(_oPowerUpEdge).to({y: 940}, 800, createjs.Ease.backOut);
    };

    this.bonusMagnetic = function () {
        _iScore += BONUS_SCORE.s3;
        _oInterface.refreshScore(_iScore);
        _iTimeMagnetic = BONUS_TIME.t3;
        this.audioPowerUpBonus();
        if (_bMagnetic === true) {
            return;
        }
        var oSpriteIronBall = s_oSpriteLibrary.getSprite("iron_ball");
        for (var i = 0; i < _aBall.length; i++) {
            _aBall[i].changeSprite(oSpriteIronBall, "magnetic");
        }
        if (_bLargePad === true) {
            _oPadding.gotoAndPlay("BtoN");
            _oPadding.on("animationend", function () {
                s_oStage.removeChild(_oPadding);
                s_oGame.createMagneticPad(_oPadding.x);
            });
            _bLargePad = false;
        } else if (_bSmallPad === true) {
            _oPadding.gotoAndPlay("StoN");
            _oPadding.on("animationend", function () {
                s_oStage.removeChild(_oPadding);
                s_oGame.createMagneticPad(_oPadding.x);
            });
            _bSmallPad = false;
        } else if (_oCannons) {
            _iTimeShot = 0;
            _oCannons.gotoAndPlay("go");
            _oCannons.on("animationend", function () {
                s_oStage.removeChild(_oCannons);
                _oCannons = null;
                s_oStage.removeChild(_oPadding);
                s_oGame.createMagneticPad(_oPadding.x);
            });
        } else {
            this.createMagneticPad(_oPadding.x);
        }

        if (_bFireBall === true) {
            _bFireBall = false;
            this.stopFireSound();
        }

        _bMagnetic = true;
        _bAlmostABonus = true;
    };

    this.createMagneticPad = function (iXPos) {

        s_oStage.removeChild(_oPadding);
        var oSprite = s_oSpriteLibrary.getSprite("paddle_magnet");

        var oData = {
            images: [oSprite],
            // width, height & registration point of each sprite
            frames: {width: oSprite.width / 5, height: oSprite.height / 2, regX: ((oSprite.width + REG_X_OFFSET_PADDLE_MAGNETIC) / 2) / 5, regY: ((oSprite.height + REG_Y_OFFSET_PADDLE_MAGNETIC) / 2) / 7},
            animations: {magnetic: [0, 9, "magnetic", 0.5]}
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _oPadding = createSprite(oSpriteSheet, "magnetic", ((oSprite.width + REG_X_OFFSET_PADDLE_MAGNETIC) / 2) / 5, ((oSprite.height + REG_Y_OFFSET_PADDLE_MAGNETIC) / 2) / 2, oSprite.width / 5, oSprite.height / 2);

        _oPadding.x = iXPos;
        _oPadding.y = HEIGHT_OF_PADDLE;
        s_oStage.addChild(_oPadding);

        _pPaddingDim.x = PADDLE_DIMENSION[1] / 2;
        _iOffsetXPadRight = CANVAS_WIDTH - EDGE_OFFSET - _pPaddingDim.x;
        _iOffsetXPadLeft = EDGE_OFFSET + _pPaddingDim.x;
    };

    this.bonusLife = function () {
        _iScore += BONUS_SCORE.s4;
        _oInterface.refreshScore(_iScore);
        _oInterface.refreshBallLife(_iLife);
        _iLife++;
        this.audioPowerUpBonus();
    };

    this.bonusSlowBall = function () {
        _iScore += BONUS_SCORE.s7;
        _oInterface.refreshScore(_iScore);
        for (var i = 0; i < _aBall.length; i++) {
            _aBall[i].setVelocityRate(_iSpeedBallRate);
        }
        if (_iSpeedBallRate < 1) {
            _bSlowBall = true;
            this.audioPowerUpMalus();
        }
        else
        {
            this.audioPowerUpBonus();
        }

        if (_iSpeedBallRate > MIN_VELOCITY_LIMIT) {
            _iSpeedBallRate -= SPEED_DOWN_BALL;
        }

        if (_iSpeedBallRate < MIN_VELOCITY_LIMIT) {
            _iSpeedBallRate = MIN_VELOCITY_LIMIT;
        }


    };

    this.bonusFastBall = function () {
        _iScore += BONUS_SCORE.s8;
        _oInterface.refreshScore(_iScore);
        if (_iSpeedBallRate < MAX_VELOCITY_LIMIT) {
            _iSpeedBallRate += SPEED_UP_BALL;
        } else {
            return;
        }

        for (var i = 0; i < _aBall.length; i++) {
            _aBall[i].setVelocityRate(_iSpeedBallRate);
        }

        if (_iSpeedBallRate > 1) {
            _bFastBall = true;
            this.audioPowerUpMalus();
        }
        else
        {
            this.audioPowerUpBonus();
        }
    };

    this.bonusShot = function () {
        _iScore += BONUS_SCORE.s6;
        _oInterface.refreshScore(_iScore);
        this.audioPowerUpBonus();
        _iTimeShot = BONUS_TIME.t6;
        if (_bShot === false) {
            _bShot = true;
            _oSpriteBullet = s_oSpriteLibrary.getSprite("bullet");
            _aBullet = new Array();
            if (_bLargePad === true) {
                _oPadding.gotoAndPlay("BtoN");
                _oPadding.on("animationend", function () {
                    _oPadding.gotoAndStop("normal");
                });
                _bLargePad = false;
            } else if (_bSmallPad === true) {
                _oPadding.gotoAndPlay("StoN");
                _oPadding.on("animationend", function () {
                    _oPadding.gotoAndStop("normal");
                });
                _bSmallPad = false;
            } else if (_bMagnetic === true) {
                this.deactiveMagnetic();
            }
            if (!_oCannons) {
                this.createCannons();
            }
            else
            {
                _oCannons.gotoAndPlay("come");
                _oCannons.on("animationend", function () {
                    _oCannons.gotoAndStop(5);
                });
            }
        }
        _bAlmostABonus = true;
    };

    this.bonusFloor = function () {
        _iScore += BONUS_SCORE.s2;
        _oInterface.refreshScore(_iScore);
        _iTimeFloor = BONUS_TIME.t2;
        if (_bFloor !== true) {
            if (!_oPowerUpEdge) {
                this.createFloor();
            }
            else
            {
            }
            for (var i = 0; i < _aBall.length; i++) {
                _aBall[i].downFloor(true);
            }
        }
        _bFloor = true;
        _bAlmostABonus = true;

        this.audioPowerUpBonus();
    };

    this.createCannons = function () {
        var oSprite = s_oSpriteLibrary.getSprite("cannons");
        var oData = {
            images: [oSprite],
            // width, height & registration point of each sprite
            frames: {width: oSprite.width / 3, height: oSprite.height / 2, regX: (oSprite.width / 2) / 3, regY: (oSprite.height / 2) / 2},
            animations: {
                come: {
                    frames: [0, 1, 2, 3, 4, 5],
                    speed: 0.5
                },
                go: {
                    frames: [5, 4, 3, 2, 1, 0],
                    speed: 0.5
                }
            }
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _oCannons = createSprite(oSpriteSheet, "come", (oSprite.width / 2) / 3, (oSprite.height / 2) / 2, oSprite.width / 3, oSprite.height / 2);
        _oCannons.x = _oPadding.x;
        _oCannons.y = _oPadding.y + OFFSET_CANNONS_Y_POS;
        s_oStage.addChild(_oCannons);

        _oCannons.on("animationend", function () {
            _oCannons.gotoAndStop(5);
        });
        s_oStage.setChildIndex(_oCannons, 5);
        _pPaddingDim.x = (PADDLE_DIMENSION[1] + OFFSET_DIM_X_CANNONS) / 2;
        _iOffsetXPadRight = CANVAS_WIDTH - EDGE_OFFSET - _pPaddingDim.x;
        _iOffsetXPadLeft = EDGE_OFFSET + _pPaddingDim.x;
    };

    this.launchUnmagneticBall = function () {
        for (var i = 0; i < _aBall.length; i++) {
            if (_aBall[i].getInfoData("OnPad") === true) {
                var iDirection = _aBall[i].getInfoData("Collision") / _pPaddingDim.x;
                var iCurAngleRot = Math.sin(iDirection);
                _aBall[i].setPosition(null, _aBall[i].getY() - 2);
                _aBall[i].changeDirection(-iCurAngleRot, -1, false, "launch");
                _aBall[i].setInfoData("OnPad", false);
                _aBall[i].changeRotation();
            }
        }
    };

    this.unload = function () {
        _oInterface.unload();
        for (var i = 0; i < _aBall.length; i++) {
            _aBall[i].unload();
        }

        for (var i = 0; i < _aBonus.length; i++) {
            _aBonus[i].unload();
        }

        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();
    };

    this.__updatePhysics = function (fPhysicsScaleTime) {
        var fSecond = (1 / createjs.Ticker.framerate) / _iPhysicsUpdateTime;
        _oPadding.x = s_oStage.mouseX;
        if (_oPadding.x < _iOffsetXPadLeft) {
            _oPadding.x = _iOffsetXPadLeft;
        }

        if (_oPadding.x > _iOffsetXPadRight) {
            _oPadding.x = _iOffsetXPadRight;
        }

        if (_oCannons) {
            _oCannons.x = _oPadding.x;
        }


        for (var i = 0; i < _aBall.length; i++) {
            if (_aBall[i].getInfoData("OnPad") === false) {
                var iBallX = _aBall[i].getX();
                var iBallY = _aBall[i].getY();
                _aBall[i].update(fPhysicsScaleTime);

                if (iBallX > _oPadding.x - _pPaddingDim.x && iBallX < _oPadding.x + _pPaddingDim.x && iBallY > (_oPadding.y - _pPaddingDim.y) - _iRadius && iBallY < (_oPadding.y + _pPaddingDim.y) + _iRadius) {

                    if (_bMagnetic === false) {
                        if (_iCurAngleRot === 0) {
                            var iCollision = (_oPadding.x - iBallX);
                            var iDirection = iCollision / _pPaddingDim.x;
                            _aBall[i].setPosition(null, iBallY - 1);
                            _iCurAngleRot = Math.sin(iDirection);
                            _aBall[i].changeDirection(-_iCurAngleRot, -1, true);
                            _aBall[i].changeRotation();
                        }
                        _iCurAngleRot = 0;
                    }
                    else
                    {
                        var iCollision = (_oPadding.x - _aBall[i].getX());
                        _aBall[i].setInfoData("Collision", iCollision);
                        if (_aBall[i].getInfoData("OnPad") === false) {
                            _aBall[i].setPosition(null, _oPadding.y - _pPaddingDim.y - _iRadius);
                            _aBall[i].setInfoData("OnPad", true);
                        }
                        break;
                    }
                    this.audioBoing();
                }

                if (iBallY < _iCheckDistance) {
                    if (iBallX < _oDetectiveX.left && iBallY > _oDetectiveY.down) {
                        for (var j = 0; j < _aBrickSectionDownLeft.length; j++) {
                            if (iBallX > _aBrickSectionDownLeft[j].getX() - _iOffsetXBricks && iBallX < _aBrickSectionDownLeft[j].getX() + _iOffsetXBricks && iBallY > _aBrickSectionDownLeft[j].getY() - _iOffsetYBricks && iBallY < _aBrickSectionDownLeft[j].getY() + _iOffsetYBricks) {
                                var iBrickX = _aBrickSectionDownLeft[j].getX();
                                var iBrickY = _aBrickSectionDownLeft[j].getY();
                                this.gestureBricks(_aBrickSectionDownLeft, j, iBrickX, iBrickY);
                                this.ballBounce(i, iBallX, iBallY, iBrickX, iBrickY);
                                break;
                            }
                        }
                    } else if (iBallX > _oDetectiveX.right && iBallY > _oDetectiveY.down) {
                        for (var j = 0; j < _aBrickSectionDownRight.length; j++) {
                            if (iBallX > _aBrickSectionDownRight[j].getX() - _iOffsetXBricks && iBallX < _aBrickSectionDownRight[j].getX() + _iOffsetXBricks && iBallY > _aBrickSectionDownRight[j].getY() - _iOffsetYBricks && iBallY < _aBrickSectionDownRight[j].getY() + _iOffsetYBricks) {
                                var iBrickX = _aBrickSectionDownRight[j].getX();
                                var iBrickY = _aBrickSectionDownRight[j].getY();
                                this.gestureBricks(_aBrickSectionDownRight, j, iBrickX, iBrickY);
                                this.ballBounce(i, iBallX, iBallY, iBrickX, iBrickY);
                                break;
                            }
                        }
                    }
                    else if (iBallX < _oDetectiveX.left && iBallY < _iCenterYDiagram) {
                        for (var j = 0; j < _aBrickSectionUpLeft.length; j++) {
                            if (iBallX > _aBrickSectionUpLeft[j].getX() - _iOffsetXBricks && iBallX < _aBrickSectionUpLeft[j].getX() + _iOffsetXBricks && iBallY > _aBrickSectionUpLeft[j].getY() - _iOffsetYBricks && iBallY < _aBrickSectionUpLeft[j].getY() + _iOffsetYBricks) {
                                var iBrickX = _aBrickSectionUpLeft[j].getX();
                                var iBrickY = _aBrickSectionUpLeft[j].getY();
                                this.gestureBricks(_aBrickSectionUpLeft, j, iBrickX, iBrickY);
                                this.ballBounce(i, iBallX, iBallY, iBrickX, iBrickY);
                            }
                        }
                    } else if (iBallX > _oDetectiveX.right && iBallY < _iCenterYDiagram) {
                        for (var j = 0; j < _aBrickSectionUpRight.length; j++) {
                            if (iBallX > _aBrickSectionUpRight[j].getX() - _iOffsetXBricks && iBallX < _aBrickSectionUpRight[j].getX() + _iOffsetXBricks && iBallY > _aBrickSectionUpRight[j].getY() - _iOffsetYBricks && iBallY < _aBrickSectionUpRight[j].getY() + _iOffsetYBricks) {
                                var iBrickX = _aBrickSectionUpRight[j].getX();
                                var iBrickY = _aBrickSectionUpRight[j].getY();
                                this.gestureBricks(_aBrickSectionUpRight, j, iBrickX, iBrickY);
                                this.ballBounce(i, iBallX, iBallY, iBrickX, iBrickY);
                                break;
                            }
                        }
                    }
                    if (iBallX > _oDetectiveX.cright && iBallX < _oDetectiveX.cleft) {
                        for (var j = 0; j < _aBrickSectionCenterH.length; j++) {
                            if (iBallX > _aBrickSectionCenterH[j].getX() - _iOffsetXBricks && iBallX < _aBrickSectionCenterH[j].getX() + _iOffsetXBricks && iBallY > _aBrickSectionCenterH[j].getY() - _iOffsetYBricks && iBallY < _aBrickSectionCenterH[j].getY() + _iOffsetYBricks) {
                                var iBrickX = _aBrickSectionCenterH[j].getX();
                                var iBrickY = _aBrickSectionCenterH[j].getY();
                                this.gestureBricks(_aBrickSectionCenterH, j, iBrickX, iBrickY);
                                this.ballBounce(i, iBallX, iBallY, iBrickX, iBrickY);
                                break;
                            }
                        }
                    }
                    if (iBallY < _oDetectiveY.cdown && iBallY > _oDetectiveY.cup) {
                        for (var j = 0; j < _aBrickSectionCenterY.length; j++) {
                            if (iBallX > _aBrickSectionCenterY[j].getX() - _iOffsetXBricks && iBallX < _aBrickSectionCenterY[j].getX() + _iOffsetXBricks && iBallY > _aBrickSectionCenterY[j].getY() - _iOffsetYBricks && iBallY < _aBrickSectionCenterY[j].getY() + _iOffsetYBricks) {
                                var iBrickX = _aBrickSectionCenterY[j].getX();
                                var iBrickY = _aBrickSectionCenterY[j].getY();
                                this.gestureBricks(_aBrickSectionCenterY, j, iBrickX, iBrickY);
                                this.ballBounce(i, iBallX, iBallY, iBrickX, iBrickY);
                                break;
                            }
                        }
                    }
                }
            }
            else
            {
                _aBall[i].setPosition(_oPadding.x - _aBall[i].getInfoData("Collision"), null);
                if (_aBall[i].getX() > _iOffsetWallRight) {
                    _aBall[i].setInfoData("Collision", _aBall[i].getInfoData("Collision") + 1);
                } else if (_aBall[i].getX() < _iOffsetWallLeft) {
                    _aBall[i].setInfoData("Collision", _aBall[i].getInfoData("Collision") - 1);
                }
            }
        }

        //ACTIVE BONUS
        this.timeBonus(fSecond);

        //REFLECT IRON BRICK
        if (_iTimeReflectBrick > 0) {
            _iTimeReflectBrick -= fSecond;
        }
        else
        {
            for (i = 0; i < _aBrick.length; i++) {
                if (_aBrick[i].getInfoData("destructible") === false) {
                    _aBrick[i].reflectBrick();
                    _aBrick[i].setInfoData("Reflect", true);
                }
                _iTimeReflectBrick = TIME_REFLECT_IRON_BRICK;
            }
        }

        if (_fTimeBounce > 0) {
            _fTimeBounce -= fSecond;
        }

        //BONUS
        if (_iNum_Of_Bonus_Spawned === 0) {
            return;
        }
        else
        {
            this.bonusGesture();
        }
    };

    this.allBrickDestroyed = function () {
        if (_iTotBrick > 0) {
            return;
        }
        else
        {
            this.setPause(true);
            _oInterface.levelComplete(_iLevel, _iScore);
            _iLevelAds++;
            if (_iLevelAds === NUM_LEVELS_FOR_ADS) {
                _iLevelAds = 0;
                $(s_oMain).trigger("show_interlevel_ad");
            }
            $(s_oMain).trigger("end_level", _iLevel);
            if (s_iLevelReached < _iLevel + 2) {
                s_iLevelReached = _iLevel + 2;
            }
        }
        if (_bFireBall === true) {
            this.stopFireSound();
        }
    };

    this.stopFireSound = function () {
        stopSound("fireball");
    };

    this.timeBonus = function (fSecond) {
        if (_bAlmostABonus === true) {
            if (_bFireBall === true) {
                if (_iTimeFireBall > 0) {
                    _iTimeFireBall -= fSecond;
                }
                else {
                    this.deactiveFireBall();
                    this.checkOtherActiveBonus();
                }
            } else if (_bMagnetic === true) {
                if (_iTimeMagnetic > 0) {
                    _iTimeMagnetic -= fSecond;
                }
                else {
                    this.deactiveMagnetic();
                    this.checkOtherActiveBonus();
                }
            }
            if (_bFloor === true) {
                if (_iTimeFloor > 0) {
                    _iTimeFloor -= fSecond;
                }
                else {
                    this.deactiveFloor();
                    this.checkOtherActiveBonus();
                }
            }
            if (_bShot === true) {
                if (_iTimeShot > 0) {
                    _iTimeShot -= fSecond;
                    _iBulletSPWRate -= 1;
                    if (_iBulletSPWRate < 0) {
                        if (_bShotLeft === true) {
                            _aBullet.push(new CBullet(_oPadding.x - _pPaddingDim.x, _oPadding.y - _pPaddingDim.y, _oSpriteBullet));
                            _bShotLeft = false;
                        } else {
                            _aBullet.push(new CBullet(_oPadding.x + _pPaddingDim.x, _oPadding.y - _pPaddingDim.y, _oSpriteBullet));
                            _bShotLeft = true;
                        }
                        _aBullet[_iFiredBullet].setIndex(_iFiredBullet);
                        _iBulletSPWRate = MAX_TIME_SHOT_BONUS;
                        _iFiredBullet++;
                        this.audioBullet();
                    }
                }
                if (_aBullet.length < 1 && _iTimeShot < 0.1) {
                    this.deactiveShot();
                    this.checkOtherActiveBonus();
                } else {
                    this.detectiveCollisionBullet();
                }
            }
        }
    };

    this.nextLevel = function () {
        this.unloadLevel();
        _iLevel++;
        this.createLevel();
        var oSpriteBall = s_oSpriteLibrary.getSprite("normal_ball");
        _iSpeedBallRate = 1;
        this.createABall(0, _oPadding.x, _oPadding.y - _iRadius - _pPaddingDim.y, oSpriteBall, true);
        _bShotLeft = true;
        _bLaunch = false;
        _iFiredBullet = 0;
        _oInterface.showNumLevel(_iLevel + 1);
        _oInterface.numLevel(_iLevel);
    };

    this.audioBrickExplosion = function () {
        playSound("brick_explosion", 1, false);
    };

    this.audioPowerUpBonus = function () {
        playSound("power_up_bonus", 1, false);
    };

    this.audioPowerUpMalus = function () {
        playSound("power_up_malus", 1, false);
    };

    this.audioBrickMetal = function () {
        playSound("brick_metal", 1, false);
    };

    this.audioBullet = function () {
        playSound("bullet", 1, false);
    };

    this.audioBoing = function () {
        playSound("boing", 1, false);
    };

    this.ballBounce = function (iID, iBallX, iBallY, iBrickX, iBrickY) {
        if (_bFireBall === true || _fTimeBounce > 0) {
            return;
        }
        if (iBallX > iBrickX + _iOffsetBounceXBrick || iBallX < iBrickX - _iOffsetBounceXBrick && iBallY > iBrickY - _iOffsetBounceYBricks && iBallY < iBrickY + _iOffsetBounceYBricks) {
            if (iBallX > iBrickX) {
                _aBall[iID].changeDirection(-1, 1, false, "side");
                _aBall[iID].setPosition(_aBall[iID].getX() + 3, null);
                _fTimeBounce = TIME_BOUNCE_BALL;
            }
            else
            {
                _aBall[iID].changeDirection(-1, 1, false, "side");
                _aBall[iID].setPosition(_aBall[iID].getX() - 3, null);
                _fTimeBounce = TIME_BOUNCE_BALL;
            }
        }
        else
        if (iBallX > iBrickX - _iOffsetXBricks && iBallX < iBrickX + _iOffsetXBricks && iBallY > iBrickY - _iOffsetYBricks && iBallY < iBrickY + _iOffsetYBricks) {
            if (iBallY > iBrickY) {
                _aBall[iID].changeDirection(1, 1, false, "base");
                _aBall[iID].setPosition(null, _aBall[iID].getY() + 3);
                _fTimeBounce = TIME_BOUNCE_BALL;
            }
            else
            {
                _aBall[iID].changeDirection(1, -1, false, "base");
                _aBall[iID].setPosition(null, _aBall[iID].getY() - 3);
                _fTimeBounce = TIME_BOUNCE_BALL;
            }
            _aBall[iID].changeRotation();
        }
        this.audioBoing();
    };

    this.gestureBricks = function (aBrick, iID, iBrickX, iBrickY) {
        if (aBrick[iID].getInfoData("destructible") === true || _bFireBall === true) {
            if (aBrick[iID].getInfoData("resistance") === 0) {
                _iScore += aBrick[iID].getInfoData("score");
                _oInterface.refreshScore(_iScore);
                if (aBrick[iID].getInfoData("destructible") === true) {
                    _iTotBrick--;
                    this.allBrickDestroyed();
                }
                if (aBrick[iID].getInfoData("Effect") === false) {
                    aBrick[iID].unload();
                }
                else
                {
                    aBrick[iID].animBrick("destroyed");
                    this.audioBrickExplosion();
                }
                this.randomBonus(iBrickX, iBrickY);
                aBrick.splice(iID, 1);
            }
            else
            {
                aBrick[iID].setInfoData("resistance", aBrick[iID].getInfoData("resistance") - 1);
                aBrick[iID].damageBrick(aBrick[iID].getInfoData("resistance"));

                playSound("brick_crack", 1, false);
            }
        } else {
            aBrick[iID].reflectBrick();
            aBrick[iID].setInfoData("Reflect", true);
            this.audioBrickMetal();
        }
    };

    this.detectiveCollisionBullet = function () {
        for (var i = 0; i < _aBullet.length; i++) {
            var iBallX = _aBullet[i].getX();
            var iBallY = _aBullet[i].getY();
            _aBullet[i].update();

            if (iBallY < _iCheckDistance) {
                if (iBallX < _oDetectiveX.left && iBallY > _iCenterYDiagram) {
                    for (var j = 0; j < _aBrickSectionDownLeft.length; j++) {
                        if (iBallX > _aBrickSectionDownLeft[j].getX() - _iOffsetXBricks && iBallX < _aBrickSectionDownLeft[j].getX() + _iOffsetXBricks && iBallY > _aBrickSectionDownLeft[j].getY() - _iOffsetYBricks && iBallY < _aBrickSectionDownLeft[j].getY() + _iOffsetYBricks) {
                            var iBrickX = _aBrickSectionDownLeft[j].getX();
                            var iBrickY = _aBrickSectionDownLeft[j].getY();
                            this.gestureBricks(_aBrickSectionDownLeft, j, iBrickX, iBrickY);
                            this.unloadBullet(_aBullet[i].getIndex());
                            break;
                        }
                    }
                } else if (iBallX > _oDetectiveX.right && iBallY > _iCenterYDiagram) {
                    for (var j = 0; j < _aBrickSectionDownRight.length; j++) {
                        if (iBallX > _aBrickSectionDownRight[j].getX() - _iOffsetXBricks && iBallX < _aBrickSectionDownRight[j].getX() + _iOffsetXBricks && iBallY > _aBrickSectionDownRight[j].getY() - _iOffsetYBricks && iBallY < _aBrickSectionDownRight[j].getY() + _iOffsetYBricks) {
                            var iBrickX = _aBrickSectionDownRight[j].getX();
                            var iBrickY = _aBrickSectionDownRight[j].getY();
                            this.gestureBricks(_aBrickSectionDownRight, j, iBrickX, iBrickY);
                            this.unloadBullet(_aBullet[i].getIndex());
                            break;
                        }
                    }
                }
                else if (iBallX < _oDetectiveX.left && iBallY < _iCenterYDiagram) {
                    for (var j = 0; j < _aBrickSectionUpLeft.length; j++) {
                        if (iBallX > _aBrickSectionUpLeft[j].getX() - _iOffsetXBricks && iBallX < _aBrickSectionUpLeft[j].getX() + _iOffsetXBricks && iBallY > _aBrickSectionUpLeft[j].getY() - _iOffsetYBricks && iBallY < _aBrickSectionUpLeft[j].getY() + _iOffsetYBricks) {
                            var iBrickX = _aBrickSectionUpLeft[j].getX();
                            var iBrickY = _aBrickSectionUpLeft[j].getY();
                            this.gestureBricks(_aBrickSectionUpLeft, j, iBrickX, iBrickY);
                            this.unloadBullet(_aBullet[i].getIndex());
                        }
                    }
                } else if (iBallX > _oDetectiveX.right && iBallY < _iCenterYDiagram) {
                    for (var j = 0; j < _aBrickSectionUpRight.length; j++) {
                        if (iBallX > _aBrickSectionUpRight[j].getX() - _iOffsetXBricks && iBallX < _aBrickSectionUpRight[j].getX() + _iOffsetXBricks && iBallY > _aBrickSectionUpRight[j].getY() - _iOffsetYBricks && iBallY < _aBrickSectionUpRight[j].getY() + _iOffsetYBricks) {
                            var iBrickX = _aBrickSectionUpRight[j].getX();
                            var iBrickY = _aBrickSectionUpRight[j].getY();
                            this.gestureBricks(_aBrickSectionUpRight, j, iBrickX, iBrickY);
                            this.unloadBullet(_aBullet[i].getIndex());
                            break;
                        }
                    }
                }
                if (iBallX > _oDetectiveX.cright && iBallX < _oDetectiveX.cleft) {
                    for (var j = 0; j < _aBrickSectionCenterH.length; j++) {
                        if (iBallX > _aBrickSectionCenterH[j].getX() - _iOffsetXBricks && iBallX < _aBrickSectionCenterH[j].getX() + _iOffsetXBricks && iBallY > _aBrickSectionCenterH[j].getY() - _iOffsetYBricks && iBallY < _aBrickSectionCenterH[j].getY() + _iOffsetYBricks) {
                            var iBrickX = _aBrickSectionCenterH[j].getX();
                            var iBrickY = _aBrickSectionCenterH[j].getY();
                            this.gestureBricks(_aBrickSectionCenterH, j, iBrickX, iBrickY);
                            this.unloadBullet(_aBullet[i].getIndex());
                            break;
                        }
                    }
                }
                if (iBallY < _oDetectiveY.cdown && iBallY > _oDetectiveY.cup) {
                    for (var j = 0; j < _aBrickSectionCenterY.length; j++) {
                        if (iBallX > _aBrickSectionCenterY[j].getX() - _iOffsetXBricks && iBallX < _aBrickSectionCenterY[j].getX() + _iOffsetXBricks && iBallY > _aBrickSectionCenterY[j].getY() - _iOffsetYBricks && iBallY < _aBrickSectionCenterY[j].getY() + _iOffsetYBricks) {
                            var iBrickX = _aBrickSectionCenterY[j].getX();
                            var iBrickY = _aBrickSectionCenterY[j].getY();
                            this.gestureBricks(_aBrickSectionCenterY, j, iBrickX, iBrickY);
                            this.unloadBullet(_aBullet[i].getIndex());
                            break;
                        }
                    }
                }
            }
        }
    };

    this.deactiveFireBall = function () {
        var oSpriteNormalBall = s_oSpriteLibrary.getSprite("normal_ball");
        for (var i = 0; i < _aBall.length; i++) {
            _aBall[i].changeSprite(oSpriteNormalBall, "normal");
        }
        _bFireBall = false;
        this.stopFireSound();
    };

    this.deactiveLargePad = function () {
        _oPadding.gotoAndPlay("BtoN");
        _oPadding.on("animationend", function () {
            _oPadding.gotoAndStop("normal");
        });
        _pPaddingDim.x = PADDLE_DIMENSION[1] / 2;

        _iOffsetXPadRight = CANVAS_WIDTH - 102 - _pPaddingDim.x;
        _iOffsetXPadLeft = 102 + _pPaddingDim.x;
        _bLargePad = false;
    };

    this.deactiveSmallPad = function () {

        _oPadding.gotoAndPlay("StoN");
        _oPadding.on("animationend", function () {
            _oPadding.gotoAndStop("normal");
        });
        _pPaddingDim.x = PADDLE_DIMENSION[1] / 2;

        _iOffsetXPadRight = CANVAS_WIDTH - 102 - _pPaddingDim.x;
        _iOffsetXPadLeft = 102 + _pPaddingDim.x;
        _bSmallPad = false;
    };

    this.deactiveFloor = function () {
        var oSpriteEdge = s_oSpriteLibrary.getSprite("powerup_edge");
        createjs.Tween.get(_oPowerUpEdge).to({y: CANVAS_HEIGHT + oSpriteEdge.height / 2}, 800, createjs.Ease.backIn).call(function () {
            if (_bFloor === false) {
                s_oStage.removeChild(_oPowerUpEdge);
                _oPowerUpEdge = null;
            }
            else
            {
                createjs.Tween.get(_oPowerUpEdge).to({y: 940}, 800, createjs.Ease.backOut);
            }
        });
        for (var i = 0; i < _aBall.length; i++) {
            _aBall[i].downFloor(false);
        }
        _bFloor = false;
    };

    this.deactiveMagnetic = function () {
        var oSpriteNormalBall = s_oSpriteLibrary.getSprite("normal_ball");
        for (var i = 0; i < _aBall.length; i++) {
            _aBall[i].changeSprite(oSpriteNormalBall, "normal");
        }
        s_oStage.removeChild(_oPadding);
        this.createPadding(_oPadding.x);
        this.launchUnmagneticBall();
        _bMagnetic = false;
    };

    this.deactiveShot = function () {
        _oSpriteBullet = null;
        _bShot = false;
        if (_oCannons) {
            _oCannons.gotoAndPlay("go");
            _oCannons.on("animationend", function () {
                if (_bShot === false) {
                    s_oStage.removeChild(_oCannons);
                    _oCannons = null;
                }
            });
        }
        _pPaddingDim.x = PADDLE_DIMENSION[1] / 2;

        _iOffsetXPadRight = CANVAS_WIDTH - EDGE_OFFSET - _pPaddingDim.x;
        _iOffsetXPadLeft = EDGE_OFFSET + _pPaddingDim.x;
    };

    this.checkOtherActiveBonus = function () {
        if (_bFireBall === false && _bFloor === true && _bMagnetic === false && _bShot === false) {
            _bAlmostABonus = false;
        }
    };

    this.bonusGesture = function () {
        for (var i = 0; i < _iNum_Of_Bonus_Spawned; i++) {
            _aBonus[i].update();
            if (_aBonus[i] !== undefined) {
                if (_aBonus[i].getX() > (_oPadding.x - _pPaddingDim.x) - _aBonus[i].getInfoData("offsetX") && _aBonus[i].getX() < (_oPadding.x + _pPaddingDim.x) + _aBonus[i].getInfoData("offsetX") && _aBonus[i].getY() > (_oPadding.y - _pPaddingDim.y) - _aBonus[i].getInfoData("offsetY") && _aBonus[i].getY() < (_oPadding.y + _pPaddingDim.y) + _aBonus[i].getInfoData("offsetY")) {
                    switch (_aBonus[i].getInfoData("Type")) {
                        case 0:
                            this.bonusLargePad();
                            break;
                        case 1:
                            this.bonusFireBall();
                            break;
                        case 2:
                            this.bonusFloor();
                            break;
                        case 3:
                            this.bonusMagnetic();
                            break;
                        case 4:
                            this.bonusLife();
                            break;
                        case 5:
                            this.bonusMultiBall();
                            break;
                        case 6:
                            this.bonusShot();
                            break;
                        case 7:
                            this.bonusSlowBall();
                            break;
                        case 8:
                            this.bonusFastBall();
                            break;
                        case 9:
                            this.bonusSmallPad();
                            break;
                    }
                    this.unloadBonus(i);
                    break;
                }
            }
        }
    };

    this.unloadBonus = function (ID) {
        _aBonus[ID].unload();
        _aBonus.splice(ID, 1);
        if (_iNum_Of_Bonus_Spawned > 0) {
            _iNum_Of_Bonus_Spawned--;
        }
        for (var i = 0; i < _iNum_Of_Bonus_Spawned; i++) {
            _aBonus[i].resetTheIndex(i);
        }
    };
    this.unloadBall = function (ID) {
        _aBall[ID].unload();
        _aBall.splice(ID, 1);
        for (var i = 0; i < _aBall.length; i++) {
            _aBall[i].resetTheIndex(i);
        }
    };
    this.unloadBullet = function (ID) {
        _aBullet[ID].unload();
        _aBullet.splice(ID, 1);
        _iFiredBullet--;
        for (var i = 0; i < _aBullet.length; i++) {
            _aBullet[i].setIndex(i);
        }
    };

    this.randomBonus = function (iXPos, iYPos) {
        var iRand = Math.floor(Math.random() * 100);
        if (iRand < SPAWN_BONUS_PROBABILITY[_iLevel] && _iTotBrick > 0) {
            this.generateABonus(iXPos, iYPos);
        }
    };

    this.unloadLevel = function () {
        for (var i = 0; i < _aBall.length; i++) {
            _aBall[i].unload();
            _aBall[i] = null;
        }
        for (var i = 0; i < _aBonus.length; i++) {
            _aBonus[i].unload();
            _aBonus[i] = null;
        }
        if (_aBullet !== undefined) {
            for (var i = 0; i < _aBullet.length; i++) {
                _aBullet[i].unload();
                _aBullet[i] = null;
            }
        }

        if (_bLargePad === true) {
            this.deactiveLargePad();
        } else if (_bSmallPad === true) {
            this.deactiveSmallPad();
        }

        if (_bShot === true) {
            _iTimeShot = 0;
            s_oStage.removeChild(_oCannons);
            _oCannons = null;
        }
        if (_bFloor === true) {
            s_oStage.removeChild(_oPowerUpEdge);
            _oPowerUpEdge = null;
        }
        if (_bMagnetic === true) {
            s_oStage.removeChild(_oPadding);
            this.createPadding(_oPadding.x);
        }

        _bShot = false;
        _bLargePad = false;
        _bFloor = false;
        _bSlowBall = false;
        _bMagnetic = false;
        _bFireBall = false;
        _bAlmostABonus = false;

        for (var i = 0; i < _aBrick.length; i++) {
            _aBrick[i].unload();
            _aBrick[i] = null;
        }

        _iNum_Of_Bonus_Spawned = 0;

        _aBrick = null;
        _aBrickSectionCenterH = null;
        _aBrickSectionCenterY = null;
        _aBrickSectionDownLeft = null;
        _aBrickSectionDownRight = null;
        _aBrickSectionUpLeft = null;
        _aBrickSectionUpRight = null;
        _aBonus = null;
        _aBullet = null;
        _aBall = null;
        _aBrick = new Array();
        _aBrickSectionCenterH = new Array();
        _aBrickSectionCenterY = new Array();
        _aBrickSectionDownLeft = new Array();
        _aBrickSectionDownRight = new Array();
        _aBrickSectionUpLeft = new Array();
        _aBrickSectionUpRight = new Array();
        _aBonus = new Array();
        _aBullet = new Array();
        _aBall = new Array();
    };

    this.update = function () {
        if (_bPause === false) {
            _fPhysicsTime += s_iTimeElaps;
            var iTimePhysicUpdate = parseInt(_fPhysicsTime / _iPhysicsUpdateTime);
            _fPhysicsTime -= (_iPhysicsUpdateTime * iTimePhysicUpdate);
            for (var i = 0; i < iTimePhysicUpdate; i++) {
                for (var k = 0; k < _iPhysicsScaleTime; k++) {
                    this.__updatePhysics();
                }
            }
        }
    };

    s_oGame = this;
    var _iPhysicsUpdateTime = 16;
    var _iPhysicsScaleTime = 10;
    BALL_SPEED = oData.ball_speed / _iPhysicsScaleTime;
    BRICKS_SCORE = oData.bricks_score;
    BRICKS_RESISTANCE = oData.bricks_resistance;
    BRICKS_DESTRUCTIBLE = oData.bricks_destructible;
    BONUS_SPEED = oData.bonus_speed / _iPhysicsScaleTime;
    BONUS_TIME = oData.bonus_time;
    BONUS_SCORE = oData.bonus_score;
    BULLET_SPEED = oData.bullet_speed;
    LIFE = oData.life;
    SPEED_DOWN_BALL = oData.speed_down_ball;
    SPEED_UP_BALL = oData.speed_up_ball;
    NUM_LEVELS_FOR_ADS = oData.num_levels_for_ads;
    this._init();
}

var s_oGame;
