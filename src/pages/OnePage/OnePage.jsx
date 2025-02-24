import React from 'react';
import styles from './onePage.module.scss';

export const OnePage = () => {

  const text = 'СССР, 1983 год. На землю возвращается советский космический аппарат, страна празднует новый триумф отечественной космонавтики. Но от людей скрывают, что из двух космонавтов живым возвращается только один. Что произошло на борту остается неясным, выжившего помещают в секретную лабораторию для выяснения деталей. Факты указывают на то, что космонавт столкнулся в полете с новой формой жизни и вернулся на землю не один… Спецслужбы просят о помощи нейрофизиолога Татьяну Климову, которой предстоит разгадать загадку случившегося на корабле и спасти героя, ставшего для нее небезразличным.Посмотреть «Спутник» в хорошем качестве ты можешь на нашем сайте. Это первый российский крупнобюджетный фильм, премьера которого пройдет на more.tv! Режиссер и актерский составРежиссером фильма выступил Егор Абраменко, который работал совместно с Фёдором Бондарчуком над другим отечественным фантастическим фильмом о пришельцах — «Притяжением». Главные роли исполнили Оксана Акиньшина и Петр Федоров.'

  const [fullText, setFullText] = React.useState(text.slice(0, 500))
  const [switchText, setSwitchText] = React.useState(false)


  const hendleFullText = () => {
    if (switchText) {
      setFullText(text)
      setSwitchText(false)
    }
    if (!switchText) {
      setFullText(text.slice(0, 500))
      setSwitchText(true)
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <h1>Фильм Спутник (2020) смотреть онлайн</h1>
      </div>

      <div className={styles.posterAndInfo}>
        <div className={styles.poster}>
          <img alt="Фильм Спутник " title="Фильм Спутник фото" src="https://mf-static-ssl.more.tv/jackal/2598897/e8a7497e-fda9-4307-a512-335405694628_W250_H355.webp" />

          <div className={styles.grade}>
            <svg width="22" height="9" xmlns="http://www.w3.org/2000/svg" class="ProjectTemplate-module__ratingIcon--cEKkF"><g fill="gray" fill-rule="evenodd"><path d="M0 8.885h2.281V0H0zM7.136 0l-.528 4.157-.325-2.259A61.705 61.705 0 006.007 0H3.053v8.885H5.05l.008-5.866.836 5.866h1.42l.804-5.997v5.997h1.99V0H7.135M13.672 1.604c.088.048.145.13.17.245.032.115.04.376.04.777v3.445c0 .589-.04.949-.114 1.08-.073.14-.276.205-.6.205V1.52c.243 0 .413.025.504.083zm-.026 7.281c.544 0 .958-.032 1.226-.09.276-.057.504-.163.682-.32.186-.146.316-.359.39-.629.072-.27.121-.802.121-1.596V3.134c0-.843-.032-1.408-.088-1.694a1.546 1.546 0 00-.374-.777C15.4.425 15.1.263 14.71.155 14.328.057 13.687 0 12.59 0h-1.705v8.885h2.76zM19.8 6.734c0 .425-.024.695-.066.809-.04.115-.226.172-.364.172-.13 0-.228-.057-.268-.163-.05-.107-.073-.36-.073-.752V4.45c0-.4.023-.654.065-.752.04-.097.13-.147.26-.147.138 0 .324.05.372.172.05.114.073.36.073.728v2.283zM16.836 0v8.885h2.054l.138-.564c.186.228.389.4.617.515.218.107.552.164.811.164.365 0 .674-.09.934-.286.26-.188.43-.418.503-.679.065-.262.106-.655.106-1.187V4.353c0-.532-.017-.884-.04-1.048a1.25 1.25 0 00-.204-.507 1.209 1.209 0 00-.511-.401c-.22-.09-.48-.14-.788-.14-.26 0-.593.058-.82.156-.22.107-.422.27-.608.483V0h-2.192z"></path></g></svg> 6.4<svg width="12" height="13" xmlns="http://www.w3.org/2000/svg" class="ProjectTemplate-module__ratingIcon--cEKkF"><path d="M2.364.009v3.529h.18L4.909.008H8.18L3.815 4.092l.18.185L12 .004v2.971L4.904 5.573v.184L12 5.109v2.786l-7.096-.648v.185L12 10.029V13L3.995 8.728l-.18.184 4.365 4.083H4.908L2.545 9.466h-.181v3.529H0V0h2.364z" fill="gray" fill-rule="evenodd"></path></svg> 6.3</div>
        </div>

        <div className={styles.info}>
          <div>
            <div>Год: <a href="/onepage" >
              <span>2020 {' '}</span>
            </a>
            </div>
          </div>
          <div >
            <div>Страна: <a href="/onepage">Россия</a> {' '}</div>
          </div>
          <div >
            <div >Жанр: <a href="/onepage">Драма</a>  {' '}
              <a href="/onepage" >Триллер</a>  {' '}
              <a href="/onepage">Фантастика</a> {' '}
            </div>
          </div>
          <div>
            <div>Стоимость: <a href="/onepage" >Подписка</a> {' '}</div>
          </div>
          <div>
            <h3> 16+</h3>
          </div>
        </div>
      </div>
      <div className={styles.discription}>
        {fullText}
        {fullText === text ? <p onClick={hendleFullText} className={styles.readBtn}>Скрыть</p>
          :
          <p onClick={hendleFullText} className={styles.readBtn}>Читать</p>}
      </div>
    </div>
  )
}

