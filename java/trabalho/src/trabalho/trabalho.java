package trabalho;

import javax.swing.*;

public class trabalho {

	public static void main(String[] args) {
		
		int vetor[] = new int[10], num;
		String saida = "";
		
		for (int i = 0; i < vetor.length; i++) {
			num = Integer.parseInt(JOptionPane.showInputDialog("Digite o " + (i + 1) + "° número:"));
			vetor[i] = (int)Math.pow(num, 3);
			saida += num + "^3 = " + vetor[i] + "\n";
		}		
		
		JOptionPane.showMessageDialog(null, saida);

	}
}