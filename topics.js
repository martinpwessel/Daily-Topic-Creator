const topics = [
    // Träume & Zukunft
    { category: "🌟 Träume & Zukunft", question: "Wenn Geld keine Rolle spielen würde – wie würde ein perfekter Tag in 10 Jahren aussehen?" },
    { category: "🌟 Träume & Zukunft", question: "Welchen Ort auf der Welt müssen wir unbedingt zusammen besuchen und warum?" },
    { category: "🌟 Träume & Zukunft", question: "Was wäre dein Traumberuf, wenn du nochmal von vorne anfangen könntest?" },
    { category: "🌟 Träume & Zukunft", question: "Wo siehst du uns in 5 Jahren – wohnen, leben, arbeiten?" },
    { category: "🌟 Träume & Zukunft", question: "Welches verrückte Abenteuer würdest du gerne mal erleben?" },

    // Tiefere Fragen
    { category: "💭 Tiefere Fragen", question: "Was war die wichtigste Lektion, die dir dein 20-jähriges Ich beibringen würde?" },
    { category: "💭 Tiefere Fragen", question: "Wann hast du dich zuletzt richtig stolz auf dich selbst gefühlt?" },
    { category: "💭 Tiefere Fragen", question: "Welche Eigenschaft an dir möchtest du am liebsten weitergeben?" },
    { category: "💭 Tiefere Fragen", question: "Was bedeutet 'ein erfülltes Leben' für dich?" },
    { category: "💭 Tiefere Fragen", question: "Welche Angst möchtest du gerne überwinden?" },

    // Spaßige Hypothesen
    { category: "🎭 Spaßige Hypothesen", question: "Du hast eine Million Euro, musst sie aber innerhalb einer Woche ausgeben – was machst du?" },
    { category: "🎭 Spaßige Hypothesen", question: "Welche Superkraft würdest du wählen und wofür würdest du sie (heimlich) nutzen?" },
    { category: "🎭 Spaßige Hypothesen", question: "Wenn du einen Tag lang eine andere Person sein könntest – wer wäre es?" },
    { category: "🎭 Spaßige Hypothesen", question: "Du bist Regisseur eines Films über dein Leben – wer spielt dich, was ist der Titel?" },
    { category: "🎭 Spaßige Hypothesen", question: "Du darfst drei historische Personen zum Abendessen einladen – wen?" },

    // Über uns
    { category: "❤️ Über uns", question: "Was war dein schönster Moment mit mir in den letzten Monaten?" },
    { category: "❤️ Über uns", question: "Welche kleine Geste von mir bedeutet dir am meisten?" },
    { category: "❤️ Über uns", question: "Was ist eine Tradition, die wir gemeinsam einführen sollten?" },
    { category: "❤️ Über uns", question: "Wofür bist du mir gerade besonders dankbar?" },
    { category: "❤️ Über uns", question: "Was ist eine Sache, die du gerne mit mir gemeinsam lernen würdest?" },

    // Meinungen & Werte
    { category: "🧠 Meinungen & Werte", question: "Was ist eine Meinung, die du heute hast, aber vor 5 Jahren noch nicht hattest?" },
    { category: "🧠 Meinungen & Werte", question: "Welcher gesellschaftliche Trend nervt dich am meisten?" },
    { category: "🧠 Meinungen & Werte", question: "Was ist deiner Meinung nach die größte Erfindung der Menschheit?" },
    { category: "🧠 Meinungen & Werte", question: "Glaubst du an Schicksal oder Zufall?" },
    { category: "🧠 Meinungen & Werte", question: "Was ist wichtiger – Gerechtigkeit oder Freiheit?" },

    // Erinnerungen & Geschichten
    { category: "🎨 Erinnerungen & Geschichten", question: "Erzähl mir eine Geschichte aus deiner Kindheit, die ich noch nicht kenne." },
    { category: "🎨 Erinnerungen & Geschichten", question: "Was war dein peinlichster Moment als Teenager?" },
    { category: "🎨 Erinnerungen & Geschichten", question: "Wer hat dich am meisten geprägt und warum?" },
    { category: "🎨 Erinnerungen & Geschichten", question: "Welcher Lehrer/in ist dir besonders in Erinnerung geblieben?" },
    { category: "🎨 Erinnerungen & Geschichten", question: "Was war dein erster Job und was hast du daraus gelernt?" },

    // Kultur & Genuss
    { category: "🍿 Kultur & Genuss", question: "Welcher Film/welches Buch hat deine Sicht auf die Welt verändert?" },
    { category: "🍿 Kultur & Genuss", question: "Welches Lied bringt dich immer in gute Stimmung?" },
    { category: "🍿 Kultur & Genuss", question: "Was wäre dein letztes Henkersmahl?" },
    { category: "🍿 Kultur & Genuss", question: "Welche Serie könnten wir zusammen schauen und besprechen?" },
    { category: "🍿 Kultur & Genuss", question: "Welches Gericht aus deiner Heimat liebst du am meisten?" },

    // Kreative Übungen
    { category: "💡 Kreative Übungen", question: "Wir designen unsere Traumwohnung – wie sieht sie aus?" },
    { category: "💡 Kreative Übungen", question: "Wir gründen zusammen ein Unternehmen – was machen wir?" },
    { category: "💡 Kreative Übungen", question: "Wir planen unseren perfekten Roadtrip – Route?" },
    { category: "💡 Kreative Übungen", question: "Wenn wir einen Podcast starten würden – worüber?" },
    { category: "💡 Kreative Übungen", question: "Wir schreiben ein Buch zusammen – Genre und Plot?" },

    // Persönliches Wachstum
    { category: "🌱 Persönliches Wachstum", question: "Was möchtest du in diesem Monat lernen oder ausprobieren?" },
    { category: "🌱 Persönliches Wachstum", question: "Welche Gewohnheit möchtest du loswerden?" },
    { category: "🌱 Persönliches Wachstum", question: "Was würdest du machen, wenn du keine Angst vor dem Scheitern hättest?" },
    { category: "🌱 Persönliches Wachstum", question: "Welches Buch hat dich zuletzt richtig zum Nachdenken gebracht?" },
    { category: "🌱 Persönliches Wachstum", question: "Was bedeutet für dich Erfolg – wirklich?" }
];
