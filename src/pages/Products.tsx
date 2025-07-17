import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  stock: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*");

      if (error) {
        console.error("Erro ao buscar produtos:", error);
        return;
      }

      setProducts(data || []);
      setLoading(false);
    }

    fetchProducts();
  }, []);

  if (loading) return <div className="flex justify-center p-8">Carregando produtos...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nossos Produtos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={product.images[0]}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">
                  R$ {product.price.toFixed(2)}
                </span>
                <Button>Ver Detalhes</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}