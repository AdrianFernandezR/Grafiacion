#include <iostream>
#include <cmath>

using namespace std;

/** 
 * @class Vector3
 * @brief La clase Vector3 representa Vectores de tres componentes(x, y, z)
 */

class Vector3 {
public:
    // Constructor
    Vector3(double x = 0.0, double y = 0.0, double z = 0.0) : x(x), y(y), z(z) {}

    // Suma de dos vectores
    static Vector3 add(const Vector3& u, const Vector3& v) {
        return Vector3(u.x + v.x, u.y + v.y, u.z + v.z);
    }
    
    //sobrecarga suma
    Vector3& operator+=(const Vector3& v) {
        this->x += v.x;
        this->y += v.y;
        this->z += v.z;
        return *this;
    }

    // Clonar el vector actual
    Vector3 clone() const {
        return Vector3(x, y, z);
    }

    // Producto cruz de dos vectores
    static Vector3 cross(const Vector3& u, const Vector3& v) {
        return Vector3((u.y * v.z) - (u.z * v.y),
                       (u.z * v.x) - (u.x * v.z),
                       (u.x * v.y) - (u.y * v.x));
    }

    // Distancia euclidiana entre dos vectores
    static double distance(const Vector3& u, const Vector3& v) {
        return sqrt(pow(u.x - v.x, 2) + pow(u.y - v.y, 2) + std::pow(u.z - v.z, 2));
    }

    // Producto punto de dos vectores
    static double dot(const Vector3& u, const Vector3& v) {
        return (u.x * v.x) + (u.y * v.y) + (u.z * v.z);
    }

    // Aproximadamente iguales (epsilon = 0.000001)
    static bool equals(const Vector3& u, const Vector3& v, double epsilon = 0.000001) {
        bool xClose = (u.x - epsilon < v.x && v.x < u.x + epsilon);
        bool yClose = (u.y - epsilon < v.y && v.y < u.y + epsilon);
        bool zClose = (u.z - epsilon < v.z && v.z < u.z + epsilon);
        return xClose && yClose && zClose;
    }

    // Exactamente iguales
    static bool exactEquals(const Vector3& u, const Vector3& v) {
        return (u.x == v.x && u.y == v.y && u.z == v.z);
    }

    // Normalizar el vector actual
    Vector3 normalize() const {
        double mag = sqrt(x * x + y * y + z * z);
        if (mag == 0) return Vector3(0, 0, 0);  // Evitar división por cero
        return Vector3(x / mag, y / mag, z / mag);
    }

    // Asignar nuevos valores al vector
    void set(double x = 0.0, double y = 0.0, double z = 0.0) {
        this->x = x;
        this->y = y;
        this->z = z;
    }

    // Restar dos vectores
    static Vector3 subtract(const Vector3& u, const Vector3& v) {
        return Vector3(u.x - v.x, u.y - v.y, u.z - v.z);
    }

    // Distancia euclidiana al cuadrado entre dos vectores
    static double squaredDistance(const Vector3& u, const Vector3& v) {
        return pow(v.x - u.x, 2) + pow(v.y - u.y, 2) + pow(v.z - u.z, 2);
    }

    // Asignar el vector a cero
    void zero() {
        set(0.0, 0.0, 0.0);
    }

private:
    double x, y, z;
};


/** 
 * @class Vector4
 * @brief La clase Vector3 representa Vectores de cuatro componentes(x, y, z, w)
 */

class Vector4 {
public:
    double x, y, z, w;

    // Constructor
    Vector4(double x = 0, double y = 0, double z = 0, double w = 0) : x(x), y(y), z(z), w(w) {}

    // Función que devuelve la suma de dos vectores
    static Vector4 add(const Vector4& u, const Vector4& v) {
        return Vector4(u.x + v.x, u.y + v.y, u.z + v.z, u.w + v.w);
    }

    // Función que devuelve una copia del objeto
    Vector4 clone() const {
        return Vector4(x, y, z, w);
    }

    // Función que devuelve la distancia euclidiana entre dos vectores
    static double distance(const Vector4& u, const Vector4& v) {
        return sqrt(pow(u.x - v.x, 2) + pow(u.y - v.y, 2) +
                         pow(u.z - v.z, 2) + pow(u.w - v.w, 2));
    }

    // Función que devuelve el producto punto de dos vectores
    static double dot(const Vector4& u, const Vector4& v) {
        return (u.x * v.x) + (u.y * v.y) + (u.z * v.z) + (u.w * v.w);
    }

    // Función que verifica si dos vectores son aproximadamente iguales
    static bool equals(const Vector4& u, const Vector4& v, double epsilon = 0.000001) {
        return fabs(u.x - v.x) < epsilon && fabs(u.y - v.y) < epsilon &&
               fabs(u.z - v.z) < epsilon && fabs(u.w - v.w) < epsilon;
    }

    // Función que verifica si dos vectores son exactamente iguales
    static bool exactEquals(const Vector4& u, const Vector4& v) {
        return u.x == v.x && u.y == v.y && u.z == v.z && u.w == v.w;
    }

    // Función que devuelve el vector normalizado
    Vector4 normalize() const {
        double length = sqrt(x * x + y * y + z * z + w * w);
        if (length == 0) {
            return Vector4();
        } else {
            return Vector4(x / length, y / length, z / length, w / length);
        }
    }

    // Función que asigna nuevos valores a los componentes del vector
    void set(double x, double y, double z, double w) {
        this->x = x;
        this->y = y;
        this->z = z;
        this->w = w;
    }

    // Función que devuelve la resta de dos vectores
    static Vector4 subtract(const Vector4& u, const Vector4& v) {
        return Vector4(u.x - v.x, u.y - v.y, u.z - v.z, u.w - v.w);
    }

    // Función que devuelve la distancia euclidiana al cuadrado entre dos vectores
    static double squaredDistance(const Vector4& u, const Vector4& v) {
        return pow(v.x - u.x, 2) + pow(v.y - u.y, 2) +
               pow(v.z - u.z, 2) + pow(v.w - u.w, 2);
    }

    // Función que asigna cero a cada componente del vector
    void zero() {
        set(0, 0, 0, 0);
    }
};



/** 
 * @class Matrix3
 * @brief La clase Matrix3 representa matrices de 3 × 3. Y se utilizará para la representación y construcción de transformaciones en dos dimensiones.
 */

class Matrix3 {
public:
    double a00, a01, a02;
    double a10, a11, a12;
    double a20, a21, a22;

    // Constructor por defecto
    Matrix3(double a00 = 1, double a01 = 0, double a02 = 0,
            double a10 = 0, double a11 = 1, double a12 = 0,
            double a20 = 0, double a21 = 0, double a22 = 1)
            : a00(a00), a01(a01), a02(a02),
              a10(a10), a11(a11), a12(a12),
              a20(a20), a21(a21), a22(a22) {}

    // Suma de matrices
    static Matrix3 add(const Matrix3& m1, const Matrix3& m2) {
        return Matrix3(m1.a00 + m2.a00, m1.a01 + m2.a01, m1.a02 + m2.a02,
                       m1.a10 + m2.a10, m1.a11 + m2.a11, m1.a12 + m2.a12,
                       m1.a20 + m2.a20, m1.a21 + m2.a21, m1.a22 + m2.a22);
    }


    // Matriz adjoint
    Matrix3 adjoint() const {
        return Matrix3((a11 * a22) - (a12 * a21), (-a01 * a22) + (a02 * a21), (a01 * a12) - (a02 * a11),
                       (-a10 * a22) + (a12 * a20), (a00 * a22) - (a02 * a20), (-a00 * a12) + (a02 * a10),
                       (a10 * a21) - (a11 * a20), (-a00 * a21) + (a01 * a20), (a00 * a11) - (a01 * a10));
    }

    // Clonar matriz
    Matrix3 clone() const {
        return Matrix3(a00, a01, a02, a10, a11, a12, a20, a21, a22);
    }

    // Determinante
    double determinant() const {
        return (a00 * a11 * a22) - (a00 * a12 * a21) - (a01 * a10 * a22) + (a01 * a12 * a20) + (a02 * a10 * a21) - (a02 * a11 * a20);
    }

    // Comparar matrices con epsilon
    static bool equalsWithE(const Matrix3& m1, const Matrix3& m2, double e) {
        bool r1 = (m1.a00 - e < m2.a00 && m2.a00 < m1.a00 + e) && (m1.a01 - e < m2.a01 && m2.a01 < m1.a01 + e) && (m1.a02 - e < m2.a02 && m2.a02 < m1.a02 + e);
        bool r2 = (m1.a10 - e < m2.a10 && m2.a10 < m1.a10 + e) && (m1.a11 - e < m2.a11 && m2.a11 < m1.a11 + e) && (m1.a12 - e < m2.a12 && m2.a12 < m1.a12 + e);
        bool r3 = (m1.a20 - e < m2.a20 && m2.a20 < m1.a20 + e) && (m1.a21 - e < m2.a21 && m2.a21 < m1.a21 + e) && (m1.a22 - e < m2.a22 && m2.a22 < m1.a22 + e);
        return r1 && r2 && r3;
    }

    // Comparar matrices con epsilon predeterminado
    static bool equals(const Matrix3& m1, const Matrix3& m2) {
        const double epsilon = 0.000001;
        return equalsWithE(m1, m2, epsilon);
    }

    // Comparar matrices exactamente
    static bool exactEquals(const Matrix3& m1, const Matrix3& m2) {
        return equalsWithE(m1, m2, 0);
    }

    // Identidad
    void identity() {
        a00 = 1; a01 = 0; a02 = 0;
        a10 = 0; a11 = 1; a12 = 0;
        a20 = 0; a21 = 0; a22 = 1;
    }

    // Inversión
    Matrix3 invert() const {
        double d = determinant();
        if (d == 0) {
            cerr << "No tiene inversa" << endl;
            return Matrix3(); // Retorna una matriz identidad si no hay inversa
        }
        double d1 = 1 / d;
        Matrix3 adj = adjoint();
        return multiplyScalar(adj, d1);
    }

    // Multiplicacionn de matrices
    static Matrix3 multiply(const Matrix3& m1, const Matrix3& m2) {
        return Matrix3(
            (m1.a00 * m2.a00) + (m1.a01 * m2.a10) + (m1.a02 * m2.a20),
            (m1.a00 * m2.a01) + (m1.a01 * m2.a11) + (m1.a02 * m2.a21),
            (m1.a00 * m2.a02) + (m1.a01 * m2.a12) + (m1.a02 * m2.a22),
            (m1.a10 * m2.a00) + (m1.a11 * m2.a10) + (m1.a12 * m2.a20),
            (m1.a10 * m2.a01) + (m1.a11 * m2.a11) + (m1.a12 * m2.a21),
            (m1.a10 * m2.a02) + (m1.a11 * m2.a12) + (m1.a12 * m2.a22),
            (m1.a20 * m2.a00) + (m1.a21 * m2.a10) + (m1.a22 * m2.a20),
            (m1.a20 * m2.a01) + (m1.a21 * m2.a11) + (m1.a22 * m2.a21),
            (m1.a20 * m2.a02) + (m1.a21 * m2.a12) + (m1.a22 * m2.a22));
    }

    // Multiplicacion por escalar
    static Matrix3 multiplyScalar(const Matrix3& m1, double c) {
        return Matrix3(
            m1.a00 * c, m1.a01 * c, m1.a02 * c,
            m1.a10 * c, m1.a11 * c, m1.a12 * c,
            m1.a20 * c, m1.a21 * c, m1.a22 * c);
    }

    // Multiplicacion por vector
    Vector3 multiplyVector(const Vector3& v) const;

    // Rotacion
    static Matrix3 rotate(double theta) {
        return Matrix3(cos(theta), - sin(theta), 0,
                       sin(theta), cos(theta), 0,
                       0, 0, 1);
    }

    // Escalamiento
    static Matrix3 scale(double sx, double sy) {
        return Matrix3(sx, 0, 0,
                       0, sy, 0,
                       0, 0, 1);
    }

    // Asignar valores
    void set(double a00, double a01, double a02,
             double a10, double a11, double a12,
             double a20, double a21, double a22) {
        this->a00 = a00; this->a01 = a01; this->a02 = a02;
        this->a10 = a10; this->a11 = a11; this->a12 = a12;
        this->a20 = a20; this->a21 = a21; this->a22 = a22;
    }

    // Resta de matrices
    static Matrix3 subtract(const Matrix3& m1, const Matrix3& m2) {
        return Matrix3(
            m1.a00 - m2.a00, m1.a01 - m2.a01, m1.a02 - m2.a02,
            m1.a10 - m2.a10, m1.a11 - m2.a11, m1.a12 - m2.a12,
            m1.a20 - m2.a20, m1.a21 - m2.a21, m1.a22 - m2.a22);
    }

    // Traslacion
    static Matrix3 translate(double tx, double ty) {
        return Matrix3(1, 0, tx,
                       0, 1, ty,
                       0, 0, 1);
    }

    // transpuesta de una matriz
    Matrix3 transpose() const {
        return Matrix3(a00, a10, a20,
                       a01, a11, a21,
                       a02, a12, a22);
    }
};

/** 
 * @class Matrix4
 * @brief La clase Matrix4 representa matrices de 4 × 4. Y se utilizará para la representación y construcción de transformaciones en tres dimensiones.
 */
class Matrix4 {
public:
    double a00, a01, a02, a03;
    double a10, a11, a12, a13;
    double a20, a21, a22, a23;
    double a30, a31, a32, a33;

    // Constructor con valores por defecto
    Matrix4(
        double a00 = 1, double a01 = 0, double a02 = 0, double a03 = 0,
        double a10 = 0, double a11 = 1, double a12 = 0, double a13 = 0,
        double a20 = 0, double a21 = 0, double a22 = 1, double a23 = 0,
        double a30 = 0, double a31 = 0, double a32 = 0, double a33 = 1
    ) : a00(a00), a01(a01), a02(a02), a03(a03),
        a10(a10), a11(a11), a12(a12), a13(a13),
        a20(a20), a21(a21), a22(a22), a23(a23),
        a30(a30), a31(a31), a32(a32), a33(a33) {}

    // Suma de dos matrices
    static Matrix4 add(const Matrix4& m1, const Matrix4& m2) {
        return Matrix4(
            m1.a00 + m2.a00, m1.a01 + m2.a01, m1.a02 + m2.a02, m1.a03 + m2.a03,
            m1.a10 + m2.a10, m1.a11 + m2.a11, m1.a12 + m2.a12, m1.a13 + m2.a13,
            m1.a20 + m2.a20, m1.a21 + m2.a21, m1.a22 + m2.a22, m1.a23 + m2.a23,
            m1.a30 + m2.a30, m1.a31 + m2.a31, m1.a32 + m2.a32, m1.a33 + m2.a33
        );
    }

    // Matriz adjunta
    Matrix4 adjoint() const {
        double b00 = a11 * (a22 * a33 - a32 * a23) - a12 * (a21 * a33 - a31 * a23) + a13 * (a21 * a32 - a31 * a22);
        double b01 = -(a01 * (a22 * a33 - a32 * a23) - a02 * (a21 * a33 - a31 * a23) + a03 * (a21 * a32 - a31 * a22));
        double b02 = a01 * (a12 * a33 - a32 * a13) - a02 * (a11 * a33 - a31 * a13) + a03 * (a11 * a32 - a31 * a12);
        double b03 = -(a01 * (a12 * a23 - a22 * a13) - a02 * (a11 * a23 - a21 * a13) + a03 * (a11 * a22 - a21 * a12));

        double b10 = -(a10 * (a22 * a33 - a32 * a23) - a12 * (a20 * a33 - a30 * a23) + a13 * (a20 * a32 - a30 * a22));
        double b11 = a00 * (a22 * a33 - a32 * a23) - a02 * (a20 * a33 - a30 * a23) + a03 * (a20 * a32 - a30 * a22);
        double b12 = -(a00 * (a12 * a33 - a32 * a13) - a02 * (a10 * a33 - a30 * a13) + a03 * (a10 * a32 - a30 * a12));
        double b13 = a00 * (a12 * a23 - a22 * a13) - a02 * (a10 * a23 - a20 * a13) + a03 * (a10 * a22 - a20 * a12);

        double b20 = a10 * (a21 * a33 - a31 * a23) - a11 * (a20 * a33 - a30 * a23) + a13 * (a20 * a31 - a30 * a21);
        double b21 = -(a00 * (a21 * a33 - a31 * a23) - a01 * (a20 * a33 - a30 * a23) + a03 * (a20 * a31 - a30 * a21));
        double b22 = a00 * (a11 * a33 - a31 * a13) - a01 * (a10 * a33 - a30 * a13) + a03 * (a10 * a31 - a30 * a11);
        double b23 = -(a00 * (a11 * a23 - a21 * a13) - a01 * (a10 * a23 - a20 * a13) + a03 * (a10 * a21 - a20 * a11));

        double b30 = -(a10 * (a21 * a32 - a31 * a22) - a11 * (a20 * a32 - a30 * a22) + a12 * (a20 * a31 - a30 * a21));
        double b31 = a00 * (a21 * a32 - a31 * a22) - a01 * (a20 * a32 - a30 * a22) + a02 * (a20 * a31 - a30 * a21);
        double b32 = -(a00 * (a11 * a32 - a31 * a12) - a01 * (a10 * a32 - a30 * a12) + a02 * (a10 * a31 - a30 * a11));
        double b33 = a00 * (a11 * a22 - a21 * a12) - a01 * (a10 * a22 - a20 * a12) + a02 * (a10 * a21 - a20 * a11);

        return Matrix4(
            b00, b10, b20, b30,
            b01, b11, b21, b31,
            b02, b12, b22, b32,
            b03, b13, b23, b33
        );
    }

    // Clonacion
    Matrix4 clone() const {
        return Matrix4(a00, a01, a02, a03,
                       a10, a11, a12, a13,
                       a20, a21, a22, a23,
                       a30, a31, a32, a33);
    }

    // Determinante
    double determinant() const {
        return (
            (a00 * a11 * a22 * a33) + (a00 * a12 * a23 * a31) + (a00 * a13 * a21 * a32) +
            (a01 * a10 * a23 * a32) + (a01 * a12 * a20 * a33) + (a01 * a13 * a22 * a30) +
            (a02 * a10 * a21 * a33) + (a02 * a11 * a23 * a30) + (a02 * a13 * a20 * a31) +
            (a03 * a10 * a22 * a31) + (a03 * a11 * a20 * a32) + (a03 * a12 * a21 * a30) -
            (a00 * a11 * a23 * a32) - (a00 * a12 * a21 * a33) - (a00 * a13 * a22 * a31) -
            (a01 * a10 * a22 * a33) - (a01 * a12 * a23 * a30) - (a01 * a13 * a20 * a32) -
            (a02 * a10 * a23 * a31) - (a02 * a11 * a20 * a33) - (a02 * a13 * a21 * a30) -
            (a03 * a10 * a21 * a32) - (a03 * a11 * a22 * a30) - (a03 * a12 * a20 * a31)
        );
    }

    // Comparacion aproximada
    static bool equalsWithE(const Matrix4& m1, const Matrix4& m2, double epsilon) {
        return
            (abs(m1.a00 - m2.a00) < epsilon && abs(m1.a01 - m2.a01) < epsilon &&
             abs(m1.a02 - m2.a02) < epsilon && abs(m1.a03 - m2.a03) < epsilon &&
             abs(m1.a10 - m2.a10) < epsilon && abs(m1.a11 - m2.a11) < epsilon &&
             abs(m1.a12 - m2.a12) < epsilon && abs(m1.a13 - m2.a13) < epsilon &&
             abs(m1.a20 - m2.a20) < epsilon && abs(m1.a21 - m2.a21) < epsilon &&
             abs(m1.a22 - m2.a22) < epsilon && abs(m1.a23 - m2.a23) < epsilon &&
             abs(m1.a30 - m2.a30) < epsilon && abs(m1.a31 - m2.a31) < epsilon &&
             abs(m1.a32 - m2.a32) < epsilon && abs(m1.a33 - m2.a33) < epsilon);
    }

    // Multiplicacion por escalar
    Matrix4 multiplyByScalar(double scalar) const {
        return Matrix4(
            a00 * scalar, a01 * scalar, a02 * scalar, a03 * scalar,
            a10 * scalar, a11 * scalar, a12 * scalar, a13 * scalar,
            a20 * scalar, a21 * scalar, a22 * scalar, a23 * scalar,
            a30 * scalar, a31 * scalar, a32 * scalar, a33 * scalar
        );
    }

    // Multiplicacion de matrices
    static Matrix4 multiply(const Matrix4& m1, const Matrix4& m2) {
        return Matrix4(
            m1.a00 * m2.a00 + m1.a01 * m2.a10 + m1.a02 * m2.a20 + m1.a03 * m2.a30,
            m1.a00 * m2.a01 + m1.a01 * m2.a11 + m1.a02 * m2.a21 + m1.a03 * m2.a31,
            m1.a00 * m2.a02 + m1.a01 * m2.a12 + m1.a02 * m2.a22 + m1.a03 * m2.a32,
            m1.a00 * m2.a03 + m1.a01 * m2.a13 + m1.a02 * m2.a23 + m1.a03 * m2.a33,
            m1.a10 * m2.a00 + m1.a11 * m2.a10 + m1.a12 * m2.a20 + m1.a13 * m2.a30,
            m1.a10 * m2.a01 + m1.a11 * m2.a11 + m1.a12 * m2.a21 + m1.a13 * m2.a31,
            m1.a10 * m2.a02 + m1.a11 * m2.a12 + m1.a12 * m2.a22 + m1.a13 * m2.a32,
            m1.a10 * m2.a03 + m1.a11 * m2.a13 + m1.a12 * m2.a23 + m1.a13 * m2.a33,
            m1.a20 * m2.a00 + m1.a21 * m2.a10 + m1.a22 * m2.a20 + m1.a23 * m2.a30,
            m1.a20 * m2.a01 + m1.a21 * m2.a11 + m1.a22 * m2.a21 + m1.a23 * m2.a31,
            m1.a20 * m2.a02 + m1.a21 * m2.a12 + m1.a22 * m2.a22 + m1.a23 * m2.a32,
            m1.a20 * m2.a03 + m1.a21 * m2.a13 + m1.a22 * m2.a23 + m1.a23 * m2.a33,
            m1.a30 * m2.a00 + m1.a31 * m2.a10 + m1.a32 * m2.a20 + m1.a33 * m2.a30,
            m1.a30 * m2.a01 + m1.a31 * m2.a11 + m1.a32 * m2.a21 + m1.a33 * m2.a31,
            m1.a30 * m2.a02 + m1.a31 * m2.a12 + m1.a32 * m2.a22 + m1.a33 * m2.a32,
            m1.a30 * m2.a03 + m1.a31 * m2.a13 + m1.a32 * m2.a23 + m1.a33 * m2.a33
        );
    }

    // Inversion de la matriz
    Matrix4 invert() const {
        double det = determinant();
        if (abs(det) < 1e-10) {
            cout<<"Matrix is singular and cannot be inverted";
        }

        Matrix4 adj = adjoint();
        return adj.multiplyByScalar(1.0 / det);
    }
    
    //matriz identidad
    Matrix4& identity() {
        a00 = 1; a01 = 0; a02 = 0; a03 = 0;
        a10 = 0; a11 = 1; a12 = 0; a13 = 0;
        a20 = 0; a21 = 0; a22 = 1; a23 = 0;
        a30 = 0; a31 = 0; a32 = 0; a33 = 1;
        return *this;
    }

    // Método estático para multiplicar cada componente de una matriz por un escalar
    static Matrix4 multiplyScalar(const Matrix4& m1, double c) {
        return Matrix4(
            m1.a00 * c, m1.a01 * c, m1.a02 * c, m1.a03 * c,
            m1.a10 * c, m1.a11 * c, m1.a12 * c, m1.a13 * c,
            m1.a20 * c, m1.a21 * c, m1.a22 * c, m1.a23 * c,
            m1.a30 * c, m1.a31 * c, m1.a32 * c, m1.a33 * c
        );
    }

    // Método para multiplicar un vector por la matriz
    Vector4 multiplyVector(const Vector4& v) const {
        return Vector4(
            (v.x * this->a00) + (v.y * this->a01) + (v.z * this->a02) + (v.w * this->a03),
            (v.x * this->a10) + (v.y * this->a11) + (v.z * this->a12) + (v.w * this->a13),
            (v.x * this->a20) + (v.y * this->a21) + (v.z * this->a22) + (v.w * this->a23),
            (v.x * this->a30) + (v.y * this->a31) + (v.z * this->a32) + (v.w * this->a33)
        );
    }

     Matrix4& set(
        double a00 = 0, double a01 = 0, double a02 = 0, double a03 = 0,
        double a10 = 0, double a11 = 0, double a12 = 0, double a13 = 0,
        double a20 = 0, double a21 = 0, double a22 = 0, double a23 = 0,
        double a30 = 0, double a31 = 0, double a32 = 0, double a33 = 0
    ) {
        this->a00 = a00; this->a01 = a01; this->a02 = a02; this->a03 = a03;
        this->a10 = a10; this->a11 = a11; this->a12 = a12; this->a13 = a13;
        this->a20 = a20; this->a21 = a21; this->a22 = a22; this->a23 = a23;
        this->a30 = a30; this->a31 = a31; this->a32 = a32; this->a33 = a33;
        
        return *this;
    }

    static Matrix4 subtract(const Matrix4& m1, const Matrix4& m2) {
        return Matrix4(
            m1.a00 - m2.a00, m1.a01 - m2.a01, m1.a02 - m2.a02, m1.a03 - m2.a03,
            m1.a10 - m2.a10, m1.a11 - m2.a11, m1.a12 - m2.a12, m1.a13 - m2.a13,
            m1.a20 - m2.a20, m1.a21 - m2.a21, m1.a22 - m2.a22, m1.a23 - m2.a23,
            m1.a30 - m2.a30, m1.a31 - m2.a31, m1.a32 - m2.a32, m1.a33 - m2.a33
        );
    }

    Matrix4 transpose() const {
        // Crear una copia de la matriz actual
        Matrix4 mAux = *this;
        
        // Intercambiar los valores para obtener la matriz transpuesta
        return Matrix4(
            this->a00, this->a10, this->a20, this->a30,
            this->a01, this->a11, this->a21, this->a31,
            this->a02, this->a12, this->a22, this->a32,
            this->a03, this->a13, this->a23, this->a33
        );
    }

    //matrices de tranformaciones de camara

    //funcion frustrum
    static Matrix4 frustum(double left, double right, double bottom, double top, double near, double far) {
        return Matrix4(
            (2 * near) / (right - left), 0, (right + left) / (right - left), 0,
            0, (2 * near) / (top - bottom), (top + bottom) / (top - bottom), 0,
            0, 0, -(far + near) / (far - near), (-2 * near * far) / (far - near),
            0, 0, -1, 0
        );
    }
     
    //static Matrix4 lookAt(const Vector3& eye, const Vector3& center, const Vector3& up) {
    //}

    // Método estático orthographic
    static Matrix4 orthographic(double left, double right, double bottom, double top, double near, double far) {
        return Matrix4(
            2 / (right - left), 0, 0, - (right + left) / (right - left),
            0, 2 / (top - bottom), 0, - (top + bottom) / (top - bottom),
            0, 0, 2 / (near - far), - (far + near) / (near - far),
            0, 0, 0, 1
        );
    }

    // Método estático perspective
    static Matrix4 perspective(double fovy, double aspect, double near, double far) {
        double fovyRad = fovy * (M_PI / 180.0); // Convertir grados a radianes
        double tanHalfFovy = std::tan(fovyRad / 2.0);

        return Matrix4(
            1 / (tanHalfFovy * aspect), 0, 0, 0,
            0, 1 / tanHalfFovy, 0, 0,
            0, 0, - (far + near) / (far - near), - (2 * far * near) / (far - near),
            0, 0, -1, 0
        );
    }

    // Método estático rotateX
    static Matrix4 rotateX(double theta) {
        double cosTheta = std::cos(theta);
        double sinTheta = std::sin(theta);

        return Matrix4(
            1, 0, 0, 0,
            0, cosTheta, -sinTheta, 0,
            0, sinTheta, cosTheta, 0,
            0, 0, 0, 1
        );
    }

    // Método estático rotateY
    static Matrix4 rotateY(double theta) {
        double cosTheta = std::cos(theta);
        double sinTheta = std::sin(theta);

        return Matrix4(
            cosTheta, 0, sinTheta, 0,
            0, 1, 0, 0,
            -sinTheta, 0, cosTheta, 0,
            0, 0, 0, 1
        );
    }



    // Método estático scale
    static Matrix4 scale(double x, double y, double z) {
        return Matrix4(
            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, z, 0,
            0, 0, 0, 1
        );
    }

    // Método estático translate
    static Matrix4 translate(double x, double y, double z) {
        return Matrix4(
            1, 0, 0, x,
            0, 1, 0, y,
            0, 0, 1, z,
            0, 0, 0, 1
        );
    }



};





int main() {
    // Pruebas para Vector3
    cout << "Pruebas para Vector3:" << endl;

    // Crear vectores
    Vector3 v1(1.0, 2.0, 3.0);
    Vector3 v2(4.0, 5.0, 6.0);

    // Producto punto
    double dotProduct = Vector3::dot(v1, v2);
    cout << "Producto punto de v1 y v2: " << dotProduct << endl;

    // Distancia entre vectores
    double dist = Vector3::distance(v1, v2);
    cout << "Distancia entre v1 y v2: " << dist << endl;

    // Distancia al cuadrado
    double squaredDist = Vector3::squaredDistance(v1, v2);
    cout << "Distancia al cuadrado entre v1 y v2: " << squaredDist << endl;


    // Comparar vectores
    bool areEqual = Vector3::equals(v1, v2);
    cout << "v1 y v2 son iguales: " << (areEqual ? "Sí" : "No") << endl;

    bool areExactEqual = Vector3::exactEquals(v1, v2);
    cout << "v1 y v2 son exactamente iguales: " << (areExactEqual ? "Sí" : "No") << endl;


    // Pruebas para Matrix3
    cout << "\nPruebas para Matrix3:" << endl;

    // Crear matrices
    Matrix3 m1;
    Matrix3 m2(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0);

    // Sumar matrices
    Matrix3 m3 = Matrix3::add(m1, m2);
    cout << "Suma de m1 y m2:" << endl;
    cout << m3.a00 << " " << m3.a01 << " " << m3.a02 << endl;
    cout << m3.a10 << " " << m3.a11 << " " << m3.a12 << endl;
    cout << m3.a20 << " " << m3.a21 << " " << m3.a22 << endl;

    // Restar matrices
    Matrix3 m4 = Matrix3::subtract(m2, m1);
    cout << "Resta de m2 y m1:" << endl;
    cout << m4.a00 << " " << m4.a01 << " " << m4.a02 << endl;
    cout << m4.a10 << " " << m4.a11 << " " << m4.a12 << endl;
    cout << m4.a20 << " " << m4.a21 << " " << m4.a22 << endl;

    // Multiplicación de matrices
    Matrix3 m5 = Matrix3::multiply(m1, m2);
    cout << "Multiplicacion de m1 y m2:" << endl;
    cout << m5.a00 << " " << m5.a01 << " " << m5.a02 << endl;
    cout << m5.a10 << " " << m5.a11 << " " << m5.a12 << endl;
    cout << m5.a20 << " " << m5.a21 << " " << m5.a22 << endl;

    // Multiplicación por escalar
    Matrix3 m6 = Matrix3::multiplyScalar(m2, 2.0);
    cout << "Multiplicacion de m2 por escalar 2.0:" << endl;
    cout << m6.a00 << " " << m6.a01 << " " << m6.a02 << endl;
    cout << m6.a10 << " " << m6.a11 << " " << m6.a12 << endl;
    cout << m6.a20 << " " << m6.a21 << " " << m6.a22 << endl;

    // Inversión de matriz
    Matrix3 m7 = m2.invert();
    cout << "Inversa de m2:" << endl;
    cout << m7.a00 << " " << m7.a01 << " " << m7.a02 << endl;
    cout << m7.a10 << " " << m7.a11 << " " << m7.a12 << endl;
    cout << m7.a20 << " " << m7.a21 << " " << m7.a22 << endl;

    // Determinante
    double det = m2.determinant();
    cout << "Determinante de m2: " << det << endl;

    // Transpuesta de matriz
    Matrix3 m8 = m2.transpose();
    cout << "Transpuesta de m2:" << endl;
    cout << m8.a00 << " " << m8.a01 << " " << m8.a02 << endl;
    cout << m8.a10 << " " << m8.a11 << " " << m8.a12 << endl;
    cout << m8.a20 << " " << m8.a21 << " " << m8.a22 << endl;

    // Identidad
    Matrix3 m9;
    m9.identity();
    cout << "Matriz identidad:" << endl;
    cout << m9.a00 << " " << m9.a01 << " " << m9.a02 << endl;
    cout << m9.a10 << " " << m9.a11 << " " << m9.a12 << endl;
    cout << m9.a20 << " " << m9.a21 << " " << m9.a22 << endl;

    // Rotación
    Matrix3 m10 = Matrix3::rotate(3.14159265358979 / 4); // 45 grados
    cout << "Rotacion de 45 grados:" << endl;
    cout << m10.a00 << " " << m10.a01 << " " << m10.a02 << endl;
    cout << m10.a10 << " " << m10.a11 << " " << m10.a12 << endl;
    cout << m10.a20 << " " << m10.a21 << " " << m10.a22 << endl;

    // Escalamiento
    Matrix3 m11 = Matrix3::scale(2.0, 3.0);
    cout << "Escalamiento (2.0, 3.0):" << endl;
    cout << m11.a00 << " " << m11.a01 << " " << m11.a02 << endl;
    cout << m11.a10 << " " << m11.a11 << " " << m11.a12 << endl;
    cout << m11.a20 << " " << m11.a21 << " " << m11.a22 << endl;

    // Traslación
    Matrix3 m12 = Matrix3::translate(5.0, 10.0);
    cout << "Traslacion (5.0, 10.0):" << endl;
    cout << m12.a00 << " " << m12.a01 << " " << m12.a02 << endl;
    cout << m12.a10 << " " << m12.a11 << " " << m12.a12 << endl;
    cout << m12.a20 << " " << m12.a21 << " " << m12.a22 << endl;

    //ejemplos vector4
    Vector4 vectorA(1, 2, 3, 4);
    Vector4 vectorB(5, 6, 7, 8);

    Vector4 sumVector = Vector4::add(vectorA, vectorB);
    Vector4 clonedVector = vectorA.clone();
    double distance = Vector4::distance(vectorA, vectorB);
    double dotProduct1 = Vector4::dot(vectorA, vectorB);
    bool isApproximatelyEqual = Vector4::equals(vectorA, vectorB);
    bool isExactlyEqual = Vector4::exactEquals(vectorA, vectorB);
    Vector4 normalizedVector = vectorA.normalize();
    vectorA.set(10, 20, 30, 40);
    Vector4 differenceVector = Vector4::subtract(vectorA, vectorB);
    double squaredDistance = Vector4::squaredDistance(vectorA, vectorB);
    vectorA.zero();

    // Imprimir resultados
    cout << "Suma de Vector4: (" << sumVector.x << ", " << sumVector.y << ", " << sumVector.z << ", " << sumVector.w << ")\n";
    cout << "Clon Vector4: (" << clonedVector.x << ", " << clonedVector.y << ", " << clonedVector.z << ", " << clonedVector.w << ")\n";
    cout << "Distancia Vector4: " << distance << "\n";
    cout << "Prodcuto punto Vector4: " << dotProduct << "\n";
    cout << "Approximately Equal: " << (isApproximatelyEqual ? "true" : "false") << "\n";
    cout << "Exactly Equal: " << (isExactlyEqual ? "true" : "false") << "\n";
    cout << "Normalized Vector4: (" << normalizedVector.x << ", " << normalizedVector.y << ", " << normalizedVector.z << ", " << normalizedVector.w << ")\n";
    cout << "Difference Vector4: (" << differenceVector.x << ", " << differenceVector.y << ", " << differenceVector.z << ", " << differenceVector.w << ")\n";
    cout << "Squared Distance: " << squaredDistance << "\n";
    cout << "Vector a cero: (" << vectorA.x << ", " << vectorA.y << ", " << vectorA.z << ", " << vectorA.w << ")\n";

    //pruebas Matrix4
        // Crear matrices
    Matrix4 mat1(1, 2, 3, 4,
                 5, 6, 7, 8,
                 9, 10, 11, 12,
                 13, 14, 15, 16);

    Matrix4 mat2(16, 15, 14, 13,
                 12, 11, 10, 9,
                 8, 7, 6, 5,
                 4, 3, 2, 1);

    // Probar métodos
    Matrix4 identityMat = mat1.identity();
    cout << "Identidad Matrix4:" << endl;
    cout << " " << identityMat.a00 << " " << identityMat.a01 << " " << identityMat.a02 << " " << identityMat.a03 << std::endl;
    cout << " " << identityMat.a10 << " " << identityMat.a11 << " " << identityMat.a12 << " " << identityMat.a13 << std::endl;
    cout << " " << identityMat.a20 << " " << identityMat.a21 << " " << identityMat.a22 << " " << identityMat.a23 << std::endl;
    cout << " " << identityMat.a30 << " " << identityMat.a31 << " " << identityMat.a32 << " " << identityMat.a33 << std::endl;

    Matrix4 result = mat1.multiplyScalar(mat1,2.0);
    cout << "Matrix 1 multiplicado por 2.0:" << endl;
    cout << " " << result.a00 << " " << result.a01 << " " << result.a02 << " " << result.a03 << std::endl;
    cout << " " << result.a10 << " " << result.a11 << " " << result.a12 << " " << result.a13 << std::endl;
    cout << " " << result.a20 << " " << result.a21 << " " << result.a22 << " " << result.a23 << std::endl;
    cout << " " << result.a30 << " " << result.a31 << " " << result.a32 << " " << result.a33 << std::endl;

    result = mat1.subtract(mat2, mat1);
    cout << "Matrix 1 menos Matrix 2:" << endl;
    cout << " " << result.a00 << " " << result.a01 << " " << result.a02 << " " << result.a03 << std::endl;
    cout << " " << result.a10 << " " << result.a11 << " " << result.a12 << " " << result.a13 << std::endl;
    cout << " " << result.a20 << " " << result.a21 << " " << result.a22 << " " << result.a23 << std::endl;
    cout << " " << result.a30 << " " << result.a31 << " " << result.a32 << " " << result.a33 << std::endl;
    
    result = mat1.multiply(mat1, mat2);
    cout << "Matrix 1 multiplied by Matrix 2:" << std::endl;
    cout << " " << result.a00 << " " << result.a01 << " " << result.a02 << " " << result.a03 << std::endl;
    cout << " " << result.a10 << " " << result.a11 << " " << result.a12 << " " << result.a13 << std::endl;
    cout << " " << result.a20 << " " << result.a21 << " " << result.a22 << " " << result.a23 << std::endl;
    cout << " " << result.a30 << " " << result.a31 << " " << result.a32 << " " << result.a33 << std::endl;

    result = mat1.transpose();
    cout << "Transpose de Matrix 1:" << std::endl;
    cout << " " << result.a00 << " " << result.a01 << " " << result.a02 << " " << result.a03 << std::endl;
    cout << " " << result.a10 << " " << result.a11 << " " << result.a12 << " " << result.a13 << std::endl;
    cout << " " << result.a20 << " " << result.a21 << " " << result.a22 << " " << result.a23 << std::endl;
    cout << " " << result.a30 << " " << result.a31 << " " << result.a32 << " " << result.a33 << std::endl;

    result = mat1.invert();
    cout << "Inversa de Matrix 1:" << std::endl;
    cout << " " << result.a00 << " " << result.a01 << " " << result.a02 << " " << result.a03 << std::endl;
    cout << " " << result.a10 << " " << result.a11 << " " << result.a12 << " " << result.a13 << std::endl;
    cout << " " << result.a20 << " " << result.a21 << " " << result.a22 << " " << result.a23 << std::endl;
    cout << " " << result.a30 << " " << result.a31 << " " << result.a32 << " " << result.a33 << std::endl;

    return 0;
}




