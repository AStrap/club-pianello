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
            REGOLAMENTO UFFICIALE “PIANELLO TRAIL RUN” edizione 2025
          </h2>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>1. ORGANIZZAZIONE</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Il Club Pianello organizza per il giorno 31 maggio 2025 la gara di
            corsa in montagna NON AGONISTICA denominata PIANELLO TRAIL RUN (PTR)
            sia a carattere competitivo che non competitivo. Per la gara
            competitiva è necessaria la seguente documentazione:
          </h4>
          <ul className={classes.description} style={{ marginTop: "0" }}>
            <li>
              Certificato medico di idoneità ad attività sportiva agonistica per
              atletica leggera, skyrunning, sci di fondo, sci alpinismo,
              ciclismo, triathlon e valido il giorno della gara NON È AMMESSA
              AUTOCERTIFICAZIONE o dichiarazione di sana e robusta costituzione
              fisica rilasciata dal proprio medico curante. Per la gara NON
              competitiva non è necessario esibire il certificato medico di
              idoneità ad attività sportiva agonistica ma l’atleta
              sottoscrivendo il presente regolamento dichiara{" "}
            </li>
            <li>di assumersi i rischi che la partecipazione a questa corsa</li>
            <li>
              dichiara di essere in buona forma fisica e sufficientemente
              allenato per partecipare all’evento,{" "}
            </li>
            <li>
              di non avere controindicazioni segnalate da parte di un medico
              professionista.
            </li>
          </ul>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Per la gara non competitiva i concorrenti non verranno inseriti in
            classifica.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>2. TRACCIATO DI GARA</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Il PTR è una gara competitiva di corsa su terreni misti tra salite e
            discese, con partenza in linea, per atleti di ambo i sessi che
            abbiano compiuto 14 anni età. Per i minori è previsto l’obbligo di
            accompagnamento di un maggiorenne (da compilare relativa
            modulistica).
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            DATI DI GARA:
          </h4>
          <h4 className={classes.description} style={{ margin: "0" }}>
            Partenza e Arrivo: frazione Pianello comune di Grigno
          </h4>
          <h4 className={classes.description} style={{ margin: "0" }}>
            Sviluppo totale: 10,9 km
          </h4>
          <h4 className={classes.description} style={{ margin: "0" }}>
            Dislivello positivo: 430 metri
          </h4>
          <h4 className={classes.description}>
            La partenza è prevista a partire dalla frazione Pianello in
            provincia di Trento presso la Chiesa dove è presente anche una
            tendostruttura per l’intera manifestazione. Da qui si proseguirà
            lungo la strada comunale asfaltata in direzione Veneto fino al
            confine tra le due regioni, oltrepassandolo e costeggiando il fiume
            Brenta fino alla diga in frazione “Pianello di sotto - Vallon”,
            quindi si attraversa quest’ultima e si prosegue lungo una strada
            sterrata fino a Primolano. Si attraversa l’abitato per imboccare le
            “Scale di Primolano” ovvero una strada asfaltata a tornanti fino ad
            entrare nel forte “Tagliata della Scala”. Quindi si percorre in
            salita il forte fino alla sommità, si prosegue su strade sterrate
            fino ad imboccare un sentiero sterrato in quota (circa 640 m slm)
            che riporta in Trentino. Appena oltrepassato il confine, all’incirca
            al km 9,50 inizia la discesa nel bosco passando per la sorgente
            “Fontanelle” fino all’arrivo in corrispondenza del maso Calchera San
            Giorgio di proprietà della famiglia Nerobutto. Al punto 3 sarà
            previsto un punto di ristoro per i concorrenti.
          </h4>
          <h4 className={classes.description}>
            Il tracciato è disponibile sulla pagina del sito{" "}
            <a href="https://www.clubpianello.it/">
              https://www.clubpianello.it/
            </a>{" "}
            oppure cliccando a questo link in formato .gpx Clicca qui e guarda
            documentazione fotografica di alcuni passaggi suggestivi.
          </h4>
          <Button
            href="/pianelloTrail"
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: "20px", marginTop: "20px" }}
          >
            Clicca qui e guarda documentazione fotografica di alcuni passaggi
            suggestivi.
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>3. ISCRIZIONI</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Le iscrizioni online saranno aperte da mercoledì 19 marzo 2025 fino
            al 30 maggio 2025 sul sito https://www.clubpianello.it/; fino al
            raggiungimento del numero massimo di partecipanti. All’atto del
            ritiro pettorale, se non già provveduto è necessario presentare:
          </h4>
          <ul className={classes.description} style={{ marginTop: "0" }}>
            <li>
              liberatoria Vertical debitamente compilata e scaricabile dal link
              https://www.clubpianello.it/
            </li>
            <li>certificato Medico in corso di validità</li>
          </ul>
          <h4>L’iscrizione comprende: </h4>
          <ul className={classes.description} style={{ marginTop: "0" }}>
            <li>Pacco gara con gadget manifestazione </li>
            <li>Assicurazione</li>
            <li>Ristoro intermedio (all’uscita del forte, quota circa 600m)</li>
            <li>Pasta party presso la tensostruttura </li>
            <li>Assistenza sanitaria sul percorso e all’arrivo</li>
            <li>Medaglia finale </li>
          </ul>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>4. ACCETTAZIONE DEL REGOLAMENTO</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            La manifestazione si svolgerà in conformità al presente regolamento,
            e alle eventuali modifiche ed avvisi che saranno pubblicati nel sito
            web e sui canali social ufficiali:
          </h4>
          <h4 className={classes.description} style={{ margin: "0" }}>
            Sito web: https://clubpianello.it/ruleTrail
          </h4>
          <h4 className={classes.description} style={{ margin: "0" }}>
            Facebook: https://www.facebook.com/clubpianello/
          </h4>
          <h4 className={classes.description} style={{ margin: "0" }}>
            Instagram: https://www.instagram.com/clubpianello/
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            L'iscrizione alla PTR comporta, da parte di ogni concorrente,
            l'accettazione in tutte le sue parti e senza riserve del presente
            regolamento. Ogni eventuale violazione potrà essere motivo di
            esclusione dalla gara a giudizio insindacabile da parte degli
            organizzatori. Con l’iscrizione, il partecipante esonera gli
            organizzatori da ogni responsabilità, sia civile sia penale, per
            danni a persone e/o cose da lui causati o a lui derivati. Ogni
            concorrente prende atto che la PVR richiede un notevole impegno
            fisico e tecnico. Con l'iscrizione dichiara implicitamente sotto la
            propria responsabilità di essere in possesso di tali requisiti.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>5. PREMI</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Verranno premiati il primo concorrente maschio e femmina delle
            categorie (&lt;18; 30; 40; 50; 60; &gt;60) della gara COMPETITIVA e
            il primo il miglior tempo maschio e femmina sulla discesa finale
            come indicato nella mappa.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>6.PROGRAMMA MANIFESTAZIONE</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Sabato 31 maggio 2025
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            13.30 – 15.30 ritiro pettorali e pacchi gara presso la
            tendostruttura in frazione Pianello (a pochi passi dalla partenza).
            Il pettorale deve essere portato sopra gli indumenti, in nessun caso
            fissato sullo zaino o su di una gamba, e posizionato sul petto o sul
            ventre ed essere visibile sempre nella sua totalità durante tutta la
            corsa.
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            16.00 partenza gara
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            17.00 (circa) arrivo primo concorrente (l’arrivo dista 5 minuti a
            piedi dalla partenza e struttura)
          </h4>
          <h4 className={classes.description}>
            18.30 (circa) fine manifestazione e premiazioni.
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Le responsabilità organizzative cesseranno al momento dell’arrivo.
            Per chi volesse fermarsi, dalle ore 18.30 avrà inizio la festa del
            Club Pianello con fornitissimo stand gastronomico, musica e fuochi
            d’artificio.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>7. QUOTE DI ISCRIZIONE</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Le quote di iscrizione per partecipare sono le seguenti:
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            10 €: dal 03 marzo al 29 maggio
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            15 €: il 30 e 31 maggio
          </h4>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            FORMULA GRUPPO 10+1 (acquistando 10 biglietti l’undicesimo sarà in
            omaggio)
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>8. PARTENZA</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            I concorrenti dovranno presentarsi alla partenza (di fronte alla
            chiesa frazione Pianello) entro le 15:30 di sabato 25 maggio 2024.
            Il cronometraggio della gara competitiva sarà effettuato tramite
            chip elettronico. Il concorrente dovrà presentarsi almeno 30 minuti
            prima della partenza per essere registrato e convalidato. Una volta
            che il concorrente viene convalidato alla partenza dovrà restare
            all’interno dello spazio “zona di partenza” delimitato appositamente
            dall’organizzazione e non potrà uscirne fino allo start (salvo casi
            di conclamata necessità). Il corridore non convalidato risulterà
            “non partito” e non verrà annoverato tra i finisher. In caso di
            danneggiamento dello stesso l’organizzazione non si assume la
            responsabilità di malfunzionamento dello stesso, si prega quindi di
            conservare correttamente il proprio dispositivo. Il pettorale è il
            lascia-passare necessario per accedere alle aree di rifornimento,
            consegna e ritiro zaini personali.
          </h4>
          <h5 className={classes.description}>
            Iscrivendosi dal 19 Marzo 2025 fino al 30 Aprile si riceverà un
            buono da 2,50€ per una consumazione presso la tensostruttura, buono
            ritirabile il giorno dell’evento a partire dalle ore 13.
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>9. ANNULLAMENTO</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Qualora la corsa venga annullata e/o, comunque, non svolta per cause
            non dipendenti e/o non imputabili alla volontà̀ degli organizzatori,
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
          <h3 className={classes.title}>10. MATERIALE OBBLIGATORIO </h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Per tutti i concorrenti sarà obbligatorio dotarsi del seguente
            materiale:
          </h4>
          <ul className={classes.description} style={{ marginTop: "0" }}>
            <li>Scarpe da trail</li>
            <li>Telefono cellulare carico e funzionante </li>
            <li>
              Giacca antivento/antipioggia (obbligatoria solo in caso di
              maltempo)
            </li>
          </ul>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            È permesso l’utilizzo di bastoni da trekking.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>11. ABBANDONO GARA E TEMPO MASSIMO </h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Il tempo massimo per completare il percorso per la gara competitiva
            è stabilito in 2h30’. Per la gara non viene rilevato il tempo. In
            caso di abbandono per qualsiasi motivo, l’atleta dovrà comunicarlo
            allo staff lungo il percorso consegnando agli stessi il chip.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>12. ASSICURAZIONE</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            L'organizzazione sottoscrive un'assicurazione di responsabilità
            civile per tutto il periodo della prova. L’organizzazione si fa
            carico di assicurare ogni iscritto per garantire la tutela
            assicurativa di tutti i corridori. Il costo dell'assicurazione è
            compreso nella quota d’iscrizione. La partecipazione avviene sotto
            l'intera responsabilità dei concorrenti, che rinunciano ad ogni
            ricorso contro gli organizzatori in caso di danni e di conseguenze
            ulteriori che sopraggiungano prima ed in seguito alla gara e al di
            fuori di essa. Al momento dell'iscrizione per concludere la pratica,
            il corridore deve sottoscrivere tale regolamento che contiene lo
            scarico responsabilità. Si consiglia comunque ogni corridore a
            sottoscrivere una polizza assicurativa personale per infortuni e
            eventuale recupero e trasporto in elicottero.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>13. DIRITTI DI IMMAGINE</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Gli organizzatori effettueranno foto e riprese video durante lo
            svolgimento della manifestazione. Le foto saranno rese disponibili
            sul sito internet e/o sui canali social dedicati alla gara. Immagini
            e riprese potranno inoltre essere rese disponibili a sponsor, media
            di settore e altri partner a fini divulgativi e promozionali. Con la
            partecipazione alla gara ogni concorrente rinuncia espressamente ad
            avvalersi dei diritti di immagine e a rivalersi contro
            l'organizzazione per l'utilizzo del materiale audiovisivo.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>14. ESONERO DI RESPONSABILITÀ</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            È OBBLIGATORIO LEGGERE CON ATTENZIONE PRIMA DI ISCRIVERSI! Con
            l’iscrizione l’atleta prende atto che la PIANELLO VERTICAL RUN èuna
            prova personale di limiti fisici e mentali e che comporta il rischio
            di danni, anche gravi, e perdita di oggetti personali. Il
            partecipante prende atto delle seguenti azioni per séstesso, i suoi
            esecutori testamentari, curatori, parenti stretti, eredi, o chiunque
            altro potrebbe avanzare pretese per suo conto, e dichiara
            espressamente che èsua intenzione intraprendere le seguenti azioni:
          </h4>
          <ol className={classes.description} style={{ marginTop: "0" }}>
            <li>
              ACCETTA di rispettare il regolamento della PIANELLO VERTICAL RUN
              emanato dall’Associazione Club Pianello pubblicato sul sito:
              https://www.clubpianello.it; accetta inoltre di condividere gli
              scopi sociali ed accettare integralmente il regolamento.{" "}
            </li>
            <li>
              DICHIARA di segnalare tempestivamente ai responsabili
              dell’organizzazione qualsiasi attività̀, impianto o area possa
              sembrare non adatta o pericolosa per i partecipanti.{" "}
            </li>
            <li>
              SCARICA da ogni responsabilità̀ per ogni eventuale perdita, danno
              subito o responsabilità̀ per morte, danno fisico,
              disabilitàparziale o permanente, danni alle proprietà̀, costi
              medici o di ospedale, furto o danno di ogni tipo, incluse perdite
              economiche e oggetti persi e/o rubati, che potrebbero nascere o
              essere causate dalla partecipazione all’evento, o al viaggio per e
              dall’evento le seguenti persone o parti: Associazione Club
              Pianello del PIANELLO VERTICAL RUN, gli sponsor, i direttori di
              corsa, gli impiegati, i collaboratori, i volontari, tutti i paesi
              o i comuni nei quali si svolge l’evento, e i funzionari,
              dirigenti, impiegati, rappresentanti e agenti sopracitati, anche
              se i danni, le perdite o le responsabilità̀ sono causate da atti
              negligenti od omissioni delle persone, enti o parti sopracitate.
            </li>
            <li>
              ACCETTA la possibilità̀ che ci sia traffico sul percorso di gara, e
              ASSUME QUALSIASI RISCHIO che potrebbe nascere dalla partecipazione
              all’evento incluso: cadute, contatto e/o scontro con altri
              partecipanti, effetti del meteo inclusi caldo e/o umidità,
              materiale di gara difettoso, rischi connessi alle condizioni delle
              strade, degli incroci ferroviari, acquazzoni, potenziali
              complicazioni per il colore sui vestiti e sulle persone, e ogni
              pericolo che puòessere generato dagli spettatori o dai volontari.
              Accetta inoltre che tali rischi includano quelli causati dalla
              negligenza delle persone fisiche o giuridiche citate nel paragrafo
              c) o altre parti.{" "}
            </li>
            <li>
              ACCETTA DI NON DENUNCIARE NESSUNA DELLE PERSONE O ENTE SOPRACITATO
              NEL PARAGRAFO C) per ogni reclamo, perdita, o responsabilità̀ che
              ho fin qui scaricato.{" "}
            </li>
            <li>
              INDENNIZZA E MANLEVA LE PERSONE FISICHE E GIURIDICHE SOPRA CITATE
              NEL PARAGRAFO C) per ogni reclamo fatto o responsabilità̀ causata a
              queste parti per: 1) sue azioni od omissioni, 2) azioni, omissioni
              o negligenza di altre parti incluse quelle qui indennizzate, 3) le
              condizioni delle attrezzature, o delle aree dove si svolge
              l’evento; le regole di partecipazione; o ogni altro danno causato
              da un avvenimento legato all’evento in oggetto.{" "}
            </li>
            <li>
              {" "}
              AUTORIZZA l’utilizzo del proprio nome, dei propri dati personali
              comunicati all’atto dell’iscrizione e della sua immagine
              all’interno della partecipazione dell’evento e rinuncia a tutti i
              diritti per ogni futuro compenso per cui potrebbe altrimenti avere
              titolo, come anche per il risultato economico derivante
              dall’utilizzo della propria immagine.{" "}
            </li>
            <li>
              AUTORIZZA qualsiasi medico autorizzato, tecnico di emergenza
              sanitaria, ospedale o altra struttura di assistenza
              medico-sanitaria a trattare il sottoscritto e ad agire con lo
              scopo di tentare di curare od alleviare i danni subiti derivanti
              dalla partecipazione alla manifestazione, eseguendo tutte le
              procedure ritenute medicalmente consigliabili.{" "}
            </li>
            <li>
              COMPRENDE E ACCETTA che la quota di partecipazione versata non
              èrimborsabile in nessun caso, inclusa la cancellazione della
              manifestazione per problemi di sicurezza o per qualsiasi altra
              causa al di làdel controllo dell’Associazione Club Pianello,
              compresi, senza limitazione: forti venti, pioggia, fulmini ed
              incidenti.{" "}
            </li>
          </ol>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>15. PRIVACY</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Con l’iscrizione, ai sensi dell’art.13 del Regolamento UE/2016/679 e ai sensi dell’art. 13 del DLgs 30/06/2003 n. 196, i partecipanti autorizzano l’organizzazione della “Club Pianello” al trattamento dei dati personali che li riguardano. Tale trattamento, cautelato da opportune misure idonee a garantire la sicurezza e la riservatezza dei dati stessi, avverrà esclusivamente per finalità legate a detta manifestazione. 
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} style={{ textAlign: "left" }}>
          <h3 className={classes.title}>16. AVVERTENZE IL COMITATO</h3>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Organizzatore si riserva di modificare il presente regolamento per motivi legati ad un miglior svolgimento della gara. Si invitano pertanto i partecipanti a seguire i profili social della gara (Facebook, Instagram) e controllare regolarmente il sito web. 

Per qualsiasi comunicazione il comitato organizzatore è contattabile via mail scrivendo al seguente indirizzo:

social.clubpianello@libero.it</h4>
          <h3 className={classes.description} style={{ marginTop: "30px" }}>
            Buona gara a tutti! 
          </h3>
          <h3 className={classes.description} style={{ marginTop: "20px", marginBottom: "0px" }}>
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
