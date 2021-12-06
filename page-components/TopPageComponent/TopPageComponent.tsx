import { TopPageComponentProps } from './TopPageComponent.props';

export const TopPageComponent = ({
  page,
  firstCategory,
  products,
}: TopPageComponentProps): JSX.Element => {
  return <>{products && products.length}</>;
};
