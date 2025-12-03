export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Nexus Store. All rights reserved.</p>
        <p className="text-sm mt-1">
          Developed with ❤️ by Nexus AI
        </p>
      </div>
    </footer>
  );
}
