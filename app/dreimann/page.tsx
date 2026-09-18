import Image from 'next/image';
import Link from 'next/link';

export default function DreimannLandingPage() {
    const playStoreUrl =
        'https://play.google.com/store/apps/details?id=de.dreimann.app';

    // HIER deinen TestFlight-Einladungslink oder IPA-Downloadlink hinterlegen:
    const iosDownloadUrl = 'https://testflight.apple.com/join/DEIN_TESTFLIGHT_CODE';

    // Vektor-QR-Code speziell für den Play Store
    const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
        playStoreUrl
    )}&bgcolor=1c150e&color=F0DD91&margin=8`;

    return (
        <main className="min-h-screen w-full bg-[#0d0906] text-white relative overflow-hidden flex flex-col items-center justify-between p-6 sm:p-12">
            {/* Subtile Lichteffekte im Hintergrund */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F0DD91]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#b36f28]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-[#F0DD91]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Zentrierter Hero- & Download-Bereich */}
            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center my-auto">
                {/* Logo */}
                <div className="relative w-64 sm:w-80 h-28 mb-6">
                    <Image
                        src="/logo.png"
                        alt="Dreimann Logo"
                        fill
                        className="object-contain drop-shadow-[0_4px_16px_rgba(240,221,145,0.25)]"
                        priority
                    />
                </div>

                {/* Headline */}
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F0DD91] via-[#fff3c4] to-[#b36f28] mb-4">
                    Das legendäre Trinkspiel für deine Runde.
                </h1>
                <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Keine Zettelwirtschaft, keine Diskussionen: Regeln griffbereit, Würfel
                    an Bord. Schnapp dir deine Gruppe und macht den Dreimann ausfindig!
                </p>

                {/* Store Karten Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl text-left">

                    {/* 1. Google Play / Android Box inkl. eigenem QR-Code */}
                    <div className="bg-[#15100b]/80 border-2 border-[#F0DD91]/40 hover:border-[#F0DD91] transition-colors rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs uppercase tracking-widest text-[#F0DD91] font-bold">
                                    Android • Google Play
                                </span>
                                <span className="bg-[#F0DD91]/20 text-[#F0DD91] text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-[#F0DD91]/30">
                                    Offizieller Release
                                </span>
                            </div>

                            {/* Play Store Klick-Button */}
                            <Link
                                href={playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 bg-gradient-to-r from-[#21170e] to-[#332213] border border-[#b36f28]/50 hover:border-[#F0DD91] p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg mb-6"
                            >
                                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
                                    <svg className="w-8 h-8 fill-current text-[#F0DD91] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                        <path d="M3.609 1.814L13.793 12 3.61 22.186a2.43 2.43 0 0 1-.61-1.686V3.5a2.43 2.43 0 0 1 .609-1.686zm11.605 11.607l2.457 2.457-11.45 6.611 8.993-9.068zm0-2.842l-8.993-9.068 11.45 6.61 2.457 2.458zm1.42 1.421l3.52 2.032a1.69 1.69 0 0 0 0-2.932l-3.52-2.032-1.42 1.466 1.42 1.466z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">Download bei</div>
                                    <div className="text-xl font-bold text-white group-hover:text-[#F0DD91] transition-colors">Google Play</div>
                                </div>
                            </Link>
                        </div>

                        {/* Dedizierter Google Play QR-Code Bereich */}
                        <div className="flex items-center gap-4 pt-4 border-t border-neutral-800/80">
                            <div className="p-2 bg-[#1c150e] border border-[#b36f28]/40 rounded-xl shadow-inner flex-shrink-0">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={qrCodeApiUrl}
                                    alt="QR-Code direkt zu Google Play"
                                    className="w-24 h-24 rounded-lg"
                                />
                            </div>
                            <div className="text-xs text-neutral-400">
                                <strong className="text-neutral-200 block mb-1">Play Store Direktscan</strong>
                                Scanne den Code mit deinem Android-Gerät, um die App sofort herunterzuladen.
                            </div>
                        </div>
                    </div>

                    {/* 2. iOS / Apple Box (Inaktiv / Coming Soon) */}
                    <div className="bg-[#121110]/50 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl backdrop-blur-md opacity-75">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold">
                                    Apple • iOS
                                </span>
                                <span className="bg-neutral-800 text-neutral-400 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-neutral-700">
                                    In Vorbereitung
                                </span>
                            </div>

                            {/* Inaktiver iOS-Button */}
                            <div className="flex items-center gap-4 bg-neutral-900/60 border border-neutral-800 p-4 rounded-xl cursor-not-allowed mb-6">
                                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
                                    <svg className="w-8 h-8 fill-current text-neutral-500" viewBox="0 0 24 24">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.74-.95 2.76 1.01.08 2.05-.51 2.68-1.26z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">Demnächst im</div>
                                    <div className="text-xl font-bold text-neutral-400">App Store (iOS)</div>
                                </div>
                            </div>
                        </div>

                        {/* Hinweistext */}
                        <div className="p-4 bg-neutral-900/40 rounded-xl border border-neutral-800/80 text-xs text-neutral-400">
                            <span className="font-semibold text-neutral-300 block mb-1">Bald verfügbar:</span>
                            Die iOS-Version befindet sich aktuell in der Abstimmung mit Apple. Sobald sie freigegeben ist, erscheint hier der direkte Link.
                        </div>
                    </div>





                    {/* 2. iOS / Apple Box (Direktlink / Vorabversion)
                    <div className="bg-[#121110]/70 border border-neutral-800 hover:border-neutral-700 transition-colors rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
                                    Apple • iOS
                                </span>
                                <span className="bg-amber-500/10 text-amber-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-amber-500/20">
                                    Vorabzugang
                                </span>
                            </div> */}

                    {/* iOS Klick-Button
                            <Link
                                href={iosDownloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 bg-[#1a1715] hover:bg-[#231e1b] border border-neutral-700 hover:border-neutral-500 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg mb-6"
                            >
                                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
                                    <svg className="w-8 h-8 fill-current text-neutral-200 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.74-.95 2.76 1.01.08 2.05-.51 2.68-1.26z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">Download für iPhone</div>
                                    <div className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">iOS Vorabversion</div>
                                </div>
                            </Link>
                        </div> */}

                    {/* Infobereich für iOS
                        <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800 text-xs text-neutral-400">
                            <span className="font-semibold text-neutral-200 block mb-1">Noch nicht im öffentlichen App Store:</span>
                            Die iOS-Version befindet sich aktuell in der Vorbereitung. Über den Button oben kannst du die Version vorab herunterladen und testen.
                        </div>
                    </div> */}

                </div>
            </div>

            {/* Footer */}
            <footer className="relative z-10 w-full text-center text-xs text-neutral-500 py-4 mt-8">
                Ein Projekt der Cross-Media UG • Dreimann Trinkspiel-App
            </footer>
        </main>
    );
}