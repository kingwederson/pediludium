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
    var pelejanteA = window.document.getElementById('timedacasa').value
    var pelejanteB = window.document.getElementById('timedefora').value
    if(pelejanteA=="braCAM"){//Atlético Mineiro
        var SPIA = 54.44
        var AA = 1.42
        var DA = 1.05
        document.getElementById('escudodacasa').src = "https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-256.png"
    }
    else if(pelejanteA=="braCAP"){//Athletico Paranaense
        var SPIA = 62.04
        var AA = 1.47
        var DA = 0.79
        document.getElementById('escudodacasa').src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/CA_Paranaense.svg/240px-CA_Paranaense.svg.png"
    }
    else if(pelejanteA=="braAVA"){//Avaí
        var SPIA = 32.34
        var AA = 0.90
        var DA = 1.45
        document.getElementById('escudodacasa').src ="https://logodetimes.com/times/avai/logo-avai-5.png"
    }
    else if(pelejanteA=="braBAH"){//Bahia
        var SPIA = 51.23
        var AA = 1.30
        var DA = 1.06
        document.getElementById('escudodacasa').src = "https://logodetimes.com/times/bahia/logo-bahia-256.png"
    }
    else if(pelejanteA=="braBOT"){//Botafogo
        var SPIA = 40.06
        var AA = 1.03
        var DA = 1.24
        document.getElementById('escudodacasa').src = "https://logodetimes.com/times/botafogo/logo-botafogo-256.png"
    }
    else if(pelejanteA=="braCEA"){//Ceará
        var SPIA = 49.11
        var AA = 1.23
        var DA = 1.07
        document.getElementById('escudodacasa').src = "https://logodetimes.com/times/ceara/logo-ceara-256.png"
    }
    else if(pelejanteA=="braCHA"){//Chapecoense
        var SPIA = 40.75
        var AA = 1.05
        var DA = 1.23
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/6/61/S%C3%ADmbolo_Chapecoense_sem_estrelas.svg"
    }
    else if(pelejanteA=="braCOR"){//Corinthians
        var SPIA = 53.56
        var AA = 1.27
        var DA = 0.94
        document.getElementById('escudodacasa').src="https://s.glbimg.com/es/sde/f/equipes/2018/03/10/corinthians.svg"
    }
    else if(pelejanteA=="braCRU"){//Cruzeiro
        var SPIA = 51.58
        var AA = 1.22
        var DA = 0.96
        document.getElementById('escudodacasa').src="https://cdn.worldvectorlogo.com/logos/cruzeiro.svg"
    }
    else if(pelejanteA=="braCSA"){//CSA
        var SPIA = 35.62
        var AA = 1.02
        var DA = 1.43
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/6/64/CSA_logo.png"
    }
    else if(pelejanteA=="braFLA"){//Flamengo
        var SPIA = 73.81
        var AA = 2.13
        var DA = 0.83
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/6/68/Flamengo_escudo.svg"
    }
    else if(pelejanteA=="braFLU"){//Fluminense
        var SPIA = 52.21
        var AA = 1.33
        var DA = 1.05
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/de/1/12/Fluminense_Football_Club.svg"
    }
    else if(pelejanteA=="braFOR"){//Fortaleza
        var SPIA = 46.94
        var AA = 1.30
        var DA = 1.24
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Fortaleza_Esporte_Clube_logo.svg"
    }
    else if(pelejanteA=="braGOI"){//Goiás
        var SPIA = 40.7
        var AA = 1.1
        var DA = 1.3
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/7/71/Goias_Esporte_Clube_inverted_logo.svg"
    }
    else if(pelejanteA=="braGRE"){//Grêmio
        var SPIA = 63.9
        var AA = 1.7
        var DA = 0.9
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/f/f1/Gremio.svg"
    }
    else if(pelejanteA=="braINT"){//Internacional
        var SPIA = 55.9
        var AA = 1.4
        var DA = 1.0
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Escudo_do_Sport_Club_Internacional.svg"
    
    }
    else if(pelejanteA=="braPAL"){//Palmeiras
        var SPIA = 69.0
        var AA = 1.7
        var DA = 0.7
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg"
    }
    else if(pelejanteA=="braSAN"){//Santos
        var SPIA = 60.6
        var AA = 1.6
        var DA = 0.9
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/3/35/Santos_logo.svg"
    }
    else if(pelejanteA=="braSPFC"){//São Paulo
        var SPIA = 57.4
        var AA = 1.3
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg"
    }
    else if(pelejanteA=="braVAS"){//Vasco
        var SPIA = 50.9
        var AA = 1.3
        var DA = 1.1
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/1/1a/ClubDeRegatasVascoDaGama.svg"
    }
    else if(pelejanteA=="engARS"){//Arsenal
        var SPIA = 79.3
        var AA = 2.4
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/5/53/Arsenal_FC.svg"
    }
    else if(pelejanteA=="engAST"){//Aston Villa
        var SPIA = 64.1
        var AA = 1.7
        var DA = 0.9
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/1/15/Aston_Villa.svg"
    }
    else if(pelejanteA=="engBOU"){//Bournemouth
        var SPIA = 68.5
        var AA = 2.1
        var DA = 1.0
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/e/e5/AFC_Bournemouth_%282013%29.svg"
    }
    else if(pelejanteA=="engBRI"){//Brighton
        var SPIA = 65.8
        var AA = 1.7
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg"
    }
    else if(pelejanteA=="engBUR"){//Burnley
        var SPIA = 69.8
        var AA = 1.9
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/0/07/BurnleyFC_logo2014.gif"
    }
    else if(pelejanteA=="engCHE"){//Chelsea
        var SPIA = 85.0
        var AA = 2.5
        var DA = 0.5
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/c/cc/Chelsea_FC.svg"
    }
    else if(pelejanteA=="engCRY"){//Crystal Palace
        var SPIA = 70.4
        var AA = 1.9
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/0/0c/Crystal_Palace_FC_logo.svg"
    }
    else if(pelejanteA=="engEVE"){//Everton
        var SPIA = 76.8
        var AA = 2.0
        var DA = 0.6
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/7/7c/Everton_FC_logo.svg"
    }
    else if(pelejanteA=="engLEI"){//Leicester
        var SPIA = 79.2
        var AA = 2.0
        var DA = 0.5
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/2/2d/Leicester_City_crest.svg"
    }
    else if(pelejanteA=="engLIV"){//Liverpool
        var SPIA = 92.3
        var AA = 2.9
        var DA = 0.3
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/0/0c/Liverpool_FC.svg"
    }
    else if(pelejanteA=="engMANC"){//Manchester City
        var SPIA = 95.8
        var AA = 3.4
        var DA = 0.2
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/e/eb/Manchester_City_FC_badge.svg"
    }
    else if(pelejanteA=="engMANU"){//Manchester United
        var SPIA = 81.8
        var AA = 2.2
        var DA = 0.5
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/7/7a/Manchester_United_FC_crest.svg"
    }
    else if(pelejanteA=="engNEW"){//Newcastle
        var SPIA = 65.8
        var AA = 1.7
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/5/56/Newcastle_United_Logo.svg"
    }
    else if(pelejanteA=="engNOR"){//Norwich
        var SPIA = 63.2
        var AA = 1.8
        var DA = 1.0
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/e/e2/Norwich_City_FC.png"
    }
    else if(pelejanteA=="engSHEU"){//Sheffield United
        var SPIA = 65.5
        var AA = 1.7
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/3/39/SUFC_logo.svg"
    }
    else if(pelejanteA=="engSOU"){//Southampton
        var SPIA = 70.7
        var AA = 1.9
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/c/c9/FC_Southampton.svg"
    }
    else if(pelejanteA=="engTOT"){//Tottenham
        var SPIA = 82.6
        var AA = 2.4
        var DA = 0.6
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/b/b4/Tottenham_Hotspur.svg"
    }
    else if(pelejanteA=="engWAT"){//Watford
        var SPIA = 65.9
        var AA = 2.0
        var DA = 1.0
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/e/e2/Watford.svg"
    }
    else if(pelejanteA=="engWHU"){//West Ham United
        var SPIA = 70.0
        var AA = 2.0
        var DA = 0.9
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/c/c2/West_Ham_United_FC_logo.svg"
    }
    else if(pelejanteA=="engWOL"){//Wolves
        var SPIA = 71.9
        var AA = 1.9
        var DA = 0.7
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg"
    }
    else if(pelejanteA=="itiATA"){//Atalanta
        var SPIA = 70.4
        var AA = 2.0
        var DA = 0.9
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg"
    }
    else if(pelejanteA=="itiFIO"){//Fiorentina
        var SPIA = 69.8
        var AA = 2.0
        var DA = 0.9
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/b/ba/ACF_Fiorentina_2.svg"
    }
    else if(pelejanteA=="itiINT"){//Internazionali
        var SPIA = 80.2
        var AA = 2.2
        var DA = 0.6
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/8/89/FC_Internazionale_Milano_2014.svg"
    }
    else if(pelejanteA=="itiJUV"){//Juventus
        var SPIA = 87.3
        var AA = 2.6
        var DA = 0.5
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg"
    }
    else if(pelejanteA=="itiLAZ"){//Lazio
        var SPIA = 72.0
        var AA = 2.0
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/e/e4/SS_Lazio.svg"
    }
    else if(pelejanteA=="itiMIL"){//Milan
        var SPIA = 73.1
        var AA = 2.0
        var DA = 0.7
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg"
    }
    else if(pelejanteA=="itiNAP"){//Napoli
        var SPIA = 82.3
        var AA = 2.4
        var DA = 0.6
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/2/28/S.S.C._Napoli_logo.svg"
    }
    else if(pelejanteA=="itiROM"){//Roma
        var SPIA = 73.1
        var AA = 2.1
        var DA = 0.9
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg"
    }
    else if(pelejanteA=="gerBAY"){//Bayern
        var SPIA = 93.7
        var AA = 3.3
        var DA = 0.3
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg"
    }
    else if(pelejanteA=="gerDOR"){//Dortmund
        var SPIA = 84.4
        var AA = 2.6
        var DA = 0.6
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg"
    }
    else if(pelejanteA=="gerHOF"){//Hoffenheim
        var SPIA = 81.1
        var AA = 2.3
        var DA = 0.6
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Logo_TSG_Hoffenheim.svg"
    }
    else if(pelejanteA=="gerLEV"){//Leverkusen
        var SPIA = 71.6
        var AA = 2.2
        var DA = 1.0
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/de/f/f7/Bayer_Leverkusen_Logo.svg"
    }
    else if(pelejanteA=="gerRBL"){//Red Bull Leipzig
        var SPIA = 81.4
        var AA = 2.3
        var DA = 0.6
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/fr/0/04/RB_Leipzig_2014_logo.svg"
    }
    else if(pelejanteA=="gerSCH"){//Schalke 04
        var SPIA = 72.9
        var AA = 2.0
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/6/6d/FC_Schalke_04_Logo.svg"
    }
    else if(pelejanteA=="gerWER"){//Werder Bremen
        var SPIA = 69.1
        var AA = 2.0
        var DA = 1.0
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/b/be/SV-Werder-Bremen-Logo.svg"
    }
    else if(pelejanteA=="gerWOL"){//Wolfsburg
        var SPIA = 72.0
        var AA = 1.9
        var DA = 0.7
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo-VfL-Wolfsburg.svg"
    }
    else if(pelejanteA=="spaATL"){//Atlético Madrid
        var SPIA = 84.9
        var AA = 2.2
        var DA = 0.4
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/c/c1/Atletico_Madrid_logo.svg"
    }
    else if(pelejanteA=="catBAR"){//Barcelona
        var SPIA = 89.1
        var AA = 2.8
        var DA = 0.4
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/4/47/FC_Barcelona_%28crest%29.svg"
    }
    else if(pelejanteA=="spaMAD"){//Real Madrid
        var SPIA = 85.8
        var AA = 2.6
        var DA = 0.5
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/5/56/Real_Madrid_CF.svg"
    }
    else if(pelejanteA=="spaSEV"){//Sevilla
        var SPIA = 78.4
        var AA = 2.1
        var DA = 0.6
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/fr/f/f1/Logo_Sevilla_FC.svg"
    }
    else if(pelejanteA=="porBEN"){//Benfica
        var SPIA = 76.0
        var AA = 2.2
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/a/a2/SL_Benfica_logo.svg"
    }
    else if(pelejanteA=="porBRA"){//Braga
        var SPIA = 78.4
        var AA = 2.1
        var DA = 0.6
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/f/f9/150px-Sporting_Clube_Braga.png"
    }
    else if(pelejanteA=="porPOR"){//Porto
        var SPIA = 78.4
        var AA = 2.2
        var DA = 0.7
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/f/f1/FC_Porto.svg"
    }
    else if(pelejanteA=="porSPO"){//Sporting
        var SPIA = 64.3
        var AA = 1.8
        var DA = 1.0
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/3/3e/Sporting_Clube_de_Portugal.png"
    }
    else if(pelejanteA=="fraLIL"){//Lille
        var SPIA = 69.5
        var AA = 1.8
        var DA = 0.7
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/fr/6/62/Logo_LOSC_Lille_2018.svg"
    }
    else if(pelejanteA=="fraOLY"){//Lyonnais, Olympique
        var SPIA = 72.1
        var AA = 2.0
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/fr/e/e2/Olympique_lyonnais_%28logo%29.svg"
    }
    else if(pelejanteA=="fraMAR"){//Marseille
        var SPIA = 66.2
        var AA = 1.7
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/fr/4/43/Logo_Olympique_de_Marseille.svg"
    }
    else if(pelejanteA=="fraPSG"){//Paris Saint-Germain
        var SPIA = 88.9
        var AA = 2.7
        var DA = 0.4
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/fr/8/86/Paris_Saint-Germain_Logo.svg"
    }
    else if(pelejanteA=="argBOC"){//Boca Juniors
        var SPIA = 62.0
        var AA = 1.5
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/d/de/Boca_Juniors_2012.svg"
    }
    else if(pelejanteA=="argIND"){//Independiente
        var SPIA = 49.3
        var AA = 1.3
        var DA = 1.2
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/d/db/Escudo_del_Club_Atl%C3%A9tico_Independiente.svg"
    }
    else if(pelejanteA=="argNOB"){//Newell's Old Boys
        var SPIA = 47.7
        var AA = 1.2
        var DA = 1.1
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/f/fc/CA_Newell%E2%80%99s_Old_Boys.svg"
    }
    else if(pelejanteA=="argRAC"){//Racing
        var SPIA = 51.2
        var AA = 1.4
        var DA = 1.1
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/2/29/Racing_Club_%282014%29.svg"
    }
    else if(pelejanteA=="argRIV"){//River Plate
        var SPIA = 67.9
        var AA = 1.9
        var DA = 0.9
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/6/69/Escudo_del_Club_Atl%C3%A9tico_River_Plate.svg"
    }
    else if(pelejanteA=="argVEL"){//Vélez Sarsfield
        var SPIA = 50.1
        var AA = 1.3
        var DA = 1.1
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/2/21/Escudo_del_Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield.svg"
    }
    else if(pelejanteA=="GER"){//Alemanha
        var SPIA = 88.4
        var AA = 3.1
        var DA = 0.6
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/de/a/a9/Deutscher_Fu%C3%9Fball-Bund_logo.svg"
    }
    else if(pelejanteA=="SAU"){//Arábia Saudita
        var SPIA = 51.9
        var AA = 1.5
        var DA = 1.2
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ksa"
    }
    else if(pelejanteA=="ARG"){//Argentina
        var SPIA = 85.2
        var AA = 2.6
        var DA = 0.5
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/f/fc/230px-Afa_logo.svg.png"
    }
    else if(pelejanteA=="AUS"){//Austrália
        var SPIA = 63.4
        var AA = 1.8
        var DA = 1.0
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/6/69/Football_Federation_Australia_logo.svg.png"
    }
    else if(pelejanteA=="BEL"){//Bélgica
        var SPIA = 87.3
        var AA = 3.0
        var DA = 0.6
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/bel"
    }
    else if(pelejanteA=="BRA"){//Brasil
        var SPIA = 91.04
        var AA = 2.92
        var DA = 0.34
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/2/26/Escudo_CBF.png"
    }
    else if(pelejanteA=="CHI"){//Chile
        var SPIA = 76.14
        var AA = 2.16
        var DA = 0.69
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Logo_Federaci%C3%B3n_de_F%C3%BAtbol_de_Chile.png"
    }
    else if(pelejanteA=="COL"){//Colômbia
        var SPIA = 80.3
        var AA = 2.1
        var DA = 0.5
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/6/61/Federacion_Colombiana_de_Futbol_logo.svg"
    }
    else if(pelejanteA=="KOR"){//Coréia do Sul
        var SPIA = 62.6
        var AA = 1.7
        var DA = 0.9
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/4/4d/Emblem_of_Korea_Football_Association.svg"
    }
    else if(pelejanteA=="CRC"){//Costa Rica
        var SPIA = 65.1
        var AA = 1.7
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/crc"
    }
    else if(pelejanteA=="CRO"){//Croácia
        var SPIA = 83.3
        var AA = 2.6
        var DA = 0.6
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/3/39/Croatia_national_football_team_crest.svg"
    }
    else if(pelejanteA=="DEN"){//Dinamarca
        var SPIA = 73.2
        var AA = 2.0
        var DA = 0.7
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/4/4f/Dansk_Boldspil-Union_logo.svg"
    }
    else if(pelejanteA=="EGY"){//Egito
        var SPIA = 58.9
        var AA = 1.6
        var DA = 1.0
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/de/6/60/Egyptian_Football_Association.svg"
    }
    else if(pelejanteA=="SPA"){//Espanha
        var SPIA = 91.1
        var AA = 3.3
        var DA = 0.5
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/3/31/Spain_National_Football_Team_badge.png"
    }
    else if(pelejanteA=="USA"){//Estados Unidos da América
        var SPIA = 69.75
        var AA = 1.88
        var DA = 0.77
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/8/86/Crest_of_the_United_States_Soccer_Federation.png"
    }
    else if(pelejanteA=="FRA"){//França
        var SPIA = 88.6
        var AA = 2.9
        var DA = 0.5
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/2/25/Logo_Sele%C3%A7%C3%A3o_Francesa_2018.png"
    }
    else if(pelejanteA=="ENG"){//Inglaterra
        var SPIA = 85.36
        var AA = 2.64
        var DA = 0.54
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/d/d5/FA_crest_2009.svg"
    }
    else if(pelejanteA=="IRA"){//Irã
        var SPIA = 67.7
        var AA = 1.6
        var DA = 0.7
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ira"
    }
    else if(pelejanteA=="ISL"){//Islândia
        var SPIA = 67.9
        var AA = 2.0
        var DA = 0.9
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/isl"
    }
    else if(pelejanteA=="JAP"){//Japão
        var SPIA = 83.1
        var AA = 2.4
        var DA = 0.5
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/8/84/Japan_national_football_team_crest.svg"
    }
    else if(pelejanteA=="MAR"){//Marrocos
        var SPIA = 72.3
        var AA = 1.9
        var DA = 0.7
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/mar"
    }
    else if(pelejanteA=="MEX"){//México
        var SPIA = 74.3
        var AA = 2.1
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/5/51/Mexico_national_football_team_seal.svg.png"
    }
    else if(pelejanteA=="USA"){//Nigéria
        var SPIA = 71.1
        var AA = 2.1
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ngr"
    }
    else if(pelejanteA=="PAN"){//Panamá
        var SPIA = 53.2
        var AA = 1.5
        var DA = 1.1
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/pan"
    }
    else if(pelejanteA=="PER"){//Peru
        var SPIA = 71.6
        var AA = 1.9
        var DA = 0.7
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/per"
    }
    else if(pelejanteA=="POL"){//Polônia
        var SPIA = 71.1
        var AA = 2.1
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/pol"
    }
    else if(pelejanteA=="POR"){//Portugal
        var SPIA = 82.5
        var AA = 2.4
        var DA = 0.6
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/7/75/Portugal_FPF.png"
    }
    else if(pelejanteA=="RUS"){//Rússia
        var SPIA = 70.6
        var AA = 2.0
        var DA = 0.8
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/rus"
    }
    else if(pelejanteA=="SEN"){//Senegal
        var SPIA = 67.4
        var AA = 1.7
        var DA = 0.7
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/sen"
    }
    else if(pelejanteA=="SER"){//Sérvia
        var SPIA = 73.0
        var AA = 2.0
        var DA = 0.7
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/srb"
    }
    else if(pelejanteA=="SWI"){//Suiça
        var SPIA = 77.1
        var AA = 2.3
        var DA = 0.7
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/sui"
    }
    else if(pelejanteA=="SWE"){//Suécia
        var SPIA = 75.8
        var AA = 2.1
        var DA = 0.6
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/swe"
    }
    else if(pelejanteA=="TUN"){//Tunísia
        var SPIA = 61.9
        var AA = 1.8
        var DA = 1.0
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/tun"
    }
    else if(pelejanteA=="URU"){//Uruguai
        var SPIA = 81.2
        var AA = 2.3
        var DA = 0.5
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/a/a9/Uruguay_football_association.svg.png"
    }
    else if(pelejanteA=="ECU"){//Equador
        var SPIA = 68.42
        var AA = 1.81
        var DA = 0.78
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ecu"
    }
    else if(pelejanteA=="PAR"){//Paraguai
        var SPIA = 67.8
        var AA = 1.84
        var DA = 0.82
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/par"
    }
    else if(pelejanteA=="VEN"){//Venezuela
        var SPIA = 67.8
        var AA = 1.84
        var DA = 0.82
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ven"
    }
    else if(pelejanteA=="BOL"){//Bolívia
        var SPIA = 52.93
        var AA = 1.47
        var DA = 1.13
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/bol"
    }
    else if(pelejanteA=="AUT"){//Austria
        var SPIA = 74.48
        var AA = 2.06
        var DA = 0.70
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/aut"
    }
    else if(pelejanteA=="UKR"){//Ucrânia
        var SPIA = 72.58
        var AA = 1.95
        var DA = 0.71
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ukr"
    }
    else if(pelejanteA=="ALG"){//Argélia
        var SPIA = 70.27
        var AA = 1.96
        var DA = 0.81
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/alg"
    }
    else if(pelejanteA=="GHA"){//Gana
        var SPIA = 69.93
        var AA = 1.64
        var DA = 0.58
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/gha"
    }
    else if(pelejanteA=="NOR"){//Noruega
        var SPIA = 68.99
        var AA = 1.87
        var DA = 0.80
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/nor"
    }
    else if(pelejanteA=="CZE"){//Tchéquia
        var SPIA = 68.53
        var AA = 1.92
        var DA = 0.86
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/cze"
    }
    else if(pelejanteA=="TUR"){//Turquia
        var SPIA = 68.43
        var AA = 1.90
        var DA = 0.84
        document.getElementById('escudodacasa').src="https://api.fifa.com/api/v1/picture/flags-sq-4/tur"
    }
    else if(pelejanteA=="gerEIN"){//Eintracht Frankfurt
        var SPIA = 72.66
        var AA = 2
        var DA = 0.79
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/0/04/Eintracht_Frankfurt_Logo.svg"
    }
    else if(pelejanteA=="spaRSO"){//Real Sociedad
        var SPIA = 76.33
        var AA = 2.07
        var DA = 0.67
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/6/6a/Real_Sociedad_logo.png"
    }
    else if(pelejanteA=="spaBIL"){//Athletic Bilbao
        var SPIA = 75.44
        var AA = 1.8
        var DA = 0.53
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/d/d2/Club_Athletic_Bilbao_logo.png"
    }
    else if(pelejanteA=="spaGET"){//Getafe
        var SPIA = 74.87
        var AA = 1.88
        var DA = 0.61
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/de/d/de/Getafe_CF.svg"
    }
    else if(pelejanteA=="spaVAL"){//Valencia
        var SPIA = 74.32
        var AA = 2.13
        var DA = 0.80
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/c/ce/Valenciacf.svg"
    }
    else if(pelejanteA=="argBAN"){//Banfield
        var SPIA = 45.36
        var AA = 1.16
        var DA = 1.16
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/1/16/CA_Banfield_%282014%29.svg"
    }
    else if(pelejanteA=="argSLO"){//San Lorenzo
        var SPIA = 45.18
        var AA = 1.18
        var DA = 1.19
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/7/77/Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.svg"
    }
    else if(pelejanteA=="spaVIL"){//Villarreal
        var SPIA = 73.74
        var AA = 2.12
        var DA = 0.82
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/7/70/Villarreal_CF_logo.svg"
    }
    else if(pelejanteA=="spaEIB"){//Eibar
        var SPIA = 73.46
        var AA = 1.87
        var DA = 0.66
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/de/a/ab/Eibar.svg"
    }
    else if(pelejanteA=="spaOSA"){//Osasuna
        var SPIA = 69.25
        var AA = 1.72
        var DA = 0.72
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/3/39/CA_Osasuna.png"
    }
    else if(pelejanteA=="spaGRA"){//Granada
        var SPIA = 69.13
        var AA = 1.76
        var DA = 0.75
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/9/9a/Granada_FC_logo.png"
    }
    else if(pelejanteA=="spaBET"){//Real Betis
        var SPIA = 68.7
        var AA = 1.93
        var DA = 0.91
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/fr/1/13/Real_betis_logo.svg"
    }
    else if(pelejanteA=="spaLEG"){//Leganes
        var SPIA = 68.09
        var AA = 1.61
        var DA = 0.68
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/fr/4/46/Logo_CD_Legan%C3%A9s.svg"
    }
    else if(pelejanteA=="spaCEL"){//Celta de Vigo
        var SPIA = 66.63
        var AA = 1.81
        var DA = 0.89
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/fr/b/b7/Logo_RC_Celta_Vigo.svg"
    }
    else if(pelejanteA=="spaESP"){//Espanyol
        var SPIA = 66.52
        var AA = 1.76
        var DA = 0.86
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/2/29/Rcd_espanyol_logo.png"
    }
    else if(pelejanteA=="spaALA"){//Alavés
        var SPIA = 65.02
        var AA = 1.59
        var DA = 0.78
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/4/44/Deportivo_Alav%C3%A9s.png"
    }
    else if(pelejanteA=="spaLEV"){//Levante
        var SPIA = 64.72
        var AA = 1.94
        var DA = 1.08
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/e/e7/Levante_logo2014.svg"
    }
    else if(pelejanteA=="spaRVA"){//Real Valladolid
        var SPIA = 64.35
        var AA = 1.66
        var DA = 0.86
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/0/00/RealValladolid_Logo2014.svg"
    }
    else if(pelejanteA=="spaMAL"){//Mallorca
        var SPIA = 61.7
        var AA = 1.66
        var DA = 0.97
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/1/1d/RCD_Mallorca.png"
    }
    else if(pelejanteA=="engLUFC"){//Leeds
        var SPIA = 67.62
        var AA = 1.78
        var DA = 0.83
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/de/d/de/Leeds_United.svg"
    }
    else if(pelejanteA=="usaLAFC"){//Los Angeles FC
        var SPIA = 60.7
        var AA = 2.04
        var DA = 1.34
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/it/8/89/Los_Angeles_Football_Club_logo.svg"
    }
    else if(pelejanteA=="usaATL"){//Atlanta United FC
        var SPIA = 48.61
        var AA = 1.53
        var DA = 1.41
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/b/bb/Atlanta_MLS.svg"
    }
    else if(pelejanteA=="usaNYC"){//New York City FC
        var SPIA = 47.8
        var AA = 1.52
        var DA = 1.44
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/f/f9/New_York_City_FC.svg"
    }
    else if(pelejanteA=="usaPHI"){//Philadelphia Union
        var SPIA = 45.98
        var AA = 1.49
        var DA = 1.49
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/f/f3/Philadelphia_Union.png"
    }
    else if(pelejanteA=="braSPO"){//Sport Recife (w)
        var SPIA = 37.8
        var AA = 1.1
        var DA = 1.3
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/1/17/Sport_Club_do_Recife.png"
    }
    else if(pelejanteA=="braAMG"){//América Mineiro (2018)
        var SPIA = 43.6
        var AA = 1.1
        var DA = 1.2
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Escudo_do_America_Futebol_Clube.svg"
    }
    else if(pelejanteA=="braCTB"){//Coritiba (2017)
        var SPIA = 43.2
        var AA = 1.2
        var DA = 1.3
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/3/38/Coritiba_FBC_%282011%29_-_PR.svg"
    }
    else if(pelejanteA=="braAAPP"){//Ponte Preta (2017)
        var SPIA = 38.9
        var AA = 1.1
        var DA = 1.3
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Escudo_Oficial_Ponte_Preta.png"
    }
    else if(pelejanteA=="braPAR"){//Paraná (2018)
        var SPIA = 33.2
        var AA = 0.9
        var DA = 1.4
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/0/07/Parana_Clube.png"
    }
    else if(pelejanteA=="braVIT"){//Vitória (w)
        var SPIA = 29.8
        var AA = 1.1
        var DA = 1.5
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/3/34/Esporte_Clube_Vit%C3%B3ria_logo.png"
    }
    else if(pelejanteA=="braAGO"){//Atlético Goianiense (2017)
        var SPIA = 40.6
        var AA = 1.1
        var DA = 1.3
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/f/f3/AtleticoGO2017.png"
    }
    else if(pelejanteA=="usaGAL"){//LA Galaxy
        var SPIA = 42.04
        var AA = 1.71
        var DA = 1.93
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/fr/b/b1/Logo_Los_Angeles_Galaxy.svg"
    }
    else if(pelejanteA=="canTOR"){//Toronto
        var SPIA = 43.62
        var AA = 1.47
        var DA = 1.58
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/8/8f/Toronto_FC.png"
    }
    else if(pelejanteA=="usaNYRB"){//New York Red Bulls
        var SPIA = 43.51
        var AA = 1.43
        var DA = 1.54
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/5/54/Red_Bull_New_York.PNG"
    }
    else if(pelejanteA=="usaCHI"){//Chicago Fire
        var SPIA = 43.06
        var AA = 1.37
        var DA = 1.49
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/9/96/Chicago_Fire_SC.png"
    }
    else if(pelejanteA=="usaSJE"){//San Jose Earthquakes
        var SPIA = 40.81
        var AA = 1.42
        var DA = 1.66
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/3/3a/SJ_Earthquakes.png"
    }
    else if(pelejanteA=="usaSEA"){//Seattle Sounders
        var SPIA = 40.61
        var AA = 1.32
        var DA = 1.55
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/7/7c/Seattle_Sounders_FC.png"
    }
    else if(pelejanteA=="usaPOR"){//Portland Timbers
        var SPIA = 40.29
        var AA = 1.42
        var DA = 1.69
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/5/5e/Portland_Timbers.png"
    }
    else if(pelejanteA=="usaSPO"){//Sporting KC
        var SPIA = 39.93
        var AA = 1.4
        var DA = 1.69
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/f/fc/Sporting_Kansas_City.png"
    }
    else if(pelejanteA=="usaMIN"){//Minnesota United FC
        var SPIA = 39.02
        var AA = 1.29
        var DA = 1.61
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/7/74/Minnesota.png"
    }
    else if(pelejanteA=="usaDAL"){//FC Dallas
        var SPIA = 38.32
        var AA = 1.24
        var DA = 1.58
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/c/cb/FC_Dallas.png"
    }
    else if(pelejanteA=="usaCREW"){//Columbus Crew
        var SPIA = 37.48
        var AA = 1.13
        var DA = 1.48
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/b/b1/Columbus_Crew_SC.png"
    }
    else if(pelejanteA=="usaRSL"){//Real Salt Lake
        var SPIA = 37.3
        var AA = 1.03
        var DA = 1.37
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/0/0f/Real_Salt_Lake.png"
    }
    else if(pelejanteA=="usaNER"){//New England Revolution
        var SPIA = 36.89
        var AA = 1.36
        var DA = 1.79
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/f/f6/NewEnglandRevolution.png"
    }
    else if(pelejanteA=="usaCOL"){//Colorado Rapids
        var SPIA = 36.37
        var AA = 1.35
        var DA = 1.81
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/1/11/Colorado_Rapids.png"
    }
    else if(pelejanteA=="usaDCU"){//DC United
        var SPIA = 34.45
        var AA = 1.13
        var DA = 1.64
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/8/8a/DC_United_First_Logo.png"
    }
    else if(pelejanteA=="usaORL"){//Orlando City SC
        var SPIA = 33.6
        var AA = 1.15
        var DA = 1.71
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/8/87/Orlando_City_2012.svg.png"
    }
    else if(pelejanteA=="usaHOU"){//Houston Dynamo
        var SPIA = 34.88
        var AA = 1.21
        var DA = 1.71
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/0/0c/Houston_Dynamo_logo.svg"
    }
    else if(pelejanteA=="canMON"){//Montreal Impact
        var SPIA = 30.51
        var AA = 1.09
        var DA = 1.81
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/fr/7/70/Logo_Impact_de_Montr%C3%A9al_%28MLS%29.svg"
    }
    else if(pelejanteA=="canVAN"){//Vancouver Whitecaps
        var SPIA = 24.95
        var AA = 0.96
        var DA = 1.97
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Vancouver_Whitecaps_FC_logo.svg"
    }
    else if(pelejanteA=="usaCIN"){//FC Cincinnati
        var SPIA = 22.16
        var AA = 0.87
        var DA = 2.02
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/0/08/FC_Cincinnati.png"
    }
    else if(pelejanteA=="CAN"){//Canadá
        var SPIA = 57.25
        var AA = 1.7
        var DA = 1.16
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/6/69/Canadian_Soccer_Association_logo.svg"
    }
    else if(pelejanteA=="braRBB"){//Red Bull Brasil
        var SPIA = 41.58
        var AA = 1.1
        var DA = 1.5
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/9/94/Red_Bull_Brasil.png"
    }
    else if(pelejanteA=="ITA"){//Itália
        var SPIA = 81.95
        var AA = 2.26
        var DA = 0.49
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/3/33/FIGC_Logo_2017.svg"
    }
    else if(pelejanteA=="HAI"){//Haiti
        var SPIA = 51.6
        var AA = 1.47
        var DA = 1.19
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/fr/1/1f/Haitifootballlogo.png"
    }
    else if(pelejanteA=="NZL"){//Nova Zelânia
        var SPIA = 51.6
        var AA = 1.47
        var DA = 1.19
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/6/6b/New_Zealand_Football.svg"
        molduradefora.style.backgroundColor = "#ffffff00"
    }
    else if(pelejanteA=="QAT"){//Qatar
        var SPIA = 58.07
        var AA = 1.6
        var DA = 1.03
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/fr/3/39/Football_Qatar_federation.svg"
    }
    else if(pelejanteA=="nedAJA"){//Ajax
        var SPIA = 83.89
        var AA = 3.01
        var DA = 0.89
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/b/b8/AFC_Ajax_Amsterdam.svg"
    }
    else if(pelejanteA=="autRBS"){//Red Bull Salzburg
        var SPIA = 83.89
        var AA = 3.01
        var DA = 0.89
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/2/24/Red_Bull_Salzburg.png"
    }
    else if(pelejanteA=="rusZEN"){//Zenit
        var SPIA = 75.7
        var AA = 2.03
        var DA = 0.68
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/commons/e/ef/FK_Zenit_St_Peterburg.svg"
        //molduradefora.style.backgroundColor = "#00000000"
    }
    else if(pelejanteA=="nedPSV"){//PSV
        var SPIA = 74.54
        var AA = 2.35
        var DA = 0.95
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/sco/0/05/PSV_Eindhoven.svg"
    }
    else if(pelejanteA=="NED"){//Holanda
        var SPIA = 86.15
        var AA = 2.79
        var DA = 0.58
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/en/a/a1/Royal_Netherlands_Football_Association_Logo.svg"
    }
    else if(pelejanteA=="engSUN"){//Sunderland
        var SPIA = 35.0
        var AA = 1.23
        var DA = 1.61
        document.getElementById('escudodacasa').src="https://upload.wikimedia.org/wikipedia/pt/0/01/Sunderland_AFC.png"
    }
    else{
        var SPIA = 5.29
        var AA = 0.2
        var DA = 2.51
        document.getElementById('escudodacasa').src="https://uploaddeimagens.com.br/images/002/397/523/full/maraboys.png?1570224665"
    }
    
    //Termina a seleção de equipes mandantes e começa o de equipes visitantes

    if(pelejanteB=="usaGAL"){//LA Galaxy
        var SPIB = 42.04
        var AB = 1.71
        var DB = 1.93
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/fr/b/b1/Logo_Los_Angeles_Galaxy.svg"
    }
    else if(pelejanteB=="engSUN"){//Sunderland
        var SPIB = 35.0
        var AB = 1.23
        var DB = 1.61
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/0/01/Sunderland_AFC.png"
    }
    else if(pelejanteB=="NED"){//Holanda
        var SPIB = 86.15
        var AB = 2.79
        var DB = 0.58
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/a/a1/Royal_Netherlands_Football_Association_Logo.svg"
    }
    else if(pelejanteB=="nedPSV"){//PSV
        var SPIB = 74.54
        var AB = 2.35
        var DB = 0.95
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/0/05/PSV_Eindhoven.svg"
    }
    else if(pelejanteB=="rusZEN"){//Zenit
        var SPIB = 75.7
        var AB = 2.03
        var DB = 0.68
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/e/ef/FK_Zenit_St_Peterburg.svg"
        //molduradefora.style.backgroundColor = "#00000000"
    }
    else if(pelejanteB=="autRBS"){//Red Bull Salzburg
        var SPIB = 83.89
        var AB = 3.01
        var DB = 0.89
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/2/24/Red_Bull_Salzburg.png"
    }
    else if(pelejanteB=="nedAJA"){//Ajax
        var SPIB = 83.89
        var AB = 3.01
        var DB = 0.89
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/b/b8/AFC_Ajax_Amsterdam.svg"
    }
    else if(pelejanteB=="QAT"){//Qatar
        var SPIB = 58.07
        var AB = 1.6
        var DB = 1.03
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/fr/3/39/Football_Qatar_federation.svg"
    }
    else if(pelejanteB=="NZL"){//Nova Zelânia
        var SPIB = 51.6
        var AB = 1.47
        var DB = 1.19
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/6/6b/New_Zealand_Football.svg"
        molduradefora.style.backgroundColor = "#ffffff00"
    }
    else if(pelejanteB=="HAI"){//Haiti
        var SPIB = 51.6
        var AB = 1.47
        var DB = 1.19
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/fr/1/1f/Haitifootballlogo.png"
    }
    else if(pelejanteB=="ITA"){//Itália
        var SPIB = 81.95
        var AB = 2.26
        var DB = 0.49
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/3/33/FIGC_Logo_2017.svg"
    }
    else if(pelejanteB=="braRBB"){//Red Bull Brasil
        var SPIB = 41.58
        var AB = 1.1
        var DB = 1.5
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/9/94/Red_Bull_Brasil.png"
    }
    else if(pelejanteB=="CAN"){//Canadá
        var SPIB = 57.25
        var AB = 1.7
        var DB = 1.16
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/6/69/Canadian_Soccer_Association_logo.svg"
    }
    else if(pelejanteB=="usaCIN"){//FC Cincinnati
        var SPIB = 22.16
        var AB = 0.87
        var DB = 2.02
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/0/08/FC_Cincinnati.png"
    }
    else if(pelejanteB=="canVAN"){//Vancouver Whitecaps
        var SPIB = 24.95
        var AB = 0.96
        var Db = 1.97
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Vancouver_Whitecaps_FC_logo.svg"
    }
    else if(pelejanteB=="canMON"){//Montreal Impact
        var SPIB = 30.51
        var AB = 1.09
        var DB = 1.81
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/fr/7/70/Logo_Impact_de_Montr%C3%A9al_%28MLS%29.svg"
    }
    else if(pelejanteB=="usaHOU"){//Houston Dynamo
        var SPIB = 34.88
        var AB = 1.21
        var DB = 1.71
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/0/0c/Houston_Dynamo_logo.svg"
    }
    else if(pelejanteB=="usaORL"){//Orlando City SC
        var SPIB = 33.6
        var AB = 1.15
        var DB = 1.71
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/8/87/Orlando_City_2012.svg.png"
    }
    else if(pelejanteB=="usaDCU"){//DC United
        var SPIB = 34.45
        var AB = 1.13
        var DB = 1.64
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/8/8a/DC_United_First_Logo.png"
    }
    else if(pelejanteB=="usaCOL"){//Colorado Rapids
        var SPIB = 36.37
        var AB = 1.35
        var DB = 1.81
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/1/11/Colorado_Rapids.png"
    }
    else if(pelejanteB=="usaNER"){//New England Revolution
        var SPIB = 36.89
        var AB = 1.36
        var DB = 1.79
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/f/f6/NewEnglandRevolution.png"
    }
    else if(pelejanteB=="usaRSL"){//Real Salt Lake
        var SPIB = 37.3
        var AB = 1.03
        var DB = 1.37
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/0/0f/Real_Salt_Lake.png"
    }
    else if(pelejanteB=="usaCREW"){//Columbus Crew
        var SPIB = 37.48
        var AB = 1.13
        var DB = 1.48
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/b/b1/Columbus_Crew_SC.png"
    }
    else if(pelejanteB=="usaDAL"){//FC Dallas
        var SPIA = 38.32
        var AB = 1.24
        var DB = 1.58
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/c/cb/FC_Dallas.png"
    }
    else if(pelejanteB=="usaMIN"){//Minnesota United FC
        var SPIB = 39.02
        var AB = 1.29
        var DB = 1.61
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/7/74/Minnesota.png"
    }
    else if(pelejanteB=="usaSPO"){//Sporting KC
        var SPIB = 39.93
        var AB = 1.4
        var DB = 1.69
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/f/fc/Sporting_Kansas_City.png"
    }
    else if(pelejanteB=="usaPOR"){//Portland Timbers
        var SPIB = 40.29
        var AB = 1.42
        var DB = 1.69
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/5/5e/Portland_Timbers.png"
    }
    else if(pelejanteB=="usaSEA"){//Seattle Sounders
        var SPIB = 40.61
        var AB = 1.32
        var DB = 1.55
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/7/7c/Seattle_Sounders_FC.png"
    }
    else if(pelejanteB=="usaSJE"){//San Jose Earthquakes
        var SPIB = 40.81
        var AB = 1.42
        var DB = 1.66
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/3/3a/SJ_Earthquakes.png"
    }
    else if(pelejanteB=="usaCHI"){//Chicago Fire
        var SPIB = 43.06
        var AB = 1.37
        var DB = 1.49
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/9/96/Chicago_Fire_SC.png"
    }
    else if(pelejanteB=="usaNYRB"){//New York Red Bulls
        var SPIB = 43.51
        var AB = 1.43
        var DB = 1.54
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/5/54/Red_Bull_New_York.PNG"
    }
    else if(pelejanteB=="canTOR"){//Toronto
        var SPIB = 43.62
        var AB = 1.47
        var DB = 1.58
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/8/8f/Toronto_FC.png"
    }
    else if(pelejanteB=="gerEIN"){//Eintracht Frankfurt
        var SPIB = 72.66
        var AB = 2
        var DB = 0.79
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/0/04/Eintracht_Frankfurt_Logo.svg"
    }
    else if(pelejanteB=="braAGO"){//Atlético Goianiense (2017)
        var SPIB = 40.6
        var AB = 1.1
        var DB = 1.3
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/f/f3/AtleticoGO2017.png"
    }
    else if(pelejanteB=="braVIT"){//Vitória (w)
        var SPIB = 29.80
        var AB = 1.1
        var DB = 1.5
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/3/34/Esporte_Clube_Vit%C3%B3ria_logo.png"
    }
    else if(pelejanteB=="braPAR"){//Paraná (2018)
        var SPIB = 33.2
        var AB = 0.9
        var DB = 1.4
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/0/07/Parana_Clube.png"
    }
    else if(pelejanteB=="braAAPP"){//Ponte Preta (2017)
        var SPIB = 38.9
        var AB = 1.1
        var DB = 1.3
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Escudo_Oficial_Ponte_Preta.png"
    }
    else if(pelejanteB=="braCTB"){//Coritiba (2017)
        var SPIB = 43.2
        var AB = 1.2
        var DB = 1.3
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/3/38/Coritiba_FBC_%282011%29_-_PR.svg"
    }
    else if(pelejanteB=="braAMG"){//América Mineiro (2018)
        var SPIB = 43.6
        var AB = 1.1
        var DB = 1.2
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Escudo_do_America_Futebol_Clube.svg"
    }
    else if(pelejanteB=="braSPO"){//Sport Recife (w)
        var SPIB = 37.8
        var AB = 1.1
        var DB = 1.3
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/1/17/Sport_Club_do_Recife.png"
    }
    else if(pelejanteB=="usaPHI"){//Philadelphia Union
        var SPIB = 45.98
        var AB = 1.49
        var DB = 1.49
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/f/f3/Philadelphia_Union.png"
    }
    else if(pelejanteB=="usaNYC"){//New York City FC
        var SPIB = 47.8
        var AB = 1.52
        var DB = 1.44
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/f/f9/New_York_City_FC.svg"
    }
    else if(pelejanteB=="usaATL"){//Atlanta United FC
        var SPIB = 48.61
        var AB = 1.53
        var DB = 1.41
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/b/bb/Atlanta_MLS.svg"
    }
    else if(pelejanteB=="usaLAFC"){//Los Angeles FC
        var SPIB = 60.7
        var AB = 2.04
        var DB = 1.34
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/it/8/89/Los_Angeles_Football_Club_logo.svg"
    }
    else if(pelejanteB=="engLUFC"){//Leeds
        var SPIB = 67.62
        var AB = 1.78
        var DB = 0.83
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/de/d/de/Leeds_United.svg"
    }
    else if(pelejanteB=="spaMAL"){//Mallorca
        var SPIB = 61.7
        var AB = 1.66
        var DB = 0.97
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/1/1d/RCD_Mallorca.png"
    }
    else if(pelejanteB=="spaRVA"){//Real Valladolid
        var SPIB = 64.35
        var AB = 1.66
        var DB = 0.86
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/0/00/RealValladolid_Logo2014.svg"
    }
    else if(pelejanteB=="spaLEV"){//Levante
        var SPIB = 64.72
        var AB = 1.94
        var DB = 1.08
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/e/e7/Levante_logo2014.svg"
    }
    else if(pelejanteB=="spaALA"){//Alavés
        var SPIB = 65.02
        var AB = 1.59
        var DB = 0.78
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/4/44/Deportivo_Alav%C3%A9s.png"
    }
    else if(pelejanteB=="spaESP"){//Espanyol
        var SPIB = 66.52
        var AB = 1.76
        var DB = 0.86
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/2/29/Rcd_espanyol_logo.png"
    }
    else if(pelejanteB=="spaCEL"){//Celta de Vigo
        var SPIB = 66.63
        var AB = 1.81
        var DB = 0.89
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/fr/b/b7/Logo_RC_Celta_Vigo.svg"
    }
    else if(pelejanteB=="spaLEG"){//Leganes
        var SPIB = 68.09
        var AB = 1.61
        var DB = 0.68
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/fr/4/46/Logo_CD_Legan%C3%A9s.svg"
    }
    else if(pelejanteB=="spaBET"){//Real Betis
        var SPIB = 68.7
        var AB = 1.93
        var DB = 0.91
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/fr/1/13/Real_betis_logo.svg"
    }
    else if(pelejanteB=="spaGRA"){//Granada
        var SPIB = 69.13
        var AB = 1.76
        var DB = 0.75
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/9/9a/Granada_FC_logo.png"
    }
    else if(pelejanteB=="spaOSA"){//Osasuna
        var SPIB = 69.25
        var AB = 1.72
        var DB = 0.72
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/3/39/CA_Osasuna.png"
    }
    else if(pelejanteB=="spaEIB"){//Eibar
        var SPIB = 73.46
        var AB = 1.87
        var DB = 0.66
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/de/a/ab/Eibar.svg"
    }
    else if(pelejanteB=="spaVIL"){//Villarreal
        var SPIB = 73.74
        var AB = 2.12
        var DB = 0.82
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/7/70/Villarreal_CF_logo.svg"
    }
    else if(pelejanteB=="argSLO"){//San Lorenzo
        var SPIB = 45.18
        var AB = 1.18
        var DB = 1.19
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/7/77/Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.svg"
    }
    else if(pelejanteB=="argBAN"){//Banfield
        var SPIB = 45.36
        var AB = 1.16
        var DB = 1.16
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/1/16/CA_Banfield_%282014%29.svg"
    }
    else if(pelejanteB=="spaVAL"){//Valencia
        var SPIB = 74.32
        var AB = 2.13
        var DB = 0.80
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/c/ce/Valenciacf.svg"
    }
    else if(pelejanteB=="spaGET"){//Getafe
        var SPIB = 74.87
        var AB = 1.88
        var DB = 0.61
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/de/d/de/Getafe_CF.svg"
    }
    else if(pelejanteB=="spaBIL"){//Athletic Bilbao
        var SPIB = 75.44
        var AB = 1.8
        var DB = 0.53
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/d/d2/Club_Athletic_Bilbao_logo.png"
    }
    else if(pelejanteB=="spaRSO"){//Real Sociedad
        var SPIB = 76.33
        var AB = 2.07
        var DB = 0.67
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/6/6a/Real_Sociedad_logo.png"
    }
    else if(pelejanteB=="braCAM"){//Atlético Mineiro
        var SPIB = 53.3
        var AB = 1.5
        var DB = 1.1
        document.getElementById('escudodefora').src = "https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-256.png"
    }
    else if(pelejanteB=="TUR"){//Turquia
        var SPIB = 68.43
        var AB = 1.90
        var DB = 0.84
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/tur"
    }
    else if(pelejanteB=="CZE"){//Tchéquia
        var SPIB = 68.53
        var AB = 1.92
        var DB = 0.86
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/cze"
    }
    else if(pelejanteB=="NOR"){//Noruega
        var SPIB = 68.99
        var AB = 1.87
        var DB = 0.80
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/nor"
    }
    else if(pelejanteB=="GHA"){//Gana
        var SPIB = 69.93
        var AB = 1.64
        var DB = 0.58
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/gha"
    }
    else if(pelejanteB=="ALG"){//Argélia
        var SPIB = 70.27
        var AB = 1.96
        var DB = 0.81
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/alg"
    }
    else if(pelejanteB=="UKR"){//Ucrânia
        var SPIB = 72.58
        var AB = 1.95
        var DB = 0.71
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ukr"
    }
    else if(pelejanteB=="AUT"){//Austria
        var SPIB = 74.48
        var AB = 2.06
        var DB = 0.70
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/aut"
    }
    else if(pelejanteB=="BOL"){//Bolívia
        var SPIB = 52.93
        var AB = 1.47
        var DB = 1.13
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/bol"
    }
    else if(pelejanteB=="VEN"){//Venezuela
        var SPIB = 67.8
        var AB = 1.84
        var DB = 0.82
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ven"
    }
    else if(pelejanteB=="PAR"){//Paraguai
        var SPIB = 67.8
        var AB = 1.84
        var DB = 0.82
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/par"
    }
    else if(pelejanteB=="ECU"){//Equador
        var SPIB = 68.42
        var AB = 1.81
        var DB = 0.78
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ecu"
    }
    else if(pelejanteB=="CHI"){//Chile
        var SPIB = 76.14
        var AB = 2.16
        var DB = 0.69
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Logo_Federaci%C3%B3n_de_F%C3%BAtbol_de_Chile.png"
    }
    else if(pelejanteB=="braCAP"){//Athletico Paranaense
        var SPIB = 57.2
        var AB = 1.5
        var DB = 1.0
        document.getElementById('escudodefora').src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/CA_Paranaense.svg/240px-CA_Paranaense.svg.png"
    }
    else if(pelejanteB=="braAVA"){//Avaí
        var SPIB = 39.4
        var AB = 1.0
        var DB = 1.2
        document.getElementById('escudodefora').src ="https://logodetimes.com/times/avai/logo-avai-5.png"
    }
    else if(pelejanteB=="braBAH"){//Bahia
        var SPIB = 56.6
        var AB = 1.3
        var DB = 0.9
        document.getElementById('escudodefora').src = "https://logodetimes.com/times/bahia/logo-bahia-256.png"
    }
    else if(pelejanteB=="braBOT"){//Botafogo
        var SPIB = 42.8
        var AB = 1.1
        var DB = 1.2
        document.getElementById('escudodefora').src = "https://logodetimes.com/times/botafogo/logo-botafogo-256.png"
    }
    else if(pelejanteB=="braCEA"){//Ceará
        var SPIB = 47.7
        var AB = 1.2
        var DB = 1.1
        document.getElementById('escudodefora').src = "https://logodetimes.com/times/ceara/logo-ceara-256.png"
    }
    else if(pelejanteB=="braCHA"){//Chapecoense
        var SPIB = 41.8
        var AB = 1.1
        var DB = 1.2
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/6/61/S%C3%ADmbolo_Chapecoense_sem_estrelas.svg"
    }
    else if(pelejanteB=="braCOR"){//Corinthians
        var SPIB = 56.3
        var AB = 1.2
        var DB = 0.8
        document.getElementById('escudodefora').src="https://s.glbimg.com/es/sde/f/equipes/2018/03/10/corinthians.svg"
    }
    else if(pelejanteB=="braCRU"){//Cruzeiro
        var SPIB = 49.8
        var AB = 1.3
        var DB = 1.1
        document.getElementById('escudodefora').src="https://cdn.worldvectorlogo.com/logos/cruzeiro.svg"
    }
    else if(pelejanteB=="braCSA"){//CSA
        var SPIB = 35.1
        var AB = 1.0
        var DB = 1.4
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/6/64/CSA_logo.png"
    }
    else if(pelejanteB=="braFLA"){//Flamengo
        var SPIB = 72.3
        var AB = 2.0
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/6/68/Flamengo_escudo.svg"
    }
    else if(pelejanteB=="braFLU"){//Fluminense
        var SPIB = 48.5
        var AB = 1.4
        var DB = 1.2
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/de/1/12/Fluminense_Football_Club.svg"
    }
    else if(pelejanteB=="braFOR"){//Fortaleza
        var SPIB = 43.7
        var AB = 1.2
        var DB = 1.3
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Fortaleza_Esporte_Clube_logo.svg"
    }
    else if(pelejanteB=="braGOI"){//Goiás
        var SPIB = 40.7
        var AB = 1.1
        var DB = 1.3
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/7/71/Goias_Esporte_Clube_inverted_logo.svg"
    }
    else if(pelejanteB=="braGRE"){//Grêmio
        var SPIB = 63.9
        var AB = 1.7
        var DB = 0.9
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/f/f1/Gremio.svg"
    }
    else if(pelejanteB=="braINT"){//Internacional
        var SPIB = 55.9
        var AB = 1.4
        var DB = 1.0
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Escudo_do_Sport_Club_Internacional.svg"
    }
    else if(pelejanteB=="braPAL"){//Palmeiras
        var SPIB = 69.0
        var AB = 1.7
        var DB = 0.7
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg"
    }
    else if(pelejanteB=="braSAN"){//Santos
        var SPIB = 60.6
        var AB = 1.6
        var DB = 0.9
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/3/35/Santos_logo.svg"
    }
    else if(pelejanteB=="braSPFC"){//São Paulo
        var SPIB = 57.4
        var AB = 1.3
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg"
    }
    else if(pelejanteB=="braVAS"){//Vasco
        var SPIB = 50.9
        var AB = 1.3
        var DB = 1.1
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/1/1a/ClubDeRegatasVascoDaGama.svg"
    }
    else if(pelejanteB=="engARS"){//Arsenal
        var SPIB = 79.3
        var AB = 2.4
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/5/53/Arsenal_FC.svg"
    }
    else if(pelejanteB=="engAST"){//Aston Villa
        var SPIB = 64.1
        var AB = 1.7
        var DB = 0.9
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/1/15/Aston_Villa.svg"
    }
    else if(pelejanteB=="engBOU"){//Bournemouth
        var SPIB = 68.5
        var AB = 2.1
        var DB = 1.0
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/e/e5/AFC_Bournemouth_%282013%29.svg"
    }
    else if(pelejanteB=="engBRI"){//Brighton
        var SPIB = 65.8
        var AB = 1.7
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg"
    }
    else if(pelejanteB=="engBUR"){//Burnley
        var SPIB = 69.8
        var AB = 1.9
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/0/07/BurnleyFC_logo2014.gif"
    }
    else if(pelejanteB=="engCHE"){//Chelsea
        var SPIB = 85.0
        var AB = 2.5
        var DB = 0.5
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/c/cc/Chelsea_FC.svg"
    }
    else if(pelejanteB=="engCRY"){//Crystal Palace
        var SPIB = 70.4
        var AB = 1.9
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/0/0c/Crystal_Palace_FC_logo.svg"
    }
    else if(pelejanteB=="engEVE"){//Everton
        var SPIB = 76.8
        var AB = 2.0
        var DB = 0.6
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/7/7c/Everton_FC_logo.svg"
    }
    else if(pelejanteB=="engLEI"){//Leicester
        var SPIB = 79.2
        var AB = 2.0
        var DB = 0.5
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/2/2d/Leicester_City_crest.svg"
    }
    else if(pelejanteB=="engLIV"){//Liverpool
        var SPIB = 92.3
        var AB = 2.9
        var DB = 0.3
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/0/0c/Liverpool_FC.svg"
    }
    else if(pelejanteB=="engMANC"){//Manchester City
        var SPIB = 95.8
        var AB = 3.4
        var DB = 0.2
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/e/eb/Manchester_City_FC_badge.svg"
    }
    else if(pelejanteB=="engMANU"){//Manchester United
        var SPIB = 81.8
        var AB = 2.2
        var DB = 0.5
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/7/7a/Manchester_United_FC_crest.svg"
    }
    else if(pelejanteB=="engNEW"){//Newcastle
        var SPIB = 65.8
        var AB = 1.7
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/5/56/Newcastle_United_Logo.svg"
    }
    else if(pelejanteB=="engNOR"){//Norwich
        var SPIB = 63.2
        var AB = 1.8
        var DB = 1.0
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/e/e2/Norwich_City_FC.png"
    }
    else if(pelejanteB=="engSHEU"){//Sheffield United
        var SPIB = 65.5
        var AB = 1.7
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/3/39/SUFC_logo.svg"
    }
    else if(pelejanteB=="engSOU"){//Southampton
        var SPIB = 70.7
        var AB = 1.9
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/c/c9/FC_Southampton.svg"
    }
    else if(pelejanteB=="engTOT"){//Tottenham
        var SPIB = 82.6
        var AB = 2.4
        var DB = 0.6
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/b/b4/Tottenham_Hotspur.svg"
    }
    else if(pelejanteB=="engWAT"){//Watford
        var SPIB = 65.9
        var AB = 2.0
        var DB = 1.0
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/e/e2/Watford.svg"
    }
    else if(pelejanteB=="engWHU"){//West Ham United
        var SPIB = 70.0
        var AB = 2.0
        var DB = 0.9
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/c/c2/West_Ham_United_FC_logo.svg"
    }
    else if(pelejanteB=="engWOL"){//Wolves
        var SPIB = 71.9
        var AB = 1.9
        var DB = 0.7
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg"
    }
    else if(pelejanteB=="itiATA"){//Atalanta
        var SPIB = 70.4
        var AB = 2.0
        var DB = 0.9
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg"
    }
    else if(pelejanteB=="itiFIO"){//Fiorentina
        var SPIB = 69.8
        var AB = 2.0
        var DB = 0.9
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/b/ba/ACF_Fiorentina_2.svg"
    }
    else if(pelejanteB=="itiINT"){//Internazionali
        var SPIB = 80.2
        var AB = 2.2
        var DB = 0.6
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/8/89/FC_Internazionale_Milano_2014.svg"
    }
    else if(pelejanteB=="itiJUV"){//Juventus
        var SPIB = 87.3
        var AB = 2.6
        var DB = 0.5
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg"
    }
    else if(pelejanteB=="itiLAZ"){//Lazio
        var SPIB = 72.0
        var AB = 2.0
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/e/e4/SS_Lazio.svg"
    }
    else if(pelejanteB=="itiMIL"){//Milan
        var SPIB = 73.1
        var AB = 2.0
        var DB = 0.7
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg"
    }
    else if(pelejanteB=="itiNAP"){//Napoli
        var SPIB = 82.3
        var AB = 2.4
        var DB = 0.6
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/2/28/S.S.C._Napoli_logo.svg"
    }
    else if(pelejanteB=="itiROM"){//Roma
        var SPIB = 73.1
        var AB = 2.1
        var DB = 0.9
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg"
    }
    else if(pelejanteB=="gerBAY"){//Bayern
        var SPIB = 93.7
        var AB = 3.3
        var DB = 0.3
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg"
    }
    else if(pelejanteB=="gerDOR"){//Dortmund
        var SPIB = 84.4
        var AB = 2.6
        var DB = 0.6
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg"
    }
    else if(pelejanteB=="gerHOF"){//Hoffenheim
        var SPIB = 81.1
        var AB = 2.3
        var DB = 0.6
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Logo_TSG_Hoffenheim.svg"
    }
    else if(pelejanteB=="gerLEV"){//Leverkusen
        var SPIB = 71.6
        var AB = 2.2
        var DB = 1.0
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/de/f/f7/Bayer_Leverkusen_Logo.svg"
    }
    else if(pelejanteB=="gerRBL"){//Red Bull Leipzig
        var SPIB = 81.4
        var AB = 2.3
        var DB = 0.6
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/fr/0/04/RB_Leipzig_2014_logo.svg"
    }
    else if(pelejanteB=="gerSCH"){//Schalke 04
        var SPIB = 72.9
        var AB = 2.0
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/6/6d/FC_Schalke_04_Logo.svg"
    }
    else if(pelejanteB=="gerWER"){//Werder Bremen
        var SPIB = 69.1
        var AB = 2.0
        var DB = 1.0
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/b/be/SV-Werder-Bremen-Logo.svg"
    }
    else if(pelejanteB=="gerWOL"){//Wolfsburg
        var SPIB = 72.0
        var AB = 1.9
        var DB = 0.7
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo-VfL-Wolfsburg.svg"
    }
    else if(pelejanteB=="spaATL"){//Atlético Madrid
        var SPIB = 84.9
        var AB = 2.2
        var DB = 0.4
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/c/c1/Atletico_Madrid_logo.svg"
    }
    else if(pelejanteB=="catBAR"){//Barcelona
        var SPIB = 89.1
        var AB = 2.8
        var DB = 0.4
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/4/47/FC_Barcelona_%28crest%29.svg"
    }
    else if(pelejanteB=="spaMAD"){//Real Madrid
        var SPIB = 85.8
        var AB = 2.6
        var DB = 0.5
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/5/56/Real_Madrid_CF.svg"
    }
    else if(pelejanteB=="spaSEV"){//Sevilla
        var SPIB = 78.4
        var AB = 2.1
        var DB = 0.6
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/fr/f/f1/Logo_Sevilla_FC.svg"
    }
    else if(pelejanteB=="porBEN"){//Benfica
        var SPIB = 76.0
        var AB = 2.2
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/a/a2/SL_Benfica_logo.svg"
    }
    else if(pelejanteB=="porBRA"){//Braga
        var SPIB = 78.4
        var AB = 2.1
        var DB = 0.6
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/f/f9/150px-Sporting_Clube_Braga.png"
    }
    else if(pelejanteB=="porPOR"){//Porto
        var SPIB = 78.4
        var AB = 2.2
        var DB = 0.7
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/sco/f/f1/FC_Porto.svg"
    }
    else if(pelejanteB=="porSPO"){//Sporting
        var SPIB = 64.3
        var AB = 1.8
        var DB = 1.0
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/3/3e/Sporting_Clube_de_Portugal.png"
    }
    else if(pelejanteB=="fraLIL"){//Lille
        var SPIB = 69.5
        var AB = 1.8
        var DB = 0.7
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/fr/6/62/Logo_LOSC_Lille_2018.svg"
    }
    else if(pelejanteB=="fraOLY"){//Lyonnais, Olympique
        var SPIB = 72.1
        var AB = 2.0
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/fr/e/e2/Olympique_lyonnais_%28logo%29.svg"
    }
    else if(pelejanteB=="fraMAR"){//Marseille
        var SPIB = 66.2
        var AB = 1.7
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/fr/4/43/Logo_Olympique_de_Marseille.svg"
    }
    else if(pelejanteB=="fraPSG"){//Paris Saint-Germain
        var SPIB = 88.9
        var AB = 2.7
        var DB = 0.4
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/fr/8/86/Paris_Saint-Germain_Logo.svg"
    }
    else if(pelejanteB=="argBOC"){//Boca Juniors
        var SPIB = 62.0
        var AB = 1.5
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/d/de/Boca_Juniors_2012.svg"
    }
    else if(pelejanteB=="argIND"){//Independiente
        var SPIB = 49.3
        var AB = 1.3
        var DB = 1.2
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/d/db/Escudo_del_Club_Atl%C3%A9tico_Independiente.svg"
    }
    else if(pelejanteB=="argNOB"){//Newell's Old Boys
        var SPIB = 47.7
        var AB = 1.2
        var DB = 1.1
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/f/fc/CA_Newell%E2%80%99s_Old_Boys.svg"
    }
    else if(pelejanteB=="argRAC"){//Racing
        var SPIB = 51.2
        var AB = 1.4
        var DB = 1.1
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/2/29/Racing_Club_%282014%29.svg"
    }
    else if(pelejanteB=="argRIV"){//River Plate
        var SPIB = 67.9
        var AB = 1.9
        var DB = 0.9
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/6/69/Escudo_del_Club_Atl%C3%A9tico_River_Plate.svg"
    }
    else if(pelejanteB=="argVEL"){//Vélez Sarsfield
        var SPIB = 50.1
        var AB = 1.3
        var DB = 1.1
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/2/21/Escudo_del_Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield.svg"
    }
    else if(pelejanteB=="GER"){//Alemanha
        var SPIB = 88.4
        var AB = 3.1
        var DB = 0.6
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/de/a/a9/Deutscher_Fu%C3%9Fball-Bund_logo.svg"
    }
    else if(pelejanteB=="SAU"){//Arábia Saudita
        var SPIB = 51.9
        var AB = 1.5
        var DB = 1.2
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ksa"
    }
    else if(pelejanteB=="ARG"){//Argentina
        var SPIB = 85.2
        var AB = 2.6
        var DB = 0.5
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/f/fc/230px-Afa_logo.svg.png"
    }
    else if(pelejanteB=="AUS"){//Austrália
        var SPIB = 63.4
        var AB = 1.8
        var DB = 1.0
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/6/69/Football_Federation_Australia_logo.svg.png"
    }
    else if(pelejanteB=="BEL"){//Bélgica
        var SPIB = 87.3
        var AB = 3.0
        var DB = 0.6
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/bel"
    }
    else if(pelejanteB=="BRA"){//Brasil
        var SPIB = 93.1
        var AB = 3.1
        var DB = 0.3
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/2/26/Escudo_CBF.png"
    }
    else if(pelejanteB=="COL"){//Colômbia
        var SPIB = 80.3
        var AB = 2.1
        var DB = 0.5
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/6/61/Federacion_Colombiana_de_Futbol_logo.svg"
    }
    else if(pelejanteB=="KOR"){//Coréia do Sul
        var SPIB = 62.6
        var AB = 1.7
        var DB = 0.9
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/4/4d/Emblem_of_Korea_Football_Association.svg"
    }
    else if(pelejanteB=="CRC"){//Costa Rica
        var SPIB = 65.1
        var AB = 1.7
        var DB = 0.8
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/crc"
    }
    else if(pelejanteB=="CRO"){//Croácia
        var SPIB = 83.3
        var AB = 2.6
        var DB = 0.6
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/3/39/Croatia_national_football_team_crest.svg"
    }
    else if(pelejanteB=="DEN"){//Dinamarca
        var SPIB = 73.2
        var AB = 2.0
        var DB = 0.7
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/4/4f/Dansk_Boldspil-Union_logo.svg"
    }
    else if(pelejanteB=="EGY"){//Egito
        var SPIB = 58.9
        var AB = 1.6
        var DB = 1.0
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/de/6/60/Egyptian_Football_Association.svg"
    }
    else if(pelejanteB=="SPA"){//Espanha
        var SPIB = 91.1
        var AB = 3.3
        var DB = 0.5
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/3/31/Spain_National_Football_Team_badge.png"
    }
    else if(pelejanteB=="USA"){//Estados
        var SPIB = 69.75
        var AB = 1.88
        var DB = 0.77
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/commons/8/86/Crest_of_the_United_States_Soccer_Federation.png"
    }
    else if(pelejanteB=="FRA"){//França
        var SPIB = 88.6
        var AB = 2.9
        var DB = 0.5
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/2/25/Logo_Sele%C3%A7%C3%A3o_Francesa_2018.png"
    }
    else if(pelejanteB=="ENG"){//Inglaterra
        var SPIB = 85.36
        var AB = 2.64
        var DB = 0.54
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/d/d5/FA_crest_2009.svg"
    }
    else if(pelejanteB=="IRA"){//Irã
        var SPIB = 67.7
        var AB = 1.6
        var DB = 0.7
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ira"
    }
    else if(pelejanteB=="ISL"){//Islândia
        var SPIB = 67.9
        var AB = 2.0
        var DB = 0.9
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/isl"
    }
    else if(pelejanteB=="JAP"){//Japão
        var SPIB = 83.1
        var AB = 2.4
        var DB = 0.5
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/en/8/84/Japan_national_football_team_crest.svg"
    }
    else if(pelejanteB=="MAR"){//Marrocos
        var SPIB = 72.3
        var AB = 1.9
        var DB = 0.7
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/mar"
    }
    else if(pelejanteB=="MEX"){//México
        var SPIB = 74.3
        var AB = 2.1
        var DB = 0.8
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/5/51/Mexico_national_football_team_seal.svg.png"
    }
    else if(pelejanteB=="NIG"){//Nigéria
        var SPIB = 71.1
        var AB = 2.1
        var DB = 0.8
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/ngr"
    }
    else if(pelejanteB=="PAN"){//Panamá
        var SPIB = 53.2
        var AB = 1.5
        var DB = 1.1
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/pan"
    }
    else if(pelejanteB=="PER"){//Peru
        var SPIB = 71.6
        var AB = 1.9
        var DB = 0.7
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/per"
    }
    else if(pelejanteB=="POL"){//Polônia
        var SPIB = 71.1
        var AB = 2.1
        var DB = 0.8
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/pol"
    }
    else if(pelejanteB=="POR"){//Portugal
        var SPIB = 82.5
        var AB = 2.4
        var DB = 0.6
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/7/75/Portugal_FPF.png"
    }
    else if(pelejanteB=="RUS"){//Rússia
        var SPIB = 70.6
        var AB = 2.0
        var DB = 0.8
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/rus"
    }
    else if(pelejanteB=="SEN"){//Senegal
        var SPIB = 67.4
        var AB = 1.7
        var DB = 0.7
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/sen"
    }
    else if(pelejanteB=="SER"){//Sérvia
        var SPIB = 73.0
        var AB = 2.0
        var DB = 0.7
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/srb"
    }
    else if(pelejanteB=="SWI"){//Suiça
        var SPIB = 77.1
        var AB = 2.3
        var DB = 0.7
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/sui"
    }
    else if(pelejanteB=="SWE"){//Suécia
        var SPIB = 75.8
        var AB = 2.1
        var DB = 0.6
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/swe"
    }
    else if(pelejanteB=="TUN"){//Tunísia
        var SPIB = 61.9
        var AB = 1.8
        var DB = 1.0
        document.getElementById('escudodefora').src="https://api.fifa.com/api/v1/picture/flags-sq-4/tun"
    }
    else if(pelejanteB=="URU"){//Uruguai
        var SPIB = 81.2
        var AB = 2.3
        var DB = 0.5
        document.getElementById('escudodefora').src="https://upload.wikimedia.org/wikipedia/pt/a/a9/Uruguay_football_association.svg.png"
    }
    else{
        var SPIB = 5.29
        var AB = 0.2
        var DB = 2.51
        document.getElementById('escudodefora').src="https://uploaddeimagens.com.br/images/002/397/526/full/souza.png?1570224716"
    }
    txtsumulaA.innerHTML = ''
    txtsumulaB.innerHTML = ''
    var golA = (SPIA/SPIB)*(1.10-0.1*neutralidade)*(Number(AA)+Number(DB))/2
    var golB = (SPIB/SPIA)*(0.91+0.09*neutralidade)*(Number(AB)+Number(DA))/2
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
                golatualA = golatualA+1
                placar1.innerText=golatualA
                sumulaA = sumulaA+`${tempodejogo}&apos;&nbsp;`
                txtsumulaA.innerHTML = sumulaA
            }else{
                placar1.innerText=golatualA
            }
            if(golBagora>0){
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
        }
    },chaveinter)
}