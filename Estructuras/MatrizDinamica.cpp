#include <iostream>
#include <stdlib.h>

using namespace std;

void pedirDatos();
void matrizToString(int **, int);
int **punteroMatriz, dimension; //puntero para matrices


int main(){
    
    pedirDatos();
    matrizToString(punteroMatriz, dimension);
    
    //liberar la memoria
    for (int i = 0; i < dimension; i++){

        delete[] punteroMatriz[i];
    }

    delete[] punteroMatriz;
    

    return 0;
}

void pedirDatos(){

    cout<<"Digite la dimension de  la matriz: ";
    cin>>dimension;

    punteroMatriz = new int*[dimension]; //reserva memoria para filas

    for (int i = 0; i < dimension; i++){
        punteroMatriz [i] = new int[dimension]; //reserva memoria para columnas
    }

    cout<<"\nIngresa los elementos de la matriz: ";
    for (int i = 0; i < dimension; i++){
        for (int j = 0; j < dimension; j++)
        {
            cout<<"Ingrese el valor de ["<<i<<"] ["<<j<<"]: ";
            cin>>*(*(punteroMatriz+i)+j); //puntero matriz [i][j]
        }
        
    }
    
    
}

void matrizToString(int **, int){
    cout<<"\nMatriz: "<<endl;

    for (int i = 0; i < dimension; i++){
        for (int j = 0; j < dimension; j++)
        {
            cout<<*(*(punteroMatriz+i)+j)<<" "; //punteroMatriz[i][j]
        }
        cout<<"\n";
        
    }
    

}