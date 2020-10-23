import React,{useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext'
import{CSSTransition, TransitionGroup} from 'react-transition-group'
const ListadoProyectos = () => {
    
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, traerProyectos} = proyectosContext;

    useEffect(() => {
        traerProyectos()
    }, [])

    if(proyectos.length ===0) return <p>No hay proyectos, cominza creando uno</p>;
    
 
    return ( 
        <ul 
        className="listado-proyectos">
            {
                <TransitionGroup>
            {  
                proyectos.map(proyecto => (
                    <CSSTransition
                       key={proyecto.id}
                       timeout={200}
                       classNames="proyecto"
                    >      
                     <Proyecto
                       proyecto={proyecto}
                    />
                    
                    </CSSTransition>
                ))
            }

                </TransitionGroup>   
            } 
        </ul>
     );
}
 
export default ListadoProyectos;