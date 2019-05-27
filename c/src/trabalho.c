#include<stdio.h>
#include<math.h>

int main() {
	int vetor[10], i, num[10];
	
	for(i = 0; i < 10; i++){
		printf("Digite o %d* numero:\n", (i + 1));
		scanf("%d", & num[i]);
		vetor[i] = pow(num[i], 3);
	}
	
	printf("\n\n");
	
	for(i = 0; i < 10; i++){
		printf("%d ^ 3 = %d\n", num[i], vetor[i]);
	}
}