import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ApplicationsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Your applications</h1>
        <p className="text-lg text-muted-foreground">
          You need at least one application to start building on Kinde
        </p>
        <Button
          variant="secondary"
          className="bg-gray-50 hover:bg-gray-100"
        >
          Add application
        </Button>
      </section>

      <Card className="bg-gray-50">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-2xl font-semibold">Refer a friend and get started</h2>
          <p className="text-lg text-muted-foreground">
            The Kinde Referral Program lets you earn rewards for customers you refer to Kinde
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Button variant="link" className="text-base">
              Learn more
            </Button>
            <Button className="text-base">
              Get your referral code
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
