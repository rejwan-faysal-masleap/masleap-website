"use client";
import { cn } from "../../../lib/utils";
import { Input } from "../ui/form";
import { Label } from "../ui/label";

export function SignupFormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div
      className="shadow-input mx-auto w-full max-w-5xl rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="medium-title text-xl font-bold text-neutral-800 dark:text-neutral-200">
        How can we help you?
      </h2>
      <p className="mt-2 max-w-sm small-paragaraph text-neutral-600 dark:text-neutral-300">
        Fill out the form and we will be in touch shortly.
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div
          className="mb-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="mrmasleap008@google.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-6">
          <Label htmlFor="number">Phone Number</Label>
          <Input id="number" placeholder="+8801X-XXXX-XXXX" type="number" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-9">
            <Label htmlFor="message">Message</Label>
            <Input id="message" placeholder="Type your message here.." type="text" />
          </LabelInputContainer>
       

        <button
          className="cursor-pointer group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit" >
          Submit &rarr;
          <BottomGradient />
        </button>
       
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span
        className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span
        className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
