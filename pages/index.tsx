import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Button, Htag, P, Tag, Rating, Input, Textarea } from '../components';
import { withLayout } from '../layout/layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance="primary" arrow="right">
        Узнать подробнее
      </Button>
      <Button appearance="ghost" arrow="down">
        Читать отзывы
      </Button>
      <P size="small">
        Навыки, которые позволят эффективно взаимодействовать в команде с
        менеджерами, разработчиками и маркетологами.
      </P>
      <P>
        Навыки, которые позволят эффективно взаимодействовать в команде с
        менеджерами, разработчиками и маркетологами.
      </P>
      <P size="big">
        Навыки, которые позволят эффективно взаимодействовать в команде с
        менеджерами, разработчиками и маркетологами.
      </P>
      <Tag color="ghost">ghost</Tag>
      <Tag color="red">red</Tag>
      <Tag color="grey">grey</Tag>
      <Tag color="green">green</Tag>
      <Tag color="primary">primary</Tag>
      <Tag size="medium" color="ghost">
        Ghost
      </Tag>
      <Tag size="medium" color="red">
        Red
      </Tag>
      <Tag size="medium" color="grey">
        Grey
      </Tag>
      <Tag size="medium" color="green">
        Green
      </Tag>
      <Tag size="medium" color="primary" href="#">
        Primary
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="test" />
      <Textarea placeholder="test area" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    API.topPage.find,
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
