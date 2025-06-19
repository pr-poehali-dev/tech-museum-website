import Icon from "@/components/ui/icon";

const HeroesSection = () => {
  const heroes = [
    {
      id: 1,
      name: "Иванов Алексей Сергеевич",
      years: "1985 - 2023",
      specialty: "Механик по ремонту автомобилей",
      graduation: "2005",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      biography:
        "Выпускник 2005 года. Участник специальной военной операции. Награжден орденом Мужества посмертно.",
    },
    {
      id: 2,
      name: "Петров Михаил Александрович",
      years: "1990 - 2024",
      specialty: "Электромонтажник",
      graduation: "2010",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      biography:
        "Выпускник 2010 года. Командир отделения. Геройски погиб, выполняя боевую задачу.",
    },
    {
      id: 3,
      name: "Сидоров Дмитрий Викторович",
      years: "1988 - 2023",
      specialty: "Сварщик",
      graduation: "2008",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      biography:
        "Выпускник 2008 года. Старший сержант. Спас жизни товарищей ценой собственной жизни.",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            Память без границ. Герои СВО
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Вечная память нашим выпускникам, отдавшим жизни за Родину
          </p>
          <div className="flex justify-center mt-6">
            <Icon name="Heart" className="h-8 w-8 text-red-500" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {heroes.map((hero) => (
            <div
              key={hero.id}
              className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="relative mb-6">
                <img
                  src={hero.photo}
                  alt={hero.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-600"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 rounded-full p-2">
                    <Icon name="Star" className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 font-montserrat">
                {hero.name}
              </h3>

              <div className="text-gray-300 mb-4">
                <p className="text-sm">{hero.years}</p>
                <p className="text-sm font-medium text-blue-400">
                  Выпуск {hero.graduation} года
                </p>
                <p className="text-sm">{hero.specialty}</p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {hero.biography}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <span className="text-xs text-gray-500">Вечная память</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
            <Icon
              name="Flame"
              className="h-8 w-8 text-orange-500 mx-auto mb-4"
            />
            <p className="text-gray-300 italic">
              "Они ушли, чтобы мы могли жить. Их подвиг навсегда останется в
              наших сердцах."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroesSection;
