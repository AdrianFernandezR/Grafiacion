#include <iostream>

using namespace std;

int main(){
    int nums []= {9,8,7,6,5};
    int *apuntador; //almacena direcciones de memoria
    int *apuntador2;

    apuntador = &nums[0]; //& es direccion de memoria
    apuntador2 = nums;

    for(int i = 0; i < 5; i++){

        cout<<"Elemento lugar ["<<i<<"]: "<<*apuntador++<<" Ocupa el lugar en la memoria: "<<apuntador2++ <<endl;;
    }

}