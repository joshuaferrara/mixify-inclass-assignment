// Bob's player position
var bob = {
  x: 0,
  y: 0
};

// Alice's player position
var alice = {
  x: 7,
  y: 7
};

// Updates CSS styling for each player to the positions
// defined in their character objects above.
function updatePlayerPosition () {
  // Ensure they don't fall off the end of the Earth
  bob.x = Math.min(Math.max(bob.x, 0), 7);
  bob.y = Math.min(Math.max(bob.y, 0), 7);
  alice.x = Math.min(Math.max(alice.x, 0), 7);
  alice.y = Math.min(Math.max(alice.y, 0), 7);

  var b = document.getElementsByClassName('bob')[0];
  b.style.gridRowStart = bob.y + 1;
  b.style.gridColumnStart = bob.x + 1;

  var a = document.getElementsByClassName('alice')[0];
  a.style.gridRowStart = alice.y + 1;
  a.style.gridColumnStart = alice.x + 1;
}

updatePlayerPosition();

// functions for moving gold
function MoveUpg () {
  bob.y--;
  updatePlayerPosition();
}

function MoveDowng () {
  bob.y++;
  updatePlayerPosition();
}

function MoveLeftg () {
  bob.x--;
  updatePlayerPosition();
}

function MoveRightg () {
  bob.x++;
  updatePlayerPosition();
}

// jQuery select buttons for gold
$('button.btn-up-gold').click(MoveUpg);
$('button.btn-down-gold').click(MoveDowng);
$('button.btn-left-gold').click(MoveLeftg);
$('button.btn-right-gold').click(MoveRightg);

// functions for moving white
function MoveUpw () {
  alice.y--;
  updatePlayerPosition();
}
function MoveDownw () {
  alice.y++;
  updatePlayerPosition();
}
function MoveLeftw () {
  alice.x--;
  updatePlayerPosition();
}
function MoveRightw () {
  alice.x++;
  updatePlayerPosition();
}

// select button for white
$('button.btn-up-white').click(MoveUpw);
$('button.btn-down-white').click(MoveDownw);
$('button.btn-left-white').click(MoveLeftw);
$('button.btn-right-white').click(MoveRightw);

// Key mapping
const keyMap = {
  // Gold player
  'w': MoveUpg,
  'a': MoveLeftg,
  's': MoveDowng,
  'd': MoveRightg,

  // White player
  'i': MoveUpw,
  'j': MoveLeftw,
  'k': MoveDownw,
  'l': MoveRightw
};

// Handle keyboard inputs
$(document).keypress((e) => {
  const key = e.key;
  if (keyMap[key]) keyMap[key]();
});
