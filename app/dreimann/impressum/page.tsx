import Link from 'next/link';
import type { Metadata } from 'next';

// 🔹 WICHTIG: "robots: index: false" verbietet Google & Co., diese Seite in Suchergebnissen anzuzeigen!
export const metadata: Metadata = {
    title: 'Impressum & Datenschutz – Dreimann App',
    icons: {
        icon: '/dreimann-icon.png',
    },
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
        },
    },
};

// ============================================================================
// 🔹 HIER DATEN
// ============================================================================
const FIRMENDATEN = {
    firmenname: "Cross-Media UG (haftungsbeschränkt)",
    strasse: "Schloblick 14",
    plzOrt: "87748 Fellheim",
    geschaeftsfuehrer: "Thore Zimmer",
    email: "crossmediaug@cross-media.tech",
    telefon: "+49 1512 2797305",
    registergericht: "Amtsgericht Memmingen",
    hrbNummer: "HRB 21427",
    ustId: "DE451596366",
};
// ============================================================================

export default function DreimannImpressumPage() {
    return (
        <main className="min-h-screen w-full bg-[#0d0906] text-neutral-300 p-6 sm:p-12 flex flex-col items-center">
            <div className="w-full max-w-3xl bg-[#15100b] border border-[#b36f28]/30 rounded-2xl p-6 sm:p-10 shadow-2xl my-auto">

                {/* Zurück-Link */}
                <Link
                    href="/dreimann"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#F0DD91] hover:underline mb-8"
                >
                    ← Zurück zur Dreimann Startseite
                </Link>

                <h1 className="text-2xl sm:text-3xl font-bold text-[#F0DD91] mb-6">
                    Impressum
                </h1>

                <div className="space-y-6 text-sm leading-relaxed">
                    <section>
                        <h2 className="font-semibold text-white mb-1">Angaben gemäß § 5 DDG</h2>
                        <p>
                            {FIRMENDATEN.firmenname}<br />
                            {FIRMENDATEN.strasse}<br />
                            {FIRMENDATEN.plzOrt}<br />
                            Deutschland
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-1">Vertreten durch</h2>
                        <p>Geschäftsführer: {FIRMENDATEN.geschaeftsfuehrer}</p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-1">Kontakt</h2>
                        <p>
                            Telefon: {FIRMENDATEN.telefon}<br />
                            E-Mail: {FIRMENDATEN.email}
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-1">Registereintrag</h2>
                        <p>
                            Eintragung im Handelsregister.<br />
                            Registergericht: {FIRMENDATEN.registergericht}<br />
                            Registernummer: {FIRMENDATEN.hrbNummer}
                        </p>
                    </section>

                    {/* Wird automatisch nur angezeigt, wenn du oben bei ustId etwas eingetragen hast */}
                    {FIRMENDATEN.ustId && (
                        <section>
                            <h2 className="font-semibold text-white mb-1">Umsatzsteuer-ID</h2>
                            <p>
                                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                                {FIRMENDATEN.ustId}
                            </p>
                        </section>
                    )}

                    <section>
                        <h2 className="font-semibold text-white mb-1">
                            Verbraucherstreitbeilegung / Universalschlichtungsstelle
                        </h2>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
                            einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>

                    <hr className="border-neutral-800 my-8" />

                    <h2 className="text-xl sm:text-2xl font-bold text-[#F0DD91] mb-4">
                        Datenschutzhinweis (App, Website & Social Media)
                    </h2>

                    <section className="space-y-3 text-xs sm:text-sm text-neutral-400">
                        <p>
                            <strong className="text-white">1. Verantwortlicher:</strong> Verantwortlich für die Datenverarbeitung im Zusammenhang mit der App „Dreimann“, dieser Landingpage sowie unseren Social-Media-Profilen (z. B. Instagram) ist die oben genannte {FIRMENDATEN.firmenname}.
                        </p>
                        <p>
                            <strong className="text-white">2. Datenverarbeitung in der Dreimann-App:</strong> Die App „Dreimann“ speichert Spielstände und eingegebene Zusatzregeln ausschließlich lokal auf deinem Endgerät. Es werden durch die App selbst keine personenbezogenen Nutzungsprofile auf unseren Servern angelegt. Beim Download über den Google Play Store gelten die Datenschutzbestimmungen der Google Ireland Limited.
                        </p>
                        <p>
                            <strong className="text-white">3. Hosting & QR-Code auf dieser Website:</strong> Beim Aufruf dieser Webseite werden durch den Webserver technisch notwendige Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt des Aufrufs) in Server-Logfiles verarbeitet (Art. 6 Abs. 1 lit. f DSGVO). Zur Darstellung des QR-Codes wird die Schnittstelle von goqr.me (api.qrserver.com) genutzt, wobei technisch bedingt deine IP-Adresse zur Bildauslieferung übermittelt wird.
                        </p>
                        <p>
                            <strong className="text-white">4. Deine Rechte:</strong> Du hast im Rahmen der DSGVO jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung, Einschränkung der Verarbeitung oder Löschung dieser Daten. Wende dich dazu einfach an die oben im Impressum angegebene E-Mail-Adresse.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}