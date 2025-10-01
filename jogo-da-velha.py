# Função para criar o tabuleiro
def criar_tabuleiro():
    return [[" " for _ in range(3)] for _ in range(3)]

# Função para exibir o tabuleiro
def mostrar_tabuleiro(tabuleiro):
    print("  0 1 2")
    for i, linha in enumerate(tabuleiro):
        print(f"{i} {'|'.join(linha)}")
        if i < 2:
            print("  -----")

# Função para verificar se alguém venceu
def verificar_vitoria(tabuleiro, jogador):
    # Verifica linhas e colunas
    for i in range(3):
        if all(tabuleiro[i][j] == jogador for j in range(3)) or \
           all(tabuleiro[j][i] == jogador for j in range(3)):
            return True
    # Verifica diagonais
    if all(tabuleiro[i][i] == jogador for i in range(3)) or \
       all(tabuleiro[i][2 - i] == jogador for i in range(3)):
        return True
    return False

# Função para verificar empate
def verificar_empate(tabuleiro):
    return all(tabuleiro[i][j] != " " for i in range(3) for j in range(3))

# Função principal do jogo
def jogar_jogo():
    tabuleiro = criar_tabuleiro()
    jogador_atual = "X"
    
    while True:
        mostrar_tabuleiro(tabuleiro)
        print(f"Vez do jogador {jogador_atual}")
        
        try:
            linha = int(input("Digite a linha (0, 1 ou 2): "))
            coluna = int(input("Digite a coluna (0, 1 ou 2): "))
        except ValueError:
            print("Entrada inválida! Use apenas números de 0 a 2.")
            continue
        
        # Verifica se a posição é válida
        if linha not in range(3) or coluna not in range(3):
            print("Posição fora do tabuleiro! Tente novamente.")
            continue

        if tabuleiro[linha][coluna] != " ":
            print("Posição já ocupada! Escolha outra.")
            continue

        tabuleiro[linha][coluna] = jogador_atual

        # Verifica vitória
        if verificar_vitoria(tabuleiro, jogador_atual):
            mostrar_tabuleiro(tabuleiro)
            print(f"Parabéns! Jogador {jogador_atual} venceu!")
            break

        # Verifica empate
        if verificar_empate(tabuleiro):
            mostrar_tabuleiro(tabuleiro)
            print("Empate! O tabuleiro está cheio.")
            break

        # Alterna jogador
        jogador_atual = "O" if jogador_atual == "X" else "X"

# Inicia o jogo
jogar_jogo()
