import React, { ReactNode } from 'react';
import { Button } from './button';

type BreadcrumbProps = {
  screenTitle: string;
  onReturn: () => void;
};

const Breadcrumb = ({ screenTitle, onReturn }: BreadcrumbProps) => {
  return (
    <div className="flex justify-center items-center w-full">
      <button
        onClick={() => onReturn()}
        type="button"
        className="text-[1.75rem] font-roboto-Condensed tracking-[10%] text-white/60 hover:text-white whitespace-nowrap"
      >
        INÍCIO
      </button>

      <div className="ml-[1rem] w-[0.063rem] h-[1rem] bg-white/60"></div>

      <p className="ml-[1rem] text-white text-[28px] tracking-[10%] font-normal whitespace-nowrap">
        {screenTitle}
      </p>

      <div className="ml-[1.25rem] h-[0.063rem] w-full bg-white/60"></div>
    </div>
  );
};

type ReturnScreenProps = {
  onReturn: () => void;
};

const ReturnScreen = ({ onReturn }: ReturnScreenProps) => {
  return (
    <div className="w-full">
      <div className="mb-[1rem] h-[0.063rem] w-full bg-white/60"></div>

      <Button
        iconLeft={
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14349 14 3.36301 13.2625 2.05025 11.9497C0.737497 10.637 0 8.85652 0 7C0 5.14349 0.737497 3.36301 2.05025 2.05025C3.36301 0.737497 5.14349 0 7 0C8.85652 0 10.637 0.737497 11.9497 2.05025C13.2625 3.36301 14 5.14349 14 7ZM8.85117 9.97773C9.05898 9.86289 9.1875 9.64141 9.1875 9.40625V4.59375C9.1875 4.35586 9.05898 4.13711 8.85117 4.02227C8.64336 3.90742 8.3918 3.91016 8.18672 4.03594L4.24922 6.44219C4.05508 6.5625 3.93477 6.77305 3.93477 7.00273C3.93477 7.23242 4.05508 7.44297 4.24922 7.56328L8.18672 9.96953C8.38906 10.0926 8.64336 10.098 8.85117 9.9832V9.97773Z"
              fill="white"
            />
          </svg>
        }
        content="VOLTAR"
        onClick={onReturn}
      />
    </div>
  );
};

type LayoutScreenProps = {
  children: ReactNode;
  bg: string;
  screenTitle: string;
  onReturn: () => void;
};

export const LayoutScreen = ({
  children,
  bg,
  screenTitle,
  onReturn,
}: LayoutScreenProps) => {
  return (
    <div className="relative min-h-[100vh] min-w-[100vw] max-h-[100vh] max-w-[100vw] h-full w-full">
      <div className="absolute h-screen w-screen top-0 left-0 z-10">
        <img
          src={bg}
          className="min-w-[100vw] min-h-[100vh] max-w-[100vw] max-h-[100vh] object-cover w-full h-full"
          alt=""
        />
      </div>
      <div className="absolute min-h-[100vh] min-w-[100vw] max-h-[100vh] max-w-[100vw] top-0 left-0 z-20 bg-black/80 animate-fadeInDrop transition-all duration-200 flex flex-col pt-[70px] px-[70px] pb-[50px]">
        <Breadcrumb screenTitle={screenTitle} onReturn={onReturn} />

        <div className="flex-1 flex gap-6 animate-fadeIn pt-[4.4rem] pb-[1rem] w-full scrollbar overflow-y-auto">
          {children}
        </div>

        <ReturnScreen onReturn={onReturn} />
      </div>
    </div>
  );
};
