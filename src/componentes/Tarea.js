import { Button } from 'react-bootstrap';

function Tarea({idtarea, finalizada, descripcion}){
    return(
        <li>
            <div>
                <p>
                    ID : {idtarea}
                </p>
                <p>
                    Descripción : {descripcion}
                </p>
                <p>
                    Finalizada : {finalizada}
                </p>
                <Button as="a" variant="success">
                        Eliminar tarea
                </Button>
            </div>
        </li>

        )

}
export {Tarea}