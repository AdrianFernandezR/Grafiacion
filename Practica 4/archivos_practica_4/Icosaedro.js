class Icosaedro extends GenericGeometry{
    constructor(gl, width, material = FlatMaterial(gl), transform = identity()) {
      super(gl,material,transform);
      this.w = width;
      this.material = material;
      this.init(gl);      
      
    }
    
    getVertices() {
      const goldenRatio = 1.6180339887;
      let width_m_goldenRatio = this.w * goldenRatio;
  
      return [
        0, this.w, width_m_goldenRatio,
        0, this.w, -width_m_goldenRatio,
        0, -this.w, width_m_goldenRatio,
        0, -this.w, -width_m_goldenRatio,
        this.w, width_m_goldenRatio, 0,
        this.w, -width_m_goldenRatio, 0,
        -this.w, width_m_goldenRatio, 0,
        -this.w, -width_m_goldenRatio, 0,
        width_m_goldenRatio, 0, this.w,
        width_m_goldenRatio, 0, -this.w,
        -width_m_goldenRatio, 0, this.w,
        -width_m_goldenRatio, 0, -this.w,
      ];
  
    }
  
    getFaces() {
      return [
        10, 2, 0,
  
        0, 2, 8,
  
        8, 2, 5,
  
        5, 2, 7,
  
        7, 2, 10,
  
        6, 10, 0,
  
        11, 10, 6, 
  
        7, 10, 11,
  
        7, 11, 3,
  
        5, 7, 3,
  
        9, 5, 3, 
  
        8, 5, 9, 
        
        4, 8, 9, 
        
        0, 8, 4,
  
        6, 0, 4,
  
        11, 1, 3,
  
        6, 1, 11,
        
        4, 1, 6, 
  
        9, 1, 4,
        
        3, 1, 9,
      ]
    }
    
  
    }
    
    