#include<iostream>
#include <cmath>

using namespace std;

int main() {
    int vetor[10], num[10];

    for (int i = 0; i < 10; i++) {
        cout << "Digite o " << (i + 1) << " numero:" << endl;
        cin >> num[i];
        vetor[i] = pow(num[i], 3);
    }

    cout << "\n";

    for (int i = 0; i < 10; i++) {
        cout << num[i] << " ^ 3 = " << vetor[i] << endl;
    }

    return 0;
}