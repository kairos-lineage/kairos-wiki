import PageHero       from '../../components/ui/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import WikiCarousel   from '../../components/ui/WikiCarousel'

const slides = [
  { src: 'images/lionna/asta/spoil-set-1.png', alt: 'Spoil Set page 1', caption: 'Spoil Set — page 1' },
  { src: 'images/lionna/asta/spoil-set-2.png', alt: 'Spoil Set page 2', caption: 'Spoil Set — page 2' },
]

export default function AstaNormal() {
  return (
    <>
      <PageHero
        title="Asta — Normal Tattoos"
        tagline="Tattoos available for purchase from Asta under the Normal Tattoos menu."
      />

      <SectionHeading id="spoil-set">Spoil Set</SectionHeading>
      <WikiCarousel slides={slides} />
    </>
  )
}
