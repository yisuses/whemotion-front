import { GetServerSideProps } from 'next'

import { publicUrl } from '@blog/utils/generateUrl/generateUrl'

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
    http://www.w3.org/1999/xhtml http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd"
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd"   
  >
     <url>
      <loc>${publicUrl('/sitemap/page.xml')}</loc>
     </url>
     <url>
      <loc>${publicUrl('/sitemap/post.xml')}</loc>
     </url>
     <url>
     <loc>${publicUrl('/sitemap/category.xml')}</loc>
     </url>
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
