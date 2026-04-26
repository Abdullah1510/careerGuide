const streamKeyMap = {
  engineering: 'engineering',
  medical: 'medical',
  pharmacy: 'pharmacy',
  commerce: 'commerce',
  arts: 'arts',
  design: 'design',
};

export function getLocalizedStreamTitle(t, streamId) {
  const key = streamKeyMap[streamId];
  return t(`streamTitles.${key}`);
}

export function getLocalizedStreamSummary(t, streamId) {
  const key = streamKeyMap[streamId];
  return t(`streamSummaries.${key}`);
}

export function getLocalizedStreamLabel(t, streamId) {
  return {
    title: getLocalizedStreamTitle(t, streamId),
    summary: getLocalizedStreamSummary(t, streamId),
  };
}
