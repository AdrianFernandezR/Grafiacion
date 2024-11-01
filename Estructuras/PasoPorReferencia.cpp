#include <iostream>

using namespace std; 

void funcion(int&, int&);

int main(){
    int num1, num2;

    cout<<"Escriba dos numeros: ";
    cin>>num1>>num2;

    funcion(num1, num2);

    cout<<"Primer valor nuevo: "<<num1<<endl;
    cout<<"Segundo valor: "<<num2<<endl;

    return 0;
}


void funcion(int& x, int& y){

    cout<<"Primer valor: "<<x<<endl;
    cout<<"Segundo valor: "<<y<<endl;
    x+=1;
    y+=1;
}