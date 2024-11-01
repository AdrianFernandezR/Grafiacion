#include <iostream>

using namespace std;

void intercambio (float *, float *);

int main(){
    float num1= 11.5, num2= 9.35;

    cout<<"El primer valor es: "<<num1<<endl;
    cout<<"El segundo valor es: "<<num2<<endl;

    intercambio(&num1, &num2);
    cout<<"=============================================="<<endl;

    cout<<"El primer valor es: "<<num1<<endl;
    cout<<"El segundo valor es: "<<num2<<endl;
}

void intercambio(float *pointNm1, float *pointNm2){
    float aux;

    aux = *pointNm1;
    *pointNm1 = *pointNm2;
    *pointNm2 = aux;
}