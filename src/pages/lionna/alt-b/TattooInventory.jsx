import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiCarousel   from '../../../components/ui/WikiCarousel'
import InfoBox        from '../../../components/ui/InfoBox'
import TATTOOS        from '../../../data/lionna/tattoo-inventory.json'

const ICONS   = import.meta.env.BASE_URL + 'images/lionna/icons/'
const TATTOO_ICONS = import.meta.env.BASE_URL + 'images/lionna/tattoo/'

const BASE = 'images/lionna/alt-b/'

const SLIDES = Array.from({ length: 9 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return {
    src:     `${BASE}tattoo-inv-${n}.png`,
    alt:     `Tattoo Inventory — page ${i + 1} of 9`,
    caption: `Tattoo Inventory — page ${i + 1} of 9`,
  }
})

export default function TattooInventory() {
  const [search,          setSearch]          = useState('')
  const [filterPage,      setFilterPage]      = useState('')
  const [filterActivate,  setFilterActivate]  = useState('')
  const [filterSource,    setFilterSource]    = useState('')
  const [filterImproved,  setFilterImproved]  = useState('')

  const visible = useMemo(() => {
    const q = search.toLowerCase()
    return TATTOOS.filter(t => {
      if (q && !t.name.toLowerCase().includes(q))                        return false
      if (filterPage     && String(t.page) !== filterPage)               return false
      if (filterActivate && String(t.canActivate) !== filterActivate)    return false
      if (filterSource   && !t.source.toLowerCase().includes(filterSource.toLowerCase())) return false
      if (filterImproved === 'yes' && !t.improved)                       return false
      if (filterImproved === 'no'  &&  t.improved)                       return false
      return true
    })
  }, [search, filterPage, filterActivate, filterSource, filterImproved])

  const hasFilters = search || filterPage || filterActivate || filterSource || filterImproved

  function clearAll() {
    setSearch('')
    setFilterPage('')
    setFilterActivate('')
    setFilterSource('')
    setFilterImproved('')
  }

  return (
    <>
      <PageHero
        title="Tattoo Inventory"
        tagline="Browse all available tattoos — filter by name, page, activation, source, or whether an improved version exists."
      />

      {/* ===== GALLERY ===== */}
      <SectionHeading id="gallery">Inventory Pages</SectionHeading>
      <p>
        The Tattoo Inventory spans <strong>9 pages</strong>. Use the arrows or dots to browse
        each page, or click any image to open it full-size.
      </p>
      <WikiCarousel slides={SLIDES} />

      {/* ===== TABLE ===== */}
      <SectionHeading id="tattoos">All Tattoos</SectionHeading>
      <InfoBox variant="tip" label="Using the Filters">
        <p>
          Search by name to find a specific tattoo, filter by <strong>Page</strong> to see
          only tattoos from one inventory screen, or use <strong>Can Activate</strong> to
          separate passive entries from activatable ones. Source and Improved filters narrow
          down where to farm and whether an upgraded version exists.
        </p>
      </InfoBox>

      <div className="tattoo-filter-bar">
        <input
          type="text"
          className="tattoo-filter-input tattoo-filter-input--wide"
          placeholder="Search by name…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="tattoo-filter-select"
          value={filterPage}
          onChange={e => setFilterPage(e.target.value)}
        >
          <option value="">All pages</option>
          {[1,2,3,4,5,6,7,8,9].map(p => (
            <option key={p} value={String(p)}>Page {p}</option>
          ))}
        </select>
        <select
          className="tattoo-filter-select"
          value={filterActivate}
          onChange={e => setFilterActivate(e.target.value)}
        >
          <option value="">Can Activate — all</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <input
          type="text"
          className="tattoo-filter-input"
          placeholder="Source…"
          value={filterSource}
          onChange={e => setFilterSource(e.target.value)}
        />
        <select
          className="tattoo-filter-select"
          value={filterImproved}
          onChange={e => setFilterImproved(e.target.value)}
        >
          <option value="">Improved — all</option>
          <option value="yes">Has improved</option>
          <option value="no">None</option>
        </select>
        {hasFilters && (
          <button className="tattoo-filter-clear" onClick={clearAll}>
            Clear
          </button>
        )}
      </div>

      <p className="tattoo-filter-count">
        Showing <strong>{visible.length}</strong> of <strong>{TATTOOS.length}</strong> tattoos
      </p>

      <div className="tattoo-table-scroll">
        <div className="zone-table-wrap">
          <table className="wiki-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Page</th>
                <th>Can Activate</th>
                <th>Source</th>
                <th>Improved</th>
              </tr>
            </thead>
            <tbody>
              {visible.length === 0 ? (
                <tr>
                  <td colSpan={5} className="tattoo-no-results">
                    No tattoos match the current filters.
                  </td>
                </tr>
              ) : (
                visible.map((t, i) => (
                  <tr key={i}>
                    <td>
                    <span className="tattoo-name-cell">
                      {t.icon
                        ? <img src={`${TATTOO_ICONS}${t.icon}`} alt="" className="tattoo-row-icon" />
                        : <span className="tattoo-row-icon tattoo-row-icon--empty" />
                      }
                      {t.name || <span className="tattoo-empty">—</span>}
                    </span>
                  </td>
                    <td>{t.page}</td>
                    <td className={t.canActivate ? 'tattoo-yes' : 'tattoo-no'}>
                      {t.canActivate ? '✔' : '✘'}
                    </td>
                    <td>{t.source   || <span className="tattoo-empty">—</span>}</td>
                    <td>{t.improved || <span className="tattoo-empty">—</span>}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== NOTES ===== */}
      <SectionHeading id="notes">Notable Tattoos</SectionHeading>

      {/* LIORAS VENGEANCE */}
      <div className="tattoo-note">
        <img
          src={`${ICONS}lioras-vengance.png`}
          alt="Lioras Vengeance"
          className="tattoo-note__icon"
        />
        <div className="tattoo-note__body">
          <p className="tattoo-note__name">Lioras Vengeance</p>
          <p>
            One of the most painful yet impactful tattoos in the game. A simple jewel that
            boosts your items like nothing else — starting at <strong>level 1</strong> and
            upgradable all the way to <strong>level 1000</strong>. As it climbs through
            levels the stat bonuses grow continuously, making it a long-term investment that
            rewards dedication above all else.
          </p>
          <p>
            Improving it requires accepting the quest{' '}
            <strong>"Improve Your Items"</strong> from the{' '}
            <strong>High Priest of Dawn — Hardcore</strong> NPC in{' '}
            <strong>Giran</strong>. Two farming routes exist: grinding in{' '}
            <strong>Hardcore Zone 1</strong> (slow but passive), or running the{' '}
            <Link to="/lionna/instances/tiat" className="wiki-link">Tiat Instance</Link>{' '}
            — found in{' '}
            <strong>Instance Keeper → Page 2 Hardcore → Row 2, first instance</strong>.
            Tiat has a <strong>1-minute cooldown</strong> so it can be repeated back to
            back, making it by far the fastest path.
          </p>
        </div>
      </div>
      <InfoBox variant="warning" label="Do Not Forget to Activate at Level 1000">
        <p>
          When Lioras Vengeance reaches <strong>level 1000</strong> the stats are{' '}
          <strong>lost</strong> — this is intentional. To make them permanent you must
          activate the tattoo through{' '}
          <strong>Alt+B → Tattoo Inventory → Page 8</strong>. Only after activation do
          the level-1000 bonuses become a permanent passive on your character. Do not
          neglect this step or all the farming effort is wasted.
        </p>
      </InfoBox>

      {/* CHAMPION LV.20 IMPROVED TATTOOS */}
      <div className="tattoo-note">
        <div className="tattoo-note__icons">
          {[
            '7-heroic-audacity-improved-4.png',
            '7-mastery-of-arms-improved-4.png',
            '7-natural-instic-improved-4.png',
            '7-cunning-hunter-improved-4.png',
            '7-balance-of-warrior-improved-4.png',
          ].map(icon => (
            <img key={icon} src={`${TATTOO_ICONS}${icon}`} alt="" className="tattoo-note__icon-sm" />
          ))}
        </div>
        <div className="tattoo-note__body">
          <p className="tattoo-note__name">Champion Lv.20 Improved Tattoos (Page 7)</p>
          <p>
            Five powerful tattoos become available once you reach{' '}
            <strong>Champion level 20</strong>: visit <strong>Asta → Champion 20 Store</strong>{' '}
            to purchase the base versions. The five are{' '}
            <strong>Heroic Audacity Improve</strong>,{' '}
            <strong>Mastery of Arms Improve</strong>,{' '}
            <strong>Natural Instinct</strong>,{' '}
            <strong>Cunning Hunter Improved</strong>, and{' '}
            <strong>Balance of Warrior Improved</strong>.
          </p>
          <p>
            Each tattoo follows a <strong>chain upgrade mechanic</strong> — every improvement
            consumes the previous version, so come prepared with a solid stockpile of{' '}
            <img src={`${ICONS}blue-elmore-coin.png`} alt="Blue Elmore Coin" className="tattoo-inline-icon" />{' '}
            <strong>Blue Elmore Coins</strong>. Farm them in <strong>Zone 26</strong> or, if
            your gear allows it, in <strong>Excellence Extreme</strong> for faster returns.
          </p>
          <p>
            The base tattoos <strong>cannot be activated</strong> — each one must be improved{' '}
            <strong>4 times</strong> before activation becomes possible. Use the same method as
            Lioras Vengeance: accept the quest{' '}
            <strong>"Improve Your Items"</strong> from the{' '}
            <strong>High Priest of Dawn — Hardcore</strong> NPC in <strong>Giran</strong>, then
            loop <strong>Hardcore Zone 1</strong> or the <strong>Tiat Instance</strong>{' '}
            (Instance Keeper → Page 2 Hardcore → Row 2, first instance) until all five reach
            their final form.
          </p>
        </div>
      </div>
    </>
  )
}
