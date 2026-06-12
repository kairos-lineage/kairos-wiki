import PageHero       from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import WikiFigure     from '../components/ui/WikiFigure'
import InfoBox        from '../components/ui/InfoBox'

export default function Events() {
  return (
    <>
      <PageHero
        title="Events"
        tagline="Scheduled events, PvP tournaments, and seasonal content."
      />

      <SectionHeading id="super-cape-event">Super Cape Event</SectionHeading>

      <WikiFigure
        src="images/cape-event.png"
        alt="Super Cape Event announcement showing 30-day duration and 30% experience reduction"
        caption="Super Cape Event — 30 days to level up your Master Cape."
        size="md"
      />

      <p>
        During this event you have the opportunity to level up your <strong>Master Cape</strong>.
        The cape has multiple levels, and each level improves your character's stats and rates.
        To speed up the process the experience required per level has been reduced by{' '}
        <strong>30%</strong> for the duration of the event.
      </p>

      <InfoBox variant="tip" label="Event Details">
        <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
          <li><strong>Duration:</strong> 30 days</li>
          <li><strong>Experience reduction:</strong> −30% per level</li>
          <li><strong>Goal:</strong> level up your Master Cape to become stronger than ever</li>
        </ul>
      </InfoBox>

      <SectionHeading id="super-cape-where">Where to Get the Cape</SectionHeading>

      <p>
        The <strong>Super Cloak</strong> is available in the <strong>GM Shop</strong>. Open the
        Community Board with <kbd>Alt+B</kbd>, navigate to <strong>GM Shop</strong>, and look under
        the <strong>Cloak</strong> category. Each cloak tier (tv1 – tv20) costs{' '}
        <strong>1 Adena</strong>.
      </p>

      <WikiFigure
        src="images/cape-event-shop.png"
        alt="GM Shop Store window showing Super Cloak levels tv1 through tv20, each costing 1 Adena"
        caption="GM Shop → Cloak — Super Cloak tiers tv1–tv20, each costs 1 Adena (Alt+B)."
        size="md"
      />
    </>
  )
}
