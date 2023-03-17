// Defina o tamanho do canvas e do personagem
const canvasWidth = 40;
const canvasHeight = 20;
const character = "X";

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
      if (x === characterX && y === characterY) {
        output += character;
      } else {
        output += canvas[y][x];
      }
    }
    output += "\n";
  }
  console.clear();
  console.log(output);
}

// Chame a função para desenhar o canvas inicial
drawCanvas();

// Função para mover o personagem
function moveCharacter(x, y) {
    // Verifica se o personagem pode se mover na direção x
    if (characterX + x >= 0 && characterX + x < canvasWidth) {
      characterX += x; // Move o personagem na direção x
    }
    // Verifica se o personagem pode se mover na direção y
    if (characterY + y >= 0 && characterY + y < canvasHeight) {
      characterY += y; // Move o personagem na direção y
    }
    // Remove a marcação da posição antiga do personagem no canvas
   // canvas[characterY][characterX] = ".";
   // Define a posição anterior do personagem como "."
  canvas[characterY - y][characterX - x] = ".";
    // Marca a nova posição do personagem no canvas
    canvas[characterY][characterX] = character;
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
  
