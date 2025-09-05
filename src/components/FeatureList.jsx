const features = [
  { icon: '🔍', label: 'SEARCH', delay: '0s' },
  { icon: '💬', label: 'CHAT', delay: '0.1s' },
  { icon: '📝', label: 'APPLY', delay: '0.2s' },
  { icon: '👀', label: 'TRACK', delay: '0.3s' },
];

const FeatureList = () => {
  return (
    <div className="space-y-6 lg:space-y-8">
      {features.map((feature, index) => {
        return (
          <div
            key={feature.label}
            className="feature-item flex items-center gap-3 text-lg lg:text-xl"
            style={{ animationDelay: feature.delay }}
          >
            <span className="w-6 h-6 lg:w-8 lg:h-8 text-gray-700 text-2xl lg:text-3xl" role="img" aria-label={feature.label}>
              {feature.icon}
            </span>
            <span className="font-semibold text-gray-700 tracking-wider">
              {feature.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureList;