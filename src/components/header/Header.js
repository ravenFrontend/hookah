export default function Header() {
  return (
    <>
      <header className="flex flex-col align-center gap-10 mb-8">
        <button className="cursor-pointer">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.70358 11L2.56006 3.85648L3.85642 2.56012L10.9999 9.70357L18.1434 2.56012L19.4398 3.85648L12.2963 11L19.4398 18.1434L18.1434 19.4398L10.9999 12.2964L3.85642 19.4398L2.56006 18.1434L9.70358 11Z"
              fill="#ECF0F9"
            />
          </svg>
        </button>
        <h1 className="text-white text-[42px] leading-[110%] font-medium">
          Бронирование столов
        </h1>
      </header>
    </>
  );
}
