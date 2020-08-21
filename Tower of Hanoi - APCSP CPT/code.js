/* This program allows the user to solve the tower of Hanoi using 3 disks within 7 maximum moves */

var userGivenMaxMoves = 7;       /* Maximum moves given to the user*/
var userValidMovesMade = 0;     /* Records valid moves being made by the user during the game*/
var userAllMovesMade = 0;      /* Records all moves made by the user; used to check
                                  maximum & minimum moves user makes; displayed on game screen*/
var invalidUserMoves = 0;     /* Counts number of invaild moves made by the user during the game*/

var tower1Situation = "123"; /* Initial positions of all 3 disks is set to tower 1*/
var tower2Situation = "";
var tower3Situation = "";

var disk1CurrentTower = 1;   /*Keep track of where disk 1 is at current time in the game*/
var disk2CurrentTower = 1;   /*Keep track of where disk 2 is at current time in the game*/
var disk3CurrentTower = 1;   /*Keep track of where disk 3 is at current time in the game*/

onEvent("ContinueButton", "click", function() {
  setScreen("instructionsScreen");
});
onEvent("ContinueGameButton", "click", function() {
  setScreen("gameScreen");
});
solveHanoi();
function solveHanoi() {       /* This is the high-level function that calls checkUserClick 
                                          in order to solve the Tower of Hanoi game*/
  checkUserClick();           
}
function checkUserClick() {  /* MAIN ABSTRACTION This function evaluates the user's click, updates the moves, 
                                          & visually moves the disks */
  var disk1Click;           
  var disk2Click;           /* Assigned to true when clicked by the user*/
  var disk3Click; 

  onEvent("disk1", "click", function() {
    disk1Click = true; });
  onEvent("disk2", "click", function() {
    disk2Click = true; });
  onEvent("disk3", "click", function() {
    disk3Click = true; });
    
    
    
  onEvent("tower1Button", "click", function() {
    if (disk1Click === true) {
      if(checkValidMove(1,disk1CurrentTower,1)){ //check validity of move
      updateUserMoves(1); //update valid moves
      setPosition("disk1", 15, 118); //move disk visual
      disk1CurrentTower = 1; //update disk one's current position
      disk1Click = false;    // deselect disk 1 
      }
      else{
      updateUserMoves(0); // don't update the moves
      disk1Click = false;  // deselect disk 1 
      }
    }
    
    else if ((disk2Click === true)) {
      if(isOnlyDisk(disk2CurrentTower,2) === false){updateUserMoves(0);return;}  /* checks scenario of where
                                        either disk 2 or disk 3 are single or having disk 2 on top of disk 3*/
      if(checkValidMove(2,disk2CurrentTower,1)){
      updateUserMoves(1);
      setPosition("disk2", 5, 203);
      disk2CurrentTower  = 1;
      disk2Click = false;
      }
      else{
      updateUserMoves(0);
      disk2Click = false;
      }
    } 
    
    else if (disk3Click === true) {
      if(isOnlyDisk(disk3CurrentTower,3) === false){updateUserMoves(0);return;}
      if(checkValidMove(3,disk3CurrentTower,1)){
      updateUserMoves(1);
      setPosition("disk3", 5, 305);
      disk3CurrentTower  = 1;
      disk3Click = false;
      }
      else{
      updateUserMoves(0);  
      disk3Click = false;
      }
    }});
    
    
  onEvent("tower2Button", "click", function() {
    if (disk1Click === true) {
      if(checkValidMove(1,disk1CurrentTower,2)){
      updateUserMoves(1);
      setPosition("disk1", 125, 118);
      disk1CurrentTower  = 2;
      disk1Click = false;
      }
      else{
      updateUserMoves(0);
      disk1Click = false;
      }
    } else if ((disk2Click === true)) {
      if(isOnlyDisk(disk2CurrentTower,2) === false){updateUserMoves(0);return;}
      if(checkValidMove(2,disk2CurrentTower,2)){
      updateUserMoves(1);
      setPosition("disk2", 125, 203);
      disk2CurrentTower  = 2;
      disk2Click = false;
      }
      else{
      updateUserMoves(0);  
      disk2Click = false;
      }
    } else if ((disk3Click === true)) {
      if(isOnlyDisk(disk3CurrentTower,3) === false){updateUserMoves(0);return;}
      if(checkValidMove(3,disk3CurrentTower,2)){
      updateUserMoves(1);
      setPosition("disk3", 125, 305); 
      disk3CurrentTower  = 2;
      disk3Click = false;
      }
      else{
      updateUserMoves(0);
      disk3Click = false;
      }
    }});
    
    
    
  onEvent("tower3Button", "click", function() {
    if (disk1Click === true) {
      if(checkValidMove(1,disk1CurrentTower,3)){
      updateUserMoves(1);
      setPosition("disk1", 235, 118);
      disk1CurrentTower  = 3;
      disk1Click = false;
      }
      else{
      updateUserMoves(0);
      disk1Click = false;
      }
    } else if ((disk2Click === true)) {
      if(isOnlyDisk(disk2CurrentTower,2) === false){updateUserMoves(0);return;}
      if(checkValidMove(2,disk2CurrentTower,3)){
      updateUserMoves(1);
      setPosition("disk2",235, 203);
      disk2CurrentTower  = 3;
      disk2Click = false;
      }
      else{
      updateUserMoves(0);
      disk2Click = false;
      }
    } else if ((disk3Click === true)){
      if(isOnlyDisk(disk3CurrentTower,3) === false){updateUserMoves(0);return;}
      if(checkValidMove(3,disk3CurrentTower,3)){
      updateUserMoves(1);
      setPosition("disk3", 235, 305);
      disk3CurrentTower  = 3;
      disk3Click = false;
      }
      else{
      updateUserMoves(0);
      disk3Click = false;
      }
    }});
 
  
}

function isOnlyDisk(towr, disk){ 
/* Checks the condition if a tower has a single disk which is either 2 or 3 or if the tower has
disk 2 on top of disk 3; allows smaller disk on the top to move while the bigger disk stays on the bottom*/
    if(towr == 1 && disk == 2){
      if(tower1Situation == "2" || tower1Situation == "23"){
        return true;
      }
      else { return false;}
    }
    if(towr == 1 && disk == 3){
      if(tower1Situation == "3"){
        return true;
      }
      else { return false;}
    }
     if(towr == 2 && disk == 2){
      if(tower2Situation == "2" || tower2Situation == "23"){
        return true;
      }
      else { return false;}
    }
    if(towr == 2 && disk == 3){
      if(tower2Situation == "3"){
        return true;
      }
      
      else { return false;}
    }
     if(towr == 3 && disk == 2){
      if(tower3Situation == "2" || tower3Situation == "23"){
        return true;
      }
      else { return false;}
    }
    if(towr == 3 && disk == 3){
      if(tower3Situation == "3"){
        return true;
      }
      else { return false;}
    }
  
}


function checkValidMove(diskk, fromTower,toTower) {
/* moves the disk from its original tower position to the tower user wants the disk to be moved to
by checking tower situations and the top disk being moved */  
  var topdisk = "";
  if(toTower == 1){   /* checks fromTower & toTower */
    if(tower1Situation === ""){ //if tower is empty...
      removeTopDisk(fromTower); /* removes top disk from the particular tower & adds it to the
                                        tower it is being moved to*/
      tower1Situation = diskk+tower1Situation; return true;} /* Top disk added to the tower */
      topdisk = parseInt(tower1Situation.charAt(0)); /* Takes the character from string of 
                                        the towersituation which is the top disk and converts to integer */
    if(topdisk > diskk){
      removeTopDisk(fromTower);
      tower1Situation = diskk+tower1Situation;
      return true;
    }
    else{
      return false;
    }
  }
   if(toTower == 2){
    if(tower2Situation === ""){
      removeTopDisk(fromTower);
      tower2Situation = diskk+tower2Situation;
      return true;
    }
    topdisk = parseInt(tower2Situation.charAt(0));
    if(topdisk > diskk){
      removeTopDisk(fromTower);
      tower2Situation = diskk+tower2Situation;
      return true;
    }
    else{
      return false;
    }
  }
   if(toTower == 3){
     if(tower3Situation === ""){
      removeTopDisk(fromTower);
      tower3Situation = diskk+tower3Situation;
      return true;
    }
     topdisk = parseInt(tower3Situation.charAt(0));
    if(topdisk > diskk){
      removeTopDisk(fromTower);
      tower3Situation = diskk+tower3Situation;
      return true;
    }
    else{
      return false;
    }
  }
  
    
  }
  
function removeTopDisk(fromTower){
  var temp;
  if(fromTower == 1){
    temp = tower1Situation; /* assigns "123" to temp */
    temp = temp.substring(1,temp.length); /*removing disk1 length from tower situation*/
    tower1Situation = temp;       /* so now tower 1 has disk 2 and disk 3 & disk 1 is stored 
                                                      in a temporary variable */
  }
  if(fromTower == 2){
    temp = tower2Situation;
    temp = temp.substring(1,temp.length);
    tower2Situation = temp;
  }
  if(fromTower == 3){
    temp = tower3Situation;
    temp = temp.substring(1,temp.length);
    tower3Situation = temp;
  }
  
}  
  
function updateUserMoves(valid) {  /* This function tracks each move made by the user*/
  if(valid == 1){
    hideElement("invalidMoveLabel");
  if (userAllMovesMade < userGivenMaxMoves) { /* User's moves get updated & checked if
                                                  they satisfy to meet maximum moves given */
    userAllMovesMade = userAllMovesMade + 1;
    userValidMovesMade = userValidMovesMade + 1;
    setNumber("scoreLabel", userAllMovesMade);
    checkTower3();            /* Tower 3 is checked if the user has placed all 
                              3 disks within less than maximum moves given (Scalability??)*/
    } 
  
  else if ((userAllMovesMade == userGivenMaxMoves)) {
    checkTower3();
    }
  
  }
  
  
  else{
    userAllMovesMade = userAllMovesMade + 1; /* User's invalid moves get updated */
    showElement("invalidMoveLabel");
    setNumber("scoreLabel", userAllMovesMade);
    invalidUserMoves = invalidUserMoves + 1;
    if(invalidUserMoves == 3){
    setScreen("lostScreen");
    }
  }
}  

function checkTower3() {      
  /* Tower 3 gets checked to make sure it has all 3 disks in order before the user is declared to have won */
  /* Tower 3 is checked before displaying win screen*/
 if (tower3Situation == "123") {
    setScreen("winScreen");     
  } else{
    if(userAllMovesMade == userGivenMaxMoves){
    setScreen("lostScreen");}
 }
   
}
/* resets game*/
onEvent("tryAgainButton", "click", function() {
  setScreen("homeScreen");
  userValidMovesMade = 0;
  userAllMovesMade = 0;    /* All variables initialized when game resets */
  invalidUserMoves = 0;
  setNumber("scoreLabel", userAllMovesMade);
  tower1Situation = "123";
  tower2Situation = "";
  tower3Situation = "";
  disk1CurrentTower = 1;  
  disk2CurrentTower = 1;
  disk3CurrentTower = 1;
  hideElement("invalidMoveLabel");
  setPosition("disk1", 15, 105);  /* Sets all disks to starting tower position */
  setPosition("disk2", 5, 195);
  setPosition("disk3", 5, 305);
});
onEvent("playAgainButton", "click", function() {
  setScreen("homeScreen");
  userValidMovesMade = 0;
  userAllMovesMade = 0;     /* All variables initialized when game resets */
  invalidUserMoves = 0;
  setNumber("scoreLabel", userAllMovesMade);
  tower1Situation = "123";
  tower2Situation = "";
  tower3Situation = "";
  disk1CurrentTower = 1;  
  disk2CurrentTower = 1;
  disk3CurrentTower = 1;
  hideElement("invalidMoveLabel");
  setPosition("disk1", 15, 105);  /* Sets all disks to starting tower position */
  setPosition("disk2", 5, 195);
  setPosition("disk3", 5, 305);
});
