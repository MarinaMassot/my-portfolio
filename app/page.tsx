import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";
import { ContentContainer } from "./components/ContentContainer";
import { Menu } from "./components/Menu";

export default function Home() {
  return (
    <main className="w-full">
      <Menu />
      <Header/>
      <Spacing size="md"/>
      <Hero/>
      <Spacing size="md"/>
      <ContentContainer/>
    </main>
  );
}
