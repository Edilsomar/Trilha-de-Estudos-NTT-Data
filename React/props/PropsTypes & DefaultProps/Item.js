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

//Importar primeiro.
import PropTypes from 'prop-types'

// Se no componente PAI eu passar:
// marca="Olá" → isso é uma string
// marca={500} → isso é um number (expressão JS)

Item.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number,
}

// Sempre que um dado for essencialmente obrigatório, usar isRequired.
// Se eu não passar essa prop, NÃO quebra o código, mas aparece um aviso (warning) no console.

Item.propTypes = {
   marca: PropTypes.string.isRequired,
   ano_lancamento: PropTypes.number.IsRequired,    
}

// vírgula no final (trailing comma) ajuda a evitar erros e não da erro ao adicionar uma nova propiedade.
// defaultProps define valores padrão caso a prop não seja preenchida!
// não é obrigatório usar propTypes mas é recomendado
// usado pra evitar erros e organizar código
