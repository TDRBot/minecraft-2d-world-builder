let blocks = [];
let blockSize = 50;
let inventory = [];
let selectedBlock = 0;
let inventoryOpen = false;

function preload() {
  // Preload block images
  inventory.push(loadImage('https://codehs.com/uploads/48da05e630449311667b5dd985da24cb')); // Dirt block
  inventory.push(loadImage('https://codehs.com/uploads/88e1e52fd7bb5c04d3d2191e80572947')); // Dark Dirt block
  inventory.push(loadImage('https://codehs.com/uploads/b27c2932f984451affd09e2fc154ddc6')); // Grass block
  inventory.push(loadImage('https://codehs.com/uploads/88694652fd619c8c16327a31d763a6ab')); // Dark Grass block
  inventory.push(loadImage('https://codehs.com/uploads/edd9fd05045492dfb5ca24fb07b70ad5')); // Dandelion block
  inventory.push(loadImage('https://codehs.com/uploads/83c496241f13747c2455d6d29c99a666')); // Poppy block
  inventory.push(loadImage('https://codehs.com/uploads/8998e3c28a56b31b46b8b3c8bfd00f0a')); // Rose block
  inventory.push(loadImage('https://codehs.com/uploads/bc44766d5bf0ee1b937d62dc4d2ca5de')); // Paeonia block
  inventory.push(loadImage('https://codehs.com/uploads/ef28f86900403a98f12fbd976deeefad')); // Oak Log block
  inventory.push(loadImage('https://codehs.com/uploads/575ec590993a55514b710e90d26402f8')); // Dark Oak Log block
  inventory.push(loadImage('https://codehs.com/uploads/bf57a5b474be3414f973959dd7c2f31d')); // Oak Leaves block
  inventory.push(loadImage('https://codehs.com/uploads/8b259cf04416e766645eb08714d88957')); // Dark Oak Leaves block
  inventory.push(loadImage('https://codehs.com/uploads/5af81088bf1c087043e13b799c056e7c')); // Stone block
  inventory.push(loadImage('https://codehs.com/uploads/f2d57c8ffb83bbb0e8a3877e657693da')); // Dark Stone block
  inventory.push(loadImage('https://codehs.com/uploads/5bbb4db089402d01b9ad351c78616179')); // Bedrock block
  inventory.push(loadImage('https://codehs.com/uploads/917a071201625e437d4f7e7deb8787a6')); // Cobblestone block
  inventory.push(loadImage('https://codehs.com/uploads/1801bac21f4b0c954018c30aa39b4098')); // Deepslate block
  inventory.push(loadImage('https://codehs.com/uploads/10acba076451394e1d11d3cae8c361be')); // Dark Deepslate block
  inventory.push(loadImage('https://codehs.com/uploads/4fd01592d08d21e3a289dcfb04f38829')); // Cobbled Deepslate block
  inventory.push(loadImage('https://codehs.com/uploads/9bcd20afa31a8a4d19b49a69fad7d8ac')); // Dark Cobbled Deepslate block
  inventory.push(loadImage('https://codehs.com/uploads/135b20cf035523c8388da0830e350298')); // Oak Plank block
  inventory.push(loadImage('https://codehs.com/uploads/910849e8a23d07974efd84df5cb17bb9')); // Sand Block
  inventory.push(loadImage('https://codehs.com/uploads/d735add2623a723947df6dd1f790cc45')); // Dark Oak Plank Block
  inventory.push(loadImage('https://codehs.com/uploads/e1c083e6109bcd8c29126be538f358a3')); // Ladder block
  inventory.push(loadImage('https://codehs.com/uploads/336f2aff9531c5f0c0f67b5de40f4e2f')); // Torch Block
  inventory.push(loadImage('https://codehs.com/uploads/c03f00478be860da3f7b856502d8118f')); // Chest block
  inventory.push(loadImage('https://codehs.com/uploads/22786f734aa068982b6d42a6aabd8bc4')); // Crafting Table Block
  inventory.push(loadImage('https://codehs.com/uploads/528fa1594de0cc94648c423e8c015448')); // Furnace Block
  inventory.push(loadImage('https://codehs.com/uploads/51434e84807557623b6cb5cc038e40aa')); // Coal Ore block
  inventory.push(loadImage('https://codehs.com/uploads/2f3362466437b2b96c16055e3a7b8b93')); // Dark Coal Ore block
  inventory.push(loadImage('https://codehs.com/uploads/574a15582126db0483acd6a4a905b26d')); // Iron Ore block
  inventory.push(loadImage('https://codehs.com/uploads/8ed2b4edb17c9deb2db2ae62dc1b32d1')); // Dark Iron Ore block
  inventory.push(loadImage('https://codehs.com/uploads/3afd387e91ceac2d2bdd2338057ef6bb')); // Gold Ore block
  inventory.push(loadImage('https://codehs.com/uploads/b0e2cafa30e8faff3141d2a162ad0f99')); // Dark Gold Ore block
  inventory.push(loadImage('https://codehs.com/uploads/11019dd87d54630805a5ffeab1da5b2b')); // Redstone Ore block
  inventory.push(loadImage('https://codehs.com/uploads/c7d32cdeca1b8e4b9c3888e044634be1')); // Dark Redstone Ore block
  inventory.push(loadImage('https://codehs.com/uploads/6cbc3d9e0b1872e3c6efce05d182bade')); // Lapis Ore block
  inventory.push(loadImage('https://codehs.com/uploads/7f4ac3650ea9966045ccc62d9dcefd5f')); // Dark Lapis Ore Block
  inventory.push(loadImage('https://codehs.com/uploads/20c410fc8982976319f9657c9ed26d11')); // Emerald Ore Block
  inventory.push(loadImage('https://codehs.com/uploads/c678f2ef7343a4a6b786e11026b8fac7')); // Dark Emerald Ore block
  inventory.push(loadImage('https://codehs.com/uploads/7daa1eb72becac40cedcddd0f7ec0342')); // Diamond Ore Block
  inventory.push(loadImage('https://codehs.com/uploads/ab02226d2a01c4170e8492353eb0b0bb')); // Dark Diamond Ore Block
}

function setup() {
  createCanvas(1200, 800);
  noStroke();
  frameRate(30);
}

function draw() {
  background(135, 206, 250); // sky blue
  
  // Draw blocks
  for (let block of blocks) {
    image(block.img, block.x, block.y, blockSize, blockSize);
  }
  
  // Draw inventory if open
  if (inventoryOpen) {
    drawInventory();
  }
}

// Draw the inventory menu
function drawInventory() {
  fill(255); // white background for inventory
  rect(0, 0, width, height); // full-screen inventory
  
  let maxPerRow = 19; 
  for (let i = 0; i < inventory.length; i++) {
    let x = 20 + (i % maxPerRow) * (blockSize + 10);
    let y = 20 + Math.floor(i / maxPerRow) * (blockSize + 10); // Start a new row when more than maxPerRow
    
    image(inventory[i], x, y, blockSize, blockSize); // Draw block images in inventory
    if (i === selectedBlock) {
      noFill();
      stroke(255, 0, 0); // Red outline for selected block
      rect(x, y, blockSize, blockSize);
    }
  }
}

// Mouse interaction (changed from left/right-click to E and Q)
function mousePressed() {
  let x = Math.floor(mouseX / blockSize) * blockSize;
  let y = Math.floor(mouseY / blockSize) * blockSize;
  
  if (inventoryOpen) {
    // Check if the mouse is clicking on a block in the inventory
    let maxPerRow = 19;
    for (let i = 0; i < inventory.length; i++) {
      let invX = 20 + (i % maxPerRow) * (blockSize + 10);
      let invY = 20 + Math.floor(i / maxPerRow) * (blockSize + 10);
      if (mouseX > invX && mouseX < invX + blockSize && mouseY > invY && mouseY < invY + blockSize) {
        selectedBlock = i; // Select block
        return;
      }
    }
  }
}

// Key interaction (changed to E for place and Q for break)
function keyPressed() {
  if (key === 'e' || key === 'E') {
    inventoryOpen = !inventoryOpen; // Toggle inventory menu
  }
  
  if (!inventoryOpen) {
    let x = Math.floor(mouseX / blockSize) * blockSize;
    let y = Math.floor(mouseY / blockSize) * blockSize;

    if (key === 'w' || key === 'W') {
      // E key to place a block
      blocks.push({ x, y, img: inventory[selectedBlock] });
    } else if (key === 'q' || key === 'Q') {
      // Q key to break a block
      blocks = blocks.filter(block => !(block.x === x && block.y === y));
    }
  }
}
