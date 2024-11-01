class Dodecaedro extends GenericGeometry{
    constructor(gl, width, material = FlatMaterial(), transform = identity()) {
    super(gl,material,transform);
    this.w = width;
    this.material = material;
    this.init(gl);
  }

  getVertices() {
    const goldenRatio = 1.6180339887;
    let width_d_goldenRatio = this.w/goldenRatio;
    let width_m_goldenRatio = this.w*goldenRatio;

    return [
      this.w, this.w, this.w, 
      this.w, this.w, -this.w, 
      this.w, -this.w, this.w, 
      this.w,  -this.w, -this.w, 
      -this.w,   this.w,  this.w, 
      -this.w,   this.w, -this.w, 
      -this.w,  -this.w,  this.w, 
      -this.w,  -this.w, -this.w, 
      0,   width_d_goldenRatio,  width_m_goldenRatio,
      0,   width_d_goldenRatio, -width_m_goldenRatio, 
      0,  -width_d_goldenRatio,  width_m_goldenRatio, 
      0,  -width_d_goldenRatio, -width_m_goldenRatio, 
      width_d_goldenRatio,   width_m_goldenRatio, 0, 
      width_d_goldenRatio,  -width_m_goldenRatio, 0, 
      -width_d_goldenRatio,   width_m_goldenRatio, 0, 
      -width_d_goldenRatio,  -width_m_goldenRatio, 0, 
      width_m_goldenRatio,  0,  width_d_goldenRatio, 
      width_m_goldenRatio,  0, -width_d_goldenRatio, 
      -width_m_goldenRatio,  0,  width_d_goldenRatio, 
      -width_m_goldenRatio,  0, -width_d_goldenRatio
    ];
  }

  getFaces() {
    return [
      // Polígono 1: [0, 16, 2, 10, 8] convertido en triángulos
      0, 16, 2,
      0, 2, 10,
      0, 10, 8,

      // Polígono 2: [12, 1, 17, 16, 0] convertido en triángulos
      12, 1, 17,
      12, 16, 17,
      12, 0, 16,

      // Polígono 3: [8, 4, 14, 12, 0] convertido en triángulos
      8, 14, 4,
      8, 12, 14,
      8, 0, 12,

      // Polígono 4: [2, 16, 17, 3, 13] convertido en triángulos
      2, 17, 16,
      2, 3, 17,
      2, 13, 3,

      // Polígono 5: [13, 15, 6, 10, 2] convertido en triángulos
      13, 6, 15,
      13, 10, 6,
      13, 2, 10,

      // Polígono 6: [6, 18, 4, 8, 10] convertido en triángulos
      6, 4, 18,
      6, 8, 4,
      6, 10, 8,

      // Polígono 7: [3, 17, 1, 9, 11] convertido en triángulos
      3, 1, 17,
      3, 9, 1,
      3, 11, 9,

      // Polígono 8: [13, 3, 11, 7, 15] convertido en triángulos
      13, 11, 3,
      13, 7, 11,
      13, 15, 17,

      // Polígono 9: [1, 12, 14, 5, 9] convertido en triángulos
      1, 12, 14,
      1, 14, 5,
      1, 5, 9,

      // Polígono 10: [11, 9, 5, 19, 7] convertido en triángulos
      11, 9, 5,
      11, 5, 19,
      11, 19, 7,

      // Polígono 11: [5, 14, 4, 18, 19] convertido en triángulos
      5, 4, 14,
      5, 18, 4,
      5, 19, 18,

      // Polígono 12: [6, 15, 7, 19, 18] convertido en triángulos
      6, 7, 15,
      6, 19, 7,
      6, 18, 19
    ]
  }

  
  
  }
  
  