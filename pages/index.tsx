import React, { useState, useEffect } from "react";
import { Button, Htag, P, Tag, Rating } from "../components";
import { Layout } from "../layout/layout";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
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
    </Layout>
  );
}
