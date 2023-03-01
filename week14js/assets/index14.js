const container = document.querySelector('.container');
const moviesBest = document.querySelector('.movies-best__list');

const array =[
        {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
        },
        {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
        },
        {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
        },
        {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
        },
        {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
        },
        {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
        },
        {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
        },
    ];
        
    //console.log(producers);
        const bestFilms = array.map(item => {
        return item.top_rated_film;

    });
    array.forEach(function (item) {

    const producers = document.createElement('div');
    producers.className = 'producer';
    container.append(producers);

    const producersName = document.createElement('h2');
    producersName.className = 'name';
    producersName.textContent = item.name;
    producers.prepend(producersName);

    const infoBlock = document.createElement('div');
    infoBlock.className = 'producer-info';
    producers.append(infoBlock);

    const producersCareer = document.createElement('p')
    producersCareer.className = 'producer-info__career';
    infoBlock.prepend(producersCareer);
    producersCareer.textContent = item.career;

    const filmList = document.createElement('a');
    filmList.className = 'producer-info__films';
    infoBlock.prepend(filmList);
    filmList.textContent = 'фильмография';
    filmList.href = item.films;

});


    moviesBest.textContent = bestFilms.join(', ');