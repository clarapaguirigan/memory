/*********************** 
 * Percep_Ss_Test *
 ***********************/


// store info about the experiment session:
let expName = 'percep_ss_test';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'condition': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'pix',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(testINSpercepRoutineBegin());
flowScheduler.add(testINSpercepRoutineEachFrame());
flowScheduler.add(testINSpercepRoutineEnd());
const trials_9LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_9LoopBegin(trials_9LoopScheduler));
flowScheduler.add(trials_9LoopScheduler);
flowScheduler.add(trials_9LoopEnd);


flowScheduler.add(distractorRoutineBegin());
flowScheduler.add(distractorRoutineEachFrame());
flowScheduler.add(distractorRoutineEnd());
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'leaves1.jpg', 'path': 'leaves1.jpg'},
    {'name': 'leaves2.jpg', 'path': 'leaves2.jpg'},
    {'name': 'leaves3.jpg', 'path': 'leaves3.jpg'},
    {'name': 'corn1.jpg', 'path': 'corn1.jpg'},
    {'name': 'lemon2.jpg', 'path': 'lemon2.jpg'},
    {'name': 'lemon3.jpg', 'path': 'lemon3.jpg'},
    {'name': 'lemon1.jpg', 'path': 'lemon1.jpg'},
    {'name': 'egg1.jpg', 'path': 'egg1.jpg'},
    {'name': 'bird3.jpg', 'path': 'bird3.jpg'},
    {'name': 'bird2.jpg', 'path': 'bird2.jpg'},
    {'name': 'bird1.jpg', 'path': 'bird1.jpg'},
    {'name': 'eye1.jpg', 'path': 'eye1.jpg'},
    {'name': 'cat1.jpg', 'path': 'cat1.jpg'},
    {'name': 'cat2.jpg', 'path': 'cat2.jpg'},
    {'name': 'cat3.jpg', 'path': 'cat3.jpg'},
    {'name': 'typewriter1.jpg', 'path': 'typewriter1.jpg'},
    {'name': 'ship2.jpg', 'path': 'ship2.jpg'},
    {'name': 'ship1.jpg', 'path': 'ship1.jpg'},
    {'name': 'ship3.jpg', 'path': 'ship3.jpg'},
    {'name': 'umbrella1.jpg', 'path': 'umbrella1.jpg'},
    {'name': 'bike3.jpg', 'path': 'bike3.jpg'},
    {'name': 'bike2.jpg', 'path': 'bike2.jpg'},
    {'name': 'bike1.jpg', 'path': 'bike1.jpg'},
    {'name': 'car1.jpg', 'path': 'car1.jpg'},
    {'name': 'bear1.jpg', 'path': 'bear1.jpg'},
    {'name': 'bear2.jpg', 'path': 'bear2.jpg'},
    {'name': 'bear3.jpg', 'path': 'bear3.jpg'},
    {'name': 'shoes2.jpg', 'path': 'shoes2.jpg'},
    {'name': 'shoes1.jpg', 'path': 'shoes1.jpg'},
    {'name': 'shoes3.jpg', 'path': 'shoes3.jpg'},
    {'name': 'apples3.jpg', 'path': 'apples3.jpg'},
    {'name': 'apples2.jpg', 'path': 'apples2.jpg'},
    {'name': 'apples1.jpg', 'path': 'apples1.jpg'},
    {'name': 'rabbit1.jpg', 'path': 'rabbit1.jpg'},
    {'name': 'rabbit2.jpg', 'path': 'rabbit2.jpg'},
    {'name': 'rabbit3.jpg', 'path': 'rabbit3.jpg'},
    {'name': 'deer2.jpg', 'path': 'deer2.jpg'},
    {'name': 'deer1.jpg', 'path': 'deer1.jpg'},
    {'name': 'deer3.jpg', 'path': 'deer3.jpg'},
    {'name': 'barn3.jpg', 'path': 'barn3.jpg'},
    {'name': 'barn2.jpg', 'path': 'barn2.jpg'},
    {'name': 'barn1.jpg', 'path': 'barn1.jpg'},
    {'name': 'lion1.jpg', 'path': 'lion1.jpg'},
    {'name': 'lion3.jpg', 'path': 'lion3.jpg'},
    {'name': 'lion2.jpg', 'path': 'lion2.jpg'},
    {'name': 'mouse2.jpg', 'path': 'mouse2.jpg'},
    {'name': 'mouse1.jpg', 'path': 'mouse1.jpg'},
    {'name': 'mouse3.jpg', 'path': 'mouse3.jpg'},
    {'name': 'elephant3.jpg', 'path': 'elephant3.jpg'},
    {'name': 'elephant1.jpg', 'path': 'elephant1.jpg'},
    {'name': 'elephant2.jpg', 'path': 'elephant2.jpg'},
    {'name': 'fountain1.jpg', 'path': 'fountain1.jpg'},
    {'name': 'fountain3.jpg', 'path': 'fountain3.jpg'},
    {'name': 'fountain2.jpg', 'path': 'fountain2.jpg'},
    {'name': 'bed2.jpg', 'path': 'bed2.jpg'},
    {'name': 'bed1.jpg', 'path': 'bed1.jpg'},
    {'name': 'bed3.jpg', 'path': 'bed3.jpg'},
    {'name': 'squirrels3.jpg', 'path': 'squirrels3.jpg'},
    {'name': 'squirrels1.jpg', 'path': 'squirrels1.jpg'},
    {'name': 'squirrels2.jpg', 'path': 'squirrels2.jpg'},
    {'name': 'train1.jpg', 'path': 'train1.jpg'},
    {'name': 'train2.jpg', 'path': 'train2.jpg'},
    {'name': 'train3.jpg', 'path': 'train3.jpg'},
    {'name': 'house2.jpg', 'path': 'house2.jpg'},
    {'name': 'house3.jpg', 'path': 'house3.jpg'},
    {'name': 'house1.jpg', 'path': 'house1.jpg'},
    {'name': 'fish3.jpg', 'path': 'fish3.jpg'},
    {'name': 'fish1.jpg', 'path': 'fish1.jpg'},
    {'name': 'fish2.jpg', 'path': 'fish2.jpg'},
    {'name': 'tree1.jpg', 'path': 'tree1.jpg'},
    {'name': 'tree2.jpg', 'path': 'tree2.jpg'},
    {'name': 'tree3.jpg', 'path': 'tree3.jpg'},
    {'name': 'chairs2.jpg', 'path': 'chairs2.jpg'},
    {'name': 'chairs3.jpg', 'path': 'chairs3.jpg'},
    {'name': 'chairs1.jpg', 'path': 'chairs1.jpg'},
    {'name': 'strawberries3.jpg', 'path': 'strawberries3.jpg'},
    {'name': 'strawberries2.jpg', 'path': 'strawberries2.jpg'},
    {'name': 'strawberries1.jpg', 'path': 'strawberries1.jpg'},
    {'name': 'banana1.jpg', 'path': 'banana1.jpg'},
    {'name': 'banana2.jpg', 'path': 'banana2.jpg'},
    {'name': 'banana3.jpg', 'path': 'banana3.jpg'},
    {'name': 'cow2.jpg', 'path': 'cow2.jpg'},
    {'name': 'cow3.jpg', 'path': 'cow3.jpg'},
    {'name': 'cow1.jpg', 'path': 'cow1.jpg'},
    {'name': 'hands3.jpg', 'path': 'hands3.jpg'},
    {'name': 'hands2.jpg', 'path': 'hands2.jpg'},
    {'name': 'hands1.jpg', 'path': 'hands1.jpg'},
    {'name': 'mountains1.jpg', 'path': 'mountains1.jpg'},
    {'name': 'mountains2.jpg', 'path': 'mountains2.jpg'},
    {'name': 'mountains3.jpg', 'path': 'mountains3.jpg'},
    {'name': 'sunflowers2.jpg', 'path': 'sunflowers2.jpg'},
    {'name': 'sunflowers1.jpg', 'path': 'sunflowers1.jpg'},
    {'name': 'sunflowers3.jpg', 'path': 'sunflowers3.jpg'},
    {'name': 'turtle3.jpg', 'path': 'turtle3.jpg'},
    {'name': 'turtle1.jpg', 'path': 'turtle1.jpg'},
    {'name': 'turtle2.jpg', 'path': 'turtle2.jpg'},
    {'name': 'camel1.jpg', 'path': 'camel1.jpg'},
    {'name': 'camel2.jpg', 'path': 'camel2.jpg'},
    {'name': 'camel3.jpg', 'path': 'camel3.jpg'},
    {'name': 'horse2.jpg', 'path': 'horse2.jpg'},
    {'name': 'horse1.jpg', 'path': 'horse1.jpg'},
    {'name': 'horse3.jpg', 'path': 'horse3.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introClock;
var text_15;
var key_resp_10;
var qrpic;
var testINSpercepClock;
var text;
var advance;
var testPERCEPClock;
var choice1;
var choice2;
var choice3;
var response;
var text_4;
var text_5;
var text_6;
var distractorClock;
var text_14;
var key_resp_9;
var textbox;
var endClock;
var text_2;
var key_resp_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: 'Thank you for your participation.\n\nPress the space bar to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 30,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_2
  if ((expInfo["condition"] === "1")) {
      qrpic = "qr1.png";
  } else {
      if ((expInfo["condition"] === "2")) {
          qrpic = "qr2.png";
      }
  }
  
  // Initialize components for Routine "testINSpercep"
  testINSpercepClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '\nYou will see three images presented on the screen. \n\n\nPress the key that corresponds to the piece of art that you saw during Part 1.\n\n\nPress the space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 30,  wrapWidth: 1200, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  advance = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "testPERCEP"
  testPERCEPClock = new util.Clock();
  choice1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'choice1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [(- 400), 0], 
    draggable: false,
    size : [350, 350],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  choice2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'choice2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, 0], 
    draggable: false,
    size : [350, 350],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  choice3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'choice3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [400, 0], 
    draggable: false,
    size : [350, 350],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [(- 400), (- 250)], draggable: false, height: 45,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 250)], draggable: false, height: 45,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [400, (- 250)], draggable: false, height: 45,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "distractor"
  distractorClock = new util.Clock();
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'What kind of phone did you use to complete the first part of the experiment?\n\nPress enter to submit your response.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 300], draggable: false, height: 20,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 20.0,
    lineSpacing: 1.0,
    size: [800, 500],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    formattingSyntax: 'md',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Thank you for your participation.\n\nThe purpose of this experiment was to see how taking a screenshot affects how well you remember what you saw.\nPast studies have shown that taking a photo of something impairs your memory for it. The goal of this experiment is to see if this impairment extends to other methods of saving information, like taking a screenshot.\n\nPlease let the experimenter know once you are done with the test. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 30,  wrapWidth: 1200, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var introMaxDurationReached;
var _key_resp_10_allKeys;
var introMaxDuration;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    introClock.reset();
    routineTimer.reset();
    introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    psychoJS.experiment.addData('intro.started', globalClock.getTime());
    introMaxDuration = null
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(text_15);
    introComponents.push(key_resp_10);
    
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }
    
    
    // if text_15 is active this frame...
    if (text_15.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_10* updates
    if (t >= 1 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }
    
    // if key_resp_10 is active this frame...
    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        psychoJS.experiment.addData('key_resp_10.duration', key_resp_10.duration);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var testINSpercepMaxDurationReached;
var _advance_allKeys;
var testINSpercepMaxDuration;
var testINSpercepComponents;
function testINSpercepRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'testINSpercep' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    testINSpercepClock.reset();
    routineTimer.reset();
    testINSpercepMaxDurationReached = false;
    // update component parameters for each repeat
    advance.keys = undefined;
    advance.rt = undefined;
    _advance_allKeys = [];
    psychoJS.experiment.addData('testINSpercep.started', globalClock.getTime());
    testINSpercepMaxDuration = null
    // keep track of which components have finished
    testINSpercepComponents = [];
    testINSpercepComponents.push(text);
    testINSpercepComponents.push(advance);
    
    testINSpercepComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function testINSpercepRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'testINSpercep' ---
    // get current time
    t = testINSpercepClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *advance* updates
    if (t >= 0 && advance.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advance.tStart = t;  // (not accounting for frame time here)
      advance.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { advance.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { advance.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { advance.clearEvents(); });
    }
    
    // if advance is active this frame...
    if (advance.status === PsychoJS.Status.STARTED) {
      let theseKeys = advance.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _advance_allKeys = _advance_allKeys.concat(theseKeys);
      if (_advance_allKeys.length > 0) {
        advance.keys = _advance_allKeys[_advance_allKeys.length - 1].name;  // just the last key pressed
        advance.rt = _advance_allKeys[_advance_allKeys.length - 1].rt;
        advance.duration = _advance_allKeys[_advance_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    testINSpercepComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testINSpercepRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'testINSpercep' ---
    testINSpercepComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('testINSpercep.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(advance.corr, level);
    }
    psychoJS.experiment.addData('advance.keys', advance.keys);
    if (typeof advance.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('advance.rt', advance.rt);
        psychoJS.experiment.addData('advance.duration', advance.duration);
        routineTimer.reset();
        }
    
    advance.stop();
    // the Routine "testINSpercep" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_9;
function trials_9LoopBegin(trials_9LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_9 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'trials_9'
    });
    psychoJS.experiment.addLoop(trials_9); // add the loop to the experiment
    currentLoop = trials_9;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_9.forEach(function() {
      snapshot = trials_9.getSnapshot();
    
      trials_9LoopScheduler.add(importConditions(snapshot));
      trials_9LoopScheduler.add(testPERCEPRoutineBegin(snapshot));
      trials_9LoopScheduler.add(testPERCEPRoutineEachFrame());
      trials_9LoopScheduler.add(testPERCEPRoutineEnd(snapshot));
      trials_9LoopScheduler.add(trials_9LoopEndIteration(trials_9LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_9LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_9);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_9LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var testPERCEPMaxDurationReached;
var _response_allKeys;
var testPERCEPMaxDuration;
var testPERCEPComponents;
function testPERCEPRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'testPERCEP' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    testPERCEPClock.reset();
    routineTimer.reset();
    testPERCEPMaxDurationReached = false;
    // update component parameters for each repeat
    choice1.setImage(one);
    choice2.setImage(two);
    choice3.setImage(three);
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    psychoJS.experiment.addData('testPERCEP.started', globalClock.getTime());
    testPERCEPMaxDuration = null
    // keep track of which components have finished
    testPERCEPComponents = [];
    testPERCEPComponents.push(choice1);
    testPERCEPComponents.push(choice2);
    testPERCEPComponents.push(choice3);
    testPERCEPComponents.push(response);
    testPERCEPComponents.push(text_4);
    testPERCEPComponents.push(text_5);
    testPERCEPComponents.push(text_6);
    
    testPERCEPComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function testPERCEPRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'testPERCEP' ---
    // get current time
    t = testPERCEPClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *choice1* updates
    if (t >= 0.0 && choice1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice1.tStart = t;  // (not accounting for frame time here)
      choice1.frameNStart = frameN;  // exact frame index
      
      choice1.setAutoDraw(true);
    }
    
    
    // if choice1 is active this frame...
    if (choice1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *choice2* updates
    if (t >= 0.0 && choice2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice2.tStart = t;  // (not accounting for frame time here)
      choice2.frameNStart = frameN;  // exact frame index
      
      choice2.setAutoDraw(true);
    }
    
    
    // if choice2 is active this frame...
    if (choice2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *choice3* updates
    if (t >= 0.0 && choice3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice3.tStart = t;  // (not accounting for frame time here)
      choice3.frameNStart = frameN;  // exact frame index
      
      choice3.setAutoDraw(true);
    }
    
    
    // if choice3 is active this frame...
    if (choice3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *response* updates
    if (t >= 0.5 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }
    
    // if response is active this frame...
    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({
        keyList: typeof ['1','2','3','one','two','three'] === 'string' ? [['1','2','3','one','two','three']] : ['1','2','3','one','two','three'], 
        waitRelease: false
      });
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[0].name;  // just the first key pressed
        response.rt = _response_allKeys[0].rt;
        response.duration = _response_allKeys[0].duration;
        // was this correct?
        if (response.keys == corrAns) {
            response.corr = 1;
        } else {
            response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // if text_4 is active this frame...
    if (text_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // if text_5 is active this frame...
    if (text_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    
    // if text_6 is active this frame...
    if (text_6.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    testPERCEPComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testPERCEPRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'testPERCEP' ---
    testPERCEPComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('testPERCEP.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (response.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         response.corr = 1;  // correct non-response
      } else {
         response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response.corr, level);
    }
    psychoJS.experiment.addData('response.keys', response.keys);
    psychoJS.experiment.addData('response.corr', response.corr);
    if (typeof response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response.rt', response.rt);
        psychoJS.experiment.addData('response.duration', response.duration);
        routineTimer.reset();
        }
    
    response.stop();
    // the Routine "testPERCEP" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var distractorMaxDurationReached;
var _key_resp_9_allKeys;
var distractorMaxDuration;
var distractorComponents;
function distractorRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'distractor' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    distractorClock.reset();
    routineTimer.reset();
    distractorMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    textbox.setText('');
    textbox.refresh();
    psychoJS.experiment.addData('distractor.started', globalClock.getTime());
    distractorMaxDuration = null
    // keep track of which components have finished
    distractorComponents = [];
    distractorComponents.push(text_14);
    distractorComponents.push(key_resp_9);
    distractorComponents.push(textbox);
    
    distractorComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function distractorRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'distractor' ---
    // get current time
    t = distractorClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }
    
    
    // if text_14 is active this frame...
    if (text_14.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }
    
    // if key_resp_9 is active this frame...
    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({
        keyList: typeof ['enter','return'] === 'string' ? [['enter','return']] : ['enter','return'], 
        waitRelease: false
      });
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    
    // if textbox is active this frame...
    if (textbox.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    distractorComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function distractorRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'distractor' ---
    distractorComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('distractor.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    psychoJS.experiment.addData('textbox.text',textbox.text)
    // the Routine "distractor" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var _key_resp_2_allKeys;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    endClock.reset(routineTimer.getTime());
    routineTimer.add(60.000000);
    endMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_2);
    endComponents.push(key_resp_2);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 60 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_2.tStop = t;  // not accounting for scr refresh
      text_2.frameNStop = frameN;  // exact frame index
      // update status
      text_2.status = PsychoJS.Status.FINISHED;
      text_2.setAutoDraw(false);
    }
    
    
    // *key_resp_2* updates
    if (t >= 10 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    frameRemains = 10 + 50 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp_2.tStop = t;  // not accounting for scr refresh
      key_resp_2.frameNStop = frameN;  // exact frame index
      // update status
      key_resp_2.status = PsychoJS.Status.FINISHED;
      frameRemains = 10 + 50 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_2.tStop = t;  // not accounting for scr refresh
        key_resp_2.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_2.status = PsychoJS.Status.FINISHED;
        key_resp_2.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp_2 is active this frame...
      if (key_resp_2.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_2.getKeys({
          keyList: typeof [] === 'string' ? [[]] : [], 
          waitRelease: false
        });
        _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
        if (_key_resp_2_allKeys.length > 0) {
          key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
          key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
          key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      endComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function endRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'end' ---
      endComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('end.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_2.corr, level);
      }
      psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
      if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
          psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
          routineTimer.reset();
          }
      
      key_resp_2.stop();
      if (routineForceEnded) {
          routineTimer.reset();} else if (endMaxDurationReached) {
          endClock.add(endMaxDuration);
      } else {
          endClock.add(60.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }
