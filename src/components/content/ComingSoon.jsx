import InfoBox from '../ui/InfoBox'

/**
 * Stub placeholder for undocumented sections.
 * Props:
 *   sectionName — optional string shown in the message
 */
export default function ComingSoon({ sectionName }) {
  return (
    <InfoBox label="Coming Soon">
      <p>
        {sectionName
          ? `Detailed documentation for ${sectionName} will be added here.`
          : 'Detailed documentation for this section will be added here.'}
      </p>
    </InfoBox>
  )
}
