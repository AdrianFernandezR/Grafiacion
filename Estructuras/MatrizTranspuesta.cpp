#include <iostream>

using namespace std;

int main(){

    int num[3][3];
    
    for(int i=0; i < 3; i++){
        for (int j = 0; j < 3; j++)
        {
            cout<<"Digita un numero para  ["<<i<<"] ["<<j<<"]: ";
            cin>>num[i][j];
        }
        
    }

    cout<<"Matriz original: "<<endl;
    
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout<<num[i][j];
        }

        cout<<"\n";
        
    }

      cout<<"Matriz Transpuesta: "<<endl;

          for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout<<num[j][i];
        }

        cout<<"\n";
        
    }

    return 0; 
}