#include <iostream>
#include <bits/stdc++.h>

using namespace std;

//Primero definiremos una estructura simple para las matrices (solo haré las operaciones para las matrices cuadradas que es lo que ocupamos en clase)


struct Matrixz {
    double** num;
    int size;
};

int getSize(Matrixz pnt){

    return pnt.size;
}

Matrixz* crear_Matrixz(int size){
    Matrixz mat = {new double*[size] , size};
    Matrixz* pnt = &mat;
    for(int i =0;i<size;i++){
        mat.num[i] = new double[size];
    }
    return pnt;
}

void llenar_Matrixz(Matrixz *pnt){ 

    int tam= pnt->size;
    int **punteroMatriz = new int*[tam];

    for(int i=0; i < pnt->size; i++){
        for(int j=0; j < pnt->size; j++){
            cout<<"\n"<<"dame el número para la fila " + to_string(i) +" columna " + to_string(j)<<"\n";
            double aux;
            cin>>aux;
            pnt->num[i][j] = aux; 
        }   
    }
}

string Matrixz_to_string(Matrixz* pnt ){
    string result="";
    for(int i=0;i<pnt->size;i++){
        for(int j=0;j<pnt->size;i++){
            double aux = (double) *(*(pnt->num+i)+j);
            result+=" | ";
            result += to_string(aux);
        }   
    }
    return result;
}

int main(){
    cout<<"\n"<<"ingresa una dimensión par las matrices cuadradas"<<"\n";
    int n;
    cin>>n;
    Matrixz* mat1 = crear_Matrixz(n);
    Matrixz* mat2 = crear_Matrixz(n);
    llenar_Matrixz(mat1);
    cout<<"\n"<<"matriz uno"<<"\n";
    cout<<Matrixz_to_string(mat1)<<"\n";
    cout<<"\n"<<"matriz dos"<<"\n";
    cout<<Matrixz_to_string(mat2)<<"\n";
}
