'use server'

import { revalidatePath } from 'next/cache'

// Get All Posts
export const getPosts = async () => {
  try {
    const res = await fetch(
      'https://657c58cd853beeefdb994115.mockapi.io/api/posts',
      {
        next: { tags: 'posts' },
      }
    )
    return await res.json()
  } catch (error) {
    throw new Error('Failed to fetch posts')
  }
}

// Get Post Detail
export const getPost = async (id) => {
  try {
    const res = await fetch(
      `https://657c58cd853beeefdb994115.mockapi.io/api/posts/${id}`
    )
    return await res.json()
  } catch (error) {
    throw new Error('Failed to fetch post detail')
  }
}

// Add new post
export const addPost = async (data) => {
  try {
    fetch('https://657c58cd853beeefdb994115.mockapi.io/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  } catch (error) {
    throw new Error('Failed to add new post')
  }
}

// Update post
export const updatePost = async (id, data) => {
  try {
    fetch(`https://657c58cd853beeefdb994115.mockapi.io/api/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  } catch (error) {
    throw new Error('Failed to update post')
  }
}

// Delete Post
export const deletePost = async (id) => {
  try {
    fetch(`https://657c58cd853beeefdb994115.mockapi.io/api/posts/${id}`, {
      method: 'DELETE',
    })
    revalidatePath('/posts')
  } catch (error) {
    throw new Error('Failed to delete the post')
  }
}
