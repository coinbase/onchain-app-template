'use client';
import WalletWrapper from './WalletWrapper';

export default function SignupButton() {
  return (
    <WalletWrapper
      className="ockConnectWallet_Container bg-slate-200 text-[#030712] hover:bg-slate-300"
      text="Sign up"
      withWalletAggregator={true}
    />
  );
}
