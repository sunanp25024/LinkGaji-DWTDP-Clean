import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, CreditCard, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import tdpLogoUrl from "@assets/TDP_1753902031441.png";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <img 
              src={tdpLogoUrl} 
              alt="TDP Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">
                SISTEM PENGGAJIAN DAILY WORKER TDP
              </h1>
              <p className="text-gray-600 text-sm sm:text-base mt-1">
                Registrasi Karyawan Harian
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Schedule Information */}
        <Card className="mb-8 border-blue-200 shadow-lg">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-700 mb-6 flex items-center justify-center">
              <Calendar className="mr-3 h-6 w-6" />
              Jadwal Pembayaran Gaji
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-4 sm:p-6 text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">1-15</span>
                </div>
                <h3 className="font-semibold text-blue-800 mb-2">Periode Pertama</h3>
                <p className="text-blue-700">Tanggal 1-15 akan dibayarkan di</p>
                <p className="font-bold text-blue-800 text-lg">Tanggal 25</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 sm:p-6 text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">16-30</span>
                </div>
                <h3 className="font-semibold text-green-800 mb-2">Periode Kedua</h3>
                <p className="text-green-700">Tanggal 16-30 akan dibayarkan di</p>
                <p className="font-bold text-green-800 text-lg">Tanggal 10</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card className="mb-8 border-orange-200 shadow-lg">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-orange-700 mb-6 flex items-center justify-center">
              <AlertTriangle className="mr-3 h-6 w-6" />
              Persyaratan Wajib
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Wajib diisi dengan <strong>lengkap</strong> dan benar</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Wajib menggunakan <strong>rekening bank</strong></p>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Wajib menggunakan <strong>rekening pribadi</strong> atas nama sendiri</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">TIDAK DIPERBOLEHKAN:</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• E-wallet (DANA/OVO/GoPay/ShopeePay dll)</li>
                  <li>• Rekening orang tua, saudara, atau orang lain</li>
                  <li>• Rekening yang bukan atas nama pendaftar</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        <div className="text-center">
          <Link href="/form">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <CreditCard className="mr-3 h-5 w-5" />
              Mulai Registrasi
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
          
          <p className="text-gray-600 text-sm mt-4">
            Pastikan semua dokumen dan informasi sudah siap sebelum memulai
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 TDP Daily Worker System. Semua data akan diproses sesuai kebijakan perusahaan.
          </p>
        </div>
      </footer>
    </div>
  );
}