"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

/**
 * Global App State to store all form data across pages.
 */
interface AppData {
  // Page 2: Login
  email?: string;
  password?: string;
  
  // Page 3: NIK
  nik?: string;
  
  // Page 4: OTP
  otp?: string;
  
  // Page 5: Loan Form (simplified structure based on mock)
  loanForm?: {
    namaLengkap?: string;
    tempatTanggalLahir?: string;
    nik_kredit?: string;
    npwp?: string;
    statusPernikahan?: string;
    jumlahTanggungan?: string;
    alamatDomisili?: string;
    alamatKtp?: string;
    nomorHp?: string;
    email_kredit?: string;
    pekerjaan?: string;
    perusahaan?: string;
    alamatKerja?: string;
    lamaBekerja?: string;
    penghasilan?: string;
    jenisPinjaman?: string;
    jumlahPinjaman?: string;
    tujuanPinjaman?: string;
    jangkaWaktu?: string;
    pengeluaran?: string;
    cicilan?: string;
    aset?: string;
    kontakDarurat?: {
       nama?: string;
       hubungan?: string;
       hp1?: string;
       hp2?: string;
    }
  };
}

interface AppContextType {
  appData: AppData;
  updateAppData: (updates: Partial<AppData>) => void;
  updateLoanForm: (updates: Partial<AppData['loanForm']>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [appData, setAppData] = useState<AppData>({
    loanForm: {}
  });

  const updateAppData = (updates: Partial<AppData>) => {
    setAppData((prev) => ({ ...prev, ...updates }));
  };

  const updateLoanForm = (updates: Partial<AppData['loanForm']>) => {
    setAppData((prev) => ({
      ...prev,
      loanForm: { ...prev.loanForm, ...updates }
    }));
  };

  return (
    <AppContext.Provider value={{ appData, updateAppData, updateLoanForm }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
