import { Route} from 'react-router-dom';
import Hero from "@/components/About/main/Hero";

export default function Aboutpage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
      </div>
      <Route path='about-page' element={<Aboutpage/>} />
    </main>
  );
}

