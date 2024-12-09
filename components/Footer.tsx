export default function Footer() {
    return (
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          © {new Date().getFullYear()} Alexander G. Morano. All rights reserved.
        </div>
      </footer>
    );
  }