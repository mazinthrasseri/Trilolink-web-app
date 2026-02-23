'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Gift, Ticket, Coins, MousePointer2, ToggleRight, ArrowRight, QrCode, ScanLine } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            {/* --- SECTION 1: Original Gradient Hero (as seen in screenshot) --- */}
            <section className="relative overflow-hidden pt-24 pb-12 sm:pb-20 lg:pt-36 lg:pb-24">
                {/* Background gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] opacity-40 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-100 to-transparent blur-3xl rounded-full" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-6 ring-1 ring-brand-200/50">
                            <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
                            Introducing Trilolink
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto">
                            Smart QR Reward Platform for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-800 to-[hsl(225deg_41.29%_64.2%)]">Businesses</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10">
                            Generate product QR codes, manage scan-based subscriptions, and reward your customers through a seamless digital wallet.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/coming-soon" className="flex items-center gap-2 px-8 py-4 rounded-full bg-brand-600 text-white font-medium hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 active:scale-95 w-full sm:w-auto justify-center text-lg">
                                Get Started <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/coming-soon" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-700 font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-95 w-full sm:w-auto text-lg hover:shadow-sm">
                                Login to Dashboard
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- SECTION 2: Floating WhatsApp Elements & QR Illustration --- */}
            <section className="relative overflow-hidden py-12 sm:py-20 lg:py-32 bg-slate-100/80 border-y border-slate-200/60 flex flex-col items-center justify-center">
                {/* Subtle Abstract Background */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_70%,transparent_100%)] opacity-100" />
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">

                    {/* Floating Element: WhatsApp bubble */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: -100, y: 50, rotate: -15 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: -5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
                        className="hidden md:flex absolute -top-10 left-[5%] w-24 h-24 bg-[#25D366] rounded-3xl shadow-xl shadow-[#25D366]/20 items-center justify-center rotate-[-5deg] z-20 border-4 border-white"
                    >
                        <MessageCircle className="w-12 h-12 text-white" fill="white" />
                    </motion.div>

                    {/* Floating Element: Gift Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: -50, y: -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 12 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        className="hidden md:flex absolute top-[10%] left-[0%] w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-xl shadow-indigo-500/20 items-center justify-center rotate-12 z-0 border border-white/50"
                    >
                        <Gift className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Floating Element: Coins / Points */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: 50, y: -100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 15 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                        className="hidden md:flex absolute -top-5 right-[10%] w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-lg shadow-orange-500/20 items-center justify-center rotate-15 z-20 border-2 border-white"
                    >
                        <Coins className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Floating Element: Toggle Switch */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: 100, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: -10 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                        className="hidden md:flex absolute top-[20%] right-[0%] bg-white rounded-full shadow-xl items-center justify-center rotate-[-10deg] z-20 p-2 border border-slate-100"
                    >
                        <div className="bg-[#25D366] rounded-full px-1 py-1 w-20 flex justify-end">
                            <div className="w-8 h-8 bg-white rounded-full shadow-sm" />
                        </div>
                    </motion.div>

                    {/* Floating Element: Cursor */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: -50, y: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: -25 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                        className="hidden md:flex absolute bottom-[10%] left-[15%] z-30 pointer-events-none"
                    >
                        <MousePointer2 className="w-14 h-14 text-slate-800" fill="#1e293b" />
                    </motion.div>

                    {/* Floating Element: Ticket/Coupon (Glassmorphic) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: 100, y: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 20 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                        className="hidden md:flex absolute bottom-[5%] right-[10%] w-24 h-24 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl items-center justify-center rotate-20 z-10 border border-white"
                    >
                        <Ticket className="w-12 h-12 text-blue-500" />
                    </motion.div>

                    {/* Hero Graphic / Illustration & Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-4 sm:mt-8 md:mt-24 relative max-w-4xl mx-auto w-full z-40"
                    >
                        <div className="w-full rounded-3xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-800 relative flex flex-col items-center justify-center py-16 px-6 sm:px-10 gap-12 group">
                            {/* Dark background grid abstract */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent mix-blend-overlay" />

                            {/* Text inside black block */}
                            <div className="relative z-10 text-center max-w-2xl flex flex-col items-center">
                                <h2 className="text-[3rem] leading-[1.1] sm:text-5xl md:text-[4rem] font-extrabold tracking-tight text-white mb-6 flex flex-col items-center">
                                    <span>WhatsApp rewards</span>
                                    <span>that feel</span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 inline-block mt-2">
                                        effortless
                                    </span>
                                </h2>

                                <p className="text-base sm:text-lg text-slate-300 font-medium">
                                    Designed for modern customer experiences that feel seamless from the first scan to final redemption.
                                </p>
                            </div>

                            {/* The QR Scanning visual concept */}
                            <div className="relative z-10 p-6 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.15)] flex flex-col items-center gap-6 group-hover:bg-white/10 transition-colors duration-500 w-[90%] sm:w-auto max-w-sm">
                                <div className="relative">
                                    <QrCode className="w-24 h-24 sm:w-32 sm:h-32 text-indigo-100/90" strokeWidth={1.5} />
                                    {/* Mobile Scanner Line */}
                                    <motion.div
                                        animate={{ y: [0, 96, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-0 left-0 w-full h-[3px] bg-brand-400 shadow-[0_0_20px_rgba(99,102,241,1)] blur-[1px] sm:hidden"
                                    />
                                    {/* Desktop Scanner Line */}
                                    <motion.div
                                        animate={{ y: [0, 128, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-0 left-0 w-full h-[3px] bg-brand-400 shadow-[0_0_20px_rgba(99,102,241,1)] blur-[1px] hidden sm:block"
                                    />
                                </div>
                                <div className="text-white/90 font-medium tracking-widest uppercase text-xs sm:text-sm flex items-center justify-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 w-full text-center">
                                    <ScanLine className="w-3 h-3 sm:w-4 sm:h-4 text-brand-300 animate-pulse shrink-0" />
                                    <span className="truncate">Scanning Reward...</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
