import { Header } from "../components/my-components/Header";
import { Hero } from "../components/my-components/Hero";
import { Spacing } from "../components/my-components/Spacing";
import { ContentContainer } from "../components/my-components/ContentContainer";

export default function Home() {
  return (
    <>
    <main className="w-full h-full">
      <Header />
      <Hero />
      <Spacing size="md" />
      <ContentContainer />
    </main>
    </>
  );
}
