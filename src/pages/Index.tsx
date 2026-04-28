"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Users, Zap } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Bem-vindo ao seu <span className="text-yellow-300">Dashboard</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Visualize suas métricas, analise dados e tome decisões estratégicas com nossa plataforma moderna e intuitiva
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Acessar Dashboard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-yellow-300 mb-4" />
              <CardTitle>Análise Completa</CardTitle>
              <CardDescription>
                Gráficos interativos e relatórios detalhados para entender seu negócio
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <Users className="h-12 w-12 text-green-300 mb-4" />
              <CardTitle>Gestão de Clientes</CardTitle>
              <CardDescription>
                Acompanhe seu público-alvo e melhore o relacionamento com clientes
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <Zap className="h-12 w-12 text-purple-300 mb-4" />
              <CardTitle>Performance em Tempo Real</CardTitle>
              <CardDescription>
                Monitoramento instantâneo de métricas e alertas inteligentes
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 px-12 py-4 text-xl font-bold"
            onClick={() => window.location.href = "/dashboard"}
          >
            Começar Agora
          </Button>
        </div>

        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;