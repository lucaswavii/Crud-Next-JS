import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import useClientes from '../hooks/useClientes'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  const {
    cliente,
    clientes, 
    clienteNew, 
    clienteDelete, 
    clienteSave, 
    clienteSelection,
    toDoCliente,
    tableVisible,     
  } = useClientes()


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simple">
        <div className="flex justify-end">
          <Button 
            cor="green" 
            className="mb-4"
            onClick={clienteNew}>
              Novo Cliente            
            </Button>
        </div>
        { tableVisible ? ( 
          <>
            <Table 
              clientes={ clientes } 
              clienteSelection={ clienteSelection } 
              clienteDelete={ clienteDelete } ></Table>  
          </>  ) : ( 
            <Form 
              cliente={cliente}
              onChange={clienteSave}
              canceled={() => tableVisible }
            /> 
        )}        
      </Layout>
    </div>
  )
}
