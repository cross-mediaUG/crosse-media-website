import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum – Cross-Media UG",
    description: "Impressum und rechtliche Angaben der Cross-Media UG (haftungsbeschränkt)",
};

// ============================================================================
// 🔹 HIER DATEN
// ============================================================================
const FIRMENDATEN = {
    firmenname: "Cross-Media UG (haftungsbeschränkt)",
    strasse: "Schloßblick 14",
    plzOrt: "87748 Fellheim",
    geschaeftsfuehrer: "Thore Zimmer",
    email: "crossmediaug@cross-media.tech",
    telefon: "+49 1512 2797305",
    registergericht: "Amtsgericht Memmingen",
    hrbNummer: "HRB 21427",
    ustId: "DE451596366",
};
// ============================================================================

export default function CrossMediaImpressumPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-300 relative overflow-hidden p-6 sm:p-12">
            {/* Futuristic grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none" />

            {/* Glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-3xl bg-zinc-900/80 border border-zinc-700/50 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-2xl my-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline mb-8"
                >
                    ← Zurück zur Startseite
                </Link>

                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    Impressum
                </h1>

                <div className="space-y-6 text-sm leading-relaxed">
                    <section>
                        <h2 className="font-semibold text-white mb-1">Angaben gemäß § 5 DDG</h2>
                        <p>
                            {FIRMENDATEN.firmenname}
                            <br />
                            {FIRMENDATEN.strasse}
                            <br />
                            {FIRMENDATEN.plzOrt}
                            <br />
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
                            Telefon: {FIRMENDATEN.telefon}
                            <br />
                            E-Mail: {FIRMENDATEN.email}
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-1">Registereintrag</h2>
                        <p>
                            Eintragung im Handelsregister.
                            <br />
                            Registergericht: {FIRMENDATEN.registergericht}
                            <br />
                            Registernummer: {FIRMENDATEN.hrbNummer}
                        </p>
                    </section>

                    {/* Wird automatisch nur angezeigt, wenn du oben bei ustId etwas eingetragen hast */}
                    {FIRMENDATEN.ustId && (
                        <section>
                            <h2 className="font-semibold text-white mb-1">Umsatzsteuer-ID</h2>
                            <p>
                                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                                <br />
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
                </div>
            </div>
        </main>
    );
}