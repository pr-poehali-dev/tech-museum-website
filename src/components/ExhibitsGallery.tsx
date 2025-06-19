import Icon from "@/components/ui/icon";

const ExhibitsGallery = () => {
  const exhibits = [
    {
      id: 1,
      type: "photo",
      title: "Первый выпуск 1954 года",
      description:
        "Историческая фотография первых выпускников технического колледжа",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop",
      year: "1954",
    },
    {
      id: 2,
      type: "document",
      title: "Устав колледжа",
      description: "Оригинальный документ об основании учебного заведения",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      year: "1953",
    },
    {
      id: 3,
      type: "photo",
      title: "Учебные мастерские",
      description: "Практические занятия студентов в токарных мастерских",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      year: "1960",
    },
    {
      id: 4,
      type: "document",
      title: "Диплом с отличием",
      description: "Первый диплом с отличием, выданный в колледже",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      year: "1956",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Экспонаты музея
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Уникальная коллекция фотографий и документов, рассказывающих историю
            нашего колледжа
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exhibits.map((exhibit) => (
            <div
              key={exhibit.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={exhibit.image}
                  alt={exhibit.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      exhibit.type === "photo"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {exhibit.type === "photo" ? (
                      <span className="flex items-center gap-1">
                        <Icon name="Camera" className="h-3 w-3" />
                        Фото
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Icon name="FileText" className="h-3 w-3" />
                        Документ
                      </span>
                    )}
                  </span>
                </div>
                <div className="absolute bottom-2 left-2">
                  <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm font-medium">
                    {exhibit.year}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 font-montserrat">
                  {exhibit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {exhibit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200 inline-flex items-center gap-2">
            <Icon name="Eye" className="h-5 w-5" />
            Посмотреть все экспонаты
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExhibitsGallery;
