export const BuildingRegisterForm = () => {
    return (
        <form className="form">
           <div>
                <div className="input-container">
                    <label htmlFor="" className="form-label">Descrição</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="input-container">
                    <label htmlFor="" className="form-label">Logradouro</label>
                    <input type="text" className="form-control"/>

                    <label htmlFor="" className="form-label">Numero</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="input-container">
                    <label htmlFor="" className="form-label">Bairro</label>
                    <input type="text" className="form-control"/>

                    <label htmlFor="" className="form-label">Cidade</label>
                    <input type="text" className="form-control"/>

                    <label htmlFor="" className="form-label">Estado</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="input-container">
                    <label htmlFor="" className="form-label">Status</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="input-container">
                    <label htmlFor="" className="form-label">Responsável</label>
                    <input type="text" className="form-control"/>
                </div>
           </div>

            <div className="buttons-container">
                <button className="btn-secondary">Cancelar</button>
                <button className="btn-primary">Criar Registro</button>
            </div>
        </form>
    )
}