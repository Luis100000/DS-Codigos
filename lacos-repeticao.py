
# Contagem dos dias até o fim de semana

# Lista com os dias da semana
dias_da_semana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]

# Loop para contar os dias até o fim de semana
for dia in dias_da_semana:
    print(f"Hoje é {dia}. Faltam {5 - dias_da_semana.index(dia)} dias para o fim de semana.")



# Lista de preços dos itens da compra
lista_compras = [10.50, 5.75, 3.90, 7.20, 12.30]

# Variável para armazenar o total
total = 0

# Loop para percorrer a lista e somar os preços
for preco in lista_compras:
    total += preco  # Soma o preço do item ao total

# Exibe o total da compra
print(f"O total da lista de compras é: R${total:.2f}")




# Lista de mensagens (True significa que a mensagem está nova, False significa que já foi lida)
mensagens = [True, True, False, True, False]

# Variável para controlar se há mensagens não lidas
mensagem_nao_lida = True

# Loop while para continuar lendo até não haver mais mensagens não lidas
while mensagem_nao_lida:
    # Verifica se ainda há mensagens não lidas
    if True in mensagens:
        # Encontrar o índice da primeira mensagem não lida
        indice_mensagem = mensagens.index(True)
        print(f"Lendo a mensagem {indice_mensagem + 1}...")

        # Marca a mensagem como lida
        mensagens[indice_mensagem] = False
    else:
        # Se não houver mais mensagens não lidas, sai do loop
        mensagem_nao_lida = False

# Mensagem indicando que todas as mensagens foram lidas
print("Todas as mensagens foram lidas.")



# Definir o valor da meta e quanto será guardado por semana
meta = 100
economia_semanal = 10

# Inicializar as variáveis
total_guardado = 0
semanas = 0

# Loop while para acumular o valor até atingir a meta
while total_guardado < meta:
    total_guardado += economia_semanal  # Acumula o valor guardado a cada semana
    semanas += 1  # Incrementa o número de semanas

# Exibir o resultado
print(f"Serão necessárias {semanas} semanas para atingir a meta de R${meta}.")


# Lista de presença
lista_presenca = ["Ana", "Carlos", "João", "Maria", "Pedro"]

# Nome do aluno a ser procurado
aluno_procurado = "João"

# Loop para procurar o aluno na lista
encontrado = False  # Variável para verificar se o aluno foi encontrado

for aluno in lista_presenca:
    if aluno == aluno_procurado:
        encontrado = True
        break  # Encerra o loop assim que o aluno é encontrado

# Verifica se o aluno foi encontrado
if encontrado:
    print(f"{aluno_procurado} está na lista de presença.")
else:
    print(f"{aluno_procurado} NÃO está na lista de presença.")


