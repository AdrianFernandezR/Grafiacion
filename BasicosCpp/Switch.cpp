#include <iostream>

using namespace std;

int main(){
    int opcion;
    
    cout<<"Elige una opcion"<<endl;
    cout<<"1.- Saludo \n2.- Estorndo \n3.- Baile \n4.- Adios" <<endl;
    
    cin>>opcion;

    switch (opcion){

        case 1: cout<<"Hola Crayola"; break;
        
        case 2: cout<<"Achuuuuuuuuuu!"; break;
        
        case 3: cout<<"*Baila epicamente*"; break;

        case 4: cout<<"Ayos"; break;

        default: cout<<"Opcion no disponible";break;

    }

    return 0;

}