import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { updateMaterial, deleteMaterial } from "../../../../../services/storage/storageApi";
import { publish } from "../../../../../utils/events";
import toast from "react-hot-toast";
import { useContext } from "react";
import { StorageContext, StorageMaterialFormData } from "../../../../../contexts/storage/StorageContext";

export const StorageEditForm = () => {
    const {selectedMaterial, loadStorageMaterials, storageMaterialValidationSchema, mapOriginToEnum} = useContext(StorageContext)

    const { register, handleSubmit, formState: { errors } } = useForm<StorageMaterialFormData>({
        resolver: yupResolver(storageMaterialValidationSchema),
        defaultValues: {
            name: selectedMaterial?.name,
            quantity: selectedMaterial?.quantity,
            description: selectedMaterial?.description,
            origin: selectedMaterial?.origin && mapOriginToEnum(selectedMaterial.origin)
        },
        mode: "onSubmit"
    });

    async function handleEditMaterial(data: StorageMaterialFormData) {
        try {
            if(!selectedMaterial) return;

            const updatedMaterial = {
                ...selectedMaterial,
                name: data.name,
                quantity: data.quantity,
                description: data.description,
                origin: data.origin
            };
            await updateMaterial(selectedMaterial.id, updatedMaterial);
            loadStorageMaterials()
            publish("storage:close-edit-modal");
            toast.success( "Material alterado com sucesso");
        } catch (error) {
            toast.error( "Falha ao alterar material");
            return error;
        }
    }
  
    async function handleDeleteMaterial() {
        if(!selectedMaterial) return;

        try {
            await deleteMaterial(selectedMaterial.id);
            loadStorageMaterials()
            publish("storage:close-edit-modal");
            toast.success( "Material excluído com sucesso");
        } catch (error) {
            toast.error( "Falha ao excluir material");
            return error;
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit(handleEditMaterial)}>
            <div className="fields-container">
                <div className="input-container">
                    <label htmlFor="name">Nome do material</label>
                    <input 
                        type="text" 
                        className="form-control"
                        {...register("name")}
                    />
                    {errors.name && <p className="input-error">{errors.name.message}</p>}
                </div>
                <div className="input-container">
                    <label htmlFor="quantity">Quantidade</label>
                    <input 
                        type="number" 
                        className="form-control"
                        {...register("quantity")}
                    />
                    {errors.quantity && <p className="input-error">{errors.quantity.message}</p>}
                </div>
                <div className="input-container">
                    <label htmlFor="description">Descrição <span className="optional">(opcional)</span></label>
                    <textarea 
                        className="form-control"
                        {...register("description")}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="origin">Origem</label>
                    <select 
                        id="origin"
                        {...register("origin")}
                        className="form-control"
                    >
                        <option value="" disabled>Selecione</option>
                        <option value="DONATED">Doação</option>
                        <option value="BOUGHT">Compra</option>
                    </select>
                    {errors.origin && <p className="input-error">{errors.origin.message}</p>}
                </div>
            </div>

            <div className="buttons-container">
                <button 
                    className="btn-secondary" 
                    type="button" 
                    onClick={handleDeleteMaterial}
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
