// Defina o tamanho do canvas e do personagem
const canvasWidth = 40;
const canvasHeight = 20;




// Define o mapa1 e mapa2
let mapa1 = `
.MAPA.1.................................
..................................S.....
........................................
.......*................................
........................................
........................................
........................................
...................*....................
........................................
........................................
........................................
........................................
........................................
........................*...............
........................................
........................................
........................................
........................................
........................................
........................................
`;


let mapa2 = `
.MAPA.2.................................
........................................
........................................
........................................
........................................
........................................
........................................
........................................
........................................
........................................
........................................
...................X....................
........................................
........................................
........................................
........................................
........................................
....................................S...
........................................
........................................
`;


// Cria o canvas a partir do mapa
function criarCanvas(mapa) {
  let linhas = mapa.trim().split("\n");
  let altura = linhas.length;
  let largura = linhas[0].length;
  let canvas = [];
  for (let y = 0; y < altura; y++) {
    canvas[y] = [];
    for (let x = 0; x < largura; x++) {
      canvas[y][x] = linhas[y][x];
    }
  }
  return canvas;
}

// Cria o canvas para o mapa1
let canvas = criarCanvas(mapa1);

// Define a posição inicial do personagem
let characterX = 0;
let characterY = 0;
for (let y = 0; y < canvas.length; y++) {
  for (let x = 0; x < canvas[y].length; x++) {
    if (canvas[y][x] === "x") {
      characterX = x;
      characterY = y;
      break;
    }
  }
}

// Define o personagem
const character = "X";

// Função para desenhar o canvas
function drawCanvas() {
  let output = "";
  for (let y = 0; y < canvas.length; y++) {
    for (let x = 0; x < canvas[y].length; x++) {
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

// Chama a função para desenhar o canvas inicial
drawCanvas();



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

// Chama a função para desenhar o canvas inicial
drawCanvas();

function moveCharacter(x, y) {
    const newX = characterX + x;
    const newY = characterY + y;
  
    // Verifica se o personagem encontrou um asterisco
    if (canvas[newY][newX] === "*") {
      console.log("Você encontrou um asterisco!");
      return; // Impede o movimento
    }
  
    // Verifica se o personagem encontrou o caractere "S"
    if (canvas[newY][newX] === "S") {
      console.log("Você encontrou o caractere 'S'!");
      canvas = criarCanvas(mapa2); // Muda para o outro mapa
      characterX = 0;
      characterY = 0;
      drawCanvas(); // Desenha o novo mapa
      return;
    }
  
    // Verifica se o personagem pode se mover na direção x
    if (newX >= 0 && newX < canvasWidth) {
      characterX = newX; // Move o personagem na direção x
    }
    // Verifica se o personagem pode se mover na direção y
    if (newY >= 0 && newY < canvasHeight) {
      characterY = newY; // Move o personagem na direção y
    }
  
    // Remove a marcação da posição antiga do personagem no canvas
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
