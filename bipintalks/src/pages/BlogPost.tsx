// BlogPost.tsx
'use client';  // Marking this component as a Client Component

import { useState } from 'react';

interface BlogPostProps {
  title: string;
  content: string;
  date: string;
}

const truncateText = (text: string | undefined, limit: number): string => {
  const validText = text ?? '';
  const words = validText.split(' ');
  return words.length > limit ? words.slice(0, limit).join(' ') + '...' : validText;
};

const BlogPost: React.FC<BlogPostProps> = ({ title, content, date }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const displayTitle = truncateText(title, 25);
  const displayContent = truncateText(content, 25);

  return (
    <div className="p-6 border-b border-gray-300">
      <h2 className="text-2xl font-bold mb-2">
        {isExpanded ? title : displayTitle}
      </h2>
      <p className="text-gray-700 mb-4">
        {isExpanded ? content : displayContent}
      </p>
      <button onClick={toggleExpand} className="text-blue-500 hover:underline">
        {isExpanded ? 'Show less' : 'Read more'}
      </button>
      <div className="text-gray-500 text-sm mt-2">
        {new Date(date).toLocaleDateString()}
      </div>
    </div>
  );
};

export default BlogPost;
