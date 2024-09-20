<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/coinbase/onchainkit/main/site/docs/public/logo/v0-27.png">
    <img alt="OnchainKit logo vibes" src="https://raw.githubusercontent.com/coinbase/onchainkit/main/site/docs/public/logo/v0-27.png" width="auto">
  </picture>
</p>

# Onchain App Template

An Onchain App Template build with [OnchainKit](https://onchainkit.xyz), and ready to be deployed to Vercel.

Play with it live on https://onchain-app-template.vercel.app

Have fun! ⛵️

<br />

## Setup

To ensure all components work seamlessly, set the following environment variables in your `.env` file using `.env.local.example` as a reference.

You can find the API key on the [Coinbase Developer Portal's OnchainKit page](https://portal.cdp.coinbase.com/products/onchainkit). If you don't have an account, you will need to create one. 

You can find your Wallet Connector project ID at [Wallet Connect](https://cloud.walletconnect.com).

```sh
# See https://portal.cdp.coinbase.com/products/onchainkit
NEXT_PUBLIC_CDP_API_KEY="GET_FROM_COINBASE_DEVELOPER_PLATFORM"

# See https://cloud.walletconnect.com
NEXT_PUBLIC_WC_PROJECT_ID="GET_FROM_WALLET_CONNECT"
```
<br />

## Locally run

```sh
# Install bun in case you don't have it
curl -fsSL https://bun.sh/install | bash

# Install packages
bun i

# Run Next app
bun run dev
```
<br />

## Resources

- [OnchainKit documentation](https://onchainkit.xyz)
- We use the [OnchainKit Early Adopter](https://github.com/neodaoist/onchainkit-early-adopter) contract written by neodaoist [[X]](https://x.com/neodaoist)

<br />

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Need more help?

If you have any questions or need help, feel free to reach out to us on [Discord](https://discord.gg/8gW3h6w5) 
or open a [Github issue](https://github.com/coinbase/onchainkit/issues) or DMs us 
on X at [@onchainkit](https://x.com/onchainkit), [@zizzamia](https://x.com/zizzamia), [@fkpxls](https://x.com/fkpxls).
