import { useState, useEffect } from "react"

const Tarefas = () => {
    // HOOK - useState para armazenar 
    const [tarefas, setTarefas] = useState(() => {
        // LOCALSTORAGE 
        const salvarTarefa = localStorage.getItem("item-tarefa")
        return SalvarTarefa ? JSON.parse(salvarTarefa) : [];

    });
    //useState para o campo da tarefa
    const [campo, setCampo] = useState(" ");

    // HOOK useEffect - realiza o efeio colateral, no exemplo
    // ao cadastrar a tarefa aparece automaticamente na tela

    useEffect(() => {
        localStorage.setItem("item-tarefa".JSON.stringify(tarefas));
    }, [tarefas])


    //Função adicionar tarefa
    const AdicionarTarefa = () => {
        setTarefas()
    }


    return (
        <>

        </>

    )
}

export default Tarefas
