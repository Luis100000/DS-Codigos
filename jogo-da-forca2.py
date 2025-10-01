# Lista de desenhos da forca (6 etapas)
forca_desenhos = [
    """
     _______
    |/      
    |      
    |     
    |      
    |     
    |
    =========
    """,
    """
     _______
    |/      |
    |      (_)
    |      
    |      
    |      
    |
    =========
    """,
    """
     _______
    |/      |
    |      (_)
    |       |
    |       |
    |      
    |
    =========
    """,
    """
     _______
    |/      |
    |      (_)
    |      \\|
    |       |
    |      
    |
    =========
    """,
    """
     _______
    |/      |
    |      (_)
    |      \\|/
    |       |
    |      
    |
    =========
    """,
    """
     _______
    |/      |
    |      (_)
    |      \\|/
    |       |
    |      / 
    |
    =========
    """,
    """
     _______
    |/      |
    |      (_)
    |      \\|/
    |       |
    |      / \\
    |
    =========
    """
]

# Palavra a ser adivinhada
palavra_secreta = "python"
letras_descobertas = ["_" for _ in palavra_secreta]

# Variáveis de controle
tentativas_max = len(forca_desenhos) - 1
erros = 0
letras_erradas = []

print("Bem-vindo ao Jogo da Forca!")

# Loop principal do jogo
while erros < tentativas_max and "_" in letras_descobertas:
    print(forca_desenhos[erros])
    print("Palavra:", " ".join(letras_descobertas))
    print("Letras erradas:", ", ".join(letras_erradas))
    
    tentativa = input("Digite uma letra: ").lower()
    
    if not tentativa.isalpha() or len(tentativa) != 1:
        print("Digite apenas uma letra válida.")
        continue
    
    if tentativa in letras_descobertas or tentativa in letras_erradas:
        print("Você já tentou essa letra.")
        continue

    if tentativa in palavra_secreta:
        for i in range(len(palavra_secreta)):
            if palavra_secreta[i] == tentativa:
                letras_descobertas[i] = tentativa
    else:
        erros += 1
        letras_erradas.append(tentativa)

# Fim de jogo
if "_" not in letras_descobertas:
    print("Parabéns! Você acertou a palavra:", palavra_secreta)
else:
    print(forca_desenhos[erros])
    print("Que pena! Você perdeu.")
    print("A palavra era:", palavra_secreta)
