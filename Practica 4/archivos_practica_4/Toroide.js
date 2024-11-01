class Toroide extends GenericGeometry{
    constructor(gl, major_radius, minor_radius, Nu, Nv, material = FlatMaterial(gl), transform = identity()) {
      super(gl,material,transform);
      this.R = major_radius;
      this.r = minor_radius;
      this.Nu = Nu;
      this.Nv = Nv;
      this.material = material;
      this.init(gl);
      
    }
    
    getVertices() {
      let vertices = [];
      for (let i=0; i<this.Nv+1; i++) {
        for (let j=0; j<this.Nu; j++) {
          vertices.push(
            -(this.R + this.r * Math.sin(2*Math.PI*j/this.Nu)) * Math.sin(2*Math.PI*i/this.Nv),
            this.r * Math.cos(2*Math.PI*j/this.Nu),
            (this.R + this.r * Math.sin(2*Math.PI*j/this.Nu)) * Math.cos(2*Math.PI*i/this.Nv),
          );
        }
      }
  
      return vertices;
    }
  
    getFaces() {
      let faces = [];
    
      for (let i = 0; i < this.Nv; i++) {
        for (let j = 0; j < this.Nu; j++) {
          // Primer triángulo del cuadrilátero
          faces.push(
            j + i * this.Nu,                     // Vértice inferior izquierdo
            j + (i + 1) * this.Nu,               // Vértice superior izquierdo
            (j + 1) % this.Nu + i * this.Nu,      // Vértice inferior derecho
  
            j + (i + 1) * this.Nu,               // Vértice superior izquierdo
            (j + 1) % this.Nu + (i + 1) * this.Nu, // Vértice superior derecho
            (j + 1) % this.Nu + i * this.Nu      // Vértice inferior derecho
          );
        }
      }
    
      return faces;
    }
    
    
    }
    
    