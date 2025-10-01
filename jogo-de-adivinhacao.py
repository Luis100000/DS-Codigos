import random #Importa o módulo para gerar números aleatórios
#Gera un número secreto entre 1e 20
numero_secreto random.randint(1, 20)
palpite None
tentativas = 0
#Inicializa o palpite como vazio
#Contador de tentativas
#Loop que continua enquanto o jogador não acertar e tiver menos de 5 tentat
while palpite != numero_secreto and tentativas < 5:
#Solicita un palpite ao jogador
palpite int(input("Adivinhe o número (1 а 20): "))
tentativas += 1 # Soma uma tentativa
#Verifica se o palpite está correto
if palpite numero_secreto:
print("D Acertou!") # Mensagem de sucesso
else:
print(" Tente novamente.") # Mensagem de erro
Se o jogador não acertou após 5 tentativas, exibe o número correto
# if palpite != numero_secreto:
print(f" Fim de jogo! O número era (numero_secreto}.")
