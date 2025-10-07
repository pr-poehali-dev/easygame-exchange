import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGame, setSelectedGame] = useState("all");

  const games = [
    { id: "all", name: "Все игры" },
    { id: "dota2", name: "Dota 2" },
    { id: "csgo", name: "CS2" },
    { id: "valorant", name: "Valorant" },
    { id: "lol", name: "League of Legends" },
    { id: "wow", name: "World of Warcraft" },
  ];

  const offerTypes = [
    { id: "items", name: "Предметы", icon: "Package" },
    { id: "currency", name: "Валюта", icon: "Coins" },
    { id: "boost", name: "Буст", icon: "TrendingUp" },
    { id: "accounts", name: "Аккаунты", icon: "User" },
  ];

  const offers = [
    {
      id: 1,
      game: "Dota 2",
      title: "Arcana Phantom Assassin",
      price: 2500,
      seller: "ProGamer123",
      rating: 4.9,
      reviews: 156,
      type: "items",
      image: "🎮",
    },
    {
      id: 2,
      game: "CS2",
      title: "AWP Dragon Lore FN",
      price: 15000,
      seller: "SkinMaster",
      rating: 5.0,
      reviews: 342,
      type: "items",
      image: "🎯",
    },
    {
      id: 3,
      game: "Valorant",
      title: "Буст до Immortal",
      price: 3500,
      seller: "BoostPro",
      rating: 4.8,
      reviews: 89,
      type: "boost",
      image: "⚡",
    },
    {
      id: 4,
      game: "League of Legends",
      title: "50000 RP",
      price: 4200,
      seller: "CurrencyShop",
      rating: 4.7,
      reviews: 234,
      type: "currency",
      image: "💎",
    },
    {
      id: 5,
      game: "Dota 2",
      title: "Аккаунт 7000 MMR",
      price: 8000,
      seller: "AccountStore",
      rating: 4.9,
      reviews: 178,
      type: "accounts",
      image: "👤",
    },
    {
      id: 6,
      game: "WoW",
      title: "Прокачка 1-80 уровень",
      price: 2800,
      seller: "LevelBoost",
      rating: 4.6,
      reviews: 67,
      type: "boost",
      image: "🏆",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const filteredOffers = offers.filter((offer) => {
    const matchesSearch = offer.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGame = selectedGame === "all" || offer.game === games.find(g => g.id === selectedGame)?.name;
    const matchesType = activeTab === "all" || offer.type === activeTab;
    return matchesSearch && matchesGame && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                EasyGame
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Каталог
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Помощь
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Правила
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingCart" size={20} />
              </Button>
              <Button variant="outline" className="hidden sm:flex">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Продать
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-accent bg-clip-text text-transparent">
            Игровая биржа EasyGame
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Безопасная покупка и продажа игровых предметов, валюты и услуг
          </p>
        </section>

        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск предложений..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedGame} onValueChange={setSelectedGame}>
              <SelectTrigger className="w-full md:w-[220px] h-12">
                <SelectValue placeholder="Выберите игру" />
              </SelectTrigger>
              <SelectContent>
                {games.map((game) => (
                  <SelectItem key={game.id} value={game.id}>
                    {game.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start h-auto p-1 bg-white border">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Icon name="Grid3x3" size={16} />
                Все
              </TabsTrigger>
              {offerTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id} className="flex items-center gap-2">
                  <Icon name={type.icon as any} size={16} />
                  {type.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOffers.map((offer) => (
                  <Card key={offer.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-2xl">
                            {offer.image}
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-1">
                              {offer.game}
                            </Badge>
                            <h3 className="font-semibold text-lg leading-tight">
                              {offer.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                        <Icon name="User" size={14} />
                        <span>{offer.seller}</span>
                        <div className="flex items-center gap-1 ml-auto">
                          <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                          <span className="font-medium text-foreground">
                            {offer.rating}
                          </span>
                          <span>({offer.reviews})</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <div className="text-2xl font-bold text-primary">
                            {offer.price} ₽
                          </div>
                        </div>
                        <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                          Купить
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredOffers.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
                  <p className="text-muted-foreground">
                    Попробуйте изменить параметры поиска
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Icon name="Shield" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Безопасные сделки</h3>
            <p className="text-sm text-muted-foreground">
              Гарантия возврата средств при проблемах
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Icon name="MessageCircle" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Встроенный чат</h3>
            <p className="text-sm text-muted-foreground">
              Общайтесь с продавцами напрямую
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Icon name="Award" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Рейтинг продавцов</h3>
            <p className="text-sm text-muted-foreground">
              Проверенные продавцы с отзывами
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Icon name="Gamepad2" size={20} className="text-white" />
              </div>
              <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                EasyGame
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 EasyGame. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
