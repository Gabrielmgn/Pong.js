let xBola = 300;
let yBola = 200;
let diametro = 20;
let raio = diametro/2;
let vxBola = 6;
let vyBola = 7;
let xRaq = 5;
let yRaq = 155;
let xRaqOp = 585;
let yRaqOp = 155;
let press = 0;
let pontos = 0;
let pontosOp = 0;

function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  mostraBola();
  moveBola();
  verificaColisaoRaq();
  verificaColisaoRaqOp();
  mostraPontos();
  fixBola();
  // desenhando raquete do jogador
  rect(xRaq, yRaq, 10, 55, 20);
  // desenhando raquete do oponente
  rect(xRaqOp, yRaqOp, 10, 55, 20);
  // movendo raquete do jogador
  if (keyIsDown(87)) {
    yRaq -= 10;
    if(yRaq < 0){
      yRaq += 10;
    }
  }
  if (keyIsDown(83)) {
    yRaq += 10;
    if(yRaq + 55> height){
      yRaq -= 10;
    }
  }
  // movendo raquete do oponente
  if (keyIsDown(UP_ARROW)) {
    yRaqOp -= 10;
    if(yRaqOp < 0){
      yRaqOp += 10;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaqOp += 10;
    if(yRaqOp + 55> height){
      yRaqOp -= 10;
    }
  }
}

function mostraBola(){
    // desenhando a bola
  circle(xBola,yBola,diametro);
}

function moveBola(){
    // estabelecendo a velocidade da bola
  xBola = xBola + vxBola;
  yBola = yBola + vyBola;
  // estabelecendo reação ao tocar na borda
  if (xBola + raio > width || xBola - raio < 0){
    vxBola *= -1;
    if (xBola + raio > width){
      pontos += 1;
    }
    if (xBola - raio < 0){
      pontosOp += 1;
    }
  }
  if (yBola + raio > height || yBola - raio < 0){
    vyBola *= -1;
  }
}

function verificaColisaoRaq(){
  if (xBola < xRaq + 18 && yBola - raio < yRaq + 55 && yBola + raio > yRaq){
    vxBola *= -1;
    xBola += 10;
  }
}
function verificaColisaoRaqOp(){
  if (xBola > xRaqOp - 10 && yBola - raio < yRaqOp + 55 && yBola + raio > yRaqOp){
    vxBola *= -1;
    xBola -= 10;
  }
}

function mostraPontos(){
  fill(255,255,255);
  textSize(16);
  text('Pontos', 100, 10, 70, 80);
  text(pontos, 120, 30, 70, 80);
  text('Pontos', 450, 10, 70, 80);
  text(pontosOp, 470, 30, 70, 80);
  //text(xBola, 470, 130, 70, 80);
}

function fixBola(){
  if (xBola + raio - 3 > width){
      xBola -= 10;
      }
  if (xBola - raio + 3 < 0){
      xBola += 10;
      }
}
