#include <iostream>

using namespace std; 

//Prototipo de funcion
template <class GENERICO>
void absoluto(GENERICO num);


int main(){

    int entero= -3;
    float flotante= 2.6;

    absoluto(entero);
    absoluto(flotante);
    return 0;
}


template <class GENERICO>
void absoluto(GENERICO num){

    if(num < 0){
        num = num * -1;
    }

    cout<<"Valor abosulto:"<<num<<endl;
}