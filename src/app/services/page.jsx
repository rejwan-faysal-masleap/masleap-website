import { TabsDemo } from "../../../utils/services/tabs";

const page = () => {
  return (
    <>
    <div className="min-h-[90vh] mb-0 md:mb-10 pt-20 pb-28 p-6 max-w-[1600px] mx-auto">
                <div className="flex-center flex-col pb-10 md:pb-18 text-center">
                  <p className="head-title text-3xl font-[550px]">Services</p>
                </div>
        
                <div className="">
              <TabsDemo />
                </div>
              </div>
    </>
  )
}

export default page;