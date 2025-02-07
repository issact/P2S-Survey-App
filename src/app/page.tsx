import SealCheckIcon from "@/components/icons/sealCheck";
import { BorderTrail } from "@/components/ui/border-trail";
import CardBlurry from "@/components/ui/card-blurry";
import { ShimmerLink } from "@/components/ui/shimmer-link";
import { SpinningText } from "@/components/ui/spinning-text";
import { TextSparkles } from "@/components/ui/text-sparkles";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      {/* Hero Content */}
      <div className="container mx-auto z-50 relative">
        <div className="flex justify-between gap-8 items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-between h-full w-7/12 gap-20 py-24">
            <div className="space-y-10">
          <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-medium capitalize">
          Is your organization truly
              <TextSparkles text="AI-Ready?" colors={{ first: "#E2DF16", second: "#88C340" }} className="ml-2 inline-block"/>
              </h1>
            <p className="text-xl text-[#B4C4D1]">We invite you to take our brief AI Strategy Efficiancy Survey.</p>
          </div>
            <div className="relative inline-block">
            <ShimmerLink className="shadow-2xl bg-gradient1" href="/survey-form" borderRadius="8px">
      <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg uppercase text-lg px-6">
      Start the survey
      </span>
    </ShimmerLink>
            <BorderTrail 
            size={100}
            className="bg-linear-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
            />
            </div>
            </div>
            
            <div className="space-y-2 w-[52%]">
              <h4 className="font-semibold">Don’t be left behind by the rapid pace of change. </h4>
              <p className="text-[#B4C4D1] text-sm">Take the survey now and discover where you stand on the AI maturity curve.</p>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex justify-end relative items-center w-5/12">

            <div className="absolute -top-[16%] -left-[10%] pr-[18%] bottom-0 m-auto flex items-center">
            <CardBlurry>
                <h3 className="font-bold mb-4 text-xl">This assessment will:</h3>
                <ul className="flex flex-col gap-3 text-[#B4C4D1] pr-[40%] text-sm">
                  <li className="flex items-center gap-4"><Image src="/check-fat.svg" alt="check icon" width={24} height={24}/> Evaluate your current level of AI readiness</li>
                  <li className="flex items-center gap-4"><Image src="/check-fat.svg" alt="check icon" width={24} height={24}/> Compare your AI strategy against industry benchmarks</li>
                  <li className="flex items-center gap-4"><Image src="/check-fat.svg" alt="check icon" width={24} height={24}/>Evaluate your current level of AI readiness</li>
                </ul>
              </CardBlurry>

            </div>
            <Image 
              src="/ai-robot.svg" 
              alt="Robot"
              className="max-w-lg w-3/4 rounded-lg relative -right-[60px]"
              width={100}
              height={100}
            />
            <div className="absolute top-7 bottom-0 right-0 m-auto -z-[1]">
            <div className="w-[269px] h-[313px] relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-violet-600 to-accent rounded-full blur-3xl opacity-70 animate-blob" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-violet-600 rounded-full blur-3xl opacity-70 animate-blob [animation-delay:1s]" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-violet-600 rounded-full blur-3xl opacity-70 animate-blob [animation-delay:1s]" />
          </div>
            </div>
            <div className="backdrop-blur-8.5 absolute bottom-[90px] z-[999] bg-transparent rounded-full right-[165px]">
            <div className="flex justify-center items-center bg-gradient2 w-[150px] h-[150px] overflow-hidden rounded-full">
            <BorderTrail 
            size={80}
            className="shadow-[0px_0px_60px_30px_rgb(255_255_255_/_50%)_,_0_0_100px_60px_rgb(0_0_0_/_50%)_,_0_0_140px_90px_rgb(0_0_0_/_50%)]"
            />
            <SealCheckIcon className="absolute top-0 bottom-0 left-0 right-0 m-auto"/>
            <SpinningText radius={6.5} fontSize={0.99} className="uppercase font-thin tracking-wide font-ubuntu">AI Strategy Efficiancy Survey</SpinningText>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
