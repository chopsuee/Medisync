import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
  WalletDropdownLink,
} from "@coinbase/onchainkit/wallet";
import { Address, Avatar, Name, Identity } from "@coinbase/onchainkit/identity";
import { color } from "@coinbase/onchainkit/theme";

export function WalletComponent() {
  return (
    // omitted for brevity

    <Wallet>
      <ConnectWallet
        className="rounded-full bg-[#13505b] text-[#FCFFFD] text-sm px-7 h-9 hover:bg-[#0f3d46] transition duration-300 font-medium"
        disconnectedLabel="Connect Wallet"
      >
        <Avatar className="h-6 w-6" />
        <Name className="text-white" />
      </ConnectWallet>
      <WalletDropdown>
        <Identity
          className="px-4 pt-3 pb-2 hover:bg-blue-200"
          hasCopyAddressOnClick
        >
          <Avatar />
          <Name />
          <Address />
        </Identity>
        <WalletDropdownLink
          className="hover:bg-blue-200"
          icon="wallet"
          href="https://keys.coinbase.com"
        >
          Wallet
        </WalletDropdownLink>
        <WalletDropdownDisconnect className="hover:bg-blue-200" />
      </WalletDropdown>
    </Wallet>
  );
}
