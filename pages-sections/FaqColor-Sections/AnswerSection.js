// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={9}>
          <h2 className={classes.title}>Posso partecipare senza iscrizione?</h2>
          <h4 className={classes.description}>
            No non si può partecipare senza iscrizione. Le iscrizioni alla
            VALSUGANA COLOR RUN CRAZY edizione 2025 avverranno esclusivamente
            online collegandosi al sito internet dedicato
            https://www.clubpianello.it Le iscrizioni sono aperte dal 01 Aprile
            2023 fino ad esaurimento posti. Fatta salva la disponibilità di
            posti, sarà possibile iscriversi anche in loco fino alle ore 15.00
            del giorno della manifestazione con un sovra prezzo di euro 10€. Per
            tale opzione sarà accettato soltanto il pagamento in contanti.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
          <h2 className={classes.title}>
            Cosa mi viene dato in seguito all’iscrizione?
          </h2>
          <h4 className={classes.description}>
            Nella quota di partecipazione è compreso: Assistenza RC Race kit
            (sacca, t-shirt, occhiali da sole, collana hawaiana) Intrattenimento
            e animazione.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
          <h2 className={classes.title}>
            Dove posso ritirare il mio pacco gara?
          </h2>
          <h4 className={classes.description}>
            Il ritiro del race kit, verrà effettuato il giorno della gara presso
            la tensostruttura presente in loc. Pianello quale anche punto di
            partenza e arrivo della 5k dalle ore 13 alle ore 15.30 del 01 giugno
            2025, dalle ore 13:30 alle ore 15:30 del 31 maggio 2025 in occasione
            della Pianello Trail Run sempre presso la tensostruttura presente in
            loc. Pianello.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
          <h2 className={classes.title}>
            I colori sono dannosi per me o i miei vestiti?
          </h2>
          <h3 className={classes.title}>
            INFORMAZIONI SULLE POLVERI COLORATE{" "}
          </h3>
          <h4 className={classes.description}>
            Ingredienti: amido di mais, bicarbonato di sodio, cloruro di sodio e
            coloranti alimentari. Avvertenze: le polveri colorate non sono un
            prodotto per uso alimentare e non vanno ingerite. Le polveri
            colorate vanno utilizzate solo in esterno sotto la supervisione di
            un adulto. Raramente possono provocare reazioni allergiche o
            irritazioni
          </h4>
          <h3 className={classes.title}>
            CONSIGLI UTILI PER PARTECIPARE ALLA COLOR RUN CRAZY{" "}
          </h3>
          <h4 className={classes.description}>
            PRIMA DELLA COLOR RUN La mattina della corsa applica bene sui
            capelli dell’olio (olio di cocco e di oliva sono i migliori), che
            faciliterà l’eliminazione del colore. Un altro trucco e consiglio
            particolarmente utile, soprattutto per chi ha i capelli colorati o
            tinti, è un buon balsamo. Alcuni runner indossano una sciarpa o una
            bandana per coprire i capelli. Altri usano la bandana per coprire la
            bocca mentre corrono attraverso le stazioni colore e per facilitare
            la pulizia finale. Ti consigliamo anche di utilizzare una buona
            crema solare per la pelle e un balsamo per le labbra, faciliterà la
            rimozione del colore. Inoltre ti consigliamo di indossare degli
            occhiali per proteggere gli occhi dalla polvere. Alcune persone
            indossano occhiali da sole o occhialini da nuoto. Divertiti e cerca
            di non prendere troppa polvere negli occhi. Ricorda di non indossare
            il tuo abbigliamento più nuovo. DOPO LA COLOR RUN Cerca di rimuovere
            il più possibile la polvere a secco prima di iniziare ad usare
            l’acqua. La maggior parte del colore verrà soffiata via come per
            magia. Per pulire i capelli: aspetta ad usare l’acqua! Per prima
            cosa rimuovi la polvere rimasta sui capelli. Sciacqua l’olio/balsamo
            che hai saggiamente applicato prima della gara con l’acqua fredda.
            La maggior parte del colore dovrebbe venire via. Ora lava i capelli
            normalmente. È possibile che per alcuni colori, rosa e viola in
            particolare, siano necessari più lavaggi. Per pulire la pelle: se
            hai usato una protezione solare, ti basterà utilizzare acqua e
            sapone! Se hai ancora difficoltà, un po’ di struccante risolverà
            tutto. Rimuovi tutta la polvere in eccesso prima di aggiungere
            l’acqua.{" "}
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
          <h3 className={classes.title}>
            Esiste un limite di età per essere un color runner?
          </h3>
          <h4 className={classes.description}>
            La partecipazione è consentita a qualsiasi età.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
          <h3 className={classes.title}>È possibile essere rimborsati?</h3>
          <h4 className={classes.description}>
            Le quote di partecipazione NON sono rimborsabili in alcun caso,
            anche di cancellazione della manifestazione per problemi di
            sicurezza o per cause di forza maggiore.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
          <h3 className={classes.title}>
            Ho altri dubbi a chi posso rivolgermi?
          </h3>
          <h4 className={classes.description}>
            Lo staff VALSUGANA COLOR RUN CRAZY è reperibile all’indirizzo mail:
            social.clubpianello@libero.it. Scrivici ti risponderemo il prima
            possibile
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
          <h3 className={classes.title}>
            Posso spingere un passeggino lungo il percorso?
          </h3>
          <h4 className={classes.description}>
            Certamente, basta che il partecipante sia disposto a farsi colorare!
            Non saranno ammesse richieste di risarcimento danni relative ai
            pigmenti, si consiglia pertanto una protezione (telo in plastica,
            lenzuolino) per il mezzo.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
          <h3 className={classes.title}>
            È possibile trasferire la mia iscrizione ad altra persona?
          </h3>
          <h4 className={classes.description}>
            Per motivi organizzativi, non è possibile.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
          <h3 className={classes.title}>
            Devo produrre dei documenti particolari per iscrivermi?
          </h3>
          <h4 className={classes.description}>
            Per i minorenni è obbligatoria la liberatoria scaricabile QUI Con
            l’iscrizione si confermerà anche di essere in possesso di un
            certificato di idoneità alla pratica sportiva di tipo non agonistico
            (DM 24/04/2013, GU 20/07/2013) o superiore; NON verrà richiesta
            copia di tale certificato in fase di iscrizione ma il partecipante
            con l’iscrizione dichiara di esserne in possesso e che il
            certificato risulta valido alla data della marcia.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
          <h3 className={classes.title}>
            Devo essere un corridore professionista per partecipare?
          </h3>
          <h4 className={classes.description}>
            La VALSUGANA COLOR RUN CRAZY edizione 2025 è una corsa non
            competitiva sulla distanza 5K in Valsugana, all’interno del comune
            di Grigno. La VALSUGANA COLOR RUN CRAZY è una “fun run”, un evento
            che si svolge in un contesto ricco di colori, musica, festa ed
            allegria, per promuovere la socializzazione e il benessere
            collettivo. I partecipanti non devono raggiungere la miglior
            prestazione sportiva ma trascorrere nel miglior modo possibile i 5k
            della corsa durante la quale, saranno cosparsi di colore fino a
            giungere all’arrivo dove avrà inizio un’indimenticabile festa con
            aperitivo,cibo e musica con dj set aperta a tutti partecipanti e
            non.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
