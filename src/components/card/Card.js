"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Card({ id, title, category, capacity, price }) {
  return (
    <CardWithDrawer
      id={id}
      title={title}
      category={category}
      capacity={capacity}
      price={price}
    />
  );
}

function CardWithDrawer({ id, title, category, capacity, price }) {
  const [guestCount, setGuestCount] = useState(1);
  const [date, setDate] = useState();
  const [time, setTime] = useState("");

  const times = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const increment = () => {
    if (guestCount < capacity) setGuestCount(guestCount + 1);
  };

  const decrement = () => {
    if (guestCount > 1) setGuestCount(guestCount - 1);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <article className="bg-[#171717] p-5 rounded-sm cursor-pointer hover:opacity-90 transition-opacity">
          <header className="flex justify-between items-center mb-5">
            <h3 className="text-white font-normal text-[12px] leading-[120%] opacity-[0.4]">
              {category}
            </h3>
            <span className="text-white font-normal text-[12px] leading-[120%] opacity-[0.4]">
              Свободен
            </span>
          </header>
          <span className="flex items-center justify-center mb-5">
            <svg
              width="160"
              height="102"
              viewBox="0 0 160 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4_515)">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H34V8H0Z" fill="#D8DCE5" />
                <rect x="42" width="34" height="8" fill="#D8DCE5" />
                <rect x="84" width="34" height="8" fill="#D8DCE5" />
                <path
                  d="M126 0H152C156.418 0 160 3.58172 160 8H126V0Z"
                  fill="#D8DCE5"
                />
                <rect
                  width="160"
                  height="70"
                  transform="translate(0 16)"
                  fill="#D8DCE5"
                />
                <path
                  opacity="0.6"
                  d="M15.7422 74V59.3516H15.6719L11.2305 62.4688V60.3242L15.7305 57.0898H17.793V74H15.7422Z"
                  fill="#000005"
                />
                <path
                  d="M0 94H34V102H8C3.58172 102 0 98.4183 0 94Z"
                  fill="#D8DCE5"
                />
                <rect x="42" y="94" width="34" height="8" fill="#D8DCE5" />
                <rect x="84" y="94" width="34" height="8" fill="#D8DCE5" />
                <path
                  d="M126 94H160C160 98.4183 156.418 102 152 102H126V94Z"
                  fill="#D8DCE5"
                />
              </g>
              <defs>
                <clipPath id="clip0_4_515">
                  <rect width="160" height="102" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <footer className="flex justify-between items-center">
            <span className="flex flex-col gap-2">
              <p className="text-white font-normal text-[12px] leading-[120%] opacity-[0.4]">
                Стоимость
              </p>
              <p className="text-white">{price}</p>
            </span>
            <span className="flex flex-col gap-2">
              <p className="text-white font-normal text-[12px] leading-[120%] opacity-[0.4]">
                Вместимость
              </p>
              <p className="text-white flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 21a8 8 0 0 0-16 0" />
                  <circle cx="10" cy="8" r="5" />
                  <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                </svg>
                до {capacity} человек
              </p>
            </span>
          </footer>
        </article>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm overflow-y-auto">
          <DrawerHeader>
            <DrawerTitle>
              {category} #{title}
            </DrawerTitle>
            <DrawerDescription>
              Стоимость: {price}, вместимость до {capacity} человек.
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 py-2 space-y-4">
            {/* Date Picker */}
            <div>
              <label className="block text-sm font-medium mb-2">Дата</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "PPP", { locale: ru })
                    ) : (
                      <span>Выберите дату</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={ru}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            {/* Выбор времени */}
            <div>
              <label className="block text-sm font-medium mb-2">Время</label>
              <Select onValueChange={setTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите время" />
                </SelectTrigger>
                <SelectContent>
                  {times.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Количество гостей */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Количество гостей
              </label>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decrement}
                  disabled={guestCount <= 1}
                >
                  −
                </Button>
                <span className="text-lg font-medium">{guestCount}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={increment}
                  disabled={guestCount >= 8}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button className="w-full">Забронировать</Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                Отмена
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
