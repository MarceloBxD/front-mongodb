import React from 'react';

type Props = {
    limparCampos: () => void;
    }

const Limpar: React.FC<Props> = ({limparCampos}) => {
  return <button
              type="button"
              className="botao-limpar"
              onClick={limparCampos}
            >
              Limpar busca
            </button>;
}

export default Limpar;