#include <iostream>
#include <conio.h> //para usar el exe
#include <stdlib.h>

using namespace std;

int main(){
    int i;

    i=1;

    while(i<=10){
       
        cout<<i<<endl;
        i++;
    }


    // do{
    //     cout<<i<<endl;
    //     i++;
    
    // }while (i<=10);

    

    //getch(); //funcion de ejecutable de conio
    system("pause"); //funcion ejecutable para stdlib
    return 0;
}