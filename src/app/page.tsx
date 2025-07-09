import Header from "@/components/Header";
import Extension from "@/components/Extension";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className=" pb-2">
      <Header />
      <main>
        <Extension />
      </main>
      <Footer />
    </div>
  );
}
