// Es importante el async
window.addEventListener("load", async function(evt) {
  const gl = document.getElementById("the_canvas").getContext("webgl2");
  if (!gl) throw "WebGL no soportado";


  ////////////////////////////////////////////////////
  // Plano donde se va a dibujar la textura con los colores del frame buffer que construimos
  let plane = new PlanoPantalla(
    gl, 
    new FramebufferTextureMaterial(gl)
  );

  naranjaOscuro = new PhongMaterial(gl, [0.1,0.1,0.1], [1, 0.2, 0.4], [0,0,0], 1, [0.89,3,1,1]);
  naranjaClaro = new PhongMaterial(gl, [0.1,0.1,0.1], [1, 0.2, 0.4], [0,0,0], 1, [2,3,1,1]);
  negro = new PhongMaterial(gl, [0.1,0.1,0.1], [1, 0.2, 0.4], [0,0,0], 1, [0,0,0,1]);
  blanco = new PhongMaterial(gl, [0.1,0.1,0.1], [1, 0.2, 0.4], [0,0,0], 1, [255,255,255,1]);
  cafe = new PhongMaterial(gl, [0.1,0.1,0.1], [1, 0.2, 0.4], [0,0,0], 1, [0.7,2,1,1]);
  naranjaAbdomen = new PhongMaterial(gl, [0.1,0.1,0.1], [1, 0.2, 0.4], [0,0,0], 1, [4,8,1,1]);
  azul = new PhongMaterial(gl, [0.1,0.1,0.1], [1, 0.2, 0.4], [0,0,0], 1, [0,10,20,1]);
  verde = new PhongMaterial(gl, [0.1,0.1,0.1], [1, 0.2, 0.4], [0,0,0], 1, [0,20,10,1]);

  


  ////////////////////////////////////////////////////
  let bingo = [

    //cabeza contorno
    //lado izquierdo maximo

    new Cubo(
      gl,
      naranjaOscuro,
      translate(-8.0, -8.8, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-8.0, -11, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-10.2, -11, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-12.4, -11, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-14.6, -11, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-14.6, -13.2, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-16.8, -13.2, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-16.8, -15.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-19.0, -15.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-21.2, -15.4, 0)
    ), 
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-23.4, -15.4, 0)
    ), 
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-25.6, -15.4, 0)
    ), 
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-27.8, -15.4, 0)
    ), 
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, -15.4, 0)
    ), 
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, -13.2, 0)
    ),   
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, -11.0, 0)
    ),   
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, -8.8, 0)
    ),   
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, -6.6, 0)
    ),   
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, -4.4, 0)
    ),   
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, -2.2, 0)
    ),   
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 0, 0)
    ),   
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 2.2, 0)
    ),    
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 4.2, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 6.3, 0)
    ), //5
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 8.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 10.5, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 12.6, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 14.8, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 17.0, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 19.2, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 21.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 23.6, 0)
    ),
    //relleno pelaje
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, 2.1, 0)
    ),    
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, 4.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, 6.3, 0)
    ), 
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, 8.4, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, 10.5, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, 12.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, 14.8, 0)
    ),
    //
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, 2.1, 0)
    ),    
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, 4.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, 6.3, 0)
    ), 
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, 8.4, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, 10.5, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, 12.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, 14.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, 17, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, 19.2, 0)
    ),
    //mas

    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, 2.1, 0)
    ),    
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, 4.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, 6.3, 0)
    ), 
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, 8.4, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, 10.5, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, 12.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, 14.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, 17, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, 19.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, 21.4, 0)
    ),

    //pupila izquierda
    new Cubo(
      gl,
      negro,
      translate(-3.6, 4.4, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-3.6, 2.2, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-3.6, 0, 0.1)
    ),


    new Cubo(
      gl,
      negro,
      translate(-5.8, 0, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-5.8, 2.2, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-5.8, 4.4, 0.1)
    ),


    new Cubo(
      gl,
      negro,
      translate(-8.0, 4.4, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-8.0, 2.2, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-8.0, 0, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-8.0, -2.2, 0.1)
    ),


    new Cubo(
      gl,
      negro,
      translate(-10.2, -2.2, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-10.2, 0, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-10.2, 2.2, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-10.2, 4.4, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-10.2, 6.6, 0.1)
    ),


    new Cubo(
      gl,
      negro,
      translate(-8.0, 6.6, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-5.8, 6.6, 0.1)
    ),


    new Cubo(
      gl,
      negro,
      translate(-3.6, 6.6, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-3.6, 8.8, 0.1)
    ),

    
    new Cubo(
      gl,
      negro,
      translate(-5.8, 8.8, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-8.0, 8.8, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-10.2, 8.8, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-5.8, 11, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-8.0, 11, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-10.2, 11, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-8.8, 13.2, 0.1)
    ),

    
    //relleno ojo
    new Cubo(
      gl,
      negro,
      translate(-10.2, 13.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-12.4, 13.2, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(-12.4, 11, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-14.6, 11, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-14.6, 8.8, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(-12.4, 8.8, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(-12.4, 6.6, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(-12.4, 4.4, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(-12.4, 2.2, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(-12.4, 0, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-10.8, 15.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-13, 15.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-14.6, 13.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-14.6, 2.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-14.6, 4.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-14.6, 6.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-16.8, 6.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-16.8, 8.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-16.8, 11, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-16.8, 13.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-19, 13.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-19, 11, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-19, 8.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-19, 6.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-19, 4.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-16.8, 4.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-16.8, 2.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-16.8, 0, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-14.6, 0, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-14.6, -2.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-12.4, -2.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-12.4, -4.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-10.2, -4.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-8, -4.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-5.8, -4.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-5.8, -2.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-3.6, -2.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-2, 0, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-2, 2.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-2, 4.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-2, 6.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-2, 8.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-2, 11, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-4.2, 11, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-4.2, 13.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-6.4, 13.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-6.4, 15.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-8.6, 15.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-8.6, 17.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-10.8, 17.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-10.8, 19.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-13, 19.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-13, 17.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-15.2, 17.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-15.2, 15.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-17.4, 15.4, 0)
    ),

    //contorno ojo
    new Cubo(
      gl,
      negro,
      translate(-19.6, 15.4, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-17.4, 17.6, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-15.2, 19.8, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-13, 22, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-10.8, 22, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-8.6, 19.8, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-6.4, 17.6, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-4.2, 15.4, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-2, 13.2, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(0.2, 11, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(0.2, 8.8, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(0.2, 6.6, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(0.2, 4.4, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(0.2, 2.2, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(0.2, 0, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-1.4, -2.2, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-3.6, -4.4, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-5.8, -6.6, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-8.0, -6.6, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-10.2, -6.6, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-12.4, -6.6, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-14.6, -4.4, 0.1)
    ),  
    new Cubo(
      gl,
      negro,
      translate(-16.8, -2.2, 0.1)
    ),  
    new Cubo(
      gl,
      negro,
      translate(-19, 0, 0.1)
    ),  
    new Cubo(
      gl,
      negro,
      translate(-19, 2.1, 0.1)
    ),  
    new Cubo(
      gl,
      negro,
      translate(-21.2, 2.1, 0.1)
    ),    
    new Cubo(
      gl,
      negro,
      translate(-21.2, 4.2, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-21.2, 6.3, 0.1)
    ), 
    new Cubo(
      gl,
      negro,
      translate(-21.2, 8.4, 0.1)
    ),
    new Cubo(
      gl,
      negro,
      translate(-21.2, 10.5, 0.1)
    ),

    //contorno ojo
    new Cubo(
      gl,
      negro,
      translate(-21.2, 12.6, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(-21.2, 14.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-21.2, 17, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-21.2, 19.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-21.2, 21.4, 0)
    ),

    new Cubo(
      gl,
      naranjaClaro,
      translate(-21.2, 23.6, 0)
    ),


    new Cubo(
      gl,
      naranjaClaro,
      translate(-19, 23.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-19, 25.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-19, 28, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-19, 21.4, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-19, 19.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-19, 17, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-16.8, 19.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-16.8, 21.4, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-16.8, 23.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-16.8, 25.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-16.8, 28, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-14.6, 28, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-14.6, 25.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-14.6, 23.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-14.6, 21.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-12.4, 30.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-12.4, 28, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-12.4, 25.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-12.4, 23.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-10.2, 23.6, 0)
    ),
    //mundo
    new Cubo(
      gl,
      naranjaClaro,
      translate(-10.2, 25.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-8, 23.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-8, 21.4, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-10.2, 21.4, -0.1)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-8, 21.4, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-5.8, 21.4, -0.1)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-5.8, 19.2, -0.1)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-8, 19.2, -0.1)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-5.8, 17, -0.1)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-3.6, 19.2, -0.1)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-3.6, 17, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-1.4, 17, -0.1)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-3.6, 14.8, -0.1)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-1.4, 14.8, -0.1)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-1.4, 12.6, -0.1)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-0.2, 12.6, -0.2)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-0.2, 14.8, -0.2)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(2, 12.6, -0.2)
    ),

    //frente nariz
    new Cubo(
      gl,
      blanco,
      translate(2, 10.4, -0.2)
    ),
    new Cubo(
      gl,
      blanco,
      translate(4.2, 10.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(6.4, 10.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(6.4, 8.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(4.2, 8.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(2, 8.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(4.2, 6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(2, 6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(4.2, 3.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(2, 3.8, 0)
    ),

    //saliente nariz
    new Cubo(
      gl,
      blanco,
      translate(2, 1.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(4.2, 1.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(6.4, 1.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(8.6, 1.6, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(10.8, 1.6, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(13, 1.6, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(15.2, 1.6, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(17.4, 1.6, 0)
    ),

    new Cubo(
      gl,
      blanco,
      translate(2, -0.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(4.2, -0.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(6.4, -0.6, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(8.6, -0.6, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(10.8, -0.6, 0)
    ),
    new Cubo(
      gl,
      cafe, 
      translate(13, -0.6, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(15.2, -0.6, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(17.4, -0.6, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(19.6, -0.6, 0)
    ),


    new Cubo(
      gl,
      blanco,
      translate(-0.2, -2.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(2, -2.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(4.2, -2.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(6.4, -2.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(8.6, -2.8, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(10.8, -2.8, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(13, -2.8, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(15.2, -2.8, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(17.4, -2.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(19.6, -2.8, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(21.8, -2.8, 0)
    ),


    new Cubo(
      gl,
      blanco,
      translate(-2.4, -5, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-0.2, -5, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(2, -5, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(4.2, -5, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(6.4, -5, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(8.6, -5, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(10.8, -5, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(13, -5, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(15.2, -5, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(17.4, -5, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(19.6, -5, 0)
    ),

  //fin nariz
    new Cubo(
      gl,
      blanco,
      translate(-4.6, -7.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-2.4, -7.2, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(-0.2, -7.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(2, -7.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(4.2, -7.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(6.4, -7.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(8.6, -7.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(10.8, -7.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(13, -7.2, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(15.2, -7.2, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(17.4, -7.2, 0)
    ),


    new Cubo(
      gl,
      blanco,
      translate(-6.8, -9.4, -0.1)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-4.6, -9.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-2.4, -9.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-0.2, -9.4, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(2, -9.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(4.2, -9.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(6.4, -9.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(8.6, -9.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(10.8, -9.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(13, -9.4, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(15.2, -9.4, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(17.4, -9.4, 0)
    ),


    new Cubo(
      gl,
      blanco,
      translate(-6.8, -11.6, -0.1)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-4.6, -11.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-2.4, -11.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-0.2, -11.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(2, -11.6, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(4.2, -11.6, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(6.4, -11.6, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(8.6, -11.6, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(10.8, -11.6, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(13, -11.6, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(15.2, -11.6, 0)
    ),


    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-13.4, -13.8, -0.1)
    ),    
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-11.2, -13.8, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-9, -13.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-6.8, -13.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-4.6, -13.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-2.4, -13.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-0.2, -13.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(2, -13.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(4.2, -13.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(6.4, -13.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(8.6, -13.8, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(10.8, -13.8, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(13, -13.8, 0)
    ),

    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-13.4, -16, 0)
    ),    
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-11.2, -16, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-9, -16, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-6.8, -16, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-4.6, -16, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-2.4, -16, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(-0.2, -16, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(2, -16, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(4.2, -16, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(6.4, -16, 0)
    ),
    new Cubo(
      gl,
      blanco,
      translate(8.6, -16, 0)
    ),
    new Cubo(
      gl,
      negro,
      translate(10.8, -16, 0)
    ),
    //fin boca

    //abdomen

    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-15.6, -16, -0.1)
    ),
    
    //cachete derecho
    
    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, 23.6, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, 21.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, 19.2, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, 17, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, 14.8, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, 12.6, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, 10.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, 8.2, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, 6, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, 3.8, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, 1.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(21.8, -0.6, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, -0.6, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, -2.8, 0)
    ),

    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, -5, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(21.8, -5, 0)
    ),
    

    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, -7.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(21.8, -7.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(19.6, -7.2, 0)
    ),


    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, -9.4, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(21.8, -9.4, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(19.6, -9.4, 0)
    ),



    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, -11.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(21.8, -11.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(19.6, -11.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(17.4, -11.6, 0)
    ),


    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, -13.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(21.8, -13.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(19.6, -13.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(17.4, -13.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(15.2, -13.8, 0)
    ),
    


    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, -13.8, 0)
    ),

    new Cubo(
      gl,
      naranjaOscuro,
      translate(24, -16, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(21.8, -16, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(19.6, -16, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(17.4, -16, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(15.2, -16, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(13, -16, 0)
    ),

    //abdomen
    //1
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(21.8, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(19.6, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(17.4, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(15.2, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(13, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(10.8, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(8.6, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(6.4, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(4.2, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(2, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-0.2, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-2.4, -18.2, 0)
    ),    
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-4.6, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-6.8, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-9, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-11.2, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-13.4, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-15.6, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-17.8, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-20, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-22.2, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-24.4, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-26.6, -18.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-28.8, -18.2, 0)
    ),

    //2
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(21.8, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(19.6, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(17.4, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(15.2, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(13, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(10.8, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(8.6, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(6.4, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(4.2, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(2, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-0.2, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-2.4, -20.4, 0)
    ),    
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-4.6, -20.4, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-6.8, -20.4, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-9, -20.4, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-11.2, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-13.4, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-15.6, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-17.8, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-20, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-22.2, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-24.4, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-26.6, -20.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-28.8, -20.4, 0)
    ),


    //3
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(21.8, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(19.6, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(17.4, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(15.2, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(13, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(10.8, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(8.6, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(6.4, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(4.2, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(2, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-0.2, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-2.4, -22.6, 0)
    ),    
    new Cubo(
      gl,
      cafe,
      translate(-4.6, -22.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-6.8, -22.6, 0)
    ),
    new Cubo(
      gl,
      azul, 
      translate(-9, -22.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-11.2, -22.6, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-13.4, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-15.6, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-17.8, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-20, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-22.2, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-24.4, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-26.6, -22.6, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-28.8, -22.6, 0)
    ),

    //4

    new Cubo(
      gl,
      naranjaAbdomen,
      translate(21.8, -24.8, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(19.6, -24.8, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(17.4, -24.8, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(15.2, -24.8, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(13, -24.8, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(10.8, -24.8, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(8.6, -24.8, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(6.4, -24.8, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(4.2, -24.8, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(2, -24.8, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-0.2, -24.8, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-2.4, -24.8, 0)
    ),    
    new Cubo(
      gl,
      azul,
      translate(-4.6, -24.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-6.8, -24.8, 0)
    ),
    new Cubo(
      gl,
      azul, 
      translate(-9, -24.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-11.2, -24.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-13.4, -24.8, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-15.6, -24.8, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-17.8, -24.8, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-20, -24.8, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-22.2, -24.8, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-24.4, -24.8, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-26.6, -24.8, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-28.8, -24.8, 0)
    ),

    //5
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(21.8, -27, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(19.6, -27, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(17.4, -27, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(15.2, -27, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(13, -27, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(10.8, -27, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(8.6, -27, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(6.4, -27, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(4.2, -27, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(2, -27, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-0.2, -27, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-2.4, -27, 0)
    ),    
    new Cubo(
      gl,
      verde,
      translate(-4.6, -27, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-6.8, -27, 0)
    ),
    new Cubo(
      gl,
      verde, 
      translate(-9, -27, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-11.2, -27, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-13.4, -27, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-15.6, -27, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-17.8, -27, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-20, -27, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-22.2, -27, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-24.4, -27, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-26.6, -27, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-28.8, -27, 0)
    ),

    //6
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(21.8, -29.2, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(19.6, -29.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(17.4, -29.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(15.2, -29.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(13, -29.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(10.8, -29.2, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(8.6, -29.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(6.4, -29.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(4.2, -29.2, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(2, -29.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-0.2, -29.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-2.4, -29.2, 0)
    ),    
    new Cubo(
      gl,
      verde,
      translate(-4.6, -29.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-6.8, -29.2, 0)
    ),
    new Cubo(
      gl,
      verde, 
      translate(-9, -29.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-11.2, -29.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-13.4, -29.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-15.6, -29.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-17.8, -29.2, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-20, -29.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-22.2, -29.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-24.4, -29.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-26.6, -29.2, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-28.8, -29.2, 0)
    ),

    //7
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(21.8, -31.4, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(19.6, -31.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(17.4, -31.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(15.2, -31.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(13, -31.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(10.8, -31.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(8.6, -31.4, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(6.4, -31.4, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(4.2, -31.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(2, -31.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-0.2, -31.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-2.4, -31.4, 0)
    ),    
    new Cubo(
      gl,
      verde,
      translate(-4.6, -31.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-6.8, -31.4, 0)
    ),
    new Cubo(
      gl,
      verde, 
      translate(-9, -31.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-11.2, -31.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-13.4, -31.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-15.6, -31.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-17.8, -31.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-20, -31.4, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-22.2, -31.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-24.4, -31.4, 0)
    ),
    new Cubo(
      gl,
      naranjaAbdomen,
      translate(-26.6, -31.4, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-28.8, -31.4, 0) //inicio salida izquierda inferior
    ),

    //8
    new Cubo(
      gl,
      cafe,
      translate(21.8, -33.6, 0) // inicio salida derecha inferior
    ),
    new Cubo(
      gl,
      azul,
      translate(19.6, -33.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(17.4, -33.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(15.2, -33.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(13, -33.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(10.8, -33.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(8.6, -33.6, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(6.4, -33.6, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(4.2, -33.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(2, -33.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-0.2, -33.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-2.4, -33.6, 0)
    ),    
    new Cubo(
      gl,
      verde,
      translate(-4.6, -33.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-6.8, -33.6, 0)
    ),
    new Cubo(
      gl,
      verde, 
      translate(-9, -33.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-11.2, -33.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-13.4, -33.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-15.6, -33.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-17.8, -33.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-20, -33.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-22.2, -33.6, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-24.4, -33.6, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-26.6, -33.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-28.8, -33.6, 0)
    ),

    //9
    new Cubo(
      gl,
      cafe,
      translate(21.8, -35.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(19.6, -35.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(17.4, -35.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(15.2, -35.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(13, -35.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(10.8, -35.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(8.6, -35.8, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(6.4, -35.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(4.2, -35.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(2, -35.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-0.2, -35.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-2.4, -35.8, 0)
    ),    
    new Cubo(
      gl,
      verde,
      translate(-4.6, -35.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-6.8, -35.8, 0)
    ),
    new Cubo(
      gl,
      verde, 
      translate(-9, -35.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-11.2, -35.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-13.4, -35.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-15.6, -35.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-17.8, -35.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-20, -35.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-22.2, -35.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-24.4, -35.8, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-26.6, -35.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-28.8, -35.8, 0)
    ),

    //10
    new Cubo(
      gl,
      azul,
      translate(21.8, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(19.6, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(17.4, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(15.2, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(13, -38, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(10.8, -38, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(8.6, -38, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(6.4, -38, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(4.2, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(2, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-0.2, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-2.4, -38, 0)
    ),    
    new Cubo(
      gl,
      verde,
      translate(-4.6, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-6.8, -38, 0)
    ),
    new Cubo(
      gl,
      verde, 
      translate(-9, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-11.2, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-13.4, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-15.6, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-17.8, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-20, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-22.2, -38, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-24.4, -38, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-26.6, -38, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-28.8, -38, 0)
    ),

    //11
    new Cubo(
      gl,
      azul,
      translate(21.8, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(19.6, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(17.4, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(15.2, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(13, -40.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(10.8, -40.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(8.6, -40.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(6.4, -40.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(4.2, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(2, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-0.2, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-2.4, -40.2, 0)
    ),    
    new Cubo(
      gl,
      verde,
      translate(-4.6, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-6.8, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde, 
      translate(-9, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-11.2, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-13.4, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-15.6, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-17.8, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-20, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-22.2, -40.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-24.4, -40.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-26.6, -40.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-28.8, -40.2, 0)
    ),

    //12
    new Cubo(
      gl,
      azul,
      translate(21.8, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(19.6, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(17.4, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(15.2, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(13, -42.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(10.8, -42.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(8.6, -42.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(6.4, -42.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(4.2, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(2, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-0.2, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-2.4, -42.4, 0)
    ),    
    new Cubo(
      gl,
      verde,
      translate(-4.6, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-6.8, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde, 
      translate(-9, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-11.2, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-13.4, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-15.6, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-17.8, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-20, -42.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-22.2, -42.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-24.4, -42.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-26.6, -42.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-28.8, -42.4, 0)
    ),

    //13 //aqui
    new Cubo(
      gl,
      azul,
      translate(21.8, -44.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(19.6, -44.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(17.4, -44.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(15.2, -44.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(13, -44.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(10.8, -44.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(8.6, -44.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(6.4, -44.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(4.2, -44.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(2, -44.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-0.2, -44.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-2.4, -44.6, 0)
    ),    
    new Cubo(
      gl,
      verde,
      translate(-4.6, -44.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-6.8, -44.6, 0)
    ),
    new Cubo(
      gl,
      verde, 
      translate(-9, -44.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-11.2, -44.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-13.4, -44.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-15.6, -44.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-17.8, -44.6, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-20, -44.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-22.2, -44.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-24.4, -44.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-26.6, -44.6, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-28.8, -44.6, 0)
    ),

    //14

    new Cubo(
      gl,
      azul,
      translate(21.8, -46.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(19.6, -46.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(17.4, -46.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(15.2, -46.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(13, -46.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(10.8, -46.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(8.6, -46.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(6.4, -46.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(4.2, -46.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(2, -46.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-0.2, -46.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-2.4, -46.8, 0)
    ),    
    new Cubo(
      gl,
      verde,
      translate(-4.6, -46.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-6.8, -46.8, 0)
    ),
    new Cubo(
      gl,
      verde, 
      translate(-9, -46.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-11.2, -46.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-13.4, -46.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-15.6, -46.8, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-17.8, -46.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-20, -46.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-22.2, -46.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-24.4, -46.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-26.6, -46.8, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-28.8, -46.8, 0)
    ),

    //15
    
    new Cubo(
      gl,
      azul,
      translate(21.8, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(19.6, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(17.4, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(15.2, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(13, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(10.8, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(8.6, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(6.4, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(4.2, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(2, -49, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-0.2, -49, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-2.4, -49, 0)
    ),    
    new Cubo(
      gl,
      verde,
      translate(-4.6, -49, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-6.8, -49, 0)
    ),
    new Cubo(
      gl,
      verde, 
      translate(-9, -49, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-11.2, -49, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-13.4, -49, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-15.6, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-17.8, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-20, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-22.2, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-24.4, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-26.6, -49, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-28.8, -49, 0)
    ),

    //aqui empieza la parte de abajo del huevo
    //16
        
    new Cubo(
      gl,
      cafe,
      translate(21.8, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(19.6, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(17.4, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(15.2, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(13, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(10.8, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(8.6, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(6.4, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(4.2, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(2, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-0.2, -51.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-2.4, -51.2, 0)
    ),    
    new Cubo(
      gl,
      verde,
      translate(-4.6, -51.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-6.8, -51.2, 0)
    ),
    new Cubo(
      gl,
      verde, 
      translate(-9, -51.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-11.2, -51.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-13.4, -51.2, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-15.6, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-17.8, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-20, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-22.2, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-24.4, -51.2, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-26.6, -51.2, 0)
    ),
    new Cubo(
      gl,
      cafe,
      translate(-28.8, -51.2, 0)
    ),
    
    
    //17
    new Cubo(
      gl,
      cafe, //union limite inferior derecho
      translate(21.8, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(19.6, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(17.4, -53.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(15.2, -53.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(13, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(10.8, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(8.6, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(6.4, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(4.2, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(2, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-0.2, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-2.4, -53.4, 0)
    ),    
    new Cubo(
      gl,
      verde,
      translate(-4.6, -53.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-6.8, -53.4, 0)
    ),
    new Cubo(
      gl,
      verde, 
      translate(-9, -53.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-11.2, -53.4, 0)
    ),
    new Cubo(
      gl,
      verde,
      translate(-13.4, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-15.6, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-17.8, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-20, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-22.2, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-24.4, -53.4, 0)
    ),
    new Cubo(
      gl,
      azul,
      translate(-26.6, -53.4, 0)
    ),
    new Cubo(
      gl,
      cafe,//union limite inf izquierdo
      translate(-28.8, -53.4, 0)
    ),

   //18

  new Cubo(
    gl,
    cafe,
    translate(19.6, -55.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(17.4, -55.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(15.2, -55.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(13, -55.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(10.8, -55.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(8.6, -55.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(6.4, -55.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(4.2, -55.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(2, -55.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-0.2, -55.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-2.4, -55.6, 0)
  ),    
  new Cubo(
    gl,
    verde,
    translate(-4.6, -55.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-6.8, -55.6, 0)
  ),
  new Cubo(
    gl,
    verde, 
    translate(-9, -55.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-11.2, -55.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-13.4, -55.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-15.6, -55.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17.8, -55.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-20, -55.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-22.2, -55.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-24.4, -55.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-26.6, -55.6, 0)
  ),

  //19
  
  new Cubo(
    gl,
    cafe,
    translate(17.4, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(15.2, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(10.8, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(8.6, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(6.4, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(4.2, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(2, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-0.2, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-2.4, -57.8, 0)
  ),    
  new Cubo(
    gl,
    azul,
    translate(-4.6, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-6.8, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul, 
    translate(-9, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-11.2, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-13.4, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-15.6, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17.8, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-20, -57.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-22.2, -57.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-24.4, -57.8, 0)
  ),

   //20
  new Cubo(
    gl,
    cafe,
    translate(15.2, -60, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(13, -60, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(10.8, -60, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(8.6, -60, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(6.4, -60, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(4.2, -60, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(2, -60, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-0.2, -60, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-2.4, -60, 0)
  ),    
  new Cubo(
    gl,
    azul,
    translate(-4.6, -60, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-6.8, -60, 0)
  ),
  new Cubo(
    gl,
    azul, 
    translate(-9, -60, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-11.2, -60, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-13.4, -60, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-15.6, -60, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17.8, -60, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-20, -60, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-22.2, -60, 0)
  ),

  //21


  new Cubo(
    gl,
    cafe,
    translate(10.8, -62.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(8.6, -62.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(6.4, -62.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(4.2, -62.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(2, -62.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-0.2, -62.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-2.4, -62.2, 0)
  ),    
  new Cubo(
    gl,
    azul,
    translate(-4.6, -62.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-6.8, -62.2, 0)
  ),
  new Cubo(
    gl,
    azul, 
    translate(-9, -62.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-11.2, -62.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-13.4, -62.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-15.6, -62.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-17.8, -62.2, 0)
  ),


  //22
  

  new Cubo(
    gl,
    cafe,
    translate(8.6, -64.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(6.4, -64.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(4.2, -64.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(2, -64.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-0.2, -64.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-2.4, -64.4, 0)
  ),    
  new Cubo(
    gl,
    cafe,
    translate(-4.6, -64.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-6.8, -64.4, 0)
  ),
  new Cubo(
    gl,
    cafe, 
    translate(-9, -64.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-11.2, -64.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-13.4, -64.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-15.6, -64.4, 0)
  ),// parte baja del huevito


  //huevo abajo izquierdo
  new Cubo(
    gl,
    cafe,
    translate(-31, -51.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-31, -49, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-31, -46.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-31, -44.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-31, -42.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-31, -40.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-31, -38, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-31, -35.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-31, -33.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-31, -31.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-31, -29.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-39.8, -30.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-39.8, -32.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-42, -34.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-42, -37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-39.8, -34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-39.8, -37, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-39.8, -39.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-39.8, -41.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-37.6, -43.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-39.8, -43.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-37.6, -45.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-33.2, -50.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-35.4, -48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-37.6, -41.4, 0)
  ),
  
  new Cubo(
    gl,
    verde,
    translate(-37.6, -39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-37.6, -37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-37.6, -34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-37.6, -32.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-37.6, -30.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-35.4, -28.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-35.4, -30.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-35.4, -32.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-35.4, -34.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-35.4, -37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-35.4, -39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-35.4, -41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-35.4, -43.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-35.4, -45.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-33.2, -48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-33.2, -45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-33.2, -43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-33.2, -42.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-33.2, -40.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-33.2, -38, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-33.2, -35.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-33.2, -33.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-33.2, -31.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-33.2, -29.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-33.2, -27, 0)
  ),

  //huevo bajo derecho


  new Cubo(
    gl,
    cafe, 
    translate(24, -51.2, 0)
  ),
  new Cubo(
    gl,
    cafe, 
    translate(24, -49, 0)
  ),
  new Cubo(
    gl,
    azul, 
    translate(24, -46.8, 0)
  ),
  new Cubo(
    gl,
    azul, 
    translate(24, -44.6, 0)
  ),
  new Cubo(
    gl,
    azul, 
    translate(24, -42.4, 0)
  ),
  new Cubo(
    gl,
    azul, 
    translate(24, -40.2, 0)
  ),
  new Cubo(
    gl,
    azul, 
    translate(24, -38, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(24, -35.8, 0)
  ),
  new Cubo(
    gl,
    cafe, 
    translate(26.2, -38, 0)
  ),
  new Cubo(
    gl,
    azul, 
    translate(26.2, -40.2, 0)
  ),
  new Cubo(
    gl,
    azul, 
    translate(26.2, -42.4, 0)
  ),
  new Cubo(
    gl,
    azul, 
    translate(26.2, -44.6, 0)
  ),
  new Cubo(
    gl,
    azul, 
    translate(26.2, -46.8, 0)
  ),
  new Cubo(
    gl,
    cafe, 
    translate(26.2, -49, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(28.4, -46.8, 0)
  ),
  new Cubo(
    gl,
    azul, 
    translate(28.4, -44.6, 0)
  ),
  new Cubo(
    gl,
    azul, 
    translate(28.4, -42.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(28.4, -40.2, 0)
  ),
  new Cubo(
    gl,
    cafe, 
    translate(28.4, -38, 0)
  ),
  new Cubo(
    gl,
    cafe, 
    translate(30.6, -40.2, 0)
  ),
  new Cubo(
    gl,
    cafe, 
    translate(30.6, -42.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(30.6, -44.6, 0)
  ),
  
  //contorno huevo arriba

  new Cubo(
    gl,
    cafe,
    translate(-27.8, 34.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-30, 34.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-32.2, 34.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-32.2, 32.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-34.4, 32.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-36.6, 30.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-38.8, 30.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-41, 30.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-41, 32.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-43.2, 32.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-43.2, 34.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-45.4, 34.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-45.4, 36.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-45.4, 39, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-45.4, 41.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-45.4, 43.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-43.2, 43.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-43.2, 45.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-43.2, 47.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-43.2, 50, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-41, 50, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-41, 52.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-41, 54.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-38.8, 54.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-38.8, 56.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-38.8, 58.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-36.6, 58.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-34.4, 58.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-34.4, 61, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-32.2, 61, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-30, 61, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-30, 63.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-27.8, 63.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-25.6, 63.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-23.4, 63.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-21.2, 63.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-21.2, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-19, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-16.8, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-14.6, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-12.4, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-10.2, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-8, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-5.8, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-3.6, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-1.4, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(.8, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(3, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(5.2, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(7.4, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(9.6, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(11.8, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(14, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(16.2, 65.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(16.2, 63.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(18.4, 63.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(20.6, 63.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(22.8, 63.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(22.8, 61, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(25, 61, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(27.2, 61, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(27.2, 58.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(29.4, 58.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(31.6, 58.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(31.6, 56.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(31.6, 54.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(31.6, 52.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(33.8, 52.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(33.8, 50, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(33.8, 47.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(33.8, 47.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(33.8, 45.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(36, 45.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(36, 43.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(36, 41.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(36, 39.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(36, 37, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(36, 34.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(36, 32.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(36, 32.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(33.8, 32.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(33.8, 30.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(33.8, 28.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(33.8, 26, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(33.8, 23.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(31.6, 23.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(31.6, 21.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(29.4, 21.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(27.2, 21.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(27.2, 23.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(25, 26, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(22.8, 26, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(20.6, 26, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(18.4, 26, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(17.2, 23.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(15.4, 21.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(13.2, 19.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(11, 17.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(8.8, 15, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(6.6, 15, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(4.4, 15, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(2.2, 15, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(.8, 17.2, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-1.4, 19.4, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-3.8, 21.6, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-6, 23.8, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-8.2, 26, 0)
  ),
  new Cubo(
    gl,
    cafe,
    translate(-10.4, 28.2, 0)
  ),

  //relleno huevo
  new Cubo(
    gl,
    azul,
    translate(-8.2, 28.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-6, 28.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-6, 26, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-3.8, 26, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-3.8, 23.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 23.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 21.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 21.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 19.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 19.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 17.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 17.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 17.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 17.2, -0.1)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 19.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 19.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 19.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 21.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 21.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 21.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 21.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 19.4, -.1)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 21.6, -.1)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 21.6, -.1)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 23.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 23.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 23.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 23.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 23.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 23.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 23.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 23.8, -0.1)
  ),


  new Cubo(
    gl,
    verde,
    translate(-1.6, 26, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 26, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 26, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 26, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 26, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 26, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 26, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 26, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 26, 0)
  ),

  
  new Cubo(
    gl,
    verde,
    translate(-3.8, 28.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 28.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 28.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 28.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 28.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 28.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 28.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 28.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(13.8, 28.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 28.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 28.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 28.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 28.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(24.8, 28.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(27, 28.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(29.2, 28.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(31.4, 28.2, 0)
  ),
  //hasta aqui, curva para abajo derecha
  new Cubo(
    gl,
    azul,
    translate(31.4, 26, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(29.2, 26, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(29.2, 23.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(27, 26, 0)
  ),




  new Cubo(
    gl,
    azul,
    translate(-10.4, 30.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-8.2, 30.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-6, 30.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-3.8, 30.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 30.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 30.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 30.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 30.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 30.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 30.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 30.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(13.8, 30.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 30.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 30.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 30.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 30.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(24.8, 30.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(27, 30.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(29.2, 30.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(31.4, 30.4, 0)
  ),


  new Cubo(
    gl,
    azul,
    translate(-12.6, 32.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-10.4, 32.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-8.2, 32.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-6, 32.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-3.8, 32.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 32.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 32.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 32.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 32.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 32.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 32.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 32.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(13.8, 32.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 32.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 32.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 32.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 32.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(24.8, 32.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(27, 32.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(29.2, 32.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(31.4, 32.6, 0)
  ),


  
  new Cubo(
    gl,
    azul,
    translate(-17, 34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-14.8, 34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-12.6, 34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-10.4, 34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-8.2, 34.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-6, 34.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-3.8, 34.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 34.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 34.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 34.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 34.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 34.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 34.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 34.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(24.8, 34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(27, 34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(29.2, 34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(31.4, 34.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(33.6, 34.8, 0)
  ),
  

  //curva lado izq
  new Cubo(
    gl,
    verde,
    translate(-41.2, 34.8, 0)
  ),  
  new Cubo(
    gl,
    verde,
    translate(-39, 34.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-36.8, 34.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-34.5, 34.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-39, 32.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-36.8, 32.6, 0)
  ),

  //curva lado izq

  new Cubo(
    gl,
    verde,
    translate(-43.4, 37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-41.2, 37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-39, 37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-36.8, 37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-34.6, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-32.4, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-30.2, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-28, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-25.8, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-23.6, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-21.4, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-19.2, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-14.8, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-12.6, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-10.4, 37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-8.2, 37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-6, 37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-3.8, 37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 37, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(24.8, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(27, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(29.2, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(31.4, 37, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(33.6, 37, 0)
  ),
  

  

  new Cubo(
    gl,
    verde,
    translate(-43.4, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-41.2, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-39, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-36.8, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-34.6, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-32.4, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-30.2, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-28, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-25.8, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-23.6, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-21.4, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-19.2, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-14.8, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-12.6, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-10.4, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-8.2, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-6, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-3.8, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(24.8, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(27, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(29.2, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(31.4, 39.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(33.6, 39.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-43.4, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-41.2, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-39, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-36.8, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-34.6, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-32.4, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-30.2, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-28, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-25.8, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-23.6, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-21.4, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-19.2, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-14.8, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-12.6, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-10.4, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-8.2, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-6, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-3.8, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 41.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(24.8, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(27, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(29.2, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(31.4, 41.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(33.6, 41.4, 0)
  ),
  


  new Cubo(
    gl,
    verde,
    translate(-41.2, 43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-39, 43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-36.8, 43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-34.6, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-32.4, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-30.2, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-28, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-25.8, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-23.6, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-21.4, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-19.2, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-14.8, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-12.6, 43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-10.4, 43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-8.2, 43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-6, 43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-3.8, 43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 43.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(24.8, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(27, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(29.2, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(31.4, 43.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(33.6, 43.6, 0)
  ),
  


  new Cubo(
    gl,
    verde,
    translate(-41.2, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-39, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-36.8, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-34.6, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-32.4, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-30.2, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-28, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-25.8, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-23.6, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-21.4, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-19.2, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-14.8, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-12.6, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-10.4, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-8.2, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-6, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-3.8, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 45.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(24.8, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(27, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(29.2, 45.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(31.4, 45.8, 0)
  ),



  new Cubo(
    gl,
    verde,
    translate(-41.2, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-39, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-36.8, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-34.6, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-32.4, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-30.2, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-28, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-25.8, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-23.6, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-21.4, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-19.2, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-14.8, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-12.6, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-10.4, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-8.2, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-6, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-3.8, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 48, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(13.8, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(24.8, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(27, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(29.2, 48, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(31.4, 48, 0)
  ),


  
  new Cubo(
    gl,
    verde,
    translate(-39, 50.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-36.8, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-34.6, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-32.4, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-30.2, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-28, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-25.8, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-23.6, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-21.4, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-19.2, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-14.8, 50.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-12.6, 50.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-10.4, 50.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-8.2, 50.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-6, 50.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-3.8, 50.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 50.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 50.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 50.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 50.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 50.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 50.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 50.2, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(13.8, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(24.8, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(27, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(29.2, 50.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(31.4, 50.2, 0)
  ),



  new Cubo(
    gl,
    verde,
    translate(-39, 52.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-36.8, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-34.6, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-32.4, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-30.2, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-28, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-25.8, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-23.6, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-21.4, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-19.2, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-14.8, 52.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-12.6, 52.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-10.4, 52.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-8.2, 52.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-6, 52.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-3.8, 52.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 52.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 52.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 52.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 52.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 52.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 52.4, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(11.6, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(24.8, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(27, 52.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(29.2, 52.4, 0)
  ),





  new Cubo(
    gl,
    verde,
    translate(-36.8, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-34.6, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-32.4, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-30.2, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-28, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-25.8, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-23.6, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-21.4, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-19.2, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-14.8, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-12.6, 54.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-10.4, 54.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-8.2, 54.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-6, 54.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-3.8, 54.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 54.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 54.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 54.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 54.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 54.6, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(9.4, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(11.6, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(24.8, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(27, 54.6, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(29.2, 54.6, 0)
  ),


  new Cubo(
    gl,
    verde,
    translate(-36.8, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-34.6, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-32.4, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-30.2, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-28, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-25.8, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-23.6, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-21.4, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-19.2, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-14.8, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-12.6, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-10.4, 56.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-8.2, 56.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-6, 56.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-3.8, 56.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(-1.6, 56.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(0.6, 56.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(2.8, 56.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(5, 56.8, 0)
  ),
  new Cubo(
    gl,
    verde,
    translate(7.2, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(9.4, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(11.6, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(24.8, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(27, 56.8, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(29.2, 56.8, 0)
  ),





  new Cubo(
    gl,
    azul,
    translate(-32.4, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-30.2, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-28, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-25.8, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-23.6, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-21.4, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-19.2, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-14.8, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-12.6, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-10.4, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-8.2, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-6, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-3.8, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-1.6, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(0.6, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(2.8, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(5, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(7.2, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(9.4, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(11.6, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(22.6, 59, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(24.8, 59, 0)
  ),



  new Cubo(
    gl,
    azul,
    translate(-28, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-25.8, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-23.6, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-21.4, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-19.2, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-14.8, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-12.6, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-10.4, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-8.2, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-6, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-3.8, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-1.6, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(0.6, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(2.8, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(5, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(7.2, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(9.4, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(11.6, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(16, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(18.2, 61.2, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(20.4, 61.2, 0)
  ),


 
  new Cubo(
    gl,
    azul,
    translate(-19.2, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-17, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-14.8, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-12.6, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-10.4, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-8.2, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-6, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-3.8, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(-1.6, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(0.6, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(2.8, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(5, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(7.2, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(9.4, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(11.6, 63.4, 0)
  ),
  new Cubo(
    gl,
    azul,
    translate(13.8, 63.4, 0)
  ),

  
  
  
  
  
  
  


  
  







  //frente

  new Cubo(
    gl,
    naranjaClaro,
    translate(22, 23.6, 0)
  ),
  new Cubo(
    gl,
    naranjaClaro,
    translate(19.8, 23.6, 0)
  ),
  new Cubo(
    gl,
    naranjaClaro,
    translate(17.6, 21.4, 0)
  ),
  new Cubo(
    gl,
    naranjaClaro,
    translate(15.4, 19.2, 0)
  ),
  new Cubo(
    gl,
    naranjaClaro,
    translate(13.2, 17, 0)
  ),
  new Cubo(
    gl,
    naranjaClaro,
    translate(11, 14.8, 0)
  ),
  new Cubo(
    gl,
    naranjaClaro,
    translate(8.6, 12.6, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(8.6, 10.4, 0)
  ),
  new Cubo(
    gl,
    naranjaClaro,
    translate(6.4, 8.2, 0)
  ),

  new Cubo(
    gl,
    naranjaClaro,
    translate(6.4, 12.6, 0)
  ),
  new Cubo(
    gl,
    naranjaClaro,
    translate(4.2, 12.6, 0)
  ),




  //ojo derecho
  
  new Cubo(
    gl,
    negro,
    translate(22, 19.2, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(19.8, 19.2, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(17.6, 17, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(15.4, 14.8, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(13.2, 12.6, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(11, 10.4, 0)
  ),

  new Cubo(
    gl,
    blanco,
    translate(11, 8.2, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(11, 6, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(11, 3.8, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(13.2, 3.8, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(13.2, 6, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(13.2, 8.2, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(13.2, 10.4, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(8.8, 3.8, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(8.8, 6, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(15.4, 12.6, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(17.6, 14.8, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(19.8, 17, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(22, 17, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(22, 14.8, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(22, 1.6, 0)
  ),
  //fin blanco ojo derecho


  //pupila derecha
  new Cubo(
    gl,
    negro,
    translate(15.4, 3.8, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(15.4, 6, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(15.4, 8.2, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(15.4, 10.4, 0)
  ),
  
  new Cubo(
    gl,
    negro,
    translate(17.6, 3.8, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(17.6, 6, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(17.6, 8.2, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(17.6, 10.4, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(17.6, 12.6, 0)
  ),


  new Cubo(
    gl,
    negro,
    translate(19.8, 1.6, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(19.8, 3.8, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(19.8, 6, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(19.8, 8.2, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(19.8, 10.4, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(19.8, 12.6, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(19.8, 14.8, 0)
  ),


  new Cubo(
    gl,
    blanco,
    translate(22, 3.8, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(22, 6, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(22, 8.2, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(22, 10.4, 0)
  ),
  new Cubo(
    gl,
    blanco,
    translate(22, 12.6, 0)
  ),





  //borde ojo derecho
  new Cubo(
    gl,
    naranjaClaro,
    translate(22, 21.4, 0)
  ),
  new Cubo(
    gl,
    naranjaClaro,
    translate(19.8, 21.4, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(17.6, 19.2, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(15.4, 17, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(13.2, 14.8, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(11, 12.6, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(11, 12.6, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(8.6, 10.4, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(8.6, 8.2, 0)
  ),
  new Cubo(
    gl,
    negro,
    translate(6.4, 6, 0)
  ),
  //pupila derecha
  new Cubo(
    gl,
    blanco,
    translate(6.4, 3.8, 0)
  ),



    //relleno oreja izquieda
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, 23.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, 25.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, 28, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, 30.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, 30.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, 32.4, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, 28, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, 25.8, 0)
    ),

    //fin relleno oreja derecha
    
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 25.8, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 28.0, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 30.2, 0)
    ),
    
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-30, 32.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-27.8, 32.4, 0)
    ),
    //punto mas alto bingo
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-25.6, 34.6, 0)
    ),
    //relleno
    
    // inicio de curva cabeza
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-27.9, 17.0, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-27.9, 19.2, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-27.9, 21.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-25.6, 21.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-25.6, 23.6, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-23.4, 23.6, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-23.4, 25.8, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-23.4, 25.8, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-21.2, 25.8, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-21.2, 28.0, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, 28.0, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, 30.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, 32.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-23.4, 34.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-21.2, 30.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-21.2, 32.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-21.2, 34.6, 0)
    ),
  
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-19.0, 34.6, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-19.0, 32.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-19.0, 30.2, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-16.8, 32.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-16.8, 30.2, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-14.6, 32.4, 0)
    ),
    new Cubo(
      gl,
      naranjaOscuro,
      translate(-14.6, 30.2, 0)
    ),
    //relleno cachete izquierdo
    new Cubo(
      gl,
      naranjaClaro,
      translate(-21.2, 0, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, 0, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, 0, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, 0, 0)
    ), 
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, -2.2, 0)
    ),  
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, -2.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, -2.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-21.2, -2.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-19, -2.2, 0)
    ),

    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, -4.4, 0)
    ),  
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, -4.4, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, -4.4, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-21.2, -4.4, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-19, -4.4, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-16.8, -4.4, 0)
    ),


    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, -6.6, 0)
    ),  
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, -6.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, -6.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-21.2, -6.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-19, -6.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-16.8, -6.6, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-14.6, -6.6, 0)
    ),

    
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, -8.8, 0)
    ),  
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, -8.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, -8.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-21.2, -8.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-19, -8.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-16.8, -8.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-14.6, -8.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-12.4, -8.8, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-10.2, -8.8, 0)
    ),
    
    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, -11, 0)
    ),  
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, -11, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, -11, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-21.2, -11, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-19, -11, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-16.8, -11, 0)
    ),

    new Cubo(
      gl,
      naranjaClaro,
      translate(-27.8, -13.2, 0)
    ),  
    new Cubo(
      gl,
      naranjaClaro,
      translate(-25.6, -13.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-23.4, -13.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-21.2, -13.2, 0)
    ),
    new Cubo(
      gl,
      naranjaClaro,
      translate(-19, -13.2, 0)
    ),
  ];

  let camera = new OrbitCamera(
    { x:0, y:0, z:200 }, // posición
    { x:2, y:-10, z:0 }, // centro de interés
    { x:0, y:1, z:0 }, // vector hacia arriba
  );
  let viewMatrix;

  let projectionMatrix = perspective(45*Math.PI/180, gl.canvas.width/gl.canvas.height, 0.1, 2000);;

  let light = new LuzPuntual(
    { x: 0, y: 5, z: 5 }, // posición
    [ 0.2, 0.2, 0.2 ],    // component ambiental
    [ 1, 1, 1 ],          // componente difuso
    [ 1, 1, 1 ]           // componente especular
  );


  // Para almacenar la información de color se crea una textura
  let color_texture = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, color_texture);
  
  let level = 0;
  let internalFormat = gl.RGBA;
  let texture_width  = gl.canvas.width;
  let texture_height = gl.canvas.height;
  let border = 0;
  let format = internalFormat;
  let type = gl.UNSIGNED_BYTE;
  let data = null;
  
  // Similar a como construimos las texturas a partir de imágenes utilizamos la función texImage2D, pero esta vez con parámetros adicionales para indicar el tamaño y formato de la textura que estamos creando
  gl.texImage2D(
    gl.TEXTURE_2D, level, internalFormat,
    texture_width, texture_height, border,
    format, type, data
  );
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  // Un frame buffer es un lugar en memoria en la GPU donde escribe sus resultados el shader de fragmentos y etapas subsecuentes (mezclado y composición); para almacenar esta información se necesitan áreas de memoria las cuales se asignan por medio de texturas
  let myFrameBuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, myFrameBuffer);

  // La función framebufferTexture2D asocia una textura a un elemento particular del frame buffer, en este caso se asocia con el color (gl.COLOR_ATTACHMENT)
  // En WebGL2 es posible tener hasta 16 texturas asignadas al color, esto con la finalidad de escribir varios a datos durante la misma ejecución de un shader de fragmentos
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, color_texture, level);

  // Además de una textura para almacenar los colores, se necesita un componente para almacenar la profundidad, es decir, un z-buffer para el nuevo frame buffer, así que se crea un render buffer para este fin
  let depthBuffer = gl.createRenderbuffer();
  gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);
  gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, texture_width, texture_height);

  // Se asocia al frame buffer activo el nuevo buffer de profundidad
  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);

  // Se libera la textura activa
  gl.bindTexture(gl.TEXTURE_2D, null);

  // Se libera el frame buffer activo
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);


  // Se asocia la textura del frame buffer con el material del plano
  plane.material.texture = color_texture;

  gl.enable(gl.DEPTH_TEST);

  /**
   */
  function draw() {
    viewMatrix = camera.getMatrix();
    light.update(viewMatrix);

    // Se activa el frame buffer creado, para realizar el render en él
    gl.bindFramebuffer(gl.FRAMEBUFFER, myFrameBuffer);
    gl.bindTexture(gl.TEXTURE_2D, color_texture);
    gl.viewport(0, 0, texture_width, texture_height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    for (let i=0; i<bingo.length; i++) {
      bingo[i].draw(gl, projectionMatrix, viewMatrix, light);
    }

    // Se libera la textura
    gl.bindTexture(gl.TEXTURE_2D, null);


    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0.2, 0.2, 0.2, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Se dibuja el plano
    plane.draw(gl, projectionMatrix, viewMatrix, light);
  }

  draw();

  // la cámara registra su manejador de eventos
  camera.registerMouseEvents(gl.canvas, draw);

});
