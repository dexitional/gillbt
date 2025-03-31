import { sanityClient } from '../sanity';

export const SANITY_API_URL = `https://zp7mbokg.api.sanity.io/v2021-06-07/data/query/production`;

export const revalidate = 60;
 
export const fetchSetting = async () => {
    const query = `*[_type == "setting"][0]{site_name,site_desc,site_footnote,link,mainmenu[]->{ title,link,showMenu }}`
    const data = await sanityClient.fetch(query)
    return data;
}

/* Index Page  */


  export  const deleteContent = async() => {
    const posts:any = await sanityClient.fetch(`*[_type == 'work'][0...500]`)
  
    posts.forEach((post:any) => {
      //queue.add(() => 
      sanityClient
          .delete(post._id)
          .then(() => {
            console.log('Post deleted')
          })
          .catch((err) => {
            console.error('Delete failed: ', err.message)
          })
     // )
    })
  }

export const fetchTopPublications = async () => {
    const query = `*[_type == "post" && "top" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4]`
    const data = await sanityClient.fetch(query)
    return data;
}

export const fetchInitiatives = async () => {
    const query = `*[_type == "post" && "initiative" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...3]`
    const data = await sanityClient.fetch(query)
    return data;
}

export const fetchImpacts = async () => {
    const query = `*[_type == "post" && "impact" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4]`
    const data = await sanityClient.fetch(query)
    return data;
}

/* Page Content */
export const getPage = async (slug:string) => {
    const query = `*[_type == "page" && slug.current == $slug ][0] {_id,title,subtitle,mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }}`
    const data = await sanityClient.fetch(query,{ slug })
    return data;
}

/* Page Categories */
export const fetchPublications = async () => {
    const query = `*[_type == "post" && "publications" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4]`
    const data = await sanityClient.fetch(query)
    return data;
}

export const fetchEvents = async () => {
    const query = `*[_type == "post" && "events" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4]`
    const data = await sanityClient.fetch(query)
    return data;
}

export const fetchStaff = async () => {
    const query = `*[_type == "staff"] | order(_createdAt desc)`
    const data = await sanityClient.fetch(query)
    return data;
}

export const fetchGalleries = async () => {
    const query = `*[_type == "gallery"] | order(_createdAt desc) { _id, title, slug, description, "image":images[0], images  }`
    const data = await sanityClient.fetch(query)
    return data;
}

export const fetchCatalogs = async () => {
    const query = `*[_type == "library"] | order(_createdAt desc) { _id, title, slug,"files": files[].asset->url, "types": files[].type, "titles": files[].title }`
    const data = await sanityClient.fetch(query)
    return data;
}
 
export const fetchProjects = async () => {
    const query = `*[_type == "project"] | order(_createdAt desc)`
    const data = await sanityClient.fetch(query)
    return data;
}

export const getProject = async (slug:string) => {
    const query = `*[_type == "project" && slug.current == $slug ][0] {_id,title,objective,showDonate,donateLink,duration,sponsors,mainImage,slug,_createdAt,summary[]{ ..., asset->{ ..., "_key": _id } }}`
    const data = await sanityClient.fetch(query,{ slug })
    return data;
}

export const fetchMenus = async () => {
    const query = `*[_type == "setting"][0]['mainmenu'][]->{ title,link,showMenu,submenus[]->{ title,link,showMenu } }`
    const data = await sanityClient.fetch(query)
    return data;
}


export const getLeaders = async () => {
    const query = `*[_type == "leader" ] {_id,name,position,photo,linkedin,facebook,_createdAt}`
    const data = await sanityClient.fetch(query)
    return data;
}

export const getPrincipal = async () => {
    const query = `*[_type == "staff" && type == "principal"][0]`
    const data = await sanityClient.fetch(query)
    return data;
}

/* Blog */

export const getPosts = async (slug:string) => {
    const query = `*[_type == "post" && categories[]->slug.current == $slug ]{_id,title,subtitle,mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }}`
    const data = await sanityClient.fetch(query,{ slug })
    return data;
}

export const getPostSlugs = async () => {
    const query = `*[_type == "post"][0] { slug }`
    const data = await sanityClient.fetch(query)
    const slugs = data.map((row:any) => ({ slug: row.slug.current }))
    return slugs;
}

export const getPost = async (slug:string) => {
    const query = `*[_type == "post" && slug.current == $slug ][0] {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }}`
    const data = await sanityClient.fetch(query,{ slug })
    return data;
}