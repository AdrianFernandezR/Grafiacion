#include <iostream>

using namespace std;

int main(){
    int filas, columnas;
    
    cout<<"Ingrese el nummero de filas: ";
    cin>>filas;

    cout<<"Ingrese el nummero de columnas: ";
    cin>>columnas;

    int numeros [filas][columnas];

    for(int i=0; i < filas; i++){
        for (int j = 0; j < columnas; j++)
        {
            cout<<"Digita un numero para  ["<<i<<"] ["<<j<<"]: ";
            cin>>numeros[i][j];
        }
        
    }

    for (int i = 0; i < filas; i++)
    {
        for (int j = 0; j < columnas; j++)
        {
            cout<<numeros[i][j];
        }

        cout<<"\n";
        
    }
    

    return 0;
}