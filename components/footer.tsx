export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Red Tañag. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-2">Designed and built with passion</p>
      </div>
    </footer>
  )
}

