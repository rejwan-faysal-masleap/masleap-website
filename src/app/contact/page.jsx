import { SignupFormDemo } from "@/components/contact/form";

const page = () => {
  return (
    <>
    <div className="min-h-[90vh] mb-0 md:mb-24 pt-20 pb-28 p-6 max-w-[1400px] mx-auto">
                <div className="flex-center flex-col space-y-8 pb-10 md:pb-18 text-center">
                  <p className="head-title text-3xl font-[550px]">Contact Us</p>
                </div>
                <div>
                  <SignupFormDemo />
                </div>
              </div>
    </>
  )
}

export default page;