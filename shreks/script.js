const questions = [
    {
        text: "Что вы выберете на обед?",
        options: [
            { text: "Луковый суп", points: { "Шрек": 2 } },
            { text: "Вафли с сиропом", points: { "Осел": 2 } },
            { text: "Рыбу", points: { "Кот в сапогах": 2 } },
            { text: "Изысканное блюдо", points: { "Лорд Фаркуад": 2 } },
            { text: "Шоколадные сердца", points: { "Дракониха": 2 } },
        ],
    },
    {
        text: "Как вы проводите выходные?",
        options: [
            { text: "В болоте", points: { "Шрек": 2 } },
            { text: "В компании друзей", points: { "Осел": 2 } },
            { text: "Тренируюсь с саблями", points: { "Кот в сапогах": 2 } },
            { text: "Планирую захват мира", points: { "Лорд Фаркуад": 2 } },
            { text: "Читаю романтические книги", points: { "Дракониха": 2 } },
        ],
    },
    {
        text: "Что для вас важнее всего?",
        options: [
            { text: "Свобода", points: { "Шрек": 2 } },
            { text: "Дружба", points: { "Осел": 2 } },
            { text: "Слава", points: { "Кот в сапогах": 2 } },
            { text: "Власть", points: { "Лорд Фаркуад": 2 } },
            { text: "Любовь", points: { "Дракониха": 2 } },
        ],
    },
    {
        text: "Как вы решаете конфликты?",
        options: [
            { text: "Ухожу от спора", points: { "Шрек": 2 } },
            { text: "Шучу, чтобы разрядить обстановку", points: { "Осел": 2 } },
            { text: "Вызываю на дуэль", points: { "Кот в сапогах": 2 } },
            { text: "Приказываю подчиниться", points: { "Лорд Фаркуад": 2 } },
            { text: "Плачу", points: { "Дракониха": 2 } },
        ],
    },
    {
        text: "Какой подарок вы бы выбрали?",
        options: [
            { text: "Саженец дерева", points: { "Шрек": 2 } },
            { text: "Комикс", points: { "Осел": 2 } },
            { text: "Острое лезвие", points: { "Кот в сапогах": 2 } },
            { text: "Золотой ключ от замка", points: { "Лорд Фаркуад": 2 } },
            { text: "Букет роз", points: { "Дракониха": 2 } },
        ],
    },
    {
        text: "Как вы относитесь к правилам?",
        options: [
            { text: "Ненавижу ограничения", points: { "Шрек": 2 } },
            { text: "Соблюдаю, если весело", points: { "Осел": 2 } },
            { text: "Следую кодексу чести", points: { "Кот в сапогах": 2 } },
            { text: "Я создаю правила", points: { "Лорд Фаркуад": 2 } },
            { text: "Подчиняюсь любимому человеку", points: { "Дракониха": 2 } },
        ],
    },
    {
        text: "Что вы делаете утром?",
        options: [
            { text: "Гуляю по лесу", points: { "Шрек": 2 } },
            { text: "Болтаю с соседом", points: { "Осел": 2 } },
            { text: "Тренирую акробатические трюки", points: { "Кот в сапогах": 2 } },
            { text: "Составляю планы на день", points: { "Лорд Фаркуад": 2 } },
            { text: "Мечтаю о принце", points: { "Дракониха": 2 } },
        ],
    },
    {
        text: "Какой климат вам нравится?",
        options: [
            { text: "Болото", points: { "Шрек": 2 } },
            { text: "Солнечный луг", points: { "Осел": 2 } },
            { text: "Испанское побережье", points: { "Кот в сапогах": 2 } },
            { text: "Королевский замок", points: { "Лорд Фаркуад": 2 } },
            { text: "Вулканические горы", points: { "Дракониха": 2 } },
        ],
    },
    {
        text: "Что вы возьмете на необитаемый остров?",
        options: [
            { text: "Топор", points: { "Шрек": 2 } },
            { text: "Гармошку", points: { "Осел": 2 } },
            { text: "Карту сокровищ", points: { "Кот в сапогах": 2 } },
            { text: "Корону", points: { "Лорд Фаркуад": 2 } },
            { text: "Дневник для записей", points: { "Дракониха": 2 } },
        ],
    },
    {
        text: "Как вы добиваетесь своего?",
        options: [
            { text: "Прямотой и силой", points: { "Шрек": 2 } },
            { text: "Юмором и харизмой", points: { "Осел": 2 } },
            { text: "Хитростью", points: { "Кот в сапогах": 2 } },
            { text: "Манипуляциями", points: { "Лорд Фаркуад": 2 } },
            { text: "Эмоциональным давлением", points: { "Дракониха": 2 } },
        ],
    },
];
let currentQuestion = 0;
let scores = { 
    "Шрек": 0, 
    "Осел": 0, 
    "Фиона": 0, 
    "Кот в сапогах": 0,
    "Лорд Фаркуад": 0,
    "Дракониха": 0 
};

function startQuiz() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    showQuestion(currentQuestion);
}

function showQuestion(index) {
    const question = questions[index];
    document.getElementById("question-text").textContent = question.text;
    const optionsDiv = document.querySelector(".options");
    optionsDiv.innerHTML = "";
    
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => handleAnswer(option.points);
        optionsDiv.appendChild(button);
    });
}

function handleAnswer(points) {
    Object.keys(points).forEach(char => scores[char] += points[char]);
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    } else {
        showResult();
    }
}

function showResult() {
    const characters = Object.entries(scores);
    const result = characters.sort((a, b) => b[1] - a[1])[0][0];
    
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    
    document.getElementById("character-name").textContent = result;
    document.getElementById("character-img").src = `images/${result}.png`;
    document.getElementById("character-desc").textContent = getDescription(result);
    
    // Активация 3D-эффекта для карточки
    VanillaTilt.init(document.querySelector(".character-card"), {
        max: 15,
        speed: 400,
    });
}

function getDescription(character) {
    const descriptions = {
        "Шрек": "Вы независимы, любите природу и цените уединение!",
        "Осел": "Вы общительны, веселы и всегда готовы поддержать друзей!",
        "Фиона": "Вы сильны, решительны и умеете быть собой!",
        "Кот в сапогах": "Вы харизматичны, амбициозны и немного драматичны!",
        "Лорд Фаркуад": "Вы амбициозны, любите контроль и мечтаете о власти. Но иногда забываете о простых радостях!",
        "Дракониха": "Вы романтичны, эмоциональны и готовы на всё ради любви. Но иногда слишком наивны!"
    };
    return descriptions[character];
}

function restartQuiz() {
    currentQuestion = 0;
    scores = { 
        "Шрек": 0, 
        "Осел": 0, 
        "Фиона": 0, 
        "Кот в сапогах": 0,
        "Лорд Фаркуад": 0,
        "Дракониха": 0 
    };
    document.getElementById("result").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
}