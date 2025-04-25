import { Button } from "@/components/ui/button"
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";
import { ContentContainer } from "./components/ContentContainer";

export default function Home() {
  return (
    <main>
      <Header/>
      <Spacing size="md"/>
      <Hero/>
      <Spacing size="md"/>
      <ContentContainer/>
    </main>
  );
}
