import { Header } from "./componentes/header/header";
import { SlideShowBy } from "./componentes/header/slideshowby";

export default function Home() {
  return (
    <>
      <Header />
      <SlideShowBy />

      <p className="w-full h-600px">produtos aqui</p>
    </>
  )
}
