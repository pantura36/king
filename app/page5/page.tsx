"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, Save } from "lucide-react";
import Link from "next/link";
import { useApp } from "../../lib/AppContext";

/**
 * Loan Application Form (page5) - Responsive version of mock/page_5.jpeg.
 */
export default function Page5() {
  const { appData, updateLoanForm } = useApp();
  const form = appData.loanForm || {};

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 pb-12">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-4 py-4 flex items-center justify-between shadow-sm">
        <Link href="/page4" className="flex items-center gap-2 text-slate-600 hover:text-orange-500 transition-colors">
          <ChevronLeft className="w-6 h-6" />
          <span className="font-bold hidden sm:inline">Kembali</span>
        </Link>
        <div className="flex flex-col items-center">
           <h1 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Form Pengajuan Pinjaman</h1>
           <div className="h-6 mt-1 flex items-center">
             <img src="https://www.jago.com/images/brand/logo-jago.svg" alt="Bank Jago" className="h-full" />
           </div>
        </div>
        <button className="bg-orange-500 text-white p-2 rounded-lg shadow-md active:scale-95 transition-all">
          <Save className="w-5 h-5" />
        </button>
      </header>

      {/* Main Form Content */}
      <main className="max-w-3xl mx-auto w-full px-4 sm:px-6 pt-8 space-y-8">
        
        {/* Section 1: Data Pribadi */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-[#FFB800] px-6 py-3">
             <h2 className="text-black font-black text-sm uppercase">1. Data Pribadi</h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField 
              label="Nama Lengkap" 
              placeholder="Masukkan nama sesuai KTP" 
              value={form.namaLengkap} 
              onChange={(v) => updateLoanForm({ namaLengkap: v })}
            />
            <InputField 
              label="Tempat, Tanggal Lahir" 
              placeholder="Contoh: Jakarta, 01-01-1990" 
              value={form.tempatTanggalLahir}
              onChange={(v) => updateLoanForm({ tempatTanggalLahir: v })}
            />
            <InputField 
              label="Nomor KTP/NIK" 
              placeholder="16 digit angka" 
              value={form.nik_kredit}
              onChange={(v) => updateLoanForm({ nik_kredit: v })}
            />
            <InputField 
              label="NPWP (jika ada)" 
              placeholder="Masukkan NPWP" 
              value={form.npwp}
              onChange={(v) => updateLoanForm({ npwp: v })}
            />
            <InputField 
              label="Status Pernikahan" 
              placeholder="Belum Kawin / Kawin / Cerai" 
              value={form.statusPernikahan}
              onChange={(v) => updateLoanForm({ statusPernikahan: v })}
            />
            <InputField 
              label="Jumlah Tanggungan" 
              placeholder="Contoh: 0" 
              value={form.jumlahTanggungan}
              onChange={(v) => updateLoanForm({ jumlahTanggungan: v })}
            />
          </div>
        </section>

        {/* Section 2: Kontak & Alamat */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-[#FFB800] px-6 py-3">
             <h2 className="text-black font-black text-sm uppercase">2. Kontak & Alamat</h2>
          </div>
          <div className="p-6 space-y-6">
            <InputField 
              label="Alamat Domisili" 
              placeholder="Alamat lengkap saat ini" 
              isFull 
              value={form.alamatDomisili}
              onChange={(v) => updateLoanForm({ alamatDomisili: v })}
            />
            <InputField 
              label="Alamat Sesuai KTP" 
              placeholder="Alamat sesuai KTP" 
              isFull 
              value={form.alamatKtp}
              onChange={(v) => updateLoanForm({ alamatKtp: v })}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField 
                label="Nomor HP" 
                placeholder="Contoh: 0812..." 
                value={form.nomorHp}
                onChange={(v) => updateLoanForm({ nomorHp: v })}
              />
              <InputField 
                label="Email" 
                placeholder="contoh@mail.com" 
                value={form.email_kredit}
                onChange={(v) => updateLoanForm({ email_kredit: v })}
              />
            </div>
          </div>
        </section>

        {/* Section 3: Data Pekerjaan */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-[#FFB800] px-6 py-3">
             <h2 className="text-black font-black text-sm uppercase">3. Data Pekerjaan / Usaha</h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField label="Pekerjaan" value={form.pekerjaan} onChange={(v) => updateLoanForm({ pekerjaan: v })} />
            <InputField label="Nama Perusahaan / Usaha" value={form.perusahaan} onChange={(v) => updateLoanForm({ perusahaan: v })} />
            <InputField label="Alamat Tempat Kerja" isFull value={form.alamatKerja} onChange={(v) => updateLoanForm({ alamatKerja: v })} />
            <InputField label="Lama Bekerja / Usaha" value={form.lamaBekerja} onChange={(v) => updateLoanForm({ lamaBekerja: v })} />
            <InputField label="Penghasilan per Bulan" value={form.penghasilan} onChange={(v) => updateLoanForm({ penghasilan: v })} />
          </div>
        </section>

        {/* Section 4 & 5: Pinjaman & Keuangan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-[#FFB800] px-6 py-3">
                <h2 className="text-black font-black text-sm uppercase">4. Informasi Pinjaman</h2>
              </div>
              <div className="p-6 space-y-4">
                <InputField label="Jenis Pinjaman" value={form.jenisPinjaman} onChange={(v) => updateLoanForm({ jenisPinjaman: v })} />
                <InputField label="Jumlah Pinjaman" value={form.jumlahPinjaman} onChange={(v) => updateLoanForm({ jumlahPinjaman: v })} />
                <InputField label="Tujuan Pinjaman" value={form.tujuanPinjaman} onChange={(v) => updateLoanForm({ tujuanPinjaman: v })} />
                <InputField label="Jangka Waktu (Bulan)" value={form.jangkaWaktu} onChange={(v) => updateLoanForm({ jangkaWaktu: v })} />
              </div>
           </section>

           <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-[#FFB800] px-6 py-3">
                <h2 className="text-black font-black text-sm uppercase">5. Data Keuangan</h2>
              </div>
              <div className="p-6 space-y-4">
                <InputField label="Total Pengeluaran per Bulan" value={form.pengeluaran} onChange={(v) => updateLoanForm({ pengeluaran: v })} />
                <InputField label="Cicilan yang Sedang Berjalan" value={form.cicilan} onChange={(v) => updateLoanForm({ cicilan: v })} />
                <InputField label="Aset yang Dimiliki" value={form.aset} onChange={(v) => updateLoanForm({ aset: v })} />
              </div>
           </section>
        </div>

        {/* Section 6: Data Darurat */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-[#FFB800] px-6 py-3">
             <h2 className="text-black font-black text-sm uppercase">6. Data Darurat</h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField label="Nama Kontak Darurat" value={form.kontakDarurat?.nama} onChange={(v) => updateLoanForm({ kontakDarurat: { ...form.kontakDarurat, nama: v } })} />
            <InputField label="Hubungan" value={form.kontakDarurat?.hubungan} onChange={(v) => updateLoanForm({ kontakDarurat: { ...form.kontakDarurat, hubungan: v } })} />
            <InputField label="Nomor HP 1" value={form.kontakDarurat?.hp1} onChange={(v) => updateLoanForm({ kontakDarurat: { ...form.kontakDarurat, hp1: v } })} />
            <InputField label="Nomor HP 2" value={form.kontakDarurat?.hp2} onChange={(v) => updateLoanForm({ kontakDarurat: { ...form.kontakDarurat, hp2: v } })} />
          </div>
        </section>

        {/* Section 7: Pernyataan */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 space-y-6">
          <div>
            <h2 className="text-orange-500 font-black text-xl mb-4">7. Pernyataan</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Saya menyatakan bahwa data yang saya isi adalah benar dan bersedia mengikuti ketentuan yang berlaku di PT Bank Jago Tbk.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-12 pt-8">
             <div className="w-full sm:w-1/2 flex flex-col items-center">
                <div className="w-full h-32 border-b-2 border-slate-200 border-dashed mb-3" />
                <span className="text-xs font-bold text-slate-400">Tanda Tangan</span>
             </div>
             <div className="w-full sm:w-1/3 flex flex-col items-end">
                <div className="w-full border-b-2 border-slate-200 py-2 text-right font-medium">
                  {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                <span className="text-xs font-bold text-slate-400 mt-2">Tanggal</span>
             </div>
          </div>

          <Link href="/page6" className="w-full block mt-8">
            <button className="w-full bg-[#FFB800] hover:bg-orange-500 text-black font-black py-5 rounded-2xl shadow-lg transition-all active:scale-[0.98] text-lg">
               Kirim Pengajuan Sekarang
            </button>
          </Link>
        </section>

      </main>
    </div>
  );
}

function InputField({ 
  label, 
  placeholder, 
  isFull = false, 
  value, 
  onChange 
}: { 
  label: string; 
  placeholder?: string; 
  isFull?: boolean; 
  value?: string; 
  onChange: (val: string) => void 
}) {
  return (
    <div className={`flex flex-col gap-2 ${isFull ? 'col-span-1 sm:col-span-2' : ''}`}>
      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{label}</label>
      <input 
        type="text"
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="bg-slate-50 border-b-2 border-slate-200 px-0 py-2.5 focus:outline-none focus:border-orange-500 text-slate-800 font-medium transition-colors placeholder:text-slate-300 placeholder:font-normal"
      />
    </div>
  );
}
