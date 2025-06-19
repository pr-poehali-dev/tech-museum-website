import { useState } from "react";
import Icon from "@/components/ui/icon";

const VideoTour = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Интерактивная экскурсия
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Совершите виртуальную экскурсию по музею и узнайте больше о истории
            колледжа
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              {!isPlaying ? (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="mb-6">
                      <Icon name="Play" className="h-20 w-20 mx-auto" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 font-montserrat">
                      Виртуальная экскурсия
                    </h3>
                    <p className="text-blue-200 mb-6">
                      Продолжительность: 15 минут
                    </p>
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      <Icon name="Play" className="h-5 w-5" />
                      Начать экскурсию
                    </button>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Icon
                      name="Film"
                      className="h-16 w-16 mx-auto mb-4 text-blue-400"
                    />
                    <p className="text-lg mb-4">
                      Видео-экскурсия воспроизводится...
                    </p>
                    <p className="text-gray-400 text-sm">
                      (В реальном проекте здесь будет встроенный видеоплеер)
                    </p>
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Остановить
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-800 p-4">
              <div className="flex justify-between items-center text-white">
                <div className="flex items-center gap-4">
                  <button className="hover:text-blue-400 transition-colors">
                    <Icon name="SkipBack" className="h-5 w-5" />
                  </button>
                  <button className="hover:text-blue-400 transition-colors">
                    {isPlaying ? (
                      <Icon name="Pause" className="h-6 w-6" />
                    ) : (
                      <Icon name="Play" className="h-6 w-6" />
                    )}
                  </button>
                  <button className="hover:text-blue-400 transition-colors">
                    <Icon name="SkipForward" className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <button className="hover:text-blue-400 transition-colors">
                    <Icon name="Volume2" className="h-5 w-5" />
                  </button>
                  <button className="hover:text-blue-400 transition-colors">
                    <Icon name="Maximize" className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <Icon
                name="Clock"
                className="h-8 w-8 text-blue-600 mx-auto mb-2"
              />
              <h4 className="font-semibold text-gray-900 mb-1">История</h4>
              <p className="text-gray-600 text-sm">5 минут</p>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 text-center">
              <Icon
                name="Users"
                className="h-8 w-8 text-amber-600 mx-auto mb-2"
              />
              <h4 className="font-semibold text-gray-900 mb-1">Руководители</h4>
              <p className="text-gray-600 text-sm">5 минут</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 text-center">
              <Icon
                name="BookOpen"
                className="h-8 w-8 text-green-600 mx-auto mb-2"
              />
              <h4 className="font-semibold text-gray-900 mb-1">Экспонаты</h4>
              <p className="text-gray-600 text-sm">5 минут</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTour;
