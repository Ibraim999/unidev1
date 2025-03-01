PROJETO UNIDEV - BDDS
Cenário: Gerar senha numérica com comprimento válido
Dado que o tipo de senha é "numérico"
E o comprimento da senha é 4
Quando eu gero a senha
Então a senha deve ter 4 caracteres
E a senha deve conter apenas números

Cenário: Gerar senha alfanumérica com comprimento válido
Dado que o tipo de senha é "alfanumérico"
E o comprimento da senha é 6
Quando eu gero a senha
Então a senha deve ter 6 caracteres
E a senha deve conter apenas letras e números

Cenário: Gerar senha com caracteres especiais com comprimento válido
Dado que o tipo de senha é "especial"
E o comprimento da senha é 8
Quando eu gero a senha
Então a senha deve ter 8 caracteres
E a senha deve conter letras, números e caracteres especiais

Cenário: Gerar senha com comprimento inválido (menor que 3)
Dado que o tipo de senha é "numérico"
E o comprimento da senha é 2
Quando eu tento gerar a senha
Então uma exceção deve ser lançada com a mensagem "O tamanho da senha deve estar entre 3 e 20 caracteres."


Cenário: Gerar senha com comprimento inválido (maior que 20)
Dado que o tipo de senha é "alfanumérico"
E o comprimento da senha é 21
Quando eu tento gerar a senha
Então uma exceção deve ser lançada com a mensagem "O tamanho da senha deve estar entre 3 e 20 caracteres."

Cenário: Gerar senha com tipo inválido
Dado que o tipo de senha é "invalido"
E o comprimento da senha é 8
Quando eu tento gerar a senha
Então uma exceção deve ser lançada com a mensagem "Tipo inválido. Escolha entre: numérico, alfanumérico ou especial."
