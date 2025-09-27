// config/api.js
// export const API_URL = 'ttps://api-be-psg.pasifiksgroup.com:8443'
// export const API_URL = 'http://localhost:3001'
// export const API_URL = 'compro.pasifiksgroup.com:8443'
// export const API_URL = process.env.VUE_APP_API_URL;
export const API_URL = window.APIS_URL;

export const API_ENDPOINTS = {
    siteInfo: () => `${API_URL}/apis/public/site-info`,
  customPages: `${API_URL}/apis/custom-pages/frontend`,     
  adminCustomPages: `${API_URL}/api/admin/custom-pages`, 
  websiteSchema: (id) => `${API_URL}/api/admin/themes/${id}/active-theme`,
  activeTheme: (websiteId) => `${API_URL}/api/admin/themes/${websiteId}/active-theme`,
  updateTheme: (id) => `${API_URL}/api/admin/themes/${id}`,
  themes: `${API_URL}/api/admin/themes`,
  setActiveTheme: (id) => `${API_URL}/api/admin/themes/${id}/active`,
   favicon: `${API_URL}/apis/icons/favicon`,
  siteSettings: (id) => `${API_URL}/api/admin/websites/${id}/settings`,
  settingLogo: `${API_URL}/apis/setting-logo`,

  posts: `${API_URL}/apis/admin/posts`,               
  // postBySlug: (slug) => `${API_URL}/apis/posts/category/${slug}`,
  postBySlug: (slug) => `${API_URL}/apis/posts/slug/${slug}`,  
  allPosts: () => `${API_URL}/apis/posts`,
  categories: `${API_URL}/apis/categories`,          

  pages: `${API_URL}/apis/admin/posts`,              
  pageBySlug: (slug) => `${API_URL}/apis/admin/posts/page/${slug}`,

}

export default API_ENDPOINTS

