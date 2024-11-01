#include <iostream>

using namespace std;

struct Tazos
{
    string nombreDeColeccion;
    int numeroEnColeccion;
    string tipo;

}
tazo1 = {"Simpsons", 258, "Metallic"}, 
tazo2 = {"Pokemon", 152, "Normal"},
tazo4;

int main(){

    struct Tazos tazo3= {"Bob Esponja", 3, "Gigantic"};

    cout<<"Tazo 1 \nColeccion: "<<tazo1.nombreDeColeccion<<"\nNumero en coleccion: "<<tazo1.numeroEnColeccion<<"\nTipo de Tazo: "<<tazo1.tipo<<endl;

    cout<<"Tazo 3 \nColeccion: "<<tazo3.nombreDeColeccion<<"\nNumero en coleccion: "<<tazo3.numeroEnColeccion<<"\nTipo de Tazo: "<<tazo3.tipo<<endl;

    cout<<"Tazo 4 \nColeccion: "<<tazo4.nombreDeColeccion<<"\nNumero en coleccion: "<<tazo4.numeroEnColeccion<<"\nTipo de Tazo: "<<tazo4.tipo<<endl;

    cout<<"Ingrese la coleccion: "<<endl;
    cin>>tazo4.nombreDeColeccion;
    

    cout<<"Tazo 4 \nColeccion: "<<tazo4.nombreDeColeccion<<"\nNumero en coleccion: "<<tazo4.numeroEnColeccion<<"\nTipo de Tazo: "<<tazo4.tipo<<endl;
    
    return 0;
}
