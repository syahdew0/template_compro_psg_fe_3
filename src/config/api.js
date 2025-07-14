// config/api.js
// export const API_URL = 'ttps://api-be-psg.pasifiksgroup.com:8443'
export const API_URL = 'http://localhost:3001'
// export const API_URL = 'compro.pasifiksgroup.com:8443'
// export const API_URL = process.env.VUE_APP_API_URL;

export const API_ENDPOINTS = {
  customPages: `${API_URL}/api/custom-pages/frontend`,     
  adminCustomPages: `${API_URL}/api/admin/custom-pages`, 
  websiteSchema: (id) => `${API_URL}/api/admin/themes/${id}/active-theme`,
  activeTheme: (websiteId) => `${API_URL}/api/admin/themes/${websiteId}/active-theme`,
  updateTheme: (id) => `${API_URL}/api/admin/themes/${id}`,
  themes: `${API_URL}/api/admin/themes`,
  setActiveTheme: (id) => `${API_URL}/api/admin/themes/${id}/active`,
}

export default API_ENDPOINTS