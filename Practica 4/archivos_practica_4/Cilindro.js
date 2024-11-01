class Cilindro extends GenericGeometry{ 
    constructor(gl, radius, height, Nu, Nv, material = FlatMaterial(gl), transform = identity()) {
      super(gl,material,transform);
        this.r = radius;
        this.h = height;
        this.Nu = Nu;
        this.Nv = Nv;
        this.material = material;
        this.init(gl);
    }
       
      getVertices() {
        let vertices = [];
        let phi; // la elevación en los paralelos
        let theta; // el ángulo en los meridianos
        
        // iteración para construir los paralelos
        for (let i=0; i<this.Nu+2; i++) {
          phi = i*(this.h/(this.Nu+1));
  
          // iteración para construir los meridianos
          for (let j=0; j<this.Nv; j++) {
            theta = j*(2*Math.PI/this.Nv);
  
            vertices.push(
              this.r * Math.cos(theta), 
              this.h/2 - phi, 
              this.r * Math.sin(theta) 
            );
          }
        }
  
        return vertices;
      }
  
      getFaces() {
        let faces = [];
  
        for (let i=0; i<this.Nu+1; i++) {
          for (let j=0; j<this.Nv; j++) {
            faces.push(
              j+1 + i*this.Nv,
              (j+1)%this.Nv +1 + i*this.Nv,
              (j+1)%this.Nv +1 + (i+1)*this.Nv,
  
              (j+1)%this.Nv +1 + (i+1)*this.Nv,
              j+1 + (i+1)*this.Nv,
              j+1 + i*this.Nv,
            );
          }
        }
        return faces;
      }
  
  }
  
  