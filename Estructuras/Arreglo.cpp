#include <iostream>

using namespace std;

int main(){
    int numeros[] = {1,2,3,4,5};
    int suma = 0;

    for(int i = 0; i < 5; i++){

        suma+= numeros[i];
    }

    cout<<"La suma es "<<suma<<endl;

    char letras[] = {'a', 'b', 'c', 'd'};
    
    cout<<"las letras en el arreglo son:";
    
    for(int i = 0; i < sizeof(letras) ; i++){

        cout<<" "<<letras[i];
    }



    return 0;
}