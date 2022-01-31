function verificar()    {
    const pais = document.getElementById("inpais").value
    const resp = document.getElementById("res")
    if ( pais != "Brasil")  {
        resp.innerHTML = `Você é estrangeiro, pois nasceu n@ ${pais}.`
    } else {
        resp.innerHTML = "Você é brasileiro."
    }
}