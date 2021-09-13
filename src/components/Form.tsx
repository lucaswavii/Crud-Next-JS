import { useState } from "react";
import Cliente from "../core/Cliente";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    cliente: Cliente;
    onChange?: (cliente: Cliente) => void; 
    canceled?: () => void;
}

export default function Form(props:FormProps) {
    
    const id = props.cliente?.id;

    const [nome, setNome] = useState(props.cliente?.nome);
    const [idade, setIdade] = useState(props.cliente?.idade);

    return (
        <div>
            { id ? ( <Input text="Código" value={id} type="text" className="mb-4"></Input> ) : false}
            
            <Input 
                text="Nome" 
                value={nome} 
                type="text"
                onChange={setNome}
                className="mb-4"
            />
            <Input 
                text="Idade" 
                value={idade} 
                type="number"
                onChange={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Button 
                    onClick={() => props.onChange?.(new Cliente(nome, +idade, id))} 
                    color="blue" 
                    className="mr-2">
                      { id ? 'Alterar' : 'Salvar'}
                    </Button>
                <Button onClick={ props.canceled }>Cancelar</Button>
            </div>
        </div>
    )
}