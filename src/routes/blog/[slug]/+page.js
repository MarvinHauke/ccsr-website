import { error } from '@sveltejs/kit';
import { dev } from '$app/environment';

// Import all markdown files at build time
const allPostFiles = import.meta.glob('/src/content/blog/*.md');
const iterablePostFiles = Object.entries(allPostFiles);

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const { slug } = params;
	
	// Find the matching post file
	const postPath = `/src/content/blog/${slug}.md`;
	
	if (postPath in allPostFiles) {
		try {
			const post = await allPostFiles[postPath]();
			return {
				content: post.default,
				meta: post.metadata || {
					title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
					date: new Date().toISOString(),
					category: 'General',
					excerpt: 'Blog post content'
				}
			};
		} catch (e) {
			console.error('Error loading post:', e);
		}
	}
	
	throw error(404, `Blog post "${slug}" not found`);
}
