import { Header } from "../components/my-components/Header";
import { Hero } from "../components/my-components/Hero";
import { Spacing } from "../components/my-components/Spacing";
import { ContentContainer } from "../components/my-components/ContentContainer";
import { Footer } from "../components/my-components/Footer";

export default function Home() {
  return (
    <>
    <main className="w-full h-full">
      <Header />
      <Hero />
      <Spacing size="md" />
      <ContentContainer />
      <Spacing size="md" />
      <Footer />
    </main>
    </>
  );
}
