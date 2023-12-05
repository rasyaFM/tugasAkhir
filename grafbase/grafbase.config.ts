import { g, config } from '@grafbase/sdk'

const User = g.model('User', {
  id: g.id(),
  name: g.string().length({min:10, max:25}),
  email: g.string().unique(['id']),
  avatarUrl: g.url(),
  description: g.string().optional(),
  projects: g.relation(() => Project).list().optional(),
})

const Project = g.model('Project', {
  title: g.string().length({min:5}),
  description: g.string(),
  image: g.url(),
  category: g.string().search(),
  ownBy: g.relation(() => User),
})

export default config({
  schema: g,
  
})
