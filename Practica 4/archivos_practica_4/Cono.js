class Cono {
    constructor(gl, radius, height, Nu, Nv, color = [1, 1, 1, 1], transform = identity()) {
        this.r = radius;
        this.h = height;
        this.Nu = Nu;
        this.Nv = Nv;
        this.color = color;
  
        this.transform = transform;
        this.vertices = this.getVertices();
        this.faces = this.getFaces();
      
        // ... Inicialización de VAO y buffers ...
        let vertexShaderSource = 
        `#version 300 es
        in vec4 a_position;
        
        uniform mat4 u_PVM_matrix;
        
        void main() {
          gl_Position = u_PVM_matrix * a_position;
        }`;
        
        let fragmentShaderSource =
        `#version 300 es
        precision mediump float;
        
        uniform vec4 u_color;
        out vec4 pixelColor;
        
        void main() {
          pixelColor = u_color;
        }`;
          
         this.program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
        
          // se obtiene una referencia al atributo para la posición de los vértices
          let positionAttributeLocation = gl.getAttribLocation(this.program, "a_position");
        
          // se obtiene una referencia al atributo para el color de los vértices
          this.colorUniformLocation = gl.getUniformLocation(this.program, "u_color");
          this.PVM_matrixLocation = gl.getUniformLocation(this.program, "u_PVM_matrix");
  
    // se crea un Vertex Array Object, que será el encargado de contener la información del objeto que queremos dibujar
    // este VAO agrupa los buffers de datos y la configuración de los atributos para que la GPU conozca como utilizar los datos
    this.shapeVAO = gl.createVertexArray();
    gl.bindVertexArray(this.shapeVAO);
    // Se crea el buffer de las posiciones
    let positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);
  
    let indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.faces), gl.STATIC_DRAW);
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
  
    this.num_elements = this.faces.length;
  }
  
  
    draw(gl, projectionViewMatrix, wireframe) {
      gl.useProgram(this.program);
      let projectionViewModelMatrix = Matrix4.multiply(projectionViewMatrix, this.transform);
      gl.uniformMatrix4fv(this.PVM_matrixLocation, true, projectionViewModelMatrix.toArray());
      gl.uniform4fv(this.colorUniformLocation, this.color);
  
      if(!wireframe) {
        // Se activa el Vertex Array Object que contiene la información necesaria para dibujar la geometría
        gl.bindVertexArray(this.shapeVAO);
        // Se inicia el dibujado
        gl.drawElements(gl.TRIANGLES, this.num_elements, gl.UNSIGNED_SHORT, 0);
        gl.bindVertexArray(null);
      }
      else {
        gl.uniform4fv(this.colorUniformLocation, [0,0,0,1]);
        gl.bindVertexArray(this.shapeVAO);
        gl.drawElements(gl.LINE_LOOP, this.num_elements, gl.UNSIGNED_SHORT, 0);
        gl.bindVertexArray(null);
      }
    }
    getVertices() {
      let vertices = [];
      let phi;
      let theta;
  
      vertices.push( 0, this.h / 2, 0); // punta del cono
  
      for (let i = 0; i < this.Nu + 1; i++) {
          phi = (i + 1) * (this.h / (this.Nu + 1));
  
          for (let j = 0; j < this.Nv; j++) {
              theta = j * (2 * Math.PI / this.Nv);
  
              vertices.push(
                  (phi * this.r) / this.h * Math.cos(theta),
                  this.h / 2 - phi,
                  (phi * this.r) / this.h * Math.sin(theta)
              );
          }
      }
  
      return vertices;
  }
  
  getFaces() {
    
    let faces = [];
    // triángulos que utilizan la punta del cono (el vértice 0)
    for (let i=0; i<this.Nv; i++) {
        
        faces.push(
            0, // indice del polo norte
            (i%this.Nv)+1,
            ((i+1)%this.Nv)+1,
        );
  }
  
  for (let i=0; i<this.Nu; i++) {
    for (let j=0; j<this.Nv; j++) {
        faces.push(
            j+1 + i*this.Nv,
            (j+1)%this.Nv +1 + (i+1)*this.Nv,
            (j+1)%this.Nv +1 + i*this.Nv,

            (j+1)%this.Nv +1 + (i+1)*this.Nv,
            j+1 + (i+1)*this.Nv,
            j+1 + i*this.Nv,
        );
        }
    }
    
    return faces;
    }

}