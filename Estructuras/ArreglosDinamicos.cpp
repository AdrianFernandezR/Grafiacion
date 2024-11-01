#include <iostream>
#include <stdlib.h>

using namespace std;

void arreglosDinamicos();
void arrToString();
int arregloTam, *puntero;

int main(){

    arreglosDinamicos();
    arrToString();

    delete [] puntero; // se libera el espacio reservado para el arreglo

    return 0;

}

void arreglosDinamicos(){

    cout<<"Ingresa tamanio del arreglo: ";
    cin>> arregloTam;

    puntero = new int [arregloTam]; //se reserva el tamanio del arreglo en la memoria

    for (int i = 0; i < arregloTam; i++)
    {
        cout<<"Ingrese valor para el arreglo en el lugar " <<i<<": ";
        cin>>puntero[i];
    }
    

}

void arrToString(){
    cout<<"\n";

    for (int i = 0; i < arregloTam; i++){
        cout<<puntero[i]<<endl;
    }
    
}