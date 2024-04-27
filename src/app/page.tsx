import { Suspense } from 'react'
import { GitHubProfile } from './components/github-profile'
import { SkeletonProfile } from './components/skeleton-profile'

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-4">
        <h1 className="text-3xl font-semibold">Welcome to our website!</h1>
        <p className="mt-2">This is the homepage content.</p>

        <Suspense fallback={<SkeletonProfile />}>
          <GitHubProfile />
        </Suspense>
      </div>
    </div>
  )
}

export default Home
