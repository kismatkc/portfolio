import { motion, Variants } from "framer-motion";
import { Edit2, LucideBadgeDollarSign, Wrench } from "lucide-react";

import { useState } from "react";
import Switch from "../switch";

const websiteCost =
  "Every Website is unique, so the cost reflects the vision you have in mind.For a showcase site, you can expect a range of $1,000 to $1,500. For more complex business sites, the cost is determined by how intricate the project is and the time required to complete it. Please drop me an email so we can discuss your needs and I can provide a tailored quote.";
const websiteModifications =
  "You'll have full control over your site using our essential CMS. I'll include complimentary training to help you get started, so you can easily update and modify your content whenever needed.";
const websiteMaintaincance =
  "Enjoy the first month of support absolutely free. After that, you can opt into a monthly subscription for ongoing updates and assistance, ensuring your website always runs smoothly.";

const iosCost =
  "Each app cost is tailored to its distinct vision. For a basic native app built with Swift and SwiftUI—ideal for showcasing your brand—expect a starting range of $2,000 to $3,000. For more complex apps that leverage Core Data, ARKit, or secure API integrations, the price adjusts based on project intricacy and development time. Please drop me an email so we can discuss your needs and provide a tailored quote.";
const iosModifications =
  "You'll have full control over updates using our streamlined development process. I provide complimentary guidance on adjusting features so you can easily modify your app's functionality to stay current with evolving ios/android trends.";
const iosMaintaincance =
  "Enjoy the first month of support absolutely free. After that, you can opt into a monthly subscription for ongoing updates and assistance, ensuring your app always runs smoothly.";
const costMaintainanceVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const CostMaintainance = ({}) => {
  const [showIos, setShowIos] = useState(false);

  return (
    <div className="p-3 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={costMaintainanceVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Switch
          optionTwoState={showIos}
          setOptionTwoState={setShowIos}
          option1="website"
          option2="smartphone"
        />
        <div className="flex flex-col items-center justify-center gap-y-1 py-2 mt-8">
          <LucideBadgeDollarSign className="text-brand-green" />
          <p>Cost</p>
        </div>
        <p className="py-1">{showIos ? iosCost : websiteCost}</p>
      </motion.div>
      <motion.div
        className="p-3 "
        initial="hidden"
        whileInView="visible"
        variants={costMaintainanceVariants}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="flex flex-col items-center justify-center gap-y-1 py-2">
          <Edit2 className="text-brand-green" />
          <p>Modifications</p>
        </div>
        <p className="py-1">
          {showIos ? iosModifications : websiteModifications}
        </p>
      </motion.div>
      <motion.div
        className="p-3 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={costMaintainanceVariants}
      >
        <div className="flex flex-col items-center justify-center gap-y-1 py-2">
          <Wrench className="text-brand-green" />
          <p>Maintaincance</p>
        </div>
        <p className="py-1">
          {showIos ? iosMaintaincance : websiteMaintaincance}
        </p>
      </motion.div>
    </div>
  );
};

export default CostMaintainance;
