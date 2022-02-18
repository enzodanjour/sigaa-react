import React from 'react';
import { styled, keyframes } from '@stitches/react';
import { violet, blackA, mauve } from '@radix-ui/colors';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Container } from 'react-bootstrap';
import logo from '../images/capaeaj.png';
import { AppFooter } from '../components/AppFooter'
import { Nave } from '../components/Nave'


const slideDown = keyframes({
    from: { height: 0 },
    to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
    borderRadius: 6,
    width: 'calc(100% + 6px)',

    backgroundColor: mauve.mauve6,
    boxShadow: `0 2px 10px ${blackA.blackA4}`,
});

const StyledItem = styled(AccordionPrimitive.Item, {
    overflow: 'hidden',
    marginTop: 1,

    '&:first-child': {
        marginTop: 0,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },

    '&:last-child': {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },

    '&:focus-within': {
        position: 'relative',
        zIndex: 1,
        boxShadow: `0 0 0 2px ${mauve.mauve12}`,
    },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
    all: 'unset',
    display: 'flex',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
    all: 'unset',
    fontFamily: 'inherit',
    backgroundColor: 'transparent',
    padding: '0 20px',
    height: 45,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 15,
    lineHeight: 1,
    color: violet.violet11,
    boxShadow: `0 1px 0 ${mauve.mauve6}`,
    '&[data-state="closed"]': { backgroundColor: 'white' },
    '&[data-state="open"]': { backgroundColor: 'white' },
    '&:hover': { backgroundColor: mauve.mauve2 },
});

const StyledContent = styled(AccordionPrimitive.Content, {
    overflow: 'hidden',
    fontSize: 15,
    color: mauve.mauve11,
    backgroundColor: mauve.mauve2,

    '&[data-state="open"]': {
        animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
    '&[data-state="closed"]': {
        animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
});

const StyledContentText = styled('div', {
    padding: '15px 20px',
});

const StyledChevron = styled(ChevronDownIcon, {
    color: violet.violet10,
    transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    '[data-state=open] &': { transform: 'rotate(180deg)' },
});
export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionTrigger = React.forwardRef(({ children, ...props }, forwardedRef) => (
    <StyledHeader>
        <StyledTrigger {...props} ref={forwardedRef}>
            {children}
            <StyledChevron aria-hidden />
        </StyledTrigger>
    </StyledHeader>
));
export const AccordionContent = React.forwardRef(({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
        <StyledContentText>{children}</StyledContentText>
    </StyledContent>
));


export function Principal() {
    return (
        <>
        <Nave />
            <Container className="title h2" >ESCOLA AGRÍCOLA DE JUNDIAÍ - EAJ</Container>

            <h2 className='title'>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS/EAJ</h2>
            <br />
            
            <div class="card mb-1">
            
                <img src={logo} alt="imagem eaj" />
            
                    <div class="card-body">
                        <h5 class="card-title">Apresentação</h5>
                        <p class="card-text">O Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)
                            tem como objetivo a formação de profissionais capazes de compreender o processo de construção
                            e reconstrução do conhecimento no domínio da análise e desenvolvimento de sistemas e, dessa forma,
                            realizar atividades de concepção, especificação, projeto, implementação, avaliação, suporte e
                            manutenção de sistemas computacionais, orientando sua ação na sociedade em geral e no mundo do
                            trabalho em particular para a busca de soluções para o setor produtivo (notadamente o setor primário da economia)
                            e para a melhoria da qualidade de vida das populações. Os profissionais formados atuarão na área de análise e
                            desenvolvimento de sistemas, podendo exercer atividades no campo da análise de sistemas, engenharia de software,
                            gerência de projetos e administração de bancos de dados.</p>
                        <p class="card-text">Além da formação geral em Tecnologia em Análise e Desenvolvimento de Sistemas, o
                            curso tem objetivo de promover a integração entre as ciências agrárias e a denominada Tecnologia da
                            Informação (TI) com suas diversas subáreas, obtendo-se assim uma gama de benefícios e ampliação do
                            espectro de formação profissional em nível superior, considerando que um curso desta natureza permitirá
                            ao egresso propor soluções tecnológicas em software e/ou hardware para as ciências agrárias ou,
                            usando uma nomenclatura mais específica e mercadológica, para a cadeia do agronegócio e da agricultura
                            familiar, sendo, nesse sentido estratégico para o desenvolvimento regional e nacional. Tais objetivos
                            baseiam-se na formação de Tecnólogos com capacidade técnico-científica e visão integral, ética e humanística,
                            comprometidos com o bem estar da sociedade envolvida e com o desenvolvimento sustentável, exercendo todas as
                            competências relacionadas à profissão.</p>
                    </div>
            </div>

            <br></br>
            <Container className="h2">
                <Accordion type="single" defaultValue="item-1" accordion-itemcollapsible="true">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Coordenação do Programa
                        </AccordionTrigger>
                        <AccordionContent>
                            <span className="nome"> CARLA DA COSTA FERNANDES CURVELO</span><br></br>
                            <div className="informações">
                                <p>Telefone/Ramal: <span className="cor">(84) 3342-2297/227 </span> </p>
                                <p>E-mail: <span className="cor">tads@eaj.ufrn.br</span></p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Título do Profissional
                        </AccordionTrigger>
                        <AccordionContent>
                            <span className="nome"> Nenhum conteúdo disponível até o momento</span><br></br>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Modalidade de Curso
                        </AccordionTrigger>
                        <AccordionContent>
                            <span className="nome"> Presencial</span><br></br>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            ESCOLA AGRÍCOLA DE JUNDIAÍ - EAJ
                        </AccordionTrigger>
                        <AccordionContent>
                            Seu sucesso é nossa alegria
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Container>

            <AppFooter />
        </>
    )
}