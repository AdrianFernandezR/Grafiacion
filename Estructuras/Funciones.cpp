#include <iostream>

using namespace std; 

//Prototipo de funcion
int mayor(int x, int y);

int main(){
    int n1, n2, max;
    
    cout<<"Dame dos numeros enteros: ";
    cin>>n1>>n2;

    max = mayor(n1, n2);

    cout<<"El mayor es: "<< max;


    return 0;
}

int mayor(int x, int y){
    int max;

    if(x>y){
        max = x;
    }
    else{
        max = y;
    }

    return max;

}