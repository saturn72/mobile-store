const whatsAppLink = (phone: string, text: string): string => `https://wa.me/${phone}?text=${text}`;
export default {
    redirectTo: (url: string): void => window.location.replace(url),
    redirectToWhatsapp: (phone: string, text: string): void => {
        window.location.replace(whatsAppLink(phone, text));
    },
}