const WHATSAPP_URL = 'https://wa.me/972542204119?text=';
export default {
    redirectTo: (url: string): void => window.location.replace(url),
    redirectToWhatsapp: (text: string): void => {
        window.location.replace(`${WHATSAPP_URL}${text}`);
    }
}