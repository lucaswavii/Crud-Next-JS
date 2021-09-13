import { useEffect, useState } from "react";
import ColectionCliente from "../backend/db/ColectionCliente";
import Cliente from "../core/Cliente";
import ClienteRepository from "../core/ClienteRepository";
import useTableOrForm from "./useTableOrForm";

export default function useClientes() {
    const repo: ClienteRepository = new ColectionCliente();

  const { tableVisible, formVisible, exibleTable, exibleForm} = useTableOrForm()
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  
  useEffect( toDoCliente,[]);

  function toDoCliente() {
    repo.toDo()
    .then(clientes => { 
      setClientes(clientes)
      exibleTable()
    })
    .catch((err) => alert("Ocorreu um erro ao tentar obter os cliente."));
  }

  function clienteSelection(cliente: Cliente) {
    setCliente(cliente)
    exibleForm()
  }

  async function clienteDelete(cliente: Cliente) {
    await repo.delete(cliente);
    toDoCliente();
  }

  async function clienteSave(cliente: Cliente) {
    await repo.save(cliente);
    toDoCliente();
  }

  function clienteNew(cliente: Cliente) {
    setCliente(Cliente.vazio)
    exibleForm()
  }

  return {
      clienteNew,
      clienteSave,
      clienteDelete,
      clienteSelection,
      toDoCliente,
      tableVisible, 
      formVisible,
      clientes,
      cliente
  }
}