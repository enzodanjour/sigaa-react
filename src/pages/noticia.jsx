import React from 'react'
import { AppFooter } from '../components/AppFooter'
import { Nave } from '../components/Nave'

export function Noticia() {
  return (
    <>
    <Nave />
    <h2 className="h22">Notícias</h2><table className="table">
          <thead>
              <tr>
                  <th scope="col">DATA</th>
                  <th scope="col">TÍTULO</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <th scope="row">26/10/2021 09:04</th>
                  <td>Calendário para projeto de Trabalho de Conclusão de Curso Ano/Semestre 2022.1</td>
              </tr>
              <tr>
                  <th scope="row">26/10/2021 09:02</th>
                  <td>Semana de defesa de Trabalhos de Conclusão de Curso - Ano/Semestre 2021.2</td>
              </tr>
              <tr>
                  <th scope="row">30/09/2021 07:53</th>
                  <td colSpan="2">Plano de curso das disciplinas de 2021.2</td>
              </tr>
              <tr>
                  <th scope="row">18/05/2021 14:02</th>
                  <td colSpan="2">Planos de curso das turmas de 2021.1</td>
              </tr>
              <tr>
                  <th scope="row">10/02/2021 10:11</th>
                  <td colSpan="2">Semana de defesa de Trabalhos de Conclusão de Curso - Ano/Semestre 2020.2</td>
              </tr>
              <tr>
                  <th scope="row">10/02/2021 10:10</th>
                  <td colSpan="2">Calendário para projeto de Trabalho de Conclusão de Curso Ano/Semestre 2021.1</td>
              </tr>
              <tr>
                  <th scope="row">10/02/2021 10:08</th>
                  <td colSpan="2">Plano de curso das turmas de 2020.2</td>
              </tr>
              <tr>
                  <th scope="row">17/08/2020 09:34</th>
                  <td colSpan="2">Calendário para projeto de Trabalho de Conclusão de Curso Ano/Semestre 2020.2</td>
              </tr>
              <tr>
                  <th scope="row">17/08/2020 09:32</th>
                  <td colSpan="2">Semana de defesa de Trabalhos de Conclusão de Curso - Ano/Semestre 2020.1</td>
              </tr>
              <tr>
                  <th scope="row">12/08/2020 19:54</th>
                  <td colSpan="2">Plano de curso das turmas de 2020.1 - Retomada</td>
              </tr>
              <tr>
                  <th scope="row">29/07/2020 00:40</th>
                  <td colSpan="2">Defesa de Trabalho de Conclusão de Curso de 2020.1</td>
              </tr>
              <tr>
                  <th scope="row">09/06/2020 21:05</th>
                  <td colSpan="2">Planos de Curso para o Período Letivo Suplementar</td>
              </tr>
          </tbody>
      </table>
      <AppFooter />
      </>

  )
}

