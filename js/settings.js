var CANVAS_WIDTH = 840;
var CANVAS_HEIGHT = 1024;

var EDGEBOARD_X = 100;
var EDGEBOARD_Y = 30;

var FPS_TIME = 1000 / 30;
var DISABLE_SOUND_MOBILE = false;

var PRIMARY_FONT = "Source Sans Pro";

var STATE_LOADING = 0;
var STATE_MENU = 1;
var STATE_HELP = 1;
var STATE_GAME = 3;

var ON_MOUSE_DOWN = 0;
var ON_MOUSE_UP = 1;
var ON_MOUSE_OVER = 2;
var ON_MOUSE_OUT = 3;
var ON_DRAG_START = 4;
var ON_DRAG_END = 5;

var MAX_BONUS_BOUNCE = 5;

var TYPES_OF_BRICK = 6;
var TYPES_OF_BONUS = 10;

var MAX_BRICK_FOR_ROW = 7;

var MAX_BALL_SPAWN = 4;

var MAX_VELOCITY_LIMIT = 1.5;
var MIN_VELOCITY_LIMIT = 0.5;

var MAX_TIME_SHOT_BONUS = 100;

var BONUS_MULTI_BALL=0; //HOW MANY BALLS ADD TO BONUS MULTI BALL 0=1, N=N+1

var TIME_BOUNCE_BALL=0.01;

var BRICKS_LEVEL_POSITION;

var COLOR_TEXT_LEVEL;

var HEIGHT_OF_PADDLE = CANVAS_HEIGHT / 2 + 370;

var OFFSET_BALL_PAD_Y = 15;

var BONUS_OCCURRENCE_PER_LEVEL;

var PADDLE_DIMENSION = [80, 150, 210];
var SPACE_BETWEEN_BRICKS = -3;

var TIME_REFLECT_IRON_BRICK = 100;

var LAUNCH_BALL_POS = 0.1;

var EDGE_OFFSET = 10;
var OFFSET_BRICK_Y_POS = -16;
var OFFSET_HEIGHT_BRICK = 0;
var OFFSET_WIDTH_BRICK = 0;
var OFFSET_X_BRICK = -1;
var OFFSET_Y_BRICK = 0;
var OFFSET_RADIUS_BALL = 0;
var OFFSET_DIAGRAM_CHECK = 25;
var OFFSETEDGEDOWN = 83;
var OFFSETEDGEUP = 50;
var OFFSETEDGERIGHT = 106;
var OFFSETEDGELEFT = 106;
var OFFSETPOWERUPFLOOR = 20;
var OFFSET_PAD_Y = 15;
var OFFSET_PAD_MAGNETIC_Y = -1;
var OFFSET_CENTER_X_DIAGRAM = -35;
var OFFSET_CENTER_Y_DIAGRAM = -55;
var OFFSET_BRICK_SECTION_X = 70;
var OFFSET_BRICK_SECTION_Y = 15;
var OFFSET_DETECTION_BRICK_SECTION_X = -50;
var OFFSET_DETECTION_BRICK_SECTION_Y = 60;
var OFFSET_DIM_X_CANNONS = 32;
var OFFSET_CANNONS_Y_POS = 14;

var REG_X_OFFSET_PADDLE_MAGNETIC = 0;
var REG_Y_OFFSET_PADDLE_MAGNETIC = 460;

var SPAWN_BONUS_PROBABILITY;

BRICKS_LEVEL_POSITION = new Array();

SPAWN_BONUS_PROBABILITY = new Array();

COLOR_TEXT_LEVEL=new Array();

//TYPES OF BRICKS 0 GREEN BRICK, 1 YELLOW BRICK, 2 LIGHT BLUE, 3 RED BRICK, 4 METAL BRICK, 5 HEAVY BRICK
BRICKS_LEVEL_POSITION[0] = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //BUILDING IN ROWS TO MAX_BRICKS_FOR_ROW POSITION GO DOWN
BRICKS_LEVEL_POSITION[1] = [1, 1, -1, 4, -1, 1, 1, 1, 1, -1, 4, -1, 1, 1, 1, 1, -1, 4, -1, 1, 1, 1, 1, -1, 4, -1, 1, 1, 1, 1, -1, 4, -1, 1, 1, 1, 1, -1, 4, -1, 1, 1, 1, 1, -1, 4, -1, 1, 1, 1, 1, -1, 4, -1, 1, 1, 1, 1, -1, 4, -1, 1, 1];
BRICKS_LEVEL_POSITION[2] = [1, 1, 1, 1, 1, -1, -1, 0, 0, 0, 0, -1, -1, -1, 3, 3, 3, -1, -1, -1, -1, 2, 2, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 3, 3, 3, -1, -1, -1, -1, 2, 2, 2, 2, -1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 5, 5, 5, 5, 5, 5, -1];
BRICKS_LEVEL_POSITION[3] = [4, -1, -1, 3, -1, -1, 4, -1, -1, 2, 2, 2, -1, -1, -1, 1, 1, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 1, -1, -1, 2, 2, 2, -1, -1, 4, -1, -1, 3, -1, -1, 4];
BRICKS_LEVEL_POSITION[4] = [4, 4, -1, -1, -1, 4, 4, 4, -1, -1, 3, -1, -1, 4, -1, -1, 3, 3, 3, -1, -1, -1, 3, 3, 3, 3, 3, -1, 3, 3, 3, 3, 3, 3, 3, -1, 5, 5, 5, 5, 5, -1, -1, 5, 5, 5, 5, 5, -1, -1, 5, 2, 5, 2, 5, -1, -1, 5, 5, 5, 5, 5, -1, -1, 5, 5, 1, 5, 5, -1, -1, 5, 5, 1, 5, 5, -1, -1, 0, 0, 0, 0, 0, -1];
BRICKS_LEVEL_POSITION[5] = [1, -1, -1, 3, -1, -1, 1, 1, -1, 3, 3, 3, -1, 1, 1, 3, 3, 3, 3, 3, 1, 1, -1, 3, 3, 3, -1, 1, 1, 1, 0, 0, 0, 1, 1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, -1, -1, -1, 3, -1, -1, 1, 1, -1, 1, 1, -1, -1, 2, 2, 2, 2, 2, -1, -1, 4, 4, 4, 4, 4, -1];
BRICKS_LEVEL_POSITION[6] = [5, 5, 5, 5, 5, 5, 5, 3, -1, -1, 5, -1, -1, 3, 1, -1, -1, 5, -1, -1, 1, 0, -1, -1, 5, -1, -1, 0, 2, -1, -1, 5, -1, -1, 2, 2, -1, -1, 5, -1, -1, 2, 0, -1, -1, 5, -1, -1, 0, 1, -1, -1, 5, -1, -1, 1, 3, -1, -1, 5, -1, -1, 3, 5, 5, 5, 5, 5, 5, 5, 0, 1, 3, 2, 3, 1, 0, 1, 1, 3, 2, 3, 2, 2, 3, 3, 3, 2, 3, 3, 3];
BRICKS_LEVEL_POSITION[7] = [3, 3, 3, -1, 3, 3, 3, 3, 4, 3, -1, 3, 4, 3, 3, 3, 3, -1, 3, 3, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, 0, 0, 0, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, 1, -1, -1, -1, 1, 1, 1, -1, -1];
BRICKS_LEVEL_POSITION[8] = [5, 5, 5, -1, 5, 5, 5, 5, 2, 5, -1, 5, 0, 5, 5, 5, 5, -1, 5, 5, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 5, 5, -1, 5, 5, 5, 5, 1, 5, -1, 5, 3, 5, 5, 5, 5, -1, 5, 5, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, 5, -1, 5, -1, 4];
BRICKS_LEVEL_POSITION[9] = [1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 4, 5, 2, 2, 5, 2, 2, 5, 5, 2, 2, 5, 2, 2, 5, 5, 2, 2, 5, 2, 2, 5, 5, 2, 2, 5, 5, 5, 4, 5, 2, 2, 5, 5, 5, 4, 5, 2, 2, 5, 2, 2, 5, 5, 2, 2, 5, 2, 2, 5, 5, 2, 2, 5, 2, 2, 5, 5, 2, 2, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1];

BONUS_OCCURRENCE_PER_LEVEL = new Array();
//BONUS ORDER 0 big paddle, 1 fire ball, 2 down floor, 3 magnetic paddle, 4 extra life, 5 multi ball, 6 shot gun, 7 ball speed slow, 8 ball speed fast, 9 small paddle
BONUS_OCCURRENCE_PER_LEVEL[0] = [20, 15, 5, 15, 1, 5, 10, 15, 14, 14];
BONUS_OCCURRENCE_PER_LEVEL[1] = [15, 3, 10, 15, 2, 10, 15, 20, 15, 7];
BONUS_OCCURRENCE_PER_LEVEL[2] = [20, 1, 5, 25, 2, 7, 1, 20, 23, 9];
BONUS_OCCURRENCE_PER_LEVEL[3] = [20, 1, 10, 20, 4, 5, 1, 20, 23, 10];
BONUS_OCCURRENCE_PER_LEVEL[4] = [10, 1, 15, 20, 6, 10, 2, 20, 20, 5];
BONUS_OCCURRENCE_PER_LEVEL[5] = [5, 1, 15, 20, 6, 10, 5, 15, 27, 10];
BONUS_OCCURRENCE_PER_LEVEL[6] = [10, 2, 10, 25, 2, 10, 5, 15, 25, 10];
BONUS_OCCURRENCE_PER_LEVEL[7] = [18, 3, 15, 10, 2, 5, 4, 10, 20, 25, 9];
BONUS_OCCURRENCE_PER_LEVEL[8] = [10, 1, 15, 20, 6, 10, 2, 20, 20, 5];
BONUS_OCCURRENCE_PER_LEVEL[9] = [23, 1, 10, 7, 1, 2, 7, 20, 20, 23];

SPAWN_BONUS_PROBABILITY[0] = 15;
SPAWN_BONUS_PROBABILITY[1] = 15;
SPAWN_BONUS_PROBABILITY[2] = 15;
SPAWN_BONUS_PROBABILITY[3] = 15;
SPAWN_BONUS_PROBABILITY[4] = 15;
SPAWN_BONUS_PROBABILITY[5] = 15;
SPAWN_BONUS_PROBABILITY[6] = 15;
SPAWN_BONUS_PROBABILITY[7] = 15;
SPAWN_BONUS_PROBABILITY[8] = 10;
SPAWN_BONUS_PROBABILITY[9] = 10;

COLOR_TEXT_LEVEL[0]="#ffffff";
COLOR_TEXT_LEVEL[1]="#ffffff";
COLOR_TEXT_LEVEL[2]="#ffffff";
COLOR_TEXT_LEVEL[3]="#ffffff";

var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;
