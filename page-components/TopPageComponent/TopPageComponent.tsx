import { Htag, Tag, Advantages, P, Sort } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { HhData, Product } from '../../components';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useEffect, useReducer } from 'react';
import { sortReducer } from './sort.reducer';
import { declOfNum } from '../../helpers/helpers';

export const TopPageComponent = ({
	page,
	firstCategory,
	products,
}: TopPageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispathSort] = useReducer(
		sortReducer,
		{
			products,
			sort: SortEnum.Rating,
		}
	);
	const setSort = (sort: SortEnum) => {
		dispathSort({ type: sort });
	};

	useEffect(() => {
		dispathSort({ type: 'reset', initialState: products });
	}, [products]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				{page && <Htag tag="h1">{page.title}</Htag>}
				{products && (
					<Tag color="grey" size="medium" aria-label={products.length + declOfNum(products.length, ['элемент', 'элемента', 'элементов'])}>
						{products.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>
				{sortedProducts &&
					sortedProducts.map((p) => <Product layout key={p._id} product={p} />)}
			</div>
			<div className={styles.hhTitle}>
				{page && <Htag tag="h2">Вакансии - {page.category}</Htag>}
				{products && (
					<Tag color="red" size="medium">
						hh.ru
					</Tag>
				)}
			</div>
			{firstCategory == TopLevelCategory.Courses && page.hh && (
				<HhData {...page.hh} />
			)}
			{page && page.advantages && page.advantages.length > 0 && (
				<>
					<Htag tag="h2">Преимущества</Htag>
					<Advantages advantages={page.advantages} />
				</>
			)}
			{page && page.seoText && (
				<div
					className={styles.seo}
					dangerouslySetInnerHTML={{ __html: page.seoText }}
				/>
			)}
			<Htag tag="h2">Получаемые навыки</Htag>
			{page &&
				page.tags.map((t) => (
					<Tag color="primary" key={t}>
						{t}
					</Tag>
				))}
		</div>
	);
};
