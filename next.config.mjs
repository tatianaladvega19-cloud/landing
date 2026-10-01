const nextConfig = {
  images: {
    // Si el poster del VSL, las fotos de testimonios o los mockups de bonos
    // vienen de un dominio externo (CDN, Vimeo, S3...), añade aquí su patrón.
    // Las imágenes servidas desde /public no necesitan ninguna entrada.
    remotePatterns: [
      // { protocol: "https", hostname: "tu-cdn.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
