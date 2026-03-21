function Evento({numero}) {

    function meuEvento(){
        console.log(`Opa, Fui ativado ${numero}`)
    }
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}
export default Evento; 

// Aprendi a criar eventos no react!
// Aprendi que algumas propiedades são digitadas diferente no react comparando-as com os tradicionais html, css e javascript!
// Ao chamar um evento no return(html do react): evento={meuEvento} (no html normal é: evento="meuEvento()")!
// Na function : function Evento({numero}) (no js puro é function Evento(numero)) quando se quer declarar um valor!
