import axios from "axios";

export interface Building {
  id: string; 
  descricao?: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  status: string;
  responsavel: string;
}

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getBuildings = async (): Promise<Building[]> => {
  const response = await api.get<Building[]>("/buildings");
  return response.data;
};

export const addBuilding = async (building: Building): Promise<Building> => {
  const response = await api.post<Building>("/buildings", building);
  return response.data;
};

export const updateBuilding = async (id: string, building: Building): Promise<Building> => {
  const response = await api.put<Building>(`/buildings/${id}`, building);
  return response.data;
};

export const deleteBuilding = async (id: string): Promise<void> => {
  await api.delete(`/buildings/${id}`);
};
