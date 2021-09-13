import { useState } from "react";

export default function useTableOrForm() {
    const [visible, setVisible] = useState<'table' | 'form'>('table');

    const exibleTable = () => setVisible('table');
    const exibleForm = () => setVisible('form');
    
    return {
        formVisible: visible === 'form',
        tableVisible: visible === 'table',
        exibleTable,
        exibleForm
    }
}