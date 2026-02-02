// bump.config.ts
import { defineConfig } from 'bumpp'
import { red, green } from 'yoctocolors'

export default defineConfig({
  // enable git operations by default if you like
  // commit can be true or a template string
  commit: 'release v%s',   // e.g. "release v0.0.983"
  tag: true,
  push: true,

  // this runs *after* bumpp has updated the version (but before commit/tag)
  async execute(ctx) {
    // console.log(ctx)
    const op = ctx as any
    const oldVersion = op.state?.currentVersion
    const newVersion = op.state?.newVersion

    console.log(`version: ${red(oldVersion)} → ${green(newVersion)}`)
  },
})
