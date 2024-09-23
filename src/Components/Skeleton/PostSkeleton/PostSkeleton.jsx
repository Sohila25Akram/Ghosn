import React from 'react'
import './PostSkeleton.css'
import Skeleton from '../UserSkeleton/Skeleton'

export default function PostSkeleton() {
  return (
    <div role="status" class="loading-container">
        <Skeleton />
        <div class="skeleton-bar mb-2-5"></div>
        <div class="skeleton-bar mb-2-5"></div>
        <div class="skeleton-bar"></div>
    </div>
  )
}
