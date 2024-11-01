#include <iostream>

using namespace std;

void matrizToStrig(int m[][3], int);
void matrizToSquare(int m[][3], int);

int main(){
    const int dimension= 3;

    int m[dimension][dimension]={{1,2,3},{1,2,3}, {1,2,3}};

    matrizToStrig(m, dimension);
    cout<<"============================================"<<endl;
    matrizToSquare(m, dimension);

    return 0;
}

void matrizToStrig(int m[3][3], int dimension){
    
    for (int i = 0; i < dimension; i++){
        for (int j = 0; j < dimension; j++)
        {
            cout<<m[i][j];
        }

        cout<<"\n";
    }
}

void matrizToSquare(int m[][3], int dimension){
    for(int i = 0; i < dimension ; i++){
        for (int j = 0; j < dimension; j++)
        {
            m[i][j] *= m[i][j];
        }
        
    }

    for (int i = 0; i < dimension; i++){
        for (int j = 0; j < dimension; j++)
        {
            cout<<m[i][j];
        }

        cout<<"\n";
    }

    
}