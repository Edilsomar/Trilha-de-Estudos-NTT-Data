import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    return(
        <>
            <li>
                {marca} - {ano_lancamento}
            </li> 
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}
Item.defaultProps = {
    marca: "Faltou a marca!",
    ano_lancamento: 0,
}

export default Item;

// Aprendi a criar PROP TYPES!

// Primeiro preciso importar exatamente assim:  

// "import PropTypes from 'prop-types'"

// Se no pai eu definir como string prop="Olá" eu preciso colocar aqui isso:

//Item.propTypes = {
//  marca: PropTypes.string,
//}

// Se eu quiser definir como number prop={500} eu preciso colocar aqui isso:

//Item.propTypes = {
//  marca: PropTypes.number,
//}

//se apos .number, eu colocar isRequired ficando assim:
//Item.propTypes = {
//  marca: PropTypes.number.isRequired,
//}
//e se eu colocar a chamada item vazia lá no List, ele vai dá erro e vai sair como undefined.

//OBSERVAÇÕES:
//Item.propTypes = {                    // O "p" desse propsTypes pq isso é um DOM e precisa do camelCase.
//  marca: PropTypes.string.isRequired, // trailing comma (virgula final). usada para evitar erros e facilitar a adição de novas propiedades
//}



