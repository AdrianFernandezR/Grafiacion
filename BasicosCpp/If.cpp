#include <iostream>

using namespace std;

int main(){
    string secreto, entrada;

    secreto = "yogurt";
    cout<<"Ingrea la contrasenia: ";
    cin>>entrada;

    if(secreto == entrada){
        cout<<"Correcto";
    }
    else{
        cout<<"Incorrecto";
    }

    return 0;
}