import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import InfoBox        from '../../../components/ui/InfoBox'

export default function PartyInstances() {
  return (
    <>
      <PageHero
        title="Party Instances"
        tagline="Team up with allies to tackle the Instance Keeper's hardest challenges — party instances demand coordination and strong gear, but reward accordingly."
      />

      {/* ===== INSTANCE KEEPER ===== */}
      <SectionHeading id="instance-keeper">Instance Keeper</SectionHeading>
      <p>
        All instances — solo and party alike — are accessed through the{' '}
        <strong>Instance Keeper</strong> NPC located in <strong>Giran town</strong>. Open its
        menu to browse the available instance list organized by type and difficulty.
      </p>
      <p>
        With the exception of the <strong>Tiat Instance</strong> (which has a 1-minute
        cooldown), every instance operates on a <strong>24-hour cooldown</strong>. This
        means each instance can be visited once per day to fight its mini boss and collect
        its rewards.
      </p>
      <InfoBox variant="tip" label="When Does the Cooldown Reset?">
        <p>
          The cooldown timer starts the moment you <strong>enter</strong> the instance —
          not when you finish or exit it. If you enter an instance at <strong>13:00</strong>,
          your next available run will be the following day at <strong>13:00</strong>. Plan
          your daily runs accordingly to maximize efficiency.
        </p>
      </InfoBox>

      {/* ===== PARTY INSTANCES ===== */}
      <SectionHeading id="party">Party Instances</SectionHeading>
      <p>
        Party instances are tuned for groups and feature significantly tougher bosses than
        their solo counterparts. Coordinating roles — tank, healer, and DPS — is essential
        to surviving the higher-tier encounters and making the most of the daily cooldown.
      </p>
      <InfoBox variant="info" label="More Detail Coming Soon">
        <p>
          Detailed breakdowns of each party instance — boss mechanics, recommended party
          composition, and drop tables — will be added here as content is gathered.
        </p>
      </InfoBox>
    </>
  )
}
