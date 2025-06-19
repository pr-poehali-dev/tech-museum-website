import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExhibitsGallery from "@/components/ExhibitsGallery";
import VideoTour from "@/components/VideoTour";
import HeroesSection from "@/components/HeroesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ExhibitsGallery />
      <VideoTour />
      <HeroesSection />

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2024 Музей Технического Колледжа. Все права защищены.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Создано для сохранения истории и памяти
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
