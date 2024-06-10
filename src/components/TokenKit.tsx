import { useCallback, useState } from 'react';
import { TokenChip, TokenRow, TokenSearch, getTokens } from '@coinbase/onchainkit/token';
import type { Token } from '@coinbase/onchainkit/token';

export default function TokenKit() {
  const [filteredTokens, setFilteredTokens] = useState<Token[]>([]);

  const handleChange = useCallback((value: string) => {
    async function getData(value: string) {
      const tokens: any = await getTokens({ search: value });
      setFilteredTokens(tokens);
    }
    getData(value);
  }, []);

  const handleSelect = useCallback((token: Token) => {
    console.log(token);
  }, []);

  return (
    <section className="flex flex-col w-96 my-6 pb-4 border-b border-sky-800">
      <aside className="flex mb-6">
        <h2 className="text-xl">Token Kit</h2>
      </aside>
      <main className="flex h-10 items-center space-x-4">
        <div className="flex flex-col gap-4 rounded-3xl bg-white p-4">
          <TokenSearch onChange={handleChange} delayMs={200} />
          {filteredTokens.length > 0 && (
            <div className="flex gap-2">
              {filteredTokens.map((token) => (
                <TokenChip key={token.name} token={token} onClick={handleSelect} />
              ))}
            </div>
          )}
          {filteredTokens.length > 0 ? (
            <div>
              <div className="text-body text-black">Tokens</div>
              <div>
                {filteredTokens.map((token) => (
                  <TokenRow key={token.name} token={token} onClick={handleSelect} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-body text-black">No tokens found</div>
          )}
        </div>
      </main>
    </section>
  );
}
