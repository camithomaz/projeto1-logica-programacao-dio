let nome = "Camila"
let nivelExperienciaXP = 7000
let nivelXP = ""

if (nivelExperienciaXP <= 1000) {
    nivelXP = "Ferro"
} else if ((nivelExperienciaXP >= 1001) && (nivelExperienciaXP <= 2000)) {
    nivelXP = "Bronze"
} else if ((nivelExperienciaXP >= 2001) && (nivelExperienciaXP <= 5000)) {
    nivelXP = "Prata"
} else if ((nivelExperienciaXP >= 5001) && (nivelExperienciaXP <= 7000)) {
    nivelXP = "Ouro"
} else if ((nivelExperienciaXP >= 7001) && (nivelExperienciaXP <= 8000)) {
    nivelXP = "Platina"
} else if ((nivelExperienciaXP >= 8001) && (nivelExperienciaXP <= 9000)) {
    nivelXP = "Ascendente"
} else if ((nivelExperienciaXP >= 9001) && (nivelExperienciaXP <= 10000)) {
    nivelXP = "Imortal"
} else (nivelXP = "Radiante")

console.log("O Herói de nome " + nome + " está no nível de " + nivelXP)