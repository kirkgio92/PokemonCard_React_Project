import { useRouter } from "next/router";
import DetailedCard from "@/components/detailedCard";

const SelectedCard = () => {
  const router = useRouter();

  return (
    <>
      <DetailedCard cardId={router.query.selectedCard} />
    </>
  );
};

export default SelectedCard;
