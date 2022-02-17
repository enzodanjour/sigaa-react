import React from 'react'

export function Calendario() {
    return (

        <>
            <><h2>Calendário</h2>

                <ul className="list-group">
                    <li className="list-group-item active" aria-current="true">2021.1</li>
                    <li className="list-group-item">14/05/2021 à 21/05/2021
                        → Matrícula para o período 2021.1.</li>
                    <li className="list-group-item">07/06/2021 à 08/06/2021
                        → Re-matrícula para o período 2021.1.</li>
                    <li className="list-group-item">07/06/2021
                        → Início do período letivo 2021.1.</li>
                    <li className="list-group-item">14/06/2021
                        → Início do período trancamento de turma 2021.1.</li>
                    <li className="list-group-item">16/07/2021
                        →Término do período trancamento de turma 2021.1.</li>
                    <li className="list-group-item">31/10/2021
                        →Término do período letivo 2021.1.</li>
                </ul>

            </><ul className="list-group">
                <li className="list-group-item active" aria-current="true">2021.2</li>
                <li className="list-group-item">30/09/2021 à 07/10/2021
                    → Matrícula para o período 2021.2.</li>
                <li className="list-group-item">18/10/2021 à 20/10/2021
                    → Re-matrícula para o período 2021.2.</li>
                <li className="list-group-item">04/10/2021
                    → Início do período letivo 2021.2.</li>
                <li className="list-group-item">25/10/2021
                    → Início do período trancamento de turma 2021.2.</li>
                <li className="list-group-item">26/11/2021
                    → Término do período trancamento de turma 2021.2.</li>
                <li className="list-group-item">19/02/2022
                    → Término do período letivo 2021.2.</li>
            </ul></>
    )
}
