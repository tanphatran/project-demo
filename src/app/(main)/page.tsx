import AdminProfile from "../components/AdminProfile";
import BlogSection from "./_components/BlogSection";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <AdminProfile />
      <BlogSection />
    </div>
  );
}
