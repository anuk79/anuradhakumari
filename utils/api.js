import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'blogs');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = ['slug', 'title', 'published', 'category'], category = 'blog') {
  const slugs = getPostSlugs();

  const posts = slugs
    .reduce((posts, slug) => {
      const post = getPostBySlug(slug, fields);
      if (post.category === category) {
        posts.push(post);
      }
      return posts;
    }, [])
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.published > post2.published ? -1 : 1));
  return posts;
}