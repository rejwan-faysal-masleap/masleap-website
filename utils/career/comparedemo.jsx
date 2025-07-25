import { Compare } from "@/components/ui/career/compare";

export function CompareDemo() {
  return (
    <div
      className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[350px] mx-auto md:h-[500px] md:w-[600px]"
        slideMode="hover" />
    </div>
  );
}
