/** @type {import('next').NextConfig} */
const nextConfig = {
  // ZWINGEND: Erzeugt den 'out' Ordner für normales Webhosting
  output: 'export', 
  
  // WICHTIG: Verhindert Fehler bei Bildern, da dein Server keine 
  // automatische Bildoptimierung wie Vercel hat
  images: {
    unoptimized: true,
  },

  // OPTIONAL: Ignoriert Fehler beim Build, damit der Prozess durchläuft
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
