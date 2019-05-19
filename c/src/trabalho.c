#include<stdio.h>
#include<math.h>

int main() {
	int vetor[3], i, num;
	
	for(i = 0; i < 10; i++){
		printf("Digite o %d* numero:\n", (i + 1));
		scanf("%d", & num);
		vetor[i] = pow(num, 3);
	}
	
	
}