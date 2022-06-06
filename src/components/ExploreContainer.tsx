import './ExploreContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { IonContent, IonImg, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { pin, wifi, wine, warning, walk, card } from 'ionicons/icons';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonCard className='ion-activated ion-text-center'>
              <IonCardHeader>
                <IonCardTitle>Juegos del año</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                PlayStation es, sin ninguna duda, una de las consolas que ha cambiado a lo largo de estos años la historia de
                los videojuegos. Desde que salió al mercado en 1994, la PS y sus diferentes evoluciones, hasta llegar a la
                ctual PS5, son auténticos iconos dentro del universo gamer, por eso cuentan con millones de fans alrededor de
                todo el mundo. Además de los distintos avances tecnológicos que ha ido incorporando Sony en esta consola, otra
                de las claves de su indiscutible éxito es la calidad de los títulos que ofrecen.
              </IonCardContent>
              <IonCol>
                <IonButton color="secondary">Ver en Facebook</IonButton>
              </IonCol>
              <IonCol>
                <IonButton color="medium">Ver en Twitter</IonButton>
              </IonCol>
              <br></br>
              <br></br>
            </IonCard>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className='col-lg-4 col-md-6 col-12'>
              <IonCard className='ion-activated ion-text-justify'>
                <img src="https://th.bing.com/th/id/R.a1fea0706b6041f8ea0effd3c4207437?rik=KxHCP19SL2tLWA&pid=ImgRaw&r=0" />
                <IonCardHeader>
                  <IonCardSubtitle>Naughty Dog</IonCardSubtitle>
                  <IonCardTitle>The Last of Us Part 2</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  The Last of Us Part II es un videojuego de terror y de acción y aventuras de 2020 desarrollado por Naughty
                  Dog y publicado por Sony Interactive Entertainment para PlayStation 4.1​ Ambientado cinco años después de
                  The Last of Us (2013), el juego se centra en dos personajes jugables en un Estados Unidos post-apocalíptico
                  cuyas vidas se entrelazan: Ellie, que busca venganza después de sufrir una tragedia, y Abby, una soldado que
                  se ve envuelta en un conflicto entre su milicia y un culto religioso. El juego se juega desde la perspectiva
                  de la tercera persona y le permite al jugador luchar contra enemigos humanos y criaturas caníbales parecidas
                  a zombis con armas de fuego, armas improvisadas y sigilo.
                </IonCardContent>
                <IonCardContent>
                <IonButton color="dark">View</IonButton>
                <IonButton color="dark">Edit</IonButton>
                <p className='ion-text-right'>9 mins</p>
                </IonCardContent>
              </IonCard>
          </IonCol>
          <IonCol className='col-lg-4 col-md-6 col-12'>
              <IonCard className='ion-activated ion-text-justify'>
                <img src="https://th.bing.com/th/id/R.32b37ce0e4a403f62ce9841b89ffc67a?rik=L%2fhawv3Fluyhuw&pid=ImgRaw&r=0" />
                <IonCardHeader>
                  <IonCardSubtitle>Naughty Dog</IonCardSubtitle>
                  <IonCardTitle>Uncharted 4: El desenlace del ladrón</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Uncharted 4: El desenlace del ladrón (en inglés Uncharted 4: A Thief's End), es un videojuego de acción-aventura
                  en tercera persona, lanzado el 10 de mayo de 2016, distribuido por Sony Computer Entertainment y desarrollado por
                  Naughty Dog exclusivamente para PlayStation 4.1​ Es la secuela de Uncharted 3: La traición de Drake, y la cuarta
                  entrega de la serie Uncharted. El videojuego fue confirmado con su primer teaser tráiler en noviembre del 2013 y
                  luego fue mostrado en el PlayStation E3 de 2014. En diciembre del mismo año, se mostró el primer gameplay del juego
                  en el evento PlayStation Experience; meses después, en el E3 2015, se presentó una demostración del juego.
                </IonCardContent>
                <IonCardContent>
                <IonButton color="dark">View</IonButton>
                <IonButton color="dark">Edit</IonButton>
                <p className='ion-text-right'>9 mins</p>
                </IonCardContent>
              </IonCard>
          </IonCol>
          <IonCol className='col-lg-4 col-md-6 col-12'>
              <IonCard className='ion-activated ion-text-justify'>
                <img src="https://th.bing.com/th/id/R.6203847bce64da3b403c6226d2be4daf?rik=CX4Oz4Oif%2bOa8A&pid=ImgRaw&r=0" />
                <IonCardHeader>
                  <IonCardSubtitle>SCE Santa Monica Studio</IonCardSubtitle>
                  <IonCardTitle>God of War</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por Sony
                  Interactive Entertainment. Su lanzamiento se produjo el 20 de abril de 2018 como un título exclusivo para la
                  consola PlayStation 4.1​ Posteriormente, fue lanzado en Microsoft Windows el 14 de enero de 2022.2​ Se trata
                  de la octava entrega de la serie de God of War, cronológicamente, y la secuela de God of War III. La historia
                  se centra en la mitología nórdica y Kratos regresa como el protagonista principal.
                </IonCardContent>
                <IonCardContent>
                <IonButton color="dark">View</IonButton>
                <IonButton color="dark">Edit</IonButton>
                <p className='ion-text-right'>9 mins</p>
                </IonCardContent>
              </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
  );
};

export default ExploreContainer;
