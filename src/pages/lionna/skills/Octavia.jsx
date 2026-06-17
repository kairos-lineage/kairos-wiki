import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import InfoBox        from '../../../components/ui/InfoBox'
import skills         from '../../../data/lionna/skills-octavia.json'

function Lightbox({ src, alt, onClose }) {
  return (
    <div className="sk-lightbox" onClick={onClose}>
      <img src={`${BASE}${src}`} alt={alt} onClick={e => e.stopPropagation()} />
      <button className="sk-lightbox-close" onClick={onClose}>✕</button>
    </div>
  )
}

const BASE = import.meta.env.BASE_URL

export default function Octavia() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <PageHero
        title="Octavia"
        tagline="Custom skills learned through the Octavia NPC — unique passive and active abilities."
      />

      <SectionHeading id="skills">Available Skills</SectionHeading>
      <InfoBox variant="tip" label="How it works">
        <p>
          Visit the <strong>Octavia NPC</strong> in-game to learn custom skills.
          Each skill requires specific materials. Click the skill image to see full details.
        </p>
      </InfoBox>

      <div className="sk-table-wrap">
        <table className="sk-table">
          <thead>
            <tr>
              <th className="sk-col-img">Skill</th>
              <th className="sk-col-name">Name</th>
              <th className="sk-col-effects">Effects</th>
              <th className="sk-col-mats">Required Materials</th>
            </tr>
          </thead>
          <tbody>
            {skills.map(skill => (
              <tr key={skill.id}>
                <td className="sk-col-img">
                  <button
                    className="sk-thumb-btn"
                    onClick={() => setLightbox(skill)}
                    title="Click to view details"
                  >
                    <img
                      src={`${BASE}${skill.image}`}
                      alt={skill.name}
                      className="sk-thumb"
                    />
                  </button>
                </td>
                <td className="sk-col-name">
                  <span className="sk-name">{skill.name}</span>
                  <span className="sk-meta">Lv {skill.level} · {skill.type}</span>
                </td>
                <td className="sk-col-effects">
                  <ul className="sk-effects">
                    {skill.effects.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </td>
                <td className="sk-col-mats">
                  {skill.materials.map((mat, i) => (
                    <div key={i} className="sk-mat">
                      <img src={`${BASE}${mat.icon}`} alt={mat.name} className="sk-mat-icon" />
                      <div className="sk-mat-info">
                        <span className="sk-mat-name">{mat.name}</span>
                        <span className="sk-mat-qty">×{mat.qty.toLocaleString()}</span>
                        <Link
                          to={`/lionna/farm-zones/materials?q=${encodeURIComponent(mat.name)}`}
                          className="sk-mat-search"
                        >
                          Find material →
                        </Link>
                      </div>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.image}
          alt={lightbox.name}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}
