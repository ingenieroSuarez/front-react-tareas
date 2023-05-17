import { Tarea } from "./Tarea";

function ListaDeTareas(){
    const tareas=[{
        idtarea: 13,
        finalizada: true,
        descripcion:"tarea de domina"
    },
]
    return(
        <ul>
            {tareas.map(tarea=>(
                <Tarea idtarea= {tarea.idtarea} 
                       finalizada={tarea.finalizada} 
                       descripcion={tarea.descripcion}
                       key={tarea.idtarea}
                       >
                       </Tarea>
            ))}
        </ul>
    )
}

export {ListaDeTareas}