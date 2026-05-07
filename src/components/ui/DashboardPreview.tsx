import { colors, shadows } from '@/theme';

/**
 * DashboardPreview - Floating glassmorphism dashboard preview card
 */
export function DashboardPreview() {
  return (
    <div
      className="rounded-2xl overflow-hidden backdrop-blur-sm"
      style={{
        background: 'rgba(255, 255, 255, 0.72)',
        border: `1px solid ${colors.borderLight}`,
        boxShadow: shadows.premiumLg,
        maxWidth: '600px',
      }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{
          borderBottom: `1px solid ${colors.borderLight}`,
          background: `linear-gradient(135deg, ${colors.backgroundSoft}80 0%, ${colors.accentSky}20 100%)`,
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: colors.primary }}
          />
          <div
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: colors.textPrimary,
            }}
          >
            Dashboard
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: '#0EA5E9' }} />
          <div
            style={{
              fontSize: '12px',
              color: colors.textMuted,
            }}
          >
            Live
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Metric blocks */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Revenue', value: '+24%' },
            { label: 'Growth', value: '$48K' },
            { label: 'Users', value: '12.5K' },
            { label: 'Conversion', value: '3.2%' },
          ].map((metric, i) => (
            <div
              key={i}
              className="p-4 rounded-xl"
              style={{
                background: i % 2 === 0 ? colors.accentSky : colors.backgroundSoft,
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  color: colors.textMuted,
                  marginBottom: '6px',
                }}
              >
                {metric.label}
              </div>
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: colors.primary,
                }}
              >
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Chart placeholder */}
        <div
          className="h-24 rounded-xl flex items-end justify-center gap-1 p-4"
          style={{
            background: `linear-gradient(135deg, ${colors.accentSky}40 0%, ${colors.backgroundSoft}80 100%)`,
          }}
        >
          {[40, 70, 50, 85, 60, 90, 75].map((height, i) => (
            <div
              key={i}
              className="rounded-t flex-1"
              style={{
                height: `${height}%`,
                background: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.accentBlue} 100%)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
