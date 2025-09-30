import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <h2 className={classes.title}>
            REGOLAMENTO UFFICIALE “VALSUGANA COLOR RUN CRAZY” edizione 2025
          </h2>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Il Club Pianello organizza la VALSUGANA COLOR RUN CRAZY edizione
            2025, una corsa non competitiva sulla distanza 5K in Valsugana,
            all’interno del comune di Grigno. La VALSUGANA COLOR RUN CRAZY èuna
            “fun run”, un evento che si svolge in un contesto ricco di colori,
            musica, festa ed allegria, per promuovere la socializzazione e il
            benessere collettivo. I partecipanti non devono raggiungere la
            miglior prestazione sportiva ma trascorrere nel miglior modo
            possibile i 5k della corsa durante la quale, saranno cosparsi di
            colore e dovranno cimentarsi in alcune attività fino a giungere
            all’arrivo dove avrà inizio un’indimenticabile festa con aperitivo,
            cibo e musica con dj set aperta a tutti…. partecipanti e non.
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            DATA
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            a VALSUGANA COLOR RUN CRAZY edizione 2025 si svolgerà̀ domenica 01
            Giugno 2025 con partenza dalle ore 16.00. La Valsugana Color Run
            crazy avrà luogo in qualsiasi condizione meteorologica, purché́ non
            vi siano pericoli per i partecipanti. CARATTERISTICHE COLOR RUN
            CRAZY La corsa, non competitiva, si svolgerà interamente nel comune
            di Grigno attraverso un percorso particolarmente suggestivo lungo il
            fiume Brenta e attraverso gli abitati di Pianello e Tezze.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>NORME DI PARTECIPAZIONE</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            La partecipazione èconsentita a qualsiasi età. In particolare, i
            minorenni (0-17 anni), dovranno essere iscritti “online", o sul
            posto se l’opzione èancora disponibile, dal proprio genitore, o da
            chi ne esercita la patria potestà, indicando i suoi dati e il numero
            di documento d’ identità. Per tutti i minorenni (0 – 17 anni),
            verràrichiesta anche la liberatoria cartacea firmata da parte di un
            genitore o del tutore legale, per autorizzarne la partecipazione
            (scaricabile sul sito https://www.clubpianello.it) . I bambini dai 0
            ai 7 anni, dovranno obbligatoriamente essere iscritti e accompagnati
            durante la corsa da un adulto (genitore o tutore o accompagnatore).
            Ciascun adulto maggiorenne (18 anni compiuti alla data della
            VALSUGANA COLOR RUN CRAZY edizione 2025 corsa) puòaccompagnare fino
            ad un massimo di 4 bambini di etàcompresa dai 0 ai 7 anni, che si
            impegneràad assistere e guidare nella corsa, attenendosi alle norme
            di sicurezza fornite dall’organizzazione. Con l’iscrizione si
            confermerà anche di essere in possesso di un certificato di idoneità
            alla pratica sportiva di tipo non agonistico (DM 24/04/2013, GU
            20/07/2013)o superiore, ad esempio un certificato per la pratica
            agonistica di qualche disciplina sportiva. Il certificato di
            idoneità alla pratica sportiva di tipo non agonistico può essere
            rilasciato dai Medici di medicina generale e dai Pediatri di libera
            scelta esclusivamente ai propri assistiti o dai Medici Specialisti
            in Medicina dello Sport. Non verrà richiesta copia di tale
            certificato in fase di iscrizione ma il partecipante con
            l’iscrizione dichiara di esserne in possesso e che il certificato
            risulta valido alla data della marcia. Per la partecipazione è
            OBBLIGO indossare la T-Shirt, cappellino e braccialetto con scritta
            identificativa compresa nel race kit quale forma di riconoscimento
            del color runner. È vietato lasciare lungo il percorso eventuali
            rifiuti, è obbligo gettarli negli appositi bidoni.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>QUOTE DI PARTECIPAZIONE</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Le quote di partecipazione all’edizione 2025 della VALSUGANA COLOR
            RUN CRAZY sono stabilite come segue:
          </h4>
          <ul className={classes.description} style={{ marginTop: "0" }}>
            <li>€ 15,00 – INDIVIDUALE ADULTI (dai 11 anni in su)</li>
            <li>€ 10,00 – INDIVIDUALE RAGAZZI (4-10 anni) </li>
            <li>€ 5,00 – BAMBINI (0-3 anni) </li>
          </ul>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            30-31 maggio:
          </h4>
          <ul className={classes.description} style={{ marginTop: "0" }}>
            <li>€ 20,00 – INDIVIDUALE ADULTI (dai 11 anni in su)</li>
            <li>€ 15,00 – INDIVIDUALE RAGAZZI (4-10 anni) </li>
            <li>€ 10,00 – BAMBINI (0-3 anni) </li>
          </ul>
          <h4 className={classes.description}>
            FORMULA GRUPPO 10+1 (acquistando 10 biglietti l’undicesimo sarà in
            omaggio) Iscrivendosi dal 19 Marzo 2025 fino al 30 Aprile si
            riceverà un buono da 2,50€ per una consumazione presso la
            tensostruttura, buono ritirabile il giorno dell’evento dalle ore 13
            alle ore 16.{" "}
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Nella quota di partecipazione è compreso:
          </h4>
          <ul className={classes.description} style={{ marginTop: "0" }}>
            <li>Assistenza RC </li>
            <li>
              Race kit (sacca, t-shirt, occhiali da sole, cappellino,
              braccialetto e palloncino){" "}
            </li>
            <li>Intrattenimento e animazione</li>
          </ul>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Il ritiro del race kit, verrà effettuato il giorno della gara presso
            la tensostruttura presente in loc. Pianello quale anche punto di
            partenza e arrivo della 5k dalle ore 13 alle ore 15.30 del 01 giugno
            2025, dalle ore 13:30 alle ore 15:30 del 31 maggio 2025 in occasione
            della Pianello Trail Run sempre presso la tensostruttura presente in
            loc. Pianello.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>
            RIMBORSO DELLE QUOTE DI PARTECIPAZIONE
          </h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Le quote di partecipazione NON sono rimborsabili in alcun caso,
            anche di cancellazione della manifestazione per problemi di
            sicurezza o per cause di forza maggiore.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>MODALITÀ DI ISCRIZIONE</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Le iscrizioni alla VALSUGANA COLOR RUN crazy edizione 2025
            avverranno esclusivamente online collegandosi al sito internet
            dedicata https://www.clubpianello.it Le iscrizioni sono aperte dal
            19 Marzo 2025 fino ad esaurimento posti. Fatta salva la
            disponibilitàdi posti, saràpossibile iscriversi anche in loco dalle
            ore 13 alle ore 15.00 del giorno della manifestazione con un sovra
            prezzo di euro 5€. Per tale opzione saràaccettato soltanto il
            pagamento in contanti.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>CONFERMA DELLA PROPRIA ISCRIZIONE</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Il sistema di iscrizione on-line invierà una e-mail di conferma al
            termine della procedura di iscrizione/pagamento che costituirà prova
            dell’avvenuta iscrizione. Tale mail andrà mostrata al check-in.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>
            INFORMAZIONI SULLE POLVERI COLORATE{" "}
          </h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Ingredienti: amido di mais, bicarbonato di sodio, cloruro di sodio e
            coloranti alimentari.
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Avvertenze: le polveri colorate non sono un prodotto per uso
            alimentare e non vanno ingerite. Le polveri colorate vanno
            utilizzate solo in esterno sotto la supervisione di un adulto.
            Raramente possono provocare reazioni allergiche o irritazioni.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>NORME DI SICUREZZA </h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Se si corre con un passeggino, si prega di rimanere sulla destra del
            percorso. Se si corre con i bambini piccoli, si prega di prestare
            molta attenzione e indirizzarli durante la corsa. Per qualsiasi
            necessitàsi prega di seguire le indicazioni fornite dagli
            organizzatori, dai volontari e dalle forze dell’ordine che saranno
            presenti lungo il percorso.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>INFORMATIVA PRIVACY </h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Titolare del trattamento èl’Associazione Club Pianello i cui dati
            verranno trattati esclusivamente per le finalitàdi partecipazione
            all’evento denominato “VALSUGANA COLOR RUN edizione crazy”, in
            conformitàal Regolamento Ue 2016/679.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>DIRITTO DI IMMAGINE</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            L’atleta iscritto e partecipante alla VALSUGANA COLOR RUN edizione
            crazy autorizza all’utilizzo a titolo gratuito, senza limiti di
            tempo, anche ai sensi degli artt. 10 e 320 cod.civ e degli artt. 96
            e 97 legge 22.4.1941, n. 633 (Legge sul diritto d’autore), alla
            pubblicazione e/o diffusione in qualsiasi forma delle proprie
            immagini e/o video- riprese effettuate nel contesto dell’evento e
            dei suoi eventi collaterali, sul sito internet e sui Social Media
            (Facebook, Twitter, Instagram, YouTube) ufficiali, su carta stampata
            e/o su qualsiasi altro mezzo di diffusione, nonchéall’autorizzazione
            e alla conservazione delle foto e dei video stessi negli archivi
            informatici dell’Organizzazione, con finalitàdi carattere
            informativo e promozionale. L’autorizzazione non consente l'uso
            delle immagini in contesti che pregiudichino la dignitàpersonale ed
            il decoro del sottoscritto e, comunque, per uso e/o fini diversi da
            quelli sopra indicati.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>MANCATO SVOLGIMENTO </h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Qualora la corsa venga annullata e/o, comunque, non svolta per cause
            non dipendenti e/o non imputabili alla volontàdegli organizzatori,
            compresa la revoca dell’autorizzazione allo svolgimento da parte
            degli Organi Pubblici competenti, per qualsiasi motivo, l’iscritto
            nulla avràa che pretendere dall’Associazione Club Pianello o dagli
            altri co-organizzatori, neppure a titolo di rimborso delle spese
            sostenute e di quelle che devono essere sostenute, valendo la
            sottoscrizione della domanda di iscrizione anche come rinuncia a
            qualsiasi pretesa di risarcimento del danno e/o di indennizzo e/o di
            qualsivoglia pretesa reintegratoria e/o soddisfattiva di un
            eventuale pregiudizio patrimoniale subito e subendo.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>
            SANZIONI PREVISTE IN CASO DI PARTECIPAZIONE FRAUDOLENTA ALLA CORSA{" "}
          </h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            L’iscritto èresponsabile della titolaritàe della custodia del
            proprio kit di gara, acquisendo il diritto ad usufruire di tutti i
            servizi menzionati nel presente regolamento e successivamente
            comunicati. a) Chiunque, senza regolare iscrizione, partecipasse
            senza kit, oltre ad essere ritenuto responsabile di danni a persone
            o cose, incluso séstesso, incorreràin sanzioni sportive di
            competenza degli organi federali e potràessere passibile delle
            sanzioni penali previste per il reato di “furto” (art. 624. c.p.).
            b) Chiunque, senza regolare iscrizione, partecipasse con un kit
            contraffatto o comunque non conforme all’assegnazione, oltre ad
            essere responsabile come sopra indicato, incorrerànelle sanzioni
            sportive e, inoltre, potràessere passibile delle sanzioni penali
            previste per il reato di “furto” (art. 624. c.p.), ovvero,
            alternativamente, per il reato di “truffa” (art. 640 c.p.). Nei casi
            a) e b) i partecipanti potranno essere passibili delle sanzioni
            previste per il reato di “inosservanza dei provvedimenti delle
            Autorità” (art. 650 c.p.). Le fattispecie suddette saranno
            riscontrabili esclusivamente previa verifica di documentazioni
            fotografiche e/o video.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>
            DICHIARAZIONE DI RESPONSABILITÀ (SEGUE DICHIARAZIONE COMPLETA){" "}
          </h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Con l’iscrizione alla VALSUGANA COLOR RUN edizione crazy, dichiaro
            di conoscere e rispettare il presente regolamento che
            verràpubblicato sul sito https://www.clubpianello.it . Sono
            consapevole del fatto che il partecipare alla VALSUGANA COLOR RUN
            edizione crazy e/o agli eventi sportivi in generale èpotenzialmente
            un’attivitàa rischio. Dichiaro, inoltre, di iscrivermi
            volontariamente e sono responsabile anche nel caso di iscrizione del
            minore, di cui sono genitore o tutore legale, da me effettuata. Mi
            assumo tutti i rischi derivanti dalla mia partecipazione all’evento:
            cadute, contatti con veicoli, con altri partecipanti, spettatori o
            altro, condizione di tempo, incluso caldo torrido, freddo estremo
            e/o umido, traffico e condizioni della strada, ogni tipo di rischio
            ben conosciuto e da me valutato e ogni conseguenza derivante da
            malori e/o infortuni subiti o cagionati a séo a terzi, anche
            imputabili alla non idonea condizione fisica, che possano
            manifestarsi durante e dopo la partecipazione all'evento. Dichiaro
            quindi di rinunciare, ora e per il futuro, per mio conto e per
            quello del minore di cui sono genitore o responsabile, a qualsiasi
            richiesta di risarcimento e indennizzo in relazione a quanto sopra.
            Sollevo e libero, nella misura piùampia concessa dalle norme
            imperative vigenti, Associazione Club Pianello, gli enti promotori e
            tutti gli Sponsor e Partner dell’evento, i rispettivi
            rappresentanti, successori, funzionari, direttori, membri, agenti ed
            impiegati delle Societàsopra citate, di tutti i presenti e futuri
            reclami o responsabilitàdi ogni tipo, conosciuti o sconosciuti,
            derivati dalla mia partecipazione all’evento e da quella di chi vi
            partecipa sotto la mia responsabilità.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>AVVERTENZE FINALI</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            L’Associazione Club Pianello si riserva di modificare il presente
            regolamento in qualunque momento per motivi che riterrà̀ opportuni
            per una migliore organizzazione della corsa. Il presente regolamento
            èstato aggiornato in data 14/03/2024. Eventuali modifiche a servizi,
            luoghi ed orari saranno opportunamente comunicate agli atleti
            iscritti oppure saranno riportate sul sito internet.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>CONTATTI</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Sito Internet: https://www.clubpianello.it
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            E-mail: social.clubpianello@libero.it
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>
            CONSIGLI UTILI PER PARTECIPARE ALLA COLOR RUN{" "}
          </h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            PRIMA COLOR RUN
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            La mattina della corsa applica bene sui capelli dell’olio (olio di
            cocco e di oliva sono i migliori), che faciliteràl’eliminazione del
            colore. Un altro trucco e consiglio particolarmente utile,
            soprattutto per chi ha i capelli colorati o tinti, èun buon balsamo.
            Alcuni runner indossano una sciarpa o una bandana per coprire i
            capelli. Altri usano la bandana per coprire la bocca mentre corrono
            attraverso le stazioni colore e per facilitare la pulizia finale. Ti
            consigliamo anche di utilizzare una buona crema solare per la pelle
            e un balsamo per le labbra, faciliteràla rimozione del colore.
            Inoltre ti consigliamo di indossare degli occhiali per proteggere
            gli occhi dalla polvere. Alcune persone indossano occhiali da sole o
            occhialini da nuoto. Divertiti e cerca di non prendere troppa
            polvere negli occhi. Ricorda di non indossare il tuo abbigliamento
            più nuovo.
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            DOPO LA COLOR RUN
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Cerca di rimuovere il piùpossibile la polvere a secco prima di
            iniziare ad usare l’acqua. La maggior parte del colore verràsoffiata
            via come per magia. Per pulire i capelli: aspetta ad usare l’acqua!
            Per prima cosa rimuovi la polvere rimasta sui capelli. Sciacqua
            l’olio/balsamo che hai saggiamente applicato prima della gara con
            l’acqua fredda. La maggior parte del colore dovrebbe venire via. Ora
            lava i capelli normalmente. Èpossibile che per alcuni colori, rosa e
            viola in particolare, siano necessari piùlavaggi. Per pulire la
            pelle: se hai usato una protezione solare, ti basteràutilizzare
            acqua e sapone! Se hai ancora difficoltà, un po’ di struccante
            risolveràtutto. Rimuovi tutta la polvere in eccesso prima di
            aggiungere l’acqua.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>DICHIARAZIONE DI RESPONSABILITÁ </h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            È OBBLIGATORIO LEGGERE CON ATTENZIONE PRIMA DI ISCRIVERSI!
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Con l’iscrizione il runner prende atto che la VALSUGANA COLOR RUN
            edizione crazy èuna prova personale di limiti fisici e mentali e che
            comporta il rischio di danni, anche gravi, e perdita di oggetti
            personali. IL PARTECIPANTE SI ASSUME I RISCHI CHE LA PARTECIPAZIONE
            A QUESTA CORSA COMPORTA e dichiara di essere in buona forma fisica e
            sufficientemente allenato per partecipare all’evento, e di non avere
            controindicazioni segnalate da parte di un medico professionista.
            Dichiara inoltre di essere in possesso di un certificato medico non
            agonistico. Il partecipante prende atto delle seguenti azioni per
            séstesso, i suoi esecutori testamentari, curatori, parenti stretti,
            eredi, o chiunque altro potrebbe avanzare pretese per suo conto, e
            dichiara espressamente che èsua intenzione intraprendere le seguenti
            azioni: a) ACCETTA di rispettare il regolamento della VALSUGANA
            COLOR RUN edizione crazy emanato dall’Associazione Club Pianello
            pubblicato sul sito: https://www.clubpianello.it; accetta inoltre di
            condividere gli scopi sociali ed accettare integralmente il
            regolamento. b) DICHIARA di segnalare tempestivamente ai
            responsabili dell’organizzazione qualsiasi attività, impianto o area
            possa sembrare non adatta o pericolosa per i partecipanti. c)
            SCARICA da ogni responsabilitàper ogni eventuale perdita, danno
            subito o responsabilitàper morte, danno fisico, disabilitàparziale o
            permanente, danni alle proprietà, costi medici o di ospedale, furto
            o danno di ogni tipo, incluse perdite economiche e oggetti persi e/o
            rubati, che potrebbero nascere o essere causate dalla partecipazione
            all’evento, o al viaggio per e dall’evento le seguenti persone o
            parti: Associazione Club Pianello della VALSUGANA COLOR RUN edizione
            crazy, gli sponsor, i direttori di corsa, gli impiegati, i
            collaboratori, i volontari, tutti i paesi o i comuni nei quali si
            svolge l’evento, e i funzionari, dirigenti, impiegati,
            rappresentanti e agenti sopracitati, anche se i danni, le perdite o
            le responsabilitàsono causate da atti negligenti od omissioni delle
            persone, enti o parti sopracitate. d) ACCETTA la possibilitàche ci
            sia traffico sul percorso di gara, e ASSUME QUALSIASI RISCHIO che
            potrebbe nascere dalla partecipazione all’evento incluso: cadute,
            contatto e/o scontro con altri partecipanti, effetti del meteo
            inclusi caldo e/o umidità, materiale di gara difettoso, rischi
            connessi alle condizioni delle strade, VALSUGANA COLOR RUN CRAZY
            edizione 2025
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.description} style={{ marginTop: "30px" }}>
            Buona corsa a tutti!
          </h3>
          <h3
            className={classes.description}
            style={{ marginTop: "20px", marginBottom: "0px" }}
          >
            Il Comitato Organizzatore
          </h3>
          <h3 className={classes.description} style={{ marginTop: "0px" }}>
            CLUB PIANELLO
          </h3>
        </GridItem>
      </GridContainer>
    </div>
  );
}
