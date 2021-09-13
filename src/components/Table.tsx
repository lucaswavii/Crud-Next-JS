import Cliente from "../core/Cliente";
import { IconDelete, IconEdit } from "./Icons";

interface TableProps {
    clientes: Cliente[];
    clienteSelection?: (cliente: Cliente) => void
    clienteDelete?: (cliente: Cliente) => void
}

export default function Table( props ) {

    const exibirActions = props.clienteDelete || props.clienteSelection

    function headerTable() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                { exibirActions ? <th className="text-left">Ações</th> : false }
            </tr>
        );
    }

    

    function actionTables( cliente: Cliente) {
        return (
            <td className='flex justify-center'>
                { props.clienteSelection ? (
                    <button onClick={() => props.clienteSelection?.(cliente)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                    `}>{IconEdit}</button>
                ) : false}

                { props.clienteDelete ? (
                   <button onClick={() => props.clienteDelete?.(cliente)} className={`
                   flex justify-center items-center
                   text-red-500 rounded-full p-2 m-1
                   hover:bg-purple-50
                    `}>{IconDelete}</button>
                ) : false}
               
                
            </td>
        );
    }

    function dataTable() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={ cliente.id }
                className={`${ i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{ cliente.id }</td>
                    <td className="text-left p-4">{ cliente.nome }</td>
                    <td className="text-left p-4">{ cliente.idade }</td>
                    { exibirActions ? actionTables(cliente) : false }
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                { headerTable() }
            </thead>
            <tbody>
                { dataTable()}
            </tbody>
        </table>
    );
}