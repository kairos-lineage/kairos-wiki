import PageHero       from '../../components/ui/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import WikiFigure     from '../../components/ui/WikiFigure'

const BASE = 'images/lionna/ekimus/'

export default function Ekimus() {
  return (
    <>
      <PageHero
        title="Ekimus"
        tagline="Rewards and sets from the Ekimus Garden event."
      />

      <SectionHeading id="cruma-shield">Cruma Shield</SectionHeading>
      <WikiFigure
        src={`${BASE}cruma-shield.png`}
        alt="Cruma Shield"
        size="lg"
      />

      <SectionHeading id="garden-armor">Garden Armor</SectionHeading>
      <WikiFigure
        src={`${BASE}garden-armor.png`}
        alt="Garden Armor"
        size="lg"
      />

      <SectionHeading id="heaven-set">Heaven Set</SectionHeading>
      <WikiFigure
        src={`${BASE}heaven-set.png`}
        alt="Heaven Set"
        size="lg"
      />

      <SectionHeading id="heaven-skill">Heaven Skill</SectionHeading>
      <WikiFigure
        src={`${BASE}heaven-skill.png`}
        alt="Heaven Skill"
        size="lg"
      />

      <SectionHeading id="mechanical-set">Mechanical Set</SectionHeading>
      <WikiFigure
        src={`${BASE}mechanical-set.png`}
        alt="Mechanical Set"
        size="lg"
      />
    </>
  )
}
