// Instuderingsfrågor inför tentan, i samma ordning som underlaget.
addTopics("pl55", [
  {t: "Instuderingsfrågor inför tentan", q: [
    // Mål 1. Projektmodeller (1–11)
    ["Hur brukar faser, krav och leverans hanteras i vattenfallsmodellen?", [
      "Kraven växer fram efter varje delleverans och godkänns i nästa sprint.",
      "Kraven bestäms tidigt, faserna följer på varandra och leveransen godkänns vanligtvis mot slutet.",
      "Utveckling och drift pågår parallellt, med godkännande av budgeten efter varje test.",
      "Faserna väljs löpande och leveransen godkänns innan arbetet med kraven börjar."
    ], 1, "Arbetet går i en planerad följd, till exempel krav, design, utveckling och test. En fas avslutas vanligtvis innan nästa börjar. Slutleverans och slutgodkännande sker normalt i slutet."],
    ["Användare hittar inte bekräftelseknappen i en tidig version av ett anmälningsflöde. Hur kan teamet agera agilt?", [
      "Behålla planen och samla alla synpunkter till slutgodkännandet.",
      "Besluta om hela gränssnittet utifrån det första testet och sedan låsa kraven.",
      "Byta ut hela flödet och vänta med nästa test tills alla funktioner är färdiga.",
      "Prioritera en tydligare knapp i nästa sprint och testa om ändringen hjälper."
    ], 3, "När kraven är osäkra kan teamet testa en enkel version tidigt. Återkopplingen om knappen ger underlag för att ändra prioriteringen och pröva förbättringen med användare."],
    ["Vilket exempel skiljer på iterativt arbete och inkrementell leverans?", [
      "Iterativt: förbättra bokningsformuläret i flera omgångar. Inkrementellt: leverera bokning, sedan betalning och sedan avbokning.",
      "Iterativt: leverera bokning och betalning var för sig. Inkrementellt: förbättra samma formulär utan att lägga till en del.",
      "Iterativt: fastställa alla krav före utvecklingen. Inkrementellt: godkänna hela systemet i ett steg.",
      "Iterativt: byta verktyg inför varje sprint. Inkrementellt: dela upp arbetet i faser utan delresultat."
    ], 0, "Iterationer förfinar en lösning genom upprepade omgångar. Inkrement utökar den användbara produkten med färdiga delar. Ett team kan göra båda i samma projekt."],
    ["En systemflytt har kända krav och godkännanden i bestämd ordning. Ett anmälningsflöde har osäkra krav som behöver testas med användare. Vilket upplägg passar?", [
      "Agilt för systemflytten och vattenfall för anmälningsflödet.",
      "Vattenfall i båda fallen, eftersom båda projekten har en teknisk leverans.",
      "Vattenfall för systemflytten och agilt för anmälningsflödet.",
      "Agilt i båda fallen, eftersom fasta godkännanden kräver täta ändringar av kraven."
    ], 2, "Systemflyttens kända krav och ordnade godkännanden går att planera i förväg. För anmälningsflödet kan tidiga tester i korta cykler visa vad användarna behöver."],
    ["Hur kan ett hybridupplägg för ett bokningssystem kombinera projektstyrning och sprintar?", [
      "Styrgruppen beslutar om varje sprintuppgift och utvecklingsteamet godkänner projektbudgeten.",
      "Styrgruppen sätter budget, slutdatum och beslutspunkter. Teamet utvecklar och testar funktioner i sprintar.",
      "Styrgruppen bestämmer budgeten efter varje test och teamet låser alla funktioner vid projektstart.",
      "Styrgruppen följer bara den dagliga tavlan och teamet bestämmer varje beslutspunkt efter driftsättningen."
    ], 1, "Projektet kan ha fasta ramar och ett förutbestämt godkännande inför lansering. Teamet kan samtidigt prioritera, testa och anpassa funktionerna i korta sprintar."],
    ["Varför planeras nästa sprint mer detaljerat än de kommande månaderna, och vad visar en roadmap?", [
      "Teamet känner till arbetet närmast i tiden bättre. Roadmapen visar riktning, större mål och planerade leveranser.",
      "Teamet vet mer om kommande månader. Roadmapen visar därför den exakta arbetsfördelningen per dag.",
      "Nästa sprint har flest beroenden. Roadmapen visar enbart vilka hinder som ska lösas under sprinten.",
      "Långsiktiga krav ändras oftare. Roadmapen visar därför bara uppgifter som redan är klara."
    ], 0, "Nästa sprint går att planera med aktuell kunskap om uppgifter och kapacitet. På längre sikt kan krav och prioriteringar ändras. En roadmap håller den planeringen på övergripande nivå."],
    ["Hur hänger Product Backlog, Sprint Backlog och inkrement ihop i Scrum?", [
      "Product Backlog är sprintens plan. Sprint Backlog beskriver hela produktens behov. Inkrementet är nästa sprintmål.",
      "Product Backlog innehåller levererade funktioner. Sprint Backlog visar produktens roadmap. Inkrementet är återstående arbete.",
      "Product Backlog innehåller produktens arbete. Sprint Backlog är resultatet. Inkrementet är arbetsplanen.",
      "Arbete väljs ur Product Backlog till Sprint Backlog tillsammans med sprintmål och plan. Arbetet kan ge ett färdigt, användbart inkrement."
    ], 3, "Product Backlog är en ordnad lista över produktens arbete. Sprint Backlog innehåller sprintmålet, det valda arbetet och planen. Ett inkrement är användbart och uppfyller Definition of Done."],
    ["Vad beslutas i sprintplaneringen, och vad gör utvecklarna i Daily Scrum?", [
      "I planeringen fastställs hela projektets krav. Dagligen fördelar beställaren nya uppgifter.",
      "I planeringen godkänns det förra inkrementet. Dagligen samlas användarnas återkoppling in.",
      "I planeringen bestäms sprintmål, valt arbete och en plan. Dagligen följer utvecklarna upp framstegen mot målet och anpassar planen.",
      "I planeringen bestäms vilka möten teamet ska hålla. Dagligen bedömer styrgruppen om sprinten får fortsätta."
    ], 2, "Sprintplaneringen besvarar varför sprinten är värdefull, vad som kan göras och hur. Daily Scrum hjälper utvecklarna att se hinder och anpassa arbetet mot sprintmålet."],
    ["Vilket par beskriver vad en Sprint Review respektive ett retrospektiv kan leda till?", [
      "Review: intressenter föreslår ombokning. Retrospektiv: teamet förbättrar hur det uppmärksammar hinder.",
      "Review: teamet ändrar mötesrutinen. Retrospektiv: intressenter prioriterar nya funktioner.",
      "Review: teamet uppskattar nästa sprints kapacitet. Retrospektiv: beställaren godkänner inkrementet.",
      "Review: styrgruppen fördelar uppgifter. Retrospektiv: användarna testar produkten inför slutleverans."
    ], 0, "Vid Sprint Review granskar team och intressenter utfallet och diskuterar nästa steg för produkten. I retrospektivet granskar teamet hur det arbetade och väljer förbättringar för nästa sprint."],
    ["Ett team kallar sina arbetsveckor för sprintar. Vad behöver du också undersöka för att veta om det använder Scrum?", [
      "Om sprintarna alltid ligger på fem arbetsdagar och om teamet använder en digital tavla.",
      "Om varje sprint avslutas med ett formellt budgetgodkännande.",
      "Hur teamet arbetar med Scrums ansvar, händelser och artefakter, till exempel vem som ordnar Product Backlog.",
      "Om alla uppgifter uppskattas i timmar och vem som rapporterar dem till styrgruppen."
    ], 2, "En sprintlängd säger lite om resten av arbetssättet. Scrum omfattar bland annat Product Owner, Scrum Master och Developers samt händelser som Sprint Review och artefakter som Product Backlog."],
    ["Beställaren vill lägga till en funktion mitt i projektet. Hur kan kravet hanteras i vattenfall respektive agilt arbete?", [
      "I vattenfall läggs kravet direkt i nästa fas. Agilt fryses kravet till slutleveransen.",
      "I vattenfall bedöms påverkan och ändringen godkänns formellt. Agilt kan kravet läggas i backloggen och prioriteras inför kommande arbete.",
      "I vattenfall avgör utvecklarna ändringen vid nästa avstämning. Agilt måste pågående sprint omedelbart byta mål.",
      "I båda fallen räcker det att skriva in önskemålet i tidplanen och sätta ett leveransdatum."
    ], 1, "I ett vattenfallsprojekt behöver ansvariga bedöma exempelvis tid, budget och resurser innan en ändring godkänns. I Scrum kan Product Owner ordna det nya kravet i Product Backlog, så att det kan tas upp i en kommande sprint."],

    // Mål 2. ITIL och Lean (12–19)
    ["Vad hjälper ITIL en verksamhet med?", [
      "Att skapa en detaljerad tidplan för varje utvecklingssprint.",
      "Att bedöma projektets lönsamhet före ett investeringsbeslut.",
      "Att planera och styra enbart installationen av nya system.",
      "Att planera, leverera, förvalta och förbättra IT-tjänster."
    ], 3, "ITIL står för Information Technology Infrastructure Library och ger vägledning för IT-tjänstehantering. Exempel är att hantera incidenter, hitta orsaker till återkommande problem och genomföra ändringar kontrollerat."],
    ["Ett anmälningssystem har installerats. Vad behöver användarna för att det också ska fungera som en IT-tjänst?", [
      "Fungerande anmälningar och bekräftelser över tid, med exempelvis support, underhåll och uppdateringar.",
      "Ett slutgodkännande av installationen och en lista över färdigutvecklade funktioner.",
      "En beslutad projektbudget och tillgång till teamets interna planeringstavla.",
      "En demonstrationsmiljö och en plan för vad som ska byggas nästa termin."
    ], 0, "Installationen levererar den tekniska lösningen. Den löpande tjänsten kräver också drift, support och underhåll. Besökare behöver till exempel få rätt bekräftelse och kunna få hjälp vid inloggningsproblem."],
    ["Ändringsbesked når inte evenemangets besökare. Vilken åtgärd hör till incidenthantering respektive problemhantering?", [
      "Incident: utreda felet i aviseringssystemet. Problem: skicka beskedet manuellt.",
      "Incident: prioritera nya aviseringsfunktioner. Problem: informera om nästa version.",
      "Incident: få ut beskedet nu. Problem: utreda varför aviseringarna uteblir och förebygga att felet återkommer.",
      "Incident: stänga ärendet efter en återställning. Problem: registrera varje ny störning separat utan vidare utredning."
    ], 2, "Incidenthantering återställer tjänsten snabbt, till exempel via ett alternativt utskick. Problemhantering söker orsaken bakom en eller flera incidenter, till exempel ett återkommande fel i meddelandekön."],
    ["Vad är värde respektive slöseri för en besökare som anmäler sig till ett evenemang?", [
      "Värde: en intern godkännanderunda. Slöseri: att bekräftelsen innehåller rätt tid och plats.",
      "Värde: en snabb bekräftelse med korrekt information. Slöseri: onödig väntan på grund av manuell omregistrering.",
      "Värde: samma uppgifter i flera interna listor. Slöseri: att besökaren får besked direkt.",
      "Värde: många formulärfält. Slöseri: att besökaren kan återanvända uppgifter som redan har lämnats."
    ], 1, "Lean utgår från vad användaren behöver. En korrekt bekräftelse skapar värde för besökaren. Extra registrering och onödig väntan förbrukar tid utan att förbättra tjänsten."],
    ["Hur kan en kartläggning av värdeflödet avslöja väntan eller dubbelarbete?", [
      "Den listar bara stegen som besökaren själv utför.",
      "Den jämför antalet uppgifter mellan teamen utan att följa överlämningarna.",
      "Den visar den planerade leveranstiden och utelämnar vad som händer mellan stegen.",
      "Den följer arbetet och informationen från anmälan till bekräftelse, inklusive väntan och överlämningar."
    ], 3, "Värdeflödet omfattar alla steg som krävs för att leverera till användaren. En karta över nuläget kan visa var uppgifter matas in igen eller var anmälningar blir liggande innan någon skickar svar."],
    ["Eventadmin behöver mata in samma uppgifter flera gånger. Vilket litet försök kan minska dubbelarbetet och visa om flödet förbättras?", [
      "Byta alla system samtidigt och räkna hur många interna möten projektet haft.",
      "Behålla dubbelregistreringen men jämföra antalet anmälningar månad för månad.",
      "Testa en gemensam registrering och automatisk överföring för ett evenemang. Jämför handläggningstid och fel före och efter.",
      "Utöka kontrollen till ytterligare en lista och mäta hur många fält som fylls i."
    ], 2, "Pröva att registrera uppgifterna en gång och överföra dem till övriga system. Jämför till exempel antalet manuella moment, tiden per anmälan och registreringsfel med nuläget."],
    ["Hur kan ITIL och Lean komplettera varandra i arbetet med en digital tjänst?", [
      "ITIL stödjer stabil drift och kontrollerade ändringar. Lean hjälper teamet att minska väntetid och dubbelarbete i flödet.",
      "ITIL tar bort manuella moment i flödet. Lean avgör vem som godkänner varje teknisk ändring.",
      "ITIL används vid projektstart. Lean används när tjänsten ska stängas.",
      "ITIL följer upp budgeten. Lean ersätter arbetet med incidenter när en tjänst redan är i drift."
    ], 0, "Incident-, problem- och förändringshantering hjälper verksamheten att hålla tjänsten stabil. Lean ger arbetssätt för att hitta slöseri och stegvis förbättra flödet för användaren."],
    ["Vilken förberedelse minskar risken för avbrott när en IT-tjänst i drift behöver uppdateras?", [
      "Boka första lediga tid och följ upp funktioner och användare efter driftsättningen.",
      "Bedöm risk och påverkan, testa uppdateringen, planera tidpunkt och återställning samt informera berörda.",
      "Prioritera funktionslistan och låt varje team välja en egen tid för uppdatering.",
      "Testa i produktion och skapa en säkerhetskopia först när tjänsten har startat igen."
    ], 1, "ITIL:s förändringshantering stödjer riskbedömning, godkännande och planering. Ta reda på vilka funktioner och användare som berörs och hur ni återgår till föregående version om något går fel."],

    // Mål 5. Digitala verktyg för styrning och uppföljning (20–27)
    ["När passar en digital uppgiftstavla i Jira eller liknande, och när passar ett Gantt-schema?", [
      "Tavlan visar tidplanens kritiska beroenden. Gantt-schemat visar vem som jobbar med varje kort just nu.",
      "Tavlan passar för slutrapporten. Gantt-schemat används bara vid projektstart.",
      "Tavlan visar historiska kostnader. Gantt-schemat visar vad som blockerar teamet i dag.",
      "Tavlan visar status och ansvar i det dagliga arbetet. Gantt-schemat visar tidslinje, milstolpar och beroenden."
    ], 3, "På tavlan ser teamet vad som är pågående, blockerat eller klart och vem som ansvarar. Gantt-schemat hjälper projektledaren att se hur aktiviteter ligger i tiden och påverkar varandra."],
    ["Vilken information hjälper dig att upptäcka en försenad uppgift och se vad som kan påverkas?", [
      "Uppgiftens namn, etiketter och vilka som följer den.",
      "Uppgiftens uppskattade kostnad, prioritet och datumet då den skapades.",
      "Uppgiftens planerade och prognostiserade datum, status, ansvarig och beroenden till annat arbete.",
      "Uppgiftens status, ansvarig och alla avslutade uppgifter i samma projekt."
    ], 2, "Datum, status och återstående arbete gör avvikelsen synlig. Beroenden visar vilka efterföljande uppgifter och milstolpar som förseningen kan påverka."],
    ["Flera kort står länge i ”Pågår” på sprinttavlan. Vad bör teamet kontrollera innan det ändrar planen?", [
      "Om kort är blockerade, vad de väntar på, hur mycket kapacitet teamet har och vilka uppgifter som är viktigast.",
      "Om tavlan kan få fler kolumner för att fördela ut korten.",
      "Om det går att starta fler uppgifter så att alla har något nytt att göra.",
      "Om kategorierna kan döpas om så att korten hamnar i en annan status."
    ], 0, "Gamla kort i samma kolumn eller många pågående uppgifter kan tyda på hinder eller för mycket parallellt arbete. Kontrollera orsakerna, till exempel väntan på beslut eller hjälp, innan ni omprioriterar."],
    ["Uppgiften planerades till 12 timmar, 10 är rapporterade och 6 återstår. Vad visar uppföljningen?", [
      "Uppgiften ligger två timmar före plan eftersom bara 10 timmar har rapporterats.",
      "Prognosen är 16 timmar, fyra över plan. Kontrollera om återstående kapacitet och tidplan räcker.",
      "Prognosen är 6 timmar eftersom arbetet som redan är gjort saknar betydelse för uppföljningen.",
      "Uppgiften håller planen eftersom resterande tid alltid är skillnaden mellan plan och rapportering."
    ], 1, "Planerad tid är utgångspunkten, rapporterad tid är det som redan lagts ned och återstående arbete är en aktuell uppskattning. Tillsammans ger rapporterade och återstående timmar en prognos att jämföra med planen."],
    ["Vad behöver projektledaren kunna hitta i en risklogg respektive en beslutslogg?", [
      "Riskloggen visar vem som godkände ett beslut. Beslutsloggen visar bara åtgärder för öppna risker.",
      "Riskloggen visar bara inträffade fel. Beslutsloggen visar alla idéer utan att ange vilka beslut som togs.",
      "Riskloggen visar sannolikhet och konsekvens. Beslutsloggen visar bara datum för nästa styrgruppsmöte.",
      "Riskloggen visar risk, bedömning, ansvarig, åtgärd och status. Beslutsloggen visar beslut, datum, beslutsfattare och motivering."
    ], 3, "Riskloggen stödjer uppföljning av risker och åtgärder innan de blir problem. Beslutsloggen gör det möjligt att förstå och följa upp vilka beslut som faktiskt togs och varför."],
    ["Vad gör versionshistorik och behörigheter i en gemensam dokumentyta?", [
      "Versionshistoriken bestämmer vem som får läsa. Behörigheterna visar tidigare innehåll.",
      "Versionshistoriken uppskattar tid för redigering. Behörigheterna visar när dokumentet behöver uppdateras.",
      "Versionshistoriken gör det möjligt att se och återställa ändringar. Behörigheter styr vem som får läsa, ändra eller ta bort.",
      "Versionshistoriken ersätter åtkomstkontrollen. Behörigheter gör att tidigare versioner inte behöver sparas."
    ], 2, "Utan versionshistorik kan innehåll som skrivits över vara svårt att få tillbaka. Utan lämpliga behörigheter kan någon ändra, radera eller se information som de inte ska ha tillgång till."],
    ["Hur kan ett ändringsförslag från en Sprint Review följas från återkoppling till beslut och ändrad plan?", [
      "Lägg förslaget direkt i pågående sprint och dokumentera beslutet efter leverans.",
      "Spara återkopplingen i mötesanteckningar och skapa en separat uppgift utan koppling till beslutet.",
      "Skapa en ny tidplan varje gång någon lämnar återkoppling och radera den tidigare.",
      "Registrera förslaget som ett länkat ärende, dokumentera bedömning och beslut och uppdatera backlogg och plan om det ska genomföras."
    ], 3, "Teamet kan till exempel länka intressenternas återkoppling till ett Jira-ärende om ombokning. Product Owner ordnar ärendet i backloggen. Länkade beslut och planeringsuppgifter visar hur förslaget sedan hanterades."],
    ["Två uppgifter behöver samma specialist samma vecka. Vad behöver planeringsverktyget visa för att du ska upptäcka krocken?", [
      "Vem som är bokad, när arbetet ska ske, tidsåtgång, tillgänglig kapacitet och beroenden.",
      "Vilket team som äger uppgifterna och respektive uppgifts budget.",
      "Uppgifternas slutdatum och vem som godkänner resultatet.",
      "Hur många timmar som rapporterades föregående vecka och hur länge projektet har pågått."
    ], 0, "Jämför specialistens planerade belastning med tillgänglig tid under samma period. Beroendena visar vilken uppgift som kan flyttas och vad som påverkas om den måste vänta."]
  ]}
]);
