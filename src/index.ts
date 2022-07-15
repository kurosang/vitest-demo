/* eslint-disable antfu/if-newline */
export function toRoman(n: number) {
  if (n <= 3) return 'i'.repeat(n)

  if (n === 4) return 'iv'

  if (n === 5) return 'v'
}

// export const buildTime = '__BUILD_TIME__'

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('exported', () => {
    const numbers = Array.from({ length: 10 }, (_, idx) => idx + 1)
    expect(
      Object.fromEntries(
        numbers.map((i) => [String(i).padStart(2, '0'), toRoman(i)])
      )
    ).toMatchInlineSnapshot(`
      {
        "01": "i",
        "02": "ii",
        "03": "iii",
        "04": "iv",
        "05": "v",
        "06": undefined,
        "07": undefined,
        "08": undefined,
        "09": undefined,
        "10": undefined,
      }
    `)
  })
}
