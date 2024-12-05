import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundSection } from "@/components/background/background-section";

export default function Home() {
  return (
    <div className="bg-neutral-50 flex flex-row justify-center w-full">
      <Card className="bg-neutral-50 overflow-hidden w-[1512px] h-[9572px] border-none">
        <CardContent className="relative w-[1515px] h-[1721px] -left-[3px] p-0">
          <div className="absolute w-[1515px] h-[1721px] top-0 left-0">
            <div className="relative h-[1721px]">
              {/* Background Sections */}
              <BackgroundSection type="secondary" />
              <BackgroundSection type="primary" />

              {/* Dots Background */}
              <div className="flex flex-col h-[1721px] items-start gap-2.5 p-3 top-0 left-[3px] absolute w-[1512px]">
                <AspectRatio ratio={1697 / 1512} className="w-full">
                  <img
                    className="object-cover w-full h-full"
                    alt="Dots background"
                    src="/images/dots-background.svg"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>

          {/* Autolayout Image */}
          <AspectRatio
            ratio={524 / 1500}
            className="absolute w-[1500px] top-0 left-[15px]"
          >
            <img
              className="object-cover w-full h-full"
              alt="Autolayout"
              src="/images/autolayout.svg"
            />
          </AspectRatio>
        </CardContent>
      </Card>
    </div>
  );
}