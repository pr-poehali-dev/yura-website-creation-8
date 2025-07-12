import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="py-6 px-4 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Users" size={32} className="text-[#FF6B6B]" />
            <h1 className="text-2xl font-bold text-gray-900">FindKazan</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#search"
              className="text-gray-600 hover:text-[#FF6B6B] transition-colors"
            >
              Поиск
            </a>
            <a
              href="#how"
              className="text-gray-600 hover:text-[#FF6B6B] transition-colors"
            >
              Как работает
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-[#FF6B6B] transition-colors"
            >
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Найдем нужного
                  <span className="text-[#FF6B6B]"> человека</span>
                  <br />в Казани
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Специализируемся на поиске людей в районе улицы Спартаковская.
                  Поможем найти и организовать встречу с нужным человеком.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-8 py-6 text-lg rounded-2xl">
                  <Icon name="Search" size={20} className="mr-2" />
                  Начать поиск
                </Button>
                <Button
                  variant="outline"
                  className="border-[#4EQDC4] text-[#4EQDC4] hover:bg-[#4EQDC4] hover:text-white px-8 py-6 text-lg rounded-2xl"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться в Telegram
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} className="text-[#4EQDC4]" />
                  <span className="text-gray-600">
                    Казань, ул. Спартаковская
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={20} className="text-[#4EQDC4]" />
                  <span className="text-gray-600">24/7 поддержка</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="img/f2ede4e1-42db-435f-9147-5ae25d4c5817.jpg"
                alt="Поиск людей в Казани"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#4EQDC4] rounded-full flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">200+ человек</p>
                    <p className="text-sm text-gray-600">уже найдено</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Form Section */}
      <section id="search" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Форма поиска
            </h2>
            <p className="text-xl text-gray-600">
              Заполните детали для более точного поиска
            </p>
          </div>

          <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Район поиска
                  </label>
                  <Input
                    placeholder="ул. Спартаковская и окрестности"
                    className="rounded-xl border-2 border-gray-200 focus:border-[#FF6B6B] h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Возраст (примерно)
                  </label>
                  <Input
                    placeholder="Например: 25-30 лет"
                    className="rounded-xl border-2 border-gray-200 focus:border-[#FF6B6B] h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Особые приметы
                  </label>
                  <Input
                    placeholder="Рост, цвет волос, одежда..."
                    className="rounded-xl border-2 border-gray-200 focus:border-[#FF6B6B] h-12"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Цель встречи
                  </label>
                  <Textarea
                    placeholder="Опишите, зачем нужна встреча с человеком..."
                    className="rounded-xl border-2 border-gray-200 focus:border-[#FF6B6B] min-h-[100px]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваш контакт
                  </label>
                  <Input
                    placeholder="Telegram, телефон..."
                    className="rounded-xl border-2 border-gray-200 focus:border-[#FF6B6B] h-12"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-12 py-6 text-lg rounded-2xl">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how"
        className="py-20 px-4 bg-gradient-to-br from-[#4EQDC4]/10 to-[#FF6B6B]/10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600">Простой процесс в 4 шага</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "FileText",
                title: "Заявка",
                desc: "Заполните форму с деталями поиска",
              },
              {
                icon: "Search",
                title: "Поиск",
                desc: "Наша команда начинает активный поиск",
              },
              {
                icon: "Users",
                title: "Контакт",
                desc: "Находим и устанавливаем связь",
              },
              {
                icon: "Handshake",
                title: "Встреча",
                desc: "Организуем безопасную встречу",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B6B] to-[#4EQDC4] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Готовы помочь в поиске нужного человека
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <Icon
                name="MessageCircle"
                size={32}
                className="text-[#4EQDC4] mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Telegram</h3>
              <p className="text-gray-600 text-sm mb-4">Быстрое общение 24/7</p>
              <Button
                variant="outline"
                className="border-[#4EQDC4] text-[#4EQDC4] hover:bg-[#4EQDC4] hover:text-white"
              >
                Написать
              </Button>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <Icon
                name="Phone"
                size={32}
                className="text-[#FF6B6B] mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
              <p className="text-gray-600 text-sm mb-4">
                Прямая связь с оператором
              </p>
              <Button
                variant="outline"
                className="border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white"
              >
                Позвонить
              </Button>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <Icon
                name="MapPin"
                size={32}
                className="text-gray-600 mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Локация</h3>
              <p className="text-gray-600 text-sm mb-4">
                Казань, ул. Спартаковская
              </p>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
              >
                На карте
              </Button>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-[#FF6B6B] to-[#4EQDC4] p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Присоединяйтесь к нашему сообществу
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Получайте уведомления о новых возможностях
            </p>
            <Button
              className="bg-white text-[#FF6B6B] hover:bg-gray-100 px-8 py-3 rounded-xl"
              onClick={() =>
                window.open("https://t.me/+2hdYkL2CbhQxM2Zi", "_blank")
              }
            >
              <Icon name="Send" size={20} className="mr-2" />
              Присоединиться в Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Users" size={24} className="text-[#FF6B6B]" />
                <span className="text-xl font-bold">FindKazan</span>
              </div>
              <p className="text-gray-400">
                Профессиональный поиск людей в Казани
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Поиск людей</li>
                <li>Организация встреч</li>
                <li>Консультации</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Telegram: @findkazan</li>
                <li>Казань, ул. Спартаковская</li>
                <li>24/7 поддержка</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Конфиденциальность</li>
                <li>Безопасность</li>
                <li>Условия использования</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FindKazan. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
