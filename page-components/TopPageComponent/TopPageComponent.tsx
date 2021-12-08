import { Card, Htag, P, Tag } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { HhData } from '../../components/HhData/HhData';
import { TopLevelCategory } from '../../interfaces/page.interface';
import AdvIcon from './advantages.svg';

export const TopPageComponent = ({
  page,
  firstCategory,
  products,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {page && <Htag tag="h1">{page.title}</Htag>}
        {products && (
          <Tag color="grey" size="medium">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        {page && <Htag tag="h2">Вакансии - {page.category}</Htag>}
        {products && (
          <Tag color="red" size="medium">
            hh.ru
          </Tag>
        )}
      </div>
      {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}
      <Htag tag="h2">Преимущества</Htag>
      <div className={styles.advantages}>
        <div className={styles.advantage}>
          <div className={styles.advTitle}>
            <AdvIcon />
            <Htag tag="h3">Мобильность специалиста</Htag>
          </div>

          <div className={styles.advDescription}>
            Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw
            и ими можно успешно пользоваться дома или в дороге. Современные
            ноутбуки хорошо справляются с нагрузкой, так зачем загонять
            специалиста в душный офис. В этой профессии важным считается
            вдохновение, поэтому дизайнеры ищут его в разных местах.
          </div>
        </div>
        <div className={styles.advantage}>
          <div className={styles.advTitle}>
            <AdvIcon />
            <Htag tag="h3">Индивидуальный график работы</Htag>
          </div>

          <div className={styles.advDescription}>
            Если освоить программы и найти заказы по графическому дизайну,
            вскоре окажется, что вставать в 6:00 вовсе не обязательно. Когда у
            человека вечером продуктивность выше, надо этим пользоваться.
          </div>
        </div>
        <div className={styles.advantage}>
          <div className={styles.advTitle}>
            <AdvIcon />
            <Htag tag="h3">Контроль дохода</Htag>
          </div>

          <div className={styles.advDescription}>
            Прохождения собеседований в крупные компании могут принести свои
            плоды. В случае с профессией графического дизайна вполне возможна
            работа на рынке фриланса. Специалист сам выбирает регион, с кем
            работать и сколько работать. В связи с этим получится точно
            контролировать доход в большую или меньшую сторону.
          </div>
        </div>
        <div className={styles.advantage}>
          <div className={styles.advTitle}>
            <AdvIcon />
            <Htag tag="h3">Выбор работы</Htag>
          </div>

          <div className={styles.advDescription}>
            Пользователи сети, которые знают Photoshop, не обязательно должны
            выполнять одну работу. Профессия графического дизайнера дает
            возможность отойти от обычных проектов и повысить скил в других
            компьютерных программах.
          </div>
        </div>
      </div>
      <div>
        При завершении очередного проекта над графикой, специалист всегда задает
        себе вопрос о дальнейших перспективах. Отличие профессиональных
        дизайнеров заключается в том, что они гибкие. Сегодня разрабатывается
        логотип новой компании, а завтра вполне можно переключиться на
        иллюстрацию культовой книги.
      </div>
      <Htag tag="h2">Получаемые навыки</Htag>
      <div className={styles.skills}>
        <Tag color="primary">Работа в Photoshop</Tag>
        <Tag color="primary">Подготовка макетов</Tag>
        <Tag color="primary">Графический дизайн</Tag>
        <Tag color="primary">Web дизайн</Tag>
        <Tag color="primary">Дизайн сайтов</Tag>
      </div>
    </div>
  );
};
