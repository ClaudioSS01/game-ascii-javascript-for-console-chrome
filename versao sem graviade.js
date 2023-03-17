// Defina o tamanho do canvas
const canvasWidth = 40;
const canvasHeight = 20;

// Defina o desenho do personagem
const character = [  [" ", "o", " "],
  ["/", "|", "\\"],
  ["/", " ", "\\"]
];

// Crie uma matriz para representar o canvas
let canvas = [];
for (let y = 0; y < canvasHeight; y++) {
  canvas[y] = [];
  for (let x = 0; x < canvasWidth; x++) {
    canvas[y][x] = ".";
  }
}

// Defina a posição inicial do personagem
let characterX = 0;
let characterY = 0;

// Função para desenhar o canvas
function drawCanvas() {
  let output = "";
  for (let y = 0; y < canvasHeight; y++) {
    for (let x = 0; x < canvasWidth; x++) {
      output += canvas[y][x];
    }
    output += "\n";
  }
  console.clear();
  console.log(output);
}

// Função para desenhar o personagem
function drawCharacter() {
  for (let dy = 0; dy < character.length; dy++) {
    for (let dx = 0; dx < character[dy].length; dx++) {
      const cx = characterX + dx;
      const cy = characterY + dy;
      if (cx >= 0 && cx < canvasWidth && cy >= 0 && cy < canvasHeight) {
        canvas[cy][cx] = character[dy][dx];
      }
    }
  }
}

// Função para mover o personagem
function moveCharacter(x, y) {
    // Remove a marcação da posição antiga do personagem no canvas
    for (let dy = 0; dy < character.length; dy++) {
      for (let dx = 0; dx < character[dy].length; dx++) {
        const cx = characterX + dx;
        const cy = characterY + dy;
        if (cx >= 0 && cx < canvasWidth && cy >= 0 && cy < canvasHeight) {
          if (canvas[cy][cx] === character[dy][dx]) {
            canvas[cy][cx] = ".";
          }
        }
      }
    }
    
    // Verifica se o personagem pode se mover na direção x
    if (characterX + x >= 0 && characterX + x + character[0].length - 1 < canvasWidth) {
      characterX += x; // Move o personagem na direção x
    }
    // Verifica se o personagem pode se mover na direção y
    if (characterY + y >= 0 && characterY + y + character.length - 1 < canvasHeight) {
      characterY += y; // Move o personagem na direção y
    }
    
    // Marca a nova posição do personagem no canvas
    drawCharacter();
    // Desenha o novo canvas com o personagem na nova posição
    drawCanvas();
  }
  
  // Função para detectar a tecla pressionada
  function keyDown(event) {
    if (event.keyCode === 37) { // seta esquerda
      moveCharacter(-1, 0);
    } else if (event.keyCode === 38) { // seta cima
      moveCharacter(0, -1);
    } else if (event.keyCode === 39) { // seta direita
      moveCharacter(1, 0);
    } else if (event.keyCode === 40) { // seta baixo
      moveCharacter(0, 1);
    }
  }
  
  // Adiciona um evento de escuta de teclado ao documento
  document.addEventListener("keydown", keyDown);
  
  // Chame a função para desenhar o canvas inicial e o personagem
  drawCanvas();
  drawCharacter();
  
