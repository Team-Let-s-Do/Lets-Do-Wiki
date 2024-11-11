/* index.tsx */

import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CategoryCard from '@site/src/components/modules/CategoryCard';

interface Category {
  title: string;
  slug: string;
}

const categoryData: Category[] = [
  { title: 'Bakery', slug: 'bakery' },
  { title: 'Brewery', slug: 'brewery' },
  { title: 'Camping', slug: 'camping' },
  { title: 'Candlelight', slug: 'candlelight' },
  { title: 'Farm & Charm', slug: 'farmcharm' },
  { title: 'Furniture', slug: 'furniture' },
  { title: 'Herbal Brews', slug: 'herbalbrews' },
  { title: 'Meadow', slug: 'meadow' },
  { title: 'Vinery', slug: 'vinery' },
  { title: 'Wilder Nature', slug: 'wildernature' },
  // Add more categories as needed
];

export default function CategoryGrid(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.grid}>
        {categoryData.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
}
