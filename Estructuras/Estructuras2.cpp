#include <iostream>

using namespace std;

struct Heroes{
    string nombre;
    string poder;
    int edad; 
    bool activo;    

} capitanAmerica = {"Steve Rogers", "Super Soldado", 106, true }
  , ironMan = {"Tony Stark", "Tecnologia", 53, false };


struct Vengadores{
    Heroes miembros [6];
    string ubicacion;
    

};


int main() {

    struct Vengadores avengers= {{capitanAmerica, ironMan}, "new york"};
    
    cout<<avengers.miembros[0].nombre<< " tiene su base en " << avengers.ubicacion<<endl;
    cout<<avengers.miembros[1].nombre<< " tiene su base en " << avengers.ubicacion<<endl;
    return 0;
}