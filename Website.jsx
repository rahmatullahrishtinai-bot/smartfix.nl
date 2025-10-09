import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import logo from "./assets/smartfix-logo.png";
import store from "./assets/store.jpg";
import work1 from "./assets/work1.jpg";
import work2 from "./assets/work2.jpg";
import work3 from "./assets/work3.jpg";

const NAV = [
  { id: "home", label: "Home" },
  { id: "diensten", label: "Diensten" },
  { id: "openingstijden", label: "Openingstijden" },
  { id: "galerij", label: "Galerij" },
  { id: "contact", label: "Contact" },
];

export default function Website() {
  const [open, setOpen] = useState(false);

  const COMPANY = {
    name: "SmartFix",
    tagline: "Telefoonreparatie • Accessoires • Pasfoto's",
    phone: "+31 348 508 078",
    phoneHref: "tel:+31348508078",
    email: "smartfix3417@gmail.com",
    address: "Hoogestraat 54, 3417HD Montfoort",
    whatsappHref: "https://wa.me/31348508078",
    facebook: "https://www.facebook.com/share/1CS5bNstuC/?mibextid=wwXIfr",
  };

  const services = [
    { title: "Telefoonreparatie", text: "Scherm, batterij, laadpoort, camera, waterschade — snel klaar." },
    { title: "Accessoires", text: "Hoesjes, screenprotectors, kabels en opladers op voorraad." },
    { title: "Pasfoto's", text: "Officiële pasfoto's volgens Rijksoverheidseisen." },
  ];

  const hours = [
    { day: "Maandag", time: "12:00 – 18:00" },
    { day: "Dinsdag", time: "10:00 – 18:00" },
    { day: "Woensdag", time: "10:00 – 18:00" },
    { day: "Donderdag", time: "10:00 – 18:00" },
    { day: "Vrijdag", time: "10:00 – 18:00" },
    { day: "Zaterdag", time: "10:00 – 17:00" },
    { day: "Zondag", time: "Gesloten" },
  ];

  const hoursConfig = {
    1: { open: "12:00", close: "18:00" },
    2: { open: "10:00", close: "18:00" },
    3: { open: "10:00", close: "18:00" },
    4: { open: "10:00", close: "18:00" },
    5: { open: "10:00", close: "18:00" },
    6: { open: "10:00", close: "17:00" },
    0: null,
  };

  const toMinutes = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  const getOpenStatus = (d = new Date()) => {
    const day = d.getDay(); const cfg = hoursConfig[day];
    if (!cfg) return { open: false };
    const nowMin = d.getHours() * 60 + d.getMinutes();
    const openMin = toMinutes(cfg.open); const closeMin = toMinutes(cfg.close);
    const open = nowMin >= openMin && nowMin < closeMin; return { open, close: cfg.close };
  };

  const mapsQuery = encodeURIComponent(COMPANY.address);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SmartFix logo" className="h-10 w-auto" />
            <div>
              <div className="font-bold text-xl">SmartFix</div>
              <div className="text-xs text-gray-500">Telefoonreparatie • Accessoires • Pasfoto&apos;s</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((n) => (<a key={n.id} href={`#${n.id}`} className="text-sm text-gray-700 hover:text-black">{n.label}</a>))}
            <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:shadow"><Phone className="h-4 w-4" /> Bel</a>
          </nav>
          <button className="md:hidden p-2 rounded-lg border" onClick={() => setOpen((s) => !s)} aria-label="menu">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {open && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-3 flex flex-col gap-2">
              {NAV.map((n) => (<a key={n.id} href={`#${n.id}`} className="py-2">{n.label}</a>))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <img src={logo} alt="SmartFix logo" className="mx-auto h-28 w-auto grayscale" />
          <h1 className="text-4xl md:text-5xl font-extrabold mt-6 tracking-tight">Welkom bij SmartFix</h1>
          <p className="text-gray-600 mt-3">Telefoonreparatie • Accessoires • Pasfoto&apos;s</p>
          {(() => { const s = getOpenStatus(); return (
            <div className={`mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${s.open ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              <span className={`h-2.5 w-2.5 rounded-full ${s.open ? 'bg-green-500' : 'bg-red-500'}`} />
              {s.open ? `Nu open • tot ${s.close}` : 'Nu gesloten'}
            </div>
          ); })()}
          <div className="mt-6 text-base md:text-lg font-medium bg-black text-white inline-block px-6 py-3 rounded-xl shadow">
            📱 Wij repareren de meeste telefoons <strong>klaar terwijl je wacht!</strong><br/>💥 Zonder afspraak — klaar binnen 30 minuten, met 3 maanden garantie!
          </div>
          <div className="mt-6 flex justify-center gap-6 text-gray-700 text-lg">
            <span>🔋 Batterij</span><span>🔧 Scherm</span><span>📸 Camera</span>
          </div>
          <section className="mt-12 max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">💸 Populaire reparaties & prijzen</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border p-6 shadow-sm bg-white text-center">
                <h3 className="text-xl font-semibold">iPhone 11 – Schermreparatie</h3>
                <p className="text-3xl font-bold mt-2">€80</p>
                <p className="text-sm text-green-600 mt-1">Gratis screenprotector inbegrepen</p>
              </div>
              <div className="rounded-2xl border p-6 shadow-sm bg-white text-center">
                <h3 className="text-xl font-semibold">iPad – Schermreparatie</h3>
                <p className="text-3xl font-bold mt-2">vanaf €75</p>
              </div>
              <div className="rounded-2xl border p-6 shadow-sm bg-white text-center">
                <h3 className="text-xl font-semibold">iPhone 13 – Batterijvervanging</h3>
                <p className="text-3xl font-bold mt-2">€49</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="diensten" className="py-16 bg-gray-50 border-t border-b">
        <h2 className="text-3xl font-bold text-center mb-8">Onze Diensten</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {services.map((s, i) => (<motion.div key={i} className="rounded-2xl border bg-white p-6 shadow-sm text-center">
            <div className="text-xl font-semibold">{s.title}</div>
            <div className="mt-2 text-gray-600">{s.text}</div>
          </motion.div>))}
        </div>
      </section>

      <section id="openingstijden" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Openingstijden</h2>
        <div className="max-w-md mx-auto border rounded-2xl shadow-sm bg-white p-6">
          {hours.map((h, i) => (<div key={i} className="flex justify-between py-2 border-b last:border-0 text-gray-800">
            <span>{h.day}</span><span>{h.time}</span>
          </div>))}
        </div>
      </section>

      <section id="galerij" className="py-16 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">📸 Onze werkplaats & winkel</h2>
          <p className="text-gray-600 mb-8">Bij SmartFix werken we met precisie en passie aan elk toestel — van scherm tot moederbord.</p>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl overflow-hidden border shadow-sm mb-6">
            <img src={store} alt="Voorkant winkel SmartFix" className="w-full h-[340px] md:h-[420px] object-cover" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[work1, work2, work3].map((g, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl overflow-hidden border shadow-sm">
                <img src={g} alt={`Reparatie ${i+1}`} className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-50 border-t">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 px-4">
          <div className="text-center lg:text-left">
            <p className="text-lg">📍 {COMPANY.address}</p>
            <p className="mt-2">📞 <a href={COMPANY.phoneHref} className="font-medium underline">{COMPANY.phone}</a></p>
            <p className="mt-1">✉️ <a href={`mailto:${COMPANY.email}`} className="font-medium underline">{COMPANY.email}</a></p>
            <p className="mt-3"><a href={COMPANY.facebook} className="underline">Volg ons op Facebook</a></p>
            <div className="mt-6">
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY.address)}`} target="_blank" rel="noreferrer" className="inline-block rounded-xl border px-5 py-3 hover:shadow">🗺️ Route bekijken</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border shadow-sm bg-white">
            <iframe title="Google Maps SmartFix" src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&output=embed`} width="100%" height="360" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <div className="md:hidden fixed bottom-4 inset-x-0 flex justify-center pointer-events-none">
        <div className="pointer-events-auto bg-white border shadow-lg rounded-2xl px-3 py-2 flex items-center gap-2">
          <a href={COMPANY.phoneHref} className="rounded-xl border px-3 py-2 text-sm">Bel</a>
          <a href={COMPANY.whatsappHref} className="rounded-xl border px-3 py-2 text-sm">WhatsApp</a>
          <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY.address)}`} className="rounded-xl border px-3 py-2 text-sm">Route</a>
        </div>
      </div>

      <footer className="border-t text-center py-6 text-sm text-gray-600 bg-white/80 backdrop-blur">
        © {new Date().getFullYear()} SmartFix. Alle rechten voorbehouden.
      </footer>
    </div>
  );
}
