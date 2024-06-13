import { useCallback, useState } from 'react';
import {
  TokenChip,
  TokenRow,
  TokenSearch,
  getTokens,
} from '@coinbase/onchainkit/token';
import type { Token } from '@coinbase/onchainkit/token';

export default function TokenComponents() {
  const [filteredTokens, setFilteredTokens] = useState<Token[]>([]);

  const handleChange = useCallback((value: string) => {
    async function getData(value: string) {
      const tokens: any = await getTokens({ limit: '1', search: value });
      console.log('tokens:', tokens);
      setFilteredTokens(tokens);
    }
    getData(value);
  }, []);

  const handleSelect = useCallback((token: Token) => {
    console.log(token);
  }, []);

  return (
    <main className="flex items-center space-x-4">
      <div className="flex flex-col gap-4 rounded-3xl bg-white p-4">
        <TokenSearch onChange={handleChange} delayMs={400} />
        {filteredTokens.length > 0 && (
          <div className="flex gap-2">
            {filteredTokens.map((token) => (
              <TokenChip
                key={token.symbol + '-' + token.name}
                token={token}
                onClick={handleSelect}
              />
            ))}
          </div>
        )}
        {filteredTokens.length > 0 ? (
          <div>
            <div className="text-body text-black">Tokens</div>
            <div>
              {filteredTokens.map((token) => (
                <TokenRow
                  key={token.symbol + '-' + token.name}
                  token={token}
                  onClick={handleSelect}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-body text-black">No tokens found</div>
        )}
      </div>
    </main>
  );
}
