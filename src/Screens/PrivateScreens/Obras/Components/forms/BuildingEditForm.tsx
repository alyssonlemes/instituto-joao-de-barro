import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string, InferType } from "yup";
import { publish } from "../../../../../utils/events";
import { Building, deleteBuilding, updateBuilding } from "../../Services/buildingApi";

interface IEditFormProps {
    selectedBuilding: Building;
}

const validationSchema = object({
    descricao: string().required("Descrição da obra é obrigatória"),
    logradouro: string().required("logradouro da obra é obrigatório"),
    numero: string().required("numero da obra é obrigatório"),
    bairro: string().required("bairro da obra é obrigatório"),
    cidade: string().required("cidade da obra é obrigatório"),
    estado: string().required("estado da obra é obrigatório"),
    status: string().required("Status da obra é obrigatório"),  
    responsavel: string().required("Responsável da obra é obrigatório")


 
});

type EditFormData = InferType<typeof validationSchema>;

export const BuildingEditForm = ({ selectedBuilding }: IEditFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<EditFormData>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            descricao: selectedBuilding.descricao,
            logradouro: selectedBuilding.logradouro,
            numero: selectedBuilding.numero,
            bairro: selectedBuilding.bairro,
            cidade: selectedBuilding.cidade,
            estado: selectedBuilding.estado,
            status: selectedBuilding.status,
            responsavel: selectedBuilding.responsavel
        },
        mode: "onSubmit"
    });

    async function handleEditBuilding(data: EditFormData) {
        try {
            const updatedBuilding = {
                ...selectedBuilding,
                descricao: data.descricao,
                logradouro: data.logradouro,
                numero: data.numero,
                bairro: data.bairro,
                cidade: data.cidade,
                estado: data.estado,
                status: data.status,
                responsavel: data.responsavel
            };
            await updateBuilding(selectedBuilding.id, updatedBuilding);
            publish("building:close-edit-modal");
        } catch (error) {
            return error;
        }
    }
  
    async function handleDeleteBuilding() {
        try {
            await deleteBuilding(selectedBuilding.id);
            publish("building:close-edit-modal");
        } catch (error) {
            return error;
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit(handleEditBuilding)}>
            <div className="fields-container">
                <div className="input-container">
                    <label htmlFor="name">Descrição</label>
                    <input 
                        type="text" 
                        className="form-control"
                        {...register("descricao")}
                    />
                    {errors.descricao && <p className="input-error">{errors.descricao.message}</p>}
                </div>
               
                <div className="input-container">
                    <label htmlFor="name">Logradouro</label>
                    <input 
                        type="text" 
                        className="form-control"
                        {...register("logradouro")}
                    />
                    {errors.logradouro && <p className="input-error">{errors.logradouro.message}</p>}
                </div>

                <div className="input-container">
                    <label htmlFor="name">numero</label>
                    <input 
                        type="text" 
                        className="form-control"
                        {...register("numero")}
                    />
                    {errors.numero && <p className="input-error">{errors.numero.message}</p>}
                </div>

                <div className="input-container">
                    <label htmlFor="name">Bairro</label>
                    <input 
                        type="text" 
                        className="form-control"
                        {...register("bairro")}
                    />
                    {errors.bairro && <p className="input-error">{errors.bairro.message}</p>}
                </div>

                <div className="input-container">
                    <label htmlFor="name">Cidade</label>
                    <input 
                        type="text" 
                        className="form-control"
                        {...register("cidade")}
                    />
                    {errors.cidade && <p className="input-error">{errors.cidade.message}</p>}
                </div>

                <div className="input-container">
                    <label htmlFor="name">Estado</label>
                    <input 
                        type="text" 
                        className="form-control"
                        {...register("estado")}
                    />
                    {errors.estado && <p className="input-error">{errors.estado.message}</p>}
                </div>

                <div className="input-container">
                    <label htmlFor="name">Status</label>
                    <input 
                        type="text" 
                        className="form-control"
                        {...register("status")}
                    />
                    {errors.status && <p className="input-error">{errors.status.message}</p>}
                </div>

                <div className="input-container">
                    <label htmlFor="name">Responsável</label>
                    <input 
                        type="text" 
                        className="form-control"
                        {...register("responsavel")}
                    />
                    {errors.responsavel && <p className="input-error">{errors.responsavel.message}</p>}
                </div>
            </div>

            <div className="buttons-container">
                <button 
                    className="btn-secondary" 
                    type="button" 
                    onClick={handleDeleteBuilding}
                >
                    Deletar
                </button>
                <button 
                    className="btn-primary" 
                    type="submit"
                >
                    Atualizar
                </button>
            </div>
        </form>
    );
};
