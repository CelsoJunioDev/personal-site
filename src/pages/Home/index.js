import React, {useState} from 'react'
import {Button} from '../../components/Button'
import * as S from './styles'
import Card from '../../components/Card'
import Github from '../../assets/github.svg'
import Linkedin from '../../assets/linkedin.svg'
import Instagram from '../../assets/instagram.svg'
import Whatsapp from '../../assets/whatsapp.svg'

const urlToDownload = "https://speed.hetzner.de/100MB.bin";
export default function Home() {
    
    return (
        <S.Container id="home">

            <S.Header>
                <S.Left>
                <S.Title>Celso Junio</S.Title>
            <S.Subtitle>Programador Front-end</S.Subtitle>
            <p>Web - Mobile</p>
              

            <Button
            smooth={true}
            duration={500}
            exact="true"
            to="contact"
            width="200px"
            fontbig="true"
            >
                Começar
            </Button>
                </S.Left>
                <S.Right>
        <Card img={Github} title="GitHub" href="https://github.com/celsojuniodev"/>
            <Card img={Linkedin} title="LinkedIn" href="https://linkedin.com/in/celsojuniodev"/>
            <Card img={Instagram} title="Instagram" href="https://instagram.com/celsojunioss"/>
            <Card img={Whatsapp} title="Whatsapp" href="https://api.whatsapp.com/send?phone=5561993751598"/>
                </S.Right>
            </S.Header>
           
        
        </S.Container>
    )
}
