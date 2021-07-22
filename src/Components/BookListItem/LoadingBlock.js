import React from 'react'
import ContentLoader from 'react-content-loader'

const LoadingBlock = () => (
  <ContentLoader
    className=".book-list-item .book-cover"
    speed={2}
    width={300}
    height={230}
    viewBox="0 0 300 230"
    backgroundColor="#f0efef"
    foregroundColor="#ecebeb"
    display="block"
  >
    <rect x="0" y="0" rx="0" ry="0" width="120" height="18" />
    <rect x="150" y="0" rx="0" ry="0" width="130" height="190" />
    <rect x="0" y="89" rx="0" ry="0" width="120" height="18" />
    <rect x="0" y="172" rx="0" ry="0" width="120" height="18" />
  </ContentLoader>
)

export default LoadingBlock
