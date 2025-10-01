
import time

# Senha correta definida no sistema
senha_correta = "1234"

# Número máximo de tentativas
tentativas = 3

# Tempo limite em segundos
tempo_limite = 30

# Início da contagem do tempo
inicio = time.time()

# Flag para verificar se o login foi bem-sucedido
acesso_liberado = False

# Loop de tentativas com verificação de tempo
while tentativas > 0 and (time.time() - inicio) < tempo_limite:
    senha = input("Digite a senha: ")

    if senha == senha_correta:
        print("Acesso permitido!")
        acesso_liberado = True
        break
    else:
        tentativas -= 1
        print(f"Senha incorreta. Tentativas restantes: {tentativas}")

# Verificação após o loop
if not acesso_liberado:
    if (time.time() - inicio) >= tempo_limite:
        print("Tempo esgotado! Acesso negado.")
    else:
        print("Número de tentativas excedido! Acesso negado.")

