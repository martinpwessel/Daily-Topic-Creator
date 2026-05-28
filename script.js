const STORAGE_KEY = 'dailyTopic';
const HISTORY_KEY = 'topicHistory';

const dateEl = document.getElementById('date');
const categoryEl = document.getElementById('category');
const questionEl = document.getElementById('question');
const cardEl = document.getElementById('card');
const drawBtn = document.getElementById('drawBtn');
const newBtn = document.getElementById('newBtn');
const infoEl = document.getElementById('info');

// Heutiges Datum anzeigen
function getTodayString() {
    const today = new Date();
    return today.toLocaleDateString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function getDateKey() {
    const today = new Date();
    return today.toISOString().split('T')[0]; // YYYY-MM-DD
}

dateEl.textContent = getTodayString();

// Beim Laden: prüfen ob heute schon ein Thema gezogen wurde
function loadTodaysTopic() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        const data = JSON.parse(stored);
        if (data.date === getDateKey()) {
            showTopic(data.topic, false);
            drawBtn.style.display = 'none';
            newBtn.style.display = 'block';
            infoEl.textContent = '✨ Dein Thema für heute ist bereit!';
            return true;
        }
    }
    return false;
}

// Zufälliges Thema ziehen (vermeidet Wiederholungen der letzten Themen)
function getRandomTopic() {
    const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    const recentLimit = Math.min(20, topics.length - 1);
    const recent = history.slice(-recentLimit);

    let available = topics.filter(t => !recent.includes(t.question));
    if (available.length === 0) available = topics;

    return available[Math.floor(Math.random() * available.length)];
}

// Thema im Verlauf speichern
function addToHistory(topic) {
    const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    history.push(topic.question);
    if (history.length > 50) history.shift();
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

// Thema anzeigen
function showTopic(topic, animate = true) {
    categoryEl.textContent = topic.category;
    questionEl.textContent = topic.question;

    if (animate) {
        cardEl.classList.remove('animate');
        void cardEl.offsetWidth; // Trigger reflow
        cardEl.classList.add('animate');
    }
}

// Heutiges Thema ziehen
drawBtn.addEventListener('click', () => {
    const topic = getRandomTopic();
    showTopic(topic);
    addToHistory(topic);

    localStorage.setItem(STORAGE_KEY, JSON.stringify({
        date: getDateKey(),
        topic: topic
    }));

    drawBtn.style.display = 'none';
    newBtn.style.display = 'block';
    infoEl.textContent = '✨ Viel Spaß beim Gespräch!';
});

// Neues Thema (überschreibt das heutige)
newBtn.addEventListener('click', () => {
    if (confirm('Möchtest du wirklich ein neues Thema ziehen? Das aktuelle wird ersetzt.')) {
        const topic = getRandomTopic();
        showTopic(topic);
        addToHistory(topic);

        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            date: getDateKey(),
            topic: topic
        }));
    }
});

// Beim Start
loadTodaysTopic();
