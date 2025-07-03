import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Search, User, Menu, Home, Building2, Palette } from "lucide-react";

// Import das imagens
import heroImage from "@/assets/hero-furniture.jpg";
import bannerKitchen from "@/assets/banner-kitchen.jpg";
import bannerCommercial from "@/assets/banner-commercial.jpg";
import banner3DPlanner from "@/assets/banner-3d-planner.jpg";
import categoryKitchen from "@/assets/category-kitchen.jpg";
import categoryBedroom from "@/assets/category-bedroom.jpg";
import categoryLiving from "@/assets/category-living.jpg";
import categoryOffice from "@/assets/category-office.jpg";

const Index = () => {
  const banners = [
    {
      id: 1,
      title: "Novas Cozinhas",
      subtitle: "Designs modernos e funcionais",
      image: bannerKitchen,
      action: "kitchen"
    },
    {
      id: 2,
      title: "Mobiliário Comercial",
      subtitle: "Soluções profissionais para seu negócio",
      image: bannerCommercial,
      action: "commercial"
    },
    {
      id: 3,
      title: "Comece Seu Projeto",
      subtitle: "Planeje em 3D gratuitamente",
      image: banner3DPlanner,
      action: "3d-planner"
    }
  ];

  const categories = [
    {
      id: 1,
      name: "Cozinhas",
      image: categoryKitchen,
      description: "Projetos sob medida para sua cozinha"
    },
    {
      id: 2,
      name: "Dormitórios",
      image: categoryBedroom,
      description: "Ambientes aconchegantes e funcionais"
    },
    {
      id: 3,
      name: "Salas",
      image: categoryLiving,
      description: "Móveis elegantes para sua sala"
    },
    {
      id: 4,
      name: "Comercial",
      image: categoryOffice,
      description: "Soluções profissionais"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo e Título */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">MóvelCraft</h1>
                <p className="text-sm text-muted-foreground">Sua Casa, Seu Estilo</p>
              </div>
            </div>

            {/* Botões do Header */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-accent">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Móveis elegantes" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transforme Sua Casa com 
              <span className="text-primary block">Móveis Únicos</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Projetos personalizados, acabamentos premium e design exclusivo. 
              Criamos ambientes que refletem sua personalidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                <Palette className="w-5 h-5 mr-2" />
                Planeje Seu Ambiente 3D
              </Button>
              <Button variant="elegant" size="lg" className="text-lg">
                Ver Catálogo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de Banners */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Descubra Nossas Soluções
          </h3>
          
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {banners.map((banner) => (
                <CarouselItem key={banner.id}>
                  <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-500 overflow-hidden cursor-pointer group">
                    <CardContent className="p-0 relative">
                      <div className="relative h-80 md:h-96 overflow-hidden">
                        <img 
                          src={banner.image} 
                          alt={banner.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                          <h4 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                            {banner.title}
                          </h4>
                          <p className="text-primary-foreground/90 text-lg mb-4">
                            {banner.subtitle}
                          </p>
                          <Button variant="wood" className="bg-background/90 text-foreground hover:bg-background">
                            Explorar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Seção Categorias */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Nossas Categorias
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre a solução perfeita para cada ambiente da sua casa ou empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card 
                key={category.id} 
                className="group cursor-pointer border-border/50 hover:border-accent transition-all duration-300 hover:shadow-card"
              >
                <CardContent className="p-6">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Principal */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Pronto para Criar Seu Ambiente Ideal?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Use nossa ferramenta 3D gratuita e visualize seu projeto antes mesmo de produzir. 
              Planeje, personalize e materialize seus sonhos.
            </p>
            <Button variant="wood" size="lg" className="text-lg bg-background text-foreground hover:bg-background/90">
              <Building2 className="w-5 h-5 mr-2" />
              Iniciar Projeto 3D Gratuito
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">MóvelCraft</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Especialistas em móveis sob medida com mais de 10 anos de experiência. 
                Transformamos ambientes com qualidade e design exclusivo.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📱 (11) 99999-9999</p>
                <p>📧 contato@movelcraft.com.br</p>
                <p>📍 São Paulo, SP</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-accent">
                  <span className="text-sm">FB</span>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-accent">
                  <span className="text-sm">IG</span>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-accent">
                  <span className="text-sm">WA</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border/30 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 MóvelCraft. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;