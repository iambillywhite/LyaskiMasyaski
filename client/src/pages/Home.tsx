import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShieldCheck, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
      </div>

      {/* Navigation (Minimal) */}
      <header className="relative z-10 container py-6 flex justify-between items-center">
        <div className="font-serif text-2xl font-bold text-primary tracking-tight">LyaskiMasyaski</div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Преимущества</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Тарифы</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Контакты</a>
        </nav>
        <Button variant="outline" className="rounded-full px-6">Войти</Button>
      </header>

      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium backdrop-blur-sm border border-secondary">
              <Star className="w-4 h-4 fill-current" />
              <span>Лучшее предложение этого месяца</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-foreground">
              Простота <br/>
              <span className="text-primary italic">в каждом клике</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
              Мы создали идеальное решение для тех, кто ценит время и качество. Начните пользоваться нашим сервисом уже сегодня.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button size="lg" className="rounded-full px-8 text-lg h-14 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1">
                Начать сейчас
              </Button>
              <Button size="lg" variant="ghost" className="rounded-full px-8 text-lg h-14">
                Узнать больше
              </Button>
            </div>
            
            <div className="pt-8 flex items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-bold overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <p>Более 1,000 довольных клиентов</p>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md md:max-w-full relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
              <img 
                src="/images/product-illustration.jpg" 
                alt="Secure Payment Illustration" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Pricing/Payment Section */}
        <section id="pricing" className="container py-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-serif">Простой и прозрачный тариф</h2>
            <p className="text-muted-foreground text-lg">
              Никаких скрытых платежей. Вы получаете полный доступ ко всем функциям сразу после оплаты.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="border-none shadow-2xl shadow-primary/5 bg-white/60 backdrop-blur-xl dark:bg-white/5 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
              <CardHeader className="text-center pt-10 pb-2">
                <CardTitle className="text-2xl font-medium text-muted-foreground">Полный доступ</CardTitle>
                <div className="flex justify-center items-baseline gap-1 mt-4">
                  <span className="text-5xl font-serif font-bold text-foreground">990₽</span>
                  <span className="text-muted-foreground">/ навсегда</span>
                </div>
              </CardHeader>
              <CardContent className="py-8 px-8">
                <ul className="space-y-4">
                  {[
                    "Доступ ко всем материалам",
                    "Персональная поддержка 24/7",
                    "Еженедельные обновления",
                    "Доступ в закрытое сообщество",
                    "Гарантия возврата средств"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pb-10 px-8">
                <Button className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-[1.02]">
                  Оплатить доступ
                </Button>
              </CardFooter>
              
              <div className="bg-secondary/30 py-3 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
                <ShieldCheck className="w-3 h-3" />
                Безопасная оплата через SSL-шифрование
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="container py-12 border-t border-border/50 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-xl font-bold text-primary/80">LyaskiMasyaski</div>
          <div className="text-sm text-muted-foreground">
            © 2024 LyaskiMasyaski. Все права защищены.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-foreground transition-colors">Оферта</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

