import PropTypes from 'prop-types'

function Item({ marca, ano_lancamento }) {
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

// Aprendi a criar PropTypes!

// Primeiro preciso importar assim:
import PropTypes from 'prop-types'

// Se no componente pai eu passar:
// marca="Olá" → isso é uma string

// Se eu passar:
// marca={500} → isso é um number (expressão JS)

// Definindo os tipos das props:
Item.propTypes = {
  marca: PropTypes.string,
}

// Para number:
Item.propTypes = {
  marca: PropTypes.number,
}

// Se eu usar isRequired:
Item.propTypes = {
  marca: PropTypes.number.isRequired,
}
// Se eu não passar essa prop, NÃO quebra o código,
// mas aparece um aviso (warning) no console.

// OBSERVAÇÕES:

// Item.propTypes = {
//   marca: PropTypes.string.isRequired,
// }

// camelCase é padrão do JavaScript
// vírgula no final (trailing comma) ajuda a evitar erros
// e facilita adicionar novas propriedades no futuro
// defaultProps define valores padrão caso a prop não seja enviada
// não é obrigatório usar propTypes
// mas é recomendado
// usado pra evitar erros e organizar código


