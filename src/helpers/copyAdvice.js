export const copyAdvice = async(value)=> {
    try {
      await navigator.clipboard.writeText(value)
      alert("Texto Copiado")
    }
    catch {
      alert("No se pudo copiar al portapapeles :(")

    }
}