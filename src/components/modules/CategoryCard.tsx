import React from 'react';
import Link from '@docusaurus/Link';
import './category.card.css';

interface Category {
  title: string;
  slug: string;
}

const CategoryCard = ({ category }: { category: Category }) => {
  const imagePath = `/Lets-Do-Wiki/img/logo/${category.slug}.png`;

  return (
    <div className="padding-vert--lg padding-horiz--lg">
      <Link to={`/docs/${category.slug}`} className="card">
        <div className="card__body">
          <img src={imagePath} alt={category.title} className="card__image" />
          <div className="card__title">{category.title}</div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
