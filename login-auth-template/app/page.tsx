
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-center px-4">
      <h1 className="text-5xl font-bold text-blue-800 mb-4">Welcome</h1>
      <p className="text-lg text-blue-700 mb-6">
        ระบบล็อกอินด้วย Google / GitHub / Facebook พร้อมใช้งาน!
      </p>
      <a
        href="/login"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        ไปที่หน้า Login
      </a>
    </div>
  );
}