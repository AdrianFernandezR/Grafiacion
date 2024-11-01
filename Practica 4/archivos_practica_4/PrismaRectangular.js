class PrismaRectangular extends GenericGeometry{
    constructor(gl, width, height, length, material = FlatMaterial(gl), transform = identity()) {
      super(gl,material,transform);
      
      this.w = width;
      this.h = height;
      this.l = length;
      this.material = material;
      this.init(gl);
    }
  
    getVertices() {
      return [
         this.w/2,  this.h/2,  this.l/2,
         this.w/2, -this.h/2,  this.l/2,
         this.w/2,  this.h/2, -this.l/2,
         this.w/2, -this.h/2, -this.l/2,
        -this.w/2,  this.h/2,  this.l/2,
        -this.w/2, -this.h/2,  this.l/2,
        -this.w/2,  this.h/2, -this.l/2,
        -this.w/2, -this.h/2, -this.l/2,
      ];
    }
  
    getFaces() {
      return [
        2, 1, 3,
        2, 0, 1,
  
        1, 4, 5,
        1, 0, 4,
  
        5, 6, 7,
        5, 4, 6,
  
        6, 3, 7,
        6, 2, 3,
  
        4, 2, 6,
        4, 0, 2,
  
        3, 5, 6,
        3, 1, 5,
      ];
    }
  }
    
    