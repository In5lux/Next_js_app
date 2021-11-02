import React from "react";
import { Button, Htag, P } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text title</Htag>
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
    </>
  );
}
