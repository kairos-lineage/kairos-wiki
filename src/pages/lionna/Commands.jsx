import PageHero        from '../../components/ui/PageHero'
import SectionHeading  from '../../components/ui/SectionHeading'
import WikiTable       from '../../components/ui/WikiTable'
import InfoBox         from '../../components/ui/InfoBox'
import { Link }        from 'react-router-dom'

export default function LionnaCommands() {
  return (
    <>
      <PageHero
        title="Commands"
        tagline="Chat commands available on Lionna Multiskill."
      />

      <InfoBox variant="tip" label="How to use">
        <p>Type any command directly into the in-game chat and press Enter. Commands are not case-sensitive.</p>
      </InfoBox>

      {/* ===== GENERAL ===== */}
      <SectionHeading id="general">General Commands</SectionHeading>
      <WikiTable
        columns={['Command', 'Description']}
        rows={[
          [
            <code key="cp">.changepassword</code>,
            'Change your account password.',
          ],
          [
            <code key="farm">.farm</code>,
            <>
              Opens the <Link to="/lionna/auto-farm">Auto Farm</Link> panel.
              Configure your farming behaviour and start automated hunting.
            </>,
          ],
          [
            <code key="offlinefarm">.offlinefarm</code>,
            <>
              Switches the character into <strong>offline farm mode</strong>.{' '}
              <strong>.farm must already be active</strong> — the character will continue
              farming after the game client is fully closed. Offline farm remains active
              until the next server restart.
            </>,
          ],
        ]}
      />

      <InfoBox variant="warning" label="Offline Farm Requirement">
        <p>
          You must start <code>.farm</code> and configure your farming settings <strong>before</strong> triggering{' '}
          <code>.offlinefarm</code>. If Auto Farm is not running, the offline session will not start.
        </p>
      </InfoBox>

      {/* ===== TELEPORT ===== */}
      <SectionHeading id="teleport">Teleport Commands</SectionHeading>
      <p>Instantly teleport to a town. Character must be <strong>out of combat</strong> to use these commands.</p>
      <WikiTable
        columns={['Command', 'Destination']}
        rows={[
          [<code key="aden">.aden</code>,       'Aden Town'],
          [<code key="dion">.dion</code>,       'Dion Town'],
          [<code key="giran">.giran</code>,     'Giran Town'],
          [<code key="gludio">.gludio</code>,   'Gludio Town'],
          [<code key="gludin">.gludin</code>,   'Gludin Village'],
          [<code key="goddard">.goddard</code>, 'Goddard Town'],
          [<code key="heine">.heine</code>,     'Heine Town'],
          [<code key="oren">.oren</code>,       'Oren Town'],
        ]}
      />
    </>
  )
}
