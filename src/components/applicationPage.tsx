import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ApplicationsPage() {
    return (
        <section>
            <Card className="bg-[#f5f5f5] py-4 px-8 max-w-[40rem]  rounded-2xl">
                <CardContent className="py-4 px-8 space-y-6">
                    <h2 className="text-2xl font-medium">
                        Refer a friend and get started
                    </h2>
                    <p className="text-lg text-[#2b2b2b] ">
                        The Kinde Referral Program lets you earn rewards for
                        customers you refer to Kinde
                    </p>
                    <div className="flex justify-end gap-4 pt-4">
                        <Button variant="link" className="text-base ">
                            Learn more
                        </Button>
                        <Button className="text-base py-6 font-semibold">
                            Get your referral code
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

export function ApplicationCard() {
    return (
        <>
            <section className="space-y-4 max-w-[40rem] border-y-[1px] border-[#d5d5d5] py-12 ">
                <h2 className="text-2xl font-medium">Your applications</h2>
                <p className="text-lg text-muted-foreground">
                    You need at least one application to start building on Kinde
                </p>
                <Button
                    variant="secondary"
                    className="bg-gray-50 text-base py-6 hover:bg-gray-100"
                >
                    Add application
                </Button>
            </section>
        </>
    );
}
