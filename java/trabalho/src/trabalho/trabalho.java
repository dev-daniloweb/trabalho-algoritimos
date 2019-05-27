package trabalho;

import javax.swing.*;

public class trabalho {

	public static void main(String[] args) {
		
		int vetor[] = new int[10], num, n = 0;
		String saida = "";
		boolean error = false;
		
		do {
			try {
				for (int i = n; i < vetor.length; i++) {
					num = Integer.parseInt(JOptionPane.showInputDialog("Digite o " + (i + 1) + "° número:"));
					vetor[i] = (int)Math.pow(num, 3);
					saida += num + "^3 = " + vetor[i] + "\n";
					n++;
				}
				error = false;
			} catch (Exception e) {
				error = true;
				switch (e.getMessage()) {
					case "null":
						System.exit(1);
						break;
					
					case "For input string: \"\"":
						JOptionPane.showMessageDialog(null, "Campo Obrigatório!");
						break;
						
					default:
						JOptionPane.showMessageDialog(null, "Número inválido!");
						break;
				}
			}
		} while (error);
		
		
		JOptionPane.showMessageDialog(null, saida);

	}

}
