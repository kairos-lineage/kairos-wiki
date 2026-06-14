import PageHero       from '../../components/ui/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import WikiCarousel   from '../../components/ui/WikiCarousel'
import WikiFigure     from '../../components/ui/WikiFigure'
import InfoBox        from '../../components/ui/InfoBox'

const BASE = 'images/lionna/libro-oscuro-dummy/'

const PARTS = [
  {
    id: 'part-1',
    label: 'Secret Part 1',
    slides: [
      { src: `${BASE}dummy-01.png`, alt: 'Location 1',  caption: 'Location 1 of 3 — Secret Part 1' },
      { src: `${BASE}dummy-02.png`, alt: 'Location 2',  caption: 'Location 2 of 3 — Secret Part 1' },
      { src: `${BASE}dummy-03.png`, alt: 'Location 3',  caption: 'Location 3 of 3 — Secret Part 1' },
    ],
  },
  {
    id: 'part-2',
    label: 'Secret Part 2',
    slides: [
      { src: `${BASE}dummy-04.png`, alt: 'Location 4',  caption: 'Location 1 of 3 — Secret Part 2' },
      { src: `${BASE}dummy-05.png`, alt: 'Location 5',  caption: 'Location 2 of 3 — Secret Part 2' },
      { src: `${BASE}dummy-06.png`, alt: 'Location 6',  caption: 'Location 3 of 3 — Secret Part 2' },
    ],
  },
  {
    id: 'part-3',
    label: 'Secret Part 3',
    slides: [
      { src: `${BASE}dummy-07.png`, alt: 'Location 7',  caption: 'Location 1 of 3 — Secret Part 3' },
      { src: `${BASE}dummy-08.png`, alt: 'Location 8',  caption: 'Location 2 of 3 — Secret Part 3' },
      { src: `${BASE}dummy-09.png`, alt: 'Location 9',  caption: 'Location 3 of 3 — Secret Part 3' },
    ],
  },
  {
    id: 'part-4',
    label: 'Secret Part 4',
    slides: [
      { src: `${BASE}dummy-10.png`, alt: 'Location 10', caption: 'Location 1 of 3 — Secret Part 4' },
      { src: `${BASE}dummy-11.png`, alt: 'Location 11', caption: 'Location 2 of 3 — Secret Part 4' },
      { src: `${BASE}dummy-12.png`, alt: 'Location 12', caption: 'Location 3 of 3 — Secret Part 4' },
    ],
  },
]

export default function LionnaLibroOscuro() {
  return (
    <>
      <PageHero
        title="Libro Oscuro"
        tagline="Dummy Quest — collect all 4 Secret Parts across 12 locations."
      />

      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Libro Oscuro</strong> is a custom quest item required for Tattoo progression.
        It is assembled from <strong>4 Secret Parts</strong>, each in different hidden
        locations scattered across the Lineage II world map. Explore, find them all, and combine
        the parts to obtain the final item.
      </p>
      <WikiFigure
        src="images/lionna/libro-oscuro-dummy/libro-oscuro.png"
        alt="Libro Oscuro — final item"
        caption="Libro Oscuro — the finished item, assembled from all 4 Secret Parts."
        size="sm"
      />

      <InfoBox variant="tip" label="How it works">
        <p>
          Visit the 3 locations for each Secret Part to collect it. Once you have all 4 parts —
          <strong> Secret Part 1, 2, 3, and 4</strong> — combine them to create the <strong>Libro Oscuro</strong>.
        </p>
      </InfoBox>

      {PARTS.map((part) => (
        <div key={part.id}>
          <SectionHeading id={part.id}>{part.label}</SectionHeading>
          <WikiCarousel slides={part.slides} />
        </div>
      ))}
    </>
  )
}
