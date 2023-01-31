class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
      this.playButton = createButton("Iniciar");
      this.titleImg = createImg("", "game title");
      this.greeting = createElement("h2");
      this.nombreJugador = createElement("h2");
      this.nombre = Math.round(random(1,5));
      this.nombreAleatorio;
      this.position;
      switch(this.nombre){
        case 1:this.nombreAleatorio = "El charro negro",this.position = 200
        break;
        case 2:this.nombreAleatorio = "El encapuchado",this.position = 200
        break;
        case 3:this.nombreAleatorio = "El señor de la noche",this.position = 240
        break;
        case 4:this.nombreAleatorio = "El desconocido",this.position = 190
        break;
        case 5:this.nombreAleatorio = "Vaquero común",this.position = 200
        break;
        default:this.nombreAleatorio = "Oponente",this.position = 140
        break; 
      }
      this.nombreCPU = createElement("h2");
    }
  
    setElementsPosition() {
      this.titleImg.position(120, 50);
      this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2-90, height / 2 + 100);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
      this.nombreJugador.position(20,0);
      this.nombreCPU.position(width-this.position,0);
    }
  
    setElementsStyle() {
      this.titleImg.class("gameTitle");
      this.input.class("input");
      this.playButton.class("button");
      this.greeting.class("greeting");
      
    }
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
    }
  
    handleMousePressed() {
      this.playButton.mousePressed(() => {
        this.input.hide();
        this.playButton.hide();
        this.titleImg.hide();
        player.name = this.input.value();
        this.nombreJugador.html(player.name);
        this.nombreCPU.html(this.nombreAleatorio);
        gameState = 1;
      });
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
    }
  }