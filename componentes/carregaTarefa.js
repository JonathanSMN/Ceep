
import { criaData } from "./criarData.js"
import { ordenaDatas, romeveDatasRepetidas } from "../service/data.js"

export const carregaTarefa = () => {

    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || 
    []

    lista.innerHTML = ""

    const datasUnicas = romeveDatasRepetidas(tarefasCadastradas)

    ordenaDatas(datasUnicas)

    datasUnicas.forEach((dia) => {
        
            lista.appendChild(criaData(dia))
        

        

    })

}