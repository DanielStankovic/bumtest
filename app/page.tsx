import { Phone, Clock, MapPin, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/sizzling-grilled-meat-on-charcoal-grill-smoke.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flame className="w-12 h-12 text-primary animate-pulse" />
            <h1 className="font-[family-name:var(--font-bebas)] text-7xl md:text-9xl tracking-tight text-balance">
              BUM 016
            </h1>
            <Flame className="w-12 h-12 text-primary animate-pulse" />
          </div>

          <h2 className="font-[family-name:var(--font-bebas)] text-4xl md:text-6xl mb-6 text-balance">
            Roštilj koji udara pravo
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Pljeskavice • Ćevapi • Kobasice • Punjeno meso
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-primary/90 text-primary-foreground text-xl px-8 py-6 font-bold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Pozovi i poruči
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background text-xl px-8 py-6 font-bold bg-transparent"
            >
              Pogledaj meni opaaaa
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center mb-16 text-balance">
          Naš Meni
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Pljeskavice */}
          <Card className="bg-card border-border p-6 hover:border-primary transition-colors">
            <h3 className="font-[family-name:var(--font-bebas)] text-3xl mb-4 text-foreground">Pljeskavice</h3>
            <div className="space-y-3">
              <MenuItem name="Bum pljeskavica 111111111" price="690" highlight />
              <MenuItem name="Leskovačka pljeskavica" price="650" />
              <MenuItem name="Gurmanska pljeskavica" price="750" />
              <MenuItem name="Klasična pljeskavica" price="550" />
            </div>
          </Card>

          {/* Ćevapi */}
          <Card className="bg-card border-border p-6 hover:border-primary transition-colors">
            <h3 className="font-[family-name:var(--font-bebas)] text-3xl mb-4 text-foreground">Ćevapi</h3>
            <div className="space-y-3">
              <MenuItem name="Bum ćevapi (10 kom)" price="650" highlight />
              <MenuItem name="Leskovački ćevapi (10 kom)" price="600" />
              <MenuItem name="Sarajevski ćevapi (10 kom)" price="580" />
              <MenuItem name="Porucija (5 kom)" price="320" />
            </div>
          </Card>

          {/* Kobasice */}
          <Card className="bg-card border-border p-6 hover:border-primary transition-colors">
            <h3 className="font-[family-name:var(--font-bebas)] text-3xl mb-4 text-foreground">Kobasice</h3>
            <div className="space-y-3">
              <MenuItem name="Dimljena kobasica" price="550" />
              <MenuItem name="Sudžuk kobasica" price="580" />
              <MenuItem name="Domaća kobasica" price="520" />
              <MenuItem name="Mešano (2 vrste)" price="600" />
            </div>
          </Card>

          {/* Pileće */}
          <Card className="bg-card border-border p-6 hover:border-primary transition-colors">
            <h3 className="font-[family-name:var(--font-bebas)] text-3xl mb-4 text-foreground">Pileće</h3>
            <div className="space-y-3">
              <MenuItem name="Punjena vešalica" price="850" highlight />
              <MenuItem name="Belo pile" price="680" />
              <MenuItem name="Pileći batak" price="450" />
              <MenuItem name="Piletina u kajmaku" price="780" />
            </div>
          </Card>

          {/* Svinjsko */}
          <Card className="bg-card border-border p-6 hover:border-primary transition-colors">
            <h3 className="font-[family-name:var(--font-bebas)] text-3xl mb-4 text-foreground">Svinjsko & Teletina</h3>
            <div className="space-y-3">
              <MenuItem name="Punjena pljeskavica" price="720" />
              <MenuItem name="Punjeno belo" price="880" highlight />
              <MenuItem name="Vešalica" price="650" />
              <MenuItem name="Ražnjići (5 kom)" price="750" />
            </div>
          </Card>

          {/* Roštilj na kilo */}
          <Card className="bg-card border-border p-6 hover:border-primary transition-colors">
            <h3 className="font-[family-name:var(--font-bebas)] text-3xl mb-4 text-foreground">Roštilj na kilo</h3>
            <div className="space-y-3">
              <MenuItem name="Mešano meso" price="3200/kg" highlight />
              <MenuItem name="Pljeskavice" price="2800/kg" />
              <MenuItem name="Ćevapi" price="2600/kg" />
              <MenuItem name="Vesalica" price="3500/kg" />
            </div>
          </Card>
        </div>
      </section>

      {/* Why Bum 016 Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center mb-16 text-balance">
            Zašto Bum 016?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <ReasonCard
              icon="🔥"
              title="Pravi roštilj na ćumuru"
              description="Tradicionalna priprema za autentičan ukus"
            />
            <ReasonCard icon="🍖" title="Velike porcije" description="Nećete otići gladni, to garantujemo" />
            <ReasonCard icon="⚡" title="Brza usluga" description="Gladni ste? Mi smo brzi." />
            <ReasonCard icon="🌙" title="Otvoreni do kasno" description="Radimo od 08h do 24h" />
          </div>
        </div>
      </section>

      {/* Contact & Order Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl mb-8 text-primary-foreground text-balance">
            Poruči odmah!
          </h2>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <a href="tel:0112197427" className="group">
              <div className="flex items-center gap-3 bg-background/10 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-background/20 transition-colors">
                <Phone className="w-8 h-8 text-primary-foreground" />
                <span className="font-[family-name:var(--font-bebas)] text-4xl text-primary-foreground">
                  011 21 97 427
                </span>
              </div>
            </a>

            <a href="tel:062606400" className="group">
              <div className="flex items-center gap-3 bg-background/10 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-background/20 transition-colors">
                <Phone className="w-8 h-8 text-primary-foreground" />
                <span className="font-[family-name:var(--font-bebas)] text-4xl text-primary-foreground">
                  062 606 400
                </span>
              </div>
            </a>
          </div>

          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm px-6 py-3 rounded-lg">
            <Clock className="w-6 h-6 text-primary-foreground" />
            <span className="text-xl font-bold text-primary-foreground">Radno vreme: 08:00 - 24:00</span>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center mb-12 text-balance">
          Gde smo?
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border p-8 text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-2xl mb-4 text-foreground">4. jula 12, Beograd – Voždovac</p>
            <p className="text-muted-foreground mb-6">Lako nas nađete, lako naručite, lako uživate.</p>
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Otvori u mapama
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-[family-name:var(--font-bebas)] text-4xl mb-2 text-foreground">BUM 016</h3>
              <p className="text-muted-foreground">Roštilj koji udara pravo</p>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Pozovite nas:</p>
              <p className="font-bold text-foreground">011 21 97 427 • 062 606 400</p>
              <p className="text-sm text-muted-foreground mt-2">Radimo: 08:00 - 24:00</p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">4. jula 12</p>
              <p className="text-sm text-muted-foreground">Beograd – Voždovac</p>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">© 2025 Bum 016. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MenuItem({ name, price, highlight = false }: { name: string; price: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className={`${highlight ? "font-bold text-foreground" : "text-card-foreground"}`}>{name}</span>
      <span className={`font-bold ${highlight ? "text-primary text-xl" : "text-primary"}`}>{price} RSD</span>
    </div>
  )
}

function ReasonCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="font-[family-name:var(--font-bebas)] text-2xl mb-2 text-foreground text-balance">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
