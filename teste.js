function generatePassword(length, type) {
    if (length < 3 || length > 20) {
        throw new Error("O tamanho da senha deve estar entre 3 e 20 caracteres.");
    }

    let charset = "";
    if (type === "numerico") {
        charset = "0123456789";
    } else if (type === "alfanumerico") {
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    } else if (type === "especial") {
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";
    } else {
        throw new Error("Tipo inválido. Escolha entre: numerico, alfanumerico ou especial.");
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    return password;
}

// PARA TESTE
console.log(generatePassword(4, "numerico")); 
console.log(generatePassword(6, "alfanumerico")); 
console.log(generatePassword(8, "especial")); 
