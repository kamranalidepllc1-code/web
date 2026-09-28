export function EyebrowLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
      <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>{children}</span>
      <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
        <path d="M1 6h17M13 1l5 5-5 5" stroke="#CE307D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
