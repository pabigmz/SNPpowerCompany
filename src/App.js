import React from "react";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold tracking-wide">SNP POWER Co.,Ltd.<br />บริษัท เอสเอ็นพี เพาเวอร์ จำกัด</h1>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow p-8 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4 text-blue-700">บริษัท เอสเอ็นพี เพาเวอร์ จำกัด (สำนักงานใหญ่)</h2>
        <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
          เราเชี่ยวชาญด้านการผลิตตู้ MDB, DB, หม้อแปลงไฟฟ้า, งานออโตเมชั่น, โปรแกรม PLC, งานไฟฟ้าแรงต่ำ ติดตั้งและซ่อมบำรุงตู้ควบคุมไฟฟ้าทุกชนิด พร้อมทั้งบริการติดตั้งกล้องวงจรปิด (CCTV), จานดาวเทียม และรับทำป้ายติดตู้ไฟและเนมเพจของเครื่องจักร โดยทีมช่างผู้ชำนาญ
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-teal-600">CCTV Installation</h3>
            <p className="text-gray-700">ระบบกล้องวงจรปิดคุณภาพสูงเพื่อความปลอดภัยของคุณ</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-teal-600">Low-Voltage Systems</h3>
            <p className="text-gray-700">ระบบไฟฟ้าแรงต่ำที่เชื่อถือได้สำหรับทุกการใช้งาน</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-teal-600">Transformer Maintenance</h3>
            <p className="text-gr-day-700">บริการบำรุงรักษาหม้อแปลงไฟฟ้าเพื่อความปลอดภัยและประสิทธิภาพสูงสุด</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p className="text-lg">Contact Information</p>
        <p className="text-sm mt-2">Tel: 044-216-029 | Fax: 044-216-036</p>
        <p className="text-sm mt-2">Website: www.snppower.com</p>
        <p className="text-sm mt-2">Email: snppower@hotmail.com</p>
        <p className="text-sm mt-2">© 2025 Pichaya Santeankaw COMSCI RMUTL NAN. All rights reserved.</p>
      </footer>
    </div>
  );
}
