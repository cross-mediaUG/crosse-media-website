'use client';
import { useEffect, useState } from 'react';

export default function SaleBanner() {
    const [isSaleActive, setIsSaleActive] = useState(false);

    useEffect(() => {
        const now = new Date();
        // Start: 06.10.2026, 00:00 Uhr | Ende: 14.10.2026, 23:59 Uhr
        const saleStart = new Date('2026-10-06T00:00:00');
        const saleEnd = new Date('2026-10-14T23:59:59');

        setIsSaleActive(now >= saleStart && now <= saleEnd);
    }, []);

    if (!isSaleActive) return null;

    return (
        <div className="w-full mb-6 bg-gradient-to-r from-[#21170e] to-[#332213] border border-[#F0DD91] text-[#F0DD91] text-center py-2 px-3 rounded-xl shadow-[0_0_15px_rgba(240,221,145,0.2)] animate-pulse">
            <span className="font-bold tracking-wide uppercase text-xs sm:text-sm block">
                🎲 🎲 Launch Sale: 10% Rabatt! 🎲 🎲
            </span>
        </div>
    );
}