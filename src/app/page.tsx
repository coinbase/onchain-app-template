'use client';
import Footer from 'src/components/Footer';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { COMMUNITY_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/CommunitySvg';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import SwapWrapper from 'src/components/SwapWrapper';
import Image from 'next/image';
import meetMochi from '../images/meet-mochi.png';

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <div className="fixed inset-0 -z-10 h-screen w-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFDAB9,transparent)]"></div>
      </div>
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
          <a
            href={COMMUNITY_LINK}
            title="Token"
            target="_blank"
            rel="noreferrer"
          >
            <OnchainkitSvg />
          </a>
          <div className="flex items-center gap-3">
            <SignupButton />
            {!address && <LoginButton />}
          </div>
        </div>
      </section>
      <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-[#FF9D49] px-4 py-12 md:grow">
        <div className="flex w-full items-center justify-center mt-[-50px] mb-[-20px]">
          <Image src={meetMochi} alt="Welcome to Mochi" width={500} height={200} fill={false} style={{objectFit: "contain"}} />
        </div>
        <div className="flex w-full items-center justify-center mt-[-50px] mb-[-20px]">
          <p className="text-2xl font-bold mt-[20px] mb-[20px] text-black">The cutest cat community</p>
        </div>
        <div className="z-10 flex w-full items-center justify-center mt-[10x]">
          <SwapWrapper />
        </div>
      </section>
      <Footer />
    </div>
  );
}