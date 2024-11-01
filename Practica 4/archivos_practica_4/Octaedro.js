class Octaedro extends GenericGeometry{
    constructor(gl, width, material = FlatMaterial(gl), transform = identity()) {
      super(gl,material,transform);
      this.w = width;
      this.material = material;
      this.init(gl);
      
    }
    
    getVertices() {
      return [
        0, 0, this.w ,
        this.w, 0, 0,
        -this.w, 0, 0,
        0, this.w, 0,
        0, -this.w, 0,
        0, 0,-this.w 
      ];
    }
  
    getFaces() {
      return [
        3, 0, 1, 
        2, 0, 3, 
        1, 0, 4, 
        4, 0, 2, 
        1, 5, 3, 
        3, 5, 2, 
        4, 5, 2, 
        2, 5, 4
      ]
    }
  }
    
    