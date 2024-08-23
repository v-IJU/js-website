import ContentLoader from 'react-content-loader'

export const  MyLoaderMeals = () => (
<ContentLoader viewBox="0 0 480 700">
    {/* Only SVG shapes */}    
    <rect x="0" y="0" rx="10" ry="10" width="480" height="350"/>
    <rect x="10" y="370" rx="50" ry="50" width="70" height="70" />
    <rect x="100" y="370" rx="10" ry="10" width="350" height="70" />
    <rect x="10" y="470" rx="50" ry="50" width="70" height="70" />
    <rect x="100" y="470" rx="10" ry="10" width="350" height="70" />
    <rect x="10" y="570" rx="50" ry="50" width="70" height="70" />
    <rect x="100" y="570" rx="10" ry="10" width="350" height="70" />
  </ContentLoader>
)
export const MyLoaderSearch = () =>(
  <ContentLoader viewBox='0 0 700 90' >
    <rect x="0" y="10" rx="100" ry="100" width="70" height="70" />
    <rect x="90" y="10" rx="8" ry="8" width="600" height="70" />
  </ContentLoader> 
)

export const MyLoaderGal = () =>(
  <ContentLoader viewBox='0 0 400 350'>
    <rect x="0" y="0" rx="10" ry="10" width="390" height="350" />
  </ContentLoader>
)

export const MyLoaderRecpImg = () =>(
<ContentLoader
  speed={2}
  width="100%"
  height="60vh"
  backgroundColor="#e0e0e0"
  foregroundColor="#d6d6d6"
  style={{ width: '100%', height: '60vh' }}
>
  <rect x="0" y="0" rx="8" ry="8" width="100%" height="60vh" />
</ContentLoader>
)

export const MyLoaderRecpTitle = () =>(
  <ContentLoader  viewBox='0 0 100% 10' >

    <rect x="0" y="0" rx="4" ry="4" width="100%" height="50" />

  </ContentLoader>
)

export const MyLoaderIng = () =>(
  <ContentLoader viewBox='0 0 700 90' >
    <rect x="0" y="10" rx="100" ry="100" width="70" height="70" />
    <rect x="90" y="10" rx="8" ry="8" width="600" height="70" />
  </ContentLoader> 
)