function sortear(){
    var adversarios = 128
    var sort1 = parseInt(adversarios*Math.random())
    document.getElementById('timedacasa').selectedIndex = sort1+1
    var sort2 = parseInt(adversarios*Math.random())
    if(sort2 == sort1){
        document.getElementById('timedefora').selectedIndex = sort2
    }else{
        document.getElementById('timedefora').selectedIndex = sort2+1
    }
}
function alertagol(){
    var audio = new Audio('gol.mp3');
    audio.play();
}
function jogar(){
    if(document.getElementById('camponeutro').checked){
        var neutralidade = 1
    }else{
        var neutralidade = 0
    }
    var intervalo = Number(window.document.getElementById("intervalodasimulacao").value)
    var chaveinter = 1
    switch(intervalo){
        case 1:
            chaveinter = 60000
            break
        case 2:
            chaveinter = 5000
            break
        case 3:
            chaveinter = 1000
            break
        case 4:
            chaveinter = 500
            break
        case 5:
            chaveinter = 200
            break
        case 6:
            chaveinter = 100
            break
    }
    var PELcasa = window.document.getElementById('timedacasa').value
    var PELfora = window.document.getElementById('timedefora').value
    if(PELcasa=="braCAM"){//Atlético Mineiro
        var Pcasa = 54.44
        var Acasa = 1.42
        var Dcasa = 1.05
        document.getElementById('ESCcasa').src = "https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-256.png"
    }
    else if(PELcasa=="braCAP"){//Athletico Paranaense
        var Pcasa = 62.04
        var Acasa = 1.47
        var Dcasa = 0.79
        document.getElementById('ESCcasa').src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/CA_Paranaense.svg/240px-CA_Paranaense.svg.png"
    }
    else if(PELcasa=="braAVA"){//Avaí
        var Pcasa = 32.34
        var Acasa = 0.90
        var Dcasa = 1.45
        document.getElementById('ESCcasa').src ="https://upload.wikimedia.org/wikipedia/commons/f/fe/Avai_FC_%2805-E%29_-_SC.svg"
    }
    else if(PELcasa=="braBAH"){//Bahia
        var Pcasa = 51.23
        var Acasa = 1.30
        var Dcasa = 1.06
        document.getElementById('ESCcasa').src = "https://cdn.worldvectorlogo.com/logos/esporte-clube-bahia-de-salvador-ba.svg"
    }
    else if(PELcasa=="braBOT"){//Botafogo
        var Pcasa = 40.06
        var Acasa = 1.03
        var Dcasa = 1.24
        document.getElementById('ESCcasa').src = "https://logodetimes.com/times/botafogo/logo-botafogo-256.png"
    }
    else if(PELcasa=="braCEA"){//Ceará
        var Pcasa = 49.11
        var Acasa = 1.23
        var Dcasa = 1.07
        document.getElementById('ESCcasa').src = "https://logodetimes.com/times/ceara/logo-ceara-256.png"
    }
    else if(PELcasa=="braCHA"){//Chapecoense
        var Pcasa = 40.75
        var Acasa = 1.05
        var Dcasa = 1.23
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/6/61/S%C3%ADmbolo_Chapecoense_sem_estrelas.svg"
    }
    else if(PELcasa=="braCOR"){//Corinthians
        var Pcasa = 53.56
        var Acasa = 1.27
        var Dcasa = 0.94
        document.getElementById('ESCcasa').src="https://s.glbimg.com/es/sde/f/equipes/2018/03/10/corinthians.svg"
    }
    else if(PELcasa=="braCRU"){//Cruzeiro
        var Pcasa = 51.58
        var Acasa = 1.22
        var Dcasa = 0.96
        document.getElementById('ESCcasa').src="https://cdn.worldvectorlogo.com/logos/cruzeiro.svg"
    }
    else if(PELcasa=="braCSA"){//CSA
        var Pcasa = 35.62
        var Acasa = 1.02
        var Dcasa = 1.43
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/6/64/CSA_logo.png"
    }
    else if(PELcasa=="braFLA"){//Flamengo
        var Pcasa = 73.7
        var Acasa = 2.13
        var Dcasa = 0.83
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg"
    }
    else if(PELcasa=="braFLU"){//Fluminense
        var Pcasa = 52.21
        var Acasa = 1.33
        var Dcasa = 1.05
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/de/1/12/Fluminense_Football_Club.svg"
    }
    else if(PELcasa=="braFOR"){//Fortaleza
        var Pcasa = 46.94
        var Acasa = 1.30
        var Dcasa = 1.24
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Fortaleza_Esporte_Clube_logo.svg"
    }
    else if(PELcasa=="braGOI"){//Goiás
        var Pcasa = 40.7
        var Acasa = 1.1
        var Dcasa = 1.3
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/7/71/Goias_Esporte_Clube_inverted_logo.svg"
    }
    else if(PELcasa=="braGRE"){//Grêmio
        var Pcasa = 65.6
        var Acasa = 1.8
        var Dcasa = 0.9
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/f/f1/Gremio.svg"
    }
    else if(PELcasa=="braINT"){//Internacional
        var Pcasa = 55.9
        var Acasa = 1.4
        var Dcasa = 1.0
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Escudo_do_Sport_Club_Internacional.svg"
    
    }
    else if(PELcasa=="braPAL"){//Palmeiras
        var Pcasa = 69.0
        var Acasa = 1.7
        var Dcasa = 0.7
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg"
    }
    else if(PELcasa=="braSAN"){//Santos
        var Pcasa = 60.6
        var Acasa = 1.6
        var Dcasa = 0.9
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/3/35/Santos_logo.svg"
    }
    else if(PELcasa=="braSPFC"){//São Paulo
        var Pcasa = 57.4
        var Acasa = 1.3
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg"
    }
    else if(PELcasa=="braVAS"){//Vasco
        var Pcasa = 50.1
        var Acasa = 1.4
        var Dcasa = 1.2
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/1/1a/ClubDeRegatasVascoDaGama.svg"
    }
    else if(PELcasa=="engARS"){//Arsenal
        var Pcasa = 79.3
        var Acasa = 2.4
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/5/53/Arsenal_FC.svg"
    }
    else if(PELcasa=="engAST"){//Aston Villa
        var Pcasa = 64.1
        var Acasa = 1.7
        var Dcasa = 0.9
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/1/15/Aston_Villa.svg"
    }
    else if(PELcasa=="engBOU"){//Bournemouth
        var Pcasa = 68.5
        var Acasa = 2.1
        var Dcasa = 1.0
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/e/e5/AFC_Bournemouth_%282013%29.svg"
    }
    else if(PELcasa=="engBRI"){//Brighton
        var Pcasa = 65.8
        var Acasa = 1.7
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg"
    }
    else if(PELcasa=="engBUR"){//Burnley
        var Pcasa = 69.8
        var Acasa = 1.9
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/0/07/BurnleyFC_logo2014.gif"
    }
    else if(PELcasa=="engCHE"){//Chelsea
        var Pcasa = 85.0
        var Acasa = 2.5
        var Dcasa = 0.5
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/c/cc/Chelsea_FC.svg"
    }
    else if(PELcasa=="engCRY"){//Crystal Palace
        var Pcasa = 70.4
        var Acasa = 1.9
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/0/0c/Crystal_Palace_FC_logo.svg"
    }
    else if(PELcasa=="engEVE"){//Everton
        var Pcasa = 76.8
        var Acasa = 2.0
        var Dcasa = 0.6
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/7/7c/Everton_FC_logo.svg"
    }
    else if(PELcasa=="engLEI"){//Leicester
        var Pcasa = 79.2
        var Acasa = 2.0
        var Dcasa = 0.5
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/2/2d/Leicester_City_crest.svg"
    }
    else if(PELcasa=="engLIV"){//Liverpool
        var Pcasa = 92.3
        var Acasa = 2.9
        var Dcasa = 0.3
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/0/0c/Liverpool_FC.svg"
    }
    else if(PELcasa=="engMANC"){//Manchester City
        var Pcasa = 95.8
        var Acasa = 3.4
        var Dcasa = 0.2
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/e/eb/Manchester_City_FC_badge.svg"
    }
    else if(PELcasa=="engMANU"){//Manchester United
        var Pcasa = 81.8
        var Acasa = 2.2
        var Dcasa = 0.5
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/7/7a/Manchester_United_FC_crest.svg"
    }
    else if(PELcasa=="engNEW"){//Newcastle
        var Pcasa = 65.8
        var Acasa = 1.7
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/5/56/Newcastle_United_Logo.svg"
    }
    else if(PELcasa=="engNOR"){//Norwich
        var Pcasa = 63.2
        var Acasa = 1.8
        var Dcasa = 1.0
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/e/e2/Norwich_City_FC.png"
    }
    else if(PELcasa=="engSHEU"){//Sheffield United
        var Pcasa = 65.5
        var Acasa = 1.7
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/3/39/SUFC_logo.svg"
    }
    else if(PELcasa=="engSOU"){//Southampton
        var Pcasa = 70.7
        var Acasa = 1.9
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/c/c9/FC_Southampton.svg"
    }
    else if(PELcasa=="engTOT"){//Tottenham
        var Pcasa = 82.6
        var Acasa = 2.4
        var Dcasa = 0.6
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/b/b4/Tottenham_Hotspur.svg"
    }
    else if(PELcasa=="engWAT"){//Watford
        var Pcasa = 65.9
        var Acasa = 2.0
        var Dcasa = 1.0
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/e/e2/Watford.svg"
    }
    else if(PELcasa=="engWHU"){//West Ham United
        var Pcasa = 70.0
        var Acasa = 2.0
        var Dcasa = 0.9
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/c/c2/West_Ham_United_FC_logo.svg"
    }
    else if(PELcasa=="engWOL"){//Wolves
        var Pcasa = 71.9
        var Acasa = 1.9
        var Dcasa = 0.7
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg"
    }
    else if(PELcasa=="itiATA"){//Atalanta
        var Pcasa = 70.4
        var Acasa = 2.0
        var Dcasa = 0.9
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg"
    }
    else if(PELcasa=="itiFIO"){//Fiorentina
        var Pcasa = 69.8
        var Acasa = 2.0
        var Dcasa = 0.9
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/b/ba/ACF_Fiorentina_2.svg"
    }
    else if(PELcasa=="itiINT"){//Internazionali
        var Pcasa = 80.2
        var Acasa = 2.2
        var Dcasa = 0.6
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/8/89/FC_Internazionale_Milano_2014.svg"
    }
    else if(PELcasa=="itiJUV"){//Juventus
        var Pcasa = 87.3
        var Acasa = 2.6
        var Dcasa = 0.5
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg"
    }
    else if(PELcasa=="itiLAZ"){//Lazio
        var Pcasa = 72.0
        var Acasa = 2.0
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/e/e4/SS_Lazio.svg"
    }
    else if(PELcasa=="itiMIL"){//Milan
        var Pcasa = 73.1
        var Acasa = 2.0
        var Dcasa = 0.7
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg"
    }
    else if(PELcasa=="itiNAP"){//Napoli
        var Pcasa = 82.3
        var Acasa = 2.4
        var Dcasa = 0.6
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/b/ba/SSC_Napoli.svg"
    }
    else if(PELcasa=="itiROM"){//Roma
        var Pcasa = 73.1
        var Acasa = 2.1
        var Dcasa = 0.9
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg"
    }
    else if(PELcasa=="gerBAY"){//Bayern
        var Pcasa = 93.7
        var Acasa = 3.3
        var Dcasa = 0.3
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg"
    }
    else if(PELcasa=="gerDOR"){//Dortmund
        var Pcasa = 84.4
        var Acasa = 2.6
        var Dcasa = 0.6
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg"
    }
    else if(PELcasa=="gerHOF"){//Hoffenheim
        var Pcasa = 81.1
        var Acasa = 2.3
        var Dcasa = 0.6
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Logo_TSG_Hoffenheim.svg"
    }
    else if(PELcasa=="gerLEV"){//Leverkusen
        var Pcasa = 71.6
        var Acasa = 2.2
        var Dcasa = 1.0
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/de/f/f7/Bayer_Leverkusen_Logo.svg"
    }
    else if(PELcasa=="gerRBL"){//Red Bull Leipzig
        var Pcasa = 81.4
        var Acasa = 2.3
        var Dcasa = 0.6
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/fr/0/04/RB_Leipzig_2014_logo.svg"
    }
    else if(PELcasa=="gerSCH"){//Schalke 04
        var Pcasa = 72.9
        var Acasa = 2.0
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/6/6d/FC_Schalke_04_Logo.svg"
    }
    else if(PELcasa=="gerWER"){//Werder Bremen
        var Pcasa = 69.1
        var Acasa = 2.0
        var Dcasa = 1.0
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/b/be/SV-Werder-Bremen-Logo.svg"
    }
    else if(PELcasa=="gerWOL"){//Wolfsburg
        var Pcasa = 72.0
        var Acasa = 1.9
        var Dcasa = 0.7
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo-VfL-Wolfsburg.svg"
    }
    else if(PELcasa=="spaATL"){//Atlético Madrid
        var Pcasa = 84.9
        var Acasa = 2.2
        var Dcasa = 0.4
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/c/c1/Atletico_Madrid_logo.svg"
    }
    else if(PELcasa=="catBAR"){//Barcelona
        var Pcasa = 89.1
        var Acasa = 2.8
        var Dcasa = 0.4
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/4/47/FC_Barcelona_%28crest%29.svg"
    }
    else if(PELcasa=="spaMAD"){//Real Madrid
        var Pcasa = 85.8
        var Acasa = 2.6
        var Dcasa = 0.5
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/5/56/Real_Madrid_CF.svg"
    }
    else if(PELcasa=="spaSEV"){//Sevilla
        var Pcasa = 78.4
        var Acasa = 2.1
        var Dcasa = 0.6
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/fr/f/f1/Logo_Sevilla_FC.svg"
    }
    else if(PELcasa=="porBEN"){//Benfica
        var Pcasa = 76.0
        var Acasa = 2.2
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/a/a2/SL_Benfica_logo.svg"
    }
    else if(PELcasa=="porBRA"){//Braga
        var Pcasa = 78.4
        var Acasa = 2.1
        var Dcasa = 0.6
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/f/f9/150px-Sporting_Clube_Braga.png"
    }
    else if(PELcasa=="porPOR"){//Porto
        var Pcasa = 78.4
        var Acasa = 2.2
        var Dcasa = 0.7
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/f/f1/FC_Porto.svg"
    }
    else if(PELcasa=="porSPO"){//Sporting
        var Pcasa = 64.3
        var Acasa = 1.8
        var Dcasa = 1.0
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/3/3e/Sporting_Clube_de_Portugal.png"
    }
    else if(PELcasa=="fraLIL"){//Lille
        var Pcasa = 69.5
        var Acasa = 1.8
        var Dcasa = 0.7
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/fr/6/62/Logo_LOSC_Lille_2018.svg"
    }
    else if(PELcasa=="fraOLY"){//Lyonnais, Olympique
        var Pcasa = 72.1
        var Acasa = 2.0
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/fr/e/e2/Olympique_lyonnais_%28logo%29.svg"
    }
    else if(PELcasa=="fraMAR"){//Marseille
        var Pcasa = 66.2
        var Acasa = 1.7
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/fr/4/43/Logo_Olympique_de_Marseille.svg"
    }
    else if(PELcasa=="fraPSG"){//Paris Saint-Germain
        var Pcasa = 88.9
        var Acasa = 2.7
        var Dcasa = 0.4
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/fr/8/86/Paris_Saint-Germain_Logo.svg"
    }
    else if(PELcasa=="argBOC"){//Boca Juniors
        var Pcasa = 62.0
        var Acasa = 1.5
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg"
    }
    else if(PELcasa=="argIND"){//Independiente
        var Pcasa = 49.3
        var Acasa = 1.3
        var Dcasa = 1.2
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/d/db/Escudo_del_Club_Atl%C3%A9tico_Independiente.svg"
    }
    else if(PELcasa=="argNOB"){//Newell's Old Boys
        var Pcasa = 47.7
        var Acasa = 1.2
        var Dcasa = 1.1
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/f/fc/CA_Newell%E2%80%99s_Old_Boys.svg"
    }
    else if(PELcasa=="argRAC"){//Racing
        var Pcasa = 51.2
        var Acasa = 1.4
        var Dcasa = 1.1
        document.getElementById('ESCcasa').src="https://www.racingclub.com.ar/img/escudo.png"
    }
    else if(PELcasa=="argRIV"){//River Plate
        var Pcasa = 67.9
        var Acasa = 1.9
        var Dcasa = 0.9
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/6/69/Escudo_del_Club_Atl%C3%A9tico_River_Plate.svg"
    }
    else if(PELcasa=="argVEL"){//Vélez Sarsfield
        var Pcasa = 50.1
        var Acasa = 1.3
        var Dcasa = 1.1
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/2/21/Escudo_del_Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield.svg"
    }
    else if(PELcasa=="GER"){//Alemanha
        var Pcasa = 88.4
        var Acasa = 3.1
        var Dcasa = 0.6
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/de/a/a9/Deutscher_Fu%C3%9Fball-Bund_logo.svg"
    }
    else if(PELcasa=="SAU"){//Arábia Saudita
        var Pcasa = 51.9
        var Acasa = 1.5
        var Dcasa = 1.2
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ksa"
    }
    else if(PELcasa=="ARG"){//Argentina
        var Pcasa = 85.2
        var Acasa = 2.6
        var Dcasa = 0.5
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/f/fc/230px-Afa_logo.svg.png"
    }
    else if(PELcasa=="AUS"){//Austrália
        var Pcasa = 63.4
        var Acasa = 1.8
        var Dcasa = 1.0
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/6/69/Football_Federation_Australia_logo.svg.png"
    }
    else if(PELcasa=="BEL"){//Bélgica
        var Pcasa = 87.3
        var Acasa = 3.0
        var Dcasa = 0.6
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/bel"
    }
    else if(PELcasa=="BRA"){//Brasil
        var Pcasa = 91.04
        var Acasa = 2.92
        var Dcasa = 0.34
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/2/26/Escudo_CBF.png"
    }
    else if(PELcasa=="CHI"){//Chile
        var Pcasa = 76.14
        var Acasa = 2.16
        var Dcasa = 0.69
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Logo_Federaci%C3%B3n_de_F%C3%BAtbol_de_Chile.png"
    }
    else if(PELcasa=="COL"){//Colômbia
        var Pcasa = 80.3
        var Acasa = 2.1
        var Dcasa = 0.5
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/6/61/Federacion_Colombiana_de_Futbol_logo.svg"
    }
    else if(PELcasa=="KOR"){//Coréia do Sul
        var Pcasa = 62.6
        var Acasa = 1.7
        var Dcasa = 0.9
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/4/4d/Emblem_of_Korea_Football_Association.svg"
    }
    else if(PELcasa=="CRC"){//Costa Rica
        var Pcasa = 65.1
        var Acasa = 1.7
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/crc"
    }
    else if(PELcasa=="CRO"){//Croácia
        var Pcasa = 83.3
        var Acasa = 2.6
        var Dcasa = 0.6
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/3/39/Croatia_national_football_team_crest.svg"
    }
    else if(PELcasa=="DEN"){//Dinamarca
        var Pcasa = 73.2
        var Acasa = 2.0
        var Dcasa = 0.7
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/4/4f/Dansk_Boldspil-Union_logo.svg"
    }
    else if(PELcasa=="EGY"){//Egito
        var Pcasa = 58.9
        var Acasa = 1.6
        var Dcasa = 1.0
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/de/6/60/Egyptian_Football_Association.svg"
    }
    else if(PELcasa=="SPA"){//Espanha
        var Pcasa = 91.1
        var Acasa = 3.3
        var Dcasa = 0.5
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/3/31/Spain_National_Football_Team_badge.png"
    }
    else if(PELcasa=="USA"){//Estados Unidos da América
        var Pcasa = 69.75
        var Acasa = 1.88
        var Dcasa = 0.77
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/8/86/Crest_of_the_United_States_Soccer_Federation.png"
    }
    else if(PELcasa=="FRA"){//França
        var Pcasa = 88.6
        var Acasa = 2.9
        var Dcasa = 0.5
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/2/25/Logo_Sele%C3%A7%C3%A3o_Francesa_2018.png"
    }
    else if(PELcasa=="ENG"){//Inglaterra
        var Pcasa = 85.36
        var Acasa = 2.64
        var Dcasa = 0.54
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/d/d5/FA_crest_2009.svg"
    }
    else if(PELcasa=="IRA"){//Irã
        var Pcasa = 67.7
        var Acasa = 1.6
        var Dcasa = 0.7
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ira"
    }
    else if(PELcasa=="ISL"){//Islândia
        var Pcasa = 67.9
        var Acasa = 2.0
        var Dcasa = 0.9
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/isl"
    }
    else if(PELcasa=="JAP"){//Japão
        var Pcasa = 83.1
        var Acasa = 2.4
        var Dcasa = 0.5
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/8/84/Japan_national_football_team_crest.svg"
    }
    else if(PELcasa=="MAR"){//Marrocos
        var Pcasa = 72.3
        var Acasa = 1.9
        var Dcasa = 0.7
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/mar"
    }
    else if(PELcasa=="MEX"){//México
        var Pcasa = 74.3
        var Acasa = 2.1
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/5/51/Mexico_national_football_team_seal.svg.png"
    }
    else if(PELcasa=="USA"){//Nigéria
        var Pcasa = 71.1
        var Acasa = 2.1
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ngr"
    }
    else if(PELcasa=="PAN"){//Panamá
        var Pcasa = 53.2
        var Acasa = 1.5
        var Dcasa = 1.1
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/pan"
    }
    else if(PELcasa=="PER"){//Peru
        var Pcasa = 71.6
        var Acasa = 1.9
        var Dcasa = 0.7
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/per"
    }
    else if(PELcasa=="POL"){//Polônia
        var Pcasa = 71.1
        var Acasa = 2.1
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/pol"
    }
    else if(PELcasa=="POR"){//Portugal
        var Pcasa = 82.5
        var Acasa = 2.4
        var Dcasa = 0.6
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/7/75/Portugal_FPF.png"
    }
    else if(PELcasa=="RUS"){//Rússia
        var Pcasa = 70.6
        var Acasa = 2.0
        var Dcasa = 0.8
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/rus"
    }
    else if(PELcasa=="SEN"){//Senegal
        var Pcasa = 67.4
        var Acasa = 1.7
        var Dcasa = 0.7
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/sen"
    }
    else if(PELcasa=="SER"){//Sérvia
        var Pcasa = 73.0
        var Acasa = 2.0
        var Dcasa = 0.7
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/srb"
    }
    else if(PELcasa=="SWI"){//Suiça
        var Pcasa = 77.1
        var Acasa = 2.3
        var Dcasa = 0.7
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/sui"
    }
    else if(PELcasa=="SWE"){//Suécia
        var Pcasa = 75.8
        var Acasa = 2.1
        var Dcasa = 0.6
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/swe"
    }
    else if(PELcasa=="TUN"){//Tunísia
        var Pcasa = 61.9
        var Acasa = 1.8
        var Dcasa = 1.0
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/tun"
    }
    else if(PELcasa=="URU"){//Uruguai
        var Pcasa = 81.2
        var Acasa = 2.3
        var Dcasa = 0.5
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/a/a9/Uruguay_football_association.svg.png"
    }
    else if(PELcasa=="ECU"){//Equador
        var Pcasa = 68.42
        var Acasa = 1.81
        var Dcasa = 0.78
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ecu"
    }
    else if(PELcasa=="PAR"){//Paraguai
        var Pcasa = 67.8
        var Acasa = 1.84
        var Dcasa = 0.82
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/par"
    }
    else if(PELcasa=="VEN"){//Venezuela
        var Pcasa = 67.8
        var Acasa = 1.84
        var Dcasa = 0.82
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ven"
    }
    else if(PELcasa=="BOL"){//Bolívia
        var Pcasa = 52.93
        var Acasa = 1.47
        var Dcasa = 1.13
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/bol"
    }
    else if(PELcasa=="AUT"){//Austria
        var Pcasa = 74.48
        var Acasa = 2.06
        var Dcasa = 0.70
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/aut"
    }
    else if(PELcasa=="UKR"){//Ucrânia
        var Pcasa = 72.58
        var Acasa = 1.95
        var Dcasa = 0.71
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ukr"
    }
    else if(PELcasa=="ALG"){//Argélia
        var Pcasa = 70.27
        var Acasa = 1.96
        var Dcasa = 0.81
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/alg"
    }
    else if(PELcasa=="GHA"){//Gana
        var Pcasa = 69.93
        var Acasa = 1.64
        var Dcasa = 0.58
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/gha"
    }
    else if(PELcasa=="NOR"){//Noruega
        var Pcasa = 68.99
        var Acasa = 1.87
        var Dcasa = 0.80
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/nor"
    }
    else if(PELcasa=="CZE"){//Tchéquia
        var Pcasa = 68.53
        var Acasa = 1.92
        var Dcasa = 0.86
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/cze"
    }
    else if(PELcasa=="TUR"){//Turquia
        var Pcasa = 68.43
        var Acasa = 1.90
        var Dcasa = 0.84
        document.getElementById('ESCcasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/tur"
    }
    else if(PELcasa=="gerEIN"){//Eintracht Frankfurt
        var Pcasa = 72.66
        var Acasa = 2
        var Dcasa = 0.79
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/0/04/Eintracht_Frankfurt_Logo.svg"
    }
    else if(PELcasa=="spaRSO"){//Real Sociedad
        var Pcasa = 76.33
        var Acasa = 2.07
        var Dcasa = 0.67
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/6/6a/Real_Sociedad_logo.png"
    }
    else if(PELcasa=="spaBIL"){//Athletic Bilbao
        var Pcasa = 75.44
        var Acasa = 1.8
        var Dcasa = 0.53
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/d/d2/Club_Athletic_Bilbao_logo.png"
    }
    else if(PELcasa=="spaGET"){//Getafe
        var Pcasa = 74.87
        var Acasa = 1.88
        var Dcasa = 0.61
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/de/d/de/Getafe_CF.svg"
    }
    else if(PELcasa=="spaVAL"){//Valencia
        var Pcasa = 74.32
        var Acasa = 2.13
        var Dcasa = 0.80
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/c/ce/Valenciacf.svg"
    }
    else if(PELcasa=="argBAN"){//Banfield
        var Pcasa = 45.36
        var Acasa = 1.16
        var Dcasa = 1.16
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/1/16/CA_Banfield_%282014%29.svg"
    }
    else if(PELcasa=="argSLO"){//San Lorenzo
        var Pcasa = 45.18
        var Acasa = 1.18
        var Dcasa = 1.19
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/7/77/Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.svg"
    }
    else if(PELcasa=="spaVIL"){//Villarreal
        var Pcasa = 73.74
        var Acasa = 2.12
        var Dcasa = 0.82
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/7/70/Villarreal_CF_logo.svg"
    }
    else if(PELcasa=="spaEIB"){//Eibar
        var Pcasa = 73.46
        var Acasa = 1.87
        var Dcasa = 0.66
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/de/a/ab/Eibar.svg"
    }
    else if(PELcasa=="spaOSA"){//Osasuna
        var Pcasa = 69.25
        var Acasa = 1.72
        var Dcasa = 0.72
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/3/39/CA_Osasuna.png"
    }
    else if(PELcasa=="spaGRA"){//Granada
        var Pcasa = 69.13
        var Acasa = 1.76
        var Dcasa = 0.75
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/9/9a/Granada_FC_logo.png"
    }
    else if(PELcasa=="spaBET"){//Real Betis
        var Pcasa = 68.7
        var Acasa = 1.93
        var Dcasa = 0.91
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/fr/1/13/Real_betis_logo.svg"
    }
    else if(PELcasa=="spaLEG"){//Leganes
        var Pcasa = 68.09
        var Acasa = 1.61
        var Dcasa = 0.68
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/fr/4/46/Logo_CD_Legan%C3%A9s.svg"
    }
    else if(PELcasa=="spaCEL"){//Celta de Vigo
        var Pcasa = 66.63
        var Acasa = 1.81
        var Dcasa = 0.89
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/fr/b/b7/Logo_RC_Celta_Vigo.svg"
    }
    else if(PELcasa=="spaESP"){//Espanyol
        var Pcasa = 66.52
        var Acasa = 1.76
        var Dcasa = 0.86
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/2/29/Rcd_espanyol_logo.png"
    }
    else if(PELcasa=="spaALA"){//Alavés
        var Pcasa = 65.02
        var Acasa = 1.59
        var Dcasa = 0.78
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/4/44/Deportivo_Alav%C3%A9s.png"
    }
    else if(PELcasa=="spaLEV"){//Levante
        var Pcasa = 64.72
        var Acasa = 1.94
        var Dcasa = 1.08
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/e/e7/Levante_logo2014.svg"
    }
    else if(PELcasa=="spaRVA"){//Real Valladolid
        var Pcasa = 64.35
        var Acasa = 1.66
        var Dcasa = 0.86
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/0/00/RealValladolid_Logo2014.svg"
    }
    else if(PELcasa=="spaMAL"){//Mallorca
        var Pcasa = 61.7
        var Acasa = 1.66
        var Dcasa = 0.97
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/1/1d/RCD_Mallorca.png"
    }
    else if(PELcasa=="engLUFC"){//Leeds
        var Pcasa = 67.62
        var Acasa = 1.78
        var Dcasa = 0.83
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/de/d/de/Leeds_United.svg"
    }
    else if(PELcasa=="usaLAFC"){//Los Angeles FC
        var Pcasa = 60.7
        var Acasa = 2.04
        var Dcasa = 1.34
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/it/8/89/Los_Angeles_Football_Club_logo.svg"
    }
    else if(PELcasa=="usaATL"){//Atlanta United FC
        var Pcasa = 48.61
        var Acasa = 1.53
        var Dcasa = 1.41
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/b/bb/Atlanta_MLS.svg"
    }
    else if(PELcasa=="usaNYC"){//New York City FC
        var Pcasa = 47.8
        var Acasa = 1.52
        var Dcasa = 1.44
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/f/f9/New_York_City_FC.svg"
    }
    else if(PELcasa=="usaPHI"){//Philadelphia Union
        var Pcasa = 45.98
        var Acasa = 1.49
        var Dcasa = 1.49
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/f/f3/Philadelphia_Union.png"
    }
    else if(PELcasa=="braSPO"){//Sport Recife (w)
        var Pcasa = 37.8
        var Acasa = 1.1
        var Dcasa = 1.3
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/1/17/Sport_Club_do_Recife.png"
    }
    else if(PELcasa=="braAMG"){//América Mineiro (2018)
        var Pcasa = 43.6
        var Acasa = 1.1
        var Dcasa = 1.2
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Escudo_do_America_Futebol_Clube.svg"
    }
    else if(PELcasa=="braCTB"){//Coritiba (2017)
        var Pcasa = 43.2
        var Acasa = 1.2
        var Dcasa = 1.3
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/3/38/Coritiba_FBC_%282011%29_-_PR.svg"
    }
    else if(PELcasa=="braAAPP"){//Ponte Preta (2017)
        var Pcasa = 38.9
        var Acasa = 1.1
        var Dcasa = 1.3
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Escudo_Oficial_Ponte_Preta.png"
    }
    else if(PELcasa=="braPAR"){//Paraná (2018)
        var Pcasa = 33.2
        var Acasa = 0.9
        var Dcasa = 1.4
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/0/07/Parana_Clube.png"
    }
    else if(PELcasa=="braVIT"){//Vitória (w)
        var Pcasa = 29.8
        var Acasa = 1.1
        var Dcasa = 1.5
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/3/34/Esporte_Clube_Vit%C3%B3ria_logo.png"
    }
    else if(PELcasa=="braAGO"){//Atlético Goianiense (2017)
        var Pcasa = 40.6
        var Acasa = 1.1
        var Dcasa = 1.3
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/f/f3/AtleticoGO2017.png"
    }
    else if(PELcasa=="usaGAL"){//LA Galaxy
        var Pcasa = 42.04
        var Acasa = 1.71
        var Dcasa = 1.93
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/fr/b/b1/Logo_Los_Angeles_Galaxy.svg"
    }
    else if(PELcasa=="canTOR"){//Toronto
        var Pcasa = 43.62
        var Acasa = 1.47
        var Dcasa = 1.58
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/8/8f/Toronto_FC.png"
    }
    else if(PELcasa=="usaNYRB"){//New York Red Bulls
        var Pcasa = 43.51
        var Acasa = 1.43
        var Dcasa = 1.54
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/5/54/Red_Bull_New_York.PNG"
    }
    else if(PELcasa=="usaCHI"){//Chicago Fire
        var Pcasa = 43.06
        var Acasa = 1.37
        var Dcasa = 1.49
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/9/96/Chicago_Fire_SC.png"
    }
    else if(PELcasa=="usaSJE"){//San Jose Earthquakes
        var Pcasa = 40.81
        var Acasa = 1.42
        var Dcasa = 1.66
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/3/3a/SJ_Earthquakes.png"
    }
    else if(PELcasa=="usaSEA"){//Seattle Sounders
        var Pcasa = 40.61
        var Acasa = 1.32
        var Dcasa = 1.55
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/7/7c/Seattle_Sounders_FC.png"
    }
    else if(PELcasa=="usaPOR"){//Portland Timbers
        var Pcasa = 40.29
        var Acasa = 1.42
        var Dcasa = 1.69
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/5/5e/Portland_Timbers.png"
    }
    else if(PELcasa=="usaSPO"){//Sporting KC
        var Pcasa = 39.93
        var Acasa = 1.4
        var Dcasa = 1.69
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/f/fc/Sporting_Kansas_City.png"
    }
    else if(PELcasa=="usaMIN"){//Minnesota United FC
        var Pcasa = 39.02
        var Acasa = 1.29
        var Dcasa = 1.61
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/7/74/Minnesota.png"
    }
    else if(PELcasa=="usaDAL"){//FC Dallas
        var Pcasa = 38.32
        var Acasa = 1.24
        var Dcasa = 1.58
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/c/cb/FC_Dallas.png"
    }
    else if(PELcasa=="usaCREW"){//Columbus Crew
        var Pcasa = 37.48
        var Acasa = 1.13
        var Dcasa = 1.48
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/b/b1/Columbus_Crew_SC.png"
    }
    else if(PELcasa=="usaRSL"){//Real Salt Lake
        var Pcasa = 37.3
        var Acasa = 1.03
        var Dcasa = 1.37
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/0/0f/Real_Salt_Lake.png"
    }
    else if(PELcasa=="usaNER"){//New England Revolution
        var Pcasa = 36.89
        var Acasa = 1.36
        var Dcasa = 1.79
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/f/f6/NewEnglandRevolution.png"
    }
    else if(PELcasa=="usaCOL"){//Colorado Rapids
        var Pcasa = 36.37
        var Acasa = 1.35
        var Dcasa = 1.81
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/1/11/Colorado_Rapids.png"
    }
    else if(PELcasa=="usaDCU"){//DC United
        var Pcasa = 34.45
        var Acasa = 1.13
        var Dcasa = 1.64
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/8/8a/DC_United_First_Logo.png"
    }
    else if(PELcasa=="usaORL"){//Orlando City SC
        var Pcasa = 33.6
        var Acasa = 1.15
        var Dcasa = 1.71
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/8/87/Orlando_City_2012.svg.png"
    }
    else if(PELcasa=="usaHOU"){//Houston Dynamo
        var Pcasa = 34.88
        var Acasa = 1.21
        var Dcasa = 1.71
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/0/0c/Houston_Dynamo_logo.svg"
    }
    else if(PELcasa=="canMON"){//Montreal Impact
        var Pcasa = 30.51
        var Acasa = 1.09
        var Dcasa = 1.81
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/fr/7/70/Logo_Impact_de_Montr%C3%A9al_%28MLS%29.svg"
    }
    else if(PELcasa=="canVAN"){//Vancouver Whitecaps
        var Pcasa = 24.95
        var Acasa = 0.96
        var Dcasa = 1.97
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Vancouver_Whitecaps_FC_logo.svg"
    }
    else if(PELcasa=="usaCIN"){//FC Cincinnati
        var Pcasa = 22.16
        var Acasa = 0.87
        var Dcasa = 2.02
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/0/08/FC_Cincinnati.png"
    }
    else if(PELcasa=="CAN"){//Canadá
        var Pcasa = 57.25
        var Acasa = 1.7
        var Dcasa = 1.16
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/6/69/Canadian_Soccer_Association_logo.svg"
    }
    else if(PELcasa=="braRBB"){//Red Bull Brasil
        var Pcasa = 41.58
        var Acasa = 1.1
        var Dcasa = 1.5
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/9/94/Red_Bull_Brasil.png"
    }
    else if(PELcasa=="ITA"){//Itália
        var Pcasa = 81.95
        var Acasa = 2.26
        var Dcasa = 0.49
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/3/33/FIGC_Logo_2017.svg"
    }
    else if(PELcasa=="HAI"){//Haiti
        var Pcasa = 51.6
        var Acasa = 1.47
        var Dcasa = 1.19
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/fr/1/1f/Haitifootballlogo.png"
    }
    else if(PELcasa=="NZL"){//Nova Zelânia
        var Pcasa = 51.6
        var Acasa = 1.47
        var Dcasa = 1.19
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/6/6b/New_Zealand_Football.svg"
        molduradefora.style.backgroundColor = "#ffffff00"
    }
    else if(PELcasa=="QAT"){//Qatar
        var Pcasa = 58.07
        var Acasa = 1.6
        var Dcasa = 1.03
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/fr/3/39/Football_Qatar_federation.svg"
    }
    else if(PELcasa=="nedAJA"){//Ajax
        var Pcasa = 83.89
        var Acasa = 3.01
        var Dcasa = 0.89
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/b/b8/AFC_Ajax_Amsterdam.svg"
    }
    else if(PELcasa=="autRBS"){//Red Bull Salzburg
        var Pcasa = 83.89
        var Acasa = 3.01
        var Dcasa = 0.89
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/2/24/Red_Bull_Salzburg.png"
    }
    else if(PELcasa=="rusZEN"){//Zenit
        var Pcasa = 75.7
        var Acasa = 2.03
        var Dcasa = 0.68
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/commons/e/ef/FK_Zenit_St_Peterburg.svg"
        //molduradefora.style.backgroundColor = "#00000000"
    }
    else if(PELcasa=="nedPSV"){//PSV
        var Pcasa = 74.54
        var Acasa = 2.35
        var Dcasa = 0.95
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/sco/0/05/PSV_Eindhoven.svg"
    }
    else if(PELcasa=="NED"){//Holanda
        var Pcasa = 86.15
        var Acasa = 2.79
        var Dcasa = 0.58
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/en/a/a1/Royal_Netherlands_Football_Association_Logo.svg"
    }
    else if(PELcasa=="engSUN"){//Sunderland
        var Pcasa = 35.0
        var Acasa = 1.23
        var Dcasa = 1.61
        document.getElementById('ESCcasa').src="https://upload.wikimedia.org/wikipedia/pt/0/01/Sunderland_AFC.png"
    }
    else{
        var Pcasa = 5.29
        var Acasa = 0.2
        var Dcasa = 2.51
        document.getElementById('ESCcasa').src="https://uploaddeimagens.com.br/images/002/397/523/full/maraboys.png?1570224665"
    }
    
    //Termina a seleção de equipes mandantes e começa o de equipes visitantes

    if(PELfora=="usaGAL"){//LA Galaxy
        var Pfora = 42.04
        var Afora = 1.71
        var Dfora = 1.93
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/fr/b/b1/Logo_Los_Angeles_Galaxy.svg"
    }
    else if(PELfora=="engSUN"){//Sunderland
        var Pfora = 35.0
        var Afora = 1.23
        var Dfora = 1.61
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/0/01/Sunderland_AFC.png"
    }
    else if(PELfora=="NED"){//Holanda
        var Pfora = 86.15
        var Afora = 2.79
        var Dfora = 0.58
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/a/a1/Royal_Netherlands_Football_Association_Logo.svg"
    }
    else if(PELfora=="nedPSV"){//PSV
        var Pfora = 74.54
        var Afora = 2.35
        var Dfora = 0.95
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/0/05/PSV_Eindhoven.svg"
    }
    else if(PELfora=="rusZEN"){//Zenit
        var Pfora = 75.7
        var Afora = 2.03
        var Dfora = 0.68
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/e/ef/FK_Zenit_St_Peterburg.svg"
        //molduradefora.style.backgroundColor = "#00000000"
    }
    else if(PELfora=="autRBS"){//Red Bull Salzburg
        var Pfora = 83.89
        var Afora = 3.01
        var Dfora = 0.89
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/2/24/Red_Bull_Salzburg.png"
    }
    else if(PELfora=="nedAJA"){//Ajax
        var Pfora = 83.89
        var Afora = 3.01
        var Dfora = 0.89
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/b/b8/AFC_Ajax_Amsterdam.svg"
    }
    else if(PELfora=="QAT"){//Qatar
        var Pfora = 58.07
        var Afora = 1.6
        var Dfora = 1.03
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/fr/3/39/Football_Qatar_federation.svg"
    }
    else if(PELfora=="NZL"){//Nova Zelânia
        var Pfora = 51.6
        var Afora = 1.47
        var Dfora = 1.19
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/6/6b/New_Zealand_Football.svg"
        molduradefora.style.backgroundColor = "#ffffff00"
    }
    else if(PELfora=="HAI"){//Haiti
        var Pfora = 51.6
        var Afora = 1.47
        var Dfora = 1.19
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/fr/1/1f/Haitifootballlogo.png"
    }
    else if(PELfora=="ITA"){//Itália
        var Pfora = 81.95
        var Afora = 2.26
        var Dfora = 0.49
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/3/33/FIGC_Logo_2017.svg"
    }
    else if(PELfora=="braRBB"){//Red Bull Brasil
        var Pfora = 41.58
        var Afora = 1.1
        var Dfora = 1.5
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/9/94/Red_Bull_Brasil.png"
    }
    else if(PELfora=="CAN"){//Canadá
        var Pfora = 57.25
        var Afora = 1.7
        var Dfora = 1.16
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/6/69/Canadian_Soccer_Association_logo.svg"
    }
    else if(PELfora=="usaCIN"){//FC Cincinnati
        var Pfora = 22.16
        var Afora = 0.87
        var Dfora = 2.02
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/0/08/FC_Cincinnati.png"
    }
    else if(PELfora=="canVAN"){//Vancouver Whitecaps
        var Pfora = 24.95
        var Afora = 0.96
        var Dfora = 1.97
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Vancouver_Whitecaps_FC_logo.svg"
    }
    else if(PELfora=="canMON"){//Montreal Impact
        var Pfora = 30.51
        var Afora = 1.09
        var Dfora = 1.81
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/fr/7/70/Logo_Impact_de_Montr%C3%A9al_%28MLS%29.svg"
    }
    else if(PELfora=="usaHOU"){//Houston Dynamo
        var Pfora = 34.88
        var Afora = 1.21
        var Dfora = 1.71
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/0/0c/Houston_Dynamo_logo.svg"
    }
    else if(PELfora=="usaORL"){//Orlando City SC
        var Pfora = 33.6
        var Afora = 1.15
        var Dfora = 1.71
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/8/87/Orlando_City_2012.svg.png"
    }
    else if(PELfora=="usaDCU"){//DC United
        var Pfora = 34.45
        var Afora = 1.13
        var Dfora = 1.64
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/8/8a/DC_United_First_Logo.png"
    }
    else if(PELfora=="usaCOL"){//Colorado Rapids
        var Pfora = 36.37
        var Afora = 1.35
        var Dfora = 1.81
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/1/11/Colorado_Rapids.png"
    }
    else if(PELfora=="usaNER"){//New England Revolution
        var Pfora = 36.89
        var Afora = 1.36
        var Dfora = 1.79
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/f/f6/NewEnglandRevolution.png"
    }
    else if(PELfora=="usaRSL"){//Real Salt Lake
        var Pfora = 37.3
        var Afora = 1.03
        var Dfora = 1.37
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/0/0f/Real_Salt_Lake.png"
    }
    else if(PELfora=="usaCREW"){//Columbus Crew
        var Pfora = 37.48
        var Afora = 1.13
        var Dfora = 1.48
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/b/b1/Columbus_Crew_SC.png"
    }
    else if(PELfora=="usaDAL"){//FC Dallas
        var Pcasa = 38.32
        var Afora = 1.24
        var Dfora = 1.58
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/c/cb/FC_Dallas.png"
    }
    else if(PELfora=="usaMIN"){//Minnesota United FC
        var Pfora = 39.02
        var Afora = 1.29
        var Dfora = 1.61
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/7/74/Minnesota.png"
    }
    else if(PELfora=="usaSPO"){//Sporting KC
        var Pfora = 39.93
        var Afora = 1.4
        var Dfora = 1.69
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/f/fc/Sporting_Kansas_City.png"
    }
    else if(PELfora=="usaPOR"){//Portland Timbers
        var Pfora = 40.29
        var Afora = 1.42
        var Dfora = 1.69
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/5/5e/Portland_Timbers.png"
    }
    else if(PELfora=="usaSEA"){//Seattle Sounders
        var Pfora = 40.61
        var Afora = 1.32
        var Dfora = 1.55
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/7/7c/Seattle_Sounders_FC.png"
    }
    else if(PELfora=="usaSJE"){//San Jose Earthquakes
        var Pfora = 40.81
        var Afora = 1.42
        var Dfora = 1.66
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/3/3a/SJ_Earthquakes.png"
    }
    else if(PELfora=="usaCHI"){//Chicago Fire
        var Pfora = 43.06
        var Afora = 1.37
        var Dfora = 1.49
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/9/96/Chicago_Fire_SC.png"
    }
    else if(PELfora=="usaNYRB"){//New York Red Bulls
        var Pfora = 43.51
        var Afora = 1.43
        var Dfora = 1.54
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/5/54/Red_Bull_New_York.PNG"
    }
    else if(PELfora=="canTOR"){//Toronto
        var Pfora = 43.62
        var Afora = 1.47
        var Dfora = 1.58
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/8/8f/Toronto_FC.png"
    }
    else if(PELfora=="gerEIN"){//Eintracht Frankfurt
        var Pfora = 72.66
        var Afora = 2
        var Dfora = 0.79
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/0/04/Eintracht_Frankfurt_Logo.svg"
    }
    else if(PELfora=="braAGO"){//Atlético Goianiense (2017)
        var Pfora = 40.6
        var Afora = 1.1
        var Dfora = 1.3
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/f/f3/AtleticoGO2017.png"
    }
    else if(PELfora=="braVIT"){//Vitória (w)
        var Pfora = 29.80
        var Afora = 1.1
        var Dfora = 1.5
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/3/34/Esporte_Clube_Vit%C3%B3ria_logo.png"
    }
    else if(PELfora=="braPAR"){//Paraná (2018)
        var Pfora = 33.2
        var Afora = 0.9
        var Dfora = 1.4
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/0/07/Parana_Clube.png"
    }
    else if(PELfora=="braAAPP"){//Ponte Preta (2017)
        var Pfora = 38.9
        var Afora = 1.1
        var Dfora = 1.3
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Escudo_Oficial_Ponte_Preta.png"
    }
    else if(PELfora=="braCTB"){//Coritiba (2017)
        var Pfora = 43.2
        var Afora = 1.2
        var Dfora = 1.3
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/3/38/Coritiba_FBC_%282011%29_-_PR.svg"
    }
    else if(PELfora=="braAMG"){//América Mineiro (2018)
        var Pfora = 43.6
        var Afora = 1.1
        var Dfora = 1.2
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Escudo_do_America_Futebol_Clube.svg"
    }
    else if(PELfora=="braSPO"){//Sport Recife (w)
        var Pfora = 37.8
        var Afora = 1.1
        var Dfora = 1.3
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/1/17/Sport_Club_do_Recife.png"
    }
    else if(PELfora=="usaPHI"){//Philadelphia Union
        var Pfora = 45.98
        var Afora = 1.49
        var Dfora = 1.49
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/f/f3/Philadelphia_Union.png"
    }
    else if(PELfora=="usaNYC"){//New York City FC
        var Pfora = 47.8
        var Afora = 1.52
        var Dfora = 1.44
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/f/f9/New_York_City_FC.svg"
    }
    else if(PELfora=="usaATL"){//Atlanta United FC
        var Pfora = 48.61
        var Afora = 1.53
        var Dfora = 1.41
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/b/bb/Atlanta_MLS.svg"
    }
    else if(PELfora=="usaLAFC"){//Los Angeles FC
        var Pfora = 60.7
        var Afora = 2.04
        var Dfora = 1.34
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/it/8/89/Los_Angeles_Football_Club_logo.svg"
    }
    else if(PELfora=="engLUFC"){//Leeds
        var Pfora = 67.62
        var Afora = 1.78
        var Dfora = 0.83
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/de/d/de/Leeds_United.svg"
    }
    else if(PELfora=="spaMAL"){//Mallorca
        var Pfora = 61.7
        var Afora = 1.66
        var Dfora = 0.97
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/1/1d/RCD_Mallorca.png"
    }
    else if(PELfora=="spaRVA"){//Real Valladolid
        var Pfora = 64.35
        var Afora = 1.66
        var Dfora = 0.86
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/0/00/RealValladolid_Logo2014.svg"
    }
    else if(PELfora=="spaLEV"){//Levante
        var Pfora = 64.72
        var Afora = 1.94
        var Dfora = 1.08
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/e/e7/Levante_logo2014.svg"
    }
    else if(PELfora=="spaALA"){//Alavés
        var Pfora = 65.02
        var Afora = 1.59
        var Dfora = 0.78
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/4/44/Deportivo_Alav%C3%A9s.png"
    }
    else if(PELfora=="spaESP"){//Espanyol
        var Pfora = 66.52
        var Afora = 1.76
        var Dfora = 0.86
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/2/29/Rcd_espanyol_logo.png"
    }
    else if(PELfora=="spaCEL"){//Celta de Vigo
        var Pfora = 66.63
        var Afora = 1.81
        var Dfora = 0.89
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/fr/b/b7/Logo_RC_Celta_Vigo.svg"
    }
    else if(PELfora=="spaLEG"){//Leganes
        var Pfora = 68.09
        var Afora = 1.61
        var Dfora = 0.68
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/fr/4/46/Logo_CD_Legan%C3%A9s.svg"
    }
    else if(PELfora=="spaBET"){//Real Betis
        var Pfora = 68.7
        var Afora = 1.93
        var Dfora = 0.91
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/fr/1/13/Real_betis_logo.svg"
    }
    else if(PELfora=="spaGRA"){//Granada
        var Pfora = 69.13
        var Afora = 1.76
        var Dfora = 0.75
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/9/9a/Granada_FC_logo.png"
    }
    else if(PELfora=="spaOSA"){//Osasuna
        var Pfora = 69.25
        var Afora = 1.72
        var Dfora = 0.72
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/3/39/CA_Osasuna.png"
    }
    else if(PELfora=="spaEIB"){//Eibar
        var Pfora = 73.46
        var Afora = 1.87
        var Dfora = 0.66
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/de/a/ab/Eibar.svg"
    }
    else if(PELfora=="spaVIL"){//Villarreal
        var Pfora = 73.74
        var Afora = 2.12
        var Dfora = 0.82
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/7/70/Villarreal_CF_logo.svg"
    }
    else if(PELfora=="argSLO"){//San Lorenzo
        var Pfora = 45.18
        var Afora = 1.18
        var Dfora = 1.19
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/7/77/Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.svg"
    }
    else if(PELfora=="argBAN"){//Banfield
        var Pfora = 45.36
        var Afora = 1.16
        var Dfora = 1.16
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/1/16/CA_Banfield_%282014%29.svg"
    }
    else if(PELfora=="spaVAL"){//Valencia
        var Pfora = 74.32
        var Afora = 2.13
        var Dfora = 0.80
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/c/ce/Valenciacf.svg"
    }
    else if(PELfora=="spaGET"){//Getafe
        var Pfora = 74.87
        var Afora = 1.88
        var Dfora = 0.61
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/de/d/de/Getafe_CF.svg"
    }
    else if(PELfora=="spaBIL"){//Athletic Bilbao
        var Pfora = 75.44
        var Afora = 1.8
        var Dfora = 0.53
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/d/d2/Club_Athletic_Bilbao_logo.png"
    }
    else if(PELfora=="spaRSO"){//Real Sociedad
        var Pfora = 76.33
        var Afora = 2.07
        var Dfora = 0.67
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/6/6a/Real_Sociedad_logo.png"
    }
    else if(PELfora=="braCAM"){//Atlético Mineiro
        var Pfora = 53.3
        var Afora = 1.5
        var Dfora = 1.1
        document.getElementById('ESCfora').src = "https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-256.png"
    }
    else if(PELfora=="TUR"){//Turquia
        var Pfora = 68.43
        var Afora = 1.90
        var Dfora = 0.84
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/tur"
    }
    else if(PELfora=="CZE"){//Tchéquia
        var Pfora = 68.53
        var Afora = 1.92
        var Dfora = 0.86
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/cze"
    }
    else if(PELfora=="NOR"){//Noruega
        var Pfora = 68.99
        var Afora = 1.87
        var Dfora = 0.80
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/nor"
    }
    else if(PELfora=="GHA"){//Gana
        var Pfora = 69.93
        var Afora = 1.64
        var Dfora = 0.58
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/gha"
    }
    else if(PELfora=="ALG"){//Argélia
        var Pfora = 70.27
        var Afora = 1.96
        var Dfora = 0.81
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/alg"
    }
    else if(PELfora=="UKR"){//Ucrânia
        var Pfora = 72.58
        var Afora = 1.95
        var Dfora = 0.71
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ukr"
    }
    else if(PELfora=="AUT"){//Austria
        var Pfora = 74.48
        var Afora = 2.06
        var Dfora = 0.70
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/aut"
    }
    else if(PELfora=="BOL"){//Bolívia
        var Pfora = 52.93
        var Afora = 1.47
        var Dfora = 1.13
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/bol"
    }
    else if(PELfora=="VEN"){//Venezuela
        var Pfora = 67.8
        var Afora = 1.84
        var Dfora = 0.82
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ven"
    }
    else if(PELfora=="PAR"){//Paraguai
        var Pfora = 67.8
        var Afora = 1.84
        var Dfora = 0.82
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/par"
    }
    else if(PELfora=="ECU"){//Equador
        var Pfora = 68.42
        var Afora = 1.81
        var Dfora = 0.78
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ecu"
    }
    else if(PELfora=="CHI"){//Chile
        var Pfora = 76.14
        var Afora = 2.16
        var Dfora = 0.69
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Logo_Federaci%C3%B3n_de_F%C3%BAtbol_de_Chile.png"
    }
    else if(PELfora=="braCAP"){//Athletico Paranaense
        var Pfora = 57.2
        var Afora = 1.5
        var Dfora = 1.0
        document.getElementById('ESCfora').src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/CA_Paranaense.svg/240px-CA_Paranaense.svg.png"
    }
    else if(PELfora=="braAVA"){//Avaí
        var Pfora = 39.4
        var Afora = 1.0
        var Dfora = 1.2
        document.getElementById('ESCfora').src ="https://upload.wikimedia.org/wikipedia/commons/f/fe/Avai_FC_%2805-E%29_-_SC.svg"
    }
    else if(PELfora=="braBAH"){//Bahia
        var Pfora = 56.6
        var Afora = 1.3
        var Dfora = 0.9
        document.getElementById('ESCfora').src = "https://cdn.worldvectorlogo.com/logos/esporte-clube-bahia-de-salvador-ba.svg"
    }
    else if(PELfora=="braBOT"){//Botafogo
        var Pfora = 42.8
        var Afora = 1.1
        var Dfora = 1.2
        document.getElementById('ESCfora').src = "https://logodetimes.com/times/botafogo/logo-botafogo-256.png"
    }
    else if(PELfora=="braCEA"){//Ceará
        var Pfora = 47.7
        var Afora = 1.2
        var Dfora = 1.1
        document.getElementById('ESCfora').src = "https://logodetimes.com/times/ceara/logo-ceara-256.png"
    }
    else if(PELfora=="braCHA"){//Chapecoense
        var Pfora = 41.8
        var Afora = 1.1
        var Dfora = 1.2
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/6/61/S%C3%ADmbolo_Chapecoense_sem_estrelas.svg"
    }
    else if(PELfora=="braCOR"){//Corinthians
        var Pfora = 56.3
        var Afora = 1.2
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://s.glbimg.com/es/sde/f/equipes/2018/03/10/corinthians.svg"
    }
    else if(PELfora=="braCRU"){//Cruzeiro
        var Pfora = 49.8
        var Afora = 1.3
        var Dfora = 1.1
        document.getElementById('ESCfora').src="https://cdn.worldvectorlogo.com/logos/cruzeiro.svg"
    }
    else if(PELfora=="braCSA"){//CSA
        var Pfora = 35.1
        var Afora = 1.0
        var Dfora = 1.4
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/6/64/CSA_logo.png"
    }
    else if(PELfora=="braFLA"){//Flamengo
        var Pfora = 72.3
        var Afora = 2.0
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg"
    }
    else if(PELfora=="braFLU"){//Fluminense
        var Pfora = 48.5
        var Afora = 1.4
        var Dfora = 1.2
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/de/1/12/Fluminense_Football_Club.svg"
    }
    else if(PELfora=="braFOR"){//Fortaleza
        var Pfora = 43.7
        var Afora = 1.2
        var Dfora = 1.3
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Fortaleza_Esporte_Clube_logo.svg"
    }
    else if(PELfora=="braGOI"){//Goiás
        var Pfora = 40.7
        var Afora = 1.1
        var Dfora = 1.3
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/7/71/Goias_Esporte_Clube_inverted_logo.svg"
    }
    else if(PELfora=="braGRE"){//Grêmio
        var Pfora = 65.6
        var Afora = 1.8
        var Dfora = 0.9
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/f/f1/Gremio.svg"
    }
    else if(PELfora=="braINT"){//Internacional
        var Pfora = 55.9
        var Afora = 1.4
        var Dfora = 1.0
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Escudo_do_Sport_Club_Internacional.svg"
    }
    else if(PELfora=="braPAL"){//Palmeiras
        var Pfora = 69.0
        var Afora = 1.7
        var Dfora = 0.7
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg"
    }
    else if(PELfora=="braSAN"){//Santos
        var Pfora = 60.6
        var Afora = 1.6
        var Dfora = 0.9
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/3/35/Santos_logo.svg"
    }
    else if(PELfora=="braSPFC"){//São Paulo
        var Pfora = 57.4
        var Afora = 1.3
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg"
    }
    else if(PELfora=="braVAS"){//Vasco
        var Pfora = 50.1
        var Afora = 1.4
        var Dfora = 1.2
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/1/1a/ClubDeRegatasVascoDaGama.svg"
    }
    else if(PELfora=="engARS"){//Arsenal
        var Pfora = 79.3
        var Afora = 2.4
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/5/53/Arsenal_FC.svg"
    }
    else if(PELfora=="engAST"){//Aston Villa
        var Pfora = 64.1
        var Afora = 1.7
        var Dfora = 0.9
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/1/15/Aston_Villa.svg"
    }
    else if(PELfora=="engBOU"){//Bournemouth
        var Pfora = 68.5
        var Afora = 2.1
        var Dfora = 1.0
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/e/e5/AFC_Bournemouth_%282013%29.svg"
    }
    else if(PELfora=="engBRI"){//Brighton
        var Pfora = 65.8
        var Afora = 1.7
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg"
    }
    else if(PELfora=="engBUR"){//Burnley
        var Pfora = 69.8
        var Afora = 1.9
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/0/07/BurnleyFC_logo2014.gif"
    }
    else if(PELfora=="engCHE"){//Chelsea
        var Pfora = 85.0
        var Afora = 2.5
        var Dfora = 0.5
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/c/cc/Chelsea_FC.svg"
    }
    else if(PELfora=="engCRY"){//Crystal Palace
        var Pfora = 70.4
        var Afora = 1.9
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/0/0c/Crystal_Palace_FC_logo.svg"
    }
    else if(PELfora=="engEVE"){//Everton
        var Pfora = 76.8
        var Afora = 2.0
        var Dfora = 0.6
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/7/7c/Everton_FC_logo.svg"
    }
    else if(PELfora=="engLEI"){//Leicester
        var Pfora = 79.2
        var Afora = 2.0
        var Dfora = 0.5
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/2/2d/Leicester_City_crest.svg"
    }
    else if(PELfora=="engLIV"){//Liverpool
        var Pfora = 92.3
        var Afora = 2.9
        var Dfora = 0.3
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/0/0c/Liverpool_FC.svg"
    }
    else if(PELfora=="engMANC"){//Manchester City
        var Pfora = 95.8
        var Afora = 3.4
        var Dfora = 0.2
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/e/eb/Manchester_City_FC_badge.svg"
    }
    else if(PELfora=="engMANU"){//Manchester United
        var Pfora = 81.8
        var Afora = 2.2
        var Dfora = 0.5
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/7/7a/Manchester_United_FC_crest.svg"
    }
    else if(PELfora=="engNEW"){//Newcastle
        var Pfora = 65.8
        var Afora = 1.7
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/5/56/Newcastle_United_Logo.svg"
    }
    else if(PELfora=="engNOR"){//Norwich
        var Pfora = 63.2
        var Afora = 1.8
        var Dfora = 1.0
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/e/e2/Norwich_City_FC.png"
    }
    else if(PELfora=="engSHEU"){//Sheffield United
        var Pfora = 65.5
        var Afora = 1.7
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/3/39/SUFC_logo.svg"
    }
    else if(PELfora=="engSOU"){//Southampton
        var Pfora = 70.7
        var Afora = 1.9
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/c/c9/FC_Southampton.svg"
    }
    else if(PELfora=="engTOT"){//Tottenham
        var Pfora = 82.6
        var Afora = 2.4
        var Dfora = 0.6
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/b/b4/Tottenham_Hotspur.svg"
    }
    else if(PELfora=="engWAT"){//Watford
        var Pfora = 65.9
        var Afora = 2.0
        var Dfora = 1.0
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/e/e2/Watford.svg"
    }
    else if(PELfora=="engWHU"){//West Ham United
        var Pfora = 70.0
        var Afora = 2.0
        var Dfora = 0.9
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/c/c2/West_Ham_United_FC_logo.svg"
    }
    else if(PELfora=="engWOL"){//Wolves
        var Pfora = 71.9
        var Afora = 1.9
        var Dfora = 0.7
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg"
    }
    else if(PELfora=="itiATA"){//Atalanta
        var Pfora = 70.4
        var Afora = 2.0
        var Dfora = 0.9
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg"
    }
    else if(PELfora=="itiFIO"){//Fiorentina
        var Pfora = 69.8
        var Afora = 2.0
        var Dfora = 0.9
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/b/ba/ACF_Fiorentina_2.svg"
    }
    else if(PELfora=="itiINT"){//Internazionali
        var Pfora = 80.2
        var Afora = 2.2
        var Dfora = 0.6
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/8/89/FC_Internazionale_Milano_2014.svg"
    }
    else if(PELfora=="itiJUV"){//Juventus
        var Pfora = 87.3
        var Afora = 2.6
        var Dfora = 0.5
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg"
    }
    else if(PELfora=="itiLAZ"){//Lazio
        var Pfora = 72.0
        var Afora = 2.0
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/e/e4/SS_Lazio.svg"
    }
    else if(PELfora=="itiMIL"){//Milan
        var Pfora = 73.1
        var Afora = 2.0
        var Dfora = 0.7
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg"
    }
    else if(PELfora=="itiNAP"){//Napoli
        var Pfora = 82.3
        var Afora = 2.4
        var Dfora = 0.6
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/b/ba/SSC_Napoli.svg"
    }
    else if(PELfora=="itiROM"){//Roma
        var Pfora = 73.1
        var Afora = 2.1
        var Dfora = 0.9
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg"
    }
    else if(PELfora=="gerBAY"){//Bayern
        var Pfora = 93.7
        var Afora = 3.3
        var Dfora = 0.3
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg"
    }
    else if(PELfora=="gerDOR"){//Dortmund
        var Pfora = 84.4
        var Afora = 2.6
        var Dfora = 0.6
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg"
    }
    else if(PELfora=="gerHOF"){//Hoffenheim
        var Pfora = 81.1
        var Afora = 2.3
        var Dfora = 0.6
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Logo_TSG_Hoffenheim.svg"
    }
    else if(PELfora=="gerLEV"){//Leverkusen
        var Pfora = 71.6
        var Afora = 2.2
        var Dfora = 1.0
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/de/f/f7/Bayer_Leverkusen_Logo.svg"
    }
    else if(PELfora=="gerRBL"){//Red Bull Leipzig
        var Pfora = 81.4
        var Afora = 2.3
        var Dfora = 0.6
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/fr/0/04/RB_Leipzig_2014_logo.svg"
    }
    else if(PELfora=="gerSCH"){//Schalke 04
        var Pfora = 72.9
        var Afora = 2.0
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/6/6d/FC_Schalke_04_Logo.svg"
    }
    else if(PELfora=="gerWER"){//Werder Bremen
        var Pfora = 69.1
        var Afora = 2.0
        var Dfora = 1.0
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/b/be/SV-Werder-Bremen-Logo.svg"
    }
    else if(PELfora=="gerWOL"){//Wolfsburg
        var Pfora = 72.0
        var Afora = 1.9
        var Dfora = 0.7
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo-VfL-Wolfsburg.svg"
    }
    else if(PELfora=="spaATL"){//Atlético Madrid
        var Pfora = 84.9
        var Afora = 2.2
        var Dfora = 0.4
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/c/c1/Atletico_Madrid_logo.svg"
    }
    else if(PELfora=="catBAR"){//Barcelona
        var Pfora = 89.1
        var Afora = 2.8
        var Dfora = 0.4
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/4/47/FC_Barcelona_%28crest%29.svg"
    }
    else if(PELfora=="spaMAD"){//Real Madrid
        var Pfora = 85.8
        var Afora = 2.6
        var Dfora = 0.5
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/5/56/Real_Madrid_CF.svg"
    }
    else if(PELfora=="spaSEV"){//Sevilla
        var Pfora = 78.4
        var Afora = 2.1
        var Dfora = 0.6
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/fr/f/f1/Logo_Sevilla_FC.svg"
    }
    else if(PELfora=="porBEN"){//Benfica
        var Pfora = 76.0
        var Afora = 2.2
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/a/a2/SL_Benfica_logo.svg"
    }
    else if(PELfora=="porBRA"){//Braga
        var Pfora = 78.4
        var Afora = 2.1
        var Dfora = 0.6
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/f/f9/150px-Sporting_Clube_Braga.png"
    }
    else if(PELfora=="porPOR"){//Porto
        var Pfora = 78.4
        var Afora = 2.2
        var Dfora = 0.7
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/sco/f/f1/FC_Porto.svg"
    }
    else if(PELfora=="porSPO"){//Sporting
        var Pfora = 64.3
        var Afora = 1.8
        var Dfora = 1.0
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/3/3e/Sporting_Clube_de_Portugal.png"
    }
    else if(PELfora=="fraLIL"){//Lille
        var Pfora = 69.5
        var Afora = 1.8
        var Dfora = 0.7
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/fr/6/62/Logo_LOSC_Lille_2018.svg"
    }
    else if(PELfora=="fraOLY"){//Lyonnais, Olympique
        var Pfora = 72.1
        var Afora = 2.0
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/fr/e/e2/Olympique_lyonnais_%28logo%29.svg"
    }
    else if(PELfora=="fraMAR"){//Marseille
        var Pfora = 66.2
        var Afora = 1.7
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/fr/4/43/Logo_Olympique_de_Marseille.svg"
    }
    else if(PELfora=="fraPSG"){//Paris Saint-Germain
        var Pfora = 88.9
        var Afora = 2.7
        var Dfora = 0.4
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/fr/8/86/Paris_Saint-Germain_Logo.svg"
    }
    else if(PELfora=="argBOC"){//Boca Juniors
        var Pfora = 62.0
        var Afora = 1.5
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg"
    }
    else if(PELfora=="argIND"){//Independiente
        var Pfora = 49.3
        var Afora = 1.3
        var Dfora = 1.2
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/d/db/Escudo_del_Club_Atl%C3%A9tico_Independiente.svg"
    }
    else if(PELfora=="argNOB"){//Newell's Old Boys
        var Pfora = 47.7
        var Afora = 1.2
        var Dfora = 1.1
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/f/fc/CA_Newell%E2%80%99s_Old_Boys.svg"
    }
    else if(PELfora=="argRAC"){//Racing
        var Pfora = 51.2
        var Afora = 1.4
        var Dfora = 1.1
        document.getElementById('ESCfora').src="https://www.racingclub.com.ar/img/escudo.png"
    }
    else if(PELfora=="argRIV"){//River Plate
        var Pfora = 67.9
        var Afora = 1.9
        var Dfora = 0.9
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/6/69/Escudo_del_Club_Atl%C3%A9tico_River_Plate.svg"
    }
    else if(PELfora=="argVEL"){//Vélez Sarsfield
        var Pfora = 50.1
        var Afora = 1.3
        var Dfora = 1.1
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/2/21/Escudo_del_Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield.svg"
    }
    else if(PELfora=="GER"){//Alemanha
        var Pfora = 88.4
        var Afora = 3.1
        var Dfora = 0.6
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/de/a/a9/Deutscher_Fu%C3%9Fball-Bund_logo.svg"
    }
    else if(PELfora=="SAU"){//Arábia Saudita
        var Pfora = 51.9
        var Afora = 1.5
        var Dfora = 1.2
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ksa"
    }
    else if(PELfora=="ARG"){//Argentina
        var Pfora = 85.2
        var Afora = 2.6
        var Dfora = 0.5
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/f/fc/230px-Afa_logo.svg.png"
    }
    else if(PELfora=="AUS"){//Austrália
        var Pfora = 63.4
        var Afora = 1.8
        var Dfora = 1.0
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/6/69/Football_Federation_Australia_logo.svg.png"
    }
    else if(PELfora=="BEL"){//Bélgica
        var Pfora = 87.3
        var Afora = 3.0
        var Dfora = 0.6
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/bel"
    }
    else if(PELfora=="BRA"){//Brasil
        var Pfora = 93.1
        var Afora = 3.1
        var Dfora = 0.3
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/2/26/Escudo_CBF.png"
    }
    else if(PELfora=="COL"){//Colômbia
        var Pfora = 80.3
        var Afora = 2.1
        var Dfora = 0.5
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/6/61/Federacion_Colombiana_de_Futbol_logo.svg"
    }
    else if(PELfora=="KOR"){//Coréia do Sul
        var Pfora = 62.6
        var Afora = 1.7
        var Dfora = 0.9
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/4/4d/Emblem_of_Korea_Football_Association.svg"
    }
    else if(PELfora=="CRC"){//Costa Rica
        var Pfora = 65.1
        var Afora = 1.7
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/crc"
    }
    else if(PELfora=="CRO"){//Croácia
        var Pfora = 83.3
        var Afora = 2.6
        var Dfora = 0.6
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/3/39/Croatia_national_football_team_crest.svg"
    }
    else if(PELfora=="DEN"){//Dinamarca
        var Pfora = 73.2
        var Afora = 2.0
        var Dfora = 0.7
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/4/4f/Dansk_Boldspil-Union_logo.svg"
    }
    else if(PELfora=="EGY"){//Egito
        var Pfora = 58.9
        var Afora = 1.6
        var Dfora = 1.0
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/de/6/60/Egyptian_Football_Association.svg"
    }
    else if(PELfora=="SPA"){//Espanha
        var Pfora = 91.1
        var Afora = 3.3
        var Dfora = 0.5
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/3/31/Spain_National_Football_Team_badge.png"
    }
    else if(PELfora=="USA"){//Estados
        var Pfora = 69.75
        var Afora = 1.88
        var Dfora = 0.77
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/commons/8/86/Crest_of_the_United_States_Soccer_Federation.png"
    }
    else if(PELfora=="FRA"){//França
        var Pfora = 88.6
        var Afora = 2.9
        var Dfora = 0.5
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/2/25/Logo_Sele%C3%A7%C3%A3o_Francesa_2018.png"
    }
    else if(PELfora=="ENG"){//Inglaterra
        var Pfora = 85.36
        var Afora = 2.64
        var Dfora = 0.54
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/d/d5/FA_crest_2009.svg"
    }
    else if(PELfora=="IRA"){//Irã
        var Pfora = 67.7
        var Afora = 1.6
        var Dfora = 0.7
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ira"
    }
    else if(PELfora=="ISL"){//Islândia
        var Pfora = 67.9
        var Afora = 2.0
        var Dfora = 0.9
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/isl"
    }
    else if(PELfora=="JAP"){//Japão
        var Pfora = 83.1
        var Afora = 2.4
        var Dfora = 0.5
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/en/8/84/Japan_national_football_team_crest.svg"
    }
    else if(PELfora=="MAR"){//Marrocos
        var Pfora = 72.3
        var Afora = 1.9
        var Dfora = 0.7
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/mar"
    }
    else if(PELfora=="MEX"){//México
        var Pfora = 74.3
        var Afora = 2.1
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/5/51/Mexico_national_football_team_seal.svg.png"
    }
    else if(PELfora=="NIG"){//Nigéria
        var Pfora = 71.1
        var Afora = 2.1
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ngr"
    }
    else if(PELfora=="PAN"){//Panamá
        var Pfora = 53.2
        var Afora = 1.5
        var Dfora = 1.1
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/pan"
    }
    else if(PELfora=="PER"){//Peru
        var Pfora = 71.6
        var Afora = 1.9
        var Dfora = 0.7
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/per"
    }
    else if(PELfora=="POL"){//Polônia
        var Pfora = 71.1
        var Afora = 2.1
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/pol"
    }
    else if(PELfora=="POR"){//Portugal
        var Pfora = 82.5
        var Afora = 2.4
        var Dfora = 0.6
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/7/75/Portugal_FPF.png"
    }
    else if(PELfora=="RUS"){//Rússia
        var Pfora = 70.6
        var Afora = 2.0
        var Dfora = 0.8
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/rus"
    }
    else if(PELfora=="SEN"){//Senegal
        var Pfora = 67.4
        var Afora = 1.7
        var Dfora = 0.7
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/sen"
    }
    else if(PELfora=="SER"){//Sérvia
        var Pfora = 73.0
        var Afora = 2.0
        var Dfora = 0.7
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/srb"
    }
    else if(PELfora=="SWI"){//Suiça
        var Pfora = 77.1
        var Afora = 2.3
        var Dfora = 0.7
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/sui"
    }
    else if(PELfora=="SWE"){//Suécia
        var Pfora = 75.8
        var Afora = 2.1
        var Dfora = 0.6
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/swe"
    }
    else if(PELfora=="TUN"){//Tunísia
        var Pfora = 61.9
        var Afora = 1.8
        var Dfora = 1.0
        document.getElementById('ESCfora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/tun"
    }
    else if(PELfora=="URU"){//Uruguai
        var Pfora = 81.2
        var Afora = 2.3
        var Dfora = 0.5
        document.getElementById('ESCfora').src="https://upload.wikimedia.org/wikipedia/pt/a/a9/Uruguay_football_association.svg.png"
    }
    else{
        var Pfora = 5.29
        var Afora = 0.2
        var Dfora = 2.51
        document.getElementById('ESCfora').src="https://uploaddeimagens.com.br/images/002/397/526/full/souza.png?1570224716"
    }
    txtsumulaA.innerHTML = ''
    txtsumulaB.innerHTML = ''
    var golA = (Pcasa/Pfora)*(1.10-0.1*neutralidade)*(Number(Acasa)+Number(Dfora))/2
    var golB = (Pfora/Pcasa)*(0.91+0.09*neutralidade)*(Number(Afora)+Number(Dcasa))/2
    txtmediaA.innerText = Number(golA).toFixed(2)
    txtmediaB.innerText = Number(golB).toFixed(2)
    var golatualA = Number(document.getElementById('placarAinicial').value)
    var golatualB = Number(document.getElementById('placarBinicial').value)
    var tempodejogo = Number(document.getElementById('tempoinicial').value)
    var sumulaA = String('')
    var sumulaB = String('')
    var rolaabola = setInterval(function apitoinicial(){
        if(document.getElementById('prorrogar').checked){
            var prorrogase = 1
        }else{
            var prorrogase = 0
        }
        if(document.getElementById('fergtime').checked){
            var acrescimo = 30
        }else{
            var acrescimo = 0
        }
        var guardador = 0
        minutoagora.innerText = tempodejogo
        var aleatorio1 = Number(Math.random().toFixed(5))
        var aleatorio2 = Number(Math.random().toFixed(5))
        var nounce1 = 1-Math.exp(-golA/90)
        var nounce2 = 1-Math.exp(-golB/90)
        if(prorrogase==1){
            if(tempodejogo>90){
                var prorrogacao = 30
            }else{
                if(golatualA==golatualB){
                    var prorrogacao = 30
                }else{
                    var prorrogacao = 0
                }
            }
        }else{
            var prorrogacao = 0
        }
        var golAagora = nounce1-aleatorio1
        var golBagora = nounce2-aleatorio2
        if(tempodejogo<90+acrescimo+prorrogacao){
            tempodejogo += 1
            if(golAagora>0){
                alertagol()
                golatualA = golatualA+1
                placar1.innerText=golatualA
                sumulaA = sumulaA+`${tempodejogo}&apos;&nbsp;`
                txtsumulaA.innerHTML = sumulaA
            }else{
                placar1.innerText=golatualA
            }
            if(golBagora>0){
                alertagol()
                golatualB = golatualB+1
                placar2.innerText=golatualB
                sumulaB = sumulaB+`${tempodejogo}&apos;&nbsp;`
                txtsumulaB.innerHTML = sumulaB
            }else{
                placar2.innerText=golatualB
            }
        }else{
            minutoagora.innerText = "'FIM"
            acabou
            alertagol()
        }
    },chaveinter)
}