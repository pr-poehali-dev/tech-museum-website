import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-blue-50/30 bg-[radial-gradient(circle_at_1px_1px,rgba(37,99,235,0.15)_1px,transparent_0)] [background-size:20px_20px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Добро пожаловать в музей
            <span className="block text-blue-700">
              ГБПОУ "Нижегородского техникума информационных технологий и права"
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Создан в сентябре 2023 года
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Clock" className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
                История
              </h3>
              <p className="text-gray-600">
                Узнайте об основании и развитии техникума
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Users" className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
                Руководители
              </h3>
              <p className="text-gray-600">
                Познакомьтесь с директорами разных лет
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Heart" className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
                Герои СВО
              </h3>
              <p className="text-gray-600">Память о наших выпускниках-героях</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
