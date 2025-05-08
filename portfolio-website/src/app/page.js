import '../styles/globals.css'
import Footer from '../components/footer';

export default function Home() {
  return (
<main className="min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="text-xl max-w-xl mb-8">
          I'm a web developer specializing in building modern and responsive websites using JavaScript and Tailwind CSS.
        </p>
        <a
          href="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View My Projects
        </a>
      </section>
    </main>
  );
}
