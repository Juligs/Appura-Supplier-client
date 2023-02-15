import { BusinessData } from "../../../interfaces/business.intefaces";
import BusinessCard from "../../BusinessCard/businessCard/BusinessCard";

const BusinessList: React.FC<{ businesess: BusinessData[] }> = ({
  businesess,
}) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-4">
      <>
        {businesess.map((elm) => (
          <BusinessCard />
        ))}
      </>
    </div>
  );
};
export default BusinessList;
