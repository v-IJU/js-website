import ContentLoader from 'react-content-loader'

export const  MyLoaderMeals = () => (
<ContentLoader viewBox="0 0 480 700">
    {/* Only SVG shapes */}    
    <rect x="0" y="0" rx="5" ry="5" width="480" height="350"/>
    <rect x="0" y="370" rx="4" ry="4" width="100" height="40" />
    <rect x="120" y="370" rx="4" ry="4" width="370" height="40" />
  </ContentLoader>
)

