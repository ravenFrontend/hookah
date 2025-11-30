import Card from "@/components/card/Card";
import Header from "@/components/header/Header";
import { cardList } from "@/data/card";

export default function Home() {
  return (
    <div className="p-[15px]">
      <Header />
      <ul className="flex flex-col gap-3">
        {cardList.map((card) => (
          <li key={card.id}>
            <Card {...card} />
          </li>
        ))}
      </ul>
    </div>
  );
}
