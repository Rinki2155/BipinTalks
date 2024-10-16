import { useState } from 'react';
import Link from 'next/link';
import BlogPost from '../../pages/BlogPost';

const articles = [
  {
    id: 1,
    heading: "The Art of Defect Management: The Good Bug, the Bad Bug",
    content:
      "The art of defect management is not just about fixing all bugs but making informed decisions that balance product quality and timelines with business and user needs.",
    date: "2024-10-01",
  },
  {
    id: 2,
    heading: "Being an Engineering Manager: The realization",
    content:
      "So, here's to the Engineering Managers, those valiant wranglers of code and people! Their life is a reminder that managing software development is no joke.",
    date: "2024-10-02",
  },
  {
    id: 1,
    heading: "The Art of Defect Management: The Good Bug, the Bad Bug",
    content:
      "The art of defect management is not just about fixing all bugs but making informed decisions that balance product quality and timelines with business and user needs.",
    date: "2024-10-01",
  },
];

export default function ArticlePages() {
  return (
    <div className="container mx-auto px-4 mt-[10%]" style={{ maxWidth: '1300px' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <BlogPost
            key={article.id}
            title={article.heading}
            content={article.content}
            date={article.date}
          />
        ))}
      </div>
    </div>
  );
}
